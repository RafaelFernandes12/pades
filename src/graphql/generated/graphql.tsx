import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  complement?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  neighborhood: Scalars['String']['output'];
  persons: Person;
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  street_number: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  zipcode: Scalars['String']['output'];
};

export type AssinaturaInput = {
  algoritmoHash: Scalars['String']['input'];
  hashes: Array<Scalars['String']['input']>;
  nonce: Scalars['String']['input'];
};

export type AssinaturasInicializadasType = {
  __typename?: 'AssinaturasInicializadasType';
  messageDigest: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
};

export type AssinaturasType = {
  __typename?: 'AssinaturasType';
  algoritmoHash: Scalars['String']['output'];
  hashes: Array<Scalars['String']['output']>;
  nonce: Scalars['String']['output'];
};

export type Bonus = {
  __typename?: 'Bonus';
  bonusCredit: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entity: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  limitBonusCredit?: Maybe<Scalars['Float']['output']>;
  products?: Maybe<Product>;
  quantity: Scalars['Float']['output'];
  recommend: Scalars['Boolean']['output'];
  score: Scalars['Float']['output'];
};

export type BrysignInitResponse = {
  __typename?: 'BrysignInitResponse';
  algoritmoHash: Scalars['String']['output'];
  assinaturas?: Maybe<Array<AssinaturasType>>;
  assinaturasInicializadas?: Maybe<Array<AssinaturasInicializadasType>>;
  formatoDadosEntrada: Scalars['String']['output'];
  formatoDadosSaida: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
};

export type BrysignSignPdfPadesInput = {
  assinaturas: Array<AssinaturaInput>;
  certsInfo: Array<DownloadCerts>;
  formatoDadosEntrada: Scalars['String']['input'];
  formatoDadosSaida: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
};

export type BrysignSignatureCadesInput = {
  music_ids: Array<Scalars['Int']['input']>;
};

