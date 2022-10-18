
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Api_keyScalarFieldEnum = makeEnum({
  api_key: 'api_key'
});

exports.Prisma.Leaderboard_rowScalarFieldEnum = makeEnum({
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
});

exports.Prisma.MatchScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Match_pendingScalarFieldEnum = makeEnum({
  profile_id: 'profile_id',
  priority: 'priority'
});

exports.Prisma.Match_rawScalarFieldEnum = makeEnum({
  match_id: 'match_id',
  json: 'json',
  version: 'version',
  error: 'error'
});

exports.Prisma.PlayerScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  profile_id: 'profile_id',
  steam_id: 'steam_id',
  name: 'name',
  clan: 'clan',
  last_match_time: 'last_match_time',
  country: 'country',
  avatarhash: 'avatarhash',
  last_match_fetched_time: 'last_match_fetched_time',
  last_refresh: 'last_refresh'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RatingScalarFieldEnum = makeEnum({
  profile_id: 'profile_id',
  games: 'games',
  rating: 'rating',
  date: 'date',
  leaderboard_id: 'leaderboard_id',
  rating_diff: 'rating_diff'
});

exports.Prisma.SettingScalarFieldEnum = makeEnum({
  component: 'component',
  key: 'key',
  value: 'value'
});

exports.Prisma.Smaller_matchScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Smaller_playerScalarFieldEnum = makeEnum({
  match_id: 'match_id',
  profile_id: 'profile_id',
  slot: 'slot',
  civ: 'civ',
  team: 'team',
  color: 'color',
  won: 'won'
});

exports.Prisma.Smaller_profileScalarFieldEnum = makeEnum({
  profile_id: 'profile_id',
  steam_id: 'steam_id',
  name: 'name',
  clan: 'clan',
  last_match_time: 'last_match_time',
  country: 'country',
  avatarhash: 'avatarhash',
  last_match_fetched_time: 'last_match_fetched_time'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
