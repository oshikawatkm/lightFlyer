// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.PolicyUpdateRequest');
goog.provide('proto.lnrpc.PolicyUpdateRequest.ScopeCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.lnrpc.ChannelPoint');

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
proto.lnrpc.PolicyUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.lnrpc.PolicyUpdateRequest.oneofGroups_);
};
goog.inherits(proto.lnrpc.PolicyUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.PolicyUpdateRequest.displayName = 'proto.lnrpc.PolicyUpdateRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.lnrpc.PolicyUpdateRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.lnrpc.PolicyUpdateRequest.ScopeCase = {
  SCOPE_NOT_SET: 0,
  GLOBAL: 1,
  CHAN_POINT: 2
};

/**
 * @return {proto.lnrpc.PolicyUpdateRequest.ScopeCase}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getScopeCase = function() {
  return /** @type {proto.lnrpc.PolicyUpdateRequest.ScopeCase} */(jspb.Message.computeOneofCase(this, proto.lnrpc.PolicyUpdateRequest.oneofGroups_[0]));
};



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
proto.lnrpc.PolicyUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.PolicyUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.PolicyUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.PolicyUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    global: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    chanPoint: (f = msg.getChanPoint()) && proto.lnrpc.ChannelPoint.toObject(includeInstance, f),
    baseFeeMsat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    feeRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    timeLockDelta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxHtlcMsat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minHtlcMsat: jspb.Message.getFieldWithDefault(msg, 7, 0),
    minHtlcMsatSpecified: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.lnrpc.PolicyUpdateRequest}
 */
proto.lnrpc.PolicyUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.PolicyUpdateRequest;
  return proto.lnrpc.PolicyUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.PolicyUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.PolicyUpdateRequest}
 */
proto.lnrpc.PolicyUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGlobal(value);
      break;
    case 2:
      var value = new proto.lnrpc.ChannelPoint;
      reader.readMessage(value,proto.lnrpc.ChannelPoint.deserializeBinaryFromReader);
      msg.setChanPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBaseFeeMsat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFeeRate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeLockDelta(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxHtlcMsat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinHtlcMsat(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMinHtlcMsatSpecified(value);
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
proto.lnrpc.PolicyUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.PolicyUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.PolicyUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.PolicyUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChanPoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.lnrpc.ChannelPoint.serializeBinaryToWriter
    );
  }
  f = message.getBaseFeeMsat();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFeeRate();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTimeLockDelta();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMaxHtlcMsat();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMinHtlcMsat();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getMinHtlcMsatSpecified();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional bool global = 1;
 * @return {boolean}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getGlobal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setGlobal = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.lnrpc.PolicyUpdateRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.clearGlobal = function() {
  return jspb.Message.setOneofField(this, 1, proto.lnrpc.PolicyUpdateRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.hasGlobal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChannelPoint chan_point = 2;
 * @return {?proto.lnrpc.ChannelPoint}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getChanPoint = function() {
  return /** @type{?proto.lnrpc.ChannelPoint} */ (
    jspb.Message.getWrapperField(this, proto.lnrpc.ChannelPoint, 2));
};


/**
 * @param {?proto.lnrpc.ChannelPoint|undefined} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
*/
proto.lnrpc.PolicyUpdateRequest.prototype.setChanPoint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.lnrpc.PolicyUpdateRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.clearChanPoint = function() {
  return this.setChanPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.hasChanPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 base_fee_msat = 3;
 * @return {number}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getBaseFeeMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setBaseFeeMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double fee_rate = 4;
 * @return {number}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getFeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setFeeRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint32 time_lock_delta = 5;
 * @return {number}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getTimeLockDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setTimeLockDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 max_htlc_msat = 6;
 * @return {number}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getMaxHtlcMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setMaxHtlcMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 min_htlc_msat = 7;
 * @return {number}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getMinHtlcMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setMinHtlcMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool min_htlc_msat_specified = 8;
 * @return {boolean}
 */
proto.lnrpc.PolicyUpdateRequest.prototype.getMinHtlcMsatSpecified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lnrpc.PolicyUpdateRequest} returns this
 */
proto.lnrpc.PolicyUpdateRequest.prototype.setMinHtlcMsatSpecified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};

