import { program } from "commander";
// const contact = require('./contacts.js')
// const contact = require('./contacts.js');
import  {listContacts, getContactById}  from "./contacts.js";
// const fs = require('fs').promises;
// import { readFile } from 'fs/promises';
// import { resolve } from 'path';

// const contactsPath = resolve('db','./contacts.json');

// async function listContacts() {
//  async function listContacts(){
//    // ...твій код. Повертає масив контактів.
//   //  const data = await readFile("db/contacts.json");
//   //  return JSON.parse(data.toString());
//   return await readFile(contactsPath).then(data => JSON.parse(data.toString())).catch(err => err);
// }

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      console.table(await listContacts());
      break;

    case "get":
      // ... id
      console.log(await getContactById(id));
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);

