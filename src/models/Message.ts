// **** Types **** //

export interface IMessage {
  name: string;
  message: string;
}

// **** Functions **** //

/**
 * Get a new User object.
 */
function _new(
  name: string,
  message: string,
): IMessage {
  return {
    name,
    message,
  };
}

// **** Export default **** //

export default {
  new: _new,
} as const;