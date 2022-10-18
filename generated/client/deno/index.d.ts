
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model api_key
 * 
 */
export type api_key = {
  api_key: string
}

/**
 * Model leaderboard_row
 * 
 */
export type leaderboard_row = {
  leaderboard_id: number
  profile_id: number
  name: string
  rank: number | null
  rating: number | null
  last_match_time: Date | null
  drops: number | null
  losses: number | null
  streak: number | null
  wins: number | null
  updated_at: Date
  rank_country: number | null
}

/**
 * Model match
 * 
 */
export type match = {
  match_id: number
  name: string | null
  server: string | null
  started: Date | null
  finished: Date | null
  allow_cheats: boolean | null
  difficulty: number | null
  empire_wars_mode: boolean | null
  ending_age: number | null
  full_tech_tree: boolean | null
  game_mode: number | null
  location: number | null
  lock_speed: boolean | null
  lock_teams: boolean | null
  map_size: number | null
  population: number | null
  record_game: boolean | null
  regicide_mode: boolean | null
  resources: number | null
  reveal_map: number | null
  shared_exploration: boolean | null
  speed: number | null
  starting_age: number | null
  sudden_death_mode: boolean | null
  team_positions: boolean | null
  team_together: boolean | null
  treaty_length: number | null
  turbo_mode: boolean | null
  victory: number | null
  internal_leaderboard_id: number | null
  leaderboard_id: number | null
  privacy: number | null
  creator_profile_id: number | null
}

/**
 * Model match_pending
 * 
 */
export type match_pending = {
  profile_id: number
  priority: number
}

/**
 * Model match_raw
 * 
 */
export type match_raw = {
  match_id: number
  json: string
  version: number | null
  error: boolean | null
}

/**
 * Model player
 * 
 */
export type player = {
  match_id: number
  profile_id: number
  civ: number | null
  slot: number
  team: number | null
  color: number | null
  is_ready: number
  status: number
  won: boolean | null
  replay: boolean | null
}

/**
 * Model profile
 * 
 */
export type profile = {
  profile_id: number
  steam_id: string | null
  name: string | null
  clan: string | null
  last_match_time: Date | null
  country: string | null
  avatarhash: string | null
  last_match_fetched_time: Date | null
  last_refresh: Date | null
}

/**
 * Model rating
 * 
 */
export type rating = {
  profile_id: number
  games: number
  rating: number
  date: Date
  leaderboard_id: number
  rating_diff: number | null
}

/**
 * Model setting
 * 
 */
export type setting = {
  component: string
  key: string
  value: string
}

/**
 * Model smaller_match
 * 
 */
export type smaller_match = {
  match_id: number
  name: string | null
  started: number | null
  finished: number | null
  leaderboard_id: number | null
  num_slots: number | null
  has_password: boolean | null
  server: string | null
  map_type: number | null
  average_rating: number | null
  cheats: boolean | null
  ending_age: number | null
  expansion: string | null
  full_tech_tree: boolean | null
  game_type: number | null
  has_custom_content: boolean | null
  lock_speed: boolean | null
  lock_teams: boolean | null
  map_size: number | null
  num_players: number | null
  pop: number | null
  ranked: boolean | null
  rating_type: number | null
  resources: number | null
  rms: string | null
  scenario: string | null
  shared_exploration: boolean | null
  speed: number | null
  starting_age: number | null
  team_positions: boolean | null
  team_together: boolean | null
  treaty_length: number | null
  turbo: boolean | null
  version: string | null
  victory: number | null
  victory_time: number | null
  visibility: number | null
}

/**
 * Model smaller_player
 * 
 */
export type smaller_player = {
  match_id: number
  profile_id: number
  slot: number
  civ: number | null
  team: number | null
  color: number | null
  won: boolean | null
}

/**
 * Model smaller_profile
 * 
 */
