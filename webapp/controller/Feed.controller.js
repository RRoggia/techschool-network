sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("com.sap.techschool.controller.Feed", {

		onPostFeedback: function(oEvent){
			var feedbackEntered = oEvent.getParameter("value");
			console.log('feedback added', feedbackEntered);
		}

	});
});