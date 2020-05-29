sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("wohland.de.traveling_europe.transactiondata.controller.Login", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.yard.view.FullScreen
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		onPressButton: function() {
//			debugger;
			sap.ui.getCore().byId("__xmlview0--Login").setVisible(false);
			sap.ui.getCore().byId("__xmlview0--mySplitApp").setVisible(true);
			
			this.oRouter.navTo("masterDetailRoute");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.yard.view.FullScreen
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.yard.view.FullScreen
		 */
/*		onAfterRendering: function() {
			debugger;
		}*/

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.yard.view.FullScreen
		 */
		//	onExit: function() {
		//
		//	}

	});

});