import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AgeRating = {
  __typename?: 'AgeRating';
  category?: Maybe<AgeRatingCategory>;
  checksum?: Maybe<Scalars['String']>;
  content_descriptions?: Maybe<Array<AgeRatingContentDescription>>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<AgeRatingRating>;
  rating_cover_url?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
};

/** Age Rating Category */
export enum AgeRatingCategory {
  Acb = 'ACB',
  AgeratingCategoryNull = 'AGERATING_CATEGORY_NULL',
  Cero = 'CERO',
  ClassInd = 'CLASS_IND',
  Esrb = 'ESRB',
  Grac = 'GRAC',
  Null8 = 'NULL8',
  Null9 = 'NULL9',
  Null10 = 'NULL10',
  Null11 = 'NULL11',
  Null12 = 'NULL12',
  Null13 = 'NULL13',
  Null14 = 'NULL14',
  Null15 = 'NULL15',
  Null16 = 'NULL16',
  Null17 = 'NULL17',
  Null18 = 'NULL18',
  Null19 = 'NULL19',
  Null20 = 'NULL20',
  Null21 = 'NULL21',
  Null22 = 'NULL22',
  Null23 = 'NULL23',
  Null24 = 'NULL24',
  Null25 = 'NULL25',
  Null26 = 'NULL26',
  Null27 = 'NULL27',
  Null28 = 'NULL28',
  Null29 = 'NULL29',
  Null30 = 'NULL30',
  Pegi = 'PEGI',
  Usk = 'USK',
}

