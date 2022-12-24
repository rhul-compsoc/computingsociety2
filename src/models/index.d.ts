import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDiscordEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordEvents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discord_id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly url: string;
  readonly user_count: number;
  readonly start_time: string;
  readonly end_time: string;
  readonly EntityType: string;
  readonly banner_image?: string | null;
  readonly last_updated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscordEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordEvents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discord_id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly url: string;
  readonly user_count: number;
  readonly start_time: string;
  readonly end_time: string;
  readonly EntityType: string;
  readonly banner_image?: string | null;
  readonly last_updated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiscordEvents = LazyLoading extends LazyLoadingDisabled ? EagerDiscordEvents : LazyDiscordEvents

export declare const DiscordEvents: (new (init: ModelInit<DiscordEvents>) => DiscordEvents) & {
  copyOf(source: DiscordEvents, mutator: (draft: MutableModel<DiscordEvents>) => MutableModel<DiscordEvents> | void): DiscordEvents;
}