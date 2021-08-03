import { Mongo } from "meteor/mongo";

export const TaskCollections = new Mongo.Collection('tasks')
export const UserCollections = new Mongo.Collection('users')
export const MessageCollections = new Mongo.Collection('messages')