import messageRepo from "@src/repos/message-repo";
import { IMessage } from "@src/models/Message";

// **** Functions **** //

/**
 * Get all messages.
 */
function getAll(): Promise<IMessage[]> {
  return messageRepo.getAll();
}

/**
 * Add one message.
 */
function addOne(message: IMessage): Promise<void> {
  return messageRepo.add(message);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
} as const;