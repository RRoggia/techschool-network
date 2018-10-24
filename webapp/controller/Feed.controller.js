sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("com.sap.techschool.controller.Feed", {
		feedbackModel: null,

		onInit: function(){
			this.feedbackModel = new JSONModel(Array.from([]));
			this.getView().setModel(this.feedbackModel, "feedbacks");
		},

		onPostFeedback: function(oEvent){
			var feedbackEntered = oEvent.getParameter("value");

			var date = new Date(); 

			var feedback = {
				date: date,
				feedback: feedbackEntered
			}

			var feedbacks = JSON.parse(this.feedbackModel.getJSON());
			feedbacks.push(feedback);
			this.feedbackModel.setJSON(JSON.stringify(feedbacks), false);


			console.log('feedback added', feedbackEntered);
		}

	});
});