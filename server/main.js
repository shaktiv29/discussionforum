import { Meteor } from 'meteor/meteor';
import { MessageCollections, UserCollections } from '../imports/api/Collections';
import { TaskCollections } from '/imports/api/Collections.js';

const insertTask = taskText => TaskCollections.insert({text: taskText})
const insertUser = userData => UserCollections.insert(userData)
const insertMessage = messageData => MessageCollections.insert(messageData)

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (TaskCollections.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
  if (UserCollections.find().count() === 0) {
    [
      {email:'shaktiv@jecjabalpur.ac.in',password:'shaktiv'},
      {email:'bhakti@gmail.com',password:'bhakti'},
      {email:'ompandya@gmail.com',password:'pandya'},
      {email:'newuser@gmail.com',password:'newuser'}
    ].forEach(insertUser)
  }
  if (MessageCollections.find().count() === 0) {
    [
      {email:'shaktiv@jecjabalpur.ac.in',message:'Hello Everyone By Shakti',ts:'123'},
      {email:'bhakti@gmail.com',message:'Hello Everyone By Bhakti',ts:'456'}
    ].forEach(insertMessage)
  }
});
