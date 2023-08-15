import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type ITGlueMap = {
	configuration: 'get';
	domain: 'get';
	organization: 'get' | 'update' | 'create';
};

export type ITGlue = AllEntities<ITGlueMap>;

export type ITGlueConfiguration = Entity<ITGlueMap, 'configuration'>;
export type ITGlueDomain = Entity<ITGlueMap, 'domain'>;
export type ITGlueOrganization = Entity<ITGlueMap, 'organization'>;

export type ConfigurationProperties = PropertiesOf<ITGlueConfiguration>;
export type DomainProperties = PropertiesOf<ITGlueDomain>;
export type OrganizationProperties = PropertiesOf<ITGlueOrganization>;