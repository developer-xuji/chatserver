import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import messageService from "@src/services/message-service";
import { IMessage } from "@src/models/Message";
import { IReq, IRes } from './shared/types';

// **** Variables **** //

// Paths
const paths = {
  basePath: '/messages',
  get: '/all',
  add: '/add',
} as const;

// **** Functions **** //

/**
 * Get all messages.
 */
async function getAll(_: IReq, res: IRes) {
  const messages = await messageService.getAll();
  return res.status(HttpStatusCodes.OK).json({ messages });
}

/**
 * Add one message.
 */
async function add(req: IReq<{message: IMessage}>, res: IRes) {
  const { message } = req.body;
  await messageService.addOne(message);
  return res.status(HttpStatusCodes.CREATED).end();
}

// **** Export default **** //

export default {
  paths,
  getAll,
  add,
} as const;