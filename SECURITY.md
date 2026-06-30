# Security

## Supply chain (Mini Shai-Hulud and similar attacks)

This repository uses defenses against npm supply-chain worms such as **Mini Shai-Hulud** (TeamPCP), which compromise packages via CI OIDC token theft and malicious **install lifecycle scripts** (often pulling Bun and `router_init.js`).

### Consumer protections (this repo)

- **pnpm only** — `packageManager`, `engines.pnpm`, and `pnpm-lock.yaml` enforce a single package manager. Enable Corepack so `npm install` / `yarn install` are rejected in this repo (see below). We do **not** use a `preinstall` script: that would run when end users install the published node via npm in n8n.
- **Frozen lockfile** — `pnpm-lock.yaml` is committed; CI uses `pnpm install --frozen-lockfile`.
- **pnpm workspace config** — supply-chain settings live in `pnpm-workspace.yaml` (pnpm 10+ ignores `package.json` → `pnpm`).
- **Blocked install scripts** — only packages in `pnpm-workspace.yaml` → `onlyBuiltDependencies` may run lifecycle scripts. Other packages with scripts are listed in `ignoredBuiltDependencies`. `strictDepBuilds: true` fails on unreviewed scripts.
- **Blocklist scan** — `pnpm run audit:supply-chain` checks the lockfile against `security/compromised-packages.json` and validates pnpm config.
- **Delayed updates** — `minimumReleaseAge` (24h, strict) reduces exposure to freshly published malicious versions.
- **No exotic transitive deps** — `blockExoticSubdeps` blocks git/tarball transitive resolutions.
- **Version overrides** — CVE mitigations use **exact pins** in `pnpm-workspace.yaml` (for example `lodash`, `uuid`, `minimatch`, `form-data`). Do not use `>=`/`^`/`~` ranges in overrides; bump versions deliberately with an updated lockfile and passing audit.

### Enforcing pnpm for contributors

1. **Corepack (recommended)** — blocks other package managers when `packageManager` is set:

   ```bash
   corepack enable
   corepack prepare pnpm@10.19.0 --activate
   pnpm install --frozen-lockfile
   ```

   With Corepack enabled, running `npm install` or `yarn install` in this repo should fail with a package-manager mismatch error.

2. **CI / audit** — `pnpm run audit:supply-chain` fails if alternate lockfiles (`package-lock.json`, `yarn.lock`, etc.) are present or if `packageManager` / `engines.pnpm` are missing.

3. **No `preinstall` hook** — n8n community node packages must not ship lifecycle install scripts (supply-chain risk, and it would break users who install the node from npm into n8n).

### If you may have installed a compromised package

Assume **all secrets on that machine/CI runner are compromised**. Rotate:

- npm tokens and OIDC trusted publishers
- GitHub PATs / App tokens
- Cloud provider keys, Vault tokens, kube credentials

Block egress to known IOC domains (DNS): `git-tanstack.com`, `filev2.getsession.org`, `seed1.getsession.org`, `api.masscan.cloud`.

Check for persistence artifacts: `.claude/router_runtime.js`, malicious `.vscode/tasks.json`, `pgmon.service`, `/tmp/transformers.pyz`.

### Maintainer / publish hardening

- Enable **npm 2FA** and configure **trusted publishing (OIDC)** for `n8n-nodes-itglue` on npmjs.com (Package → **Publishing access** → link this GitHub repo and the `Release` workflow). Releases do **not** use a long-lived `NPM_TOKEN`.
- Releases use [`.github/workflows/release.yml`](.github/workflows/release.yml): frozen lockfile → blocklist scan → **pnpm audit** (high+) → **OSV-Scanner** → build → `npm publish --provenance` via OIDC.
- Never use `pull_request_target` with write permissions + checkout of untrusted PR code.
- Run `pnpm run audit:supply-chain` before release; `prepublishOnly` runs the same check locally.
- CI **fails** on high+ `pnpm audit` findings and OSV lockfile hits (see `supply-chain.yml`).
- **Branch protection (recommended):** require the **Supply chain security** check on `master` before merge; do not auto-merge Dependabot PRs without green CI.

### Blocklist maintenance

- Full Mini Shai-Hulud package list: `security/compromised-packages-blocklist.json`.
- IOC strings and metadata: `security/compromised-packages.json`.
- After new advisories, update the blocklist JSON and run `pnpm run audit:supply-chain`.

### Reporting vulnerabilities

Email **red@4c.gg** or open a private security advisory on GitHub. Do not file public issues for unfixed credential or supply-chain incidents.
