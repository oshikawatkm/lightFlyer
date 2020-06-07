// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.HTLCAttempt');
goog.provide('proto.lnrpc.HTLCAttempt.HTLCStatus');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.Failure');
goog.require('proto.lnrpc.Route');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lnrpc.HTLCAttempt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.HTLCAttempt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.HTLCAttempt.displayName = 'proto.lnrpc.HTLCAttempt';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lnrpc.HTLCAttempt.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.HTLCAttempt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.HTLCAttempt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.HTLCAttempt.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    route: (f = msg.getRoute()) && proto.lnrpc.Route.toObject(includeInstance, f),
    attemptTimeNs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resolveTimeNs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    failure: (f = msg.getFailure()) && proto.lnrpc.Failure.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lnrpc.HTLCAttempt}
 */
proto.lnrpc.HTLCAttempt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.HTLCAttempt;
  return proto.lnrpc.HTLCAttempt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.HTLCAttempt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.HTLCAttempt}
 */
proto.lnrpc.HTLCAttempt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lnrpc.HTLCAttempt.HTLCStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.lnrpc.Route;
      reader.readMessage(value,proto.lnrpc.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAttemptTimeNs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResolveTimeNs(value);
      break;
    case 5:
      var value = new proto.lnrpc.Failure;
      reader.readMessage(value,proto.lnrpc.Failure.deserializeBinaryFromReader);
      msg.setFailure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lnrpc.HTLCAttempt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.HTLCAttempt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.HTLCAttempt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.HTLCAttempt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.Route.serializeBinaryToWriter
    );
  }
  f = message.getAttemptTimeNs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getResolveTimeNs();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.lnrpc.Failure.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.lnrpc.HTLCAttempt.HTLCStatus = {
  IN_FLIGHT: 0,
  SUCCEEDED: 1,
  FAILED: 2
};

/**
 * optional HTLCStatus status = 1;
 * @return {!proto.lnrpc.HTLCAttempt.HTLCStatus}
 */
proto.lnrpc.HTLCAttempt.prototype.getStatus = function() {
  return /** @type {!proto.lnrpc.HTLCAttempt.HTLCStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.lnrpc.HTLCAttempt.HTLCStatus} value
 * @return {!proto.lnrpc.HTLCAttempt} returns this
 */
proto.lnrpc.HTLCAttempt.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Route route = 2;
 * @return {?proto.lnrpc.Route}
 */
proto.lnrpc.HTLCAttempt.prototype.getRoute = function() {
  return /** @type{?proto.lnrpc.Route} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.Route, 2));
};


/**
 * @param {?proto.lnrpc.Route|undefined} value
 * @return {!proto.lnrpc.HTLCAttempt} returns this
*/
proto.lnrpc.HTLCAttempt.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.HTLCAttempt} returns this
 */
proto.lnrpc.HTLCAttempt.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.HTLCAttempt.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 attempt_time_ns = 3;
 * @return {number}
 */
proto.lnrpc.HTLCAttempt.prototype.getAttemptTimeNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.HTLCAttempt} returns this
 */
proto.lnrpc.HTLCAttempt.prototype.setAttemptTimeNs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 resolve_time_ns = 4;
 * @return {number}
 */
proto.lnrpc.HTLCAttempt.prototype.getResolveTimeNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.HTLCAttempt} returns this
 */
proto.lnrpc.HTLCAttempt.prototype.setResolveTimeNs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Failure failure = 5;
 * @return {?proto.lnrpc.Failure}
 */
proto.lnrpc.HTLCAttempt.prototype.getFailure = function() {
  return /** @type{?proto.lnrpc.Failure} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.Failure, 5));
};


/**
 * @param {?proto.lnrpc.Failure|undefined} value
 * @return {!proto.lnrpc.HTLCAttempt} returns this
*/
proto.lnrpc.HTLCAttempt.prototype.setFailure = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.HTLCAttempt} returns this
 */
proto.lnrpc.HTLCAttempt.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.HTLCAttempt.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 5) != null;
};

