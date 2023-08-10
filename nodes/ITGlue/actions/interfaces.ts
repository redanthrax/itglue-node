import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type ITGlueMap = {
	organization: 'get' | 'update';
	domain: 'get';
};

export type ITGlue = AllEntities<ITGlueMap>;

export type ITGlueOrganization = Entity<ITGlueMap, 'organization'>;
export type ITGlueDomain = Entity<ITGlueMap, 'domain'>;

export type OrganizationProperties = PropertiesOf<ITGlueOrganization>;
export type DomainProperties = PropertiesOf<ITGlueDomain>;