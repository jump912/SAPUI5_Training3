/*global history */
sap.ui.define([
		"com/rizing/demo/controller/BaseController",
		"sap/ui/Device",
		"com/rizing/demo/model/formatter"
	], function (BaseController, Device) {
		"use strict";

		return BaseController.extend("com.rizing.demo.controller.Master", {

			onInit : function () {
				// Control state model
				var oList = this.byId("list");
				
				this._oList = oList;
			},

			onSelectionChange : function (oEvent) {
				// get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
				var oItem = oEvent.getParameter("listItem");
				
				var bReplace = !Device.system.phone;
				this.getRouter().navTo("object", {
					objectId : oItem.getBindingContext().getProperty("SoId")
				}, bReplace);
			},
			
			onUpdateFinished: function(oEvent) {
				// update the master list object counter after new data is loaded
				this._updateListItemCount(oEvent.getParameter("total"));
			},
	
			_updateListItemCount: function(iTotalItems) {
				var sTitle;
				// only update the counter if the length is final
				if (this._oList.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("masterTitle", [iTotalItems]);
					this.byId("page").setTitle(sTitle);
				}
			}


		});

	}
);