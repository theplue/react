"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var TeamActions = {
	createTeam: function(team) {

		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_TEAM,
			data: team
		});
	}

};

module.exports = TeamActions;