module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.7). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFlower {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Flower {
  id: ID!
  createdAt: DateTime!
  name: String!
  color: String!
  location: String!
  description: String!
  img: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type FlowerConnection {
  pageInfo: PageInfo!
  edges: [FlowerEdge]!
  aggregate: AggregateFlower!
}

input FlowerCreateInput {
  id: ID
  name: String!
  color: String!
  location: String!
  description: String!
  img: String!
  postedBy: UserCreateOneWithoutFlowersInput
  votes: VoteCreateManyWithoutFlowerInput
}

input FlowerCreateManyWithoutPostedByInput {
  create: [FlowerCreateWithoutPostedByInput!]
  connect: [FlowerWhereUniqueInput!]
}

input FlowerCreateOneWithoutVotesInput {
  create: FlowerCreateWithoutVotesInput
  connect: FlowerWhereUniqueInput
}

input FlowerCreateWithoutPostedByInput {
  id: ID
  name: String!
  color: String!
  location: String!
  description: String!
  img: String!
  votes: VoteCreateManyWithoutFlowerInput
}

input FlowerCreateWithoutVotesInput {
  id: ID
  name: String!
  color: String!
  location: String!
  description: String!
  img: String!
  postedBy: UserCreateOneWithoutFlowersInput
}

type FlowerEdge {
  node: Flower!
  cursor: String!
}

enum FlowerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  location_ASC
  location_DESC
  description_ASC
  description_DESC
  img_ASC
  img_DESC
}

type FlowerPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  color: String!
  location: String!
  description: String!
  img: String!
}

input FlowerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  AND: [FlowerScalarWhereInput!]
  OR: [FlowerScalarWhereInput!]
  NOT: [FlowerScalarWhereInput!]
}

type FlowerSubscriptionPayload {
  mutation: MutationType!
  node: Flower
  updatedFields: [String!]
  previousValues: FlowerPreviousValues
}

input FlowerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FlowerWhereInput
  AND: [FlowerSubscriptionWhereInput!]
  OR: [FlowerSubscriptionWhereInput!]
  NOT: [FlowerSubscriptionWhereInput!]
}

input FlowerUpdateInput {
  name: String
  color: String
  location: String
  description: String
  img: String
  postedBy: UserUpdateOneWithoutFlowersInput
  votes: VoteUpdateManyWithoutFlowerInput
}

input FlowerUpdateManyDataInput {
  name: String
  color: String
  location: String
  description: String
  img: String
}

input FlowerUpdateManyMutationInput {
  name: String
  color: String
  location: String
  description: String
  img: String
}

