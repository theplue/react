"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var Utils = require('../utils');

var InitializeActions = {
	initApp: function() { 
		var url = 'school/getAllSchoolSeeds';
		Utils.makeGETPromise(url)
		.done(function(dataFromServer){
			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE,
				data: dataFromServer
			});
		})
		.fail(function(){
			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE_ERROR,
				errorMessage: 'Unable to get initialization data'
			});
		});
	}
};

module.exports = InitializeActions;