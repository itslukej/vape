/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.protos.ReviewLike');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.protos.Review');
goog.require('proto.protos.User');


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
proto.protos.ReviewLike = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ReviewLike, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protos.ReviewLike.displayName = 'proto.protos.ReviewLike';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protos.ReviewLike.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ReviewLike.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ReviewLike} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReviewLike.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    review: (f = msg.getReview()) && proto.protos.Review.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.protos.User.toObject(includeInstance, f)
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
 * @return {!proto.protos.ReviewLike}
 */
proto.protos.ReviewLike.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ReviewLike;
  return proto.protos.ReviewLike.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ReviewLike} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ReviewLike}
 */
proto.protos.ReviewLike.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.protos.Review;
      reader.readMessage(value,proto.protos.Review.deserializeBinaryFromReader);
      msg.setReview(value);
      break;
    case 3:
      var value = new proto.protos.User;
      reader.readMessage(value,proto.protos.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.protos.ReviewLike.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ReviewLike.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ReviewLike} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ReviewLike.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReview();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protos.Review.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protos.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.protos.ReviewLike.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.protos.ReviewLike.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Review review = 2;
 * @return {?proto.protos.Review}
 */
proto.protos.ReviewLike.prototype.getReview = function() {
  return /** @type{?proto.protos.Review} */ (
    jspb.Message.getWrapperField(this, proto.protos.Review, 2));
};


/** @param {?proto.protos.Review|undefined} value */
proto.protos.ReviewLike.prototype.setReview = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.protos.ReviewLike.prototype.clearReview = function() {
  this.setReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protos.ReviewLike.prototype.hasReview = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User user = 3;
 * @return {?proto.protos.User}
 */
proto.protos.ReviewLike.prototype.getUser = function() {
  return /** @type{?proto.protos.User} */ (
    jspb.Message.getWrapperField(this, proto.protos.User, 3));
};


/** @param {?proto.protos.User|undefined} value */
proto.protos.ReviewLike.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.protos.ReviewLike.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protos.ReviewLike.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};