export type smaller_profile = {
  profile_id: number
  steam_id: string | null
  name: string | null
  clan: string | null
  last_match_time: Date | null
  country: string | null
  avatarhash: string | null
  last_match_fetched_time: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_keys
 * const api_keys = await prisma.api_key.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Api_keys
   * const api_keys = await prisma.api_key.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.api_key`: Exposes CRUD operations for the **api_key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_keys
    * const api_keys = await prisma.api_key.findMany()
    * ```
    */
  get api_key(): Prisma.api_keyDelegate<GlobalReject>;

  /**
   * `prisma.leaderboard_row`: Exposes CRUD operations for the **leaderboard_row** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaderboard_rows
    * const leaderboard_rows = await prisma.leaderboard_row.findMany()
    * ```
    */
  get leaderboard_row(): Prisma.leaderboard_rowDelegate<GlobalReject>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.matchDelegate<GlobalReject>;

  /**
   * `prisma.match_pending`: Exposes CRUD operations for the **match_pending** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_pendings
    * const match_pendings = await prisma.match_pending.findMany()
    * ```
    */
  get match_pending(): Prisma.match_pendingDelegate<GlobalReject>;

  /**
   * `prisma.match_raw`: Exposes CRUD operations for the **match_raw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_raws
    * const match_raws = await prisma.match_raw.findMany()
    * ```
    */
  get match_raw(): Prisma.match_rawDelegate<GlobalReject>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.playerDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<GlobalReject>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.ratingDelegate<GlobalReject>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.settingDelegate<GlobalReject>;

  /**
   * `prisma.smaller_match`: Exposes CRUD operations for the **smaller_match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Smaller_matches
    * const smaller_matches = await prisma.smaller_match.findMany()
    * ```
    */
  get smaller_match(): Prisma.smaller_matchDelegate<GlobalReject>;

  /**
   * `prisma.smaller_player`: Exposes CRUD operations for the **smaller_player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Smaller_players
    * const smaller_players = await prisma.smaller_player.findMany()
    * ```
    */
  get smaller_player(): Prisma.smaller_playerDelegate<GlobalReject>;

  /**
   * `prisma.smaller_profile`: Exposes CRUD operations for the **smaller_profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Smaller_profiles
    * const smaller_profiles = await prisma.smaller_profile.findMany()
    * ```
    */
  get smaller_profile(): Prisma.smaller_profileDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    api_key: 'api_key',
    leaderboard_row: 'leaderboard_row',
    match: 'match',
    match_pending: 'match_pending',
    match_raw: 'match_raw',
    player: 'player',
    profile: 'profile',
    rating: 'rating',
    setting: 'setting',
    smaller_match: 'smaller_match',
    smaller_player: 'smaller_player',
    smaller_profile: 'smaller_profile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MatchCountOutputType
   */


  export type MatchCountOutputType = {
    player: number
  }

  export type MatchCountOutputTypeSelect = {
    player?: boolean
  }

  export type MatchCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MatchCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MatchCountOutputType
    : S extends undefined
    ? never
    : S extends MatchCountOutputTypeArgs
    ?'include' extends U
    ? MatchCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MatchCountOutputType ? MatchCountOutputType[P] : never
  } 
    : MatchCountOutputType
  : MatchCountOutputType




  // Custom InputTypes

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     * 
    **/
    select?: MatchCountOutputTypeSelect | null
  }



  /**
   * Count Type ProfileCountOutputType
   */


  export type ProfileCountOutputType = {
    leaderboard_row: number
    match: number
    player: number
  }

  export type ProfileCountOutputTypeSelect = {
    leaderboard_row?: boolean
    match?: boolean
    player?: boolean
  }

  export type ProfileCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProfileCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProfileCountOutputType
    : S extends undefined
    ? never
    : S extends ProfileCountOutputTypeArgs
    ?'include' extends U
    ? ProfileCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProfileCountOutputType ? ProfileCountOutputType[P] : never
  } 
    : ProfileCountOutputType
  : ProfileCountOutputType




  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     * 
    **/
    select?: ProfileCountOutputTypeSelect | null
  }



  /**
   * Count Type Smaller_matchCountOutputType
   */


  export type Smaller_matchCountOutputType = {
    smaller_player: number
  }

  export type Smaller_matchCountOutputTypeSelect = {
    smaller_player?: boolean
  }

  export type Smaller_matchCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Smaller_matchCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Smaller_matchCountOutputType
    : S extends undefined
    ? never
    : S extends Smaller_matchCountOutputTypeArgs
    ?'include' extends U
    ? Smaller_matchCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Smaller_matchCountOutputType ? Smaller_matchCountOutputType[P] : never
  } 
    : Smaller_matchCountOutputType
  : Smaller_matchCountOutputType




  // Custom InputTypes

  /**
   * Smaller_matchCountOutputType without action
   */
  export type Smaller_matchCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Smaller_matchCountOutputType
     * 
    **/
    select?: Smaller_matchCountOutputTypeSelect | null
  }



  /**
   * Count Type Smaller_profileCountOutputType
   */


  export type Smaller_profileCountOutputType = {
    smaller_player: number
  }

  export type Smaller_profileCountOutputTypeSelect = {
    smaller_player?: boolean
  }

  export type Smaller_profileCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Smaller_profileCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Smaller_profileCountOutputType
    : S extends undefined
    ? never
    : S extends Smaller_profileCountOutputTypeArgs
    ?'include' extends U
    ? Smaller_profileCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Smaller_profileCountOutputType ? Smaller_profileCountOutputType[P] : never
  } 
    : Smaller_profileCountOutputType
  : Smaller_profileCountOutputType




  // Custom InputTypes

  /**
   * Smaller_profileCountOutputType without action
   */
  export type Smaller_profileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Smaller_profileCountOutputType
     * 
    **/
    select?: Smaller_profileCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model api_key
   */


  export type AggregateApi_key = {
    _count: Api_keyCountAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  export type Api_keyMinAggregateOutputType = {
    api_key: string | null
  }

  export type Api_keyMaxAggregateOutputType = {
    api_key: string | null
  }

  export type Api_keyCountAggregateOutputType = {
    api_key: number
    _all: number
  }


  export type Api_keyMinAggregateInputType = {
    api_key?: true
  }

  export type Api_keyMaxAggregateInputType = {
    api_key?: true
  }

  export type Api_keyCountAggregateInputType = {
    api_key?: true
    _all?: true
  }

  export type Api_keyAggregateArgs = {
    /**
     * Filter which api_key to aggregate.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_keys
    **/
    _count?: true | Api_keyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_keyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_keyMaxAggregateInputType
  }

  export type GetApi_keyAggregateType<T extends Api_keyAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_key]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_key[P]>
      : GetScalarType<T[P], AggregateApi_key[P]>
  }




  export type Api_keyGroupByArgs = {
    where?: api_keyWhereInput
    orderBy?: Enumerable<api_keyOrderByWithAggregationInput>
    by: Array<Api_keyScalarFieldEnum>
    having?: api_keyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_keyCountAggregateInputType | true
    _min?: Api_keyMinAggregateInputType
    _max?: Api_keyMaxAggregateInputType
  }


  export type Api_keyGroupByOutputType = {
    api_key: string
    _count: Api_keyCountAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  type GetApi_keyGroupByPayload<T extends Api_keyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Api_keyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_keyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
            : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
        }
      >
    >


  export type api_keySelect = {
    api_key?: boolean
  }

  export type api_keyGetPayload<
    S extends boolean | null | undefined | api_keyArgs,
    U = keyof S
      > = S extends true
        ? api_key
    : S extends undefined
    ? never
    : S extends api_keyArgs | api_keyFindManyArgs
    ?'include' extends U
    ? api_key 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof api_key ? api_key[P] : never
  } 
    : api_key
  : api_key


  type api_keyCountArgs = Merge<
    Omit<api_keyFindManyArgs, 'select' | 'include'> & {
      select?: Api_keyCountAggregateInputType | true
    }
  >

  export interface api_keyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Api_key that matches the filter.
     * @param {api_keyFindUniqueArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends api_keyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, api_keyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'api_key'> extends True ? CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>> : CheckSelect<T, Prisma__api_keyClient<api_key | null, null>, Prisma__api_keyClient<api_keyGetPayload<T> | null, null>>

    /**
     * Find the first Api_key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends api_keyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, api_keyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'api_key'> extends True ? CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>> : CheckSelect<T, Prisma__api_keyClient<api_key | null, null>, Prisma__api_keyClient<api_keyGetPayload<T> | null, null>>

    /**
     * Find zero or more Api_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_keys
     * const api_keys = await prisma.api_key.findMany()
     * 
     * // Get first 10 Api_keys
     * const api_keys = await prisma.api_key.findMany({ take: 10 })
     * 
     * // Only select the `api_key`
     * const api_keyWithApi_keyOnly = await prisma.api_key.findMany({ select: { api_key: true } })
     * 
    **/
    findMany<T extends api_keyFindManyArgs>(
      args?: SelectSubset<T, api_keyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<api_key>>, PrismaPromise<Array<api_keyGetPayload<T>>>>

    /**
     * Create a Api_key.
     * @param {api_keyCreateArgs} args - Arguments to create a Api_key.
     * @example
     * // Create one Api_key
     * const Api_key = await prisma.api_key.create({
     *   data: {
     *     // ... data to create a Api_key
     *   }
     * })
     * 
    **/
    create<T extends api_keyCreateArgs>(
      args: SelectSubset<T, api_keyCreateArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Create many Api_keys.
     *     @param {api_keyCreateManyArgs} args - Arguments to create many Api_keys.
     *     @example
     *     // Create many Api_keys
     *     const api_key = await prisma.api_key.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends api_keyCreateManyArgs>(
      args?: SelectSubset<T, api_keyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Api_key.
     * @param {api_keyDeleteArgs} args - Arguments to delete one Api_key.
     * @example
     * // Delete one Api_key
     * const Api_key = await prisma.api_key.delete({
     *   where: {
     *     // ... filter to delete one Api_key
     *   }
     * })
     * 
    **/
    delete<T extends api_keyDeleteArgs>(
      args: SelectSubset<T, api_keyDeleteArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Update one Api_key.
     * @param {api_keyUpdateArgs} args - Arguments to update one Api_key.
     * @example
     * // Update one Api_key
     * const api_key = await prisma.api_key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends api_keyUpdateArgs>(
      args: SelectSubset<T, api_keyUpdateArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Delete zero or more Api_keys.
     * @param {api_keyDeleteManyArgs} args - Arguments to filter Api_keys to delete.
     * @example
     * // Delete a few Api_keys
     * const { count } = await prisma.api_key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends api_keyDeleteManyArgs>(
      args?: SelectSubset<T, api_keyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_keys
     * const api_key = await prisma.api_key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends api_keyUpdateManyArgs>(
      args: SelectSubset<T, api_keyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Api_key.
     * @param {api_keyUpsertArgs} args - Arguments to update or create a Api_key.
     * @example
     * // Update or create a Api_key
     * const api_key = await prisma.api_key.upsert({
     *   create: {
     *     // ... data to create a Api_key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_key we want to update
     *   }
     * })
    **/
    upsert<T extends api_keyUpsertArgs>(
      args: SelectSubset<T, api_keyUpsertArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Find one Api_key that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {api_keyFindUniqueOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends api_keyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, api_keyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Find the first Api_key that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends api_keyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, api_keyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__api_keyClient<api_key>, Prisma__api_keyClient<api_keyGetPayload<T>>>

    /**
     * Count the number of Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyCountArgs} args - Arguments to filter Api_keys to count.
     * @example
     * // Count the number of Api_keys
     * const count = await prisma.api_key.count({
     *   where: {
     *     // ... the filter for the Api_keys we want to count
     *   }
     * })
    **/
    count<T extends api_keyCountArgs>(
      args?: Subset<T, api_keyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_keyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Api_keyAggregateArgs>(args: Subset<T, Api_keyAggregateArgs>): PrismaPromise<GetApi_keyAggregateType<T>>

    /**
     * Group by Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Api_keyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Api_keyGroupByArgs['orderBy'] }
        : { orderBy?: Api_keyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Api_keyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_keyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for api_key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__api_keyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * api_key base type for findUnique actions
   */
  export type api_keyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key: findUnique
   */
  export interface api_keyFindUniqueArgs extends api_keyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * api_key base type for findFirst actions
   */
  export type api_keyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Filter, which api_key to fetch.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     * 
    **/
    distinct?: Enumerable<Api_keyScalarFieldEnum>
  }

  /**
   * api_key: findFirst
   */
  export interface api_keyFindFirstArgs extends api_keyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * api_key findMany
   */
  export type api_keyFindManyArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Filter, which api_keys to fetch.
     * 
    **/
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     * 
    **/
    orderBy?: Enumerable<api_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_keys.
     * 
    **/
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Api_keyScalarFieldEnum>
  }


  /**
   * api_key create
   */
  export type api_keyCreateArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * The data needed to create a api_key.
     * 
    **/
    data: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
  }


  /**
   * api_key createMany
   */
  export type api_keyCreateManyArgs = {
    /**
     * The data used to create many api_keys.
     * 
    **/
    data: Enumerable<api_keyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * api_key update
   */
  export type api_keyUpdateArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * The data needed to update a api_key.
     * 
    **/
    data: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
    /**
     * Choose, which api_key to update.
     * 
    **/
    where: api_keyWhereUniqueInput
  }


  /**
   * api_key updateMany
   */
  export type api_keyUpdateManyArgs = {
    /**
     * The data used to update api_keys.
     * 
    **/
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyInput>
    /**
     * Filter which api_keys to update
     * 
    **/
    where?: api_keyWhereInput
  }


  /**
   * api_key upsert
   */
  export type api_keyUpsertArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * The filter to search for the api_key to update in case it exists.
     * 
    **/
    where: api_keyWhereUniqueInput
    /**
     * In case the api_key found by the `where` argument doesn't exist, create a new api_key with this data.
     * 
    **/
    create: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
    /**
     * In case the api_key was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
  }


  /**
   * api_key delete
   */
  export type api_keyDeleteArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
    /**
     * Filter which api_key to delete.
     * 
    **/
    where: api_keyWhereUniqueInput
  }


  /**
   * api_key deleteMany
   */
  export type api_keyDeleteManyArgs = {
    /**
     * Filter which api_keys to delete
     * 
    **/
    where?: api_keyWhereInput
  }


  /**
   * api_key: findUniqueOrThrow
   */
  export type api_keyFindUniqueOrThrowArgs = api_keyFindUniqueArgsBase
      

  /**
   * api_key: findFirstOrThrow
   */
  export type api_keyFindFirstOrThrowArgs = api_keyFindFirstArgsBase
      

  /**
   * api_key without action
   */
  export type api_keyArgs = {
    /**
     * Select specific fields to fetch from the api_key
     * 
    **/
    select?: api_keySelect | null
  }



  /**
   * Model leaderboard_row
   */


  export type AggregateLeaderboard_row = {
    _count: Leaderboard_rowCountAggregateOutputType | null
    _avg: Leaderboard_rowAvgAggregateOutputType | null
    _sum: Leaderboard_rowSumAggregateOutputType | null
    _min: Leaderboard_rowMinAggregateOutputType | null
    _max: Leaderboard_rowMaxAggregateOutputType | null
  }

  export type Leaderboard_rowAvgAggregateOutputType = {
    leaderboard_id: number | null
    profile_id: number | null
    rank: number | null
    rating: number | null
    drops: number | null
    losses: number | null
    streak: number | null
    wins: number | null
    rank_country: number | null
  }

  export type Leaderboard_rowSumAggregateOutputType = {
    leaderboard_id: number | null
    profile_id: number | null
    rank: number | null
    rating: number | null
    drops: number | null
    losses: number | null
    streak: number | null
    wins: number | null
    rank_country: number | null
  }

  export type Leaderboard_rowMinAggregateOutputType = {
    leaderboard_id: number | null
    profile_id: number | null
    name: string | null
    rank: number | null
    rating: number | null
    last_match_time: Date | null
    drops: number | null
    losses: number | null
    streak: number | null
    wins: number | null
    updated_at: Date | null
    rank_country: number | null
  }

  export type Leaderboard_rowMaxAggregateOutputType = {
    leaderboard_id: number | null
    profile_id: number | null
    name: string | null
    rank: number | null
    rating: number | null
    last_match_time: Date | null
    drops: number | null
    losses: number | null
    streak: number | null
    wins: number | null
    updated_at: Date | null
    rank_country: number | null
  }

  export type Leaderboard_rowCountAggregateOutputType = {
    leaderboard_id: number
    profile_id: number
    name: number
    rank: number
    rating: number
    last_match_time: number
    drops: number
    losses: number
    streak: number
    wins: number
    updated_at: number
    rank_country: number
    _all: number
  }


  export type Leaderboard_rowAvgAggregateInputType = {
    leaderboard_id?: true
    profile_id?: true
    rank?: true
    rating?: true
    drops?: true
    losses?: true
    streak?: true
    wins?: true
    rank_country?: true
  }

  export type Leaderboard_rowSumAggregateInputType = {
    leaderboard_id?: true
    profile_id?: true
    rank?: true
    rating?: true
    drops?: true
    losses?: true
    streak?: true
    wins?: true
    rank_country?: true
  }

  export type Leaderboard_rowMinAggregateInputType = {
    leaderboard_id?: true
    profile_id?: true
    name?: true
    rank?: true
    rating?: true
    last_match_time?: true
    drops?: true
    losses?: true
    streak?: true
    wins?: true
    updated_at?: true
    rank_country?: true
  }

  export type Leaderboard_rowMaxAggregateInputType = {
    leaderboard_id?: true
    profile_id?: true
    name?: true
    rank?: true
    rating?: true
    last_match_time?: true
    drops?: true
    losses?: true
    streak?: true
    wins?: true
    updated_at?: true
    rank_country?: true
  }

  export type Leaderboard_rowCountAggregateInputType = {
    leaderboard_id?: true
    profile_id?: true
    name?: true
    rank?: true
    rating?: true
    last_match_time?: true
    drops?: true
    losses?: true
    streak?: true
    wins?: true
    updated_at?: true
    rank_country?: true
    _all?: true
  }

  export type Leaderboard_rowAggregateArgs = {
    /**
     * Filter which leaderboard_row to aggregate.
     * 
    **/
    where?: leaderboard_rowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboard_rows to fetch.
     * 
    **/
    orderBy?: Enumerable<leaderboard_rowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: leaderboard_rowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboard_rows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboard_rows.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leaderboard_rows
    **/
    _count?: true | Leaderboard_rowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leaderboard_rowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leaderboard_rowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leaderboard_rowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leaderboard_rowMaxAggregateInputType
  }

  export type GetLeaderboard_rowAggregateType<T extends Leaderboard_rowAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboard_row]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboard_row[P]>
      : GetScalarType<T[P], AggregateLeaderboard_row[P]>
  }




  export type Leaderboard_rowGroupByArgs = {
    where?: leaderboard_rowWhereInput
    orderBy?: Enumerable<leaderboard_rowOrderByWithAggregationInput>
    by: Array<Leaderboard_rowScalarFieldEnum>
    having?: leaderboard_rowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leaderboard_rowCountAggregateInputType | true
    _avg?: Leaderboard_rowAvgAggregateInputType
    _sum?: Leaderboard_rowSumAggregateInputType
    _min?: Leaderboard_rowMinAggregateInputType
    _max?: Leaderboard_rowMaxAggregateInputType
  }


  export type Leaderboard_rowGroupByOutputType = {
    leaderboard_id: number
    profile_id: number
    name: string
    rank: number | null
    rating: number | null
    last_match_time: Date | null
    drops: number | null
    losses: number | null
    streak: number | null
    wins: number | null
    updated_at: Date
    rank_country: number | null
    _count: Leaderboard_rowCountAggregateOutputType | null
    _avg: Leaderboard_rowAvgAggregateOutputType | null
    _sum: Leaderboard_rowSumAggregateOutputType | null
    _min: Leaderboard_rowMinAggregateOutputType | null
    _max: Leaderboard_rowMaxAggregateOutputType | null
  }

  type GetLeaderboard_rowGroupByPayload<T extends Leaderboard_rowGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Leaderboard_rowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leaderboard_rowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leaderboard_rowGroupByOutputType[P]>
            : GetScalarType<T[P], Leaderboard_rowGroupByOutputType[P]>
        }
      >
    >


  export type leaderboard_rowSelect = {
    leaderboard_id?: boolean
    profile_id?: boolean
    name?: boolean
    rank?: boolean
    rating?: boolean
    last_match_time?: boolean
    drops?: boolean
    losses?: boolean
    streak?: boolean
    wins?: boolean
    updated_at?: boolean
    rank_country?: boolean
    profile?: boolean | profileArgs
  }

  export type leaderboard_rowInclude = {
    profile?: boolean | profileArgs
  }

  export type leaderboard_rowGetPayload<
    S extends boolean | null | undefined | leaderboard_rowArgs,
    U = keyof S
      > = S extends true
        ? leaderboard_row
    : S extends undefined
    ? never
    : S extends leaderboard_rowArgs | leaderboard_rowFindManyArgs
    ?'include' extends U
    ? leaderboard_row  & {
    [P in TrueKeys<S['include']>]:
        P extends 'profile' ? profileGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'profile' ? profileGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof leaderboard_row ? leaderboard_row[P] : never
  } 
    : leaderboard_row
  : leaderboard_row


  type leaderboard_rowCountArgs = Merge<
    Omit<leaderboard_rowFindManyArgs, 'select' | 'include'> & {
      select?: Leaderboard_rowCountAggregateInputType | true
    }
  >

  export interface leaderboard_rowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Leaderboard_row that matches the filter.
     * @param {leaderboard_rowFindUniqueArgs} args - Arguments to find a Leaderboard_row
     * @example
     * // Get one Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends leaderboard_rowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, leaderboard_rowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'leaderboard_row'> extends True ? CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>> : CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row | null, null>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T> | null, null>>

    /**
     * Find the first Leaderboard_row that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboard_rowFindFirstArgs} args - Arguments to find a Leaderboard_row
     * @example
     * // Get one Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends leaderboard_rowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, leaderboard_rowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'leaderboard_row'> extends True ? CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>> : CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row | null, null>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T> | null, null>>

    /**
     * Find zero or more Leaderboard_rows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboard_rowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaderboard_rows
     * const leaderboard_rows = await prisma.leaderboard_row.findMany()
     * 
     * // Get first 10 Leaderboard_rows
     * const leaderboard_rows = await prisma.leaderboard_row.findMany({ take: 10 })
     * 
     * // Only select the `leaderboard_id`
     * const leaderboard_rowWithLeaderboard_idOnly = await prisma.leaderboard_row.findMany({ select: { leaderboard_id: true } })
     * 
    **/
    findMany<T extends leaderboard_rowFindManyArgs>(
      args?: SelectSubset<T, leaderboard_rowFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<leaderboard_row>>, PrismaPromise<Array<leaderboard_rowGetPayload<T>>>>

    /**
     * Create a Leaderboard_row.
     * @param {leaderboard_rowCreateArgs} args - Arguments to create a Leaderboard_row.
     * @example
     * // Create one Leaderboard_row
     * const Leaderboard_row = await prisma.leaderboard_row.create({
     *   data: {
     *     // ... data to create a Leaderboard_row
     *   }
     * })
     * 
    **/
    create<T extends leaderboard_rowCreateArgs>(
      args: SelectSubset<T, leaderboard_rowCreateArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Create many Leaderboard_rows.
     *     @param {leaderboard_rowCreateManyArgs} args - Arguments to create many Leaderboard_rows.
     *     @example
     *     // Create many Leaderboard_rows
     *     const leaderboard_row = await prisma.leaderboard_row.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends leaderboard_rowCreateManyArgs>(
      args?: SelectSubset<T, leaderboard_rowCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Leaderboard_row.
     * @param {leaderboard_rowDeleteArgs} args - Arguments to delete one Leaderboard_row.
     * @example
     * // Delete one Leaderboard_row
     * const Leaderboard_row = await prisma.leaderboard_row.delete({
     *   where: {
     *     // ... filter to delete one Leaderboard_row
     *   }
     * })
     * 
    **/
    delete<T extends leaderboard_rowDeleteArgs>(
      args: SelectSubset<T, leaderboard_rowDeleteArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Update one Leaderboard_row.
     * @param {leaderboard_rowUpdateArgs} args - Arguments to update one Leaderboard_row.
     * @example
     * // Update one Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends leaderboard_rowUpdateArgs>(
      args: SelectSubset<T, leaderboard_rowUpdateArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Delete zero or more Leaderboard_rows.
     * @param {leaderboard_rowDeleteManyArgs} args - Arguments to filter Leaderboard_rows to delete.
     * @example
     * // Delete a few Leaderboard_rows
     * const { count } = await prisma.leaderboard_row.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends leaderboard_rowDeleteManyArgs>(
      args?: SelectSubset<T, leaderboard_rowDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaderboard_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboard_rowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaderboard_rows
     * const leaderboard_row = await prisma.leaderboard_row.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends leaderboard_rowUpdateManyArgs>(
      args: SelectSubset<T, leaderboard_rowUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Leaderboard_row.
     * @param {leaderboard_rowUpsertArgs} args - Arguments to update or create a Leaderboard_row.
     * @example
     * // Update or create a Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.upsert({
     *   create: {
     *     // ... data to create a Leaderboard_row
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaderboard_row we want to update
     *   }
     * })
    **/
    upsert<T extends leaderboard_rowUpsertArgs>(
      args: SelectSubset<T, leaderboard_rowUpsertArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Find one Leaderboard_row that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {leaderboard_rowFindUniqueOrThrowArgs} args - Arguments to find a Leaderboard_row
     * @example
     * // Get one Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends leaderboard_rowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, leaderboard_rowFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Find the first Leaderboard_row that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboard_rowFindFirstOrThrowArgs} args - Arguments to find a Leaderboard_row
     * @example
     * // Get one Leaderboard_row
     * const leaderboard_row = await prisma.leaderboard_row.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends leaderboard_rowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, leaderboard_rowFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__leaderboard_rowClient<leaderboard_row>, Prisma__leaderboard_rowClient<leaderboard_rowGetPayload<T>>>

    /**
     * Count the number of Leaderboard_rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leaderboard_rowCountArgs} args - Arguments to filter Leaderboard_rows to count.
     * @example
     * // Count the number of Leaderboard_rows
     * const count = await prisma.leaderboard_row.count({
     *   where: {
     *     // ... the filter for the Leaderboard_rows we want to count
     *   }
     * })
    **/
    count<T extends leaderboard_rowCountArgs>(
      args?: Subset<T, leaderboard_rowCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leaderboard_rowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaderboard_row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leaderboard_rowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leaderboard_rowAggregateArgs>(args: Subset<T, Leaderboard_rowAggregateArgs>): PrismaPromise<GetLeaderboard_rowAggregateType<T>>

    /**
     * Group by Leaderboard_row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leaderboard_rowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Leaderboard_rowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Leaderboard_rowGroupByArgs['orderBy'] }
        : { orderBy?: Leaderboard_rowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Leaderboard_rowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboard_rowGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for leaderboard_row.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__leaderboard_rowClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends profileArgs = {}>(args?: Subset<T, profileArgs>): CheckSelect<T, Prisma__profileClient<profile | Null>, Prisma__profileClient<profileGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * leaderboard_row base type for findUnique actions
   */
  export type leaderboard_rowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * Filter, which leaderboard_row to fetch.
     * 
    **/
    where: leaderboard_rowWhereUniqueInput
  }

  /**
   * leaderboard_row: findUnique
   */
  export interface leaderboard_rowFindUniqueArgs extends leaderboard_rowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * leaderboard_row base type for findFirst actions
   */
  export type leaderboard_rowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * Filter, which leaderboard_row to fetch.
     * 
    **/
    where?: leaderboard_rowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboard_rows to fetch.
     * 
    **/
    orderBy?: Enumerable<leaderboard_rowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leaderboard_rows.
     * 
    **/
    cursor?: leaderboard_rowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboard_rows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboard_rows.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leaderboard_rows.
     * 
    **/
    distinct?: Enumerable<Leaderboard_rowScalarFieldEnum>
  }

  /**
   * leaderboard_row: findFirst
   */
  export interface leaderboard_rowFindFirstArgs extends leaderboard_rowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * leaderboard_row findMany
   */
  export type leaderboard_rowFindManyArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * Filter, which leaderboard_rows to fetch.
     * 
    **/
    where?: leaderboard_rowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leaderboard_rows to fetch.
     * 
    **/
    orderBy?: Enumerable<leaderboard_rowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leaderboard_rows.
     * 
    **/
    cursor?: leaderboard_rowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leaderboard_rows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leaderboard_rows.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Leaderboard_rowScalarFieldEnum>
  }


  /**
   * leaderboard_row create
   */
  export type leaderboard_rowCreateArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * The data needed to create a leaderboard_row.
     * 
    **/
    data: XOR<leaderboard_rowCreateInput, leaderboard_rowUncheckedCreateInput>
  }


  /**
   * leaderboard_row createMany
   */
  export type leaderboard_rowCreateManyArgs = {
    /**
     * The data used to create many leaderboard_rows.
     * 
    **/
    data: Enumerable<leaderboard_rowCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * leaderboard_row update
   */
  export type leaderboard_rowUpdateArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * The data needed to update a leaderboard_row.
     * 
    **/
    data: XOR<leaderboard_rowUpdateInput, leaderboard_rowUncheckedUpdateInput>
    /**
     * Choose, which leaderboard_row to update.
     * 
    **/
    where: leaderboard_rowWhereUniqueInput
  }


  /**
   * leaderboard_row updateMany
   */
  export type leaderboard_rowUpdateManyArgs = {
    /**
     * The data used to update leaderboard_rows.
     * 
    **/
    data: XOR<leaderboard_rowUpdateManyMutationInput, leaderboard_rowUncheckedUpdateManyInput>
    /**
     * Filter which leaderboard_rows to update
     * 
    **/
    where?: leaderboard_rowWhereInput
  }


  /**
   * leaderboard_row upsert
   */
  export type leaderboard_rowUpsertArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * The filter to search for the leaderboard_row to update in case it exists.
     * 
    **/
    where: leaderboard_rowWhereUniqueInput
    /**
     * In case the leaderboard_row found by the `where` argument doesn't exist, create a new leaderboard_row with this data.
     * 
    **/
    create: XOR<leaderboard_rowCreateInput, leaderboard_rowUncheckedCreateInput>
    /**
     * In case the leaderboard_row was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<leaderboard_rowUpdateInput, leaderboard_rowUncheckedUpdateInput>
  }


  /**
   * leaderboard_row delete
   */
  export type leaderboard_rowDeleteArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
    /**
     * Filter which leaderboard_row to delete.
     * 
    **/
    where: leaderboard_rowWhereUniqueInput
  }


  /**
   * leaderboard_row deleteMany
   */
  export type leaderboard_rowDeleteManyArgs = {
    /**
     * Filter which leaderboard_rows to delete
     * 
    **/
    where?: leaderboard_rowWhereInput
  }


  /**
   * leaderboard_row: findUniqueOrThrow
   */
  export type leaderboard_rowFindUniqueOrThrowArgs = leaderboard_rowFindUniqueArgsBase
      

  /**
   * leaderboard_row: findFirstOrThrow
   */
  export type leaderboard_rowFindFirstOrThrowArgs = leaderboard_rowFindFirstArgsBase
      

  /**
   * leaderboard_row without action
   */
  export type leaderboard_rowArgs = {
    /**
     * Select specific fields to fetch from the leaderboard_row
     * 
    **/
    select?: leaderboard_rowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: leaderboard_rowInclude | null
  }



  /**
   * Model match
   */


  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    match_id: number | null
    difficulty: number | null
    ending_age: number | null
    game_mode: number | null
    location: number | null
    map_size: number | null
    population: number | null
    resources: number | null
    reveal_map: number | null
    speed: number | null
    starting_age: number | null
    treaty_length: number | null
    victory: number | null
    internal_leaderboard_id: number | null
    leaderboard_id: number | null
    privacy: number | null
    creator_profile_id: number | null
  }

  export type MatchSumAggregateOutputType = {
    match_id: number | null
    difficulty: number | null
    ending_age: number | null
    game_mode: number | null
    location: number | null
    map_size: number | null
    population: number | null
    resources: number | null
    reveal_map: number | null
    speed: number | null
    starting_age: number | null
    treaty_length: number | null
    victory: number | null
    internal_leaderboard_id: number | null
    leaderboard_id: number | null
    privacy: number | null
    creator_profile_id: number | null
  }

  export type MatchMinAggregateOutputType = {
    match_id: number | null
    name: string | null
    server: string | null
    started: Date | null
    finished: Date | null
    allow_cheats: boolean | null
    difficulty: number | null
    empire_wars_mode: boolean | null
    ending_age: number | null
    full_tech_tree: boolean | null
    game_mode: number | null
    location: number | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    population: number | null
    record_game: boolean | null
    regicide_mode: boolean | null
    resources: number | null
    reveal_map: number | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    sudden_death_mode: boolean | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo_mode: boolean | null
    victory: number | null
    internal_leaderboard_id: number | null
    leaderboard_id: number | null
    privacy: number | null
    creator_profile_id: number | null
  }

  export type MatchMaxAggregateOutputType = {
    match_id: number | null
    name: string | null
    server: string | null
    started: Date | null
    finished: Date | null
    allow_cheats: boolean | null
    difficulty: number | null
    empire_wars_mode: boolean | null
    ending_age: number | null
    full_tech_tree: boolean | null
    game_mode: number | null
    location: number | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    population: number | null
    record_game: boolean | null
    regicide_mode: boolean | null
    resources: number | null
    reveal_map: number | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    sudden_death_mode: boolean | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo_mode: boolean | null
    victory: number | null
    internal_leaderboard_id: number | null
    leaderboard_id: number | null
    privacy: number | null
    creator_profile_id: number | null
  }

  export type MatchCountAggregateOutputType = {
    match_id: number
    name: number
    server: number
    started: number
    finished: number
    allow_cheats: number
    difficulty: number
    empire_wars_mode: number
    ending_age: number
    full_tech_tree: number
    game_mode: number
    location: number
    lock_speed: number
    lock_teams: number
    map_size: number
    population: number
    record_game: number
    regicide_mode: number
    resources: number
    reveal_map: number
    shared_exploration: number
    speed: number
    starting_age: number
    sudden_death_mode: number
    team_positions: number
    team_together: number
    treaty_length: number
    turbo_mode: number
    victory: number
    internal_leaderboard_id: number
    leaderboard_id: number
    privacy: number
    creator_profile_id: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    match_id?: true
    difficulty?: true
    ending_age?: true
    game_mode?: true
    location?: true
    map_size?: true
    population?: true
    resources?: true
    reveal_map?: true
    speed?: true
    starting_age?: true
    treaty_length?: true
    victory?: true
    internal_leaderboard_id?: true
    leaderboard_id?: true
    privacy?: true
    creator_profile_id?: true
  }

  export type MatchSumAggregateInputType = {
    match_id?: true
    difficulty?: true
    ending_age?: true
    game_mode?: true
    location?: true
    map_size?: true
    population?: true
    resources?: true
    reveal_map?: true
    speed?: true
    starting_age?: true
    treaty_length?: true
    victory?: true
    internal_leaderboard_id?: true
    leaderboard_id?: true
    privacy?: true
    creator_profile_id?: true
  }

  export type MatchMinAggregateInputType = {
    match_id?: true
    name?: true
    server?: true
    started?: true
    finished?: true
    allow_cheats?: true
    difficulty?: true
    empire_wars_mode?: true
    ending_age?: true
    full_tech_tree?: true
    game_mode?: true
    location?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    population?: true
    record_game?: true
    regicide_mode?: true
    resources?: true
    reveal_map?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    sudden_death_mode?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo_mode?: true
    victory?: true
    internal_leaderboard_id?: true
    leaderboard_id?: true
    privacy?: true
    creator_profile_id?: true
  }

  export type MatchMaxAggregateInputType = {
    match_id?: true
    name?: true
    server?: true
    started?: true
    finished?: true
    allow_cheats?: true
    difficulty?: true
    empire_wars_mode?: true
    ending_age?: true
    full_tech_tree?: true
    game_mode?: true
    location?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    population?: true
    record_game?: true
    regicide_mode?: true
    resources?: true
    reveal_map?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    sudden_death_mode?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo_mode?: true
    victory?: true
    internal_leaderboard_id?: true
    leaderboard_id?: true
    privacy?: true
    creator_profile_id?: true
  }

  export type MatchCountAggregateInputType = {
    match_id?: true
    name?: true
    server?: true
    started?: true
    finished?: true
    allow_cheats?: true
    difficulty?: true
    empire_wars_mode?: true
    ending_age?: true
    full_tech_tree?: true
    game_mode?: true
    location?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    population?: true
    record_game?: true
    regicide_mode?: true
    resources?: true
    reveal_map?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    sudden_death_mode?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo_mode?: true
    victory?: true
    internal_leaderboard_id?: true
    leaderboard_id?: true
    privacy?: true
    creator_profile_id?: true
    _all?: true
  }

  export type MatchAggregateArgs = {
    /**
     * Filter which match to aggregate.
     * 
    **/
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     * 
    **/
    orderBy?: Enumerable<matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs = {
    where?: matchWhereInput
    orderBy?: Enumerable<matchOrderByWithAggregationInput>
    by: Array<MatchScalarFieldEnum>
    having?: matchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }


  export type MatchGroupByOutputType = {
    match_id: number
    name: string | null
    server: string | null
    started: Date | null
    finished: Date | null
    allow_cheats: boolean | null
    difficulty: number | null
    empire_wars_mode: boolean | null
    ending_age: number | null
    full_tech_tree: boolean | null
    game_mode: number | null
    location: number | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    population: number | null
    record_game: boolean | null
    regicide_mode: boolean | null
    resources: number | null
    reveal_map: number | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    sudden_death_mode: boolean | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo_mode: boolean | null
    victory: number | null
    internal_leaderboard_id: number | null
    leaderboard_id: number | null
    privacy: number | null
    creator_profile_id: number | null
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type matchSelect = {
    match_id?: boolean
    name?: boolean
    server?: boolean
    started?: boolean
    finished?: boolean
    allow_cheats?: boolean
    difficulty?: boolean
    empire_wars_mode?: boolean
    ending_age?: boolean
    full_tech_tree?: boolean
    game_mode?: boolean
    location?: boolean
    lock_speed?: boolean
    lock_teams?: boolean
    map_size?: boolean
    population?: boolean
    record_game?: boolean
    regicide_mode?: boolean
    resources?: boolean
    reveal_map?: boolean
    shared_exploration?: boolean
    speed?: boolean
    starting_age?: boolean
    sudden_death_mode?: boolean
    team_positions?: boolean
    team_together?: boolean
    treaty_length?: boolean
    turbo_mode?: boolean
    victory?: boolean
    internal_leaderboard_id?: boolean
    leaderboard_id?: boolean
    privacy?: boolean
    creator_profile_id?: boolean
    profile?: boolean | profileArgs
    player?: boolean | playerFindManyArgs
    _count?: boolean | MatchCountOutputTypeArgs
  }

  export type matchInclude = {
    profile?: boolean | profileArgs
    player?: boolean | playerFindManyArgs
    _count?: boolean | MatchCountOutputTypeArgs
  }

  export type matchGetPayload<
    S extends boolean | null | undefined | matchArgs,
    U = keyof S
      > = S extends true
        ? match
    : S extends undefined
    ? never
    : S extends matchArgs | matchFindManyArgs
    ?'include' extends U
    ? match  & {
    [P in TrueKeys<S['include']>]:
        P extends 'profile' ? profileGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'player' ? Array < playerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? MatchCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'profile' ? profileGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'player' ? Array < playerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? MatchCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof match ? match[P] : never
  } 
    : match
  : match


  type matchCountArgs = Merge<
    Omit<matchFindManyArgs, 'select' | 'include'> & {
      select?: MatchCountAggregateInputType | true
    }
  >

  export interface matchDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Match that matches the filter.
     * @param {matchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends matchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, matchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'match'> extends True ? CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>> : CheckSelect<T, Prisma__matchClient<match | null, null>, Prisma__matchClient<matchGetPayload<T> | null, null>>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends matchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, matchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'match'> extends True ? CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>> : CheckSelect<T, Prisma__matchClient<match | null, null>, Prisma__matchClient<matchGetPayload<T> | null, null>>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `match_id`
     * const matchWithMatch_idOnly = await prisma.match.findMany({ select: { match_id: true } })
     * 
    **/
    findMany<T extends matchFindManyArgs>(
      args?: SelectSubset<T, matchFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<match>>, PrismaPromise<Array<matchGetPayload<T>>>>

    /**
     * Create a Match.
     * @param {matchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
    **/
    create<T extends matchCreateArgs>(
      args: SelectSubset<T, matchCreateArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Create many Matches.
     *     @param {matchCreateManyArgs} args - Arguments to create many Matches.
     *     @example
     *     // Create many Matches
     *     const match = await prisma.match.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends matchCreateManyArgs>(
      args?: SelectSubset<T, matchCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {matchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
    **/
    delete<T extends matchDeleteArgs>(
      args: SelectSubset<T, matchDeleteArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Update one Match.
     * @param {matchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends matchUpdateArgs>(
      args: SelectSubset<T, matchUpdateArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Delete zero or more Matches.
     * @param {matchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends matchDeleteManyArgs>(
      args?: SelectSubset<T, matchDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends matchUpdateManyArgs>(
      args: SelectSubset<T, matchUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {matchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
    **/
    upsert<T extends matchUpsertArgs>(
      args: SelectSubset<T, matchUpsertArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Find one Match that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {matchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends matchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, matchFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Find the first Match that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends matchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, matchFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__matchClient<match>, Prisma__matchClient<matchGetPayload<T>>>

    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchCountArgs>(
      args?: Subset<T, matchCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__matchClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends profileArgs = {}>(args?: Subset<T, profileArgs>): CheckSelect<T, Prisma__profileClient<profile | Null>, Prisma__profileClient<profileGetPayload<T> | Null>>;

    player<T extends playerFindManyArgs = {}>(args?: Subset<T, playerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<player>| Null>, PrismaPromise<Array<playerGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * match base type for findUnique actions
   */
  export type matchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * Filter, which match to fetch.
     * 
    **/
    where: matchWhereUniqueInput
  }

  /**
   * match: findUnique
   */
  export interface matchFindUniqueArgs extends matchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match base type for findFirst actions
   */
  export type matchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * Filter, which match to fetch.
     * 
    **/
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     * 
    **/
    orderBy?: Enumerable<matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     * 
    **/
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     * 
    **/
    distinct?: Enumerable<MatchScalarFieldEnum>
  }

  /**
   * match: findFirst
   */
  export interface matchFindFirstArgs extends matchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match findMany
   */
  export type matchFindManyArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * Filter, which matches to fetch.
     * 
    **/
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     * 
    **/
    orderBy?: Enumerable<matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     * 
    **/
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MatchScalarFieldEnum>
  }


  /**
   * match create
   */
  export type matchCreateArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * The data needed to create a match.
     * 
    **/
    data: XOR<matchCreateInput, matchUncheckedCreateInput>
  }


  /**
   * match createMany
   */
  export type matchCreateManyArgs = {
    /**
     * The data used to create many matches.
     * 
    **/
    data: Enumerable<matchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * match update
   */
  export type matchUpdateArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * The data needed to update a match.
     * 
    **/
    data: XOR<matchUpdateInput, matchUncheckedUpdateInput>
    /**
     * Choose, which match to update.
     * 
    **/
    where: matchWhereUniqueInput
  }


  /**
   * match updateMany
   */
  export type matchUpdateManyArgs = {
    /**
     * The data used to update matches.
     * 
    **/
    data: XOR<matchUpdateManyMutationInput, matchUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     * 
    **/
    where?: matchWhereInput
  }


  /**
   * match upsert
   */
  export type matchUpsertArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * The filter to search for the match to update in case it exists.
     * 
    **/
    where: matchWhereUniqueInput
    /**
     * In case the match found by the `where` argument doesn't exist, create a new match with this data.
     * 
    **/
    create: XOR<matchCreateInput, matchUncheckedCreateInput>
    /**
     * In case the match was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<matchUpdateInput, matchUncheckedUpdateInput>
  }


  /**
   * match delete
   */
  export type matchDeleteArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
    /**
     * Filter which match to delete.
     * 
    **/
    where: matchWhereUniqueInput
  }


  /**
   * match deleteMany
   */
  export type matchDeleteManyArgs = {
    /**
     * Filter which matches to delete
     * 
    **/
    where?: matchWhereInput
  }


  /**
   * match: findUniqueOrThrow
   */
  export type matchFindUniqueOrThrowArgs = matchFindUniqueArgsBase
      

  /**
   * match: findFirstOrThrow
   */
  export type matchFindFirstOrThrowArgs = matchFindFirstArgsBase
      

  /**
   * match without action
   */
  export type matchArgs = {
    /**
     * Select specific fields to fetch from the match
     * 
    **/
    select?: matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matchInclude | null
  }



  /**
   * Model match_pending
   */


  export type AggregateMatch_pending = {
    _count: Match_pendingCountAggregateOutputType | null
    _avg: Match_pendingAvgAggregateOutputType | null
    _sum: Match_pendingSumAggregateOutputType | null
    _min: Match_pendingMinAggregateOutputType | null
    _max: Match_pendingMaxAggregateOutputType | null
  }

  export type Match_pendingAvgAggregateOutputType = {
    profile_id: number | null
    priority: number | null
  }

  export type Match_pendingSumAggregateOutputType = {
    profile_id: number | null
    priority: number | null
  }

  export type Match_pendingMinAggregateOutputType = {
    profile_id: number | null
    priority: number | null
  }

  export type Match_pendingMaxAggregateOutputType = {
    profile_id: number | null
    priority: number | null
  }

  export type Match_pendingCountAggregateOutputType = {
    profile_id: number
    priority: number
    _all: number
  }


  export type Match_pendingAvgAggregateInputType = {
    profile_id?: true
    priority?: true
  }

  export type Match_pendingSumAggregateInputType = {
    profile_id?: true
    priority?: true
  }

  export type Match_pendingMinAggregateInputType = {
    profile_id?: true
    priority?: true
  }

  export type Match_pendingMaxAggregateInputType = {
    profile_id?: true
    priority?: true
  }

  export type Match_pendingCountAggregateInputType = {
    profile_id?: true
    priority?: true
    _all?: true
  }

  export type Match_pendingAggregateArgs = {
    /**
     * Filter which match_pending to aggregate.
     * 
    **/
    where?: match_pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pendings to fetch.
     * 
    **/
    orderBy?: Enumerable<match_pendingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: match_pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pendings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pendings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_pendings
    **/
    _count?: true | Match_pendingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_pendingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_pendingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_pendingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_pendingMaxAggregateInputType
  }

  export type GetMatch_pendingAggregateType<T extends Match_pendingAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_pending]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_pending[P]>
      : GetScalarType<T[P], AggregateMatch_pending[P]>
  }




  export type Match_pendingGroupByArgs = {
    where?: match_pendingWhereInput
    orderBy?: Enumerable<match_pendingOrderByWithAggregationInput>
    by: Array<Match_pendingScalarFieldEnum>
    having?: match_pendingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_pendingCountAggregateInputType | true
    _avg?: Match_pendingAvgAggregateInputType
    _sum?: Match_pendingSumAggregateInputType
    _min?: Match_pendingMinAggregateInputType
    _max?: Match_pendingMaxAggregateInputType
  }


  export type Match_pendingGroupByOutputType = {
    profile_id: number
    priority: number
    _count: Match_pendingCountAggregateOutputType | null
    _avg: Match_pendingAvgAggregateOutputType | null
    _sum: Match_pendingSumAggregateOutputType | null
    _min: Match_pendingMinAggregateOutputType | null
    _max: Match_pendingMaxAggregateOutputType | null
  }

  type GetMatch_pendingGroupByPayload<T extends Match_pendingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Match_pendingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_pendingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_pendingGroupByOutputType[P]>
            : GetScalarType<T[P], Match_pendingGroupByOutputType[P]>
        }
      >
    >


  export type match_pendingSelect = {
    profile_id?: boolean
    priority?: boolean
  }

  export type match_pendingGetPayload<
    S extends boolean | null | undefined | match_pendingArgs,
    U = keyof S
      > = S extends true
        ? match_pending
    : S extends undefined
    ? never
    : S extends match_pendingArgs | match_pendingFindManyArgs
    ?'include' extends U
    ? match_pending 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof match_pending ? match_pending[P] : never
  } 
    : match_pending
  : match_pending


  type match_pendingCountArgs = Merge<
    Omit<match_pendingFindManyArgs, 'select' | 'include'> & {
      select?: Match_pendingCountAggregateInputType | true
    }
  >

  export interface match_pendingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Match_pending that matches the filter.
     * @param {match_pendingFindUniqueArgs} args - Arguments to find a Match_pending
     * @example
     * // Get one Match_pending
     * const match_pending = await prisma.match_pending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends match_pendingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, match_pendingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'match_pending'> extends True ? CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>> : CheckSelect<T, Prisma__match_pendingClient<match_pending | null, null>, Prisma__match_pendingClient<match_pendingGetPayload<T> | null, null>>

    /**
     * Find the first Match_pending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pendingFindFirstArgs} args - Arguments to find a Match_pending
     * @example
     * // Get one Match_pending
     * const match_pending = await prisma.match_pending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends match_pendingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, match_pendingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'match_pending'> extends True ? CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>> : CheckSelect<T, Prisma__match_pendingClient<match_pending | null, null>, Prisma__match_pendingClient<match_pendingGetPayload<T> | null, null>>

    /**
     * Find zero or more Match_pendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pendingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_pendings
     * const match_pendings = await prisma.match_pending.findMany()
     * 
     * // Get first 10 Match_pendings
     * const match_pendings = await prisma.match_pending.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const match_pendingWithProfile_idOnly = await prisma.match_pending.findMany({ select: { profile_id: true } })
     * 
    **/
    findMany<T extends match_pendingFindManyArgs>(
      args?: SelectSubset<T, match_pendingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<match_pending>>, PrismaPromise<Array<match_pendingGetPayload<T>>>>

    /**
     * Create a Match_pending.
     * @param {match_pendingCreateArgs} args - Arguments to create a Match_pending.
     * @example
     * // Create one Match_pending
     * const Match_pending = await prisma.match_pending.create({
     *   data: {
     *     // ... data to create a Match_pending
     *   }
     * })
     * 
    **/
    create<T extends match_pendingCreateArgs>(
      args: SelectSubset<T, match_pendingCreateArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Create many Match_pendings.
     *     @param {match_pendingCreateManyArgs} args - Arguments to create many Match_pendings.
     *     @example
     *     // Create many Match_pendings
     *     const match_pending = await prisma.match_pending.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends match_pendingCreateManyArgs>(
      args?: SelectSubset<T, match_pendingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Match_pending.
     * @param {match_pendingDeleteArgs} args - Arguments to delete one Match_pending.
     * @example
     * // Delete one Match_pending
     * const Match_pending = await prisma.match_pending.delete({
     *   where: {
     *     // ... filter to delete one Match_pending
     *   }
     * })
     * 
    **/
    delete<T extends match_pendingDeleteArgs>(
      args: SelectSubset<T, match_pendingDeleteArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Update one Match_pending.
     * @param {match_pendingUpdateArgs} args - Arguments to update one Match_pending.
     * @example
     * // Update one Match_pending
     * const match_pending = await prisma.match_pending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends match_pendingUpdateArgs>(
      args: SelectSubset<T, match_pendingUpdateArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Delete zero or more Match_pendings.
     * @param {match_pendingDeleteManyArgs} args - Arguments to filter Match_pendings to delete.
     * @example
     * // Delete a few Match_pendings
     * const { count } = await prisma.match_pending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends match_pendingDeleteManyArgs>(
      args?: SelectSubset<T, match_pendingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_pendings
     * const match_pending = await prisma.match_pending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends match_pendingUpdateManyArgs>(
      args: SelectSubset<T, match_pendingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_pending.
     * @param {match_pendingUpsertArgs} args - Arguments to update or create a Match_pending.
     * @example
     * // Update or create a Match_pending
     * const match_pending = await prisma.match_pending.upsert({
     *   create: {
     *     // ... data to create a Match_pending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_pending we want to update
     *   }
     * })
    **/
    upsert<T extends match_pendingUpsertArgs>(
      args: SelectSubset<T, match_pendingUpsertArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Find one Match_pending that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {match_pendingFindUniqueOrThrowArgs} args - Arguments to find a Match_pending
     * @example
     * // Get one Match_pending
     * const match_pending = await prisma.match_pending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends match_pendingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, match_pendingFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Find the first Match_pending that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pendingFindFirstOrThrowArgs} args - Arguments to find a Match_pending
     * @example
     * // Get one Match_pending
     * const match_pending = await prisma.match_pending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends match_pendingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, match_pendingFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__match_pendingClient<match_pending>, Prisma__match_pendingClient<match_pendingGetPayload<T>>>

    /**
     * Count the number of Match_pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pendingCountArgs} args - Arguments to filter Match_pendings to count.
     * @example
     * // Count the number of Match_pendings
     * const count = await prisma.match_pending.count({
     *   where: {
     *     // ... the filter for the Match_pendings we want to count
     *   }
     * })
    **/
    count<T extends match_pendingCountArgs>(
      args?: Subset<T, match_pendingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_pendingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_pendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_pendingAggregateArgs>(args: Subset<T, Match_pendingAggregateArgs>): PrismaPromise<GetMatch_pendingAggregateType<T>>

    /**
     * Group by Match_pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_pendingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Match_pendingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Match_pendingGroupByArgs['orderBy'] }
        : { orderBy?: Match_pendingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Match_pendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_pendingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for match_pending.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__match_pendingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * match_pending base type for findUnique actions
   */
  export type match_pendingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * Filter, which match_pending to fetch.
     * 
    **/
    where: match_pendingWhereUniqueInput
  }

  /**
   * match_pending: findUnique
   */
  export interface match_pendingFindUniqueArgs extends match_pendingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match_pending base type for findFirst actions
   */
  export type match_pendingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * Filter, which match_pending to fetch.
     * 
    **/
    where?: match_pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pendings to fetch.
     * 
    **/
    orderBy?: Enumerable<match_pendingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_pendings.
     * 
    **/
    cursor?: match_pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pendings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pendings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_pendings.
     * 
    **/
    distinct?: Enumerable<Match_pendingScalarFieldEnum>
  }

  /**
   * match_pending: findFirst
   */
  export interface match_pendingFindFirstArgs extends match_pendingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match_pending findMany
   */
  export type match_pendingFindManyArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * Filter, which match_pendings to fetch.
     * 
    **/
    where?: match_pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pendings to fetch.
     * 
    **/
    orderBy?: Enumerable<match_pendingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_pendings.
     * 
    **/
    cursor?: match_pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pendings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pendings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Match_pendingScalarFieldEnum>
  }


  /**
   * match_pending create
   */
  export type match_pendingCreateArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * The data needed to create a match_pending.
     * 
    **/
    data: XOR<match_pendingCreateInput, match_pendingUncheckedCreateInput>
  }


  /**
   * match_pending createMany
   */
  export type match_pendingCreateManyArgs = {
    /**
     * The data used to create many match_pendings.
     * 
    **/
    data: Enumerable<match_pendingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * match_pending update
   */
  export type match_pendingUpdateArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * The data needed to update a match_pending.
     * 
    **/
    data: XOR<match_pendingUpdateInput, match_pendingUncheckedUpdateInput>
    /**
     * Choose, which match_pending to update.
     * 
    **/
    where: match_pendingWhereUniqueInput
  }


  /**
   * match_pending updateMany
   */
  export type match_pendingUpdateManyArgs = {
    /**
     * The data used to update match_pendings.
     * 
    **/
    data: XOR<match_pendingUpdateManyMutationInput, match_pendingUncheckedUpdateManyInput>
    /**
     * Filter which match_pendings to update
     * 
    **/
    where?: match_pendingWhereInput
  }


  /**
   * match_pending upsert
   */
  export type match_pendingUpsertArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * The filter to search for the match_pending to update in case it exists.
     * 
    **/
    where: match_pendingWhereUniqueInput
    /**
     * In case the match_pending found by the `where` argument doesn't exist, create a new match_pending with this data.
     * 
    **/
    create: XOR<match_pendingCreateInput, match_pendingUncheckedCreateInput>
    /**
     * In case the match_pending was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<match_pendingUpdateInput, match_pendingUncheckedUpdateInput>
  }


  /**
   * match_pending delete
   */
  export type match_pendingDeleteArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
    /**
     * Filter which match_pending to delete.
     * 
    **/
    where: match_pendingWhereUniqueInput
  }


  /**
   * match_pending deleteMany
   */
  export type match_pendingDeleteManyArgs = {
    /**
     * Filter which match_pendings to delete
     * 
    **/
    where?: match_pendingWhereInput
  }


  /**
   * match_pending: findUniqueOrThrow
   */
  export type match_pendingFindUniqueOrThrowArgs = match_pendingFindUniqueArgsBase
      

  /**
   * match_pending: findFirstOrThrow
   */
  export type match_pendingFindFirstOrThrowArgs = match_pendingFindFirstArgsBase
      

  /**
   * match_pending without action
   */
  export type match_pendingArgs = {
    /**
     * Select specific fields to fetch from the match_pending
     * 
    **/
    select?: match_pendingSelect | null
  }



  /**
   * Model match_raw
   */


  export type AggregateMatch_raw = {
    _count: Match_rawCountAggregateOutputType | null
    _avg: Match_rawAvgAggregateOutputType | null
    _sum: Match_rawSumAggregateOutputType | null
    _min: Match_rawMinAggregateOutputType | null
    _max: Match_rawMaxAggregateOutputType | null
  }

  export type Match_rawAvgAggregateOutputType = {
    match_id: number | null
    version: number | null
  }

  export type Match_rawSumAggregateOutputType = {
    match_id: number | null
    version: number | null
  }

  export type Match_rawMinAggregateOutputType = {
    match_id: number | null
    json: string | null
    version: number | null
    error: boolean | null
  }

  export type Match_rawMaxAggregateOutputType = {
    match_id: number | null
    json: string | null
    version: number | null
    error: boolean | null
  }

  export type Match_rawCountAggregateOutputType = {
    match_id: number
    json: number
    version: number
    error: number
    _all: number
  }


  export type Match_rawAvgAggregateInputType = {
    match_id?: true
    version?: true
  }

  export type Match_rawSumAggregateInputType = {
    match_id?: true
    version?: true
  }

  export type Match_rawMinAggregateInputType = {
    match_id?: true
    json?: true
    version?: true
    error?: true
  }

  export type Match_rawMaxAggregateInputType = {
    match_id?: true
    json?: true
    version?: true
    error?: true
  }

  export type Match_rawCountAggregateInputType = {
    match_id?: true
    json?: true
    version?: true
    error?: true
    _all?: true
  }

  export type Match_rawAggregateArgs = {
    /**
     * Filter which match_raw to aggregate.
     * 
    **/
    where?: match_rawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_raws to fetch.
     * 
    **/
    orderBy?: Enumerable<match_rawOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: match_rawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_raws from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_raws.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_raws
    **/
    _count?: true | Match_rawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_rawAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_rawSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_rawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_rawMaxAggregateInputType
  }

  export type GetMatch_rawAggregateType<T extends Match_rawAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_raw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_raw[P]>
      : GetScalarType<T[P], AggregateMatch_raw[P]>
  }




  export type Match_rawGroupByArgs = {
    where?: match_rawWhereInput
    orderBy?: Enumerable<match_rawOrderByWithAggregationInput>
    by: Array<Match_rawScalarFieldEnum>
    having?: match_rawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_rawCountAggregateInputType | true
    _avg?: Match_rawAvgAggregateInputType
    _sum?: Match_rawSumAggregateInputType
    _min?: Match_rawMinAggregateInputType
    _max?: Match_rawMaxAggregateInputType
  }


  export type Match_rawGroupByOutputType = {
    match_id: number
    json: string
    version: number | null
    error: boolean | null
    _count: Match_rawCountAggregateOutputType | null
    _avg: Match_rawAvgAggregateOutputType | null
    _sum: Match_rawSumAggregateOutputType | null
    _min: Match_rawMinAggregateOutputType | null
    _max: Match_rawMaxAggregateOutputType | null
  }

  type GetMatch_rawGroupByPayload<T extends Match_rawGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Match_rawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_rawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_rawGroupByOutputType[P]>
            : GetScalarType<T[P], Match_rawGroupByOutputType[P]>
        }
      >
    >


  export type match_rawSelect = {
    match_id?: boolean
    json?: boolean
    version?: boolean
    error?: boolean
  }

  export type match_rawGetPayload<
    S extends boolean | null | undefined | match_rawArgs,
    U = keyof S
      > = S extends true
        ? match_raw
    : S extends undefined
    ? never
    : S extends match_rawArgs | match_rawFindManyArgs
    ?'include' extends U
    ? match_raw 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof match_raw ? match_raw[P] : never
  } 
    : match_raw
  : match_raw


  type match_rawCountArgs = Merge<
    Omit<match_rawFindManyArgs, 'select' | 'include'> & {
      select?: Match_rawCountAggregateInputType | true
    }
  >

  export interface match_rawDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Match_raw that matches the filter.
     * @param {match_rawFindUniqueArgs} args - Arguments to find a Match_raw
     * @example
     * // Get one Match_raw
     * const match_raw = await prisma.match_raw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends match_rawFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, match_rawFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'match_raw'> extends True ? CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>> : CheckSelect<T, Prisma__match_rawClient<match_raw | null, null>, Prisma__match_rawClient<match_rawGetPayload<T> | null, null>>

    /**
     * Find the first Match_raw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_rawFindFirstArgs} args - Arguments to find a Match_raw
     * @example
     * // Get one Match_raw
     * const match_raw = await prisma.match_raw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends match_rawFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, match_rawFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'match_raw'> extends True ? CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>> : CheckSelect<T, Prisma__match_rawClient<match_raw | null, null>, Prisma__match_rawClient<match_rawGetPayload<T> | null, null>>

    /**
     * Find zero or more Match_raws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_rawFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_raws
     * const match_raws = await prisma.match_raw.findMany()
     * 
     * // Get first 10 Match_raws
     * const match_raws = await prisma.match_raw.findMany({ take: 10 })
     * 
     * // Only select the `match_id`
     * const match_rawWithMatch_idOnly = await prisma.match_raw.findMany({ select: { match_id: true } })
     * 
    **/
    findMany<T extends match_rawFindManyArgs>(
      args?: SelectSubset<T, match_rawFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<match_raw>>, PrismaPromise<Array<match_rawGetPayload<T>>>>

    /**
     * Create a Match_raw.
     * @param {match_rawCreateArgs} args - Arguments to create a Match_raw.
     * @example
     * // Create one Match_raw
     * const Match_raw = await prisma.match_raw.create({
     *   data: {
     *     // ... data to create a Match_raw
     *   }
     * })
     * 
    **/
    create<T extends match_rawCreateArgs>(
      args: SelectSubset<T, match_rawCreateArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Create many Match_raws.
     *     @param {match_rawCreateManyArgs} args - Arguments to create many Match_raws.
     *     @example
     *     // Create many Match_raws
     *     const match_raw = await prisma.match_raw.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends match_rawCreateManyArgs>(
      args?: SelectSubset<T, match_rawCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Match_raw.
     * @param {match_rawDeleteArgs} args - Arguments to delete one Match_raw.
     * @example
     * // Delete one Match_raw
     * const Match_raw = await prisma.match_raw.delete({
     *   where: {
     *     // ... filter to delete one Match_raw
     *   }
     * })
     * 
    **/
    delete<T extends match_rawDeleteArgs>(
      args: SelectSubset<T, match_rawDeleteArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Update one Match_raw.
     * @param {match_rawUpdateArgs} args - Arguments to update one Match_raw.
     * @example
     * // Update one Match_raw
     * const match_raw = await prisma.match_raw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends match_rawUpdateArgs>(
      args: SelectSubset<T, match_rawUpdateArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Delete zero or more Match_raws.
     * @param {match_rawDeleteManyArgs} args - Arguments to filter Match_raws to delete.
     * @example
     * // Delete a few Match_raws
     * const { count } = await prisma.match_raw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends match_rawDeleteManyArgs>(
      args?: SelectSubset<T, match_rawDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_raws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_rawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_raws
     * const match_raw = await prisma.match_raw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends match_rawUpdateManyArgs>(
      args: SelectSubset<T, match_rawUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_raw.
     * @param {match_rawUpsertArgs} args - Arguments to update or create a Match_raw.
     * @example
     * // Update or create a Match_raw
     * const match_raw = await prisma.match_raw.upsert({
     *   create: {
     *     // ... data to create a Match_raw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_raw we want to update
     *   }
     * })
    **/
    upsert<T extends match_rawUpsertArgs>(
      args: SelectSubset<T, match_rawUpsertArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Find one Match_raw that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {match_rawFindUniqueOrThrowArgs} args - Arguments to find a Match_raw
     * @example
     * // Get one Match_raw
     * const match_raw = await prisma.match_raw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends match_rawFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, match_rawFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Find the first Match_raw that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_rawFindFirstOrThrowArgs} args - Arguments to find a Match_raw
     * @example
     * // Get one Match_raw
     * const match_raw = await prisma.match_raw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends match_rawFindFirstOrThrowArgs>(
      args?: SelectSubset<T, match_rawFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__match_rawClient<match_raw>, Prisma__match_rawClient<match_rawGetPayload<T>>>

    /**
     * Count the number of Match_raws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_rawCountArgs} args - Arguments to filter Match_raws to count.
     * @example
     * // Count the number of Match_raws
     * const count = await prisma.match_raw.count({
     *   where: {
     *     // ... the filter for the Match_raws we want to count
     *   }
     * })
    **/
    count<T extends match_rawCountArgs>(
      args?: Subset<T, match_rawCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_rawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_raw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_rawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_rawAggregateArgs>(args: Subset<T, Match_rawAggregateArgs>): PrismaPromise<GetMatch_rawAggregateType<T>>

    /**
     * Group by Match_raw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_rawGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Match_rawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Match_rawGroupByArgs['orderBy'] }
        : { orderBy?: Match_rawGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Match_rawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_rawGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for match_raw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__match_rawClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * match_raw base type for findUnique actions
   */
  export type match_rawFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * Filter, which match_raw to fetch.
     * 
    **/
    where: match_rawWhereUniqueInput
  }

  /**
   * match_raw: findUnique
   */
  export interface match_rawFindUniqueArgs extends match_rawFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match_raw base type for findFirst actions
   */
  export type match_rawFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * Filter, which match_raw to fetch.
     * 
    **/
    where?: match_rawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_raws to fetch.
     * 
    **/
    orderBy?: Enumerable<match_rawOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_raws.
     * 
    **/
    cursor?: match_rawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_raws from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_raws.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_raws.
     * 
    **/
    distinct?: Enumerable<Match_rawScalarFieldEnum>
  }

  /**
   * match_raw: findFirst
   */
  export interface match_rawFindFirstArgs extends match_rawFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * match_raw findMany
   */
  export type match_rawFindManyArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * Filter, which match_raws to fetch.
     * 
    **/
    where?: match_rawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_raws to fetch.
     * 
    **/
    orderBy?: Enumerable<match_rawOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_raws.
     * 
    **/
    cursor?: match_rawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_raws from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_raws.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Match_rawScalarFieldEnum>
  }


  /**
   * match_raw create
   */
  export type match_rawCreateArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * The data needed to create a match_raw.
     * 
    **/
    data: XOR<match_rawCreateInput, match_rawUncheckedCreateInput>
  }


  /**
   * match_raw createMany
   */
  export type match_rawCreateManyArgs = {
    /**
     * The data used to create many match_raws.
     * 
    **/
    data: Enumerable<match_rawCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * match_raw update
   */
  export type match_rawUpdateArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * The data needed to update a match_raw.
     * 
    **/
    data: XOR<match_rawUpdateInput, match_rawUncheckedUpdateInput>
    /**
     * Choose, which match_raw to update.
     * 
    **/
    where: match_rawWhereUniqueInput
  }


  /**
   * match_raw updateMany
   */
  export type match_rawUpdateManyArgs = {
    /**
     * The data used to update match_raws.
     * 
    **/
    data: XOR<match_rawUpdateManyMutationInput, match_rawUncheckedUpdateManyInput>
    /**
     * Filter which match_raws to update
     * 
    **/
    where?: match_rawWhereInput
  }


  /**
   * match_raw upsert
   */
  export type match_rawUpsertArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * The filter to search for the match_raw to update in case it exists.
     * 
    **/
    where: match_rawWhereUniqueInput
    /**
     * In case the match_raw found by the `where` argument doesn't exist, create a new match_raw with this data.
     * 
    **/
    create: XOR<match_rawCreateInput, match_rawUncheckedCreateInput>
    /**
     * In case the match_raw was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<match_rawUpdateInput, match_rawUncheckedUpdateInput>
  }


  /**
   * match_raw delete
   */
  export type match_rawDeleteArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
    /**
     * Filter which match_raw to delete.
     * 
    **/
    where: match_rawWhereUniqueInput
  }


  /**
   * match_raw deleteMany
   */
  export type match_rawDeleteManyArgs = {
    /**
     * Filter which match_raws to delete
     * 
    **/
    where?: match_rawWhereInput
  }


  /**
   * match_raw: findUniqueOrThrow
   */
  export type match_rawFindUniqueOrThrowArgs = match_rawFindUniqueArgsBase
      

  /**
   * match_raw: findFirstOrThrow
   */
  export type match_rawFindFirstOrThrowArgs = match_rawFindFirstArgsBase
      

  /**
   * match_raw without action
   */
  export type match_rawArgs = {
    /**
     * Select specific fields to fetch from the match_raw
     * 
    **/
    select?: match_rawSelect | null
  }



  /**
   * Model player
   */


  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    civ: number | null
    slot: number | null
    team: number | null
    color: number | null
    is_ready: number | null
    status: number | null
  }

  export type PlayerSumAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    civ: number | null
    slot: number | null
    team: number | null
    color: number | null
    is_ready: number | null
    status: number | null
  }

  export type PlayerMinAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    civ: number | null
    slot: number | null
    team: number | null
    color: number | null
    is_ready: number | null
    status: number | null
    won: boolean | null
    replay: boolean | null
  }

  export type PlayerMaxAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    civ: number | null
    slot: number | null
    team: number | null
    color: number | null
    is_ready: number | null
    status: number | null
    won: boolean | null
    replay: boolean | null
  }

  export type PlayerCountAggregateOutputType = {
    match_id: number
    profile_id: number
    civ: number
    slot: number
    team: number
    color: number
    is_ready: number
    status: number
    won: number
    replay: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    match_id?: true
    profile_id?: true
    civ?: true
    slot?: true
    team?: true
    color?: true
    is_ready?: true
    status?: true
  }

  export type PlayerSumAggregateInputType = {
    match_id?: true
    profile_id?: true
    civ?: true
    slot?: true
    team?: true
    color?: true
    is_ready?: true
    status?: true
  }

  export type PlayerMinAggregateInputType = {
    match_id?: true
    profile_id?: true
    civ?: true
    slot?: true
    team?: true
    color?: true
    is_ready?: true
    status?: true
    won?: true
    replay?: true
  }

  export type PlayerMaxAggregateInputType = {
    match_id?: true
    profile_id?: true
    civ?: true
    slot?: true
    team?: true
    color?: true
    is_ready?: true
    status?: true
    won?: true
    replay?: true
  }

  export type PlayerCountAggregateInputType = {
    match_id?: true
    profile_id?: true
    civ?: true
    slot?: true
    team?: true
    color?: true
    is_ready?: true
    status?: true
    won?: true
    replay?: true
    _all?: true
  }

  export type PlayerAggregateArgs = {
    /**
     * Filter which player to aggregate.
     * 
    **/
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs = {
    where?: playerWhereInput
    orderBy?: Enumerable<playerOrderByWithAggregationInput>
    by: Array<PlayerScalarFieldEnum>
    having?: playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }


  export type PlayerGroupByOutputType = {
    match_id: number
    profile_id: number
    civ: number | null
    slot: number
    team: number | null
    color: number | null
    is_ready: number
    status: number
    won: boolean | null
    replay: boolean | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type playerSelect = {
    match_id?: boolean
    profile_id?: boolean
    civ?: boolean
    slot?: boolean
    team?: boolean
    color?: boolean
    is_ready?: boolean
    status?: boolean
    won?: boolean
    replay?: boolean
    match?: boolean | matchArgs
    profile?: boolean | profileArgs
  }

  export type playerInclude = {
    match?: boolean | matchArgs
    profile?: boolean | profileArgs
  }

  export type playerGetPayload<
    S extends boolean | null | undefined | playerArgs,
    U = keyof S
      > = S extends true
        ? player
    : S extends undefined
    ? never
    : S extends playerArgs | playerFindManyArgs
    ?'include' extends U
    ? player  & {
    [P in TrueKeys<S['include']>]:
        P extends 'match' ? matchGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'profile' ? profileGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'match' ? matchGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'profile' ? profileGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof player ? player[P] : never
  } 
    : player
  : player


  type playerCountArgs = Merge<
    Omit<playerFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCountAggregateInputType | true
    }
  >

  export interface playerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Player that matches the filter.
     * @param {playerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends playerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, playerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'player'> extends True ? CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>> : CheckSelect<T, Prisma__playerClient<player | null, null>, Prisma__playerClient<playerGetPayload<T> | null, null>>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends playerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, playerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'player'> extends True ? CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>> : CheckSelect<T, Prisma__playerClient<player | null, null>, Prisma__playerClient<playerGetPayload<T> | null, null>>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `match_id`
     * const playerWithMatch_idOnly = await prisma.player.findMany({ select: { match_id: true } })
     * 
    **/
    findMany<T extends playerFindManyArgs>(
      args?: SelectSubset<T, playerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<player>>, PrismaPromise<Array<playerGetPayload<T>>>>

    /**
     * Create a Player.
     * @param {playerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends playerCreateArgs>(
      args: SelectSubset<T, playerCreateArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Create many Players.
     *     @param {playerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends playerCreateManyArgs>(
      args?: SelectSubset<T, playerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {playerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends playerDeleteArgs>(
      args: SelectSubset<T, playerDeleteArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Update one Player.
     * @param {playerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends playerUpdateArgs>(
      args: SelectSubset<T, playerUpdateArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Delete zero or more Players.
     * @param {playerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends playerDeleteManyArgs>(
      args?: SelectSubset<T, playerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends playerUpdateManyArgs>(
      args: SelectSubset<T, playerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {playerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends playerUpsertArgs>(
      args: SelectSubset<T, playerUpsertArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Find one Player that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {playerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends playerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, playerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Find the first Player that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends playerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, playerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__playerClient<player>, Prisma__playerClient<playerGetPayload<T>>>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playerCountArgs>(
      args?: Subset<T, playerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__playerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    match<T extends matchArgs = {}>(args?: Subset<T, matchArgs>): CheckSelect<T, Prisma__matchClient<match | Null>, Prisma__matchClient<matchGetPayload<T> | Null>>;

    profile<T extends profileArgs = {}>(args?: Subset<T, profileArgs>): CheckSelect<T, Prisma__profileClient<profile | Null>, Prisma__profileClient<profileGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * player base type for findUnique actions
   */
  export type playerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * Filter, which player to fetch.
     * 
    **/
    where: playerWhereUniqueInput
  }

  /**
   * player: findUnique
   */
  export interface playerFindUniqueArgs extends playerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * player base type for findFirst actions
   */
  export type playerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * Filter, which player to fetch.
     * 
    **/
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     * 
    **/
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     * 
    **/
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }

  /**
   * player: findFirst
   */
  export interface playerFindFirstArgs extends playerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * player findMany
   */
  export type playerFindManyArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * Filter, which players to fetch.
     * 
    **/
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     * 
    **/
    orderBy?: Enumerable<playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     * 
    **/
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * player create
   */
  export type playerCreateArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * The data needed to create a player.
     * 
    **/
    data: XOR<playerCreateInput, playerUncheckedCreateInput>
  }


  /**
   * player createMany
   */
  export type playerCreateManyArgs = {
    /**
     * The data used to create many players.
     * 
    **/
    data: Enumerable<playerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * player update
   */
  export type playerUpdateArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * The data needed to update a player.
     * 
    **/
    data: XOR<playerUpdateInput, playerUncheckedUpdateInput>
    /**
     * Choose, which player to update.
     * 
    **/
    where: playerWhereUniqueInput
  }


  /**
   * player updateMany
   */
  export type playerUpdateManyArgs = {
    /**
     * The data used to update players.
     * 
    **/
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     * 
    **/
    where?: playerWhereInput
  }


  /**
   * player upsert
   */
  export type playerUpsertArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * The filter to search for the player to update in case it exists.
     * 
    **/
    where: playerWhereUniqueInput
    /**
     * In case the player found by the `where` argument doesn't exist, create a new player with this data.
     * 
    **/
    create: XOR<playerCreateInput, playerUncheckedCreateInput>
    /**
     * In case the player was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<playerUpdateInput, playerUncheckedUpdateInput>
  }


  /**
   * player delete
   */
  export type playerDeleteArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
    /**
     * Filter which player to delete.
     * 
    **/
    where: playerWhereUniqueInput
  }


  /**
   * player deleteMany
   */
  export type playerDeleteManyArgs = {
    /**
     * Filter which players to delete
     * 
    **/
    where?: playerWhereInput
  }


  /**
   * player: findUniqueOrThrow
   */
  export type playerFindUniqueOrThrowArgs = playerFindUniqueArgsBase
      

  /**
   * player: findFirstOrThrow
   */
  export type playerFindFirstOrThrowArgs = playerFindFirstArgsBase
      

  /**
   * player without action
   */
  export type playerArgs = {
    /**
     * Select specific fields to fetch from the player
     * 
    **/
    select?: playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: playerInclude | null
  }



  /**
   * Model profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    profile_id: number | null
  }

  export type ProfileSumAggregateOutputType = {
    profile_id: number | null
  }

  export type ProfileMinAggregateOutputType = {
    profile_id: number | null
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
    last_refresh: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    profile_id: number | null
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
    last_refresh: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    profile_id: number
    steam_id: number
    name: number
    clan: number
    last_match_time: number
    country: number
    avatarhash: number
    last_match_fetched_time: number
    last_refresh: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    profile_id?: true
  }

  export type ProfileSumAggregateInputType = {
    profile_id?: true
  }

  export type ProfileMinAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
    last_refresh?: true
  }

  export type ProfileMaxAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
    last_refresh?: true
  }

  export type ProfileCountAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
    last_refresh?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which profile to aggregate.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: profileWhereInput
    orderBy?: Enumerable<profileOrderByWithAggregationInput>
    by: Array<ProfileScalarFieldEnum>
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    profile_id: number
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
    last_refresh: Date | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect = {
    profile_id?: boolean
    steam_id?: boolean
    name?: boolean
    clan?: boolean
    last_match_time?: boolean
    country?: boolean
    avatarhash?: boolean
    last_match_fetched_time?: boolean
    last_refresh?: boolean
    leaderboard_row?: boolean | leaderboard_rowFindManyArgs
    match?: boolean | matchFindManyArgs
    player?: boolean | playerFindManyArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type profileInclude = {
    leaderboard_row?: boolean | leaderboard_rowFindManyArgs
    match?: boolean | matchFindManyArgs
    player?: boolean | playerFindManyArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type profileGetPayload<
    S extends boolean | null | undefined | profileArgs,
    U = keyof S
      > = S extends true
        ? profile
    : S extends undefined
    ? never
    : S extends profileArgs | profileFindManyArgs
    ?'include' extends U
    ? profile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'leaderboard_row' ? Array < leaderboard_rowGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'match' ? Array < matchGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'player' ? Array < playerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'leaderboard_row' ? Array < leaderboard_rowGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'match' ? Array < matchGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'player' ? Array < playerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof profile ? profile[P] : never
  } 
    : profile
  : profile


  type profileCountArgs = Merge<
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface profileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null, null>, Prisma__profileClient<profileGetPayload<T> | null, null>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null, null>, Prisma__profileClient<profileGetPayload<T> | null, null>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.findMany({ select: { profile_id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<profile>>, PrismaPromise<Array<profileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Find one Profile that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, profileFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    leaderboard_row<T extends leaderboard_rowFindManyArgs = {}>(args?: Subset<T, leaderboard_rowFindManyArgs>): CheckSelect<T, PrismaPromise<Array<leaderboard_row>| Null>, PrismaPromise<Array<leaderboard_rowGetPayload<T>>| Null>>;

    match<T extends matchFindManyArgs = {}>(args?: Subset<T, matchFindManyArgs>): CheckSelect<T, PrismaPromise<Array<match>| Null>, PrismaPromise<Array<matchGetPayload<T>>| Null>>;

    player<T extends playerFindManyArgs = {}>(args?: Subset<T, playerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<player>| Null>, PrismaPromise<Array<playerGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * profile base type for findUnique actions
   */
  export type profileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     * 
    **/
    where: profileWhereUniqueInput
  }

  /**
   * profile: findUnique
   */
  export interface profileFindUniqueArgs extends profileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile base type for findFirst actions
   */
  export type profileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * profile: findFirst
   */
  export interface profileFindFirstArgs extends profileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile findMany
   */
  export type profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter, which profiles to fetch.
     * 
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     * 
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile create
   */
  export type profileCreateArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The data needed to create a profile.
     * 
    **/
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs = {
    /**
     * The data used to create many profiles.
     * 
    **/
    data: Enumerable<profileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profile update
   */
  export type profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The data needed to update a profile.
     * 
    **/
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     * 
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs = {
    /**
     * The data used to update profiles.
     * 
    **/
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     * 
    **/
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * The filter to search for the profile to update in case it exists.
     * 
    **/
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     * 
    **/
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
    /**
     * Filter which profile to delete.
     * 
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs = {
    /**
     * Filter which profiles to delete
     * 
    **/
    where?: profileWhereInput
  }


  /**
   * profile: findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs = profileFindUniqueArgsBase
      

  /**
   * profile: findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs = profileFindFirstArgsBase
      

  /**
   * profile without action
   */
  export type profileArgs = {
    /**
     * Select specific fields to fetch from the profile
     * 
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: profileInclude | null
  }



  /**
   * Model rating
   */


  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    profile_id: number | null
    games: number | null
    rating: number | null
    leaderboard_id: number | null
    rating_diff: number | null
  }

  export type RatingSumAggregateOutputType = {
    profile_id: number | null
    games: number | null
    rating: number | null
    leaderboard_id: number | null
    rating_diff: number | null
  }

  export type RatingMinAggregateOutputType = {
    profile_id: number | null
    games: number | null
    rating: number | null
    date: Date | null
    leaderboard_id: number | null
    rating_diff: number | null
  }

  export type RatingMaxAggregateOutputType = {
    profile_id: number | null
    games: number | null
    rating: number | null
    date: Date | null
    leaderboard_id: number | null
    rating_diff: number | null
  }

  export type RatingCountAggregateOutputType = {
    profile_id: number
    games: number
    rating: number
    date: number
    leaderboard_id: number
    rating_diff: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    profile_id?: true
    games?: true
    rating?: true
    leaderboard_id?: true
    rating_diff?: true
  }

  export type RatingSumAggregateInputType = {
    profile_id?: true
    games?: true
    rating?: true
    leaderboard_id?: true
    rating_diff?: true
  }

  export type RatingMinAggregateInputType = {
    profile_id?: true
    games?: true
    rating?: true
    date?: true
    leaderboard_id?: true
    rating_diff?: true
  }

  export type RatingMaxAggregateInputType = {
    profile_id?: true
    games?: true
    rating?: true
    date?: true
    leaderboard_id?: true
    rating_diff?: true
  }

  export type RatingCountAggregateInputType = {
    profile_id?: true
    games?: true
    rating?: true
    date?: true
    leaderboard_id?: true
    rating_diff?: true
    _all?: true
  }

  export type RatingAggregateArgs = {
    /**
     * Filter which rating to aggregate.
     * 
    **/
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<ratingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs = {
    where?: ratingWhereInput
    orderBy?: Enumerable<ratingOrderByWithAggregationInput>
    by: Array<RatingScalarFieldEnum>
    having?: ratingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }


  export type RatingGroupByOutputType = {
    profile_id: number
    games: number
    rating: number
    date: Date
    leaderboard_id: number
    rating_diff: number | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type ratingSelect = {
    profile_id?: boolean
    games?: boolean
    rating?: boolean
    date?: boolean
    leaderboard_id?: boolean
    rating_diff?: boolean
  }

  export type ratingGetPayload<
    S extends boolean | null | undefined | ratingArgs,
    U = keyof S
      > = S extends true
        ? rating
    : S extends undefined
    ? never
    : S extends ratingArgs | ratingFindManyArgs
    ?'include' extends U
    ? rating 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof rating ? rating[P] : never
  } 
    : rating
  : rating


  type ratingCountArgs = Merge<
    Omit<ratingFindManyArgs, 'select' | 'include'> & {
      select?: RatingCountAggregateInputType | true
    }
  >

  export interface ratingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Rating that matches the filter.
     * @param {ratingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ratingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ratingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'rating'> extends True ? CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>> : CheckSelect<T, Prisma__ratingClient<rating | null, null>, Prisma__ratingClient<ratingGetPayload<T> | null, null>>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ratingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ratingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'rating'> extends True ? CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>> : CheckSelect<T, Prisma__ratingClient<rating | null, null>, Prisma__ratingClient<ratingGetPayload<T> | null, null>>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const ratingWithProfile_idOnly = await prisma.rating.findMany({ select: { profile_id: true } })
     * 
    **/
    findMany<T extends ratingFindManyArgs>(
      args?: SelectSubset<T, ratingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<rating>>, PrismaPromise<Array<ratingGetPayload<T>>>>

    /**
     * Create a Rating.
     * @param {ratingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
    **/
    create<T extends ratingCreateArgs>(
      args: SelectSubset<T, ratingCreateArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Create many Ratings.
     *     @param {ratingCreateManyArgs} args - Arguments to create many Ratings.
     *     @example
     *     // Create many Ratings
     *     const rating = await prisma.rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ratingCreateManyArgs>(
      args?: SelectSubset<T, ratingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {ratingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
    **/
    delete<T extends ratingDeleteArgs>(
      args: SelectSubset<T, ratingDeleteArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Update one Rating.
     * @param {ratingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ratingUpdateArgs>(
      args: SelectSubset<T, ratingUpdateArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Delete zero or more Ratings.
     * @param {ratingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ratingDeleteManyArgs>(
      args?: SelectSubset<T, ratingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ratingUpdateManyArgs>(
      args: SelectSubset<T, ratingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {ratingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
    **/
    upsert<T extends ratingUpsertArgs>(
      args: SelectSubset<T, ratingUpsertArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Find one Rating that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ratingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ratingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ratingFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Find the first Rating that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ratingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ratingFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ratingClient<rating>, Prisma__ratingClient<ratingGetPayload<T>>>

    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingCountArgs>(
      args?: Subset<T, ratingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ratingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * rating base type for findUnique actions
   */
  export type ratingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * Filter, which rating to fetch.
     * 
    **/
    where: ratingWhereUniqueInput
  }

  /**
   * rating: findUnique
   */
  export interface ratingFindUniqueArgs extends ratingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rating base type for findFirst actions
   */
  export type ratingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * Filter, which rating to fetch.
     * 
    **/
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<ratingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     * 
    **/
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     * 
    **/
    distinct?: Enumerable<RatingScalarFieldEnum>
  }

  /**
   * rating: findFirst
   */
  export interface ratingFindFirstArgs extends ratingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rating findMany
   */
  export type ratingFindManyArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * Filter, which ratings to fetch.
     * 
    **/
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     * 
    **/
    orderBy?: Enumerable<ratingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     * 
    **/
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RatingScalarFieldEnum>
  }


  /**
   * rating create
   */
  export type ratingCreateArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * The data needed to create a rating.
     * 
    **/
    data: XOR<ratingCreateInput, ratingUncheckedCreateInput>
  }


  /**
   * rating createMany
   */
  export type ratingCreateManyArgs = {
    /**
     * The data used to create many ratings.
     * 
    **/
    data: Enumerable<ratingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * rating update
   */
  export type ratingUpdateArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * The data needed to update a rating.
     * 
    **/
    data: XOR<ratingUpdateInput, ratingUncheckedUpdateInput>
    /**
     * Choose, which rating to update.
     * 
    **/
    where: ratingWhereUniqueInput
  }


  /**
   * rating updateMany
   */
  export type ratingUpdateManyArgs = {
    /**
     * The data used to update ratings.
     * 
    **/
    data: XOR<ratingUpdateManyMutationInput, ratingUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     * 
    **/
    where?: ratingWhereInput
  }


  /**
   * rating upsert
   */
  export type ratingUpsertArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * The filter to search for the rating to update in case it exists.
     * 
    **/
    where: ratingWhereUniqueInput
    /**
     * In case the rating found by the `where` argument doesn't exist, create a new rating with this data.
     * 
    **/
    create: XOR<ratingCreateInput, ratingUncheckedCreateInput>
    /**
     * In case the rating was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ratingUpdateInput, ratingUncheckedUpdateInput>
  }


  /**
   * rating delete
   */
  export type ratingDeleteArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
    /**
     * Filter which rating to delete.
     * 
    **/
    where: ratingWhereUniqueInput
  }


  /**
   * rating deleteMany
   */
  export type ratingDeleteManyArgs = {
    /**
     * Filter which ratings to delete
     * 
    **/
    where?: ratingWhereInput
  }


  /**
   * rating: findUniqueOrThrow
   */
  export type ratingFindUniqueOrThrowArgs = ratingFindUniqueArgsBase
      

  /**
   * rating: findFirstOrThrow
   */
  export type ratingFindFirstOrThrowArgs = ratingFindFirstArgsBase
      

  /**
   * rating without action
   */
  export type ratingArgs = {
    /**
     * Select specific fields to fetch from the rating
     * 
    **/
    select?: ratingSelect | null
  }



  /**
   * Model setting
   */


  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    component: string | null
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    component: string | null
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    component: number
    key: number
    value: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    component?: true
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    component?: true
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    component?: true
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs = {
    /**
     * Filter which setting to aggregate.
     * 
    **/
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     * 
    **/
    orderBy?: Enumerable<settingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs = {
    where?: settingWhereInput
    orderBy?: Enumerable<settingOrderByWithAggregationInput>
    by: Array<SettingScalarFieldEnum>
    having?: settingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }


  export type SettingGroupByOutputType = {
    component: string
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type settingSelect = {
    component?: boolean
    key?: boolean
    value?: boolean
  }

  export type settingGetPayload<
    S extends boolean | null | undefined | settingArgs,
    U = keyof S
      > = S extends true
        ? setting
    : S extends undefined
    ? never
    : S extends settingArgs | settingFindManyArgs
    ?'include' extends U
    ? setting 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof setting ? setting[P] : never
  } 
    : setting
  : setting


  type settingCountArgs = Merge<
    Omit<settingFindManyArgs, 'select' | 'include'> & {
      select?: SettingCountAggregateInputType | true
    }
  >

  export interface settingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Setting that matches the filter.
     * @param {settingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends settingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, settingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'setting'> extends True ? CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>> : CheckSelect<T, Prisma__settingClient<setting | null, null>, Prisma__settingClient<settingGetPayload<T> | null, null>>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends settingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, settingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'setting'> extends True ? CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>> : CheckSelect<T, Prisma__settingClient<setting | null, null>, Prisma__settingClient<settingGetPayload<T> | null, null>>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `component`
     * const settingWithComponentOnly = await prisma.setting.findMany({ select: { component: true } })
     * 
    **/
    findMany<T extends settingFindManyArgs>(
      args?: SelectSubset<T, settingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<setting>>, PrismaPromise<Array<settingGetPayload<T>>>>

    /**
     * Create a Setting.
     * @param {settingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
    **/
    create<T extends settingCreateArgs>(
      args: SelectSubset<T, settingCreateArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Create many Settings.
     *     @param {settingCreateManyArgs} args - Arguments to create many Settings.
     *     @example
     *     // Create many Settings
     *     const setting = await prisma.setting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends settingCreateManyArgs>(
      args?: SelectSubset<T, settingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {settingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
    **/
    delete<T extends settingDeleteArgs>(
      args: SelectSubset<T, settingDeleteArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Update one Setting.
     * @param {settingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends settingUpdateArgs>(
      args: SelectSubset<T, settingUpdateArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Delete zero or more Settings.
     * @param {settingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends settingDeleteManyArgs>(
      args?: SelectSubset<T, settingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends settingUpdateManyArgs>(
      args: SelectSubset<T, settingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {settingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
    **/
    upsert<T extends settingUpsertArgs>(
      args: SelectSubset<T, settingUpsertArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Find one Setting that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {settingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends settingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, settingFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Find the first Setting that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends settingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, settingFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__settingClient<setting>, Prisma__settingClient<settingGetPayload<T>>>

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingCountArgs>(
      args?: Subset<T, settingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__settingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * setting base type for findUnique actions
   */
  export type settingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * Filter, which setting to fetch.
     * 
    **/
    where: settingWhereUniqueInput
  }

  /**
   * setting: findUnique
   */
  export interface settingFindUniqueArgs extends settingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * setting base type for findFirst actions
   */
  export type settingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * Filter, which setting to fetch.
     * 
    **/
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     * 
    **/
    orderBy?: Enumerable<settingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     * 
    **/
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     * 
    **/
    distinct?: Enumerable<SettingScalarFieldEnum>
  }

  /**
   * setting: findFirst
   */
  export interface settingFindFirstArgs extends settingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * setting findMany
   */
  export type settingFindManyArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * Filter, which settings to fetch.
     * 
    **/
    where?: settingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     * 
    **/
    orderBy?: Enumerable<settingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     * 
    **/
    cursor?: settingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SettingScalarFieldEnum>
  }


  /**
   * setting create
   */
  export type settingCreateArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * The data needed to create a setting.
     * 
    **/
    data: XOR<settingCreateInput, settingUncheckedCreateInput>
  }


  /**
   * setting createMany
   */
  export type settingCreateManyArgs = {
    /**
     * The data used to create many settings.
     * 
    **/
    data: Enumerable<settingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * setting update
   */
  export type settingUpdateArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * The data needed to update a setting.
     * 
    **/
    data: XOR<settingUpdateInput, settingUncheckedUpdateInput>
    /**
     * Choose, which setting to update.
     * 
    **/
    where: settingWhereUniqueInput
  }


  /**
   * setting updateMany
   */
  export type settingUpdateManyArgs = {
    /**
     * The data used to update settings.
     * 
    **/
    data: XOR<settingUpdateManyMutationInput, settingUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     * 
    **/
    where?: settingWhereInput
  }


  /**
   * setting upsert
   */
  export type settingUpsertArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * The filter to search for the setting to update in case it exists.
     * 
    **/
    where: settingWhereUniqueInput
    /**
     * In case the setting found by the `where` argument doesn't exist, create a new setting with this data.
     * 
    **/
    create: XOR<settingCreateInput, settingUncheckedCreateInput>
    /**
     * In case the setting was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<settingUpdateInput, settingUncheckedUpdateInput>
  }


  /**
   * setting delete
   */
  export type settingDeleteArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
    /**
     * Filter which setting to delete.
     * 
    **/
    where: settingWhereUniqueInput
  }


  /**
   * setting deleteMany
   */
  export type settingDeleteManyArgs = {
    /**
     * Filter which settings to delete
     * 
    **/
    where?: settingWhereInput
  }


  /**
   * setting: findUniqueOrThrow
   */
  export type settingFindUniqueOrThrowArgs = settingFindUniqueArgsBase
      

  /**
   * setting: findFirstOrThrow
   */
  export type settingFindFirstOrThrowArgs = settingFindFirstArgsBase
      

  /**
   * setting without action
   */
  export type settingArgs = {
    /**
     * Select specific fields to fetch from the setting
     * 
    **/
    select?: settingSelect | null
  }



  /**
   * Model smaller_match
   */


  export type AggregateSmaller_match = {
    _count: Smaller_matchCountAggregateOutputType | null
    _avg: Smaller_matchAvgAggregateOutputType | null
    _sum: Smaller_matchSumAggregateOutputType | null
    _min: Smaller_matchMinAggregateOutputType | null
    _max: Smaller_matchMaxAggregateOutputType | null
  }

  export type Smaller_matchAvgAggregateOutputType = {
    match_id: number | null
    started: number | null
    finished: number | null
    leaderboard_id: number | null
    num_slots: number | null
    map_type: number | null
    average_rating: number | null
    ending_age: number | null
    game_type: number | null
    map_size: number | null
    num_players: number | null
    pop: number | null
    rating_type: number | null
    resources: number | null
    speed: number | null
    starting_age: number | null
    treaty_length: number | null
    victory: number | null
    victory_time: number | null
    visibility: number | null
  }

  export type Smaller_matchSumAggregateOutputType = {
    match_id: number | null
    started: number | null
    finished: number | null
    leaderboard_id: number | null
    num_slots: number | null
    map_type: number | null
    average_rating: number | null
    ending_age: number | null
    game_type: number | null
    map_size: number | null
    num_players: number | null
    pop: number | null
    rating_type: number | null
    resources: number | null
    speed: number | null
    starting_age: number | null
    treaty_length: number | null
    victory: number | null
    victory_time: number | null
    visibility: number | null
  }

  export type Smaller_matchMinAggregateOutputType = {
    match_id: number | null
    name: string | null
    started: number | null
    finished: number | null
    leaderboard_id: number | null
    num_slots: number | null
    has_password: boolean | null
    server: string | null
    map_type: number | null
    average_rating: number | null
    cheats: boolean | null
    ending_age: number | null
    expansion: string | null
    full_tech_tree: boolean | null
    game_type: number | null
    has_custom_content: boolean | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    num_players: number | null
    pop: number | null
    ranked: boolean | null
    rating_type: number | null
    resources: number | null
    rms: string | null
    scenario: string | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo: boolean | null
    version: string | null
    victory: number | null
    victory_time: number | null
    visibility: number | null
  }

  export type Smaller_matchMaxAggregateOutputType = {
    match_id: number | null
    name: string | null
    started: number | null
    finished: number | null
    leaderboard_id: number | null
    num_slots: number | null
    has_password: boolean | null
    server: string | null
    map_type: number | null
    average_rating: number | null
    cheats: boolean | null
    ending_age: number | null
    expansion: string | null
    full_tech_tree: boolean | null
    game_type: number | null
    has_custom_content: boolean | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    num_players: number | null
    pop: number | null
    ranked: boolean | null
    rating_type: number | null
    resources: number | null
    rms: string | null
    scenario: string | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo: boolean | null
    version: string | null
    victory: number | null
    victory_time: number | null
    visibility: number | null
  }

  export type Smaller_matchCountAggregateOutputType = {
    match_id: number
    name: number
    started: number
    finished: number
    leaderboard_id: number
    num_slots: number
    has_password: number
    server: number
    map_type: number
    average_rating: number
    cheats: number
    ending_age: number
    expansion: number
    full_tech_tree: number
    game_type: number
    has_custom_content: number
    lock_speed: number
    lock_teams: number
    map_size: number
    num_players: number
    pop: number
    ranked: number
    rating_type: number
    resources: number
    rms: number
    scenario: number
    shared_exploration: number
    speed: number
    starting_age: number
    team_positions: number
    team_together: number
    treaty_length: number
    turbo: number
    version: number
    victory: number
    victory_time: number
    visibility: number
    _all: number
  }


  export type Smaller_matchAvgAggregateInputType = {
    match_id?: true
    started?: true
    finished?: true
    leaderboard_id?: true
    num_slots?: true
    map_type?: true
    average_rating?: true
    ending_age?: true
    game_type?: true
    map_size?: true
    num_players?: true
    pop?: true
    rating_type?: true
    resources?: true
    speed?: true
    starting_age?: true
    treaty_length?: true
    victory?: true
    victory_time?: true
    visibility?: true
  }

  export type Smaller_matchSumAggregateInputType = {
    match_id?: true
    started?: true
    finished?: true
    leaderboard_id?: true
    num_slots?: true
    map_type?: true
    average_rating?: true
    ending_age?: true
    game_type?: true
    map_size?: true
    num_players?: true
    pop?: true
    rating_type?: true
    resources?: true
    speed?: true
    starting_age?: true
    treaty_length?: true
    victory?: true
    victory_time?: true
    visibility?: true
  }

  export type Smaller_matchMinAggregateInputType = {
    match_id?: true
    name?: true
    started?: true
    finished?: true
    leaderboard_id?: true
    num_slots?: true
    has_password?: true
    server?: true
    map_type?: true
    average_rating?: true
    cheats?: true
    ending_age?: true
    expansion?: true
    full_tech_tree?: true
    game_type?: true
    has_custom_content?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    num_players?: true
    pop?: true
    ranked?: true
    rating_type?: true
    resources?: true
    rms?: true
    scenario?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo?: true
    version?: true
    victory?: true
    victory_time?: true
    visibility?: true
  }

  export type Smaller_matchMaxAggregateInputType = {
    match_id?: true
    name?: true
    started?: true
    finished?: true
    leaderboard_id?: true
    num_slots?: true
    has_password?: true
    server?: true
    map_type?: true
    average_rating?: true
    cheats?: true
    ending_age?: true
    expansion?: true
    full_tech_tree?: true
    game_type?: true
    has_custom_content?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    num_players?: true
    pop?: true
    ranked?: true
    rating_type?: true
    resources?: true
    rms?: true
    scenario?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo?: true
    version?: true
    victory?: true
    victory_time?: true
    visibility?: true
  }

  export type Smaller_matchCountAggregateInputType = {
    match_id?: true
    name?: true
    started?: true
    finished?: true
    leaderboard_id?: true
    num_slots?: true
    has_password?: true
    server?: true
    map_type?: true
    average_rating?: true
    cheats?: true
    ending_age?: true
    expansion?: true
    full_tech_tree?: true
    game_type?: true
    has_custom_content?: true
    lock_speed?: true
    lock_teams?: true
    map_size?: true
    num_players?: true
    pop?: true
    ranked?: true
    rating_type?: true
    resources?: true
    rms?: true
    scenario?: true
    shared_exploration?: true
    speed?: true
    starting_age?: true
    team_positions?: true
    team_together?: true
    treaty_length?: true
    turbo?: true
    version?: true
    victory?: true
    victory_time?: true
    visibility?: true
    _all?: true
  }

  export type Smaller_matchAggregateArgs = {
    /**
     * Filter which smaller_match to aggregate.
     * 
    **/
    where?: smaller_matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_matches to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: smaller_matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_matches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned smaller_matches
    **/
    _count?: true | Smaller_matchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Smaller_matchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Smaller_matchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Smaller_matchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Smaller_matchMaxAggregateInputType
  }

  export type GetSmaller_matchAggregateType<T extends Smaller_matchAggregateArgs> = {
        [P in keyof T & keyof AggregateSmaller_match]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmaller_match[P]>
      : GetScalarType<T[P], AggregateSmaller_match[P]>
  }




  export type Smaller_matchGroupByArgs = {
    where?: smaller_matchWhereInput
    orderBy?: Enumerable<smaller_matchOrderByWithAggregationInput>
    by: Array<Smaller_matchScalarFieldEnum>
    having?: smaller_matchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Smaller_matchCountAggregateInputType | true
    _avg?: Smaller_matchAvgAggregateInputType
    _sum?: Smaller_matchSumAggregateInputType
    _min?: Smaller_matchMinAggregateInputType
    _max?: Smaller_matchMaxAggregateInputType
  }


  export type Smaller_matchGroupByOutputType = {
    match_id: number
    name: string | null
    started: number | null
    finished: number | null
    leaderboard_id: number | null
    num_slots: number | null
    has_password: boolean | null
    server: string | null
    map_type: number | null
    average_rating: number | null
    cheats: boolean | null
    ending_age: number | null
    expansion: string | null
    full_tech_tree: boolean | null
    game_type: number | null
    has_custom_content: boolean | null
    lock_speed: boolean | null
    lock_teams: boolean | null
    map_size: number | null
    num_players: number | null
    pop: number | null
    ranked: boolean | null
    rating_type: number | null
    resources: number | null
    rms: string | null
    scenario: string | null
    shared_exploration: boolean | null
    speed: number | null
    starting_age: number | null
    team_positions: boolean | null
    team_together: boolean | null
    treaty_length: number | null
    turbo: boolean | null
    version: string | null
    victory: number | null
    victory_time: number | null
    visibility: number | null
    _count: Smaller_matchCountAggregateOutputType | null
    _avg: Smaller_matchAvgAggregateOutputType | null
    _sum: Smaller_matchSumAggregateOutputType | null
    _min: Smaller_matchMinAggregateOutputType | null
    _max: Smaller_matchMaxAggregateOutputType | null
  }

  type GetSmaller_matchGroupByPayload<T extends Smaller_matchGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Smaller_matchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Smaller_matchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Smaller_matchGroupByOutputType[P]>
            : GetScalarType<T[P], Smaller_matchGroupByOutputType[P]>
        }
      >
    >


  export type smaller_matchSelect = {
    match_id?: boolean
    name?: boolean
    started?: boolean
    finished?: boolean
    leaderboard_id?: boolean
    num_slots?: boolean
    has_password?: boolean
    server?: boolean
    map_type?: boolean
    average_rating?: boolean
    cheats?: boolean
    ending_age?: boolean
    expansion?: boolean
    full_tech_tree?: boolean
    game_type?: boolean
    has_custom_content?: boolean
    lock_speed?: boolean
    lock_teams?: boolean
    map_size?: boolean
    num_players?: boolean
    pop?: boolean
    ranked?: boolean
    rating_type?: boolean
    resources?: boolean
    rms?: boolean
    scenario?: boolean
    shared_exploration?: boolean
    speed?: boolean
    starting_age?: boolean
    team_positions?: boolean
    team_together?: boolean
    treaty_length?: boolean
    turbo?: boolean
    version?: boolean
    victory?: boolean
    victory_time?: boolean
    visibility?: boolean
    smaller_player?: boolean | smaller_playerFindManyArgs
    _count?: boolean | Smaller_matchCountOutputTypeArgs
  }

  export type smaller_matchInclude = {
    smaller_player?: boolean | smaller_playerFindManyArgs
    _count?: boolean | Smaller_matchCountOutputTypeArgs
  }

  export type smaller_matchGetPayload<
    S extends boolean | null | undefined | smaller_matchArgs,
    U = keyof S
      > = S extends true
        ? smaller_match
    : S extends undefined
    ? never
    : S extends smaller_matchArgs | smaller_matchFindManyArgs
    ?'include' extends U
    ? smaller_match  & {
    [P in TrueKeys<S['include']>]:
        P extends 'smaller_player' ? Array < smaller_playerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? Smaller_matchCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'smaller_player' ? Array < smaller_playerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? Smaller_matchCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof smaller_match ? smaller_match[P] : never
  } 
    : smaller_match
  : smaller_match


  type smaller_matchCountArgs = Merge<
    Omit<smaller_matchFindManyArgs, 'select' | 'include'> & {
      select?: Smaller_matchCountAggregateInputType | true
    }
  >

  export interface smaller_matchDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Smaller_match that matches the filter.
     * @param {smaller_matchFindUniqueArgs} args - Arguments to find a Smaller_match
     * @example
     * // Get one Smaller_match
     * const smaller_match = await prisma.smaller_match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends smaller_matchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, smaller_matchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'smaller_match'> extends True ? CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>> : CheckSelect<T, Prisma__smaller_matchClient<smaller_match | null, null>, Prisma__smaller_matchClient<smaller_matchGetPayload<T> | null, null>>

    /**
     * Find the first Smaller_match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_matchFindFirstArgs} args - Arguments to find a Smaller_match
     * @example
     * // Get one Smaller_match
     * const smaller_match = await prisma.smaller_match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends smaller_matchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, smaller_matchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'smaller_match'> extends True ? CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>> : CheckSelect<T, Prisma__smaller_matchClient<smaller_match | null, null>, Prisma__smaller_matchClient<smaller_matchGetPayload<T> | null, null>>

    /**
     * Find zero or more Smaller_matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_matchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Smaller_matches
     * const smaller_matches = await prisma.smaller_match.findMany()
     * 
     * // Get first 10 Smaller_matches
     * const smaller_matches = await prisma.smaller_match.findMany({ take: 10 })
     * 
     * // Only select the `match_id`
     * const smaller_matchWithMatch_idOnly = await prisma.smaller_match.findMany({ select: { match_id: true } })
     * 
    **/
    findMany<T extends smaller_matchFindManyArgs>(
      args?: SelectSubset<T, smaller_matchFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<smaller_match>>, PrismaPromise<Array<smaller_matchGetPayload<T>>>>

    /**
     * Create a Smaller_match.
     * @param {smaller_matchCreateArgs} args - Arguments to create a Smaller_match.
     * @example
     * // Create one Smaller_match
     * const Smaller_match = await prisma.smaller_match.create({
     *   data: {
     *     // ... data to create a Smaller_match
     *   }
     * })
     * 
    **/
    create<T extends smaller_matchCreateArgs>(
      args: SelectSubset<T, smaller_matchCreateArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Create many Smaller_matches.
     *     @param {smaller_matchCreateManyArgs} args - Arguments to create many Smaller_matches.
     *     @example
     *     // Create many Smaller_matches
     *     const smaller_match = await prisma.smaller_match.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends smaller_matchCreateManyArgs>(
      args?: SelectSubset<T, smaller_matchCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Smaller_match.
     * @param {smaller_matchDeleteArgs} args - Arguments to delete one Smaller_match.
     * @example
     * // Delete one Smaller_match
     * const Smaller_match = await prisma.smaller_match.delete({
     *   where: {
     *     // ... filter to delete one Smaller_match
     *   }
     * })
     * 
    **/
    delete<T extends smaller_matchDeleteArgs>(
      args: SelectSubset<T, smaller_matchDeleteArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Update one Smaller_match.
     * @param {smaller_matchUpdateArgs} args - Arguments to update one Smaller_match.
     * @example
     * // Update one Smaller_match
     * const smaller_match = await prisma.smaller_match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends smaller_matchUpdateArgs>(
      args: SelectSubset<T, smaller_matchUpdateArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Delete zero or more Smaller_matches.
     * @param {smaller_matchDeleteManyArgs} args - Arguments to filter Smaller_matches to delete.
     * @example
     * // Delete a few Smaller_matches
     * const { count } = await prisma.smaller_match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends smaller_matchDeleteManyArgs>(
      args?: SelectSubset<T, smaller_matchDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smaller_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_matchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Smaller_matches
     * const smaller_match = await prisma.smaller_match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends smaller_matchUpdateManyArgs>(
      args: SelectSubset<T, smaller_matchUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Smaller_match.
     * @param {smaller_matchUpsertArgs} args - Arguments to update or create a Smaller_match.
     * @example
     * // Update or create a Smaller_match
     * const smaller_match = await prisma.smaller_match.upsert({
     *   create: {
     *     // ... data to create a Smaller_match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Smaller_match we want to update
     *   }
     * })
    **/
    upsert<T extends smaller_matchUpsertArgs>(
      args: SelectSubset<T, smaller_matchUpsertArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Find one Smaller_match that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {smaller_matchFindUniqueOrThrowArgs} args - Arguments to find a Smaller_match
     * @example
     * // Get one Smaller_match
     * const smaller_match = await prisma.smaller_match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends smaller_matchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, smaller_matchFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Find the first Smaller_match that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_matchFindFirstOrThrowArgs} args - Arguments to find a Smaller_match
     * @example
     * // Get one Smaller_match
     * const smaller_match = await prisma.smaller_match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends smaller_matchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, smaller_matchFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_matchClient<smaller_match>, Prisma__smaller_matchClient<smaller_matchGetPayload<T>>>

    /**
     * Count the number of Smaller_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_matchCountArgs} args - Arguments to filter Smaller_matches to count.
     * @example
     * // Count the number of Smaller_matches
     * const count = await prisma.smaller_match.count({
     *   where: {
     *     // ... the filter for the Smaller_matches we want to count
     *   }
     * })
    **/
    count<T extends smaller_matchCountArgs>(
      args?: Subset<T, smaller_matchCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Smaller_matchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Smaller_match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_matchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Smaller_matchAggregateArgs>(args: Subset<T, Smaller_matchAggregateArgs>): PrismaPromise<GetSmaller_matchAggregateType<T>>

    /**
     * Group by Smaller_match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_matchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Smaller_matchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Smaller_matchGroupByArgs['orderBy'] }
        : { orderBy?: Smaller_matchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Smaller_matchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmaller_matchGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for smaller_match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__smaller_matchClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    smaller_player<T extends smaller_playerFindManyArgs = {}>(args?: Subset<T, smaller_playerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<smaller_player>| Null>, PrismaPromise<Array<smaller_playerGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * smaller_match base type for findUnique actions
   */
  export type smaller_matchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * Filter, which smaller_match to fetch.
     * 
    **/
    where: smaller_matchWhereUniqueInput
  }

  /**
   * smaller_match: findUnique
   */
  export interface smaller_matchFindUniqueArgs extends smaller_matchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_match base type for findFirst actions
   */
  export type smaller_matchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * Filter, which smaller_match to fetch.
     * 
    **/
    where?: smaller_matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_matches to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for smaller_matches.
     * 
    **/
    cursor?: smaller_matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_matches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of smaller_matches.
     * 
    **/
    distinct?: Enumerable<Smaller_matchScalarFieldEnum>
  }

  /**
   * smaller_match: findFirst
   */
  export interface smaller_matchFindFirstArgs extends smaller_matchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_match findMany
   */
  export type smaller_matchFindManyArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * Filter, which smaller_matches to fetch.
     * 
    **/
    where?: smaller_matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_matches to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_matchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing smaller_matches.
     * 
    **/
    cursor?: smaller_matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_matches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_matches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Smaller_matchScalarFieldEnum>
  }


  /**
   * smaller_match create
   */
  export type smaller_matchCreateArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * The data needed to create a smaller_match.
     * 
    **/
    data: XOR<smaller_matchCreateInput, smaller_matchUncheckedCreateInput>
  }


  /**
   * smaller_match createMany
   */
  export type smaller_matchCreateManyArgs = {
    /**
     * The data used to create many smaller_matches.
     * 
    **/
    data: Enumerable<smaller_matchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * smaller_match update
   */
  export type smaller_matchUpdateArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * The data needed to update a smaller_match.
     * 
    **/
    data: XOR<smaller_matchUpdateInput, smaller_matchUncheckedUpdateInput>
    /**
     * Choose, which smaller_match to update.
     * 
    **/
    where: smaller_matchWhereUniqueInput
  }


  /**
   * smaller_match updateMany
   */
  export type smaller_matchUpdateManyArgs = {
    /**
     * The data used to update smaller_matches.
     * 
    **/
    data: XOR<smaller_matchUpdateManyMutationInput, smaller_matchUncheckedUpdateManyInput>
    /**
     * Filter which smaller_matches to update
     * 
    **/
    where?: smaller_matchWhereInput
  }


  /**
   * smaller_match upsert
   */
  export type smaller_matchUpsertArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * The filter to search for the smaller_match to update in case it exists.
     * 
    **/
    where: smaller_matchWhereUniqueInput
    /**
     * In case the smaller_match found by the `where` argument doesn't exist, create a new smaller_match with this data.
     * 
    **/
    create: XOR<smaller_matchCreateInput, smaller_matchUncheckedCreateInput>
    /**
     * In case the smaller_match was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<smaller_matchUpdateInput, smaller_matchUncheckedUpdateInput>
  }


  /**
   * smaller_match delete
   */
  export type smaller_matchDeleteArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
    /**
     * Filter which smaller_match to delete.
     * 
    **/
    where: smaller_matchWhereUniqueInput
  }


  /**
   * smaller_match deleteMany
   */
  export type smaller_matchDeleteManyArgs = {
    /**
     * Filter which smaller_matches to delete
     * 
    **/
    where?: smaller_matchWhereInput
  }


  /**
   * smaller_match: findUniqueOrThrow
   */
  export type smaller_matchFindUniqueOrThrowArgs = smaller_matchFindUniqueArgsBase
      

  /**
   * smaller_match: findFirstOrThrow
   */
  export type smaller_matchFindFirstOrThrowArgs = smaller_matchFindFirstArgsBase
      

  /**
   * smaller_match without action
   */
  export type smaller_matchArgs = {
    /**
     * Select specific fields to fetch from the smaller_match
     * 
    **/
    select?: smaller_matchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_matchInclude | null
  }



  /**
   * Model smaller_player
   */


  export type AggregateSmaller_player = {
    _count: Smaller_playerCountAggregateOutputType | null
    _avg: Smaller_playerAvgAggregateOutputType | null
    _sum: Smaller_playerSumAggregateOutputType | null
    _min: Smaller_playerMinAggregateOutputType | null
    _max: Smaller_playerMaxAggregateOutputType | null
  }

  export type Smaller_playerAvgAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    slot: number | null
    civ: number | null
    team: number | null
    color: number | null
  }

  export type Smaller_playerSumAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    slot: number | null
    civ: number | null
    team: number | null
    color: number | null
  }

  export type Smaller_playerMinAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    slot: number | null
    civ: number | null
    team: number | null
    color: number | null
    won: boolean | null
  }

  export type Smaller_playerMaxAggregateOutputType = {
    match_id: number | null
    profile_id: number | null
    slot: number | null
    civ: number | null
    team: number | null
    color: number | null
    won: boolean | null
  }

  export type Smaller_playerCountAggregateOutputType = {
    match_id: number
    profile_id: number
    slot: number
    civ: number
    team: number
    color: number
    won: number
    _all: number
  }


  export type Smaller_playerAvgAggregateInputType = {
    match_id?: true
    profile_id?: true
    slot?: true
    civ?: true
    team?: true
    color?: true
  }

  export type Smaller_playerSumAggregateInputType = {
    match_id?: true
    profile_id?: true
    slot?: true
    civ?: true
    team?: true
    color?: true
  }

  export type Smaller_playerMinAggregateInputType = {
    match_id?: true
    profile_id?: true
    slot?: true
    civ?: true
    team?: true
    color?: true
    won?: true
  }

  export type Smaller_playerMaxAggregateInputType = {
    match_id?: true
    profile_id?: true
    slot?: true
    civ?: true
    team?: true
    color?: true
    won?: true
  }

  export type Smaller_playerCountAggregateInputType = {
    match_id?: true
    profile_id?: true
    slot?: true
    civ?: true
    team?: true
    color?: true
    won?: true
    _all?: true
  }

  export type Smaller_playerAggregateArgs = {
    /**
     * Filter which smaller_player to aggregate.
     * 
    **/
    where?: smaller_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_players to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: smaller_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned smaller_players
    **/
    _count?: true | Smaller_playerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Smaller_playerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Smaller_playerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Smaller_playerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Smaller_playerMaxAggregateInputType
  }

  export type GetSmaller_playerAggregateType<T extends Smaller_playerAggregateArgs> = {
        [P in keyof T & keyof AggregateSmaller_player]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmaller_player[P]>
      : GetScalarType<T[P], AggregateSmaller_player[P]>
  }




  export type Smaller_playerGroupByArgs = {
    where?: smaller_playerWhereInput
    orderBy?: Enumerable<smaller_playerOrderByWithAggregationInput>
    by: Array<Smaller_playerScalarFieldEnum>
    having?: smaller_playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Smaller_playerCountAggregateInputType | true
    _avg?: Smaller_playerAvgAggregateInputType
    _sum?: Smaller_playerSumAggregateInputType
    _min?: Smaller_playerMinAggregateInputType
    _max?: Smaller_playerMaxAggregateInputType
  }


  export type Smaller_playerGroupByOutputType = {
    match_id: number
    profile_id: number
    slot: number
    civ: number | null
    team: number | null
    color: number | null
    won: boolean | null
    _count: Smaller_playerCountAggregateOutputType | null
    _avg: Smaller_playerAvgAggregateOutputType | null
    _sum: Smaller_playerSumAggregateOutputType | null
    _min: Smaller_playerMinAggregateOutputType | null
    _max: Smaller_playerMaxAggregateOutputType | null
  }

  type GetSmaller_playerGroupByPayload<T extends Smaller_playerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Smaller_playerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Smaller_playerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Smaller_playerGroupByOutputType[P]>
            : GetScalarType<T[P], Smaller_playerGroupByOutputType[P]>
        }
      >
    >


  export type smaller_playerSelect = {
    match_id?: boolean
    profile_id?: boolean
    slot?: boolean
    civ?: boolean
    team?: boolean
    color?: boolean
    won?: boolean
    smaller_match?: boolean | smaller_matchArgs
    smaller_profile?: boolean | smaller_profileArgs
  }

  export type smaller_playerInclude = {
    smaller_match?: boolean | smaller_matchArgs
    smaller_profile?: boolean | smaller_profileArgs
  }

  export type smaller_playerGetPayload<
    S extends boolean | null | undefined | smaller_playerArgs,
    U = keyof S
      > = S extends true
        ? smaller_player
    : S extends undefined
    ? never
    : S extends smaller_playerArgs | smaller_playerFindManyArgs
    ?'include' extends U
    ? smaller_player  & {
    [P in TrueKeys<S['include']>]:
        P extends 'smaller_match' ? smaller_matchGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'smaller_profile' ? smaller_profileGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'smaller_match' ? smaller_matchGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'smaller_profile' ? smaller_profileGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof smaller_player ? smaller_player[P] : never
  } 
    : smaller_player
  : smaller_player


  type smaller_playerCountArgs = Merge<
    Omit<smaller_playerFindManyArgs, 'select' | 'include'> & {
      select?: Smaller_playerCountAggregateInputType | true
    }
  >

  export interface smaller_playerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Smaller_player that matches the filter.
     * @param {smaller_playerFindUniqueArgs} args - Arguments to find a Smaller_player
     * @example
     * // Get one Smaller_player
     * const smaller_player = await prisma.smaller_player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends smaller_playerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, smaller_playerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'smaller_player'> extends True ? CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>> : CheckSelect<T, Prisma__smaller_playerClient<smaller_player | null, null>, Prisma__smaller_playerClient<smaller_playerGetPayload<T> | null, null>>

    /**
     * Find the first Smaller_player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_playerFindFirstArgs} args - Arguments to find a Smaller_player
     * @example
     * // Get one Smaller_player
     * const smaller_player = await prisma.smaller_player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends smaller_playerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, smaller_playerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'smaller_player'> extends True ? CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>> : CheckSelect<T, Prisma__smaller_playerClient<smaller_player | null, null>, Prisma__smaller_playerClient<smaller_playerGetPayload<T> | null, null>>

    /**
     * Find zero or more Smaller_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_playerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Smaller_players
     * const smaller_players = await prisma.smaller_player.findMany()
     * 
     * // Get first 10 Smaller_players
     * const smaller_players = await prisma.smaller_player.findMany({ take: 10 })
     * 
     * // Only select the `match_id`
     * const smaller_playerWithMatch_idOnly = await prisma.smaller_player.findMany({ select: { match_id: true } })
     * 
    **/
    findMany<T extends smaller_playerFindManyArgs>(
      args?: SelectSubset<T, smaller_playerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<smaller_player>>, PrismaPromise<Array<smaller_playerGetPayload<T>>>>

    /**
     * Create a Smaller_player.
     * @param {smaller_playerCreateArgs} args - Arguments to create a Smaller_player.
     * @example
     * // Create one Smaller_player
     * const Smaller_player = await prisma.smaller_player.create({
     *   data: {
     *     // ... data to create a Smaller_player
     *   }
     * })
     * 
    **/
    create<T extends smaller_playerCreateArgs>(
      args: SelectSubset<T, smaller_playerCreateArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Create many Smaller_players.
     *     @param {smaller_playerCreateManyArgs} args - Arguments to create many Smaller_players.
     *     @example
     *     // Create many Smaller_players
     *     const smaller_player = await prisma.smaller_player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends smaller_playerCreateManyArgs>(
      args?: SelectSubset<T, smaller_playerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Smaller_player.
     * @param {smaller_playerDeleteArgs} args - Arguments to delete one Smaller_player.
     * @example
     * // Delete one Smaller_player
     * const Smaller_player = await prisma.smaller_player.delete({
     *   where: {
     *     // ... filter to delete one Smaller_player
     *   }
     * })
     * 
    **/
    delete<T extends smaller_playerDeleteArgs>(
      args: SelectSubset<T, smaller_playerDeleteArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Update one Smaller_player.
     * @param {smaller_playerUpdateArgs} args - Arguments to update one Smaller_player.
     * @example
     * // Update one Smaller_player
     * const smaller_player = await prisma.smaller_player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends smaller_playerUpdateArgs>(
      args: SelectSubset<T, smaller_playerUpdateArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Delete zero or more Smaller_players.
     * @param {smaller_playerDeleteManyArgs} args - Arguments to filter Smaller_players to delete.
     * @example
     * // Delete a few Smaller_players
     * const { count } = await prisma.smaller_player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends smaller_playerDeleteManyArgs>(
      args?: SelectSubset<T, smaller_playerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smaller_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Smaller_players
     * const smaller_player = await prisma.smaller_player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends smaller_playerUpdateManyArgs>(
      args: SelectSubset<T, smaller_playerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Smaller_player.
     * @param {smaller_playerUpsertArgs} args - Arguments to update or create a Smaller_player.
     * @example
     * // Update or create a Smaller_player
     * const smaller_player = await prisma.smaller_player.upsert({
     *   create: {
     *     // ... data to create a Smaller_player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Smaller_player we want to update
     *   }
     * })
    **/
    upsert<T extends smaller_playerUpsertArgs>(
      args: SelectSubset<T, smaller_playerUpsertArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Find one Smaller_player that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {smaller_playerFindUniqueOrThrowArgs} args - Arguments to find a Smaller_player
     * @example
     * // Get one Smaller_player
     * const smaller_player = await prisma.smaller_player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends smaller_playerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, smaller_playerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Find the first Smaller_player that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_playerFindFirstOrThrowArgs} args - Arguments to find a Smaller_player
     * @example
     * // Get one Smaller_player
     * const smaller_player = await prisma.smaller_player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends smaller_playerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, smaller_playerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_playerClient<smaller_player>, Prisma__smaller_playerClient<smaller_playerGetPayload<T>>>

    /**
     * Count the number of Smaller_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_playerCountArgs} args - Arguments to filter Smaller_players to count.
     * @example
     * // Count the number of Smaller_players
     * const count = await prisma.smaller_player.count({
     *   where: {
     *     // ... the filter for the Smaller_players we want to count
     *   }
     * })
    **/
    count<T extends smaller_playerCountArgs>(
      args?: Subset<T, smaller_playerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Smaller_playerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Smaller_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_playerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Smaller_playerAggregateArgs>(args: Subset<T, Smaller_playerAggregateArgs>): PrismaPromise<GetSmaller_playerAggregateType<T>>

    /**
     * Group by Smaller_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_playerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Smaller_playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Smaller_playerGroupByArgs['orderBy'] }
        : { orderBy?: Smaller_playerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Smaller_playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmaller_playerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for smaller_player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__smaller_playerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    smaller_match<T extends smaller_matchArgs = {}>(args?: Subset<T, smaller_matchArgs>): CheckSelect<T, Prisma__smaller_matchClient<smaller_match | Null>, Prisma__smaller_matchClient<smaller_matchGetPayload<T> | Null>>;

    smaller_profile<T extends smaller_profileArgs = {}>(args?: Subset<T, smaller_profileArgs>): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile | Null>, Prisma__smaller_profileClient<smaller_profileGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * smaller_player base type for findUnique actions
   */
  export type smaller_playerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * Filter, which smaller_player to fetch.
     * 
    **/
    where: smaller_playerWhereUniqueInput
  }

  /**
   * smaller_player: findUnique
   */
  export interface smaller_playerFindUniqueArgs extends smaller_playerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_player base type for findFirst actions
   */
  export type smaller_playerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * Filter, which smaller_player to fetch.
     * 
    **/
    where?: smaller_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_players to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for smaller_players.
     * 
    **/
    cursor?: smaller_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_players.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of smaller_players.
     * 
    **/
    distinct?: Enumerable<Smaller_playerScalarFieldEnum>
  }

  /**
   * smaller_player: findFirst
   */
  export interface smaller_playerFindFirstArgs extends smaller_playerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_player findMany
   */
  export type smaller_playerFindManyArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * Filter, which smaller_players to fetch.
     * 
    **/
    where?: smaller_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_players to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_playerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing smaller_players.
     * 
    **/
    cursor?: smaller_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_players from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_players.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Smaller_playerScalarFieldEnum>
  }


  /**
   * smaller_player create
   */
  export type smaller_playerCreateArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * The data needed to create a smaller_player.
     * 
    **/
    data: XOR<smaller_playerCreateInput, smaller_playerUncheckedCreateInput>
  }


  /**
   * smaller_player createMany
   */
  export type smaller_playerCreateManyArgs = {
    /**
     * The data used to create many smaller_players.
     * 
    **/
    data: Enumerable<smaller_playerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * smaller_player update
   */
  export type smaller_playerUpdateArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * The data needed to update a smaller_player.
     * 
    **/
    data: XOR<smaller_playerUpdateInput, smaller_playerUncheckedUpdateInput>
    /**
     * Choose, which smaller_player to update.
     * 
    **/
    where: smaller_playerWhereUniqueInput
  }


  /**
   * smaller_player updateMany
   */
  export type smaller_playerUpdateManyArgs = {
    /**
     * The data used to update smaller_players.
     * 
    **/
    data: XOR<smaller_playerUpdateManyMutationInput, smaller_playerUncheckedUpdateManyInput>
    /**
     * Filter which smaller_players to update
     * 
    **/
    where?: smaller_playerWhereInput
  }


  /**
   * smaller_player upsert
   */
  export type smaller_playerUpsertArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * The filter to search for the smaller_player to update in case it exists.
     * 
    **/
    where: smaller_playerWhereUniqueInput
    /**
     * In case the smaller_player found by the `where` argument doesn't exist, create a new smaller_player with this data.
     * 
    **/
    create: XOR<smaller_playerCreateInput, smaller_playerUncheckedCreateInput>
    /**
     * In case the smaller_player was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<smaller_playerUpdateInput, smaller_playerUncheckedUpdateInput>
  }


  /**
   * smaller_player delete
   */
  export type smaller_playerDeleteArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
    /**
     * Filter which smaller_player to delete.
     * 
    **/
    where: smaller_playerWhereUniqueInput
  }


  /**
   * smaller_player deleteMany
   */
  export type smaller_playerDeleteManyArgs = {
    /**
     * Filter which smaller_players to delete
     * 
    **/
    where?: smaller_playerWhereInput
  }


  /**
   * smaller_player: findUniqueOrThrow
   */
  export type smaller_playerFindUniqueOrThrowArgs = smaller_playerFindUniqueArgsBase
      

  /**
   * smaller_player: findFirstOrThrow
   */
  export type smaller_playerFindFirstOrThrowArgs = smaller_playerFindFirstArgsBase
      

  /**
   * smaller_player without action
   */
  export type smaller_playerArgs = {
    /**
     * Select specific fields to fetch from the smaller_player
     * 
    **/
    select?: smaller_playerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_playerInclude | null
  }



  /**
   * Model smaller_profile
   */


  export type AggregateSmaller_profile = {
    _count: Smaller_profileCountAggregateOutputType | null
    _avg: Smaller_profileAvgAggregateOutputType | null
    _sum: Smaller_profileSumAggregateOutputType | null
    _min: Smaller_profileMinAggregateOutputType | null
    _max: Smaller_profileMaxAggregateOutputType | null
  }

  export type Smaller_profileAvgAggregateOutputType = {
    profile_id: number | null
  }

  export type Smaller_profileSumAggregateOutputType = {
    profile_id: number | null
  }

  export type Smaller_profileMinAggregateOutputType = {
    profile_id: number | null
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
  }

  export type Smaller_profileMaxAggregateOutputType = {
    profile_id: number | null
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
  }

  export type Smaller_profileCountAggregateOutputType = {
    profile_id: number
    steam_id: number
    name: number
    clan: number
    last_match_time: number
    country: number
    avatarhash: number
    last_match_fetched_time: number
    _all: number
  }


  export type Smaller_profileAvgAggregateInputType = {
    profile_id?: true
  }

  export type Smaller_profileSumAggregateInputType = {
    profile_id?: true
  }

  export type Smaller_profileMinAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
  }

  export type Smaller_profileMaxAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
  }

  export type Smaller_profileCountAggregateInputType = {
    profile_id?: true
    steam_id?: true
    name?: true
    clan?: true
    last_match_time?: true
    country?: true
    avatarhash?: true
    last_match_fetched_time?: true
    _all?: true
  }

  export type Smaller_profileAggregateArgs = {
    /**
     * Filter which smaller_profile to aggregate.
     * 
    **/
    where?: smaller_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: smaller_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned smaller_profiles
    **/
    _count?: true | Smaller_profileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Smaller_profileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Smaller_profileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Smaller_profileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Smaller_profileMaxAggregateInputType
  }

  export type GetSmaller_profileAggregateType<T extends Smaller_profileAggregateArgs> = {
        [P in keyof T & keyof AggregateSmaller_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmaller_profile[P]>
      : GetScalarType<T[P], AggregateSmaller_profile[P]>
  }




  export type Smaller_profileGroupByArgs = {
    where?: smaller_profileWhereInput
    orderBy?: Enumerable<smaller_profileOrderByWithAggregationInput>
    by: Array<Smaller_profileScalarFieldEnum>
    having?: smaller_profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Smaller_profileCountAggregateInputType | true
    _avg?: Smaller_profileAvgAggregateInputType
    _sum?: Smaller_profileSumAggregateInputType
    _min?: Smaller_profileMinAggregateInputType
    _max?: Smaller_profileMaxAggregateInputType
  }


  export type Smaller_profileGroupByOutputType = {
    profile_id: number
    steam_id: string | null
    name: string | null
    clan: string | null
    last_match_time: Date | null
    country: string | null
    avatarhash: string | null
    last_match_fetched_time: Date | null
    _count: Smaller_profileCountAggregateOutputType | null
    _avg: Smaller_profileAvgAggregateOutputType | null
    _sum: Smaller_profileSumAggregateOutputType | null
    _min: Smaller_profileMinAggregateOutputType | null
    _max: Smaller_profileMaxAggregateOutputType | null
  }

  type GetSmaller_profileGroupByPayload<T extends Smaller_profileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Smaller_profileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Smaller_profileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Smaller_profileGroupByOutputType[P]>
            : GetScalarType<T[P], Smaller_profileGroupByOutputType[P]>
        }
      >
    >


  export type smaller_profileSelect = {
    profile_id?: boolean
    steam_id?: boolean
    name?: boolean
    clan?: boolean
    last_match_time?: boolean
    country?: boolean
    avatarhash?: boolean
    last_match_fetched_time?: boolean
    smaller_player?: boolean | smaller_playerFindManyArgs
    _count?: boolean | Smaller_profileCountOutputTypeArgs
  }

  export type smaller_profileInclude = {
    smaller_player?: boolean | smaller_playerFindManyArgs
    _count?: boolean | Smaller_profileCountOutputTypeArgs
  }

  export type smaller_profileGetPayload<
    S extends boolean | null | undefined | smaller_profileArgs,
    U = keyof S
      > = S extends true
        ? smaller_profile
    : S extends undefined
    ? never
    : S extends smaller_profileArgs | smaller_profileFindManyArgs
    ?'include' extends U
    ? smaller_profile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'smaller_player' ? Array < smaller_playerGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? Smaller_profileCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'smaller_player' ? Array < smaller_playerGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? Smaller_profileCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof smaller_profile ? smaller_profile[P] : never
  } 
    : smaller_profile
  : smaller_profile


  type smaller_profileCountArgs = Merge<
    Omit<smaller_profileFindManyArgs, 'select' | 'include'> & {
      select?: Smaller_profileCountAggregateInputType | true
    }
  >

  export interface smaller_profileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Smaller_profile that matches the filter.
     * @param {smaller_profileFindUniqueArgs} args - Arguments to find a Smaller_profile
     * @example
     * // Get one Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends smaller_profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, smaller_profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'smaller_profile'> extends True ? CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>> : CheckSelect<T, Prisma__smaller_profileClient<smaller_profile | null, null>, Prisma__smaller_profileClient<smaller_profileGetPayload<T> | null, null>>

    /**
     * Find the first Smaller_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_profileFindFirstArgs} args - Arguments to find a Smaller_profile
     * @example
     * // Get one Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends smaller_profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, smaller_profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'smaller_profile'> extends True ? CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>> : CheckSelect<T, Prisma__smaller_profileClient<smaller_profile | null, null>, Prisma__smaller_profileClient<smaller_profileGetPayload<T> | null, null>>

    /**
     * Find zero or more Smaller_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Smaller_profiles
     * const smaller_profiles = await prisma.smaller_profile.findMany()
     * 
     * // Get first 10 Smaller_profiles
     * const smaller_profiles = await prisma.smaller_profile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const smaller_profileWithProfile_idOnly = await prisma.smaller_profile.findMany({ select: { profile_id: true } })
     * 
    **/
    findMany<T extends smaller_profileFindManyArgs>(
      args?: SelectSubset<T, smaller_profileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<smaller_profile>>, PrismaPromise<Array<smaller_profileGetPayload<T>>>>

    /**
     * Create a Smaller_profile.
     * @param {smaller_profileCreateArgs} args - Arguments to create a Smaller_profile.
     * @example
     * // Create one Smaller_profile
     * const Smaller_profile = await prisma.smaller_profile.create({
     *   data: {
     *     // ... data to create a Smaller_profile
     *   }
     * })
     * 
    **/
    create<T extends smaller_profileCreateArgs>(
      args: SelectSubset<T, smaller_profileCreateArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Create many Smaller_profiles.
     *     @param {smaller_profileCreateManyArgs} args - Arguments to create many Smaller_profiles.
     *     @example
     *     // Create many Smaller_profiles
     *     const smaller_profile = await prisma.smaller_profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends smaller_profileCreateManyArgs>(
      args?: SelectSubset<T, smaller_profileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Smaller_profile.
     * @param {smaller_profileDeleteArgs} args - Arguments to delete one Smaller_profile.
     * @example
     * // Delete one Smaller_profile
     * const Smaller_profile = await prisma.smaller_profile.delete({
     *   where: {
     *     // ... filter to delete one Smaller_profile
     *   }
     * })
     * 
    **/
    delete<T extends smaller_profileDeleteArgs>(
      args: SelectSubset<T, smaller_profileDeleteArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Update one Smaller_profile.
     * @param {smaller_profileUpdateArgs} args - Arguments to update one Smaller_profile.
     * @example
     * // Update one Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends smaller_profileUpdateArgs>(
      args: SelectSubset<T, smaller_profileUpdateArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Delete zero or more Smaller_profiles.
     * @param {smaller_profileDeleteManyArgs} args - Arguments to filter Smaller_profiles to delete.
     * @example
     * // Delete a few Smaller_profiles
     * const { count } = await prisma.smaller_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends smaller_profileDeleteManyArgs>(
      args?: SelectSubset<T, smaller_profileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Smaller_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Smaller_profiles
     * const smaller_profile = await prisma.smaller_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends smaller_profileUpdateManyArgs>(
      args: SelectSubset<T, smaller_profileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Smaller_profile.
     * @param {smaller_profileUpsertArgs} args - Arguments to update or create a Smaller_profile.
     * @example
     * // Update or create a Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.upsert({
     *   create: {
     *     // ... data to create a Smaller_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Smaller_profile we want to update
     *   }
     * })
    **/
    upsert<T extends smaller_profileUpsertArgs>(
      args: SelectSubset<T, smaller_profileUpsertArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Find one Smaller_profile that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {smaller_profileFindUniqueOrThrowArgs} args - Arguments to find a Smaller_profile
     * @example
     * // Get one Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends smaller_profileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, smaller_profileFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Find the first Smaller_profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_profileFindFirstOrThrowArgs} args - Arguments to find a Smaller_profile
     * @example
     * // Get one Smaller_profile
     * const smaller_profile = await prisma.smaller_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends smaller_profileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, smaller_profileFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__smaller_profileClient<smaller_profile>, Prisma__smaller_profileClient<smaller_profileGetPayload<T>>>

    /**
     * Count the number of Smaller_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {smaller_profileCountArgs} args - Arguments to filter Smaller_profiles to count.
     * @example
     * // Count the number of Smaller_profiles
     * const count = await prisma.smaller_profile.count({
     *   where: {
     *     // ... the filter for the Smaller_profiles we want to count
     *   }
     * })
    **/
    count<T extends smaller_profileCountArgs>(
      args?: Subset<T, smaller_profileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Smaller_profileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Smaller_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Smaller_profileAggregateArgs>(args: Subset<T, Smaller_profileAggregateArgs>): PrismaPromise<GetSmaller_profileAggregateType<T>>

    /**
     * Group by Smaller_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Smaller_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Smaller_profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Smaller_profileGroupByArgs['orderBy'] }
        : { orderBy?: Smaller_profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Smaller_profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmaller_profileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for smaller_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__smaller_profileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    smaller_player<T extends smaller_playerFindManyArgs = {}>(args?: Subset<T, smaller_playerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<smaller_player>| Null>, PrismaPromise<Array<smaller_playerGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * smaller_profile base type for findUnique actions
   */
  export type smaller_profileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * Filter, which smaller_profile to fetch.
     * 
    **/
    where: smaller_profileWhereUniqueInput
  }

  /**
   * smaller_profile: findUnique
   */
  export interface smaller_profileFindUniqueArgs extends smaller_profileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_profile base type for findFirst actions
   */
  export type smaller_profileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * Filter, which smaller_profile to fetch.
     * 
    **/
    where?: smaller_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for smaller_profiles.
     * 
    **/
    cursor?: smaller_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of smaller_profiles.
     * 
    **/
    distinct?: Enumerable<Smaller_profileScalarFieldEnum>
  }

  /**
   * smaller_profile: findFirst
   */
  export interface smaller_profileFindFirstArgs extends smaller_profileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * smaller_profile findMany
   */
  export type smaller_profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * Filter, which smaller_profiles to fetch.
     * 
    **/
    where?: smaller_profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of smaller_profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<smaller_profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing smaller_profiles.
     * 
    **/
    cursor?: smaller_profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` smaller_profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` smaller_profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Smaller_profileScalarFieldEnum>
  }


  /**
   * smaller_profile create
   */
  export type smaller_profileCreateArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * The data needed to create a smaller_profile.
     * 
    **/
    data: XOR<smaller_profileCreateInput, smaller_profileUncheckedCreateInput>
  }


  /**
   * smaller_profile createMany
   */
  export type smaller_profileCreateManyArgs = {
    /**
     * The data used to create many smaller_profiles.
     * 
    **/
    data: Enumerable<smaller_profileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * smaller_profile update
   */
  export type smaller_profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * The data needed to update a smaller_profile.
     * 
    **/
    data: XOR<smaller_profileUpdateInput, smaller_profileUncheckedUpdateInput>
    /**
     * Choose, which smaller_profile to update.
     * 
    **/
    where: smaller_profileWhereUniqueInput
  }


  /**
   * smaller_profile updateMany
   */
  export type smaller_profileUpdateManyArgs = {
    /**
     * The data used to update smaller_profiles.
     * 
    **/
    data: XOR<smaller_profileUpdateManyMutationInput, smaller_profileUncheckedUpdateManyInput>
    /**
     * Filter which smaller_profiles to update
     * 
    **/
    where?: smaller_profileWhereInput
  }


  /**
   * smaller_profile upsert
   */
  export type smaller_profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * The filter to search for the smaller_profile to update in case it exists.
     * 
    **/
    where: smaller_profileWhereUniqueInput
    /**
     * In case the smaller_profile found by the `where` argument doesn't exist, create a new smaller_profile with this data.
     * 
    **/
    create: XOR<smaller_profileCreateInput, smaller_profileUncheckedCreateInput>
    /**
     * In case the smaller_profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<smaller_profileUpdateInput, smaller_profileUncheckedUpdateInput>
  }


  /**
   * smaller_profile delete
   */
  export type smaller_profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
    /**
     * Filter which smaller_profile to delete.
     * 
    **/
    where: smaller_profileWhereUniqueInput
  }


  /**
   * smaller_profile deleteMany
   */
  export type smaller_profileDeleteManyArgs = {
    /**
     * Filter which smaller_profiles to delete
     * 
    **/
    where?: smaller_profileWhereInput
  }


  /**
   * smaller_profile: findUniqueOrThrow
   */
  export type smaller_profileFindUniqueOrThrowArgs = smaller_profileFindUniqueArgsBase
      

  /**
   * smaller_profile: findFirstOrThrow
   */
  export type smaller_profileFindFirstOrThrowArgs = smaller_profileFindFirstArgsBase
      

  /**
   * smaller_profile without action
   */
  export type smaller_profileArgs = {
    /**
     * Select specific fields to fetch from the smaller_profile
     * 
    **/
    select?: smaller_profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: smaller_profileInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Api_keyScalarFieldEnum: {
    api_key: 'api_key'
  };

  export type Api_keyScalarFieldEnum = (typeof Api_keyScalarFieldEnum)[keyof typeof Api_keyScalarFieldEnum]


  export const Leaderboard_rowScalarFieldEnum: {
    leaderboard_id: 'leaderboard_id',
    profile_id: 'profile_id',
    name: 'name',
    rank: 'rank',
    rating: 'rating',
    last_match_time: 'last_match_time',
    drops: 'drops',
    losses: 'losses',
    streak: 'streak',
    wins: 'wins',
    updated_at: 'updated_at',
    rank_country: 'rank_country'
  };

  export type Leaderboard_rowScalarFieldEnum = (typeof Leaderboard_rowScalarFieldEnum)[keyof typeof Leaderboard_rowScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    match_id: 'match_id',
    name: 'name',
    server: 'server',
    started: 'started',
    finished: 'finished',
    allow_cheats: 'allow_cheats',
    difficulty: 'difficulty',
    empire_wars_mode: 'empire_wars_mode',
    ending_age: 'ending_age',
    full_tech_tree: 'full_tech_tree',
    game_mode: 'game_mode',
    location: 'location',
    lock_speed: 'lock_speed',
    lock_teams: 'lock_teams',
    map_size: 'map_size',
    population: 'population',
    record_game: 'record_game',
    regicide_mode: 'regicide_mode',
    resources: 'resources',
    reveal_map: 'reveal_map',
    shared_exploration: 'shared_exploration',
    speed: 'speed',
    starting_age: 'starting_age',
    sudden_death_mode: 'sudden_death_mode',
    team_positions: 'team_positions',
    team_together: 'team_together',
    treaty_length: 'treaty_length',
    turbo_mode: 'turbo_mode',
    victory: 'victory',
    internal_leaderboard_id: 'internal_leaderboard_id',
    leaderboard_id: 'leaderboard_id',
    privacy: 'privacy',
    creator_profile_id: 'creator_profile_id'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const Match_pendingScalarFieldEnum: {
    profile_id: 'profile_id',
    priority: 'priority'
  };

  export type Match_pendingScalarFieldEnum = (typeof Match_pendingScalarFieldEnum)[keyof typeof Match_pendingScalarFieldEnum]


  export const Match_rawScalarFieldEnum: {
    match_id: 'match_id',
    json: 'json',
    version: 'version',
    error: 'error'
  };

  export type Match_rawScalarFieldEnum = (typeof Match_rawScalarFieldEnum)[keyof typeof Match_rawScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    match_id: 'match_id',
    profile_id: 'profile_id',
    civ: 'civ',
    slot: 'slot',
    team: 'team',
    color: 'color',
    is_ready: 'is_ready',
    status: 'status',
    won: 'won',
    replay: 'replay'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    profile_id: 'profile_id',
    steam_id: 'steam_id',
    name: 'name',
    clan: 'clan',
    last_match_time: 'last_match_time',
    country: 'country',
    avatarhash: 'avatarhash',
    last_match_fetched_time: 'last_match_fetched_time',
    last_refresh: 'last_refresh'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RatingScalarFieldEnum: {
    profile_id: 'profile_id',
    games: 'games',
    rating: 'rating',
    date: 'date',
    leaderboard_id: 'leaderboard_id',
    rating_diff: 'rating_diff'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    component: 'component',
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const Smaller_matchScalarFieldEnum: {
    match_id: 'match_id',
    name: 'name',
    started: 'started',
    finished: 'finished',
    leaderboard_id: 'leaderboard_id',
    num_slots: 'num_slots',
    has_password: 'has_password',
    server: 'server',
    map_type: 'map_type',
    average_rating: 'average_rating',
    cheats: 'cheats',
    ending_age: 'ending_age',
    expansion: 'expansion',
    full_tech_tree: 'full_tech_tree',
    game_type: 'game_type',
    has_custom_content: 'has_custom_content',
    lock_speed: 'lock_speed',
    lock_teams: 'lock_teams',
    map_size: 'map_size',
    num_players: 'num_players',
    pop: 'pop',
    ranked: 'ranked',
    rating_type: 'rating_type',
    resources: 'resources',
    rms: 'rms',
    scenario: 'scenario',
    shared_exploration: 'shared_exploration',
    speed: 'speed',
    starting_age: 'starting_age',
    team_positions: 'team_positions',
    team_together: 'team_together',
    treaty_length: 'treaty_length',
    turbo: 'turbo',
    version: 'version',
    victory: 'victory',
    victory_time: 'victory_time',
    visibility: 'visibility'
  };

  export type Smaller_matchScalarFieldEnum = (typeof Smaller_matchScalarFieldEnum)[keyof typeof Smaller_matchScalarFieldEnum]


  export const Smaller_playerScalarFieldEnum: {
    match_id: 'match_id',
    profile_id: 'profile_id',
    slot: 'slot',
    civ: 'civ',
    team: 'team',
    color: 'color',
    won: 'won'
  };

  export type Smaller_playerScalarFieldEnum = (typeof Smaller_playerScalarFieldEnum)[keyof typeof Smaller_playerScalarFieldEnum]


  export const Smaller_profileScalarFieldEnum: {
    profile_id: 'profile_id',
    steam_id: 'steam_id',
    name: 'name',
    clan: 'clan',
    last_match_time: 'last_match_time',
    country: 'country',
    avatarhash: 'avatarhash',
    last_match_fetched_time: 'last_match_fetched_time'
  };

  export type Smaller_profileScalarFieldEnum = (typeof Smaller_profileScalarFieldEnum)[keyof typeof Smaller_profileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type api_keyWhereInput = {
    AND?: Enumerable<api_keyWhereInput>
    OR?: Enumerable<api_keyWhereInput>
    NOT?: Enumerable<api_keyWhereInput>
    api_key?: StringFilter | string
  }

  export type api_keyOrderByWithRelationInput = {
    api_key?: SortOrder
  }

  export type api_keyWhereUniqueInput = {
    api_key?: string
  }

  export type api_keyOrderByWithAggregationInput = {
    api_key?: SortOrder
    _count?: api_keyCountOrderByAggregateInput
    _max?: api_keyMaxOrderByAggregateInput
    _min?: api_keyMinOrderByAggregateInput
  }

  export type api_keyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    OR?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<api_keyScalarWhereWithAggregatesInput>
    api_key?: StringWithAggregatesFilter | string
  }

  export type leaderboard_rowWhereInput = {
    AND?: Enumerable<leaderboard_rowWhereInput>
    OR?: Enumerable<leaderboard_rowWhereInput>
    NOT?: Enumerable<leaderboard_rowWhereInput>
    leaderboard_id?: IntFilter | number
    profile_id?: IntFilter | number
    name?: StringFilter | string
    rank?: IntNullableFilter | number | null
    rating?: IntNullableFilter | number | null
    last_match_time?: DateTimeNullableFilter | Date | string | null
    drops?: IntNullableFilter | number | null
    losses?: IntNullableFilter | number | null
    streak?: IntNullableFilter | number | null
    wins?: IntNullableFilter | number | null
    updated_at?: DateTimeFilter | Date | string
    rank_country?: IntNullableFilter | number | null
    profile?: XOR<ProfileRelationFilter, profileWhereInput>
  }

  export type leaderboard_rowOrderByWithRelationInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    last_match_time?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    updated_at?: SortOrder
    rank_country?: SortOrder
    profile?: profileOrderByWithRelationInput
  }

  export type leaderboard_rowWhereUniqueInput = {
    leaderboard_id_profile_id?: leaderboard_rowLeaderboard_idProfile_idCompoundUniqueInput
  }

  export type leaderboard_rowOrderByWithAggregationInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    last_match_time?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    updated_at?: SortOrder
    rank_country?: SortOrder
    _count?: leaderboard_rowCountOrderByAggregateInput
    _avg?: leaderboard_rowAvgOrderByAggregateInput
    _max?: leaderboard_rowMaxOrderByAggregateInput
    _min?: leaderboard_rowMinOrderByAggregateInput
    _sum?: leaderboard_rowSumOrderByAggregateInput
  }

  export type leaderboard_rowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<leaderboard_rowScalarWhereWithAggregatesInput>
    OR?: Enumerable<leaderboard_rowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<leaderboard_rowScalarWhereWithAggregatesInput>
    leaderboard_id?: IntWithAggregatesFilter | number
    profile_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    rank?: IntNullableWithAggregatesFilter | number | null
    rating?: IntNullableWithAggregatesFilter | number | null
    last_match_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    drops?: IntNullableWithAggregatesFilter | number | null
    losses?: IntNullableWithAggregatesFilter | number | null
    streak?: IntNullableWithAggregatesFilter | number | null
    wins?: IntNullableWithAggregatesFilter | number | null
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    rank_country?: IntNullableWithAggregatesFilter | number | null
  }

  export type matchWhereInput = {
    AND?: Enumerable<matchWhereInput>
    OR?: Enumerable<matchWhereInput>
    NOT?: Enumerable<matchWhereInput>
    match_id?: IntFilter | number
    name?: StringNullableFilter | string | null
    server?: StringNullableFilter | string | null
    started?: DateTimeNullableFilter | Date | string | null
    finished?: DateTimeNullableFilter | Date | string | null
    allow_cheats?: BoolNullableFilter | boolean | null
    difficulty?: IntNullableFilter | number | null
    empire_wars_mode?: BoolNullableFilter | boolean | null
    ending_age?: IntNullableFilter | number | null
    full_tech_tree?: BoolNullableFilter | boolean | null
    game_mode?: IntNullableFilter | number | null
    location?: IntNullableFilter | number | null
    lock_speed?: BoolNullableFilter | boolean | null
    lock_teams?: BoolNullableFilter | boolean | null
    map_size?: IntNullableFilter | number | null
    population?: IntNullableFilter | number | null
    record_game?: BoolNullableFilter | boolean | null
    regicide_mode?: BoolNullableFilter | boolean | null
    resources?: IntNullableFilter | number | null
    reveal_map?: IntNullableFilter | number | null
    shared_exploration?: BoolNullableFilter | boolean | null
    speed?: IntNullableFilter | number | null
    starting_age?: IntNullableFilter | number | null
    sudden_death_mode?: BoolNullableFilter | boolean | null
    team_positions?: BoolNullableFilter | boolean | null
    team_together?: BoolNullableFilter | boolean | null
    treaty_length?: IntNullableFilter | number | null
    turbo_mode?: BoolNullableFilter | boolean | null
    victory?: IntNullableFilter | number | null
    internal_leaderboard_id?: IntNullableFilter | number | null
    leaderboard_id?: IntNullableFilter | number | null
    privacy?: IntNullableFilter | number | null
    creator_profile_id?: IntNullableFilter | number | null
    profile?: XOR<ProfileRelationFilter, profileWhereInput> | null
    player?: PlayerListRelationFilter
  }

  export type matchOrderByWithRelationInput = {
    match_id?: SortOrder
    name?: SortOrder
    server?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    allow_cheats?: SortOrder
    difficulty?: SortOrder
    empire_wars_mode?: SortOrder
    ending_age?: SortOrder
    full_tech_tree?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    record_game?: SortOrder
    regicide_mode?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    sudden_death_mode?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo_mode?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
    profile?: profileOrderByWithRelationInput
    player?: playerOrderByRelationAggregateInput
  }

  export type matchWhereUniqueInput = {
    match_id?: number
  }

  export type matchOrderByWithAggregationInput = {
    match_id?: SortOrder
    name?: SortOrder
    server?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    allow_cheats?: SortOrder
    difficulty?: SortOrder
    empire_wars_mode?: SortOrder
    ending_age?: SortOrder
    full_tech_tree?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    record_game?: SortOrder
    regicide_mode?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    sudden_death_mode?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo_mode?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
    _count?: matchCountOrderByAggregateInput
    _avg?: matchAvgOrderByAggregateInput
    _max?: matchMaxOrderByAggregateInput
    _min?: matchMinOrderByAggregateInput
    _sum?: matchSumOrderByAggregateInput
  }

  export type matchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<matchScalarWhereWithAggregatesInput>
    OR?: Enumerable<matchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<matchScalarWhereWithAggregatesInput>
    match_id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    server?: StringNullableWithAggregatesFilter | string | null
    started?: DateTimeNullableWithAggregatesFilter | Date | string | null
    finished?: DateTimeNullableWithAggregatesFilter | Date | string | null
    allow_cheats?: BoolNullableWithAggregatesFilter | boolean | null
    difficulty?: IntNullableWithAggregatesFilter | number | null
    empire_wars_mode?: BoolNullableWithAggregatesFilter | boolean | null
    ending_age?: IntNullableWithAggregatesFilter | number | null
    full_tech_tree?: BoolNullableWithAggregatesFilter | boolean | null
    game_mode?: IntNullableWithAggregatesFilter | number | null
    location?: IntNullableWithAggregatesFilter | number | null
    lock_speed?: BoolNullableWithAggregatesFilter | boolean | null
    lock_teams?: BoolNullableWithAggregatesFilter | boolean | null
    map_size?: IntNullableWithAggregatesFilter | number | null
    population?: IntNullableWithAggregatesFilter | number | null
    record_game?: BoolNullableWithAggregatesFilter | boolean | null
    regicide_mode?: BoolNullableWithAggregatesFilter | boolean | null
    resources?: IntNullableWithAggregatesFilter | number | null
    reveal_map?: IntNullableWithAggregatesFilter | number | null
    shared_exploration?: BoolNullableWithAggregatesFilter | boolean | null
    speed?: IntNullableWithAggregatesFilter | number | null
    starting_age?: IntNullableWithAggregatesFilter | number | null
    sudden_death_mode?: BoolNullableWithAggregatesFilter | boolean | null
    team_positions?: BoolNullableWithAggregatesFilter | boolean | null
    team_together?: BoolNullableWithAggregatesFilter | boolean | null
    treaty_length?: IntNullableWithAggregatesFilter | number | null
    turbo_mode?: BoolNullableWithAggregatesFilter | boolean | null
    victory?: IntNullableWithAggregatesFilter | number | null
    internal_leaderboard_id?: IntNullableWithAggregatesFilter | number | null
    leaderboard_id?: IntNullableWithAggregatesFilter | number | null
    privacy?: IntNullableWithAggregatesFilter | number | null
    creator_profile_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type match_pendingWhereInput = {
    AND?: Enumerable<match_pendingWhereInput>
    OR?: Enumerable<match_pendingWhereInput>
    NOT?: Enumerable<match_pendingWhereInput>
    profile_id?: IntFilter | number
    priority?: IntFilter | number
  }

  export type match_pendingOrderByWithRelationInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_pendingWhereUniqueInput = {
    profile_id?: number
  }

  export type match_pendingOrderByWithAggregationInput = {
    profile_id?: SortOrder
    priority?: SortOrder
    _count?: match_pendingCountOrderByAggregateInput
    _avg?: match_pendingAvgOrderByAggregateInput
    _max?: match_pendingMaxOrderByAggregateInput
    _min?: match_pendingMinOrderByAggregateInput
    _sum?: match_pendingSumOrderByAggregateInput
  }

  export type match_pendingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<match_pendingScalarWhereWithAggregatesInput>
    OR?: Enumerable<match_pendingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<match_pendingScalarWhereWithAggregatesInput>
    profile_id?: IntWithAggregatesFilter | number
    priority?: IntWithAggregatesFilter | number
  }

  export type match_rawWhereInput = {
    AND?: Enumerable<match_rawWhereInput>
    OR?: Enumerable<match_rawWhereInput>
    NOT?: Enumerable<match_rawWhereInput>
    match_id?: IntFilter | number
    json?: StringFilter | string
    version?: IntNullableFilter | number | null
    error?: BoolNullableFilter | boolean | null
  }

  export type match_rawOrderByWithRelationInput = {
    match_id?: SortOrder
    json?: SortOrder
    version?: SortOrder
    error?: SortOrder
  }

  export type match_rawWhereUniqueInput = {
    match_id?: number
  }

  export type match_rawOrderByWithAggregationInput = {
    match_id?: SortOrder
    json?: SortOrder
    version?: SortOrder
    error?: SortOrder
    _count?: match_rawCountOrderByAggregateInput
    _avg?: match_rawAvgOrderByAggregateInput
    _max?: match_rawMaxOrderByAggregateInput
    _min?: match_rawMinOrderByAggregateInput
    _sum?: match_rawSumOrderByAggregateInput
  }

  export type match_rawScalarWhereWithAggregatesInput = {
    AND?: Enumerable<match_rawScalarWhereWithAggregatesInput>
    OR?: Enumerable<match_rawScalarWhereWithAggregatesInput>
    NOT?: Enumerable<match_rawScalarWhereWithAggregatesInput>
    match_id?: IntWithAggregatesFilter | number
    json?: StringWithAggregatesFilter | string
    version?: IntNullableWithAggregatesFilter | number | null
    error?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type playerWhereInput = {
    AND?: Enumerable<playerWhereInput>
    OR?: Enumerable<playerWhereInput>
    NOT?: Enumerable<playerWhereInput>
    match_id?: IntFilter | number
    profile_id?: IntFilter | number
    civ?: IntNullableFilter | number | null
    slot?: IntFilter | number
    team?: IntNullableFilter | number | null
    color?: IntNullableFilter | number | null
    is_ready?: IntFilter | number
    status?: IntFilter | number
    won?: BoolNullableFilter | boolean | null
    replay?: BoolNullableFilter | boolean | null
    match?: XOR<MatchRelationFilter, matchWhereInput>
    profile?: XOR<ProfileRelationFilter, profileWhereInput>
  }

  export type playerOrderByWithRelationInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
    won?: SortOrder
    replay?: SortOrder
    match?: matchOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
  }

  export type playerWhereUniqueInput = {
    match_id_profile_id_slot?: playerMatch_idProfile_idSlotCompoundUniqueInput
  }

  export type playerOrderByWithAggregationInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
    won?: SortOrder
    replay?: SortOrder
    _count?: playerCountOrderByAggregateInput
    _avg?: playerAvgOrderByAggregateInput
    _max?: playerMaxOrderByAggregateInput
    _min?: playerMinOrderByAggregateInput
    _sum?: playerSumOrderByAggregateInput
  }

  export type playerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<playerScalarWhereWithAggregatesInput>
    OR?: Enumerable<playerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<playerScalarWhereWithAggregatesInput>
    match_id?: IntWithAggregatesFilter | number
    profile_id?: IntWithAggregatesFilter | number
    civ?: IntNullableWithAggregatesFilter | number | null
    slot?: IntWithAggregatesFilter | number
    team?: IntNullableWithAggregatesFilter | number | null
    color?: IntNullableWithAggregatesFilter | number | null
    is_ready?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    won?: BoolNullableWithAggregatesFilter | boolean | null
    replay?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type profileWhereInput = {
    AND?: Enumerable<profileWhereInput>
    OR?: Enumerable<profileWhereInput>
    NOT?: Enumerable<profileWhereInput>
    profile_id?: IntFilter | number
    steam_id?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    clan?: StringNullableFilter | string | null
    last_match_time?: DateTimeNullableFilter | Date | string | null
    country?: StringNullableFilter | string | null
    avatarhash?: StringNullableFilter | string | null
    last_match_fetched_time?: DateTimeNullableFilter | Date | string | null
    last_refresh?: DateTimeNullableFilter | Date | string | null
    leaderboard_row?: Leaderboard_rowListRelationFilter
    match?: MatchListRelationFilter
    player?: PlayerListRelationFilter
  }

  export type profileOrderByWithRelationInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    last_refresh?: SortOrder
    leaderboard_row?: leaderboard_rowOrderByRelationAggregateInput
    match?: matchOrderByRelationAggregateInput
    player?: playerOrderByRelationAggregateInput
  }

  export type profileWhereUniqueInput = {
    profile_id?: number
  }

  export type profileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    last_refresh?: SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profileScalarWhereWithAggregatesInput>
    profile_id?: IntWithAggregatesFilter | number
    steam_id?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    clan?: StringNullableWithAggregatesFilter | string | null
    last_match_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    avatarhash?: StringNullableWithAggregatesFilter | string | null
    last_match_fetched_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    last_refresh?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ratingWhereInput = {
    AND?: Enumerable<ratingWhereInput>
    OR?: Enumerable<ratingWhereInput>
    NOT?: Enumerable<ratingWhereInput>
    profile_id?: IntFilter | number
    games?: IntFilter | number
    rating?: IntFilter | number
    date?: DateTimeFilter | Date | string
    leaderboard_id?: IntFilter | number
    rating_diff?: IntNullableFilter | number | null
  }

  export type ratingOrderByWithRelationInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type ratingWhereUniqueInput = {
    leaderboard_id_profile_id_games?: ratingLeaderboard_idProfile_idGamesCompoundUniqueInput
  }

  export type ratingOrderByWithAggregationInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
    _count?: ratingCountOrderByAggregateInput
    _avg?: ratingAvgOrderByAggregateInput
    _max?: ratingMaxOrderByAggregateInput
    _min?: ratingMinOrderByAggregateInput
    _sum?: ratingSumOrderByAggregateInput
  }

  export type ratingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ratingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ratingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ratingScalarWhereWithAggregatesInput>
    profile_id?: IntWithAggregatesFilter | number
    games?: IntWithAggregatesFilter | number
    rating?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    leaderboard_id?: IntWithAggregatesFilter | number
    rating_diff?: IntNullableWithAggregatesFilter | number | null
  }

  export type settingWhereInput = {
    AND?: Enumerable<settingWhereInput>
    OR?: Enumerable<settingWhereInput>
    NOT?: Enumerable<settingWhereInput>
    component?: StringFilter | string
    key?: StringFilter | string
    value?: StringFilter | string
  }

  export type settingOrderByWithRelationInput = {
    component?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingWhereUniqueInput = {
    component_key?: settingComponentKeyCompoundUniqueInput
  }

  export type settingOrderByWithAggregationInput = {
    component?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: settingCountOrderByAggregateInput
    _max?: settingMaxOrderByAggregateInput
    _min?: settingMinOrderByAggregateInput
  }

  export type settingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<settingScalarWhereWithAggregatesInput>
    OR?: Enumerable<settingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<settingScalarWhereWithAggregatesInput>
    component?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type smaller_matchWhereInput = {
    AND?: Enumerable<smaller_matchWhereInput>
    OR?: Enumerable<smaller_matchWhereInput>
    NOT?: Enumerable<smaller_matchWhereInput>
    match_id?: IntFilter | number
    name?: StringNullableFilter | string | null
    started?: IntNullableFilter | number | null
    finished?: IntNullableFilter | number | null
    leaderboard_id?: IntNullableFilter | number | null
    num_slots?: IntNullableFilter | number | null
    has_password?: BoolNullableFilter | boolean | null
    server?: StringNullableFilter | string | null
    map_type?: IntNullableFilter | number | null
    average_rating?: IntNullableFilter | number | null
    cheats?: BoolNullableFilter | boolean | null
    ending_age?: IntNullableFilter | number | null
    expansion?: StringNullableFilter | string | null
    full_tech_tree?: BoolNullableFilter | boolean | null
    game_type?: IntNullableFilter | number | null
    has_custom_content?: BoolNullableFilter | boolean | null
    lock_speed?: BoolNullableFilter | boolean | null
    lock_teams?: BoolNullableFilter | boolean | null
    map_size?: IntNullableFilter | number | null
    num_players?: IntNullableFilter | number | null
    pop?: IntNullableFilter | number | null
    ranked?: BoolNullableFilter | boolean | null
    rating_type?: IntNullableFilter | number | null
    resources?: IntNullableFilter | number | null
    rms?: StringNullableFilter | string | null
    scenario?: StringNullableFilter | string | null
    shared_exploration?: BoolNullableFilter | boolean | null
    speed?: IntNullableFilter | number | null
    starting_age?: IntNullableFilter | number | null
    team_positions?: BoolNullableFilter | boolean | null
    team_together?: BoolNullableFilter | boolean | null
    treaty_length?: IntNullableFilter | number | null
    turbo?: BoolNullableFilter | boolean | null
    version?: StringNullableFilter | string | null
    victory?: IntNullableFilter | number | null
    victory_time?: IntNullableFilter | number | null
    visibility?: IntNullableFilter | number | null
    smaller_player?: Smaller_playerListRelationFilter
  }

  export type smaller_matchOrderByWithRelationInput = {
    match_id?: SortOrder
    name?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    has_password?: SortOrder
    server?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    cheats?: SortOrder
    ending_age?: SortOrder
    expansion?: SortOrder
    full_tech_tree?: SortOrder
    game_type?: SortOrder
    has_custom_content?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    ranked?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    rms?: SortOrder
    scenario?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo?: SortOrder
    version?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
    smaller_player?: smaller_playerOrderByRelationAggregateInput
  }

  export type smaller_matchWhereUniqueInput = {
    match_id?: number
  }

  export type smaller_matchOrderByWithAggregationInput = {
    match_id?: SortOrder
    name?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    has_password?: SortOrder
    server?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    cheats?: SortOrder
    ending_age?: SortOrder
    expansion?: SortOrder
    full_tech_tree?: SortOrder
    game_type?: SortOrder
    has_custom_content?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    ranked?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    rms?: SortOrder
    scenario?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo?: SortOrder
    version?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
    _count?: smaller_matchCountOrderByAggregateInput
    _avg?: smaller_matchAvgOrderByAggregateInput
    _max?: smaller_matchMaxOrderByAggregateInput
    _min?: smaller_matchMinOrderByAggregateInput
    _sum?: smaller_matchSumOrderByAggregateInput
  }

  export type smaller_matchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<smaller_matchScalarWhereWithAggregatesInput>
    OR?: Enumerable<smaller_matchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<smaller_matchScalarWhereWithAggregatesInput>
    match_id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    started?: IntNullableWithAggregatesFilter | number | null
    finished?: IntNullableWithAggregatesFilter | number | null
    leaderboard_id?: IntNullableWithAggregatesFilter | number | null
    num_slots?: IntNullableWithAggregatesFilter | number | null
    has_password?: BoolNullableWithAggregatesFilter | boolean | null
    server?: StringNullableWithAggregatesFilter | string | null
    map_type?: IntNullableWithAggregatesFilter | number | null
    average_rating?: IntNullableWithAggregatesFilter | number | null
    cheats?: BoolNullableWithAggregatesFilter | boolean | null
    ending_age?: IntNullableWithAggregatesFilter | number | null
    expansion?: StringNullableWithAggregatesFilter | string | null
    full_tech_tree?: BoolNullableWithAggregatesFilter | boolean | null
    game_type?: IntNullableWithAggregatesFilter | number | null
    has_custom_content?: BoolNullableWithAggregatesFilter | boolean | null
    lock_speed?: BoolNullableWithAggregatesFilter | boolean | null
    lock_teams?: BoolNullableWithAggregatesFilter | boolean | null
    map_size?: IntNullableWithAggregatesFilter | number | null
    num_players?: IntNullableWithAggregatesFilter | number | null
    pop?: IntNullableWithAggregatesFilter | number | null
    ranked?: BoolNullableWithAggregatesFilter | boolean | null
    rating_type?: IntNullableWithAggregatesFilter | number | null
    resources?: IntNullableWithAggregatesFilter | number | null
    rms?: StringNullableWithAggregatesFilter | string | null
    scenario?: StringNullableWithAggregatesFilter | string | null
    shared_exploration?: BoolNullableWithAggregatesFilter | boolean | null
    speed?: IntNullableWithAggregatesFilter | number | null
    starting_age?: IntNullableWithAggregatesFilter | number | null
    team_positions?: BoolNullableWithAggregatesFilter | boolean | null
    team_together?: BoolNullableWithAggregatesFilter | boolean | null
    treaty_length?: IntNullableWithAggregatesFilter | number | null
    turbo?: BoolNullableWithAggregatesFilter | boolean | null
    version?: StringNullableWithAggregatesFilter | string | null
    victory?: IntNullableWithAggregatesFilter | number | null
    victory_time?: IntNullableWithAggregatesFilter | number | null
    visibility?: IntNullableWithAggregatesFilter | number | null
  }

  export type smaller_playerWhereInput = {
    AND?: Enumerable<smaller_playerWhereInput>
    OR?: Enumerable<smaller_playerWhereInput>
    NOT?: Enumerable<smaller_playerWhereInput>
    match_id?: IntFilter | number
    profile_id?: IntFilter | number
    slot?: IntFilter | number
    civ?: IntNullableFilter | number | null
    team?: IntNullableFilter | number | null
    color?: IntNullableFilter | number | null
    won?: BoolNullableFilter | boolean | null
    smaller_match?: XOR<Smaller_matchRelationFilter, smaller_matchWhereInput>
    smaller_profile?: XOR<Smaller_profileRelationFilter, smaller_profileWhereInput>
  }

  export type smaller_playerOrderByWithRelationInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
    won?: SortOrder
    smaller_match?: smaller_matchOrderByWithRelationInput
    smaller_profile?: smaller_profileOrderByWithRelationInput
  }

  export type smaller_playerWhereUniqueInput = {
    match_id_profile_id_slot?: smaller_playerMatch_idProfile_idSlotCompoundUniqueInput
  }

  export type smaller_playerOrderByWithAggregationInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
    won?: SortOrder
    _count?: smaller_playerCountOrderByAggregateInput
    _avg?: smaller_playerAvgOrderByAggregateInput
    _max?: smaller_playerMaxOrderByAggregateInput
    _min?: smaller_playerMinOrderByAggregateInput
    _sum?: smaller_playerSumOrderByAggregateInput
  }

  export type smaller_playerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<smaller_playerScalarWhereWithAggregatesInput>
    OR?: Enumerable<smaller_playerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<smaller_playerScalarWhereWithAggregatesInput>
    match_id?: IntWithAggregatesFilter | number
    profile_id?: IntWithAggregatesFilter | number
    slot?: IntWithAggregatesFilter | number
    civ?: IntNullableWithAggregatesFilter | number | null
    team?: IntNullableWithAggregatesFilter | number | null
    color?: IntNullableWithAggregatesFilter | number | null
    won?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type smaller_profileWhereInput = {
    AND?: Enumerable<smaller_profileWhereInput>
    OR?: Enumerable<smaller_profileWhereInput>
    NOT?: Enumerable<smaller_profileWhereInput>
    profile_id?: IntFilter | number
    steam_id?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    clan?: StringNullableFilter | string | null
    last_match_time?: DateTimeNullableFilter | Date | string | null
    country?: StringNullableFilter | string | null
    avatarhash?: StringNullableFilter | string | null
    last_match_fetched_time?: DateTimeNullableFilter | Date | string | null
    smaller_player?: Smaller_playerListRelationFilter
  }

  export type smaller_profileOrderByWithRelationInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    smaller_player?: smaller_playerOrderByRelationAggregateInput
  }

  export type smaller_profileWhereUniqueInput = {
    profile_id?: number
  }

  export type smaller_profileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    _count?: smaller_profileCountOrderByAggregateInput
    _avg?: smaller_profileAvgOrderByAggregateInput
    _max?: smaller_profileMaxOrderByAggregateInput
    _min?: smaller_profileMinOrderByAggregateInput
    _sum?: smaller_profileSumOrderByAggregateInput
  }

  export type smaller_profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<smaller_profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<smaller_profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<smaller_profileScalarWhereWithAggregatesInput>
    profile_id?: IntWithAggregatesFilter | number
    steam_id?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    clan?: StringNullableWithAggregatesFilter | string | null
    last_match_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    avatarhash?: StringNullableWithAggregatesFilter | string | null
    last_match_fetched_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type api_keyCreateInput = {
    api_key: string
  }

  export type api_keyUncheckedCreateInput = {
    api_key: string
  }

  export type api_keyUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyUncheckedUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyCreateManyInput = {
    api_key: string
  }

  export type api_keyUpdateManyMutationInput = {
    api_key?: StringFieldUpdateOperationsInput | string
  }

  export type api_keyUncheckedUpdateManyInput = {
    api_key?: StringFieldUpdateOperationsInput | string
  }

  export type leaderboard_rowCreateInput = {
    leaderboard_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
    profile: profileCreateNestedOneWithoutLeaderboard_rowInput
  }

  export type leaderboard_rowUncheckedCreateInput = {
    leaderboard_id: number
    profile_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
  }

  export type leaderboard_rowUpdateInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: profileUpdateOneRequiredWithoutLeaderboard_rowNestedInput
  }

  export type leaderboard_rowUncheckedUpdateInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leaderboard_rowCreateManyInput = {
    leaderboard_id: number
    profile_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
  }

  export type leaderboard_rowUpdateManyMutationInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leaderboard_rowUncheckedUpdateManyInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type matchCreateInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    profile?: profileCreateNestedOneWithoutMatchInput
    player?: playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    creator_profile_id?: number | null
    player?: playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: profileUpdateOneWithoutMatchNestedInput
    player?: playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    creator_profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    player?: playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type matchCreateManyInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    creator_profile_id?: number | null
  }

  export type matchUpdateManyMutationInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type matchUncheckedUpdateManyInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    creator_profile_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type match_pendingCreateInput = {
    profile_id: number
    priority: number
  }

  export type match_pendingUncheckedCreateInput = {
    profile_id: number
    priority: number
  }

  export type match_pendingUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type match_pendingUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type match_pendingCreateManyInput = {
    profile_id: number
    priority: number
  }

  export type match_pendingUpdateManyMutationInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type match_pendingUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
  }

  export type match_rawCreateInput = {
    match_id: number
    json: string
    version?: number | null
    error?: boolean | null
  }

  export type match_rawUncheckedCreateInput = {
    match_id: number
    json: string
    version?: number | null
    error?: boolean | null
  }

  export type match_rawUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    json?: StringFieldUpdateOperationsInput | string
    version?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type match_rawUncheckedUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    json?: StringFieldUpdateOperationsInput | string
    version?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type match_rawCreateManyInput = {
    match_id: number
    json: string
    version?: number | null
    error?: boolean | null
  }

  export type match_rawUpdateManyMutationInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    json?: StringFieldUpdateOperationsInput | string
    version?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type match_rawUncheckedUpdateManyInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    json?: StringFieldUpdateOperationsInput | string
    version?: NullableIntFieldUpdateOperationsInput | number | null
    error?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type playerCreateInput = {
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
    match: matchCreateNestedOneWithoutPlayerInput
    profile: profileCreateNestedOneWithoutPlayerInput
  }

  export type playerUncheckedCreateInput = {
    match_id: number
    profile_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type playerUpdateInput = {
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    match?: matchUpdateOneRequiredWithoutPlayerNestedInput
    profile?: profileUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type playerCreateManyInput = {
    match_id: number
    profile_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type playerUpdateManyMutationInput = {
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type playerUncheckedUpdateManyInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type profileCreateInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowCreateNestedManyWithoutProfileInput
    match?: matchCreateNestedManyWithoutProfileInput
    player?: playerCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedCreateNestedManyWithoutProfileInput
    match?: matchUncheckedCreateNestedManyWithoutProfileInput
    player?: playerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUpdateManyWithoutProfileNestedInput
    match?: matchUpdateManyWithoutProfileNestedInput
    player?: playerUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedUpdateManyWithoutProfileNestedInput
    match?: matchUncheckedUpdateManyWithoutProfileNestedInput
    player?: playerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateManyInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
  }

  export type profileUpdateManyMutationInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingCreateInput = {
    profile_id: number
    games: number
    rating: number
    date: Date | string
    leaderboard_id: number
    rating_diff?: number | null
  }

  export type ratingUncheckedCreateInput = {
    profile_id: number
    games: number
    rating: number
    date: Date | string
    leaderboard_id: number
    rating_diff?: number | null
  }

  export type ratingUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    games?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    rating_diff?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ratingUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    games?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    rating_diff?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ratingCreateManyInput = {
    profile_id: number
    games: number
    rating: number
    date: Date | string
    leaderboard_id: number
    rating_diff?: number | null
  }

  export type ratingUpdateManyMutationInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    games?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    rating_diff?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ratingUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    games?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    rating_diff?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type settingCreateInput = {
    component: string
    key: string
    value: string
  }

  export type settingUncheckedCreateInput = {
    component: string
    key: string
    value: string
  }

  export type settingUpdateInput = {
    component?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingUncheckedUpdateInput = {
    component?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingCreateManyInput = {
    component: string
    key: string
    value: string
  }

  export type settingUpdateManyMutationInput = {
    component?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type settingUncheckedUpdateManyInput = {
    component?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type smaller_matchCreateInput = {
    match_id: number
    name?: string | null
    started?: number | null
    finished?: number | null
    leaderboard_id?: number | null
    num_slots?: number | null
    has_password?: boolean | null
    server?: string | null
    map_type?: number | null
    average_rating?: number | null
    cheats?: boolean | null
    ending_age?: number | null
    expansion?: string | null
    full_tech_tree?: boolean | null
    game_type?: number | null
    has_custom_content?: boolean | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    num_players?: number | null
    pop?: number | null
    ranked?: boolean | null
    rating_type?: number | null
    resources?: number | null
    rms?: string | null
    scenario?: string | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo?: boolean | null
    version?: string | null
    victory?: number | null
    victory_time?: number | null
    visibility?: number | null
    smaller_player?: smaller_playerCreateNestedManyWithoutSmaller_matchInput
  }

  export type smaller_matchUncheckedCreateInput = {
    match_id: number
    name?: string | null
    started?: number | null
    finished?: number | null
    leaderboard_id?: number | null
    num_slots?: number | null
    has_password?: boolean | null
    server?: string | null
    map_type?: number | null
    average_rating?: number | null
    cheats?: boolean | null
    ending_age?: number | null
    expansion?: string | null
    full_tech_tree?: boolean | null
    game_type?: number | null
    has_custom_content?: boolean | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    num_players?: number | null
    pop?: number | null
    ranked?: boolean | null
    rating_type?: number | null
    resources?: number | null
    rms?: string | null
    scenario?: string | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo?: boolean | null
    version?: string | null
    victory?: number | null
    victory_time?: number | null
    visibility?: number | null
    smaller_player?: smaller_playerUncheckedCreateNestedManyWithoutSmaller_matchInput
  }

  export type smaller_matchUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
    smaller_player?: smaller_playerUpdateManyWithoutSmaller_matchNestedInput
  }

  export type smaller_matchUncheckedUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
    smaller_player?: smaller_playerUncheckedUpdateManyWithoutSmaller_matchNestedInput
  }

  export type smaller_matchCreateManyInput = {
    match_id: number
    name?: string | null
    started?: number | null
    finished?: number | null
    leaderboard_id?: number | null
    num_slots?: number | null
    has_password?: boolean | null
    server?: string | null
    map_type?: number | null
    average_rating?: number | null
    cheats?: boolean | null
    ending_age?: number | null
    expansion?: string | null
    full_tech_tree?: boolean | null
    game_type?: number | null
    has_custom_content?: boolean | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    num_players?: number | null
    pop?: number | null
    ranked?: boolean | null
    rating_type?: number | null
    resources?: number | null
    rms?: string | null
    scenario?: string | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo?: boolean | null
    version?: string | null
    victory?: number | null
    victory_time?: number | null
    visibility?: number | null
  }

  export type smaller_matchUpdateManyMutationInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type smaller_matchUncheckedUpdateManyInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type smaller_playerCreateInput = {
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
    smaller_match: smaller_matchCreateNestedOneWithoutSmaller_playerInput
    smaller_profile: smaller_profileCreateNestedOneWithoutSmaller_playerInput
  }

  export type smaller_playerUncheckedCreateInput = {
    match_id: number
    profile_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smaller_match?: smaller_matchUpdateOneRequiredWithoutSmaller_playerNestedInput
    smaller_profile?: smaller_profileUpdateOneRequiredWithoutSmaller_playerNestedInput
  }

  export type smaller_playerUncheckedUpdateInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_playerCreateManyInput = {
    match_id: number
    profile_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_playerUncheckedUpdateManyInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    profile_id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_profileCreateInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    smaller_player?: smaller_playerCreateNestedManyWithoutSmaller_profileInput
  }

  export type smaller_profileUncheckedCreateInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    smaller_player?: smaller_playerUncheckedCreateNestedManyWithoutSmaller_profileInput
  }

  export type smaller_profileUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smaller_player?: smaller_playerUpdateManyWithoutSmaller_profileNestedInput
  }

  export type smaller_profileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    smaller_player?: smaller_playerUncheckedUpdateManyWithoutSmaller_profileNestedInput
  }

  export type smaller_profileCreateManyInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
  }

  export type smaller_profileUpdateManyMutationInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smaller_profileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type api_keyCountOrderByAggregateInput = {
    api_key?: SortOrder
  }

  export type api_keyMaxOrderByAggregateInput = {
    api_key?: SortOrder
  }

  export type api_keyMinOrderByAggregateInput = {
    api_key?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ProfileRelationFilter = {
    is?: profileWhereInput
    isNot?: profileWhereInput
  }

  export type leaderboard_rowLeaderboard_idProfile_idCompoundUniqueInput = {
    leaderboard_id: number
    profile_id: number
  }

  export type leaderboard_rowCountOrderByAggregateInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    last_match_time?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    updated_at?: SortOrder
    rank_country?: SortOrder
  }

  export type leaderboard_rowAvgOrderByAggregateInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    rank_country?: SortOrder
  }

  export type leaderboard_rowMaxOrderByAggregateInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    last_match_time?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    updated_at?: SortOrder
    rank_country?: SortOrder
  }

  export type leaderboard_rowMinOrderByAggregateInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    last_match_time?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    updated_at?: SortOrder
    rank_country?: SortOrder
  }

  export type leaderboard_rowSumOrderByAggregateInput = {
    leaderboard_id?: SortOrder
    profile_id?: SortOrder
    rank?: SortOrder
    rating?: SortOrder
    drops?: SortOrder
    losses?: SortOrder
    streak?: SortOrder
    wins?: SortOrder
    rank_country?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type PlayerListRelationFilter = {
    every?: playerWhereInput
    some?: playerWhereInput
    none?: playerWhereInput
  }

  export type playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchCountOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    server?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    allow_cheats?: SortOrder
    difficulty?: SortOrder
    empire_wars_mode?: SortOrder
    ending_age?: SortOrder
    full_tech_tree?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    record_game?: SortOrder
    regicide_mode?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    sudden_death_mode?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo_mode?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
  }

  export type matchAvgOrderByAggregateInput = {
    match_id?: SortOrder
    difficulty?: SortOrder
    ending_age?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    treaty_length?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
  }

  export type matchMaxOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    server?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    allow_cheats?: SortOrder
    difficulty?: SortOrder
    empire_wars_mode?: SortOrder
    ending_age?: SortOrder
    full_tech_tree?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    record_game?: SortOrder
    regicide_mode?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    sudden_death_mode?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo_mode?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
  }

  export type matchMinOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    server?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    allow_cheats?: SortOrder
    difficulty?: SortOrder
    empire_wars_mode?: SortOrder
    ending_age?: SortOrder
    full_tech_tree?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    record_game?: SortOrder
    regicide_mode?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    sudden_death_mode?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo_mode?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
  }

  export type matchSumOrderByAggregateInput = {
    match_id?: SortOrder
    difficulty?: SortOrder
    ending_age?: SortOrder
    game_mode?: SortOrder
    location?: SortOrder
    map_size?: SortOrder
    population?: SortOrder
    resources?: SortOrder
    reveal_map?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    treaty_length?: SortOrder
    victory?: SortOrder
    internal_leaderboard_id?: SortOrder
    leaderboard_id?: SortOrder
    privacy?: SortOrder
    creator_profile_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type match_pendingCountOrderByAggregateInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_pendingAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_pendingMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_pendingMinOrderByAggregateInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_pendingSumOrderByAggregateInput = {
    profile_id?: SortOrder
    priority?: SortOrder
  }

  export type match_rawCountOrderByAggregateInput = {
    match_id?: SortOrder
    json?: SortOrder
    version?: SortOrder
    error?: SortOrder
  }

  export type match_rawAvgOrderByAggregateInput = {
    match_id?: SortOrder
    version?: SortOrder
  }

  export type match_rawMaxOrderByAggregateInput = {
    match_id?: SortOrder
    json?: SortOrder
    version?: SortOrder
    error?: SortOrder
  }

  export type match_rawMinOrderByAggregateInput = {
    match_id?: SortOrder
    json?: SortOrder
    version?: SortOrder
    error?: SortOrder
  }

  export type match_rawSumOrderByAggregateInput = {
    match_id?: SortOrder
    version?: SortOrder
  }

  export type MatchRelationFilter = {
    is?: matchWhereInput
    isNot?: matchWhereInput
  }

  export type playerMatch_idProfile_idSlotCompoundUniqueInput = {
    match_id: number
    profile_id: number
    slot: number
  }

  export type playerCountOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
    won?: SortOrder
    replay?: SortOrder
  }

  export type playerAvgOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
  }

  export type playerMaxOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
    won?: SortOrder
    replay?: SortOrder
  }

  export type playerMinOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
    won?: SortOrder
    replay?: SortOrder
  }

  export type playerSumOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    civ?: SortOrder
    slot?: SortOrder
    team?: SortOrder
    color?: SortOrder
    is_ready?: SortOrder
    status?: SortOrder
  }

  export type Leaderboard_rowListRelationFilter = {
    every?: leaderboard_rowWhereInput
    some?: leaderboard_rowWhereInput
    none?: leaderboard_rowWhereInput
  }

  export type MatchListRelationFilter = {
    every?: matchWhereInput
    some?: matchWhereInput
    none?: matchWhereInput
  }

  export type leaderboard_rowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    last_refresh?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    last_refresh?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
    last_refresh?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
    profile_id?: SortOrder
  }

  export type ratingLeaderboard_idProfile_idGamesCompoundUniqueInput = {
    leaderboard_id: number
    profile_id: number
    games: number
  }

  export type ratingCountOrderByAggregateInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type ratingAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type ratingMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type ratingMinOrderByAggregateInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    date?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type ratingSumOrderByAggregateInput = {
    profile_id?: SortOrder
    games?: SortOrder
    rating?: SortOrder
    leaderboard_id?: SortOrder
    rating_diff?: SortOrder
  }

  export type settingComponentKeyCompoundUniqueInput = {
    component: string
    key: string
  }

  export type settingCountOrderByAggregateInput = {
    component?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingMaxOrderByAggregateInput = {
    component?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type settingMinOrderByAggregateInput = {
    component?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type Smaller_playerListRelationFilter = {
    every?: smaller_playerWhereInput
    some?: smaller_playerWhereInput
    none?: smaller_playerWhereInput
  }

  export type smaller_playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type smaller_matchCountOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    has_password?: SortOrder
    server?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    cheats?: SortOrder
    ending_age?: SortOrder
    expansion?: SortOrder
    full_tech_tree?: SortOrder
    game_type?: SortOrder
    has_custom_content?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    ranked?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    rms?: SortOrder
    scenario?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo?: SortOrder
    version?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
  }

  export type smaller_matchAvgOrderByAggregateInput = {
    match_id?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    ending_age?: SortOrder
    game_type?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    treaty_length?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
  }

  export type smaller_matchMaxOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    has_password?: SortOrder
    server?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    cheats?: SortOrder
    ending_age?: SortOrder
    expansion?: SortOrder
    full_tech_tree?: SortOrder
    game_type?: SortOrder
    has_custom_content?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    ranked?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    rms?: SortOrder
    scenario?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo?: SortOrder
    version?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
  }

  export type smaller_matchMinOrderByAggregateInput = {
    match_id?: SortOrder
    name?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    has_password?: SortOrder
    server?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    cheats?: SortOrder
    ending_age?: SortOrder
    expansion?: SortOrder
    full_tech_tree?: SortOrder
    game_type?: SortOrder
    has_custom_content?: SortOrder
    lock_speed?: SortOrder
    lock_teams?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    ranked?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    rms?: SortOrder
    scenario?: SortOrder
    shared_exploration?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    team_positions?: SortOrder
    team_together?: SortOrder
    treaty_length?: SortOrder
    turbo?: SortOrder
    version?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
  }

  export type smaller_matchSumOrderByAggregateInput = {
    match_id?: SortOrder
    started?: SortOrder
    finished?: SortOrder
    leaderboard_id?: SortOrder
    num_slots?: SortOrder
    map_type?: SortOrder
    average_rating?: SortOrder
    ending_age?: SortOrder
    game_type?: SortOrder
    map_size?: SortOrder
    num_players?: SortOrder
    pop?: SortOrder
    rating_type?: SortOrder
    resources?: SortOrder
    speed?: SortOrder
    starting_age?: SortOrder
    treaty_length?: SortOrder
    victory?: SortOrder
    victory_time?: SortOrder
    visibility?: SortOrder
  }

  export type Smaller_matchRelationFilter = {
    is?: smaller_matchWhereInput
    isNot?: smaller_matchWhereInput
  }

  export type Smaller_profileRelationFilter = {
    is?: smaller_profileWhereInput
    isNot?: smaller_profileWhereInput
  }

  export type smaller_playerMatch_idProfile_idSlotCompoundUniqueInput = {
    match_id: number
    profile_id: number
    slot: number
  }

  export type smaller_playerCountOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
    won?: SortOrder
  }

  export type smaller_playerAvgOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
  }

  export type smaller_playerMaxOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
    won?: SortOrder
  }

  export type smaller_playerMinOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
    won?: SortOrder
  }

  export type smaller_playerSumOrderByAggregateInput = {
    match_id?: SortOrder
    profile_id?: SortOrder
    slot?: SortOrder
    civ?: SortOrder
    team?: SortOrder
    color?: SortOrder
  }

  export type smaller_profileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
  }

  export type smaller_profileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
  }

  export type smaller_profileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
  }

  export type smaller_profileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    steam_id?: SortOrder
    name?: SortOrder
    clan?: SortOrder
    last_match_time?: SortOrder
    country?: SortOrder
    avatarhash?: SortOrder
    last_match_fetched_time?: SortOrder
  }

  export type smaller_profileSumOrderByAggregateInput = {
    profile_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type profileCreateNestedOneWithoutLeaderboard_rowInput = {
    create?: XOR<profileCreateWithoutLeaderboard_rowInput, profileUncheckedCreateWithoutLeaderboard_rowInput>
    connectOrCreate?: profileCreateOrConnectWithoutLeaderboard_rowInput
    connect?: profileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type profileUpdateOneRequiredWithoutLeaderboard_rowNestedInput = {
    create?: XOR<profileCreateWithoutLeaderboard_rowInput, profileUncheckedCreateWithoutLeaderboard_rowInput>
    connectOrCreate?: profileCreateOrConnectWithoutLeaderboard_rowInput
    upsert?: profileUpsertWithoutLeaderboard_rowInput
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutLeaderboard_rowInput, profileUncheckedUpdateWithoutLeaderboard_rowInput>
  }

  export type profileCreateNestedOneWithoutMatchInput = {
    create?: XOR<profileCreateWithoutMatchInput, profileUncheckedCreateWithoutMatchInput>
    connectOrCreate?: profileCreateOrConnectWithoutMatchInput
    connect?: profileWhereUniqueInput
  }

  export type playerCreateNestedManyWithoutMatchInput = {
    create?: XOR<Enumerable<playerCreateWithoutMatchInput>, Enumerable<playerUncheckedCreateWithoutMatchInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutMatchInput>
    createMany?: playerCreateManyMatchInputEnvelope
    connect?: Enumerable<playerWhereUniqueInput>
  }

  export type playerUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<Enumerable<playerCreateWithoutMatchInput>, Enumerable<playerUncheckedCreateWithoutMatchInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutMatchInput>
    createMany?: playerCreateManyMatchInputEnvelope
    connect?: Enumerable<playerWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type profileUpdateOneWithoutMatchNestedInput = {
    create?: XOR<profileCreateWithoutMatchInput, profileUncheckedCreateWithoutMatchInput>
    connectOrCreate?: profileCreateOrConnectWithoutMatchInput
    upsert?: profileUpsertWithoutMatchInput
    disconnect?: boolean
    delete?: boolean
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutMatchInput, profileUncheckedUpdateWithoutMatchInput>
  }

  export type playerUpdateManyWithoutMatchNestedInput = {
    create?: XOR<Enumerable<playerCreateWithoutMatchInput>, Enumerable<playerUncheckedCreateWithoutMatchInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutMatchInput>
    upsert?: Enumerable<playerUpsertWithWhereUniqueWithoutMatchInput>
    createMany?: playerCreateManyMatchInputEnvelope
    set?: Enumerable<playerWhereUniqueInput>
    disconnect?: Enumerable<playerWhereUniqueInput>
    delete?: Enumerable<playerWhereUniqueInput>
    connect?: Enumerable<playerWhereUniqueInput>
    update?: Enumerable<playerUpdateWithWhereUniqueWithoutMatchInput>
    updateMany?: Enumerable<playerUpdateManyWithWhereWithoutMatchInput>
    deleteMany?: Enumerable<playerScalarWhereInput>
  }

  export type playerUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<Enumerable<playerCreateWithoutMatchInput>, Enumerable<playerUncheckedCreateWithoutMatchInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutMatchInput>
    upsert?: Enumerable<playerUpsertWithWhereUniqueWithoutMatchInput>
    createMany?: playerCreateManyMatchInputEnvelope
    set?: Enumerable<playerWhereUniqueInput>
    disconnect?: Enumerable<playerWhereUniqueInput>
    delete?: Enumerable<playerWhereUniqueInput>
    connect?: Enumerable<playerWhereUniqueInput>
    update?: Enumerable<playerUpdateWithWhereUniqueWithoutMatchInput>
    updateMany?: Enumerable<playerUpdateManyWithWhereWithoutMatchInput>
    deleteMany?: Enumerable<playerScalarWhereInput>
  }

  export type matchCreateNestedOneWithoutPlayerInput = {
    create?: XOR<matchCreateWithoutPlayerInput, matchUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: matchCreateOrConnectWithoutPlayerInput
    connect?: matchWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutPlayerInput = {
    create?: XOR<profileCreateWithoutPlayerInput, profileUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: profileCreateOrConnectWithoutPlayerInput
    connect?: profileWhereUniqueInput
  }

  export type matchUpdateOneRequiredWithoutPlayerNestedInput = {
    create?: XOR<matchCreateWithoutPlayerInput, matchUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: matchCreateOrConnectWithoutPlayerInput
    upsert?: matchUpsertWithoutPlayerInput
    connect?: matchWhereUniqueInput
    update?: XOR<matchUpdateWithoutPlayerInput, matchUncheckedUpdateWithoutPlayerInput>
  }

  export type profileUpdateOneRequiredWithoutPlayerNestedInput = {
    create?: XOR<profileCreateWithoutPlayerInput, profileUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: profileCreateOrConnectWithoutPlayerInput
    upsert?: profileUpsertWithoutPlayerInput
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutPlayerInput, profileUncheckedUpdateWithoutPlayerInput>
  }

  export type leaderboard_rowCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<leaderboard_rowCreateWithoutProfileInput>, Enumerable<leaderboard_rowUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<leaderboard_rowCreateOrConnectWithoutProfileInput>
    createMany?: leaderboard_rowCreateManyProfileInputEnvelope
    connect?: Enumerable<leaderboard_rowWhereUniqueInput>
  }

  export type matchCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<matchCreateWithoutProfileInput>, Enumerable<matchUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<matchCreateOrConnectWithoutProfileInput>
    createMany?: matchCreateManyProfileInputEnvelope
    connect?: Enumerable<matchWhereUniqueInput>
  }

  export type playerCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<playerCreateWithoutProfileInput>, Enumerable<playerUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutProfileInput>
    createMany?: playerCreateManyProfileInputEnvelope
    connect?: Enumerable<playerWhereUniqueInput>
  }

  export type leaderboard_rowUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<leaderboard_rowCreateWithoutProfileInput>, Enumerable<leaderboard_rowUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<leaderboard_rowCreateOrConnectWithoutProfileInput>
    createMany?: leaderboard_rowCreateManyProfileInputEnvelope
    connect?: Enumerable<leaderboard_rowWhereUniqueInput>
  }

  export type matchUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<matchCreateWithoutProfileInput>, Enumerable<matchUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<matchCreateOrConnectWithoutProfileInput>
    createMany?: matchCreateManyProfileInputEnvelope
    connect?: Enumerable<matchWhereUniqueInput>
  }

  export type playerUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<playerCreateWithoutProfileInput>, Enumerable<playerUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutProfileInput>
    createMany?: playerCreateManyProfileInputEnvelope
    connect?: Enumerable<playerWhereUniqueInput>
  }

  export type leaderboard_rowUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<leaderboard_rowCreateWithoutProfileInput>, Enumerable<leaderboard_rowUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<leaderboard_rowCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<leaderboard_rowUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: leaderboard_rowCreateManyProfileInputEnvelope
    set?: Enumerable<leaderboard_rowWhereUniqueInput>
    disconnect?: Enumerable<leaderboard_rowWhereUniqueInput>
    delete?: Enumerable<leaderboard_rowWhereUniqueInput>
    connect?: Enumerable<leaderboard_rowWhereUniqueInput>
    update?: Enumerable<leaderboard_rowUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<leaderboard_rowUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<leaderboard_rowScalarWhereInput>
  }

  export type matchUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<matchCreateWithoutProfileInput>, Enumerable<matchUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<matchCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<matchUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: matchCreateManyProfileInputEnvelope
    set?: Enumerable<matchWhereUniqueInput>
    disconnect?: Enumerable<matchWhereUniqueInput>
    delete?: Enumerable<matchWhereUniqueInput>
    connect?: Enumerable<matchWhereUniqueInput>
    update?: Enumerable<matchUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<matchUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<matchScalarWhereInput>
  }

  export type playerUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<playerCreateWithoutProfileInput>, Enumerable<playerUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<playerUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: playerCreateManyProfileInputEnvelope
    set?: Enumerable<playerWhereUniqueInput>
    disconnect?: Enumerable<playerWhereUniqueInput>
    delete?: Enumerable<playerWhereUniqueInput>
    connect?: Enumerable<playerWhereUniqueInput>
    update?: Enumerable<playerUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<playerUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<playerScalarWhereInput>
  }

  export type leaderboard_rowUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<leaderboard_rowCreateWithoutProfileInput>, Enumerable<leaderboard_rowUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<leaderboard_rowCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<leaderboard_rowUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: leaderboard_rowCreateManyProfileInputEnvelope
    set?: Enumerable<leaderboard_rowWhereUniqueInput>
    disconnect?: Enumerable<leaderboard_rowWhereUniqueInput>
    delete?: Enumerable<leaderboard_rowWhereUniqueInput>
    connect?: Enumerable<leaderboard_rowWhereUniqueInput>
    update?: Enumerable<leaderboard_rowUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<leaderboard_rowUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<leaderboard_rowScalarWhereInput>
  }

  export type matchUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<matchCreateWithoutProfileInput>, Enumerable<matchUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<matchCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<matchUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: matchCreateManyProfileInputEnvelope
    set?: Enumerable<matchWhereUniqueInput>
    disconnect?: Enumerable<matchWhereUniqueInput>
    delete?: Enumerable<matchWhereUniqueInput>
    connect?: Enumerable<matchWhereUniqueInput>
    update?: Enumerable<matchUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<matchUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<matchScalarWhereInput>
  }

  export type playerUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<playerCreateWithoutProfileInput>, Enumerable<playerUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<playerCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<playerUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: playerCreateManyProfileInputEnvelope
    set?: Enumerable<playerWhereUniqueInput>
    disconnect?: Enumerable<playerWhereUniqueInput>
    delete?: Enumerable<playerWhereUniqueInput>
    connect?: Enumerable<playerWhereUniqueInput>
    update?: Enumerable<playerUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<playerUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<playerScalarWhereInput>
  }

  export type smaller_playerCreateNestedManyWithoutSmaller_matchInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_matchInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_matchInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_matchInput>
    createMany?: smaller_playerCreateManySmaller_matchInputEnvelope
    connect?: Enumerable<smaller_playerWhereUniqueInput>
  }

  export type smaller_playerUncheckedCreateNestedManyWithoutSmaller_matchInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_matchInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_matchInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_matchInput>
    createMany?: smaller_playerCreateManySmaller_matchInputEnvelope
    connect?: Enumerable<smaller_playerWhereUniqueInput>
  }

  export type smaller_playerUpdateManyWithoutSmaller_matchNestedInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_matchInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_matchInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_matchInput>
    upsert?: Enumerable<smaller_playerUpsertWithWhereUniqueWithoutSmaller_matchInput>
    createMany?: smaller_playerCreateManySmaller_matchInputEnvelope
    set?: Enumerable<smaller_playerWhereUniqueInput>
    disconnect?: Enumerable<smaller_playerWhereUniqueInput>
    delete?: Enumerable<smaller_playerWhereUniqueInput>
    connect?: Enumerable<smaller_playerWhereUniqueInput>
    update?: Enumerable<smaller_playerUpdateWithWhereUniqueWithoutSmaller_matchInput>
    updateMany?: Enumerable<smaller_playerUpdateManyWithWhereWithoutSmaller_matchInput>
    deleteMany?: Enumerable<smaller_playerScalarWhereInput>
  }

  export type smaller_playerUncheckedUpdateManyWithoutSmaller_matchNestedInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_matchInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_matchInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_matchInput>
    upsert?: Enumerable<smaller_playerUpsertWithWhereUniqueWithoutSmaller_matchInput>
    createMany?: smaller_playerCreateManySmaller_matchInputEnvelope
    set?: Enumerable<smaller_playerWhereUniqueInput>
    disconnect?: Enumerable<smaller_playerWhereUniqueInput>
    delete?: Enumerable<smaller_playerWhereUniqueInput>
    connect?: Enumerable<smaller_playerWhereUniqueInput>
    update?: Enumerable<smaller_playerUpdateWithWhereUniqueWithoutSmaller_matchInput>
    updateMany?: Enumerable<smaller_playerUpdateManyWithWhereWithoutSmaller_matchInput>
    deleteMany?: Enumerable<smaller_playerScalarWhereInput>
  }

  export type smaller_matchCreateNestedOneWithoutSmaller_playerInput = {
    create?: XOR<smaller_matchCreateWithoutSmaller_playerInput, smaller_matchUncheckedCreateWithoutSmaller_playerInput>
    connectOrCreate?: smaller_matchCreateOrConnectWithoutSmaller_playerInput
    connect?: smaller_matchWhereUniqueInput
  }

  export type smaller_profileCreateNestedOneWithoutSmaller_playerInput = {
    create?: XOR<smaller_profileCreateWithoutSmaller_playerInput, smaller_profileUncheckedCreateWithoutSmaller_playerInput>
    connectOrCreate?: smaller_profileCreateOrConnectWithoutSmaller_playerInput
    connect?: smaller_profileWhereUniqueInput
  }

  export type smaller_matchUpdateOneRequiredWithoutSmaller_playerNestedInput = {
    create?: XOR<smaller_matchCreateWithoutSmaller_playerInput, smaller_matchUncheckedCreateWithoutSmaller_playerInput>
    connectOrCreate?: smaller_matchCreateOrConnectWithoutSmaller_playerInput
    upsert?: smaller_matchUpsertWithoutSmaller_playerInput
    connect?: smaller_matchWhereUniqueInput
    update?: XOR<smaller_matchUpdateWithoutSmaller_playerInput, smaller_matchUncheckedUpdateWithoutSmaller_playerInput>
  }

  export type smaller_profileUpdateOneRequiredWithoutSmaller_playerNestedInput = {
    create?: XOR<smaller_profileCreateWithoutSmaller_playerInput, smaller_profileUncheckedCreateWithoutSmaller_playerInput>
    connectOrCreate?: smaller_profileCreateOrConnectWithoutSmaller_playerInput
    upsert?: smaller_profileUpsertWithoutSmaller_playerInput
    connect?: smaller_profileWhereUniqueInput
    update?: XOR<smaller_profileUpdateWithoutSmaller_playerInput, smaller_profileUncheckedUpdateWithoutSmaller_playerInput>
  }

  export type smaller_playerCreateNestedManyWithoutSmaller_profileInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_profileInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_profileInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_profileInput>
    createMany?: smaller_playerCreateManySmaller_profileInputEnvelope
    connect?: Enumerable<smaller_playerWhereUniqueInput>
  }

  export type smaller_playerUncheckedCreateNestedManyWithoutSmaller_profileInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_profileInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_profileInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_profileInput>
    createMany?: smaller_playerCreateManySmaller_profileInputEnvelope
    connect?: Enumerable<smaller_playerWhereUniqueInput>
  }

  export type smaller_playerUpdateManyWithoutSmaller_profileNestedInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_profileInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_profileInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_profileInput>
    upsert?: Enumerable<smaller_playerUpsertWithWhereUniqueWithoutSmaller_profileInput>
    createMany?: smaller_playerCreateManySmaller_profileInputEnvelope
    set?: Enumerable<smaller_playerWhereUniqueInput>
    disconnect?: Enumerable<smaller_playerWhereUniqueInput>
    delete?: Enumerable<smaller_playerWhereUniqueInput>
    connect?: Enumerable<smaller_playerWhereUniqueInput>
    update?: Enumerable<smaller_playerUpdateWithWhereUniqueWithoutSmaller_profileInput>
    updateMany?: Enumerable<smaller_playerUpdateManyWithWhereWithoutSmaller_profileInput>
    deleteMany?: Enumerable<smaller_playerScalarWhereInput>
  }

  export type smaller_playerUncheckedUpdateManyWithoutSmaller_profileNestedInput = {
    create?: XOR<Enumerable<smaller_playerCreateWithoutSmaller_profileInput>, Enumerable<smaller_playerUncheckedCreateWithoutSmaller_profileInput>>
    connectOrCreate?: Enumerable<smaller_playerCreateOrConnectWithoutSmaller_profileInput>
    upsert?: Enumerable<smaller_playerUpsertWithWhereUniqueWithoutSmaller_profileInput>
    createMany?: smaller_playerCreateManySmaller_profileInputEnvelope
    set?: Enumerable<smaller_playerWhereUniqueInput>
    disconnect?: Enumerable<smaller_playerWhereUniqueInput>
    delete?: Enumerable<smaller_playerWhereUniqueInput>
    connect?: Enumerable<smaller_playerWhereUniqueInput>
    update?: Enumerable<smaller_playerUpdateWithWhereUniqueWithoutSmaller_profileInput>
    updateMany?: Enumerable<smaller_playerUpdateManyWithWhereWithoutSmaller_profileInput>
    deleteMany?: Enumerable<smaller_playerScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type profileCreateWithoutLeaderboard_rowInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    match?: matchCreateNestedManyWithoutProfileInput
    player?: playerCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutLeaderboard_rowInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    match?: matchUncheckedCreateNestedManyWithoutProfileInput
    player?: playerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutLeaderboard_rowInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutLeaderboard_rowInput, profileUncheckedCreateWithoutLeaderboard_rowInput>
  }

  export type profileUpsertWithoutLeaderboard_rowInput = {
    update: XOR<profileUpdateWithoutLeaderboard_rowInput, profileUncheckedUpdateWithoutLeaderboard_rowInput>
    create: XOR<profileCreateWithoutLeaderboard_rowInput, profileUncheckedCreateWithoutLeaderboard_rowInput>
  }

  export type profileUpdateWithoutLeaderboard_rowInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUpdateManyWithoutProfileNestedInput
    player?: playerUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutLeaderboard_rowInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUncheckedUpdateManyWithoutProfileNestedInput
    player?: playerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateWithoutMatchInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowCreateNestedManyWithoutProfileInput
    player?: playerCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutMatchInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedCreateNestedManyWithoutProfileInput
    player?: playerUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutMatchInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutMatchInput, profileUncheckedCreateWithoutMatchInput>
  }

  export type playerCreateWithoutMatchInput = {
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
    profile: profileCreateNestedOneWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutMatchInput = {
    profile_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type playerCreateOrConnectWithoutMatchInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutMatchInput, playerUncheckedCreateWithoutMatchInput>
  }

  export type playerCreateManyMatchInputEnvelope = {
    data: Enumerable<playerCreateManyMatchInput>
    skipDuplicates?: boolean
  }

  export type profileUpsertWithoutMatchInput = {
    update: XOR<profileUpdateWithoutMatchInput, profileUncheckedUpdateWithoutMatchInput>
    create: XOR<profileCreateWithoutMatchInput, profileUncheckedCreateWithoutMatchInput>
  }

  export type profileUpdateWithoutMatchInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUpdateManyWithoutProfileNestedInput
    player?: playerUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutMatchInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedUpdateManyWithoutProfileNestedInput
    player?: playerUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type playerUpsertWithWhereUniqueWithoutMatchInput = {
    where: playerWhereUniqueInput
    update: XOR<playerUpdateWithoutMatchInput, playerUncheckedUpdateWithoutMatchInput>
    create: XOR<playerCreateWithoutMatchInput, playerUncheckedCreateWithoutMatchInput>
  }

  export type playerUpdateWithWhereUniqueWithoutMatchInput = {
    where: playerWhereUniqueInput
    data: XOR<playerUpdateWithoutMatchInput, playerUncheckedUpdateWithoutMatchInput>
  }

  export type playerUpdateManyWithWhereWithoutMatchInput = {
    where: playerScalarWhereInput
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type playerScalarWhereInput = {
    AND?: Enumerable<playerScalarWhereInput>
    OR?: Enumerable<playerScalarWhereInput>
    NOT?: Enumerable<playerScalarWhereInput>
    match_id?: IntFilter | number
    profile_id?: IntFilter | number
    civ?: IntNullableFilter | number | null
    slot?: IntFilter | number
    team?: IntNullableFilter | number | null
    color?: IntNullableFilter | number | null
    is_ready?: IntFilter | number
    status?: IntFilter | number
    won?: BoolNullableFilter | boolean | null
    replay?: BoolNullableFilter | boolean | null
  }

  export type matchCreateWithoutPlayerInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    profile?: profileCreateNestedOneWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutPlayerInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    creator_profile_id?: number | null
  }

  export type matchCreateOrConnectWithoutPlayerInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutPlayerInput, matchUncheckedCreateWithoutPlayerInput>
  }

  export type profileCreateWithoutPlayerInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowCreateNestedManyWithoutProfileInput
    match?: matchCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutPlayerInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
    last_refresh?: Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedCreateNestedManyWithoutProfileInput
    match?: matchUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutPlayerInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutPlayerInput, profileUncheckedCreateWithoutPlayerInput>
  }

  export type matchUpsertWithoutPlayerInput = {
    update: XOR<matchUpdateWithoutPlayerInput, matchUncheckedUpdateWithoutPlayerInput>
    create: XOR<matchCreateWithoutPlayerInput, matchUncheckedCreateWithoutPlayerInput>
  }

  export type matchUpdateWithoutPlayerInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: profileUpdateOneWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutPlayerInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    creator_profile_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profileUpsertWithoutPlayerInput = {
    update: XOR<profileUpdateWithoutPlayerInput, profileUncheckedUpdateWithoutPlayerInput>
    create: XOR<profileCreateWithoutPlayerInput, profileUncheckedCreateWithoutPlayerInput>
  }

  export type profileUpdateWithoutPlayerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUpdateManyWithoutProfileNestedInput
    match?: matchUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutPlayerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_refresh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaderboard_row?: leaderboard_rowUncheckedUpdateManyWithoutProfileNestedInput
    match?: matchUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type leaderboard_rowCreateWithoutProfileInput = {
    leaderboard_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
  }

  export type leaderboard_rowUncheckedCreateWithoutProfileInput = {
    leaderboard_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
  }

  export type leaderboard_rowCreateOrConnectWithoutProfileInput = {
    where: leaderboard_rowWhereUniqueInput
    create: XOR<leaderboard_rowCreateWithoutProfileInput, leaderboard_rowUncheckedCreateWithoutProfileInput>
  }

  export type leaderboard_rowCreateManyProfileInputEnvelope = {
    data: Enumerable<leaderboard_rowCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type matchCreateWithoutProfileInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    player?: playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutProfileInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
    player?: playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchCreateOrConnectWithoutProfileInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutProfileInput, matchUncheckedCreateWithoutProfileInput>
  }

  export type matchCreateManyProfileInputEnvelope = {
    data: Enumerable<matchCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type playerCreateWithoutProfileInput = {
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
    match: matchCreateNestedOneWithoutPlayerInput
  }

  export type playerUncheckedCreateWithoutProfileInput = {
    match_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type playerCreateOrConnectWithoutProfileInput = {
    where: playerWhereUniqueInput
    create: XOR<playerCreateWithoutProfileInput, playerUncheckedCreateWithoutProfileInput>
  }

  export type playerCreateManyProfileInputEnvelope = {
    data: Enumerable<playerCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type leaderboard_rowUpsertWithWhereUniqueWithoutProfileInput = {
    where: leaderboard_rowWhereUniqueInput
    update: XOR<leaderboard_rowUpdateWithoutProfileInput, leaderboard_rowUncheckedUpdateWithoutProfileInput>
    create: XOR<leaderboard_rowCreateWithoutProfileInput, leaderboard_rowUncheckedCreateWithoutProfileInput>
  }

  export type leaderboard_rowUpdateWithWhereUniqueWithoutProfileInput = {
    where: leaderboard_rowWhereUniqueInput
    data: XOR<leaderboard_rowUpdateWithoutProfileInput, leaderboard_rowUncheckedUpdateWithoutProfileInput>
  }

  export type leaderboard_rowUpdateManyWithWhereWithoutProfileInput = {
    where: leaderboard_rowScalarWhereInput
    data: XOR<leaderboard_rowUpdateManyMutationInput, leaderboard_rowUncheckedUpdateManyWithoutLeaderboard_rowInput>
  }

  export type leaderboard_rowScalarWhereInput = {
    AND?: Enumerable<leaderboard_rowScalarWhereInput>
    OR?: Enumerable<leaderboard_rowScalarWhereInput>
    NOT?: Enumerable<leaderboard_rowScalarWhereInput>
    leaderboard_id?: IntFilter | number
    profile_id?: IntFilter | number
    name?: StringFilter | string
    rank?: IntNullableFilter | number | null
    rating?: IntNullableFilter | number | null
    last_match_time?: DateTimeNullableFilter | Date | string | null
    drops?: IntNullableFilter | number | null
    losses?: IntNullableFilter | number | null
    streak?: IntNullableFilter | number | null
    wins?: IntNullableFilter | number | null
    updated_at?: DateTimeFilter | Date | string
    rank_country?: IntNullableFilter | number | null
  }

  export type matchUpsertWithWhereUniqueWithoutProfileInput = {
    where: matchWhereUniqueInput
    update: XOR<matchUpdateWithoutProfileInput, matchUncheckedUpdateWithoutProfileInput>
    create: XOR<matchCreateWithoutProfileInput, matchUncheckedCreateWithoutProfileInput>
  }

  export type matchUpdateWithWhereUniqueWithoutProfileInput = {
    where: matchWhereUniqueInput
    data: XOR<matchUpdateWithoutProfileInput, matchUncheckedUpdateWithoutProfileInput>
  }

  export type matchUpdateManyWithWhereWithoutProfileInput = {
    where: matchScalarWhereInput
    data: XOR<matchUpdateManyMutationInput, matchUncheckedUpdateManyWithoutMatchInput>
  }

  export type matchScalarWhereInput = {
    AND?: Enumerable<matchScalarWhereInput>
    OR?: Enumerable<matchScalarWhereInput>
    NOT?: Enumerable<matchScalarWhereInput>
    match_id?: IntFilter | number
    name?: StringNullableFilter | string | null
    server?: StringNullableFilter | string | null
    started?: DateTimeNullableFilter | Date | string | null
    finished?: DateTimeNullableFilter | Date | string | null
    allow_cheats?: BoolNullableFilter | boolean | null
    difficulty?: IntNullableFilter | number | null
    empire_wars_mode?: BoolNullableFilter | boolean | null
    ending_age?: IntNullableFilter | number | null
    full_tech_tree?: BoolNullableFilter | boolean | null
    game_mode?: IntNullableFilter | number | null
    location?: IntNullableFilter | number | null
    lock_speed?: BoolNullableFilter | boolean | null
    lock_teams?: BoolNullableFilter | boolean | null
    map_size?: IntNullableFilter | number | null
    population?: IntNullableFilter | number | null
    record_game?: BoolNullableFilter | boolean | null
    regicide_mode?: BoolNullableFilter | boolean | null
    resources?: IntNullableFilter | number | null
    reveal_map?: IntNullableFilter | number | null
    shared_exploration?: BoolNullableFilter | boolean | null
    speed?: IntNullableFilter | number | null
    starting_age?: IntNullableFilter | number | null
    sudden_death_mode?: BoolNullableFilter | boolean | null
    team_positions?: BoolNullableFilter | boolean | null
    team_together?: BoolNullableFilter | boolean | null
    treaty_length?: IntNullableFilter | number | null
    turbo_mode?: BoolNullableFilter | boolean | null
    victory?: IntNullableFilter | number | null
    internal_leaderboard_id?: IntNullableFilter | number | null
    leaderboard_id?: IntNullableFilter | number | null
    privacy?: IntNullableFilter | number | null
    creator_profile_id?: IntNullableFilter | number | null
  }

  export type playerUpsertWithWhereUniqueWithoutProfileInput = {
    where: playerWhereUniqueInput
    update: XOR<playerUpdateWithoutProfileInput, playerUncheckedUpdateWithoutProfileInput>
    create: XOR<playerCreateWithoutProfileInput, playerUncheckedCreateWithoutProfileInput>
  }

  export type playerUpdateWithWhereUniqueWithoutProfileInput = {
    where: playerWhereUniqueInput
    data: XOR<playerUpdateWithoutProfileInput, playerUncheckedUpdateWithoutProfileInput>
  }

  export type playerUpdateManyWithWhereWithoutProfileInput = {
    where: playerScalarWhereInput
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type smaller_playerCreateWithoutSmaller_matchInput = {
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
    smaller_profile: smaller_profileCreateNestedOneWithoutSmaller_playerInput
  }

  export type smaller_playerUncheckedCreateWithoutSmaller_matchInput = {
    profile_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerCreateOrConnectWithoutSmaller_matchInput = {
    where: smaller_playerWhereUniqueInput
    create: XOR<smaller_playerCreateWithoutSmaller_matchInput, smaller_playerUncheckedCreateWithoutSmaller_matchInput>
  }

  export type smaller_playerCreateManySmaller_matchInputEnvelope = {
    data: Enumerable<smaller_playerCreateManySmaller_matchInput>
    skipDuplicates?: boolean
  }

  export type smaller_playerUpsertWithWhereUniqueWithoutSmaller_matchInput = {
    where: smaller_playerWhereUniqueInput
    update: XOR<smaller_playerUpdateWithoutSmaller_matchInput, smaller_playerUncheckedUpdateWithoutSmaller_matchInput>
    create: XOR<smaller_playerCreateWithoutSmaller_matchInput, smaller_playerUncheckedCreateWithoutSmaller_matchInput>
  }

  export type smaller_playerUpdateWithWhereUniqueWithoutSmaller_matchInput = {
    where: smaller_playerWhereUniqueInput
    data: XOR<smaller_playerUpdateWithoutSmaller_matchInput, smaller_playerUncheckedUpdateWithoutSmaller_matchInput>
  }

  export type smaller_playerUpdateManyWithWhereWithoutSmaller_matchInput = {
    where: smaller_playerScalarWhereInput
    data: XOR<smaller_playerUpdateManyMutationInput, smaller_playerUncheckedUpdateManyWithoutSmaller_playerInput>
  }

  export type smaller_playerScalarWhereInput = {
    AND?: Enumerable<smaller_playerScalarWhereInput>
    OR?: Enumerable<smaller_playerScalarWhereInput>
    NOT?: Enumerable<smaller_playerScalarWhereInput>
    match_id?: IntFilter | number
    profile_id?: IntFilter | number
    slot?: IntFilter | number
    civ?: IntNullableFilter | number | null
    team?: IntNullableFilter | number | null
    color?: IntNullableFilter | number | null
    won?: BoolNullableFilter | boolean | null
  }

  export type smaller_matchCreateWithoutSmaller_playerInput = {
    match_id: number
    name?: string | null
    started?: number | null
    finished?: number | null
    leaderboard_id?: number | null
    num_slots?: number | null
    has_password?: boolean | null
    server?: string | null
    map_type?: number | null
    average_rating?: number | null
    cheats?: boolean | null
    ending_age?: number | null
    expansion?: string | null
    full_tech_tree?: boolean | null
    game_type?: number | null
    has_custom_content?: boolean | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    num_players?: number | null
    pop?: number | null
    ranked?: boolean | null
    rating_type?: number | null
    resources?: number | null
    rms?: string | null
    scenario?: string | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo?: boolean | null
    version?: string | null
    victory?: number | null
    victory_time?: number | null
    visibility?: number | null
  }

  export type smaller_matchUncheckedCreateWithoutSmaller_playerInput = {
    match_id: number
    name?: string | null
    started?: number | null
    finished?: number | null
    leaderboard_id?: number | null
    num_slots?: number | null
    has_password?: boolean | null
    server?: string | null
    map_type?: number | null
    average_rating?: number | null
    cheats?: boolean | null
    ending_age?: number | null
    expansion?: string | null
    full_tech_tree?: boolean | null
    game_type?: number | null
    has_custom_content?: boolean | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    num_players?: number | null
    pop?: number | null
    ranked?: boolean | null
    rating_type?: number | null
    resources?: number | null
    rms?: string | null
    scenario?: string | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo?: boolean | null
    version?: string | null
    victory?: number | null
    victory_time?: number | null
    visibility?: number | null
  }

  export type smaller_matchCreateOrConnectWithoutSmaller_playerInput = {
    where: smaller_matchWhereUniqueInput
    create: XOR<smaller_matchCreateWithoutSmaller_playerInput, smaller_matchUncheckedCreateWithoutSmaller_playerInput>
  }

  export type smaller_profileCreateWithoutSmaller_playerInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
  }

  export type smaller_profileUncheckedCreateWithoutSmaller_playerInput = {
    profile_id: number
    steam_id?: string | null
    name?: string | null
    clan?: string | null
    last_match_time?: Date | string | null
    country?: string | null
    avatarhash?: string | null
    last_match_fetched_time?: Date | string | null
  }

  export type smaller_profileCreateOrConnectWithoutSmaller_playerInput = {
    where: smaller_profileWhereUniqueInput
    create: XOR<smaller_profileCreateWithoutSmaller_playerInput, smaller_profileUncheckedCreateWithoutSmaller_playerInput>
  }

  export type smaller_matchUpsertWithoutSmaller_playerInput = {
    update: XOR<smaller_matchUpdateWithoutSmaller_playerInput, smaller_matchUncheckedUpdateWithoutSmaller_playerInput>
    create: XOR<smaller_matchCreateWithoutSmaller_playerInput, smaller_matchUncheckedCreateWithoutSmaller_playerInput>
  }

  export type smaller_matchUpdateWithoutSmaller_playerInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type smaller_matchUncheckedUpdateWithoutSmaller_playerInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableIntFieldUpdateOperationsInput | number | null
    finished?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    num_slots?: NullableIntFieldUpdateOperationsInput | number | null
    has_password?: NullableBoolFieldUpdateOperationsInput | boolean | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    map_type?: NullableIntFieldUpdateOperationsInput | number | null
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null
    cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    expansion?: NullableStringFieldUpdateOperationsInput | string | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_content?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    num_players?: NullableIntFieldUpdateOperationsInput | number | null
    pop?: NullableIntFieldUpdateOperationsInput | number | null
    ranked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating_type?: NullableIntFieldUpdateOperationsInput | number | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    rms?: NullableStringFieldUpdateOperationsInput | string | null
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    victory_time?: NullableIntFieldUpdateOperationsInput | number | null
    visibility?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type smaller_profileUpsertWithoutSmaller_playerInput = {
    update: XOR<smaller_profileUpdateWithoutSmaller_playerInput, smaller_profileUncheckedUpdateWithoutSmaller_playerInput>
    create: XOR<smaller_profileCreateWithoutSmaller_playerInput, smaller_profileUncheckedCreateWithoutSmaller_playerInput>
  }

  export type smaller_profileUpdateWithoutSmaller_playerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smaller_profileUncheckedUpdateWithoutSmaller_playerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    steam_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    clan?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatarhash?: NullableStringFieldUpdateOperationsInput | string | null
    last_match_fetched_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type smaller_playerCreateWithoutSmaller_profileInput = {
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
    smaller_match: smaller_matchCreateNestedOneWithoutSmaller_playerInput
  }

  export type smaller_playerUncheckedCreateWithoutSmaller_profileInput = {
    match_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerCreateOrConnectWithoutSmaller_profileInput = {
    where: smaller_playerWhereUniqueInput
    create: XOR<smaller_playerCreateWithoutSmaller_profileInput, smaller_playerUncheckedCreateWithoutSmaller_profileInput>
  }

  export type smaller_playerCreateManySmaller_profileInputEnvelope = {
    data: Enumerable<smaller_playerCreateManySmaller_profileInput>
    skipDuplicates?: boolean
  }

  export type smaller_playerUpsertWithWhereUniqueWithoutSmaller_profileInput = {
    where: smaller_playerWhereUniqueInput
    update: XOR<smaller_playerUpdateWithoutSmaller_profileInput, smaller_playerUncheckedUpdateWithoutSmaller_profileInput>
    create: XOR<smaller_playerCreateWithoutSmaller_profileInput, smaller_playerUncheckedCreateWithoutSmaller_profileInput>
  }

  export type smaller_playerUpdateWithWhereUniqueWithoutSmaller_profileInput = {
    where: smaller_playerWhereUniqueInput
    data: XOR<smaller_playerUpdateWithoutSmaller_profileInput, smaller_playerUncheckedUpdateWithoutSmaller_profileInput>
  }

  export type smaller_playerUpdateManyWithWhereWithoutSmaller_profileInput = {
    where: smaller_playerScalarWhereInput
    data: XOR<smaller_playerUpdateManyMutationInput, smaller_playerUncheckedUpdateManyWithoutSmaller_playerInput>
  }

  export type playerCreateManyMatchInput = {
    profile_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type playerUpdateWithoutMatchInput = {
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile?: profileUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutMatchInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type playerUncheckedUpdateManyWithoutPlayerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type leaderboard_rowCreateManyProfileInput = {
    leaderboard_id: number
    name: string
    rank?: number | null
    rating?: number | null
    last_match_time?: Date | string | null
    drops?: number | null
    losses?: number | null
    streak?: number | null
    wins?: number | null
    updated_at: Date | string
    rank_country?: number | null
  }

  export type matchCreateManyProfileInput = {
    match_id: number
    name?: string | null
    server?: string | null
    started?: Date | string | null
    finished?: Date | string | null
    allow_cheats?: boolean | null
    difficulty?: number | null
    empire_wars_mode?: boolean | null
    ending_age?: number | null
    full_tech_tree?: boolean | null
    game_mode?: number | null
    location?: number | null
    lock_speed?: boolean | null
    lock_teams?: boolean | null
    map_size?: number | null
    population?: number | null
    record_game?: boolean | null
    regicide_mode?: boolean | null
    resources?: number | null
    reveal_map?: number | null
    shared_exploration?: boolean | null
    speed?: number | null
    starting_age?: number | null
    sudden_death_mode?: boolean | null
    team_positions?: boolean | null
    team_together?: boolean | null
    treaty_length?: number | null
    turbo_mode?: boolean | null
    victory?: number | null
    internal_leaderboard_id?: number | null
    leaderboard_id?: number | null
    privacy?: number | null
  }

  export type playerCreateManyProfileInput = {
    match_id: number
    civ?: number | null
    slot: number
    team?: number | null
    color?: number | null
    is_ready: number
    status: number
    won?: boolean | null
    replay?: boolean | null
  }

  export type leaderboard_rowUpdateWithoutProfileInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leaderboard_rowUncheckedUpdateWithoutProfileInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type leaderboard_rowUncheckedUpdateManyWithoutLeaderboard_rowInput = {
    leaderboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    last_match_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drops?: NullableIntFieldUpdateOperationsInput | number | null
    losses?: NullableIntFieldUpdateOperationsInput | number | null
    streak?: NullableIntFieldUpdateOperationsInput | number | null
    wins?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rank_country?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type matchUpdateWithoutProfileInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    player?: playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutProfileInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
    player?: playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateManyWithoutMatchInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    started?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allow_cheats?: NullableBoolFieldUpdateOperationsInput | boolean | null
    difficulty?: NullableIntFieldUpdateOperationsInput | number | null
    empire_wars_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ending_age?: NullableIntFieldUpdateOperationsInput | number | null
    full_tech_tree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    game_mode?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableIntFieldUpdateOperationsInput | number | null
    lock_speed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lock_teams?: NullableBoolFieldUpdateOperationsInput | boolean | null
    map_size?: NullableIntFieldUpdateOperationsInput | number | null
    population?: NullableIntFieldUpdateOperationsInput | number | null
    record_game?: NullableBoolFieldUpdateOperationsInput | boolean | null
    regicide_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resources?: NullableIntFieldUpdateOperationsInput | number | null
    reveal_map?: NullableIntFieldUpdateOperationsInput | number | null
    shared_exploration?: NullableBoolFieldUpdateOperationsInput | boolean | null
    speed?: NullableIntFieldUpdateOperationsInput | number | null
    starting_age?: NullableIntFieldUpdateOperationsInput | number | null
    sudden_death_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_positions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    team_together?: NullableBoolFieldUpdateOperationsInput | boolean | null
    treaty_length?: NullableIntFieldUpdateOperationsInput | number | null
    turbo_mode?: NullableBoolFieldUpdateOperationsInput | boolean | null
    victory?: NullableIntFieldUpdateOperationsInput | number | null
    internal_leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    leaderboard_id?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playerUpdateWithoutProfileInput = {
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    match?: matchUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type playerUncheckedUpdateWithoutProfileInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    slot?: IntFieldUpdateOperationsInput | number
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    is_ready?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    replay?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_playerCreateManySmaller_matchInput = {
    profile_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerUpdateWithoutSmaller_matchInput = {
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smaller_profile?: smaller_profileUpdateOneRequiredWithoutSmaller_playerNestedInput
  }

  export type smaller_playerUncheckedUpdateWithoutSmaller_matchInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_playerUncheckedUpdateManyWithoutSmaller_playerInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type smaller_playerCreateManySmaller_profileInput = {
    match_id: number
    slot: number
    civ?: number | null
    team?: number | null
    color?: number | null
    won?: boolean | null
  }

  export type smaller_playerUpdateWithoutSmaller_profileInput = {
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smaller_match?: smaller_matchUpdateOneRequiredWithoutSmaller_playerNestedInput
  }

  export type smaller_playerUncheckedUpdateWithoutSmaller_profileInput = {
    match_id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    civ?: NullableIntFieldUpdateOperationsInput | number | null
    team?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    won?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}