input FlowerUpdateManyWithoutPostedByInput {
  create: [FlowerCreateWithoutPostedByInput!]
  delete: [FlowerWhereUniqueInput!]
  connect: [FlowerWhereUniqueInput!]
  set: [FlowerWhereUniqueInput!]
  disconnect: [FlowerWhereUniqueInput!]
  update: [FlowerUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [FlowerUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [FlowerScalarWhereInput!]
  updateMany: [FlowerUpdateManyWithWhereNestedInput!]
}

input FlowerUpdateManyWithWhereNestedInput {
  where: FlowerScalarWhereInput!
  data: FlowerUpdateManyDataInput!
}

input FlowerUpdateOneRequiredWithoutVotesInput {
  create: FlowerCreateWithoutVotesInput
  update: FlowerUpdateWithoutVotesDataInput
  upsert: FlowerUpsertWithoutVotesInput
  connect: FlowerWhereUniqueInput
}

input FlowerUpdateWithoutPostedByDataInput {
  name: String
  color: String
  location: String
  description: String
  img: String
  votes: VoteUpdateManyWithoutFlowerInput
}

input FlowerUpdateWithoutVotesDataInput {
  name: String
  color: String
  location: String
  description: String
  img: String
  postedBy: UserUpdateOneWithoutFlowersInput
}

input FlowerUpdateWithWhereUniqueWithoutPostedByInput {
  where: FlowerWhereUniqueInput!
  data: FlowerUpdateWithoutPostedByDataInput!
}

input FlowerUpsertWithoutVotesInput {
  update: FlowerUpdateWithoutVotesDataInput!
  create: FlowerCreateWithoutVotesInput!
}

input FlowerUpsertWithWhereUniqueWithoutPostedByInput {
  where: FlowerWhereUniqueInput!
  update: FlowerUpdateWithoutPostedByDataInput!
  create: FlowerCreateWithoutPostedByInput!
}

input FlowerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  img: String
  img_not: String
  img_in: [String!]
  img_not_in: [String!]
  img_lt: String
  img_lte: String
  img_gt: String
  img_gte: String
  img_contains: String
  img_not_contains: String
  img_starts_with: String
  img_not_starts_with: String
  img_ends_with: String
  img_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [FlowerWhereInput!]
  OR: [FlowerWhereInput!]
  NOT: [FlowerWhereInput!]
}

input FlowerWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFlower(data: FlowerCreateInput!): Flower!
  updateFlower(data: FlowerUpdateInput!, where: FlowerWhereUniqueInput!): Flower
  updateManyFlowers(data: FlowerUpdateManyMutationInput!, where: FlowerWhereInput): BatchPayload!
  upsertFlower(where: FlowerWhereUniqueInput!, create: FlowerCreateInput!, update: FlowerUpdateInput!): Flower!
  deleteFlower(where: FlowerWhereUniqueInput!): Flower
  deleteManyFlowers(where: FlowerWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  flower(where: FlowerWhereUniqueInput!): Flower
  flowers(where: FlowerWhereInput, orderBy: FlowerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Flower]!
  flowersConnection(where: FlowerWhereInput, orderBy: FlowerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FlowerConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  flower(where: FlowerSubscriptionWhereInput): FlowerSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  homeState: String!
  password: String!
  flowers(where: FlowerWhereInput, orderBy: FlowerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Flower!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  homeState: String!
  password: String!
  flowers: FlowerCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneWithoutFlowersInput {
  create: UserCreateWithoutFlowersInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFlowersInput {
  id: ID
  name: String!
  email: String!
  homeState: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  id: ID
  name: String!
  email: String!
  homeState: String!
  password: String!
  flowers: FlowerCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  homeState_ASC
  homeState_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  homeState: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  homeState: String
  password: String
  flowers: FlowerUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  homeState: String
  password: String
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutFlowersInput {
  create: UserCreateWithoutFlowersInput
  update: UserUpdateWithoutFlowersDataInput
  upsert: UserUpsertWithoutFlowersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFlowersDataInput {
  name: String
  email: String
  homeState: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  homeState: String
  password: String
  flowers: FlowerUpdateManyWithoutPostedByInput
}

input UserUpsertWithoutFlowersInput {
  update: UserUpdateWithoutFlowersDataInput!
  create: UserCreateWithoutFlowersInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  homeState: String
  homeState_not: String
  homeState_in: [String!]
  homeState_not_in: [String!]
  homeState_lt: String
  homeState_lte: String
  homeState_gt: String
  homeState_gte: String
  homeState_contains: String
  homeState_not_contains: String
  homeState_starts_with: String
  homeState_not_starts_with: String
  homeState_ends_with: String
  homeState_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  flowers_every: FlowerWhereInput
  flowers_some: FlowerWhereInput
  flowers_none: FlowerWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  flower: Flower!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  flower: FlowerCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutFlowerInput {
  create: [VoteCreateWithoutFlowerInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutFlowerInput {
  id: ID
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  id: ID
  flower: FlowerCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  flower: FlowerUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutFlowerInput {
  create: [VoteCreateWithoutFlowerInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutFlowerInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutFlowerInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutFlowerDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  flower: FlowerUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutFlowerInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutFlowerDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutFlowerInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutFlowerDataInput!
  create: VoteCreateWithoutFlowerInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  flower: FlowerWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    