/*global location */
sap.ui.define([
	"com/rizing/demo/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.rizing.demo.controller.Detail", {

		onInit: function() {
			this.getRouter().getRoute("object").attachPatternMatched({}, this._onObjectMatched, this);
		},
		
		_onObjectMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").objectId;
			this.getModel().metadataLoaded().then(function() {
				var sObjectPath = this.getModel().createKey("SalesOrderSet", {
					SoId: sObjectId
				});
				
				this.getView().bindElement({
					path: "/" + sObjectPath
				});
			}.bind(this));
		}
	});
});