export type AgeRatingContentDescription = {
  __typename?: 'AgeRatingContentDescription';
  category?: Maybe<AgeRatingRating>;
  checksum?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** Age Rating Rating */
export enum AgeRatingRating {
  AcbG = 'ACB_G',
  AcbM = 'ACB_M',
  AcbMa15 = 'ACB_MA15',
  AcbPg = 'ACB_PG',
  AcbR18 = 'ACB_R18',
  AcbRc = 'ACB_RC',
  AgeratingRatingNull = 'AGERATING_RATING_NULL',
  Ao = 'AO',
  CeroA = 'CERO_A',
  CeroB = 'CERO_B',
  CeroC = 'CERO_C',
  CeroD = 'CERO_D',
  CeroZ = 'CERO_Z',
  ClassIndEighteen = 'CLASS_IND_EIGHTEEN',
  ClassIndFourteen = 'CLASS_IND_FOURTEEN',
  ClassIndL = 'CLASS_IND_L',
  ClassIndSixteen = 'CLASS_IND_SIXTEEN',
  ClassIndTen = 'CLASS_IND_TEN',
  ClassIndTwelve = 'CLASS_IND_TWELVE',
  E = 'E',
  E10 = 'E10',
  Ec = 'EC',
  Eighteen = 'EIGHTEEN',
  GracAll = 'GRAC_ALL',
  GracEighteen = 'GRAC_EIGHTEEN',
  GracFifteen = 'GRAC_FIFTEEN',
  GracTesting = 'GRAC_TESTING',
  GracTwelve = 'GRAC_TWELVE',
  M = 'M',
  Null39 = 'NULL39',
  Null40 = 'NULL40',
  Null41 = 'NULL41',
  Null42 = 'NULL42',
  Null43 = 'NULL43',
  Null44 = 'NULL44',
  Null45 = 'NULL45',
  Null46 = 'NULL46',
  Null47 = 'NULL47',
  Null48 = 'NULL48',
  Null49 = 'NULL49',
  Null50 = 'NULL50',
  Null51 = 'NULL51',
  Null52 = 'NULL52',
  Null53 = 'NULL53',
  Null54 = 'NULL54',
  Null55 = 'NULL55',
  Null56 = 'NULL56',
  Null57 = 'NULL57',
  Null58 = 'NULL58',
  Null59 = 'NULL59',
  Null60 = 'NULL60',
  Null61 = 'NULL61',
  Null62 = 'NULL62',
  Null63 = 'NULL63',
  Null64 = 'NULL64',
  Null65 = 'NULL65',
  Null66 = 'NULL66',
  Null67 = 'NULL67',
  Null68 = 'NULL68',
  Null69 = 'NULL69',
  Null70 = 'NULL70',
  Null71 = 'NULL71',
  Null72 = 'NULL72',
  Null73 = 'NULL73',
  Null74 = 'NULL74',
  Null75 = 'NULL75',
  Null76 = 'NULL76',
  Null77 = 'NULL77',
  Null78 = 'NULL78',
  Null79 = 'NULL79',
  Null80 = 'NULL80',
  Null81 = 'NULL81',
  Null82 = 'NULL82',
  Null83 = 'NULL83',
  Null84 = 'NULL84',
  Null85 = 'NULL85',
  Null86 = 'NULL86',
  Null87 = 'NULL87',
  Null88 = 'NULL88',
  Null89 = 'NULL89',
  Null90 = 'NULL90',
  Null91 = 'NULL91',
  Null92 = 'NULL92',
  Null93 = 'NULL93',
  Null94 = 'NULL94',
  Null95 = 'NULL95',
  Null96 = 'NULL96',
  Null97 = 'NULL97',
  Null98 = 'NULL98',
  Null99 = 'NULL99',
  Null100 = 'NULL100',
  Rp = 'RP',
  Seven = 'SEVEN',
  Sixteen = 'SIXTEEN',
  T = 'T',
  Three = 'THREE',
  Twelve = 'TWELVE',
  Usk_0 = 'USK_0',
  Usk_6 = 'USK_6',
  Usk_12 = 'USK_12',
  Usk_18 = 'USK_18',
}

export type AlternativeName = {
  __typename?: 'AlternativeName';
  checksum?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Artwork = {
  __typename?: 'Artwork';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ArtworkUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

export type Collection = {
  __typename?: 'Collection';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  games?: Maybe<Array<Game>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  change_date?: Maybe<Scalars['Int']>;
  change_date_category?: Maybe<DateFormatChangeDateCategory>;
  changed_company_id?: Maybe<Company>;
  checksum?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  developed?: Maybe<Array<Game>>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<CompanyLogo>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Company>;
  published?: Maybe<Array<Game>>;
  slug?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
  start_date_category?: Maybe<DateFormatChangeDateCategory>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  websites?: Maybe<Array<CompanyWebsite>>;
};

export type CompanyLogo = {
  __typename?: 'CompanyLogo';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type CompanyLogoUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

export type CompanyWebsite = {
  __typename?: 'CompanyWebsite';
  category?: Maybe<WebsiteCategory>;
  checksum?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  trusted?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
};

export type Cover = {
  __typename?: 'Cover';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type CoverUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

/** Date Format Change Date Category */
export enum DateFormatChangeDateCategory {
  Tbd = 'TBD',
  Yyyy = 'YYYY',
  Yyyymmmm = 'YYYYMMMM',
  Yyyymmmmdd = 'YYYYMMMMDD',
  Yyyyq1 = 'YYYYQ1',
  Yyyyq2 = 'YYYYQ2',
  Yyyyq3 = 'YYYYQ3',
  Yyyyq4 = 'YYYYQ4',
}

export type ExternalGame = {
  __typename?: 'ExternalGame';
  category?: Maybe<ExternalGameCategory>;
  checksum?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Scalars['Int']>>;
  created_at?: Maybe<Scalars['Int']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  media?: Maybe<ExternalGameMedia>;
  name?: Maybe<Scalars['String']>;
  platform?: Maybe<Platform>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** External Game Category */
export enum ExternalGameCategory {
  ExternalgameAmazonAdg = 'EXTERNALGAME_AMAZON_ADG',
  ExternalgameAmazonAsin = 'EXTERNALGAME_AMAZON_ASIN',
  ExternalgameAmazonLuna = 'EXTERNALGAME_AMAZON_LUNA',
  ExternalgameAndroid = 'EXTERNALGAME_ANDROID',
  ExternalgameApple = 'EXTERNALGAME_APPLE',
  ExternalgameCategoryNull = 'EXTERNALGAME_CATEGORY_NULL',
  ExternalgameCategoryUndefined2 = 'EXTERNALGAME_CATEGORY_UNDEFINED2',
  ExternalgameCategoryUndefined3 = 'EXTERNALGAME_CATEGORY_UNDEFINED3',
  ExternalgameCategoryUndefined4 = 'EXTERNALGAME_CATEGORY_UNDEFINED4',
  ExternalgameCategoryUndefined6 = 'EXTERNALGAME_CATEGORY_UNDEFINED6',
  ExternalgameCategoryUndefined7 = 'EXTERNALGAME_CATEGORY_UNDEFINED7',
  ExternalgameCategoryUndefined8 = 'EXTERNALGAME_CATEGORY_UNDEFINED8',
  ExternalgameCategoryUndefined9 = 'EXTERNALGAME_CATEGORY_UNDEFINED9',
  ExternalgameCategoryUndefined12 = 'EXTERNALGAME_CATEGORY_UNDEFINED12',
  ExternalgameCategoryUndefined16 = 'EXTERNALGAME_CATEGORY_UNDEFINED16',
  ExternalgameCategoryUndefined17 = 'EXTERNALGAME_CATEGORY_UNDEFINED17',
  ExternalgameCategoryUndefined18 = 'EXTERNALGAME_CATEGORY_UNDEFINED18',
  ExternalgameCategoryUndefined19 = 'EXTERNALGAME_CATEGORY_UNDEFINED19',
  ExternalgameCategoryUndefined21 = 'EXTERNALGAME_CATEGORY_UNDEFINED21',
  ExternalgameCategoryUndefined24 = 'EXTERNALGAME_CATEGORY_UNDEFINED24',
  ExternalgameCategoryUndefined25 = 'EXTERNALGAME_CATEGORY_UNDEFINED25',
  ExternalgameCategoryUndefined27 = 'EXTERNALGAME_CATEGORY_UNDEFINED27',
  ExternalgameCategoryUndefined29 = 'EXTERNALGAME_CATEGORY_UNDEFINED29',
  ExternalgameCategoryUndefined30 = 'EXTERNALGAME_CATEGORY_UNDEFINED30',
  ExternalgameEpicGameStore = 'EXTERNALGAME_EPIC_GAME_STORE',
  ExternalgameGog = 'EXTERNALGAME_GOG',
  ExternalgameMicrosoft = 'EXTERNALGAME_MICROSOFT',
  ExternalgameOculus = 'EXTERNALGAME_OCULUS',
  ExternalgameSteam = 'EXTERNALGAME_STEAM',
  ExternalgameTwitch = 'EXTERNALGAME_TWITCH',
  ExternalgameYoutube = 'EXTERNALGAME_YOUTUBE',
}

/** External Game Media */
export enum ExternalGameMedia {
  ExternalgameDigital = 'EXTERNALGAME_DIGITAL',
  ExternalgameMediaNull = 'EXTERNALGAME_MEDIA_NULL',
  ExternalgamePhysical = 'EXTERNALGAME_PHYSICAL',
}

export type FloatFilter = {
  contains?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Franchise = {
  __typename?: 'Franchise';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  games?: Maybe<Array<Game>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Game = {
  __typename?: 'Game';
  age_ratings?: Maybe<Array<AgeRating>>;
  aggregated_rating?: Maybe<Scalars['Float']>;
  aggregated_rating_count?: Maybe<Scalars['Int']>;
  alternative_names?: Maybe<Array<AlternativeName>>;
  artworks?: Maybe<Array<Artwork>>;
  bundles?: Maybe<Array<Game>>;
  category?: Maybe<GameCategory>;
  checksum?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  cover?: Maybe<Cover>;
  created_at?: Maybe<Scalars['Int']>;
  dlcs?: Maybe<Array<Game>>;
  expanded_games?: Maybe<Array<Game>>;
  expansions?: Maybe<Array<Game>>;
  external_games?: Maybe<Array<ExternalGame>>;
  first_release_date?: Maybe<Scalars['Int']>;
  follows?: Maybe<Scalars['Int']>;
  forks?: Maybe<Array<Game>>;
  franchise?: Maybe<Franchise>;
  franchises?: Maybe<Array<Franchise>>;
  game_engines?: Maybe<Array<GameEngine>>;
  game_modes?: Maybe<Array<GameMode>>;
  genres?: Maybe<Array<Genre>>;
  hypes?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  involved_companies?: Maybe<Array<InvolvedCompany>>;
  keywords?: Maybe<Array<Keyword>>;
  multiplayer_modes?: Maybe<Array<MultiplayerMode>>;
  name?: Maybe<Scalars['String']>;
  parent_game?: Maybe<Game>;
  platforms?: Maybe<Array<Platform>>;
  player_perspectives?: Maybe<Array<PlayerPerspective>>;
  ports?: Maybe<Array<Game>>;
  rating?: Maybe<Scalars['Float']>;
  rating_count?: Maybe<Scalars['Int']>;
  release_dates?: Maybe<Array<ReleaseDate>>;
  remakes?: Maybe<Array<Game>>;
  remasters?: Maybe<Array<Game>>;
  screenshots?: Maybe<Array<Screenshot>>;
  similar_games?: Maybe<Array<Game>>;
  slug?: Maybe<Scalars['String']>;
  standalone_expansions?: Maybe<Array<Game>>;
  status?: Maybe<GameStatus>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['Int']>>;
  themes?: Maybe<Array<Theme>>;
  total_rating?: Maybe<Scalars['Float']>;
  total_rating_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  version_parent?: Maybe<Game>;
  version_title?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<GameVideo>>;
  websites?: Maybe<Array<Website>>;
};

/** Game Category */
export enum GameCategory {
  Bundle = 'BUNDLE',
  DlcAddon = 'DLC_ADDON',
  Episode = 'EPISODE',
  ExpandedGame = 'EXPANDED_GAME',
  Expansion = 'EXPANSION',
  Fork = 'FORK',
  MainGame = 'MAIN_GAME',
  Mod = 'MOD',
  Port = 'PORT',
  Remake = 'REMAKE',
  Remaster = 'REMASTER',
  Season = 'SEASON',
  StandaloneExpansion = 'STANDALONE_EXPANSION',
}

export type GameEngine = {
  __typename?: 'GameEngine';
  checksum?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<Company>>;
  created_at?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<GameEngineLogo>;
  name?: Maybe<Scalars['String']>;
  platforms?: Maybe<Array<Platform>>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type GameEngineLogo = {
  __typename?: 'GameEngineLogo';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type GameEngineLogoUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

export type GameMode = {
  __typename?: 'GameMode';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** Game Status */
export enum GameStatus {
  Alpha = 'ALPHA',
  Beta = 'BETA',
  Cancelled = 'CANCELLED',
  Delisted = 'DELISTED',
  EarlyAccess = 'EARLY_ACCESS',
  Offline = 'OFFLINE',
  Released = 'RELEASED',
  Rumored = 'RUMORED',
}

export type GameVideo = {
  __typename?: 'GameVideo';
  checksum?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  video_id?: Maybe<Scalars['String']>;
};

export type GamesSortInput = {
  aggregated_rating?: InputMaybe<SortOrder>;
  aggregated_rating_count?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  checksum?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  first_release_date?: InputMaybe<SortOrder>;
  follows?: InputMaybe<SortOrder>;
  hypes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  rating_count?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  storyline?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  total_rating?: InputMaybe<SortOrder>;
  total_rating_count?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  version_title?: InputMaybe<SortOrder>;
};

export type GamesWhereInput = {
  AND?: InputMaybe<Array<GamesWhereInput>>;
  OR?: InputMaybe<Array<GamesWhereInput>>;
  aggregated_rating?: InputMaybe<FloatFilter>;
  aggregated_rating_count?: InputMaybe<IntFilter>;
  category?: InputMaybe<GameCategory>;
  checksum?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<IntFilter>;
  first_release_date?: InputMaybe<IntFilter>;
  follows?: InputMaybe<IntFilter>;
  hypes?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  rating_count?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  storyline?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  tags?: InputMaybe<IntFilter>;
  total_rating?: InputMaybe<FloatFilter>;
  total_rating_count?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringFilter>;
  version_title?: InputMaybe<StringFilter>;
};

export type Genre = {
  __typename?: 'Genre';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** Image Type */
export enum ImageTypeEnum {
  FullHd = 'FullHD',
  Hd = 'HD',
  CoverBig = 'cover_big',
  CoverSmall = 'cover_small',
  LogoMed = 'logo_med',
  Micro = 'micro',
  ScreenshotBig = 'screenshot_big',
  ScreenshotHuge = 'screenshot_huge',
  ScreenshotMed = 'screenshot_med',
  Thumb = 'thumb',
}

export type IntFilter = {
  contains?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type InvolvedCompany = {
  __typename?: 'InvolvedCompany';
  checksum?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['Int']>;
  developer?: Maybe<Scalars['Boolean']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  porting?: Maybe<Scalars['Boolean']>;
  publisher?: Maybe<Scalars['Boolean']>;
  supporting?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type MultiplayerMode = {
  __typename?: 'MultiplayerMode';
  campaigncoop?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  dropin?: Maybe<Scalars['Boolean']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  lancoop?: Maybe<Scalars['Boolean']>;
  offlinecoop?: Maybe<Scalars['Boolean']>;
  offlinecoopmax?: Maybe<Scalars['Int']>;
  offlinemax?: Maybe<Scalars['Int']>;
  onlinecoop?: Maybe<Scalars['Boolean']>;
  onlinecoopmax?: Maybe<Scalars['Int']>;
  onlinemax?: Maybe<Scalars['Int']>;
  platform?: Maybe<Platform>;
  splitscreen?: Maybe<Scalars['Boolean']>;
  splitscreenonline?: Maybe<Scalars['Boolean']>;
};

export type Platform = {
  __typename?: 'Platform';
  abbreviation?: Maybe<Scalars['String']>;
  alternative_name?: Maybe<Scalars['String']>;
  category?: Maybe<PlatformCategory>;
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platform_family?: Maybe<PlatformFamily>;
  platform_logo?: Maybe<PlatformLogo>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  versions?: Maybe<Array<PlatformVersion>>;
  websites?: Maybe<Array<PlatformWebsite>>;
};

/** Platform Category */
export enum PlatformCategory {
  Arcade = 'ARCADE',
  Computer = 'COMPUTER',
  Console = 'CONSOLE',
  OperatingSystem = 'OPERATING_SYSTEM',
  Platform = 'PLATFORM',
  PlatformCategoryNull = 'PLATFORM_CATEGORY_NULL',
  PortableConsole = 'PORTABLE_CONSOLE',
}

export type PlatformFamily = {
  __typename?: 'PlatformFamily';
  checksum?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PlatformLogo = {
  __typename?: 'PlatformLogo';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type PlatformLogoUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

export type PlatformVersion = {
  __typename?: 'PlatformVersion';
  checksum?: Maybe<Scalars['String']>;
  companies?: Maybe<Array<PlatformVersionCompany>>;
  connectivity?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['String']>;
  graphics?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  main_manufacturer?: Maybe<PlatformVersionCompany>;
  media?: Maybe<Scalars['String']>;
  memory?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  platform_logo?: Maybe<PlatformLogo>;
  platform_version_release_dates?: Maybe<Array<PlatformVersionReleaseDate>>;
  resolutions?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sound?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PlatformVersionCompany = {
  __typename?: 'PlatformVersionCompany';
  checksum?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  developer?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['Boolean']>;
};

export type PlatformVersionReleaseDate = {
  __typename?: 'PlatformVersionReleaseDate';
  category?: Maybe<DateFormatChangeDateCategory>;
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  human?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  m?: Maybe<Scalars['Int']>;
  platform_version?: Maybe<Array<PlatformVersion>>;
  region?: Maybe<RegionRegion>;
  updated_at?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type PlatformWebsite = {
  __typename?: 'PlatformWebsite';
  category?: Maybe<WebsiteCategory>;
  checksum?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  trusted?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
};

export type PlayerPerspective = {
  __typename?: 'PlayerPerspective';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ageRatingContentDescriptions?: Maybe<Array<AgeRatingContentDescription>>;
  ageRatings?: Maybe<Array<AgeRating>>;
  alternativeNames?: Maybe<Array<AlternativeName>>;
  artworks?: Maybe<Array<Artwork>>;
  collections?: Maybe<Array<Collection>>;
  companies?: Maybe<Array<Company>>;
  companyLogos?: Maybe<Array<CompanyLogo>>;
  companyWebsites?: Maybe<Array<CompanyWebsite>>;
  covers?: Maybe<Array<Cover>>;
  externalGames?: Maybe<Array<ExternalGame>>;
  franchises?: Maybe<Array<Franchise>>;
  gameEngines?: Maybe<Array<GameEngine>>;
  gameEnginesLogos?: Maybe<Array<GameEngineLogo>>;
  gameModes?: Maybe<Array<GameMode>>;
  gameVideos?: Maybe<Array<GameVideo>>;
  games?: Maybe<Array<Game>>;
  genres?: Maybe<Array<Genre>>;
  involvedCompanies?: Maybe<Array<InvolvedCompany>>;
  keywords?: Maybe<Array<Keyword>>;
  multiplayerModes?: Maybe<Array<MultiplayerMode>>;
  platformFamilies?: Maybe<Array<PlatformFamily>>;
  platformLogos?: Maybe<Array<PlatformLogo>>;
  platformVersionCompanies?: Maybe<Array<PlatformVersionCompany>>;
  platformVersionReleaseDates?: Maybe<Array<PlatformVersionReleaseDate>>;
  platformVersions?: Maybe<Array<PlatformVersion>>;
  platformWebsites?: Maybe<Array<PlatformWebsite>>;
  platforms?: Maybe<Array<Platform>>;
  playerPerspectives?: Maybe<Array<PlayerPerspective>>;
  releaseDates?: Maybe<Array<ReleaseDate>>;
  screenshots?: Maybe<Array<Screenshot>>;
  themes?: Maybe<Array<Theme>>;
  websites?: Maybe<Array<Website>>;
};

export type QueryGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GamesSortInput>;
  where?: InputMaybe<GamesWhereInput>;
};

/** Region Region */
export enum RegionRegion {
  Asia = 'ASIA',
  Australia = 'AUSTRALIA',
  Brazil = 'BRAZIL',
  China = 'CHINA',
  Europe = 'EUROPE',
  Japan = 'JAPAN',
  Korea = 'KOREA',
  NewZealand = 'NEW_ZEALAND',
  NorthAmerica = 'NORTH_AMERICA',
  RegionRegionNull = 'REGION_REGION_NULL',
  Worldwide = 'WORLDWIDE',
}

export type ReleaseDate = {
  __typename?: 'ReleaseDate';
  category?: Maybe<DateFormatChangeDateCategory>;
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  game?: Maybe<Game>;
  human?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  m?: Maybe<Scalars['Int']>;
  platform?: Maybe<Platform>;
  region?: Maybe<RegionRegion>;
  updated_at?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type Screenshot = {
  __typename?: 'Screenshot';
  alpha_channel?: Maybe<Scalars['Boolean']>;
  animated?: Maybe<Scalars['Boolean']>;
  checksum?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ScreenshotUrlArgs = {
  imageType?: InputMaybe<ImageTypeEnum>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Theme = {
  __typename?: 'Theme';
  checksum?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Website = {
  __typename?: 'Website';
  category?: Maybe<WebsiteCategory>;
  checksum?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  id?: Maybe<Scalars['Int']>;
  trusted?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
};

/** Website Category */
export enum WebsiteCategory {
  WebsiteAndroid = 'WEBSITE_ANDROID',
  WebsiteCategoryNull = 'WEBSITE_CATEGORY_NULL',
  WebsiteDiscord = 'WEBSITE_DISCORD',
  WebsiteEpicgames = 'WEBSITE_EPICGAMES',
  WebsiteFacebook = 'WEBSITE_FACEBOOK',
  WebsiteGog = 'WEBSITE_GOG',
  WebsiteInstagram = 'WEBSITE_INSTAGRAM',
  WebsiteIpad = 'WEBSITE_IPAD',
  WebsiteIphone = 'WEBSITE_IPHONE',
  WebsiteItch = 'WEBSITE_ITCH',
  WebsiteOfficial = 'WEBSITE_OFFICIAL',
  WebsiteReddit = 'WEBSITE_REDDIT',
  WebsiteSteam = 'WEBSITE_STEAM',
  WebsiteTwitch = 'WEBSITE_TWITCH',
  WebsiteTwitter = 'WEBSITE_TWITTER',
  WebsiteWikia = 'WEBSITE_WIKIA',
  WebsiteWikipedia = 'WEBSITE_WIKIPEDIA',
  WebsiteYoutube = 'WEBSITE_YOUTUBE',
}

export type ArtworkFragment = {
  __typename?: 'Artwork';
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

export type CoverFragment = {
  __typename?: 'Cover';
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

export type GameFragment = {
  __typename?: 'Game';
  id?: number | null;
  aggregated_rating?: number | null;
  aggregated_rating_count?: number | null;
  category?: GameCategory | null;
  created_at?: number | null;
  first_release_date?: number | null;
  follows?: number | null;
  hypes?: number | null;
  name?: string | null;
  rating?: number | null;
  rating_count?: number | null;
  slug?: string | null;
  status?: GameStatus | null;
  storyline?: string | null;
  summary?: string | null;
  tags?: Array<number> | null;
  total_rating?: number | null;
  total_rating_count?: number | null;
  updated_at?: number | null;
  url?: string | null;
  version_title?: string | null;
  checksum?: string | null;
};

export type PlatformFragment = {__typename?: 'Platform'; name?: string | null};

export type PlatformLogoFragment = {
  __typename?: 'PlatformLogo';
  url?: string | null;
  height?: number | null;
  width?: number | null;
};

export type ScreenshotFragment = {
  __typename?: 'Screenshot';
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

export type GamesQueryVariables = Exact<{
  where?: InputMaybe<GamesWhereInput>;
  sort?: InputMaybe<GamesSortInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  imageType?: InputMaybe<ImageTypeEnum>;
  platformLogo?: InputMaybe<ImageTypeEnum>;
}>;

export type GamesQuery = {
  __typename?: 'Query';
  games?: Array<{
    __typename?: 'Game';
    id?: number | null;
    aggregated_rating?: number | null;
    aggregated_rating_count?: number | null;
    category?: GameCategory | null;
    created_at?: number | null;
    first_release_date?: number | null;
    follows?: number | null;
    hypes?: number | null;
    name?: string | null;
    rating?: number | null;
    rating_count?: number | null;
    slug?: string | null;
    status?: GameStatus | null;
    storyline?: string | null;
    summary?: string | null;
    tags?: Array<number> | null;
    total_rating?: number | null;
    total_rating_count?: number | null;
    updated_at?: number | null;
    url?: string | null;
    version_title?: string | null;
    checksum?: string | null;
    screenshots?: Array<{
      __typename?: 'Screenshot';
      url?: string | null;
      width?: number | null;
      height?: number | null;
    }> | null;
    artworks?: Array<{
      __typename?: 'Artwork';
      url?: string | null;
      width?: number | null;
      height?: number | null;
    }> | null;
    cover?: {
      __typename?: 'Cover';
      url?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
    platforms?: Array<{
      __typename?: 'Platform';
      name?: string | null;
      platform_logo?: {
        __typename?: 'PlatformLogo';
        url?: string | null;
        height?: number | null;
        width?: number | null;
      } | null;
    }> | null;
  }> | null;
};

export const ArtworkFragmentDoc = gql`
  fragment Artwork on Artwork {
    url(imageType: $imageType)
    width
    height
  }
`;
export const CoverFragmentDoc = gql`
  fragment Cover on Cover {
    url(imageType: $imageType)
    width
    height
  }
`;
export const GameFragmentDoc = gql`
  fragment Game on Game {
    id
    aggregated_rating
    aggregated_rating_count
    category
    created_at
    first_release_date
    follows
    hypes
    name
    rating
    rating_count
    slug
    status
    storyline
    summary
    tags
    total_rating
    total_rating_count
    updated_at
    url
    version_title
    checksum
  }
`;
export const PlatformFragmentDoc = gql`
  fragment Platform on Platform {
    name
  }
`;
export const PlatformLogoFragmentDoc = gql`
  fragment PlatformLogo on PlatformLogo {
    url(imageType: $platformLogo)
    height
    width
  }
`;
export const ScreenshotFragmentDoc = gql`
  fragment Screenshot on Screenshot {
    url(imageType: $imageType)
    width
    height
  }
`;
export const GamesDocument = gql`
  query Games(
    $where: GamesWhereInput
    $sort: GamesSortInput
    $limit: Int
    $offset: Int
    $imageType: ImageTypeEnum
    $platformLogo: ImageTypeEnum
  ) {
    games(where: $where, sort: $sort, limit: $limit, offset: $offset) {
      ...Game
      screenshots {
        ...Screenshot
      }
      artworks {
        ...Artwork
      }
      cover {
        ...Cover
      }
      platforms {
        ...Platform
        platform_logo {
          ...PlatformLogo
        }
      }
    }
  }
  ${GameFragmentDoc}
  ${ScreenshotFragmentDoc}
  ${ArtworkFragmentDoc}
  ${CoverFragmentDoc}
  ${PlatformFragmentDoc}
  ${PlatformLogoFragmentDoc}
`;

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      imageType: // value for 'imageType'
 *      platformLogo: // value for 'platformLogo'
 *   },
 * });
 */
export function useGamesQuery(
  baseOptions?: Apollo.QueryHookOptions<GamesQuery, GamesQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GamesQuery, GamesQueryVariables>(
    GamesDocument,
    options,
  );
}
export function useGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GamesQuery, GamesQueryVariables>(
    GamesDocument,
    options,
  );
}
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesQueryResult = Apollo.QueryResult<
  GamesQuery,
  GamesQueryVariables
>;
