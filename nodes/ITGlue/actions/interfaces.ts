import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type ITGlueMap = {
	configuration: 'get';
	domain: 'get';
	organization: 'get' | 'update' | 'create' | 'bulkUpdate' | 'deleteOrganization';
	password: 'get' | 'getById' | 'create' | 'update' | 'delete';
	flexibleAsset: 'get' | 'getById' | 'create' | 'update' | 'delete';
	contact: 'get' | 'getById' | 'create' | 'update' | 'delete';
};

export type ITGlue = AllEntities<ITGlueMap>;

export type ITGlueConfiguration = Entity<ITGlueMap, 'configuration'>;
export type ITGlueDomain = Entity<ITGlueMap, 'domain'>;
export type ITGlueOrganization = Entity<ITGlueMap, 'organization'>;
export type ITGluePassword = Entity<ITGlueMap, 'password'>;
export type ITGlueFlexibleAsset = Entity<ITGlueMap, 'flexibleAsset'>;
export type ITGlueContact = Entity<ITGlueMap, 'contact'>;

export type ConfigurationProperties = PropertiesOf<ITGlueConfiguration>;
export type DomainProperties = PropertiesOf<ITGlueDomain>;
export type OrganizationProperties = PropertiesOf<ITGlueOrganization>;
export type PasswordProperties = PropertiesOf<ITGluePassword>;
export type FlexibleAssetProperties = PropertiesOf<ITGlueFlexibleAsset>;
export type ContactProperties = PropertiesOf<ITGlueContact>;
