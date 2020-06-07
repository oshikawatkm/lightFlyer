// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.lnrpc.InvoiceHTLC');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');

goog.forwardDeclare('proto.lnrpc.InvoiceHTLCState');
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
proto.lnrpc.InvoiceHTLC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lnrpc.InvoiceHTLC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lnrpc.InvoiceHTLC.displayName = 'proto.lnrpc.InvoiceHTLC';
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
proto.lnrpc.InvoiceHTLC.prototype.toObject = function(opt_includeInstance) {
  return proto.lnrpc.InvoiceHTLC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lnrpc.InvoiceHTLC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.InvoiceHTLC.toObject = function(includeInstance, msg) {
  var f, obj = {
    chanId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    htlcIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amtMsat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    acceptHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    acceptTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    resolveTime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    expiryHeight: jspb.Message.getFieldWithDefault(msg, 7, 0),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0),
    customRecordsMap: (f = msg.getCustomRecordsMap()) ? f.toObject(includeInstance, undefined) : [],
    mppTotalAmtMsat: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.lnrpc.InvoiceHTLC}
 */
proto.lnrpc.InvoiceHTLC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lnrpc.InvoiceHTLC;
  return proto.lnrpc.InvoiceHTLC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lnrpc.InvoiceHTLC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lnrpc.InvoiceHTLC}
 */
proto.lnrpc.InvoiceHTLC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChanId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHtlcIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmtMsat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAcceptHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAcceptTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResolveTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExpiryHeight(value);
      break;
    case 8:
      var value = /** @type {!proto.lnrpc.InvoiceHTLCState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 9:
      var value = msg.getCustomRecordsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readBytes, null, 0, "");
         });
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMppTotalAmtMsat(value);
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
proto.lnrpc.InvoiceHTLC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lnrpc.InvoiceHTLC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lnrpc.InvoiceHTLC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lnrpc.InvoiceHTLC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChanId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHtlcIndex();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAmtMsat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAcceptHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAcceptTime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getResolveTime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getExpiryHeight();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCustomRecordsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getMppTotalAmtMsat();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * optional uint64 chan_id = 1;
 * @return {string}
 */
proto.lnrpc.InvoiceHTLC.prototype.getChanId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setChanId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 htlc_index = 2;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getHtlcIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setHtlcIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 amt_msat = 3;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getAmtMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setAmtMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 accept_height = 4;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getAcceptHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setAcceptHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 accept_time = 5;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getAcceptTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setAcceptTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 resolve_time = 6;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getResolveTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setResolveTime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 expiry_height = 7;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getExpiryHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setExpiryHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional InvoiceHTLCState state = 8;
 * @return {!proto.lnrpc.InvoiceHTLCState}
 */
proto.lnrpc.InvoiceHTLC.prototype.getState = function() {
  return /** @type {!proto.lnrpc.InvoiceHTLCState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.lnrpc.InvoiceHTLCState} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * map<uint64, bytes> custom_records = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!(string|Uint8Array)>}
 */
proto.lnrpc.InvoiceHTLC.prototype.getCustomRecordsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.clearCustomRecordsMap = function() {
  this.getCustomRecordsMap().clear();
  return this;};


/**
 * optional uint64 mpp_total_amt_msat = 10;
 * @return {number}
 */
proto.lnrpc.InvoiceHTLC.prototype.getMppTotalAmtMsat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.lnrpc.InvoiceHTLC} returns this
 */
proto.lnrpc.InvoiceHTLC.prototype.setMppTotalAmtMsat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};

