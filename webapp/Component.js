sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	return UIComponent.extend("com.sap.techschool.Component", {

		metadata: {
			rootView: {
				viewName: "com.sap.techschool.view.Feed",
				type: "XML",
				async: true,
				id: "app"
			}
		},

		init : function () {
			 UIComponent.prototype.init.apply(this, arguments);
		}
	});
});