/* eslint-disable @typescript-eslint/no-unsafe-return */

import jsonfile from 'jsonfile';

import { IUser } from '@src/models/User';
import { IMessage } from '@src/models/Message';


// **** Variables **** //

const dbFileName = 'database.json';


// **** Types **** //

interface IDb {
  users: IUser[];
  messages: IMessage[];
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + dbFileName);
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + dbFileName), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
