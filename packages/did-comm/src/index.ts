/**
 * Provides a {@link @veramo/did-comm#DIDComm | plugin} for the {@link @veramo/core#Agent} that implements
 * {@link @veramo/did-comm#IDIDComm} interface.  Provides a {@link @veramo/did-comm#DIDCommMessageHandler | plugin}
 * for the {@link @veramo/message-handler#MessageHandler} that decrypts messages.
 *
 * @packageDocumentation
 */

export {
  DIDComm,
  ISendMessageDIDCommAlpha1Args,
  IPackDIDCommMessageArgs,
  IUnpackDIDCommMessageArgs,
} from './didcomm.js'
export * from './types/message-types.js'
export * from './types/utility-types.js'
export * from './types/IDIDComm.js'
export { DIDCommMessageHandler } from './message-handler.js'
export * from './transports/transports.js'
/**
 * @beta This API may change without a BREAKING CHANGE notice.
 */
 import { createRequire } from "module";
 const require = createRequire(import.meta.url);
 const schema = require("../plugin.schema.json");
export { schema }
