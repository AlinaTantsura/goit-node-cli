// const fs = require('fs').promises;
// const path = require('path');
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const contactsPath = resolve('db','./contacts.json');

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  return await readFile(contactsPath).then(data => JSON.parse(data.toString())).catch(err => err);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const list = await listContacts();
  const index = list.findIndex(item => item.id === contactId);
  if (index === -1) return null
  else return list[index];
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
};

//  module.exports = listContacts;

export { listContacts, getContactById};