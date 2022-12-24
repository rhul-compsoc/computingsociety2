// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DiscordEvents } = initSchema(schema);

export {
  DiscordEvents
};