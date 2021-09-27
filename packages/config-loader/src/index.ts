/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Config loading functionality used by Backstage backend, and CLI
 *
 * @packageDocumentation
 */

export { readEnvConfig, loadConfigSchema, mergeConfigSchemas } from './lib';
export type {
  ConfigSchema,
  ConfigSchemaProcessingOptions,
  ConfigVisibility,
  EnvFunc,
  LoadConfigSchemaOptions,
  TransformFunc,
} from './lib';
export { loadConfig } from './loader';
export type { ConfigTarget, LoadConfigOptions, Watch, Remote } from './loader';
