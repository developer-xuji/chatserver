import { IMessage } from '@src/models/Message';
import orm from './mock-orm';

/**
 * Get all messages.
 */
async function getAll(): Promise<IMessage[]> {
  const db = await orm.openDb();
  return db.messages;
}

/**
 * Add one message.
 */
async function add(message: IMessage): Promise<void> {
  const db = await orm.openDb();
  db.messages.push(message);
  return orm.saveDb(db);
}

export default {
  getAll,
  add,
} as const;