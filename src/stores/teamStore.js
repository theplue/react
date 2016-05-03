"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var schoolSeeds = [];

var TeamStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllSchoolSeeds: function() {
		return schoolSeeds;
	},

	getYears: function(id) {
		return _.sortedUniqBy(schoolSeeds, schoolSeeds.year);
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			schoolSeeds = action.initialData;
			TeamStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = TeamStore;