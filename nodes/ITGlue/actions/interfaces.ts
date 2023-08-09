import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type ITGlueMap = {
	organization: 'get';
}

export type ITGlue = AllEntities<ITGlueMap>;

export type ITGlueOrganization = Entity<ITGlueMap, 'organization'>;

export type OrganizationProperties = PropertiesOf<ITGlueOrganization>;