export type Categories = {
  __typename?: 'Categories';
  contacts: Array<Contact>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  files: Array<File>;
  id: Scalars['ID']['output'];
  musical_genres: Array<VideoGenre>;
  musical_styles: Array<MusicalStyle>;
  name: Scalars['String']['output'];
  table_name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  certificate_file_id?: Maybe<Scalars['Float']['output']>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  documentId?: Maybe<Scalars['Float']['output']>;
  documentKey: Scalars['String']['output'];
  files?: Maybe<File>;
  hashSHA256?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  music?: Maybe<Music>;
  signUrl?: Maybe<Scalars['String']['output']>;
  signed: Scalars['Boolean']['output'];
  signerId?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type CertsInfo = {
  __typename?: 'CertsInfo';
  musicId: Scalars['Int']['output'];
  nonce: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ChargeOrder = {
  items: Array<Items>;
};

export type Comment = {
  __typename?: 'Comment';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  entity: Scalars['String']['output'];
  entity_id: Scalars['Float']['output'];
  hide: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users: User;
};

export type Contact = {
  __typename?: 'Contact';
  categories?: Maybe<Categories>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  persons: Person;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateChargeInput = {
  api_payment?: InputMaybe<Scalars['String']['input']>;
  creditCard?: InputMaybe<Scalars['JSON']['input']>;
  holder?: InputMaybe<Scalars['Boolean']['input']>;
  installments?: InputMaybe<Scalars['Float']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  order: ChargeOrder;
  payment_method: Scalars['String']['input'];
  voucherId?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateChargeResponseDto = {
  __typename?: 'CreateChargeResponseDto';
  charge: Scalars['JSON']['output'];
  created_at?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  meta?: Maybe<Meta>;
  payment?: Maybe<PaymentOutput>;
  status_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['String']['output']>;
  voucher_id?: Maybe<Scalars['Float']['output']>;
};

export type CreateInitPadesInput = {
  certificate: Scalars['String']['input'];
  musicIds: Array<Scalars['Int']['input']>;
};

export type CreateMusicInput = {
  CPF_author: Scalars['String']['input'];
  certificateType: Scalars['String']['input'];
  co_author?: InputMaybe<Scalars['JSON']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  interpreter?: InputMaybe<Scalars['JSON']['input']>;
  letter: Scalars['JSON']['input'];
  musicFolder?: InputMaybe<Scalars['String']['input']>;
  music_file_id?: InputMaybe<Scalars['Int']['input']>;
  myAuthor: Scalars['Boolean']['input'];
  name_author: Scalars['String']['input'];
  styles: Array<Scalars['Int']['input']>;
  terms: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  brand?: Maybe<Scalars['String']['output']>;
  card_id?: Maybe<Scalars['String']['output']>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  expiration_date?: Maybe<Scalars['String']['output']>;
  holder_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type DocumentosType = {
  __typename?: 'DocumentosType';
  hash: Scalars['String']['output'];
  links: Array<LinkType>;
  nomeArquivo: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
};

export type DownloadCerts = {
  musicId: Scalars['Float']['input'];
  nonce: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  categories?: Maybe<Categories>;
  certificates?: Maybe<Certificate>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  disk?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  music: Array<Music>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users: Array<User>;
  videos: Array<Video>;
};

export type FindManyMusicInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type GenericEnum = {
  __typename?: 'GenericEnum';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  message: Array<Message>;
  music: Array<Music>;
  name: Scalars['String']['output'];
  nfe: Array<Nfe>;
  orders: Array<Order>;
  payments_payments_payment_method_idTogeneric_enums: Array<Payment>;
  payments_payments_status_idTogeneric_enums: Array<Payment>;
  persons: Array<Person>;
  transactions: Array<Transaction>;
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};

export type GetPixChargeDto = {
  __typename?: 'GetPixChargeDto';
  calendario: Scalars['JSON']['output'];
  chave: Scalars['String']['output'];
  devedor?: Maybe<Scalars['JSON']['output']>;
  infoAdicionais?: Maybe<Array<Scalars['JSON']['output']>>;
  loc?: Maybe<Scalars['JSON']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  pix?: Maybe<Array<Scalars['JSON']['output']>>;
  pixCopiaECola?: Maybe<Scalars['String']['output']>;
  revisao: Scalars['Float']['output'];
  solicitacaoPagador?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  txid: Scalars['String']['output'];
  valor: Scalars['JSON']['output'];
};

export type GetSicrediTokenResponseDto = {
  __typename?: 'GetSicrediTokenResponseDto';
  access_token: Scalars['String']['output'];
  expires_in: Scalars['Float']['output'];
  jti: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  token_type: Scalars['String']['output'];
};

export type InitPdfResponse = {
  __typename?: 'InitPdfResponse';
  certsInfo: Array<CertsInfo>;
  data: BrysignInitResponse;
};

export type Invitation = {
  __typename?: 'Invitation';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  key_friend: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
  validated: Scalars['Boolean']['output'];
};

export type Items = {
  product_id: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
};

export type LinkType = {
  __typename?: 'LinkType';
  href: Scalars['String']['output'];
  rel: Scalars['String']['output'];
};

export type Message = {
  __typename?: 'Message';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  generic_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  is_active: Scalars['Boolean']['output'];
  messagem_body?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  type_message_id?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  bonusCredit: Scalars['Float']['output'];
  qty_items?: Maybe<Scalars['Float']['output']>;
  subtotal?: Maybe<Scalars['String']['output']>;
  totalCredits?: Maybe<Scalars['Float']['output']>;
  totalScore: Scalars['Float']['output'];
};

export type Music = {
  __typename?: 'Music';
  certificates: Array<Certificate>;
  co_author?: Maybe<Scalars['JSON']['output']>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<File>;
  generic_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  interpreter?: Maybe<Scalars['JSON']['output']>;
  key: Scalars['String']['output'];
  letter: Scalars['JSON']['output'];
  music_file_id?: Maybe<Scalars['Float']['output']>;
  musical_playlist: Array<MusicalPlaylist>;
  musical_styles: Array<MusicalStyle>;
  score?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type MusicalPlaylist = {
  __typename?: 'MusicalPlaylist';
  id: Scalars['ID']['output'];
  music: Music;
  playlist: Playlist;
};

export type MusicalStyle = {
  __typename?: 'MusicalStyle';
  categories?: Maybe<Categories>;
  id: Scalars['ID']['output'];
  music: Music;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBillet: CreateChargeResponseDto;
  createCreditCard: CreateChargeResponseDto;
  createMusic: Scalars['Float']['output'];
  createPixCharge: CreateChargeResponseDto;
  initPdf: InitPdfResponse;
  signCades: Array<Scalars['String']['output']>;
  signPdf: SignPdfResponse;
};


export type MutationCreateBilletArgs = {
  CreateChargeInput: CreateChargeInput;
};


export type MutationCreateCreditCardArgs = {
  CreateChargeInput: CreateChargeInput;
};


export type MutationCreateMusicArgs = {
  data: CreateMusicInput;
};


export type MutationCreatePixChargeArgs = {
  CreateChargeInput: CreateChargeInput;
};


export type MutationInitPdfArgs = {
  data: CreateInitPadesInput;
};


export type MutationSignCadesArgs = {
  data: BrysignSignatureCadesInput;
};


export type MutationSignPdfArgs = {
  data: BrysignSignPdfPadesInput;
};

export type Nfe = {
  __typename?: 'Nfe';
  caminho_danfe?: Maybe<Scalars['String']['output']>;
  caminho_pdf_carta_correcao?: Maybe<Scalars['String']['output']>;
  caminho_xml_carta_correcao?: Maybe<Scalars['String']['output']>;
  caminho_xml_nota_fiscal?: Maybe<Scalars['String']['output']>;
  chave_nfe?: Maybe<Scalars['String']['output']>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  generic_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  numero?: Maybe<Scalars['Float']['output']>;
  numero_carta_correcao?: Maybe<Scalars['Float']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  send_email?: Maybe<Scalars['Boolean']['output']>;
  serie?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  status_sefaz?: Maybe<Scalars['String']['output']>;
  transactions?: Maybe<Transaction>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Order = {
  __typename?: 'Order';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  finished: Scalars['Boolean']['output'];
  generic_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  order_items: Array<OrderItems>;
  status_id?: Maybe<Scalars['Float']['output']>;
  total: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
  vouchers?: Maybe<Voucher>;
};

export type OrderItems = {
  __typename?: 'OrderItems';
  id: Scalars['ID']['output'];
  orders?: Maybe<Order>;
  products?: Maybe<Product>;
  quantity?: Maybe<Scalars['Float']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
};

export type PasswordReset = {
  __typename?: 'PasswordReset';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users: User;
};

export type Payment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  currency: Scalars['String']['output'];
  generic_enums_payments_payment_method_idTogeneric_enums?: Maybe<GenericEnum>;
  generic_enums_payments_status_idTogeneric_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  orders?: Maybe<Order>;
  payment_method_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  transactions?: Maybe<Array<Transaction>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentOutput = {
  __typename?: 'PaymentOutput';
  amount: Scalars['Float']['output'];
  created_at?: Maybe<Scalars['String']['output']>;
  payment_method_id: Scalars['Float']['output'];
  transaction: TransactionOutput;
};

export type Permission = {
  __typename?: 'Permission';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permission_role: Array<PermissionRole>;
  permission_user: Array<PermissionUser>;
  slug: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionRole = {
  __typename?: 'PermissionRole';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  permissions?: Maybe<Permission>;
  roles?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionUser = {
  __typename?: 'PermissionUser';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  permissions?: Maybe<Permission>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type Person = {
  __typename?: 'Person';
  addresses: Array<Address>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  contacts: Array<Contact>;
  cpf: Scalars['String']['output'];
  created_At?: Maybe<Scalars['DateTime']['output']>;
  fullname: Scalars['String']['output'];
  gender_id: Scalars['Float']['output'];
  generic_enums: GenericEnum;
  id: Scalars['ID']['output'];
  rg?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type Playlist = {
  __typename?: 'Playlist';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  musical_playlist: Array<MusicalPlaylist>;
  score?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users: User;
};

export type Product = {
  __typename?: 'Product';
  bonus: Array<Bonus>;
  code: Scalars['String']['output'];
  created_At?: Maybe<Scalars['DateTime']['output']>;
  credit: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order_items: Array<OrderItems>;
  price: Scalars['Float']['output'];
  score: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  findAllMusics: Array<Music>;
  getPixCharge: GetPixChargeDto;
  getSicrediToken: GetSicrediTokenResponseDto;
  sendBilletEmail: Scalars['Boolean']['output'];
};


export type QueryFindAllMusicsArgs = {
  data: FindManyMusicInput;
};


export type QueryGetPixChargeArgs = {
  txId: Scalars['String']['input'];
};


export type QuerySendBilletEmailArgs = {
  orderKey: Scalars['String']['input'];
};

export type Ranking = {
  __typename?: 'Ranking';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ranking_history: Array<RankingHistory>;
  score: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type RankingHistory = {
  __typename?: 'RankingHistory';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ranking: Ranking;
  score: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['Float']['output'];
};

export type Role = {
  __typename?: 'Role';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permission_role: Array<PermissionRole>;
  role_user: Array<RoleUser>;
  slug: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type RoleUser = {
  __typename?: 'RoleUser';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  roles?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type SignPdfResponse = {
  __typename?: 'SignPdfResponse';
  documentos: Array<DocumentosType>;
  identificador: Scalars['String']['output'];
  quantidadeAssinaturas: Scalars['Int']['output'];
};

export type Token = {
  __typename?: 'Token';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  is_revoked?: Maybe<Scalars['Boolean']['output']>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type Transaction = {
  __typename?: 'Transaction';
  authorization_code?: Maybe<Scalars['String']['output']>;
  authorized_amount?: Maybe<Scalars['Float']['output']>;
  boleto_barcode?: Maybe<Scalars['String']['output']>;
  boleto_expiration_date?: Maybe<Scalars['String']['output']>;
  boleto_url?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  generic_enums?: Maybe<GenericEnum>;
  id: Scalars['ID']['output'];
  installments?: Maybe<Scalars['Float']['output']>;
  nfe: Array<Nfe>;
  payments?: Maybe<Payment>;
  status_id?: Maybe<Scalars['Float']['output']>;
  transaction_id: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionOutput = {
  __typename?: 'TransactionOutput';
  authorized_amount: Scalars['Float']['output'];
  boleto_barcode?: Maybe<Scalars['String']['output']>;
  boleto_expiration_date?: Maybe<Scalars['String']['output']>;
  boleto_url?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  installments?: Maybe<Scalars['Float']['output']>;
  transaction_id: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar_id?: Maybe<Scalars['Float']['output']>;
  comments: Array<Comment>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  credit_cards: Array<CreditCard>;
  email: Scalars['String']['output'];
  files: Array<File>;
  id: Scalars['ID']['output'];
  invitations: Array<Invitation>;
  is_active: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  music: Array<Music>;
  nickname: Scalars['String']['output'];
  orders: Array<Order>;
  password: Scalars['String']['output'];
  password_resets: Array<PasswordReset>;
  permission_user: Array<PermissionUser>;
  persons: Array<Person>;
  playlist: Array<Playlist>;
  ranking: Array<Ranking>;
  role_user: Array<RoleUser>;
  terms: Scalars['Boolean']['output'];
  tokens: Array<Token>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  wallets: Array<Wallet>;
};

export type Video = {
  __typename?: 'Video';
  created_At?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<File>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  poster_file_id?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  video_path: Scalars['String']['output'];
  videos_genres: Array<VideoGenre>;
};

export type VideoGenre = {
  __typename?: 'VideoGenre';
  categories?: Maybe<Categories>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  videos?: Maybe<Video>;
};

export type Voucher = {
  __typename?: 'Voucher';
  code?: Maybe<Scalars['String']['output']>;
  created_At?: Maybe<Scalars['DateTime']['output']>;
  credit?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiration?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  limit?: Maybe<Scalars['Float']['output']>;
  orders: Array<Order>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  amount: Scalars['Float']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  creditTotal: Scalars['Float']['output'];
  creditUsed: Scalars['Float']['output'];
  customer_asaas?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  scoreUsed: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  users: Array<User>;
  wallet_history: Array<WalletHistory>;
};

export type WalletHistory = {
  __typename?: 'WalletHistory';
  action: Scalars['String']['output'];
  amount: Scalars['Float']['output'];
  created_At?: Maybe<Scalars['DateTime']['output']>;
  creditTotal: Scalars['Float']['output'];
  creditUser: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  scoreUser: Scalars['Float']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['Float']['output'];
  wallets: Wallet;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']['output']>;
};

export type InitPdfMutationVariables = Exact<{
  data: CreateInitPadesInput;
}>;


export type InitPdfMutation = { __typename?: 'Mutation', initPdf: { __typename?: 'InitPdfResponse', certsInfo: Array<{ __typename?: 'CertsInfo', title: string, nonce: string, musicId: number }>, data: { __typename?: 'BrysignInitResponse', nonce: string, formatoDadosSaida: string, formatoDadosEntrada: string, algoritmoHash: string, assinaturas?: Array<{ __typename?: 'AssinaturasType', hashes: Array<string>, nonce: string, algoritmoHash: string }> | null, assinaturasInicializadas?: Array<{ __typename?: 'AssinaturasInicializadasType', nonce: string, messageDigest: string }> | null } } };

export type SignPdfMutationVariables = Exact<{
  data: BrysignSignPdfPadesInput;
}>;


export type SignPdfMutation = { __typename?: 'Mutation', signPdf: { __typename?: 'SignPdfResponse', identificador: string, quantidadeAssinaturas: number, documentos: Array<{ __typename?: 'DocumentosType', nonce: string, nomeArquivo: string, hash: string, links: Array<{ __typename?: 'LinkType', href: string, rel: string }> }> } };


export const InitPdfDocument = gql`
    mutation InitPdf($data: CreateInitPadesInput!) {
  initPdf(data: $data) {
    certsInfo {
      title
      nonce
      musicId
    }
    data {
      nonce
      formatoDadosSaida
      formatoDadosEntrada
      algoritmoHash
      assinaturas {
        hashes
        nonce
        algoritmoHash
      }
      assinaturasInicializadas {
        nonce
        messageDigest
      }
    }
  }
}
    `;
export type InitPdfMutationFn = Apollo.MutationFunction<InitPdfMutation, InitPdfMutationVariables>;

/**
 * __useInitPdfMutation__
 *
 * To run a mutation, you first call `useInitPdfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitPdfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initPdfMutation, { data, loading, error }] = useInitPdfMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInitPdfMutation(baseOptions?: Apollo.MutationHookOptions<InitPdfMutation, InitPdfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitPdfMutation, InitPdfMutationVariables>(InitPdfDocument, options);
      }
export type InitPdfMutationHookResult = ReturnType<typeof useInitPdfMutation>;
export type InitPdfMutationResult = Apollo.MutationResult<InitPdfMutation>;
export type InitPdfMutationOptions = Apollo.BaseMutationOptions<InitPdfMutation, InitPdfMutationVariables>;
export const SignPdfDocument = gql`
    mutation SignPdf($data: BrysignSignPdfPadesInput!) {
  signPdf(data: $data) {
    identificador
    quantidadeAssinaturas
    documentos {
      nonce
      nomeArquivo
      links {
        href
        rel
      }
      hash
    }
  }
}
    `;
export type SignPdfMutationFn = Apollo.MutationFunction<SignPdfMutation, SignPdfMutationVariables>;

/**
 * __useSignPdfMutation__
 *
 * To run a mutation, you first call `useSignPdfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignPdfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signPdfMutation, { data, loading, error }] = useSignPdfMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignPdfMutation(baseOptions?: Apollo.MutationHookOptions<SignPdfMutation, SignPdfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignPdfMutation, SignPdfMutationVariables>(SignPdfDocument, options);
      }
export type SignPdfMutationHookResult = ReturnType<typeof useSignPdfMutation>;
export type SignPdfMutationResult = Apollo.MutationResult<SignPdfMutation>;
export type SignPdfMutationOptions = Apollo.BaseMutationOptions<SignPdfMutation, SignPdfMutationVariables>;