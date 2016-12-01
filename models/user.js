// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/*
 * User Model
 */

"use strict";

// Required lib
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var errors = require('../helpers/errors');

// Schema
var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, unique: true, required: true, uniqueCaseInsensitive: true },
  password: { type: String, required: true },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

// Activators
userSchema.plugin(uniqueValidator);

/*
 * Scopes
 */

// Return roles from user
userSchema.statics.getRoles = function(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return error.typeError('ObjectId is not valid', next);
  return this.findOne({ _id: id }).populate('roles', 'name');
};

/*
 * Triggers
 */

userSchema.pre('save', function(next) {
  // Save user reference in role.
  this.model('Role').update({ name: 'user' }, {$push: {users: this}}, next);
});

userSchema.pre('remove', function(next){
  // Remove user reference in role.
  this.model('Role').update({_id: {$in: this.roles}}, {$pull: {users: this._id}}, {multi: true}, next);
});

// userSchema.pre('save', function(next) {
//   // Save user reference in project.
//   this.model('Project').update({_id: this.project}, {$set: {user: this}}, next);
// });

// userSchema.pre('remove', function(next) {
//   // Remove user reference in project.
//   this.model('Project').update({_id: this.project}, {$unset: {user: ""}}, next);
// });

// Export Model for use into Controller
module.exports = mongoose.model('User', userSchema);