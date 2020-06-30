// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.Route');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.Hop');

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
proto.lnrpc.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.lnrpc.Route.repeatedFields_, null);
};
goog.inherits(proto.lnrpc.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.Route.displayName = 'proto.lnrpc.Route';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.lnrpc.Route.repeatedFields_ = [4];



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
proto.lnrpc.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.Route} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalTimeLock: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalFees: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalAmt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hopsList: jspb.Message.toObjectList(msg.getHopsList(),
    proto.lnrpc.Hop.toObject, includeInstance),
    totalFeesMsat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalAmtMsat: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.lnrpc.Route}
 */
proto.lnrpc.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.Route;
  return proto.lnrpc.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.Route}
 */
proto.lnrpc.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalTimeLock(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFees(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalAmt(value);
      break;
    case 4:
      var value = new proto.lnrpc.Hop;
      reader.readMessage(value,proto.lnrpc.Hop.deserializeBinaryFromReader);
      msg.addHops(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFeesMsat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalAmtMsat(value);
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
proto.lnrpc.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.Route.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.Route} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.Route.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalTimeLock();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTotalFees();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalAmt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHopsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.lnrpc.Hop.serializeBinaryToWriter
    );
  }
  f = message.getTotalFeesMsat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalAmtMsat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional uint32 total_time_lock = 1;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalTimeLock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.setTotalTimeLock = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total_fees = 2;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalFees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.setTotalFees = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_amt = 3;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalAmt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.setTotalAmt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Hop hops = 4;
 * @return {!Array<!proto.lnrpc.Hop>}
 */
proto.lnrpc.Route.prototype.getHopsList = function() {
  return /** @type{!Array<!proto.lnrpc.Hop>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.lnrpc.Hop, 4));
};


/**
 * @param {!Array<!proto.lnrpc.Hop>} value
 * @return {!proto.lnrpc.Route} returns this
*/
proto.lnrpc.Route.prototype.setHopsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.lnrpc.Hop=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lnrpc.Hop}
 */
proto.lnrpc.Route.prototype.addHops = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.lnrpc.Hop, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.clearHopsList = function() {
  return this.setHopsList([]);
};


/**
 * optional int64 total_fees_msat = 5;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalFeesMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.setTotalFeesMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 total_amt_msat = 6;
 * @return {number}
 */
proto.lnrpc.Route.prototype.getTotalAmtMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.Route} returns this
 */
proto.lnrpc.Route.prototype.setTotalAmtMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

