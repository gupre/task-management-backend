
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TimeZone
 * 
 */
export type TimeZone = $Result.DefaultSelection<Prisma.$TimeZonePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectUser
 * 
 */
export type ProjectUser = $Result.DefaultSelection<Prisma.$ProjectUserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model ReportProject
 * 
 */
export type ReportProject = $Result.DefaultSelection<Prisma.$ReportProjectPayload>
/**
 * Model Unavailability
 * 
 */
export type Unavailability = $Result.DefaultSelection<Prisma.$UnavailabilityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  planned: 'planned',
  progress: 'progress',
  end: 'end'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Priority: {
  urgently: 'urgently',
  high: 'high',
  normal: 'normal',
  low: 'low'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TimeZones
 * const timeZones = await prisma.timeZone.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TimeZones
   * const timeZones = await prisma.timeZone.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.timeZone`: Exposes CRUD operations for the **TimeZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeZones
    * const timeZones = await prisma.timeZone.findMany()
    * ```
    */
  get timeZone(): Prisma.TimeZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectUser`: Exposes CRUD operations for the **ProjectUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectUsers
    * const projectUsers = await prisma.projectUser.findMany()
    * ```
    */
  get projectUser(): Prisma.ProjectUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportProject`: Exposes CRUD operations for the **ReportProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportProjects
    * const reportProjects = await prisma.reportProject.findMany()
    * ```
    */
  get reportProject(): Prisma.ReportProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unavailability`: Exposes CRUD operations for the **Unavailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unavailabilities
    * const unavailabilities = await prisma.unavailability.findMany()
    * ```
    */
  get unavailability(): Prisma.UnavailabilityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TimeZone: 'TimeZone',
    Department: 'Department',
    User: 'User',
    Project: 'Project',
    ProjectUser: 'ProjectUser',
    Task: 'Task',
    Role: 'Role',
    Notification: 'Notification',
    History: 'History',
    ReportProject: 'ReportProject',
    Unavailability: 'Unavailability'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "timeZone" | "department" | "user" | "project" | "projectUser" | "task" | "role" | "notification" | "history" | "reportProject" | "unavailability"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TimeZone: {
        payload: Prisma.$TimeZonePayload<ExtArgs>
        fields: Prisma.TimeZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          findFirst: {
            args: Prisma.TimeZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          findMany: {
            args: Prisma.TimeZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>[]
          }
          create: {
            args: Prisma.TimeZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          createMany: {
            args: Prisma.TimeZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeZoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>[]
          }
          delete: {
            args: Prisma.TimeZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          update: {
            args: Prisma.TimeZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          deleteMany: {
            args: Prisma.TimeZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeZoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>[]
          }
          upsert: {
            args: Prisma.TimeZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeZonePayload>
          }
          aggregate: {
            args: Prisma.TimeZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeZone>
          }
          groupBy: {
            args: Prisma.TimeZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeZoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeZoneCountArgs<ExtArgs>
            result: $Utils.Optional<TimeZoneCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectUser: {
        payload: Prisma.$ProjectUserPayload<ExtArgs>
        fields: Prisma.ProjectUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          findFirst: {
            args: Prisma.ProjectUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          findMany: {
            args: Prisma.ProjectUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>[]
          }
          create: {
            args: Prisma.ProjectUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          createMany: {
            args: Prisma.ProjectUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>[]
          }
          delete: {
            args: Prisma.ProjectUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          update: {
            args: Prisma.ProjectUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          deleteMany: {
            args: Prisma.ProjectUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectUserPayload>
          }
          aggregate: {
            args: Prisma.ProjectUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectUser>
          }
          groupBy: {
            args: Prisma.ProjectUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectUserCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectUserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      ReportProject: {
        payload: Prisma.$ReportProjectPayload<ExtArgs>
        fields: Prisma.ReportProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          findFirst: {
            args: Prisma.ReportProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          findMany: {
            args: Prisma.ReportProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>[]
          }
          create: {
            args: Prisma.ReportProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          createMany: {
            args: Prisma.ReportProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>[]
          }
          delete: {
            args: Prisma.ReportProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          update: {
            args: Prisma.ReportProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          deleteMany: {
            args: Prisma.ReportProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>[]
          }
          upsert: {
            args: Prisma.ReportProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportProjectPayload>
          }
          aggregate: {
            args: Prisma.ReportProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportProject>
          }
          groupBy: {
            args: Prisma.ReportProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ReportProjectCountAggregateOutputType> | number
          }
        }
      }
      Unavailability: {
        payload: Prisma.$UnavailabilityPayload<ExtArgs>
        fields: Prisma.UnavailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnavailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnavailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findFirst: {
            args: Prisma.UnavailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnavailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          findMany: {
            args: Prisma.UnavailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          create: {
            args: Prisma.UnavailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          createMany: {
            args: Prisma.UnavailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnavailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          delete: {
            args: Prisma.UnavailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          update: {
            args: Prisma.UnavailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          deleteMany: {
            args: Prisma.UnavailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnavailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnavailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>[]
          }
          upsert: {
            args: Prisma.UnavailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailabilityPayload>
          }
          aggregate: {
            args: Prisma.UnavailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnavailability>
          }
          groupBy: {
            args: Prisma.UnavailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnavailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<UnavailabilityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    timeZone?: TimeZoneOmit
    department?: DepartmentOmit
    user?: UserOmit
    project?: ProjectOmit
    projectUser?: ProjectUserOmit
    task?: TaskOmit
    role?: RoleOmit
    notification?: NotificationOmit
    history?: HistoryOmit
    reportProject?: ReportProjectOmit
    unavailability?: UnavailabilityOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TimeZoneCountOutputType
   */

  export type TimeZoneCountOutputType = {
    users: number
  }

  export type TimeZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TimeZoneCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TimeZoneCountOutputType without action
   */
  export type TimeZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZoneCountOutputType
     */
    select?: TimeZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeZoneCountOutputType without action
   */
  export type TimeZoneCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
    history: number
    createdHistories: number
    Task: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
    history?: boolean | DepartmentCountOutputTypeCountHistoryArgs
    createdHistories?: boolean | DepartmentCountOutputTypeCountCreatedHistoriesArgs
    Task?: boolean | DepartmentCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCreatedHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    unavailabilityPeriods: number
    tasks: number
    history: number
    projects: number
    notification: number
    createdHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unavailabilityPeriods?: boolean | UserCountOutputTypeCountUnavailabilityPeriodsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
    createdHistories?: boolean | UserCountOutputTypeCountCreatedHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUnavailabilityPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    users: number
    tasks: number
    reports: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProjectCountOutputTypeCountUsersArgs
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    reports?: boolean | ProjectCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportProjectWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    history: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | TaskCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TimeZone
   */

  export type AggregateTimeZone = {
    _count: TimeZoneCountAggregateOutputType | null
    _avg: TimeZoneAvgAggregateOutputType | null
    _sum: TimeZoneSumAggregateOutputType | null
    _min: TimeZoneMinAggregateOutputType | null
    _max: TimeZoneMaxAggregateOutputType | null
  }

  export type TimeZoneAvgAggregateOutputType = {
    timezoneId: number | null
    offset: number | null
  }

  export type TimeZoneSumAggregateOutputType = {
    timezoneId: number | null
    offset: number | null
  }

  export type TimeZoneMinAggregateOutputType = {
    timezoneId: number | null
    name: string | null
    offset: number | null
  }

  export type TimeZoneMaxAggregateOutputType = {
    timezoneId: number | null
    name: string | null
    offset: number | null
  }

  export type TimeZoneCountAggregateOutputType = {
    timezoneId: number
    name: number
    offset: number
    _all: number
  }


  export type TimeZoneAvgAggregateInputType = {
    timezoneId?: true
    offset?: true
  }

  export type TimeZoneSumAggregateInputType = {
    timezoneId?: true
    offset?: true
  }

  export type TimeZoneMinAggregateInputType = {
    timezoneId?: true
    name?: true
    offset?: true
  }

  export type TimeZoneMaxAggregateInputType = {
    timezoneId?: true
    name?: true
    offset?: true
  }

  export type TimeZoneCountAggregateInputType = {
    timezoneId?: true
    name?: true
    offset?: true
    _all?: true
  }

  export type TimeZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeZone to aggregate.
     */
    where?: TimeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeZones to fetch.
     */
    orderBy?: TimeZoneOrderByWithRelationInput | TimeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeZones
    **/
    _count?: true | TimeZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeZoneMaxAggregateInputType
  }

  export type GetTimeZoneAggregateType<T extends TimeZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeZone[P]>
      : GetScalarType<T[P], AggregateTimeZone[P]>
  }




  export type TimeZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeZoneWhereInput
    orderBy?: TimeZoneOrderByWithAggregationInput | TimeZoneOrderByWithAggregationInput[]
    by: TimeZoneScalarFieldEnum[] | TimeZoneScalarFieldEnum
    having?: TimeZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeZoneCountAggregateInputType | true
    _avg?: TimeZoneAvgAggregateInputType
    _sum?: TimeZoneSumAggregateInputType
    _min?: TimeZoneMinAggregateInputType
    _max?: TimeZoneMaxAggregateInputType
  }

  export type TimeZoneGroupByOutputType = {
    timezoneId: number
    name: string
    offset: number
    _count: TimeZoneCountAggregateOutputType | null
    _avg: TimeZoneAvgAggregateOutputType | null
    _sum: TimeZoneSumAggregateOutputType | null
    _min: TimeZoneMinAggregateOutputType | null
    _max: TimeZoneMaxAggregateOutputType | null
  }

  type GetTimeZoneGroupByPayload<T extends TimeZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeZoneGroupByOutputType[P]>
            : GetScalarType<T[P], TimeZoneGroupByOutputType[P]>
        }
      >
    >


  export type TimeZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timezoneId?: boolean
    name?: boolean
    offset?: boolean
    users?: boolean | TimeZone$usersArgs<ExtArgs>
    _count?: boolean | TimeZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeZone"]>

  export type TimeZoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timezoneId?: boolean
    name?: boolean
    offset?: boolean
  }, ExtArgs["result"]["timeZone"]>

  export type TimeZoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timezoneId?: boolean
    name?: boolean
    offset?: boolean
  }, ExtArgs["result"]["timeZone"]>

  export type TimeZoneSelectScalar = {
    timezoneId?: boolean
    name?: boolean
    offset?: boolean
  }

  export type TimeZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"timezoneId" | "name" | "offset", ExtArgs["result"]["timeZone"]>
  export type TimeZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TimeZone$usersArgs<ExtArgs>
    _count?: boolean | TimeZoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeZoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TimeZoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimeZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeZone"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      timezoneId: number
      name: string
      offset: number
    }, ExtArgs["result"]["timeZone"]>
    composites: {}
  }

  type TimeZoneGetPayload<S extends boolean | null | undefined | TimeZoneDefaultArgs> = $Result.GetResult<Prisma.$TimeZonePayload, S>

  type TimeZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeZoneCountAggregateInputType | true
    }

  export interface TimeZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeZone'], meta: { name: 'TimeZone' } }
    /**
     * Find zero or one TimeZone that matches the filter.
     * @param {TimeZoneFindUniqueArgs} args - Arguments to find a TimeZone
     * @example
     * // Get one TimeZone
     * const timeZone = await prisma.timeZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeZoneFindUniqueArgs>(args: SelectSubset<T, TimeZoneFindUniqueArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TimeZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeZoneFindUniqueOrThrowArgs} args - Arguments to find a TimeZone
     * @example
     * // Get one TimeZone
     * const timeZone = await prisma.timeZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TimeZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneFindFirstArgs} args - Arguments to find a TimeZone
     * @example
     * // Get one TimeZone
     * const timeZone = await prisma.timeZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeZoneFindFirstArgs>(args?: SelectSubset<T, TimeZoneFindFirstArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TimeZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneFindFirstOrThrowArgs} args - Arguments to find a TimeZone
     * @example
     * // Get one TimeZone
     * const timeZone = await prisma.timeZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TimeZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeZones
     * const timeZones = await prisma.timeZone.findMany()
     * 
     * // Get first 10 TimeZones
     * const timeZones = await prisma.timeZone.findMany({ take: 10 })
     * 
     * // Only select the `timezoneId`
     * const timeZoneWithTimezoneIdOnly = await prisma.timeZone.findMany({ select: { timezoneId: true } })
     * 
     */
    findMany<T extends TimeZoneFindManyArgs>(args?: SelectSubset<T, TimeZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TimeZone.
     * @param {TimeZoneCreateArgs} args - Arguments to create a TimeZone.
     * @example
     * // Create one TimeZone
     * const TimeZone = await prisma.timeZone.create({
     *   data: {
     *     // ... data to create a TimeZone
     *   }
     * })
     * 
     */
    create<T extends TimeZoneCreateArgs>(args: SelectSubset<T, TimeZoneCreateArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TimeZones.
     * @param {TimeZoneCreateManyArgs} args - Arguments to create many TimeZones.
     * @example
     * // Create many TimeZones
     * const timeZone = await prisma.timeZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeZoneCreateManyArgs>(args?: SelectSubset<T, TimeZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeZones and returns the data saved in the database.
     * @param {TimeZoneCreateManyAndReturnArgs} args - Arguments to create many TimeZones.
     * @example
     * // Create many TimeZones
     * const timeZone = await prisma.timeZone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeZones and only return the `timezoneId`
     * const timeZoneWithTimezoneIdOnly = await prisma.timeZone.createManyAndReturn({
     *   select: { timezoneId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeZoneCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TimeZone.
     * @param {TimeZoneDeleteArgs} args - Arguments to delete one TimeZone.
     * @example
     * // Delete one TimeZone
     * const TimeZone = await prisma.timeZone.delete({
     *   where: {
     *     // ... filter to delete one TimeZone
     *   }
     * })
     * 
     */
    delete<T extends TimeZoneDeleteArgs>(args: SelectSubset<T, TimeZoneDeleteArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TimeZone.
     * @param {TimeZoneUpdateArgs} args - Arguments to update one TimeZone.
     * @example
     * // Update one TimeZone
     * const timeZone = await prisma.timeZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeZoneUpdateArgs>(args: SelectSubset<T, TimeZoneUpdateArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TimeZones.
     * @param {TimeZoneDeleteManyArgs} args - Arguments to filter TimeZones to delete.
     * @example
     * // Delete a few TimeZones
     * const { count } = await prisma.timeZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeZoneDeleteManyArgs>(args?: SelectSubset<T, TimeZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeZones
     * const timeZone = await prisma.timeZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeZoneUpdateManyArgs>(args: SelectSubset<T, TimeZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeZones and returns the data updated in the database.
     * @param {TimeZoneUpdateManyAndReturnArgs} args - Arguments to update many TimeZones.
     * @example
     * // Update many TimeZones
     * const timeZone = await prisma.timeZone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeZones and only return the `timezoneId`
     * const timeZoneWithTimezoneIdOnly = await prisma.timeZone.updateManyAndReturn({
     *   select: { timezoneId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeZoneUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TimeZone.
     * @param {TimeZoneUpsertArgs} args - Arguments to update or create a TimeZone.
     * @example
     * // Update or create a TimeZone
     * const timeZone = await prisma.timeZone.upsert({
     *   create: {
     *     // ... data to create a TimeZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeZone we want to update
     *   }
     * })
     */
    upsert<T extends TimeZoneUpsertArgs>(args: SelectSubset<T, TimeZoneUpsertArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TimeZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneCountArgs} args - Arguments to filter TimeZones to count.
     * @example
     * // Count the number of TimeZones
     * const count = await prisma.timeZone.count({
     *   where: {
     *     // ... the filter for the TimeZones we want to count
     *   }
     * })
    **/
    count<T extends TimeZoneCountArgs>(
      args?: Subset<T, TimeZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeZoneAggregateArgs>(args: Subset<T, TimeZoneAggregateArgs>): Prisma.PrismaPromise<GetTimeZoneAggregateType<T>>

    /**
     * Group by TimeZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeZoneGroupByArgs} args - Group by arguments.
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
      T extends TimeZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeZoneGroupByArgs['orderBy'] }
        : { orderBy?: TimeZoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TimeZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeZone model
   */
  readonly fields: TimeZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends TimeZone$usersArgs<ExtArgs> = {}>(args?: Subset<T, TimeZone$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeZone model
   */ 
  interface TimeZoneFieldRefs {
    readonly timezoneId: FieldRef<"TimeZone", 'Int'>
    readonly name: FieldRef<"TimeZone", 'String'>
    readonly offset: FieldRef<"TimeZone", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TimeZone findUnique
   */
  export type TimeZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter, which TimeZone to fetch.
     */
    where: TimeZoneWhereUniqueInput
  }

  /**
   * TimeZone findUniqueOrThrow
   */
  export type TimeZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter, which TimeZone to fetch.
     */
    where: TimeZoneWhereUniqueInput
  }

  /**
   * TimeZone findFirst
   */
  export type TimeZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter, which TimeZone to fetch.
     */
    where?: TimeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeZones to fetch.
     */
    orderBy?: TimeZoneOrderByWithRelationInput | TimeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeZones.
     */
    cursor?: TimeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeZones.
     */
    distinct?: TimeZoneScalarFieldEnum | TimeZoneScalarFieldEnum[]
  }

  /**
   * TimeZone findFirstOrThrow
   */
  export type TimeZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter, which TimeZone to fetch.
     */
    where?: TimeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeZones to fetch.
     */
    orderBy?: TimeZoneOrderByWithRelationInput | TimeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeZones.
     */
    cursor?: TimeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeZones.
     */
    distinct?: TimeZoneScalarFieldEnum | TimeZoneScalarFieldEnum[]
  }

  /**
   * TimeZone findMany
   */
  export type TimeZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter, which TimeZones to fetch.
     */
    where?: TimeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeZones to fetch.
     */
    orderBy?: TimeZoneOrderByWithRelationInput | TimeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeZones.
     */
    cursor?: TimeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeZones.
     */
    skip?: number
    distinct?: TimeZoneScalarFieldEnum | TimeZoneScalarFieldEnum[]
  }

  /**
   * TimeZone create
   */
  export type TimeZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeZone.
     */
    data: XOR<TimeZoneCreateInput, TimeZoneUncheckedCreateInput>
  }

  /**
   * TimeZone createMany
   */
  export type TimeZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeZones.
     */
    data: TimeZoneCreateManyInput | TimeZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeZone createManyAndReturn
   */
  export type TimeZoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * The data used to create many TimeZones.
     */
    data: TimeZoneCreateManyInput | TimeZoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeZone update
   */
  export type TimeZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeZone.
     */
    data: XOR<TimeZoneUpdateInput, TimeZoneUncheckedUpdateInput>
    /**
     * Choose, which TimeZone to update.
     */
    where: TimeZoneWhereUniqueInput
  }

  /**
   * TimeZone updateMany
   */
  export type TimeZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeZones.
     */
    data: XOR<TimeZoneUpdateManyMutationInput, TimeZoneUncheckedUpdateManyInput>
    /**
     * Filter which TimeZones to update
     */
    where?: TimeZoneWhereInput
    /**
     * Limit how many TimeZones to update.
     */
    limit?: number
  }

  /**
   * TimeZone updateManyAndReturn
   */
  export type TimeZoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * The data used to update TimeZones.
     */
    data: XOR<TimeZoneUpdateManyMutationInput, TimeZoneUncheckedUpdateManyInput>
    /**
     * Filter which TimeZones to update
     */
    where?: TimeZoneWhereInput
    /**
     * Limit how many TimeZones to update.
     */
    limit?: number
  }

  /**
   * TimeZone upsert
   */
  export type TimeZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeZone to update in case it exists.
     */
    where: TimeZoneWhereUniqueInput
    /**
     * In case the TimeZone found by the `where` argument doesn't exist, create a new TimeZone with this data.
     */
    create: XOR<TimeZoneCreateInput, TimeZoneUncheckedCreateInput>
    /**
     * In case the TimeZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeZoneUpdateInput, TimeZoneUncheckedUpdateInput>
  }

  /**
   * TimeZone delete
   */
  export type TimeZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
    /**
     * Filter which TimeZone to delete.
     */
    where: TimeZoneWhereUniqueInput
  }

  /**
   * TimeZone deleteMany
   */
  export type TimeZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeZones to delete
     */
    where?: TimeZoneWhereInput
    /**
     * Limit how many TimeZones to delete.
     */
    limit?: number
  }

  /**
   * TimeZone.users
   */
  export type TimeZone$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * TimeZone without action
   */
  export type TimeZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeZone
     */
    select?: TimeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeZone
     */
    omit?: TimeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeZoneInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    departmentId: number | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    departmentId: number | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    departmentId: number
    name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentSumAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentMinAggregateInputType = {
    departmentId?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    departmentId?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    departmentId?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    departmentId: number
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    name?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    history?: boolean | Department$historyArgs<ExtArgs>
    createdHistories?: boolean | Department$createdHistoriesArgs<ExtArgs>
    Task?: boolean | Department$TaskArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    departmentId?: boolean
    name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentId" | "name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    history?: boolean | Department$historyArgs<ExtArgs>
    createdHistories?: boolean | Department$createdHistoriesArgs<ExtArgs>
    Task?: boolean | Department$TaskArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
      createdHistories: Prisma.$HistoryPayload<ExtArgs>[]
      Task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentId: number
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.findMany({ select: { departmentId: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.createManyAndReturn({
     *   select: { departmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { departmentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    history<T extends Department$historyArgs<ExtArgs> = {}>(args?: Subset<T, Department$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdHistories<T extends Department$createdHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Department$createdHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Task<T extends Department$TaskArgs<ExtArgs> = {}>(args?: Subset<T, Department$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly departmentId: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department.history
   */
  export type Department$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Department.createdHistories
   */
  export type Department$createdHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Department.Task
   */
  export type Department$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    timezoneId: number | null
    departmentId: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    timezoneId: number | null
    departmentId: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    timezoneId: number | null
    departmentId: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
    isAdmin: boolean | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    timezoneId: number | null
    departmentId: number | null
    name: string | null
    email: string | null
    password: string | null
    roleId: number | null
    isAdmin: boolean | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    timezoneId: number
    departmentId: number
    name: number
    email: number
    password: number
    workingHours: number
    roleId: number
    isAdmin: number
    isActive: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    timezoneId?: true
    departmentId?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    timezoneId?: true
    departmentId?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    timezoneId?: true
    departmentId?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    isAdmin?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    timezoneId?: true
    departmentId?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    isAdmin?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    timezoneId?: true
    departmentId?: true
    name?: true
    email?: true
    password?: true
    workingHours?: true
    roleId?: true
    isAdmin?: true
    isActive?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours: JsonValue | null
    roleId: number | null
    isAdmin: boolean
    isActive: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    timezoneId?: boolean
    departmentId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    workingHours?: boolean
    roleId?: boolean
    isAdmin?: boolean
    isActive?: boolean
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    unavailabilityPeriods?: boolean | User$unavailabilityPeriodsArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    createdHistories?: boolean | User$createdHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    timezoneId?: boolean
    departmentId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    workingHours?: boolean
    roleId?: boolean
    isAdmin?: boolean
    isActive?: boolean
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    timezoneId?: boolean
    departmentId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    workingHours?: boolean
    roleId?: boolean
    isAdmin?: boolean
    isActive?: boolean
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    timezoneId?: boolean
    departmentId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    workingHours?: boolean
    roleId?: boolean
    isAdmin?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "timezoneId" | "departmentId" | "name" | "email" | "password" | "workingHours" | "roleId" | "isAdmin" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    unavailabilityPeriods?: boolean | User$unavailabilityPeriodsArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    createdHistories?: boolean | User$createdHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timezone?: boolean | TimeZoneDefaultArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      timezone: Prisma.$TimeZonePayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs>
      unavailabilityPeriods: Prisma.$UnavailabilityPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
      projects: Prisma.$ProjectUserPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      createdHistories: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      timezoneId: number
      departmentId: number
      name: string
      email: string
      password: string
      workingHours: Prisma.JsonValue | null
      roleId: number | null
      isAdmin: boolean
      isActive: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timezone<T extends TimeZoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeZoneDefaultArgs<ExtArgs>>): Prisma__TimeZoneClient<$Result.GetResult<Prisma.$TimeZonePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    unavailabilityPeriods<T extends User$unavailabilityPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, User$unavailabilityPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notification<T extends User$notificationArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdHistories<T extends User$createdHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly timezoneId: FieldRef<"User", 'Int'>
    readonly departmentId: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly workingHours: FieldRef<"User", 'Json'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.unavailabilityPeriods
   */
  export type User$unavailabilityPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    where?: UnavailabilityWhereInput
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    cursor?: UnavailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    where?: ProjectUserWhereInput
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    cursor?: ProjectUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUserScalarFieldEnum | ProjectUserScalarFieldEnum[]
  }

  /**
   * User.notification
   */
  export type User$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.createdHistories
   */
  export type User$createdHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    projectId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    projectId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    projectId: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
  }

  export type ProjectMaxAggregateOutputType = {
    projectId: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
  }

  export type ProjectCountAggregateOutputType = {
    projectId: number
    name: number
    description: number
    startDate: number
    endDate: number
    status: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    projectId?: true
  }

  export type ProjectSumAggregateInputType = {
    projectId?: true
  }

  export type ProjectMinAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type ProjectMaxAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type ProjectCountAggregateInputType = {
    projectId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    projectId: number
    name: string
    description: string | null
    startDate: Date
    endDate: Date | null
    status: $Enums.Status
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    users?: boolean | Project$usersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    reports?: boolean | Project$reportsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    projectId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "name" | "description" | "startDate" | "endDate" | "status", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Project$usersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    reports?: boolean | Project$reportsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      users: Prisma.$ProjectUserPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      reports: Prisma.$ReportProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      name: string
      description: string | null
      startDate: Date
      endDate: Date | null
      status: $Enums.Status
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `projectId`
     * const projectWithProjectIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { projectId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Project$usersArgs<ExtArgs> = {}>(args?: Subset<T, Project$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    reports<T extends Project$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Project$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly projectId: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly status: FieldRef<"Project", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.users
   */
  export type Project$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    where?: ProjectUserWhereInput
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    cursor?: ProjectUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectUserScalarFieldEnum | ProjectUserScalarFieldEnum[]
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.reports
   */
  export type Project$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    where?: ReportProjectWhereInput
    orderBy?: ReportProjectOrderByWithRelationInput | ReportProjectOrderByWithRelationInput[]
    cursor?: ReportProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportProjectScalarFieldEnum | ReportProjectScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectUser
   */

  export type AggregateProjectUser = {
    _count: ProjectUserCountAggregateOutputType | null
    _avg: ProjectUserAvgAggregateOutputType | null
    _sum: ProjectUserSumAggregateOutputType | null
    _min: ProjectUserMinAggregateOutputType | null
    _max: ProjectUserMaxAggregateOutputType | null
  }

  export type ProjectUserAvgAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectUserSumAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectUserMinAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectUserMaxAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectUserCountAggregateOutputType = {
    userId: number
    projectId: number
    _all: number
  }


  export type ProjectUserAvgAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectUserSumAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectUserMinAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectUserMaxAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectUserCountAggregateInputType = {
    userId?: true
    projectId?: true
    _all?: true
  }

  export type ProjectUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUser to aggregate.
     */
    where?: ProjectUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUsers to fetch.
     */
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectUsers
    **/
    _count?: true | ProjectUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectUserMaxAggregateInputType
  }

  export type GetProjectUserAggregateType<T extends ProjectUserAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectUser[P]>
      : GetScalarType<T[P], AggregateProjectUser[P]>
  }




  export type ProjectUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectUserWhereInput
    orderBy?: ProjectUserOrderByWithAggregationInput | ProjectUserOrderByWithAggregationInput[]
    by: ProjectUserScalarFieldEnum[] | ProjectUserScalarFieldEnum
    having?: ProjectUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectUserCountAggregateInputType | true
    _avg?: ProjectUserAvgAggregateInputType
    _sum?: ProjectUserSumAggregateInputType
    _min?: ProjectUserMinAggregateInputType
    _max?: ProjectUserMaxAggregateInputType
  }

  export type ProjectUserGroupByOutputType = {
    userId: number
    projectId: number
    _count: ProjectUserCountAggregateOutputType | null
    _avg: ProjectUserAvgAggregateOutputType | null
    _sum: ProjectUserSumAggregateOutputType | null
    _min: ProjectUserMinAggregateOutputType | null
    _max: ProjectUserMaxAggregateOutputType | null
  }

  type GetProjectUserGroupByPayload<T extends ProjectUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectUserGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectUserGroupByOutputType[P]>
        }
      >
    >


  export type ProjectUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUser"]>

  export type ProjectUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUser"]>

  export type ProjectUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectUser"]>

  export type ProjectUserSelectScalar = {
    userId?: boolean
    projectId?: boolean
  }

  export type ProjectUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "projectId", ExtArgs["result"]["projectUser"]>
  export type ProjectUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      projectId: number
    }, ExtArgs["result"]["projectUser"]>
    composites: {}
  }

  type ProjectUserGetPayload<S extends boolean | null | undefined | ProjectUserDefaultArgs> = $Result.GetResult<Prisma.$ProjectUserPayload, S>

  type ProjectUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectUserCountAggregateInputType | true
    }

  export interface ProjectUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectUser'], meta: { name: 'ProjectUser' } }
    /**
     * Find zero or one ProjectUser that matches the filter.
     * @param {ProjectUserFindUniqueArgs} args - Arguments to find a ProjectUser
     * @example
     * // Get one ProjectUser
     * const projectUser = await prisma.projectUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectUserFindUniqueArgs>(args: SelectSubset<T, ProjectUserFindUniqueArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProjectUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectUserFindUniqueOrThrowArgs} args - Arguments to find a ProjectUser
     * @example
     * // Get one ProjectUser
     * const projectUser = await prisma.projectUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserFindFirstArgs} args - Arguments to find a ProjectUser
     * @example
     * // Get one ProjectUser
     * const projectUser = await prisma.projectUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectUserFindFirstArgs>(args?: SelectSubset<T, ProjectUserFindFirstArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserFindFirstOrThrowArgs} args - Arguments to find a ProjectUser
     * @example
     * // Get one ProjectUser
     * const projectUser = await prisma.projectUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProjectUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectUsers
     * const projectUsers = await prisma.projectUser.findMany()
     * 
     * // Get first 10 ProjectUsers
     * const projectUsers = await prisma.projectUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const projectUserWithUserIdOnly = await prisma.projectUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProjectUserFindManyArgs>(args?: SelectSubset<T, ProjectUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProjectUser.
     * @param {ProjectUserCreateArgs} args - Arguments to create a ProjectUser.
     * @example
     * // Create one ProjectUser
     * const ProjectUser = await prisma.projectUser.create({
     *   data: {
     *     // ... data to create a ProjectUser
     *   }
     * })
     * 
     */
    create<T extends ProjectUserCreateArgs>(args: SelectSubset<T, ProjectUserCreateArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProjectUsers.
     * @param {ProjectUserCreateManyArgs} args - Arguments to create many ProjectUsers.
     * @example
     * // Create many ProjectUsers
     * const projectUser = await prisma.projectUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectUserCreateManyArgs>(args?: SelectSubset<T, ProjectUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectUsers and returns the data saved in the database.
     * @param {ProjectUserCreateManyAndReturnArgs} args - Arguments to create many ProjectUsers.
     * @example
     * // Create many ProjectUsers
     * const projectUser = await prisma.projectUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectUsers and only return the `userId`
     * const projectUserWithUserIdOnly = await prisma.projectUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProjectUser.
     * @param {ProjectUserDeleteArgs} args - Arguments to delete one ProjectUser.
     * @example
     * // Delete one ProjectUser
     * const ProjectUser = await prisma.projectUser.delete({
     *   where: {
     *     // ... filter to delete one ProjectUser
     *   }
     * })
     * 
     */
    delete<T extends ProjectUserDeleteArgs>(args: SelectSubset<T, ProjectUserDeleteArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProjectUser.
     * @param {ProjectUserUpdateArgs} args - Arguments to update one ProjectUser.
     * @example
     * // Update one ProjectUser
     * const projectUser = await prisma.projectUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUserUpdateArgs>(args: SelectSubset<T, ProjectUserUpdateArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProjectUsers.
     * @param {ProjectUserDeleteManyArgs} args - Arguments to filter ProjectUsers to delete.
     * @example
     * // Delete a few ProjectUsers
     * const { count } = await prisma.projectUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectUserDeleteManyArgs>(args?: SelectSubset<T, ProjectUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectUsers
     * const projectUser = await prisma.projectUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUserUpdateManyArgs>(args: SelectSubset<T, ProjectUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectUsers and returns the data updated in the database.
     * @param {ProjectUserUpdateManyAndReturnArgs} args - Arguments to update many ProjectUsers.
     * @example
     * // Update many ProjectUsers
     * const projectUser = await prisma.projectUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectUsers and only return the `userId`
     * const projectUserWithUserIdOnly = await prisma.projectUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProjectUser.
     * @param {ProjectUserUpsertArgs} args - Arguments to update or create a ProjectUser.
     * @example
     * // Update or create a ProjectUser
     * const projectUser = await prisma.projectUser.upsert({
     *   create: {
     *     // ... data to create a ProjectUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectUser we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUserUpsertArgs>(args: SelectSubset<T, ProjectUserUpsertArgs<ExtArgs>>): Prisma__ProjectUserClient<$Result.GetResult<Prisma.$ProjectUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProjectUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserCountArgs} args - Arguments to filter ProjectUsers to count.
     * @example
     * // Count the number of ProjectUsers
     * const count = await prisma.projectUser.count({
     *   where: {
     *     // ... the filter for the ProjectUsers we want to count
     *   }
     * })
    **/
    count<T extends ProjectUserCountArgs>(
      args?: Subset<T, ProjectUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectUserAggregateArgs>(args: Subset<T, ProjectUserAggregateArgs>): Prisma.PrismaPromise<GetProjectUserAggregateType<T>>

    /**
     * Group by ProjectUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUserGroupByArgs} args - Group by arguments.
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
      T extends ProjectUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectUserGroupByArgs['orderBy'] }
        : { orderBy?: ProjectUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectUser model
   */
  readonly fields: ProjectUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectUser model
   */ 
  interface ProjectUserFieldRefs {
    readonly userId: FieldRef<"ProjectUser", 'Int'>
    readonly projectId: FieldRef<"ProjectUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectUser findUnique
   */
  export type ProjectUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUser to fetch.
     */
    where: ProjectUserWhereUniqueInput
  }

  /**
   * ProjectUser findUniqueOrThrow
   */
  export type ProjectUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUser to fetch.
     */
    where: ProjectUserWhereUniqueInput
  }

  /**
   * ProjectUser findFirst
   */
  export type ProjectUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUser to fetch.
     */
    where?: ProjectUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUsers to fetch.
     */
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUsers.
     */
    cursor?: ProjectUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUsers.
     */
    distinct?: ProjectUserScalarFieldEnum | ProjectUserScalarFieldEnum[]
  }

  /**
   * ProjectUser findFirstOrThrow
   */
  export type ProjectUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUser to fetch.
     */
    where?: ProjectUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUsers to fetch.
     */
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectUsers.
     */
    cursor?: ProjectUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectUsers.
     */
    distinct?: ProjectUserScalarFieldEnum | ProjectUserScalarFieldEnum[]
  }

  /**
   * ProjectUser findMany
   */
  export type ProjectUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter, which ProjectUsers to fetch.
     */
    where?: ProjectUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectUsers to fetch.
     */
    orderBy?: ProjectUserOrderByWithRelationInput | ProjectUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectUsers.
     */
    cursor?: ProjectUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectUsers.
     */
    skip?: number
    distinct?: ProjectUserScalarFieldEnum | ProjectUserScalarFieldEnum[]
  }

  /**
   * ProjectUser create
   */
  export type ProjectUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectUser.
     */
    data: XOR<ProjectUserCreateInput, ProjectUserUncheckedCreateInput>
  }

  /**
   * ProjectUser createMany
   */
  export type ProjectUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectUsers.
     */
    data: ProjectUserCreateManyInput | ProjectUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectUser createManyAndReturn
   */
  export type ProjectUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectUsers.
     */
    data: ProjectUserCreateManyInput | ProjectUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectUser update
   */
  export type ProjectUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectUser.
     */
    data: XOR<ProjectUserUpdateInput, ProjectUserUncheckedUpdateInput>
    /**
     * Choose, which ProjectUser to update.
     */
    where: ProjectUserWhereUniqueInput
  }

  /**
   * ProjectUser updateMany
   */
  export type ProjectUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectUsers.
     */
    data: XOR<ProjectUserUpdateManyMutationInput, ProjectUserUncheckedUpdateManyInput>
    /**
     * Filter which ProjectUsers to update
     */
    where?: ProjectUserWhereInput
    /**
     * Limit how many ProjectUsers to update.
     */
    limit?: number
  }

  /**
   * ProjectUser updateManyAndReturn
   */
  export type ProjectUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * The data used to update ProjectUsers.
     */
    data: XOR<ProjectUserUpdateManyMutationInput, ProjectUserUncheckedUpdateManyInput>
    /**
     * Filter which ProjectUsers to update
     */
    where?: ProjectUserWhereInput
    /**
     * Limit how many ProjectUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectUser upsert
   */
  export type ProjectUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectUser to update in case it exists.
     */
    where: ProjectUserWhereUniqueInput
    /**
     * In case the ProjectUser found by the `where` argument doesn't exist, create a new ProjectUser with this data.
     */
    create: XOR<ProjectUserCreateInput, ProjectUserUncheckedCreateInput>
    /**
     * In case the ProjectUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUserUpdateInput, ProjectUserUncheckedUpdateInput>
  }

  /**
   * ProjectUser delete
   */
  export type ProjectUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
    /**
     * Filter which ProjectUser to delete.
     */
    where: ProjectUserWhereUniqueInput
  }

  /**
   * ProjectUser deleteMany
   */
  export type ProjectUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectUsers to delete
     */
    where?: ProjectUserWhereInput
    /**
     * Limit how many ProjectUsers to delete.
     */
    limit?: number
  }

  /**
   * ProjectUser without action
   */
  export type ProjectUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectUser
     */
    select?: ProjectUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectUser
     */
    omit?: ProjectUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectUserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    taskId: number | null
    projectId: number | null
    userId: number | null
    departmentId: number | null
    hoursSpent: number | null
    estimatedHours: number | null
    progress: number | null
    order: number | null
  }

  export type TaskSumAggregateOutputType = {
    taskId: number | null
    projectId: number | null
    userId: number | null
    departmentId: number | null
    hoursSpent: number | null
    estimatedHours: number | null
    progress: number | null
    order: number | null
  }

  export type TaskMinAggregateOutputType = {
    taskId: number | null
    projectId: number | null
    userId: number | null
    departmentId: number | null
    name: string | null
    description: string | null
    assignmentDate: Date | null
    hoursSpent: number | null
    dueDate: Date | null
    estimatedHours: number | null
    progress: number | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    order: number | null
  }

  export type TaskMaxAggregateOutputType = {
    taskId: number | null
    projectId: number | null
    userId: number | null
    departmentId: number | null
    name: string | null
    description: string | null
    assignmentDate: Date | null
    hoursSpent: number | null
    dueDate: Date | null
    estimatedHours: number | null
    progress: number | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    order: number | null
  }

  export type TaskCountAggregateOutputType = {
    taskId: number
    projectId: number
    userId: number
    departmentId: number
    name: number
    description: number
    assignmentDate: number
    hoursSpent: number
    dueDate: number
    estimatedHours: number
    progress: number
    priority: number
    status: number
    order: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    taskId?: true
    projectId?: true
    userId?: true
    departmentId?: true
    hoursSpent?: true
    estimatedHours?: true
    progress?: true
    order?: true
  }

  export type TaskSumAggregateInputType = {
    taskId?: true
    projectId?: true
    userId?: true
    departmentId?: true
    hoursSpent?: true
    estimatedHours?: true
    progress?: true
    order?: true
  }

  export type TaskMinAggregateInputType = {
    taskId?: true
    projectId?: true
    userId?: true
    departmentId?: true
    name?: true
    description?: true
    assignmentDate?: true
    hoursSpent?: true
    dueDate?: true
    estimatedHours?: true
    progress?: true
    priority?: true
    status?: true
    order?: true
  }

  export type TaskMaxAggregateInputType = {
    taskId?: true
    projectId?: true
    userId?: true
    departmentId?: true
    name?: true
    description?: true
    assignmentDate?: true
    hoursSpent?: true
    dueDate?: true
    estimatedHours?: true
    progress?: true
    priority?: true
    status?: true
    order?: true
  }

  export type TaskCountAggregateInputType = {
    taskId?: true
    projectId?: true
    userId?: true
    departmentId?: true
    name?: true
    description?: true
    assignmentDate?: true
    hoursSpent?: true
    dueDate?: true
    estimatedHours?: true
    progress?: true
    priority?: true
    status?: true
    order?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    taskId: number
    projectId: number
    userId: number | null
    departmentId: number | null
    name: string
    description: string | null
    assignmentDate: Date | null
    hoursSpent: number | null
    dueDate: Date | null
    estimatedHours: number | null
    progress: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    projectId?: boolean
    userId?: boolean
    departmentId?: boolean
    name?: boolean
    description?: boolean
    assignmentDate?: boolean
    hoursSpent?: boolean
    dueDate?: boolean
    estimatedHours?: boolean
    progress?: boolean
    priority?: boolean
    status?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    projectId?: boolean
    userId?: boolean
    departmentId?: boolean
    name?: boolean
    description?: boolean
    assignmentDate?: boolean
    hoursSpent?: boolean
    dueDate?: boolean
    estimatedHours?: boolean
    progress?: boolean
    priority?: boolean
    status?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    projectId?: boolean
    userId?: boolean
    departmentId?: boolean
    name?: boolean
    description?: boolean
    assignmentDate?: boolean
    hoursSpent?: boolean
    dueDate?: boolean
    estimatedHours?: boolean
    progress?: boolean
    priority?: boolean
    status?: boolean
    order?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    taskId?: boolean
    projectId?: boolean
    userId?: boolean
    departmentId?: boolean
    name?: boolean
    description?: boolean
    assignmentDate?: boolean
    hoursSpent?: boolean
    dueDate?: boolean
    estimatedHours?: boolean
    progress?: boolean
    priority?: boolean
    status?: boolean
    order?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "projectId" | "userId" | "departmentId" | "name" | "description" | "assignmentDate" | "hoursSpent" | "dueDate" | "estimatedHours" | "progress" | "priority" | "status" | "order", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | Task$userArgs<ExtArgs>
    department?: boolean | Task$departmentArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      projectId: number
      userId: number | null
      departmentId: number | null
      name: string
      description: string | null
      assignmentDate: Date | null
      hoursSpent: number | null
      dueDate: Date | null
      estimatedHours: number | null
      progress: number | null
      priority: $Enums.Priority
      status: $Enums.Status
      order: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const taskWithTaskIdOnly = await prisma.task.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `taskId`
     * const taskWithTaskIdOnly = await prisma.task.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `taskId`
     * const taskWithTaskIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { taskId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends Task$userArgs<ExtArgs> = {}>(args?: Subset<T, Task$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    department<T extends Task$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Task$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    history<T extends Task$historyArgs<ExtArgs> = {}>(args?: Subset<T, Task$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly taskId: FieldRef<"Task", 'Int'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly userId: FieldRef<"Task", 'Int'>
    readonly departmentId: FieldRef<"Task", 'Int'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly assignmentDate: FieldRef<"Task", 'DateTime'>
    readonly hoursSpent: FieldRef<"Task", 'Int'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly estimatedHours: FieldRef<"Task", 'Int'>
    readonly progress: FieldRef<"Task", 'Int'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly status: FieldRef<"Task", 'Status'>
    readonly order: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.user
   */
  export type Task$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.department
   */
  export type Task$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Task.history
   */
  export type Task$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    message: string | null
    subject: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    message: string | null
    subject: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    subject: number
    createdAt: number
    isRead: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    subject?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    subject?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    subject?: true
    createdAt?: true
    isRead?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    type: string
    message: string
    subject: string
    createdAt: Date
    isRead: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    subject?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    subject?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    subject?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    subject?: boolean
    createdAt?: boolean
    isRead?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "subject" | "createdAt" | "isRead", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      message: string
      subject: string
      createdAt: Date
      isRead: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    historyId: number | null
    taskId: number | null
    userId: number | null
    departmentId: number | null
    createdByUserId: number | null
    createdByDepartmentId: number | null
    hoursSpent: number | null
  }

  export type HistorySumAggregateOutputType = {
    historyId: number | null
    taskId: number | null
    userId: number | null
    departmentId: number | null
    createdByUserId: number | null
    createdByDepartmentId: number | null
    hoursSpent: number | null
  }

  export type HistoryMinAggregateOutputType = {
    historyId: number | null
    taskId: number | null
    userId: number | null
    departmentId: number | null
    comment: string | null
    createdAt: Date | null
    createdByUserId: number | null
    createdByDepartmentId: number | null
    hoursSpent: number | null
  }

  export type HistoryMaxAggregateOutputType = {
    historyId: number | null
    taskId: number | null
    userId: number | null
    departmentId: number | null
    comment: string | null
    createdAt: Date | null
    createdByUserId: number | null
    createdByDepartmentId: number | null
    hoursSpent: number | null
  }

  export type HistoryCountAggregateOutputType = {
    historyId: number
    taskId: number
    userId: number
    departmentId: number
    comment: number
    createdAt: number
    createdByUserId: number
    createdByDepartmentId: number
    hoursSpent: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    historyId?: true
    taskId?: true
    userId?: true
    departmentId?: true
    createdByUserId?: true
    createdByDepartmentId?: true
    hoursSpent?: true
  }

  export type HistorySumAggregateInputType = {
    historyId?: true
    taskId?: true
    userId?: true
    departmentId?: true
    createdByUserId?: true
    createdByDepartmentId?: true
    hoursSpent?: true
  }

  export type HistoryMinAggregateInputType = {
    historyId?: true
    taskId?: true
    userId?: true
    departmentId?: true
    comment?: true
    createdAt?: true
    createdByUserId?: true
    createdByDepartmentId?: true
    hoursSpent?: true
  }

  export type HistoryMaxAggregateInputType = {
    historyId?: true
    taskId?: true
    userId?: true
    departmentId?: true
    comment?: true
    createdAt?: true
    createdByUserId?: true
    createdByDepartmentId?: true
    hoursSpent?: true
  }

  export type HistoryCountAggregateInputType = {
    historyId?: true
    taskId?: true
    userId?: true
    departmentId?: true
    comment?: true
    createdAt?: true
    createdByUserId?: true
    createdByDepartmentId?: true
    hoursSpent?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    historyId: number
    taskId: number
    userId: number | null
    departmentId: number | null
    comment: string | null
    createdAt: Date
    createdByUserId: number | null
    createdByDepartmentId: number | null
    hoursSpent: number | null
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    taskId?: boolean
    userId?: boolean
    departmentId?: boolean
    comment?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    createdByDepartmentId?: boolean
    hoursSpent?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    taskId?: boolean
    userId?: boolean
    departmentId?: boolean
    comment?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    createdByDepartmentId?: boolean
    hoursSpent?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    historyId?: boolean
    taskId?: boolean
    userId?: boolean
    departmentId?: boolean
    comment?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    createdByDepartmentId?: boolean
    hoursSpent?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    historyId?: boolean
    taskId?: boolean
    userId?: boolean
    departmentId?: boolean
    comment?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    createdByDepartmentId?: boolean
    hoursSpent?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"historyId" | "taskId" | "userId" | "departmentId" | "comment" | "createdAt" | "createdByUserId" | "createdByDepartmentId" | "hoursSpent", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }
  export type HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | History$userArgs<ExtArgs>
    department?: boolean | History$departmentArgs<ExtArgs>
    createdByUser?: boolean | History$createdByUserArgs<ExtArgs>
    createdByDepartment?: boolean | History$createdByDepartmentArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      createdByDepartment: Prisma.$DepartmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      historyId: number
      taskId: number
      userId: number | null
      departmentId: number | null
      comment: string | null
      createdAt: Date
      createdByUserId: number | null
      createdByDepartmentId: number | null
      hoursSpent: number | null
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.findMany({ select: { historyId: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.createManyAndReturn({
     *   select: { historyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `historyId`
     * const historyWithHistoryIdOnly = await prisma.history.updateManyAndReturn({
     *   select: { historyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends History$userArgs<ExtArgs> = {}>(args?: Subset<T, History$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    department<T extends History$departmentArgs<ExtArgs> = {}>(args?: Subset<T, History$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    createdByUser<T extends History$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, History$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    createdByDepartment<T extends History$createdByDepartmentArgs<ExtArgs> = {}>(args?: Subset<T, History$createdByDepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the History model
   */ 
  interface HistoryFieldRefs {
    readonly historyId: FieldRef<"History", 'Int'>
    readonly taskId: FieldRef<"History", 'Int'>
    readonly userId: FieldRef<"History", 'Int'>
    readonly departmentId: FieldRef<"History", 'Int'>
    readonly comment: FieldRef<"History", 'String'>
    readonly createdAt: FieldRef<"History", 'DateTime'>
    readonly createdByUserId: FieldRef<"History", 'Int'>
    readonly createdByDepartmentId: FieldRef<"History", 'Int'>
    readonly hoursSpent: FieldRef<"History", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History.user
   */
  export type History$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * History.department
   */
  export type History$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * History.createdByUser
   */
  export type History$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * History.createdByDepartment
   */
  export type History$createdByDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model ReportProject
   */

  export type AggregateReportProject = {
    _count: ReportProjectCountAggregateOutputType | null
    _avg: ReportProjectAvgAggregateOutputType | null
    _sum: ReportProjectSumAggregateOutputType | null
    _min: ReportProjectMinAggregateOutputType | null
    _max: ReportProjectMaxAggregateOutputType | null
  }

  export type ReportProjectAvgAggregateOutputType = {
    reportId: number | null
    projectId: number | null
    completedTasks: number | null
    averageTimePerTask: number | null
    totalTasks: number | null
  }

  export type ReportProjectSumAggregateOutputType = {
    reportId: number | null
    projectId: number | null
    completedTasks: number | null
    averageTimePerTask: number | null
    totalTasks: number | null
  }

  export type ReportProjectMinAggregateOutputType = {
    reportId: number | null
    projectId: number | null
    generatedDate: Date | null
    title: string | null
    type: string | null
    content: string | null
    performanceAnalysis: string | null
    completedTasks: number | null
    averageTimePerTask: number | null
    completionRate: string | null
    teamEfficiency: string | null
    totalTasks: number | null
  }

  export type ReportProjectMaxAggregateOutputType = {
    reportId: number | null
    projectId: number | null
    generatedDate: Date | null
    title: string | null
    type: string | null
    content: string | null
    performanceAnalysis: string | null
    completedTasks: number | null
    averageTimePerTask: number | null
    completionRate: string | null
    teamEfficiency: string | null
    totalTasks: number | null
  }

  export type ReportProjectCountAggregateOutputType = {
    reportId: number
    projectId: number
    generatedDate: number
    title: number
    type: number
    content: number
    performanceAnalysis: number
    completedTasks: number
    averageTimePerTask: number
    completionRate: number
    teamEfficiency: number
    totalTasks: number
    _all: number
  }


  export type ReportProjectAvgAggregateInputType = {
    reportId?: true
    projectId?: true
    completedTasks?: true
    averageTimePerTask?: true
    totalTasks?: true
  }

  export type ReportProjectSumAggregateInputType = {
    reportId?: true
    projectId?: true
    completedTasks?: true
    averageTimePerTask?: true
    totalTasks?: true
  }

  export type ReportProjectMinAggregateInputType = {
    reportId?: true
    projectId?: true
    generatedDate?: true
    title?: true
    type?: true
    content?: true
    performanceAnalysis?: true
    completedTasks?: true
    averageTimePerTask?: true
    completionRate?: true
    teamEfficiency?: true
    totalTasks?: true
  }

  export type ReportProjectMaxAggregateInputType = {
    reportId?: true
    projectId?: true
    generatedDate?: true
    title?: true
    type?: true
    content?: true
    performanceAnalysis?: true
    completedTasks?: true
    averageTimePerTask?: true
    completionRate?: true
    teamEfficiency?: true
    totalTasks?: true
  }

  export type ReportProjectCountAggregateInputType = {
    reportId?: true
    projectId?: true
    generatedDate?: true
    title?: true
    type?: true
    content?: true
    performanceAnalysis?: true
    completedTasks?: true
    averageTimePerTask?: true
    completionRate?: true
    teamEfficiency?: true
    totalTasks?: true
    _all?: true
  }

  export type ReportProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportProject to aggregate.
     */
    where?: ReportProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportProjects to fetch.
     */
    orderBy?: ReportProjectOrderByWithRelationInput | ReportProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportProjects
    **/
    _count?: true | ReportProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportProjectMaxAggregateInputType
  }

  export type GetReportProjectAggregateType<T extends ReportProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateReportProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportProject[P]>
      : GetScalarType<T[P], AggregateReportProject[P]>
  }




  export type ReportProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportProjectWhereInput
    orderBy?: ReportProjectOrderByWithAggregationInput | ReportProjectOrderByWithAggregationInput[]
    by: ReportProjectScalarFieldEnum[] | ReportProjectScalarFieldEnum
    having?: ReportProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportProjectCountAggregateInputType | true
    _avg?: ReportProjectAvgAggregateInputType
    _sum?: ReportProjectSumAggregateInputType
    _min?: ReportProjectMinAggregateInputType
    _max?: ReportProjectMaxAggregateInputType
  }

  export type ReportProjectGroupByOutputType = {
    reportId: number
    projectId: number
    generatedDate: Date
    title: string | null
    type: string | null
    content: string | null
    performanceAnalysis: string | null
    completedTasks: number | null
    averageTimePerTask: number | null
    completionRate: string | null
    teamEfficiency: string | null
    totalTasks: number | null
    _count: ReportProjectCountAggregateOutputType | null
    _avg: ReportProjectAvgAggregateOutputType | null
    _sum: ReportProjectSumAggregateOutputType | null
    _min: ReportProjectMinAggregateOutputType | null
    _max: ReportProjectMaxAggregateOutputType | null
  }

  type GetReportProjectGroupByPayload<T extends ReportProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ReportProjectGroupByOutputType[P]>
        }
      >
    >


  export type ReportProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    projectId?: boolean
    generatedDate?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    performanceAnalysis?: boolean
    completedTasks?: boolean
    averageTimePerTask?: boolean
    completionRate?: boolean
    teamEfficiency?: boolean
    totalTasks?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportProject"]>

  export type ReportProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    projectId?: boolean
    generatedDate?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    performanceAnalysis?: boolean
    completedTasks?: boolean
    averageTimePerTask?: boolean
    completionRate?: boolean
    teamEfficiency?: boolean
    totalTasks?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportProject"]>

  export type ReportProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reportId?: boolean
    projectId?: boolean
    generatedDate?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    performanceAnalysis?: boolean
    completedTasks?: boolean
    averageTimePerTask?: boolean
    completionRate?: boolean
    teamEfficiency?: boolean
    totalTasks?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportProject"]>

  export type ReportProjectSelectScalar = {
    reportId?: boolean
    projectId?: boolean
    generatedDate?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    performanceAnalysis?: boolean
    completedTasks?: boolean
    averageTimePerTask?: boolean
    completionRate?: boolean
    teamEfficiency?: boolean
    totalTasks?: boolean
  }

  export type ReportProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reportId" | "projectId" | "generatedDate" | "title" | "type" | "content" | "performanceAnalysis" | "completedTasks" | "averageTimePerTask" | "completionRate" | "teamEfficiency" | "totalTasks", ExtArgs["result"]["reportProject"]>
  export type ReportProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ReportProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ReportProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ReportProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportProject"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reportId: number
      projectId: number
      generatedDate: Date
      title: string | null
      type: string | null
      content: string | null
      performanceAnalysis: string | null
      completedTasks: number | null
      averageTimePerTask: number | null
      completionRate: string | null
      teamEfficiency: string | null
      totalTasks: number | null
    }, ExtArgs["result"]["reportProject"]>
    composites: {}
  }

  type ReportProjectGetPayload<S extends boolean | null | undefined | ReportProjectDefaultArgs> = $Result.GetResult<Prisma.$ReportProjectPayload, S>

  type ReportProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportProjectCountAggregateInputType | true
    }

  export interface ReportProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportProject'], meta: { name: 'ReportProject' } }
    /**
     * Find zero or one ReportProject that matches the filter.
     * @param {ReportProjectFindUniqueArgs} args - Arguments to find a ReportProject
     * @example
     * // Get one ReportProject
     * const reportProject = await prisma.reportProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportProjectFindUniqueArgs>(args: SelectSubset<T, ReportProjectFindUniqueArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ReportProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportProjectFindUniqueOrThrowArgs} args - Arguments to find a ReportProject
     * @example
     * // Get one ReportProject
     * const reportProject = await prisma.reportProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ReportProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectFindFirstArgs} args - Arguments to find a ReportProject
     * @example
     * // Get one ReportProject
     * const reportProject = await prisma.reportProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportProjectFindFirstArgs>(args?: SelectSubset<T, ReportProjectFindFirstArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ReportProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectFindFirstOrThrowArgs} args - Arguments to find a ReportProject
     * @example
     * // Get one ReportProject
     * const reportProject = await prisma.reportProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ReportProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportProjects
     * const reportProjects = await prisma.reportProject.findMany()
     * 
     * // Get first 10 ReportProjects
     * const reportProjects = await prisma.reportProject.findMany({ take: 10 })
     * 
     * // Only select the `reportId`
     * const reportProjectWithReportIdOnly = await prisma.reportProject.findMany({ select: { reportId: true } })
     * 
     */
    findMany<T extends ReportProjectFindManyArgs>(args?: SelectSubset<T, ReportProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ReportProject.
     * @param {ReportProjectCreateArgs} args - Arguments to create a ReportProject.
     * @example
     * // Create one ReportProject
     * const ReportProject = await prisma.reportProject.create({
     *   data: {
     *     // ... data to create a ReportProject
     *   }
     * })
     * 
     */
    create<T extends ReportProjectCreateArgs>(args: SelectSubset<T, ReportProjectCreateArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ReportProjects.
     * @param {ReportProjectCreateManyArgs} args - Arguments to create many ReportProjects.
     * @example
     * // Create many ReportProjects
     * const reportProject = await prisma.reportProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportProjectCreateManyArgs>(args?: SelectSubset<T, ReportProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportProjects and returns the data saved in the database.
     * @param {ReportProjectCreateManyAndReturnArgs} args - Arguments to create many ReportProjects.
     * @example
     * // Create many ReportProjects
     * const reportProject = await prisma.reportProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportProjects and only return the `reportId`
     * const reportProjectWithReportIdOnly = await prisma.reportProject.createManyAndReturn({
     *   select: { reportId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ReportProject.
     * @param {ReportProjectDeleteArgs} args - Arguments to delete one ReportProject.
     * @example
     * // Delete one ReportProject
     * const ReportProject = await prisma.reportProject.delete({
     *   where: {
     *     // ... filter to delete one ReportProject
     *   }
     * })
     * 
     */
    delete<T extends ReportProjectDeleteArgs>(args: SelectSubset<T, ReportProjectDeleteArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ReportProject.
     * @param {ReportProjectUpdateArgs} args - Arguments to update one ReportProject.
     * @example
     * // Update one ReportProject
     * const reportProject = await prisma.reportProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportProjectUpdateArgs>(args: SelectSubset<T, ReportProjectUpdateArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ReportProjects.
     * @param {ReportProjectDeleteManyArgs} args - Arguments to filter ReportProjects to delete.
     * @example
     * // Delete a few ReportProjects
     * const { count } = await prisma.reportProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportProjectDeleteManyArgs>(args?: SelectSubset<T, ReportProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportProjects
     * const reportProject = await prisma.reportProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportProjectUpdateManyArgs>(args: SelectSubset<T, ReportProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportProjects and returns the data updated in the database.
     * @param {ReportProjectUpdateManyAndReturnArgs} args - Arguments to update many ReportProjects.
     * @example
     * // Update many ReportProjects
     * const reportProject = await prisma.reportProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportProjects and only return the `reportId`
     * const reportProjectWithReportIdOnly = await prisma.reportProject.updateManyAndReturn({
     *   select: { reportId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ReportProject.
     * @param {ReportProjectUpsertArgs} args - Arguments to update or create a ReportProject.
     * @example
     * // Update or create a ReportProject
     * const reportProject = await prisma.reportProject.upsert({
     *   create: {
     *     // ... data to create a ReportProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportProject we want to update
     *   }
     * })
     */
    upsert<T extends ReportProjectUpsertArgs>(args: SelectSubset<T, ReportProjectUpsertArgs<ExtArgs>>): Prisma__ReportProjectClient<$Result.GetResult<Prisma.$ReportProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ReportProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectCountArgs} args - Arguments to filter ReportProjects to count.
     * @example
     * // Count the number of ReportProjects
     * const count = await prisma.reportProject.count({
     *   where: {
     *     // ... the filter for the ReportProjects we want to count
     *   }
     * })
    **/
    count<T extends ReportProjectCountArgs>(
      args?: Subset<T, ReportProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportProjectAggregateArgs>(args: Subset<T, ReportProjectAggregateArgs>): Prisma.PrismaPromise<GetReportProjectAggregateType<T>>

    /**
     * Group by ReportProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportProjectGroupByArgs} args - Group by arguments.
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
      T extends ReportProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportProjectGroupByArgs['orderBy'] }
        : { orderBy?: ReportProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReportProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportProject model
   */
  readonly fields: ReportProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReportProject model
   */ 
  interface ReportProjectFieldRefs {
    readonly reportId: FieldRef<"ReportProject", 'Int'>
    readonly projectId: FieldRef<"ReportProject", 'Int'>
    readonly generatedDate: FieldRef<"ReportProject", 'DateTime'>
    readonly title: FieldRef<"ReportProject", 'String'>
    readonly type: FieldRef<"ReportProject", 'String'>
    readonly content: FieldRef<"ReportProject", 'String'>
    readonly performanceAnalysis: FieldRef<"ReportProject", 'String'>
    readonly completedTasks: FieldRef<"ReportProject", 'Int'>
    readonly averageTimePerTask: FieldRef<"ReportProject", 'Float'>
    readonly completionRate: FieldRef<"ReportProject", 'String'>
    readonly teamEfficiency: FieldRef<"ReportProject", 'String'>
    readonly totalTasks: FieldRef<"ReportProject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReportProject findUnique
   */
  export type ReportProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter, which ReportProject to fetch.
     */
    where: ReportProjectWhereUniqueInput
  }

  /**
   * ReportProject findUniqueOrThrow
   */
  export type ReportProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter, which ReportProject to fetch.
     */
    where: ReportProjectWhereUniqueInput
  }

  /**
   * ReportProject findFirst
   */
  export type ReportProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter, which ReportProject to fetch.
     */
    where?: ReportProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportProjects to fetch.
     */
    orderBy?: ReportProjectOrderByWithRelationInput | ReportProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportProjects.
     */
    cursor?: ReportProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportProjects.
     */
    distinct?: ReportProjectScalarFieldEnum | ReportProjectScalarFieldEnum[]
  }

  /**
   * ReportProject findFirstOrThrow
   */
  export type ReportProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter, which ReportProject to fetch.
     */
    where?: ReportProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportProjects to fetch.
     */
    orderBy?: ReportProjectOrderByWithRelationInput | ReportProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportProjects.
     */
    cursor?: ReportProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportProjects.
     */
    distinct?: ReportProjectScalarFieldEnum | ReportProjectScalarFieldEnum[]
  }

  /**
   * ReportProject findMany
   */
  export type ReportProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter, which ReportProjects to fetch.
     */
    where?: ReportProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportProjects to fetch.
     */
    orderBy?: ReportProjectOrderByWithRelationInput | ReportProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportProjects.
     */
    cursor?: ReportProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportProjects.
     */
    skip?: number
    distinct?: ReportProjectScalarFieldEnum | ReportProjectScalarFieldEnum[]
  }

  /**
   * ReportProject create
   */
  export type ReportProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportProject.
     */
    data: XOR<ReportProjectCreateInput, ReportProjectUncheckedCreateInput>
  }

  /**
   * ReportProject createMany
   */
  export type ReportProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportProjects.
     */
    data: ReportProjectCreateManyInput | ReportProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportProject createManyAndReturn
   */
  export type ReportProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * The data used to create many ReportProjects.
     */
    data: ReportProjectCreateManyInput | ReportProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportProject update
   */
  export type ReportProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportProject.
     */
    data: XOR<ReportProjectUpdateInput, ReportProjectUncheckedUpdateInput>
    /**
     * Choose, which ReportProject to update.
     */
    where: ReportProjectWhereUniqueInput
  }

  /**
   * ReportProject updateMany
   */
  export type ReportProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportProjects.
     */
    data: XOR<ReportProjectUpdateManyMutationInput, ReportProjectUncheckedUpdateManyInput>
    /**
     * Filter which ReportProjects to update
     */
    where?: ReportProjectWhereInput
    /**
     * Limit how many ReportProjects to update.
     */
    limit?: number
  }

  /**
   * ReportProject updateManyAndReturn
   */
  export type ReportProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * The data used to update ReportProjects.
     */
    data: XOR<ReportProjectUpdateManyMutationInput, ReportProjectUncheckedUpdateManyInput>
    /**
     * Filter which ReportProjects to update
     */
    where?: ReportProjectWhereInput
    /**
     * Limit how many ReportProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportProject upsert
   */
  export type ReportProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportProject to update in case it exists.
     */
    where: ReportProjectWhereUniqueInput
    /**
     * In case the ReportProject found by the `where` argument doesn't exist, create a new ReportProject with this data.
     */
    create: XOR<ReportProjectCreateInput, ReportProjectUncheckedCreateInput>
    /**
     * In case the ReportProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportProjectUpdateInput, ReportProjectUncheckedUpdateInput>
  }

  /**
   * ReportProject delete
   */
  export type ReportProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
    /**
     * Filter which ReportProject to delete.
     */
    where: ReportProjectWhereUniqueInput
  }

  /**
   * ReportProject deleteMany
   */
  export type ReportProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportProjects to delete
     */
    where?: ReportProjectWhereInput
    /**
     * Limit how many ReportProjects to delete.
     */
    limit?: number
  }

  /**
   * ReportProject without action
   */
  export type ReportProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportProject
     */
    select?: ReportProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportProject
     */
    omit?: ReportProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportProjectInclude<ExtArgs> | null
  }


  /**
   * Model Unavailability
   */

  export type AggregateUnavailability = {
    _count: UnavailabilityCountAggregateOutputType | null
    _avg: UnavailabilityAvgAggregateOutputType | null
    _sum: UnavailabilitySumAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  export type UnavailabilityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UnavailabilitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UnavailabilityMinAggregateOutputType = {
    id: number | null
    type: string | null
    start: Date | null
    end: Date | null
    active: boolean | null
    userId: number | null
  }

  export type UnavailabilityMaxAggregateOutputType = {
    id: number | null
    type: string | null
    start: Date | null
    end: Date | null
    active: boolean | null
    userId: number | null
  }

  export type UnavailabilityCountAggregateOutputType = {
    id: number
    type: number
    start: number
    end: number
    active: number
    userId: number
    _all: number
  }


  export type UnavailabilityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UnavailabilitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UnavailabilityMinAggregateInputType = {
    id?: true
    type?: true
    start?: true
    end?: true
    active?: true
    userId?: true
  }

  export type UnavailabilityMaxAggregateInputType = {
    id?: true
    type?: true
    start?: true
    end?: true
    active?: true
    userId?: true
  }

  export type UnavailabilityCountAggregateInputType = {
    id?: true
    type?: true
    start?: true
    end?: true
    active?: true
    userId?: true
    _all?: true
  }

  export type UnavailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailability to aggregate.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unavailabilities
    **/
    _count?: true | UnavailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnavailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnavailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type GetUnavailabilityAggregateType<T extends UnavailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailability[P]>
      : GetScalarType<T[P], AggregateUnavailability[P]>
  }




  export type UnavailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailabilityWhereInput
    orderBy?: UnavailabilityOrderByWithAggregationInput | UnavailabilityOrderByWithAggregationInput[]
    by: UnavailabilityScalarFieldEnum[] | UnavailabilityScalarFieldEnum
    having?: UnavailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailabilityCountAggregateInputType | true
    _avg?: UnavailabilityAvgAggregateInputType
    _sum?: UnavailabilitySumAggregateInputType
    _min?: UnavailabilityMinAggregateInputType
    _max?: UnavailabilityMaxAggregateInputType
  }

  export type UnavailabilityGroupByOutputType = {
    id: number
    type: string
    start: Date
    end: Date | null
    active: boolean
    userId: number
    _count: UnavailabilityCountAggregateOutputType | null
    _avg: UnavailabilityAvgAggregateOutputType | null
    _sum: UnavailabilitySumAggregateOutputType | null
    _min: UnavailabilityMinAggregateOutputType | null
    _max: UnavailabilityMaxAggregateOutputType | null
  }

  type GetUnavailabilityGroupByPayload<T extends UnavailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnavailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailabilityGroupByOutputType[P]>
        }
      >
    >


  export type UnavailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailability"]>

  export type UnavailabilitySelectScalar = {
    id?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    userId?: boolean
  }

  export type UnavailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "start" | "end" | "active" | "userId", ExtArgs["result"]["unavailability"]>
  export type UnavailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnavailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnavailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnavailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unavailability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      start: Date
      end: Date | null
      active: boolean
      userId: number
    }, ExtArgs["result"]["unavailability"]>
    composites: {}
  }

  type UnavailabilityGetPayload<S extends boolean | null | undefined | UnavailabilityDefaultArgs> = $Result.GetResult<Prisma.$UnavailabilityPayload, S>

  type UnavailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnavailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnavailabilityCountAggregateInputType | true
    }

  export interface UnavailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unavailability'], meta: { name: 'Unavailability' } }
    /**
     * Find zero or one Unavailability that matches the filter.
     * @param {UnavailabilityFindUniqueArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnavailabilityFindUniqueArgs>(args: SelectSubset<T, UnavailabilityFindUniqueArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Unavailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnavailabilityFindUniqueOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnavailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, UnavailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Unavailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnavailabilityFindFirstArgs>(args?: SelectSubset<T, UnavailabilityFindFirstArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Unavailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindFirstOrThrowArgs} args - Arguments to find a Unavailability
     * @example
     * // Get one Unavailability
     * const unavailability = await prisma.unavailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnavailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, UnavailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Unavailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany()
     * 
     * // Get first 10 Unavailabilities
     * const unavailabilities = await prisma.unavailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnavailabilityFindManyArgs>(args?: SelectSubset<T, UnavailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Unavailability.
     * @param {UnavailabilityCreateArgs} args - Arguments to create a Unavailability.
     * @example
     * // Create one Unavailability
     * const Unavailability = await prisma.unavailability.create({
     *   data: {
     *     // ... data to create a Unavailability
     *   }
     * })
     * 
     */
    create<T extends UnavailabilityCreateArgs>(args: SelectSubset<T, UnavailabilityCreateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Unavailabilities.
     * @param {UnavailabilityCreateManyArgs} args - Arguments to create many Unavailabilities.
     * @example
     * // Create many Unavailabilities
     * const unavailability = await prisma.unavailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnavailabilityCreateManyArgs>(args?: SelectSubset<T, UnavailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unavailabilities and returns the data saved in the database.
     * @param {UnavailabilityCreateManyAndReturnArgs} args - Arguments to create many Unavailabilities.
     * @example
     * // Create many Unavailabilities
     * const unavailability = await prisma.unavailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unavailabilities and only return the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnavailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, UnavailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Unavailability.
     * @param {UnavailabilityDeleteArgs} args - Arguments to delete one Unavailability.
     * @example
     * // Delete one Unavailability
     * const Unavailability = await prisma.unavailability.delete({
     *   where: {
     *     // ... filter to delete one Unavailability
     *   }
     * })
     * 
     */
    delete<T extends UnavailabilityDeleteArgs>(args: SelectSubset<T, UnavailabilityDeleteArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Unavailability.
     * @param {UnavailabilityUpdateArgs} args - Arguments to update one Unavailability.
     * @example
     * // Update one Unavailability
     * const unavailability = await prisma.unavailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnavailabilityUpdateArgs>(args: SelectSubset<T, UnavailabilityUpdateArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Unavailabilities.
     * @param {UnavailabilityDeleteManyArgs} args - Arguments to filter Unavailabilities to delete.
     * @example
     * // Delete a few Unavailabilities
     * const { count } = await prisma.unavailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnavailabilityDeleteManyArgs>(args?: SelectSubset<T, UnavailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unavailabilities
     * const unavailability = await prisma.unavailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnavailabilityUpdateManyArgs>(args: SelectSubset<T, UnavailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailabilities and returns the data updated in the database.
     * @param {UnavailabilityUpdateManyAndReturnArgs} args - Arguments to update many Unavailabilities.
     * @example
     * // Update many Unavailabilities
     * const unavailability = await prisma.unavailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unavailabilities and only return the `id`
     * const unavailabilityWithIdOnly = await prisma.unavailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnavailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, UnavailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Unavailability.
     * @param {UnavailabilityUpsertArgs} args - Arguments to update or create a Unavailability.
     * @example
     * // Update or create a Unavailability
     * const unavailability = await prisma.unavailability.upsert({
     *   create: {
     *     // ... data to create a Unavailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unavailability we want to update
     *   }
     * })
     */
    upsert<T extends UnavailabilityUpsertArgs>(args: SelectSubset<T, UnavailabilityUpsertArgs<ExtArgs>>): Prisma__UnavailabilityClient<$Result.GetResult<Prisma.$UnavailabilityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Unavailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityCountArgs} args - Arguments to filter Unavailabilities to count.
     * @example
     * // Count the number of Unavailabilities
     * const count = await prisma.unavailability.count({
     *   where: {
     *     // ... the filter for the Unavailabilities we want to count
     *   }
     * })
    **/
    count<T extends UnavailabilityCountArgs>(
      args?: Subset<T, UnavailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnavailabilityAggregateArgs>(args: Subset<T, UnavailabilityAggregateArgs>): Prisma.PrismaPromise<GetUnavailabilityAggregateType<T>>

    /**
     * Group by Unavailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailabilityGroupByArgs} args - Group by arguments.
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
      T extends UnavailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailabilityGroupByArgs['orderBy'] }
        : { orderBy?: UnavailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UnavailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unavailability model
   */
  readonly fields: UnavailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unavailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnavailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unavailability model
   */ 
  interface UnavailabilityFieldRefs {
    readonly id: FieldRef<"Unavailability", 'Int'>
    readonly type: FieldRef<"Unavailability", 'String'>
    readonly start: FieldRef<"Unavailability", 'DateTime'>
    readonly end: FieldRef<"Unavailability", 'DateTime'>
    readonly active: FieldRef<"Unavailability", 'Boolean'>
    readonly userId: FieldRef<"Unavailability", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Unavailability findUnique
   */
  export type UnavailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findUniqueOrThrow
   */
  export type UnavailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability findFirst
   */
  export type UnavailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findFirstOrThrow
   */
  export type UnavailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailability to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailabilities.
     */
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability findMany
   */
  export type UnavailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Unavailabilities to fetch.
     */
    where?: UnavailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailabilities to fetch.
     */
    orderBy?: UnavailabilityOrderByWithRelationInput | UnavailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unavailabilities.
     */
    cursor?: UnavailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailabilities.
     */
    skip?: number
    distinct?: UnavailabilityScalarFieldEnum | UnavailabilityScalarFieldEnum[]
  }

  /**
   * Unavailability create
   */
  export type UnavailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Unavailability.
     */
    data: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
  }

  /**
   * Unavailability createMany
   */
  export type UnavailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unavailabilities.
     */
    data: UnavailabilityCreateManyInput | UnavailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unavailability createManyAndReturn
   */
  export type UnavailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Unavailabilities.
     */
    data: UnavailabilityCreateManyInput | UnavailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unavailability update
   */
  export type UnavailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Unavailability.
     */
    data: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
    /**
     * Choose, which Unavailability to update.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability updateMany
   */
  export type UnavailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unavailabilities.
     */
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Unavailabilities to update
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to update.
     */
    limit?: number
  }

  /**
   * Unavailability updateManyAndReturn
   */
  export type UnavailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Unavailabilities.
     */
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Unavailabilities to update
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unavailability upsert
   */
  export type UnavailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Unavailability to update in case it exists.
     */
    where: UnavailabilityWhereUniqueInput
    /**
     * In case the Unavailability found by the `where` argument doesn't exist, create a new Unavailability with this data.
     */
    create: XOR<UnavailabilityCreateInput, UnavailabilityUncheckedCreateInput>
    /**
     * In case the Unavailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnavailabilityUpdateInput, UnavailabilityUncheckedUpdateInput>
  }

  /**
   * Unavailability delete
   */
  export type UnavailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
    /**
     * Filter which Unavailability to delete.
     */
    where: UnavailabilityWhereUniqueInput
  }

  /**
   * Unavailability deleteMany
   */
  export type UnavailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailabilities to delete
     */
    where?: UnavailabilityWhereInput
    /**
     * Limit how many Unavailabilities to delete.
     */
    limit?: number
  }

  /**
   * Unavailability without action
   */
  export type UnavailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailability
     */
    select?: UnavailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailability
     */
    omit?: UnavailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailabilityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TimeZoneScalarFieldEnum: {
    timezoneId: 'timezoneId',
    name: 'name',
    offset: 'offset'
  };

  export type TimeZoneScalarFieldEnum = (typeof TimeZoneScalarFieldEnum)[keyof typeof TimeZoneScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    departmentId: 'departmentId',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    timezoneId: 'timezoneId',
    departmentId: 'departmentId',
    name: 'name',
    email: 'email',
    password: 'password',
    workingHours: 'workingHours',
    roleId: 'roleId',
    isAdmin: 'isAdmin',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    projectId: 'projectId',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectUserScalarFieldEnum: {
    userId: 'userId',
    projectId: 'projectId'
  };

  export type ProjectUserScalarFieldEnum = (typeof ProjectUserScalarFieldEnum)[keyof typeof ProjectUserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    taskId: 'taskId',
    projectId: 'projectId',
    userId: 'userId',
    departmentId: 'departmentId',
    name: 'name',
    description: 'description',
    assignmentDate: 'assignmentDate',
    hoursSpent: 'hoursSpent',
    dueDate: 'dueDate',
    estimatedHours: 'estimatedHours',
    progress: 'progress',
    priority: 'priority',
    status: 'status',
    order: 'order'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    subject: 'subject',
    createdAt: 'createdAt',
    isRead: 'isRead'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    historyId: 'historyId',
    taskId: 'taskId',
    userId: 'userId',
    departmentId: 'departmentId',
    comment: 'comment',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId',
    createdByDepartmentId: 'createdByDepartmentId',
    hoursSpent: 'hoursSpent'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const ReportProjectScalarFieldEnum: {
    reportId: 'reportId',
    projectId: 'projectId',
    generatedDate: 'generatedDate',
    title: 'title',
    type: 'type',
    content: 'content',
    performanceAnalysis: 'performanceAnalysis',
    completedTasks: 'completedTasks',
    averageTimePerTask: 'averageTimePerTask',
    completionRate: 'completionRate',
    teamEfficiency: 'teamEfficiency',
    totalTasks: 'totalTasks'
  };

  export type ReportProjectScalarFieldEnum = (typeof ReportProjectScalarFieldEnum)[keyof typeof ReportProjectScalarFieldEnum]


  export const UnavailabilityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    start: 'start',
    end: 'end',
    active: 'active',
    userId: 'userId'
  };

  export type UnavailabilityScalarFieldEnum = (typeof UnavailabilityScalarFieldEnum)[keyof typeof UnavailabilityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TimeZoneWhereInput = {
    AND?: TimeZoneWhereInput | TimeZoneWhereInput[]
    OR?: TimeZoneWhereInput[]
    NOT?: TimeZoneWhereInput | TimeZoneWhereInput[]
    timezoneId?: IntFilter<"TimeZone"> | number
    name?: StringFilter<"TimeZone"> | string
    offset?: IntFilter<"TimeZone"> | number
    users?: UserListRelationFilter
  }

  export type TimeZoneOrderByWithRelationInput = {
    timezoneId?: SortOrder
    name?: SortOrder
    offset?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type TimeZoneWhereUniqueInput = Prisma.AtLeast<{
    timezoneId?: number
    name?: string
    AND?: TimeZoneWhereInput | TimeZoneWhereInput[]
    OR?: TimeZoneWhereInput[]
    NOT?: TimeZoneWhereInput | TimeZoneWhereInput[]
    offset?: IntFilter<"TimeZone"> | number
    users?: UserListRelationFilter
  }, "timezoneId" | "name">

  export type TimeZoneOrderByWithAggregationInput = {
    timezoneId?: SortOrder
    name?: SortOrder
    offset?: SortOrder
    _count?: TimeZoneCountOrderByAggregateInput
    _avg?: TimeZoneAvgOrderByAggregateInput
    _max?: TimeZoneMaxOrderByAggregateInput
    _min?: TimeZoneMinOrderByAggregateInput
    _sum?: TimeZoneSumOrderByAggregateInput
  }

  export type TimeZoneScalarWhereWithAggregatesInput = {
    AND?: TimeZoneScalarWhereWithAggregatesInput | TimeZoneScalarWhereWithAggregatesInput[]
    OR?: TimeZoneScalarWhereWithAggregatesInput[]
    NOT?: TimeZoneScalarWhereWithAggregatesInput | TimeZoneScalarWhereWithAggregatesInput[]
    timezoneId?: IntWithAggregatesFilter<"TimeZone"> | number
    name?: StringWithAggregatesFilter<"TimeZone"> | string
    offset?: IntWithAggregatesFilter<"TimeZone"> | number
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentId?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
    history?: HistoryListRelationFilter
    createdHistories?: HistoryListRelationFilter
    Task?: TaskListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    departmentId?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    createdHistories?: HistoryOrderByRelationAggregateInput
    Task?: TaskOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    departmentId?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
    history?: HistoryListRelationFilter
    createdHistories?: HistoryListRelationFilter
    Task?: TaskListRelationFilter
  }, "departmentId">

  export type DepartmentOrderByWithAggregationInput = {
    departmentId?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    departmentId?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    timezoneId?: IntFilter<"User"> | number
    departmentId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    workingHours?: JsonNullableFilter<"User">
    roleId?: IntNullableFilter<"User"> | number | null
    isAdmin?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    timezone?: XOR<TimeZoneScalarRelationFilter, TimeZoneWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    unavailabilityPeriods?: UnavailabilityListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    tasks?: TaskListRelationFilter
    history?: HistoryListRelationFilter
    projects?: ProjectUserListRelationFilter
    notification?: NotificationListRelationFilter
    createdHistories?: HistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    workingHours?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    isActive?: SortOrder
    timezone?: TimeZoneOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    unavailabilityPeriods?: UnavailabilityOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    projects?: ProjectUserOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
    createdHistories?: HistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    timezoneId?: IntFilter<"User"> | number
    departmentId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    workingHours?: JsonNullableFilter<"User">
    roleId?: IntNullableFilter<"User"> | number | null
    isAdmin?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    timezone?: XOR<TimeZoneScalarRelationFilter, TimeZoneWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    unavailabilityPeriods?: UnavailabilityListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    tasks?: TaskListRelationFilter
    history?: HistoryListRelationFilter
    projects?: ProjectUserListRelationFilter
    notification?: NotificationListRelationFilter
    createdHistories?: HistoryListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    workingHours?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    timezoneId?: IntWithAggregatesFilter<"User"> | number
    departmentId?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    workingHours?: JsonNullableWithAggregatesFilter<"User">
    roleId?: IntNullableWithAggregatesFilter<"User"> | number | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    projectId?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumStatusFilter<"Project"> | $Enums.Status
    users?: ProjectUserListRelationFilter
    tasks?: TaskListRelationFilter
    reports?: ReportProjectListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    users?: ProjectUserOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    reports?: ReportProjectOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    projectId?: number
    name?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeFilter<"Project"> | Date | string
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: EnumStatusFilter<"Project"> | $Enums.Status
    users?: ProjectUserListRelationFilter
    tasks?: TaskListRelationFilter
    reports?: ReportProjectListRelationFilter
  }, "projectId" | "name">

  export type ProjectOrderByWithAggregationInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    status?: EnumStatusWithAggregatesFilter<"Project"> | $Enums.Status
  }

  export type ProjectUserWhereInput = {
    AND?: ProjectUserWhereInput | ProjectUserWhereInput[]
    OR?: ProjectUserWhereInput[]
    NOT?: ProjectUserWhereInput | ProjectUserWhereInput[]
    userId?: IntFilter<"ProjectUser"> | number
    projectId?: IntFilter<"ProjectUser"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectUserOrderByWithRelationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectUserWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: ProjectUserUserIdProjectIdCompoundUniqueInput
    AND?: ProjectUserWhereInput | ProjectUserWhereInput[]
    OR?: ProjectUserWhereInput[]
    NOT?: ProjectUserWhereInput | ProjectUserWhereInput[]
    userId?: IntFilter<"ProjectUser"> | number
    projectId?: IntFilter<"ProjectUser"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type ProjectUserOrderByWithAggregationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    _count?: ProjectUserCountOrderByAggregateInput
    _avg?: ProjectUserAvgOrderByAggregateInput
    _max?: ProjectUserMaxOrderByAggregateInput
    _min?: ProjectUserMinOrderByAggregateInput
    _sum?: ProjectUserSumOrderByAggregateInput
  }

  export type ProjectUserScalarWhereWithAggregatesInput = {
    AND?: ProjectUserScalarWhereWithAggregatesInput | ProjectUserScalarWhereWithAggregatesInput[]
    OR?: ProjectUserScalarWhereWithAggregatesInput[]
    NOT?: ProjectUserScalarWhereWithAggregatesInput | ProjectUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"ProjectUser"> | number
    projectId?: IntWithAggregatesFilter<"ProjectUser"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    taskId?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    userId?: IntNullableFilter<"Task"> | number | null
    departmentId?: IntNullableFilter<"Task"> | number | null
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignmentDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    hoursSpent?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    estimatedHours?: IntNullableFilter<"Task"> | number | null
    progress?: IntNullableFilter<"Task"> | number | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    order?: IntFilter<"Task"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    history?: HistoryListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    assignmentDate?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    order?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    history?: HistoryOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    taskId?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    projectId?: IntFilter<"Task"> | number
    userId?: IntNullableFilter<"Task"> | number | null
    departmentId?: IntNullableFilter<"Task"> | number | null
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignmentDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    hoursSpent?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    estimatedHours?: IntNullableFilter<"Task"> | number | null
    progress?: IntNullableFilter<"Task"> | number | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    order?: IntFilter<"Task"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    history?: HistoryListRelationFilter
  }, "taskId">

  export type TaskOrderByWithAggregationInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    assignmentDate?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    order?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"Task"> | number
    projectId?: IntWithAggregatesFilter<"Task"> | number
    userId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    departmentId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    assignmentDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    hoursSpent?: IntNullableWithAggregatesFilter<"Task"> | number | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    estimatedHours?: IntNullableWithAggregatesFilter<"Task"> | number | null
    progress?: IntNullableWithAggregatesFilter<"Task"> | number | null
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    status?: EnumStatusWithAggregatesFilter<"Task"> | $Enums.Status
    order?: IntWithAggregatesFilter<"Task"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "roleId" | "name">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    subject?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    subject?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    type?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    subject?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    historyId?: IntFilter<"History"> | number
    taskId?: IntFilter<"History"> | number
    userId?: IntNullableFilter<"History"> | number | null
    departmentId?: IntNullableFilter<"History"> | number | null
    comment?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    createdByUserId?: IntNullableFilter<"History"> | number | null
    createdByDepartmentId?: IntNullableFilter<"History"> | number | null
    hoursSpent?: FloatNullableFilter<"History"> | number | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdByDepartment?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }

  export type HistoryOrderByWithRelationInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    createdByDepartmentId?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    createdByUser?: UserOrderByWithRelationInput
    createdByDepartment?: DepartmentOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    historyId?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    taskId?: IntFilter<"History"> | number
    userId?: IntNullableFilter<"History"> | number | null
    departmentId?: IntNullableFilter<"History"> | number | null
    comment?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    createdByUserId?: IntNullableFilter<"History"> | number | null
    createdByDepartmentId?: IntNullableFilter<"History"> | number | null
    hoursSpent?: FloatNullableFilter<"History"> | number | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdByDepartment?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }, "historyId">

  export type HistoryOrderByWithAggregationInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    createdByDepartmentId?: SortOrderInput | SortOrder
    hoursSpent?: SortOrderInput | SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    historyId?: IntWithAggregatesFilter<"History"> | number
    taskId?: IntWithAggregatesFilter<"History"> | number
    userId?: IntNullableWithAggregatesFilter<"History"> | number | null
    departmentId?: IntNullableWithAggregatesFilter<"History"> | number | null
    comment?: StringNullableWithAggregatesFilter<"History"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"History"> | Date | string
    createdByUserId?: IntNullableWithAggregatesFilter<"History"> | number | null
    createdByDepartmentId?: IntNullableWithAggregatesFilter<"History"> | number | null
    hoursSpent?: FloatNullableWithAggregatesFilter<"History"> | number | null
  }

  export type ReportProjectWhereInput = {
    AND?: ReportProjectWhereInput | ReportProjectWhereInput[]
    OR?: ReportProjectWhereInput[]
    NOT?: ReportProjectWhereInput | ReportProjectWhereInput[]
    reportId?: IntFilter<"ReportProject"> | number
    projectId?: IntFilter<"ReportProject"> | number
    generatedDate?: DateTimeFilter<"ReportProject"> | Date | string
    title?: StringNullableFilter<"ReportProject"> | string | null
    type?: StringNullableFilter<"ReportProject"> | string | null
    content?: StringNullableFilter<"ReportProject"> | string | null
    performanceAnalysis?: StringNullableFilter<"ReportProject"> | string | null
    completedTasks?: IntNullableFilter<"ReportProject"> | number | null
    averageTimePerTask?: FloatNullableFilter<"ReportProject"> | number | null
    completionRate?: StringNullableFilter<"ReportProject"> | string | null
    teamEfficiency?: StringNullableFilter<"ReportProject"> | string | null
    totalTasks?: IntNullableFilter<"ReportProject"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ReportProjectOrderByWithRelationInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    generatedDate?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    performanceAnalysis?: SortOrderInput | SortOrder
    completedTasks?: SortOrderInput | SortOrder
    averageTimePerTask?: SortOrderInput | SortOrder
    completionRate?: SortOrderInput | SortOrder
    teamEfficiency?: SortOrderInput | SortOrder
    totalTasks?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ReportProjectWhereUniqueInput = Prisma.AtLeast<{
    reportId?: number
    AND?: ReportProjectWhereInput | ReportProjectWhereInput[]
    OR?: ReportProjectWhereInput[]
    NOT?: ReportProjectWhereInput | ReportProjectWhereInput[]
    projectId?: IntFilter<"ReportProject"> | number
    generatedDate?: DateTimeFilter<"ReportProject"> | Date | string
    title?: StringNullableFilter<"ReportProject"> | string | null
    type?: StringNullableFilter<"ReportProject"> | string | null
    content?: StringNullableFilter<"ReportProject"> | string | null
    performanceAnalysis?: StringNullableFilter<"ReportProject"> | string | null
    completedTasks?: IntNullableFilter<"ReportProject"> | number | null
    averageTimePerTask?: FloatNullableFilter<"ReportProject"> | number | null
    completionRate?: StringNullableFilter<"ReportProject"> | string | null
    teamEfficiency?: StringNullableFilter<"ReportProject"> | string | null
    totalTasks?: IntNullableFilter<"ReportProject"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "reportId">

  export type ReportProjectOrderByWithAggregationInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    generatedDate?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    performanceAnalysis?: SortOrderInput | SortOrder
    completedTasks?: SortOrderInput | SortOrder
    averageTimePerTask?: SortOrderInput | SortOrder
    completionRate?: SortOrderInput | SortOrder
    teamEfficiency?: SortOrderInput | SortOrder
    totalTasks?: SortOrderInput | SortOrder
    _count?: ReportProjectCountOrderByAggregateInput
    _avg?: ReportProjectAvgOrderByAggregateInput
    _max?: ReportProjectMaxOrderByAggregateInput
    _min?: ReportProjectMinOrderByAggregateInput
    _sum?: ReportProjectSumOrderByAggregateInput
  }

  export type ReportProjectScalarWhereWithAggregatesInput = {
    AND?: ReportProjectScalarWhereWithAggregatesInput | ReportProjectScalarWhereWithAggregatesInput[]
    OR?: ReportProjectScalarWhereWithAggregatesInput[]
    NOT?: ReportProjectScalarWhereWithAggregatesInput | ReportProjectScalarWhereWithAggregatesInput[]
    reportId?: IntWithAggregatesFilter<"ReportProject"> | number
    projectId?: IntWithAggregatesFilter<"ReportProject"> | number
    generatedDate?: DateTimeWithAggregatesFilter<"ReportProject"> | Date | string
    title?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    type?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    content?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    performanceAnalysis?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    completedTasks?: IntNullableWithAggregatesFilter<"ReportProject"> | number | null
    averageTimePerTask?: FloatNullableWithAggregatesFilter<"ReportProject"> | number | null
    completionRate?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    teamEfficiency?: StringNullableWithAggregatesFilter<"ReportProject"> | string | null
    totalTasks?: IntNullableWithAggregatesFilter<"ReportProject"> | number | null
  }

  export type UnavailabilityWhereInput = {
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    id?: IntFilter<"Unavailability"> | number
    type?: StringFilter<"Unavailability"> | string
    start?: DateTimeFilter<"Unavailability"> | Date | string
    end?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    active?: BoolFilter<"Unavailability"> | boolean
    userId?: IntFilter<"Unavailability"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UnavailabilityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    active?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UnavailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    OR?: UnavailabilityWhereInput[]
    NOT?: UnavailabilityWhereInput | UnavailabilityWhereInput[]
    type?: StringFilter<"Unavailability"> | string
    start?: DateTimeFilter<"Unavailability"> | Date | string
    end?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    active?: BoolFilter<"Unavailability"> | boolean
    userId?: IntFilter<"Unavailability"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UnavailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    active?: SortOrder
    userId?: SortOrder
    _count?: UnavailabilityCountOrderByAggregateInput
    _avg?: UnavailabilityAvgOrderByAggregateInput
    _max?: UnavailabilityMaxOrderByAggregateInput
    _min?: UnavailabilityMinOrderByAggregateInput
    _sum?: UnavailabilitySumOrderByAggregateInput
  }

  export type UnavailabilityScalarWhereWithAggregatesInput = {
    AND?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    OR?: UnavailabilityScalarWhereWithAggregatesInput[]
    NOT?: UnavailabilityScalarWhereWithAggregatesInput | UnavailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unavailability"> | number
    type?: StringWithAggregatesFilter<"Unavailability"> | string
    start?: DateTimeWithAggregatesFilter<"Unavailability"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Unavailability"> | Date | string | null
    active?: BoolWithAggregatesFilter<"Unavailability"> | boolean
    userId?: IntWithAggregatesFilter<"Unavailability"> | number
  }

  export type TimeZoneCreateInput = {
    name: string
    offset: number
    users?: UserCreateNestedManyWithoutTimezoneInput
  }

  export type TimeZoneUncheckedCreateInput = {
    timezoneId?: number
    name: string
    offset: number
    users?: UserUncheckedCreateNestedManyWithoutTimezoneInput
  }

  export type TimeZoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutTimezoneNestedInput
  }

  export type TimeZoneUncheckedUpdateInput = {
    timezoneId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutTimezoneNestedInput
  }

  export type TimeZoneCreateManyInput = {
    timezoneId?: number
    name: string
    offset: number
  }

  export type TimeZoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
  }

  export type TimeZoneUncheckedUpdateManyInput = {
    timezoneId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutDepartmentInput
    history?: HistoryCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    departmentId?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    history?: HistoryUncheckedCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUncheckedUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    departmentId?: number
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    reports?: ReportProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    projectId?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    reports?: ReportProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    projectId?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProjectUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProjectUserCreateInput = {
    user: UserCreateNestedOneWithoutProjectsInput
    project: ProjectCreateNestedOneWithoutUsersInput
  }

  export type ProjectUserUncheckedCreateInput = {
    userId: number
    projectId: number
  }

  export type ProjectUserUpdateInput = {
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProjectUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserCreateManyInput = {
    userId: number
    projectId: number
  }

  export type ProjectUserUpdateManyMutationInput = {

  }

  export type ProjectUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    project: ProjectCreateNestedOneWithoutTasksInput
    user?: UserCreateNestedOneWithoutTasksInput
    department?: DepartmentCreateNestedOneWithoutTaskInput
    history?: HistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    taskId?: number
    projectId: number
    userId?: number | null
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    history?: HistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    department?: DepartmentUpdateOneWithoutTaskNestedInput
    history?: HistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    history?: HistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    taskId?: number
    projectId: number
    userId?: number | null
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
  }

  export type TaskUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryCreateInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    task: TaskCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
    department?: DepartmentCreateNestedOneWithoutHistoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedHistoriesInput
    createdByDepartment?: DepartmentCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryUpdateInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
    department?: DepartmentUpdateOneWithoutHistoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedHistoriesNestedInput
    createdByDepartment?: DepartmentUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryCreateManyInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryUpdateManyMutationInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ReportProjectCreateInput = {
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
    project: ProjectCreateNestedOneWithoutReportsInput
  }

  export type ReportProjectUncheckedCreateInput = {
    reportId?: number
    projectId: number
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
  }

  export type ReportProjectUpdateInput = {
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportProjectUncheckedUpdateInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportProjectCreateManyInput = {
    reportId?: number
    projectId: number
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
  }

  export type ReportProjectUpdateManyMutationInput = {
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportProjectUncheckedUpdateManyInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnavailabilityCreateInput = {
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
    user: UserCreateNestedOneWithoutUnavailabilityPeriodsInput
  }

  export type UnavailabilityUncheckedCreateInput = {
    id?: number
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
    userId: number
  }

  export type UnavailabilityUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUnavailabilityPeriodsNestedInput
  }

  export type UnavailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UnavailabilityCreateManyInput = {
    id?: number
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
    userId: number
  }

  export type UnavailabilityUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeZoneCountOrderByAggregateInput = {
    timezoneId?: SortOrder
    name?: SortOrder
    offset?: SortOrder
  }

  export type TimeZoneAvgOrderByAggregateInput = {
    timezoneId?: SortOrder
    offset?: SortOrder
  }

  export type TimeZoneMaxOrderByAggregateInput = {
    timezoneId?: SortOrder
    name?: SortOrder
    offset?: SortOrder
  }

  export type TimeZoneMinOrderByAggregateInput = {
    timezoneId?: SortOrder
    name?: SortOrder
    offset?: SortOrder
  }

  export type TimeZoneSumOrderByAggregateInput = {
    timezoneId?: SortOrder
    offset?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    departmentId?: SortOrder
    name?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    departmentId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    departmentId?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    departmentId?: SortOrder
    name?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    departmentId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TimeZoneScalarRelationFilter = {
    is?: TimeZoneWhereInput
    isNot?: TimeZoneWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type UnavailabilityListRelationFilter = {
    every?: UnavailabilityWhereInput
    some?: UnavailabilityWhereInput
    none?: UnavailabilityWhereInput
  }

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type ProjectUserListRelationFilter = {
    every?: ProjectUserWhereInput
    some?: ProjectUserWhereInput
    none?: ProjectUserWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnavailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    workingHours?: SortOrder
    roleId?: SortOrder
    isAdmin?: SortOrder
    isActive?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    isAdmin?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    isAdmin?: SortOrder
    isActive?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    timezoneId?: SortOrder
    departmentId?: SortOrder
    roleId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ReportProjectListRelationFilter = {
    every?: ReportProjectWhereInput
    some?: ReportProjectWhereInput
    none?: ReportProjectWhereInput
  }

  export type ReportProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    projectId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    projectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    projectId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectUserUserIdProjectIdCompoundUniqueInput = {
    userId: number
    projectId: number
  }

  export type ProjectUserCountOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectUserAvgOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectUserMinOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectUserSumOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assignmentDate?: SortOrder
    hoursSpent?: SortOrder
    dueDate?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    hoursSpent?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    order?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assignmentDate?: SortOrder
    hoursSpent?: SortOrder
    dueDate?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assignmentDate?: SortOrder
    hoursSpent?: SortOrder
    dueDate?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    taskId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    hoursSpent?: SortOrder
    estimatedHours?: SortOrder
    progress?: SortOrder
    order?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type HistoryCountOrderByAggregateInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    createdByDepartmentId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    createdByUserId?: SortOrder
    createdByDepartmentId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    createdByDepartmentId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    createdByDepartmentId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    historyId?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    createdByUserId?: SortOrder
    createdByDepartmentId?: SortOrder
    hoursSpent?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ReportProjectCountOrderByAggregateInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    generatedDate?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    performanceAnalysis?: SortOrder
    completedTasks?: SortOrder
    averageTimePerTask?: SortOrder
    completionRate?: SortOrder
    teamEfficiency?: SortOrder
    totalTasks?: SortOrder
  }

  export type ReportProjectAvgOrderByAggregateInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    completedTasks?: SortOrder
    averageTimePerTask?: SortOrder
    totalTasks?: SortOrder
  }

  export type ReportProjectMaxOrderByAggregateInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    generatedDate?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    performanceAnalysis?: SortOrder
    completedTasks?: SortOrder
    averageTimePerTask?: SortOrder
    completionRate?: SortOrder
    teamEfficiency?: SortOrder
    totalTasks?: SortOrder
  }

  export type ReportProjectMinOrderByAggregateInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    generatedDate?: SortOrder
    title?: SortOrder
    type?: SortOrder
    content?: SortOrder
    performanceAnalysis?: SortOrder
    completedTasks?: SortOrder
    averageTimePerTask?: SortOrder
    completionRate?: SortOrder
    teamEfficiency?: SortOrder
    totalTasks?: SortOrder
  }

  export type ReportProjectSumOrderByAggregateInput = {
    reportId?: SortOrder
    projectId?: SortOrder
    completedTasks?: SortOrder
    averageTimePerTask?: SortOrder
    totalTasks?: SortOrder
  }

  export type UnavailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type UnavailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UnavailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type UnavailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type UnavailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedManyWithoutTimezoneInput = {
    create?: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput> | UserCreateWithoutTimezoneInput[] | UserUncheckedCreateWithoutTimezoneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTimezoneInput | UserCreateOrConnectWithoutTimezoneInput[]
    createMany?: UserCreateManyTimezoneInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTimezoneInput = {
    create?: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput> | UserCreateWithoutTimezoneInput[] | UserUncheckedCreateWithoutTimezoneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTimezoneInput | UserCreateOrConnectWithoutTimezoneInput[]
    createMany?: UserCreateManyTimezoneInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutTimezoneNestedInput = {
    create?: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput> | UserCreateWithoutTimezoneInput[] | UserUncheckedCreateWithoutTimezoneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTimezoneInput | UserCreateOrConnectWithoutTimezoneInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTimezoneInput | UserUpsertWithWhereUniqueWithoutTimezoneInput[]
    createMany?: UserCreateManyTimezoneInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTimezoneInput | UserUpdateWithWhereUniqueWithoutTimezoneInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTimezoneInput | UserUpdateManyWithWhereWithoutTimezoneInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTimezoneNestedInput = {
    create?: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput> | UserCreateWithoutTimezoneInput[] | UserUncheckedCreateWithoutTimezoneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTimezoneInput | UserCreateOrConnectWithoutTimezoneInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTimezoneInput | UserUpsertWithWhereUniqueWithoutTimezoneInput[]
    createMany?: UserCreateManyTimezoneInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTimezoneInput | UserUpdateWithWhereUniqueWithoutTimezoneInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTimezoneInput | UserUpdateManyWithWhereWithoutTimezoneInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput> | HistoryCreateWithoutDepartmentInput[] | HistoryUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutDepartmentInput | HistoryCreateOrConnectWithoutDepartmentInput[]
    createMany?: HistoryCreateManyDepartmentInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutCreatedByDepartmentInput = {
    create?: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput> | HistoryCreateWithoutCreatedByDepartmentInput[] | HistoryUncheckedCreateWithoutCreatedByDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByDepartmentInput | HistoryCreateOrConnectWithoutCreatedByDepartmentInput[]
    createMany?: HistoryCreateManyCreatedByDepartmentInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput> | TaskCreateWithoutDepartmentInput[] | TaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDepartmentInput | TaskCreateOrConnectWithoutDepartmentInput[]
    createMany?: TaskCreateManyDepartmentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput> | HistoryCreateWithoutDepartmentInput[] | HistoryUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutDepartmentInput | HistoryCreateOrConnectWithoutDepartmentInput[]
    createMany?: HistoryCreateManyDepartmentInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutCreatedByDepartmentInput = {
    create?: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput> | HistoryCreateWithoutCreatedByDepartmentInput[] | HistoryUncheckedCreateWithoutCreatedByDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByDepartmentInput | HistoryCreateOrConnectWithoutCreatedByDepartmentInput[]
    createMany?: HistoryCreateManyCreatedByDepartmentInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput> | TaskCreateWithoutDepartmentInput[] | TaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDepartmentInput | TaskCreateOrConnectWithoutDepartmentInput[]
    createMany?: TaskCreateManyDepartmentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput> | HistoryCreateWithoutDepartmentInput[] | HistoryUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutDepartmentInput | HistoryCreateOrConnectWithoutDepartmentInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutDepartmentInput | HistoryUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: HistoryCreateManyDepartmentInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutDepartmentInput | HistoryUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutDepartmentInput | HistoryUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutCreatedByDepartmentNestedInput = {
    create?: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput> | HistoryCreateWithoutCreatedByDepartmentInput[] | HistoryUncheckedCreateWithoutCreatedByDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByDepartmentInput | HistoryCreateOrConnectWithoutCreatedByDepartmentInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutCreatedByDepartmentInput | HistoryUpsertWithWhereUniqueWithoutCreatedByDepartmentInput[]
    createMany?: HistoryCreateManyCreatedByDepartmentInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutCreatedByDepartmentInput | HistoryUpdateWithWhereUniqueWithoutCreatedByDepartmentInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutCreatedByDepartmentInput | HistoryUpdateManyWithWhereWithoutCreatedByDepartmentInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput> | TaskCreateWithoutDepartmentInput[] | TaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDepartmentInput | TaskCreateOrConnectWithoutDepartmentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDepartmentInput | TaskUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: TaskCreateManyDepartmentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDepartmentInput | TaskUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDepartmentInput | TaskUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput> | HistoryCreateWithoutDepartmentInput[] | HistoryUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutDepartmentInput | HistoryCreateOrConnectWithoutDepartmentInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutDepartmentInput | HistoryUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: HistoryCreateManyDepartmentInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutDepartmentInput | HistoryUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutDepartmentInput | HistoryUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutCreatedByDepartmentNestedInput = {
    create?: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput> | HistoryCreateWithoutCreatedByDepartmentInput[] | HistoryUncheckedCreateWithoutCreatedByDepartmentInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByDepartmentInput | HistoryCreateOrConnectWithoutCreatedByDepartmentInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutCreatedByDepartmentInput | HistoryUpsertWithWhereUniqueWithoutCreatedByDepartmentInput[]
    createMany?: HistoryCreateManyCreatedByDepartmentInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutCreatedByDepartmentInput | HistoryUpdateWithWhereUniqueWithoutCreatedByDepartmentInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutCreatedByDepartmentInput | HistoryUpdateManyWithWhereWithoutCreatedByDepartmentInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput> | TaskCreateWithoutDepartmentInput[] | TaskUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutDepartmentInput | TaskCreateOrConnectWithoutDepartmentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutDepartmentInput | TaskUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: TaskCreateManyDepartmentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutDepartmentInput | TaskUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutDepartmentInput | TaskUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TimeZoneCreateNestedOneWithoutUsersInput = {
    create?: XOR<TimeZoneCreateWithoutUsersInput, TimeZoneUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TimeZoneCreateOrConnectWithoutUsersInput
    connect?: TimeZoneWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UnavailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput> | UnavailabilityCreateWithoutUserInput[] | UnavailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutUserInput | UnavailabilityCreateOrConnectWithoutUserInput[]
    createMany?: UnavailabilityCreateManyUserInputEnvelope
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type ProjectUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput> | ProjectUserCreateWithoutUserInput[] | ProjectUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutUserInput | ProjectUserCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUserCreateManyUserInputEnvelope
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput> | HistoryCreateWithoutCreatedByUserInput[] | HistoryUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByUserInput | HistoryCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: HistoryCreateManyCreatedByUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type UnavailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput> | UnavailabilityCreateWithoutUserInput[] | UnavailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutUserInput | UnavailabilityCreateOrConnectWithoutUserInput[]
    createMany?: UnavailabilityCreateManyUserInputEnvelope
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type ProjectUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput> | ProjectUserCreateWithoutUserInput[] | ProjectUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutUserInput | ProjectUserCreateOrConnectWithoutUserInput[]
    createMany?: ProjectUserCreateManyUserInputEnvelope
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput> | HistoryCreateWithoutCreatedByUserInput[] | HistoryUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByUserInput | HistoryCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: HistoryCreateManyCreatedByUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TimeZoneUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TimeZoneCreateWithoutUsersInput, TimeZoneUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TimeZoneCreateOrConnectWithoutUsersInput
    upsert?: TimeZoneUpsertWithoutUsersInput
    connect?: TimeZoneWhereUniqueInput
    update?: XOR<XOR<TimeZoneUpdateToOneWithWhereWithoutUsersInput, TimeZoneUpdateWithoutUsersInput>, TimeZoneUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UnavailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput> | UnavailabilityCreateWithoutUserInput[] | UnavailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutUserInput | UnavailabilityCreateOrConnectWithoutUserInput[]
    upsert?: UnavailabilityUpsertWithWhereUniqueWithoutUserInput | UnavailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnavailabilityCreateManyUserInputEnvelope
    set?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    disconnect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    delete?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    update?: UnavailabilityUpdateWithWhereUniqueWithoutUserInput | UnavailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnavailabilityUpdateManyWithWhereWithoutUserInput | UnavailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type ProjectUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput> | ProjectUserCreateWithoutUserInput[] | ProjectUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutUserInput | ProjectUserCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUserUpsertWithWhereUniqueWithoutUserInput | ProjectUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUserCreateManyUserInputEnvelope
    set?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    disconnect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    delete?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    update?: ProjectUserUpdateWithWhereUniqueWithoutUserInput | ProjectUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUserUpdateManyWithWhereWithoutUserInput | ProjectUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput> | HistoryCreateWithoutCreatedByUserInput[] | HistoryUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByUserInput | HistoryCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutCreatedByUserInput | HistoryUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: HistoryCreateManyCreatedByUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutCreatedByUserInput | HistoryUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutCreatedByUserInput | HistoryUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnavailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput> | UnavailabilityCreateWithoutUserInput[] | UnavailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnavailabilityCreateOrConnectWithoutUserInput | UnavailabilityCreateOrConnectWithoutUserInput[]
    upsert?: UnavailabilityUpsertWithWhereUniqueWithoutUserInput | UnavailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnavailabilityCreateManyUserInputEnvelope
    set?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    disconnect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    delete?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    connect?: UnavailabilityWhereUniqueInput | UnavailabilityWhereUniqueInput[]
    update?: UnavailabilityUpdateWithWhereUniqueWithoutUserInput | UnavailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnavailabilityUpdateManyWithWhereWithoutUserInput | UnavailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type ProjectUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput> | ProjectUserCreateWithoutUserInput[] | ProjectUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutUserInput | ProjectUserCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUserUpsertWithWhereUniqueWithoutUserInput | ProjectUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectUserCreateManyUserInputEnvelope
    set?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    disconnect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    delete?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    update?: ProjectUserUpdateWithWhereUniqueWithoutUserInput | ProjectUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUserUpdateManyWithWhereWithoutUserInput | ProjectUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput> | HistoryCreateWithoutCreatedByUserInput[] | HistoryUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutCreatedByUserInput | HistoryCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutCreatedByUserInput | HistoryUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: HistoryCreateManyCreatedByUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutCreatedByUserInput | HistoryUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutCreatedByUserInput | HistoryUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type ProjectUserCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput> | ProjectUserCreateWithoutProjectInput[] | ProjectUserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutProjectInput | ProjectUserCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUserCreateManyProjectInputEnvelope
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ReportProjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput> | ReportProjectCreateWithoutProjectInput[] | ReportProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReportProjectCreateOrConnectWithoutProjectInput | ReportProjectCreateOrConnectWithoutProjectInput[]
    createMany?: ReportProjectCreateManyProjectInputEnvelope
    connect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
  }

  export type ProjectUserUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput> | ProjectUserCreateWithoutProjectInput[] | ProjectUserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutProjectInput | ProjectUserCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectUserCreateManyProjectInputEnvelope
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ReportProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput> | ReportProjectCreateWithoutProjectInput[] | ReportProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReportProjectCreateOrConnectWithoutProjectInput | ReportProjectCreateOrConnectWithoutProjectInput[]
    createMany?: ReportProjectCreateManyProjectInputEnvelope
    connect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ProjectUserUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput> | ProjectUserCreateWithoutProjectInput[] | ProjectUserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutProjectInput | ProjectUserCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUserUpsertWithWhereUniqueWithoutProjectInput | ProjectUserUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUserCreateManyProjectInputEnvelope
    set?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    disconnect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    delete?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    update?: ProjectUserUpdateWithWhereUniqueWithoutProjectInput | ProjectUserUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUserUpdateManyWithWhereWithoutProjectInput | ProjectUserUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ReportProjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput> | ReportProjectCreateWithoutProjectInput[] | ReportProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReportProjectCreateOrConnectWithoutProjectInput | ReportProjectCreateOrConnectWithoutProjectInput[]
    upsert?: ReportProjectUpsertWithWhereUniqueWithoutProjectInput | ReportProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReportProjectCreateManyProjectInputEnvelope
    set?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    disconnect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    delete?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    connect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    update?: ReportProjectUpdateWithWhereUniqueWithoutProjectInput | ReportProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReportProjectUpdateManyWithWhereWithoutProjectInput | ReportProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReportProjectScalarWhereInput | ReportProjectScalarWhereInput[]
  }

  export type ProjectUserUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput> | ProjectUserCreateWithoutProjectInput[] | ProjectUserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectUserCreateOrConnectWithoutProjectInput | ProjectUserCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectUserUpsertWithWhereUniqueWithoutProjectInput | ProjectUserUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectUserCreateManyProjectInputEnvelope
    set?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    disconnect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    delete?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    connect?: ProjectUserWhereUniqueInput | ProjectUserWhereUniqueInput[]
    update?: ProjectUserUpdateWithWhereUniqueWithoutProjectInput | ProjectUserUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectUserUpdateManyWithWhereWithoutProjectInput | ProjectUserUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ReportProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput> | ReportProjectCreateWithoutProjectInput[] | ReportProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReportProjectCreateOrConnectWithoutProjectInput | ReportProjectCreateOrConnectWithoutProjectInput[]
    upsert?: ReportProjectUpsertWithWhereUniqueWithoutProjectInput | ReportProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReportProjectCreateManyProjectInputEnvelope
    set?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    disconnect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    delete?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    connect?: ReportProjectWhereUniqueInput | ReportProjectWhereUniqueInput[]
    update?: ReportProjectUpdateWithWhereUniqueWithoutProjectInput | ReportProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReportProjectUpdateManyWithWhereWithoutProjectInput | ReportProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReportProjectScalarWhereInput | ReportProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    upsert?: ProjectUpsertWithoutUsersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUsersInput, ProjectUpdateWithoutUsersInput>, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutTaskInput = {
    create?: XOR<DepartmentCreateWithoutTaskInput, DepartmentUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutTaskInput
    connect?: DepartmentWhereUniqueInput
  }

  export type HistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput> | HistoryCreateWithoutTaskInput[] | HistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTaskInput | HistoryCreateOrConnectWithoutTaskInput[]
    createMany?: HistoryCreateManyTaskInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput> | HistoryCreateWithoutTaskInput[] | HistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTaskInput | HistoryCreateOrConnectWithoutTaskInput[]
    createMany?: HistoryCreateManyTaskInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type DepartmentUpdateOneWithoutTaskNestedInput = {
    create?: XOR<DepartmentCreateWithoutTaskInput, DepartmentUncheckedCreateWithoutTaskInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutTaskInput
    upsert?: DepartmentUpsertWithoutTaskInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutTaskInput, DepartmentUpdateWithoutTaskInput>, DepartmentUncheckedUpdateWithoutTaskInput>
  }

  export type HistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput> | HistoryCreateWithoutTaskInput[] | HistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTaskInput | HistoryCreateOrConnectWithoutTaskInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutTaskInput | HistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: HistoryCreateManyTaskInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutTaskInput | HistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutTaskInput | HistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput> | HistoryCreateWithoutTaskInput[] | HistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTaskInput | HistoryCreateOrConnectWithoutTaskInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutTaskInput | HistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: HistoryCreateManyTaskInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutTaskInput | HistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutTaskInput | HistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type TaskCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutHistoryInput = {
    create?: XOR<DepartmentCreateWithoutHistoryInput, DepartmentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHistoryInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedHistoriesInput = {
    create?: XOR<UserCreateWithoutCreatedHistoriesInput, UserUncheckedCreateWithoutCreatedHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutCreatedHistoriesInput = {
    create?: XOR<DepartmentCreateWithoutCreatedHistoriesInput, DepartmentUncheckedCreateWithoutCreatedHistoriesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedHistoriesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    upsert?: TaskUpsertWithoutHistoryInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutHistoryInput, TaskUpdateWithoutHistoryInput>, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type DepartmentUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<DepartmentCreateWithoutHistoryInput, DepartmentUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutHistoryInput
    upsert?: DepartmentUpsertWithoutHistoryInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutHistoryInput, DepartmentUpdateWithoutHistoryInput>, DepartmentUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutCreatedHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedHistoriesInput, UserUncheckedCreateWithoutCreatedHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedHistoriesInput
    upsert?: UserUpsertWithoutCreatedHistoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedHistoriesInput, UserUpdateWithoutCreatedHistoriesInput>, UserUncheckedUpdateWithoutCreatedHistoriesInput>
  }

  export type DepartmentUpdateOneWithoutCreatedHistoriesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCreatedHistoriesInput, DepartmentUncheckedCreateWithoutCreatedHistoriesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedHistoriesInput
    upsert?: DepartmentUpsertWithoutCreatedHistoriesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCreatedHistoriesInput, DepartmentUpdateWithoutCreatedHistoriesInput>, DepartmentUncheckedUpdateWithoutCreatedHistoriesInput>
  }

  export type ProjectCreateNestedOneWithoutReportsInput = {
    create?: XOR<ProjectCreateWithoutReportsInput, ProjectUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReportsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<ProjectCreateWithoutReportsInput, ProjectUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReportsInput
    upsert?: ProjectUpsertWithoutReportsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutReportsInput, ProjectUpdateWithoutReportsInput>, ProjectUncheckedUpdateWithoutReportsInput>
  }

  export type UserCreateNestedOneWithoutUnavailabilityPeriodsInput = {
    create?: XOR<UserCreateWithoutUnavailabilityPeriodsInput, UserUncheckedCreateWithoutUnavailabilityPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnavailabilityPeriodsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUnavailabilityPeriodsNestedInput = {
    create?: XOR<UserCreateWithoutUnavailabilityPeriodsInput, UserUncheckedCreateWithoutUnavailabilityPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnavailabilityPeriodsInput
    upsert?: UserUpsertWithoutUnavailabilityPeriodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUnavailabilityPeriodsInput, UserUpdateWithoutUnavailabilityPeriodsInput>, UserUncheckedUpdateWithoutUnavailabilityPeriodsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutTimezoneInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutTimezoneInput = {
    userId?: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutTimezoneInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput>
  }

  export type UserCreateManyTimezoneInputEnvelope = {
    data: UserCreateManyTimezoneInput | UserCreateManyTimezoneInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTimezoneInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTimezoneInput, UserUncheckedUpdateWithoutTimezoneInput>
    create: XOR<UserCreateWithoutTimezoneInput, UserUncheckedCreateWithoutTimezoneInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTimezoneInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTimezoneInput, UserUncheckedUpdateWithoutTimezoneInput>
  }

  export type UserUpdateManyWithWhereWithoutTimezoneInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTimezoneInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: IntFilter<"User"> | number
    timezoneId?: IntFilter<"User"> | number
    departmentId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    workingHours?: JsonNullableFilter<"User">
    roleId?: IntNullableFilter<"User"> | number | null
    isAdmin?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
  }

  export type UserCreateWithoutDepartmentInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    userId?: number
    timezoneId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutDepartmentInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    task: TaskCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedHistoriesInput
    createdByDepartment?: DepartmentCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutDepartmentInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateOrConnectWithoutDepartmentInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput>
  }

  export type HistoryCreateManyDepartmentInputEnvelope = {
    data: HistoryCreateManyDepartmentInput | HistoryCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutCreatedByDepartmentInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    task: TaskCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
    department?: DepartmentCreateNestedOneWithoutHistoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutCreatedByDepartmentInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateOrConnectWithoutCreatedByDepartmentInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput>
  }

  export type HistoryCreateManyCreatedByDepartmentInputEnvelope = {
    data: HistoryCreateManyCreatedByDepartmentInput | HistoryCreateManyCreatedByDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutDepartmentInput = {
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    project: ProjectCreateNestedOneWithoutTasksInput
    user?: UserCreateNestedOneWithoutTasksInput
    history?: HistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutDepartmentInput = {
    taskId?: number
    projectId: number
    userId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    history?: HistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutDepartmentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput>
  }

  export type TaskCreateManyDepartmentInputEnvelope = {
    data: TaskCreateManyDepartmentInput | TaskCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutDepartmentInput, HistoryUncheckedUpdateWithoutDepartmentInput>
    create: XOR<HistoryCreateWithoutDepartmentInput, HistoryUncheckedCreateWithoutDepartmentInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutDepartmentInput, HistoryUncheckedUpdateWithoutDepartmentInput>
  }

  export type HistoryUpdateManyWithWhereWithoutDepartmentInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    historyId?: IntFilter<"History"> | number
    taskId?: IntFilter<"History"> | number
    userId?: IntNullableFilter<"History"> | number | null
    departmentId?: IntNullableFilter<"History"> | number | null
    comment?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeFilter<"History"> | Date | string
    createdByUserId?: IntNullableFilter<"History"> | number | null
    createdByDepartmentId?: IntNullableFilter<"History"> | number | null
    hoursSpent?: FloatNullableFilter<"History"> | number | null
  }

  export type HistoryUpsertWithWhereUniqueWithoutCreatedByDepartmentInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutCreatedByDepartmentInput, HistoryUncheckedUpdateWithoutCreatedByDepartmentInput>
    create: XOR<HistoryCreateWithoutCreatedByDepartmentInput, HistoryUncheckedCreateWithoutCreatedByDepartmentInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutCreatedByDepartmentInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutCreatedByDepartmentInput, HistoryUncheckedUpdateWithoutCreatedByDepartmentInput>
  }

  export type HistoryUpdateManyWithWhereWithoutCreatedByDepartmentInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutCreatedByDepartmentInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutDepartmentInput, TaskUncheckedUpdateWithoutDepartmentInput>
    create: XOR<TaskCreateWithoutDepartmentInput, TaskUncheckedCreateWithoutDepartmentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutDepartmentInput, TaskUncheckedUpdateWithoutDepartmentInput>
  }

  export type TaskUpdateManyWithWhereWithoutDepartmentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    taskId?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    userId?: IntNullableFilter<"Task"> | number | null
    departmentId?: IntNullableFilter<"Task"> | number | null
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignmentDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    hoursSpent?: IntNullableFilter<"Task"> | number | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    estimatedHours?: IntNullableFilter<"Task"> | number | null
    progress?: IntNullableFilter<"Task"> | number | null
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    order?: IntFilter<"Task"> | number
  }

  export type TimeZoneCreateWithoutUsersInput = {
    name: string
    offset: number
  }

  export type TimeZoneUncheckedCreateWithoutUsersInput = {
    timezoneId?: number
    name: string
    offset: number
  }

  export type TimeZoneCreateOrConnectWithoutUsersInput = {
    where: TimeZoneWhereUniqueInput
    create: XOR<TimeZoneCreateWithoutUsersInput, TimeZoneUncheckedCreateWithoutUsersInput>
  }

  export type DepartmentCreateWithoutUsersInput = {
    name: string
    history?: HistoryCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    departmentId?: number
    name: string
    history?: HistoryUncheckedCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UnavailabilityCreateWithoutUserInput = {
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
  }

  export type UnavailabilityUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
  }

  export type UnavailabilityCreateOrConnectWithoutUserInput = {
    where: UnavailabilityWhereUniqueInput
    create: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput>
  }

  export type UnavailabilityCreateManyUserInputEnvelope = {
    data: UnavailabilityCreateManyUserInput | UnavailabilityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type TaskCreateWithoutUserInput = {
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    project: ProjectCreateNestedOneWithoutTasksInput
    department?: DepartmentCreateNestedOneWithoutTaskInput
    history?: HistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    taskId?: number
    projectId: number
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    history?: HistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUserInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    task: TaskCreateNestedOneWithoutHistoryInput
    department?: DepartmentCreateNestedOneWithoutHistoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedHistoriesInput
    createdByDepartment?: DepartmentCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutUserInput = {
    historyId?: number
    taskId: number
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateOrConnectWithoutUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryCreateManyUserInputEnvelope = {
    data: HistoryCreateManyUserInput | HistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUserCreateWithoutUserInput = {
    project: ProjectCreateNestedOneWithoutUsersInput
  }

  export type ProjectUserUncheckedCreateWithoutUserInput = {
    projectId: number
  }

  export type ProjectUserCreateOrConnectWithoutUserInput = {
    where: ProjectUserWhereUniqueInput
    create: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput>
  }

  export type ProjectUserCreateManyUserInputEnvelope = {
    data: ProjectUserCreateManyUserInput | ProjectUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutCreatedByUserInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    task: TaskCreateNestedOneWithoutHistoryInput
    user?: UserCreateNestedOneWithoutHistoryInput
    department?: DepartmentCreateNestedOneWithoutHistoryInput
    createdByDepartment?: DepartmentCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutCreatedByUserInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateOrConnectWithoutCreatedByUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput>
  }

  export type HistoryCreateManyCreatedByUserInputEnvelope = {
    data: HistoryCreateManyCreatedByUserInput | HistoryCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeZoneUpsertWithoutUsersInput = {
    update: XOR<TimeZoneUpdateWithoutUsersInput, TimeZoneUncheckedUpdateWithoutUsersInput>
    create: XOR<TimeZoneCreateWithoutUsersInput, TimeZoneUncheckedCreateWithoutUsersInput>
    where?: TimeZoneWhereInput
  }

  export type TimeZoneUpdateToOneWithWhereWithoutUsersInput = {
    where?: TimeZoneWhereInput
    data: XOR<TimeZoneUpdateWithoutUsersInput, TimeZoneUncheckedUpdateWithoutUsersInput>
  }

  export type TimeZoneUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
  }

  export type TimeZoneUncheckedUpdateWithoutUsersInput = {
    timezoneId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    offset?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    history?: HistoryUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    history?: HistoryUncheckedUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UnavailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: UnavailabilityWhereUniqueInput
    update: XOR<UnavailabilityUpdateWithoutUserInput, UnavailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<UnavailabilityCreateWithoutUserInput, UnavailabilityUncheckedCreateWithoutUserInput>
  }

  export type UnavailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: UnavailabilityWhereUniqueInput
    data: XOR<UnavailabilityUpdateWithoutUserInput, UnavailabilityUncheckedUpdateWithoutUserInput>
  }

  export type UnavailabilityUpdateManyWithWhereWithoutUserInput = {
    where: UnavailabilityScalarWhereInput
    data: XOR<UnavailabilityUpdateManyMutationInput, UnavailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type UnavailabilityScalarWhereInput = {
    AND?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
    OR?: UnavailabilityScalarWhereInput[]
    NOT?: UnavailabilityScalarWhereInput | UnavailabilityScalarWhereInput[]
    id?: IntFilter<"Unavailability"> | number
    type?: StringFilter<"Unavailability"> | string
    start?: DateTimeFilter<"Unavailability"> | Date | string
    end?: DateTimeNullableFilter<"Unavailability"> | Date | string | null
    active?: BoolFilter<"Unavailability"> | boolean
    userId?: IntFilter<"Unavailability"> | number
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectUserWhereUniqueInput
    update: XOR<ProjectUserUpdateWithoutUserInput, ProjectUserUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectUserCreateWithoutUserInput, ProjectUserUncheckedCreateWithoutUserInput>
  }

  export type ProjectUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectUserWhereUniqueInput
    data: XOR<ProjectUserUpdateWithoutUserInput, ProjectUserUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUserUpdateManyWithWhereWithoutUserInput = {
    where: ProjectUserScalarWhereInput
    data: XOR<ProjectUserUpdateManyMutationInput, ProjectUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectUserScalarWhereInput = {
    AND?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
    OR?: ProjectUserScalarWhereInput[]
    NOT?: ProjectUserScalarWhereInput | ProjectUserScalarWhereInput[]
    userId?: IntFilter<"ProjectUser"> | number
    projectId?: IntFilter<"ProjectUser"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    subject?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutCreatedByUserInput, HistoryUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<HistoryCreateWithoutCreatedByUserInput, HistoryUncheckedCreateWithoutCreatedByUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutCreatedByUserInput, HistoryUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ProjectUserCreateWithoutProjectInput = {
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUserUncheckedCreateWithoutProjectInput = {
    userId: number
  }

  export type ProjectUserCreateOrConnectWithoutProjectInput = {
    where: ProjectUserWhereUniqueInput
    create: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUserCreateManyProjectInputEnvelope = {
    data: ProjectUserCreateManyProjectInput | ProjectUserCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutProjectInput = {
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    user?: UserCreateNestedOneWithoutTasksInput
    department?: DepartmentCreateNestedOneWithoutTaskInput
    history?: HistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    taskId?: number
    userId?: number | null
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    history?: HistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ReportProjectCreateWithoutProjectInput = {
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
  }

  export type ReportProjectUncheckedCreateWithoutProjectInput = {
    reportId?: number
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
  }

  export type ReportProjectCreateOrConnectWithoutProjectInput = {
    where: ReportProjectWhereUniqueInput
    create: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput>
  }

  export type ReportProjectCreateManyProjectInputEnvelope = {
    data: ReportProjectCreateManyProjectInput | ReportProjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUserUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectUserWhereUniqueInput
    update: XOR<ProjectUserUpdateWithoutProjectInput, ProjectUserUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectUserCreateWithoutProjectInput, ProjectUserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectUserUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectUserWhereUniqueInput
    data: XOR<ProjectUserUpdateWithoutProjectInput, ProjectUserUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectUserUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectUserScalarWhereInput
    data: XOR<ProjectUserUpdateManyMutationInput, ProjectUserUncheckedUpdateManyWithoutProjectInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ReportProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: ReportProjectWhereUniqueInput
    update: XOR<ReportProjectUpdateWithoutProjectInput, ReportProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<ReportProjectCreateWithoutProjectInput, ReportProjectUncheckedCreateWithoutProjectInput>
  }

  export type ReportProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: ReportProjectWhereUniqueInput
    data: XOR<ReportProjectUpdateWithoutProjectInput, ReportProjectUncheckedUpdateWithoutProjectInput>
  }

  export type ReportProjectUpdateManyWithWhereWithoutProjectInput = {
    where: ReportProjectScalarWhereInput
    data: XOR<ReportProjectUpdateManyMutationInput, ReportProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ReportProjectScalarWhereInput = {
    AND?: ReportProjectScalarWhereInput | ReportProjectScalarWhereInput[]
    OR?: ReportProjectScalarWhereInput[]
    NOT?: ReportProjectScalarWhereInput | ReportProjectScalarWhereInput[]
    reportId?: IntFilter<"ReportProject"> | number
    projectId?: IntFilter<"ReportProject"> | number
    generatedDate?: DateTimeFilter<"ReportProject"> | Date | string
    title?: StringNullableFilter<"ReportProject"> | string | null
    type?: StringNullableFilter<"ReportProject"> | string | null
    content?: StringNullableFilter<"ReportProject"> | string | null
    performanceAnalysis?: StringNullableFilter<"ReportProject"> | string | null
    completedTasks?: IntNullableFilter<"ReportProject"> | number | null
    averageTimePerTask?: FloatNullableFilter<"ReportProject"> | number | null
    completionRate?: StringNullableFilter<"ReportProject"> | string | null
    teamEfficiency?: StringNullableFilter<"ReportProject"> | string | null
    totalTasks?: IntNullableFilter<"ReportProject"> | number | null
  }

  export type UserCreateWithoutProjectsInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectCreateWithoutUsersInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    tasks?: TaskCreateNestedManyWithoutProjectInput
    reports?: ReportProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUsersInput = {
    projectId?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    reports?: ReportProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type ProjectUpsertWithoutUsersInput = {
    update: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUsersInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserCreateNestedManyWithoutProjectInput
    reports?: ReportProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    projectId?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserUncheckedCreateNestedManyWithoutProjectInput
    reports?: ReportProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type DepartmentCreateWithoutTaskInput = {
    name: string
    users?: UserCreateNestedManyWithoutDepartmentInput
    history?: HistoryCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutTaskInput = {
    departmentId?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    history?: HistoryUncheckedCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutTaskInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutTaskInput, DepartmentUncheckedCreateWithoutTaskInput>
  }

  export type HistoryCreateWithoutTaskInput = {
    comment?: string | null
    createdAt?: Date | string
    hoursSpent?: number | null
    user?: UserCreateNestedOneWithoutHistoryInput
    department?: DepartmentCreateNestedOneWithoutHistoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedHistoriesInput
    createdByDepartment?: DepartmentCreateNestedOneWithoutCreatedHistoriesInput
  }

  export type HistoryUncheckedCreateWithoutTaskInput = {
    historyId?: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateOrConnectWithoutTaskInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput>
  }

  export type HistoryCreateManyTaskInputEnvelope = {
    data: HistoryCreateManyTaskInput | HistoryCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUncheckedUpdateManyWithoutProjectNestedInput
    reports?: ReportProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type DepartmentUpsertWithoutTaskInput = {
    update: XOR<DepartmentUpdateWithoutTaskInput, DepartmentUncheckedUpdateWithoutTaskInput>
    create: XOR<DepartmentCreateWithoutTaskInput, DepartmentUncheckedCreateWithoutTaskInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutTaskInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutTaskInput, DepartmentUncheckedUpdateWithoutTaskInput>
  }

  export type DepartmentUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutTaskInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUncheckedUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByDepartmentNestedInput
  }

  export type HistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutTaskInput, HistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<HistoryCreateWithoutTaskInput, HistoryUncheckedCreateWithoutTaskInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutTaskInput, HistoryUncheckedUpdateWithoutTaskInput>
  }

  export type HistoryUpdateManyWithWhereWithoutTaskInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutNotificationInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type TaskCreateWithoutHistoryInput = {
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
    project: ProjectCreateNestedOneWithoutTasksInput
    user?: UserCreateNestedOneWithoutTasksInput
    department?: DepartmentCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutHistoryInput = {
    taskId?: number
    projectId: number
    userId?: number | null
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
  }

  export type TaskCreateOrConnectWithoutHistoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type DepartmentCreateWithoutHistoryInput = {
    name: string
    users?: UserCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutHistoryInput = {
    departmentId?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByDepartmentInput
    Task?: TaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutHistoryInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutHistoryInput, DepartmentUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutCreatedHistoriesInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    unavailabilityPeriods?: UnavailabilityCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedHistoriesInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    unavailabilityPeriods?: UnavailabilityUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedHistoriesInput, UserUncheckedCreateWithoutCreatedHistoriesInput>
  }

  export type DepartmentCreateWithoutCreatedHistoriesInput = {
    name: string
    users?: UserCreateNestedManyWithoutDepartmentInput
    history?: HistoryCreateNestedManyWithoutDepartmentInput
    Task?: TaskCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCreatedHistoriesInput = {
    departmentId?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    history?: HistoryUncheckedCreateNestedManyWithoutDepartmentInput
    Task?: TaskUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCreatedHistoriesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCreatedHistoriesInput, DepartmentUncheckedCreateWithoutCreatedHistoriesInput>
  }

  export type TaskUpsertWithoutHistoryInput = {
    update: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type TaskUpdateWithoutHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    department?: DepartmentUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutHistoryInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type DepartmentUpsertWithoutHistoryInput = {
    update: XOR<DepartmentUpdateWithoutHistoryInput, DepartmentUncheckedUpdateWithoutHistoryInput>
    create: XOR<DepartmentCreateWithoutHistoryInput, DepartmentUncheckedCreateWithoutHistoryInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutHistoryInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutHistoryInput, DepartmentUncheckedUpdateWithoutHistoryInput>
  }

  export type DepartmentUpdateWithoutHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutHistoryInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByDepartmentNestedInput
    Task?: TaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserUpsertWithoutCreatedHistoriesInput = {
    update: XOR<UserUpdateWithoutCreatedHistoriesInput, UserUncheckedUpdateWithoutCreatedHistoriesInput>
    create: XOR<UserCreateWithoutCreatedHistoriesInput, UserUncheckedCreateWithoutCreatedHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedHistoriesInput, UserUncheckedUpdateWithoutCreatedHistoriesInput>
  }

  export type UserUpdateWithoutCreatedHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedHistoriesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentUpsertWithoutCreatedHistoriesInput = {
    update: XOR<DepartmentUpdateWithoutCreatedHistoriesInput, DepartmentUncheckedUpdateWithoutCreatedHistoriesInput>
    create: XOR<DepartmentCreateWithoutCreatedHistoriesInput, DepartmentUncheckedCreateWithoutCreatedHistoriesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCreatedHistoriesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCreatedHistoriesInput, DepartmentUncheckedUpdateWithoutCreatedHistoriesInput>
  }

  export type DepartmentUpdateWithoutCreatedHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUpdateManyWithoutDepartmentNestedInput
    Task?: TaskUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCreatedHistoriesInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    history?: HistoryUncheckedUpdateManyWithoutDepartmentNestedInput
    Task?: TaskUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type ProjectCreateWithoutReportsInput = {
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutReportsInput = {
    projectId?: number
    name: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    status: $Enums.Status
    users?: ProjectUserUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutReportsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutReportsInput, ProjectUncheckedCreateWithoutReportsInput>
  }

  export type ProjectUpsertWithoutReportsInput = {
    update: XOR<ProjectUpdateWithoutReportsInput, ProjectUncheckedUpdateWithoutReportsInput>
    create: XOR<ProjectCreateWithoutReportsInput, ProjectUncheckedCreateWithoutReportsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutReportsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutReportsInput, ProjectUncheckedUpdateWithoutReportsInput>
  }

  export type ProjectUpdateWithoutReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutReportsInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: ProjectUserUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutUnavailabilityPeriodsInput = {
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
    timezone: TimeZoneCreateNestedOneWithoutUsersInput
    department: DepartmentCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
    projects?: ProjectUserCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    createdHistories?: HistoryCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutUnavailabilityPeriodsInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUserUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdHistories?: HistoryUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutUnavailabilityPeriodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnavailabilityPeriodsInput, UserUncheckedCreateWithoutUnavailabilityPeriodsInput>
  }

  export type UserUpsertWithoutUnavailabilityPeriodsInput = {
    update: XOR<UserUpdateWithoutUnavailabilityPeriodsInput, UserUncheckedUpdateWithoutUnavailabilityPeriodsInput>
    create: XOR<UserCreateWithoutUnavailabilityPeriodsInput, UserUncheckedCreateWithoutUnavailabilityPeriodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUnavailabilityPeriodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUnavailabilityPeriodsInput, UserUncheckedUpdateWithoutUnavailabilityPeriodsInput>
  }

  export type UserUpdateWithoutUnavailabilityPeriodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUnavailabilityPeriodsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateManyTimezoneInput = {
    userId?: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
  }

  export type UserUpdateWithoutTimezoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimezoneInput = {
    userId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTimezoneInput = {
    userId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyDepartmentInput = {
    userId?: number
    timezoneId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: number | null
    isAdmin?: boolean
    isActive?: boolean
  }

  export type HistoryCreateManyDepartmentInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryCreateManyCreatedByDepartmentInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    hoursSpent?: number | null
  }

  export type TaskCreateManyDepartmentInput = {
    taskId?: number
    projectId: number
    userId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
  }

  export type UserUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    roleId?: NullableIntFieldUpdateOperationsInput | number | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryUpdateWithoutDepartmentInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedHistoriesNestedInput
    createdByDepartment?: DepartmentUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutDepartmentInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutDepartmentInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUpdateWithoutCreatedByDepartmentInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
    department?: DepartmentUpdateOneWithoutHistoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutCreatedByDepartmentInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutCreatedByDepartmentInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TaskUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneWithoutTasksNestedInput
    history?: HistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutDepartmentInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    history?: HistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutDepartmentInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UnavailabilityCreateManyUserInput = {
    id?: number
    type: string
    start: Date | string
    end?: Date | string | null
    active?: boolean
  }

  export type TaskCreateManyUserInput = {
    taskId?: number
    projectId: number
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
  }

  export type HistoryCreateManyUserInput = {
    historyId?: number
    taskId: number
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type ProjectUserCreateManyUserInput = {
    projectId: number
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    type: string
    message: string
    subject: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type HistoryCreateManyCreatedByUserInput = {
    historyId?: number
    taskId: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type UnavailabilityUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnavailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    department?: DepartmentUpdateOneWithoutTaskNestedInput
    history?: HistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    history?: HistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUpdateWithoutUserInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    department?: DepartmentUpdateOneWithoutHistoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedHistoriesNestedInput
    createdByDepartment?: DepartmentUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutUserInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutUserInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProjectUserUpdateWithoutUserInput = {
    project?: ProjectUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ProjectUserUncheckedUpdateWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserUncheckedUpdateManyWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistoryUpdateWithoutCreatedByUserInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneWithoutHistoryNestedInput
    department?: DepartmentUpdateOneWithoutHistoryNestedInput
    createdByDepartment?: DepartmentUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutCreatedByUserInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutCreatedByUserInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProjectUserCreateManyProjectInput = {
    userId: number
  }

  export type TaskCreateManyProjectInput = {
    taskId?: number
    userId?: number | null
    departmentId?: number | null
    name: string
    description?: string | null
    assignmentDate?: Date | string | null
    hoursSpent?: number | null
    dueDate?: Date | string | null
    estimatedHours?: number | null
    progress?: number | null
    priority: $Enums.Priority
    status: $Enums.Status
    order?: number
  }

  export type ReportProjectCreateManyProjectInput = {
    reportId?: number
    generatedDate?: Date | string
    title?: string | null
    type?: string | null
    content?: string | null
    performanceAnalysis?: string | null
    completedTasks?: number | null
    averageTimePerTask?: number | null
    completionRate?: string | null
    teamEfficiency?: string | null
    totalTasks?: number | null
  }

  export type ProjectUserUpdateWithoutProjectInput = {
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUserUncheckedUpdateWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUserUncheckedUpdateManyWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutTasksNestedInput
    department?: DepartmentUpdateOneWithoutTaskNestedInput
    history?: HistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
    history?: HistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoursSpent?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ReportProjectUpdateWithoutProjectInput = {
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportProjectUncheckedUpdateWithoutProjectInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportProjectUncheckedUpdateManyWithoutProjectInput = {
    reportId?: IntFieldUpdateOperationsInput | number
    generatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    performanceAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    completedTasks?: NullableIntFieldUpdateOperationsInput | number | null
    averageTimePerTask?: NullableFloatFieldUpdateOperationsInput | number | null
    completionRate?: NullableStringFieldUpdateOperationsInput | string | null
    teamEfficiency?: NullableStringFieldUpdateOperationsInput | string | null
    totalTasks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryCreateManyTaskInput = {
    historyId?: number
    userId?: number | null
    departmentId?: number | null
    comment?: string | null
    createdAt?: Date | string
    createdByUserId?: number | null
    createdByDepartmentId?: number | null
    hoursSpent?: number | null
  }

  export type HistoryUpdateWithoutTaskInput = {
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutHistoryNestedInput
    department?: DepartmentUpdateOneWithoutHistoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedHistoriesNestedInput
    createdByDepartment?: DepartmentUpdateOneWithoutCreatedHistoriesNestedInput
  }

  export type HistoryUncheckedUpdateWithoutTaskInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutTaskInput = {
    historyId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdByDepartmentId?: NullableIntFieldUpdateOperationsInput | number | null
    hoursSpent?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyRoleInput = {
    userId?: number
    timezoneId: number
    departmentId: number
    name: string
    email: string
    password: string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: boolean
    isActive?: boolean
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timezone?: TimeZoneUpdateOneRequiredWithoutUsersNestedInput
    department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    unavailabilityPeriods?: UnavailabilityUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    unavailabilityPeriods?: UnavailabilityUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUserUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdHistories?: HistoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    timezoneId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    workingHours?: NullableJsonNullValueInput | InputJsonValue
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
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