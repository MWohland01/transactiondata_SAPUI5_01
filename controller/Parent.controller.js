sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";

	return Controller.extend("sap.tnt.sample.ToolPage.controller.Parent", {
		onInit: function() {
			const router = this.getOwnerComponent().getRouter();
			router.attachRoutePatternMatched(this.onRoutePatternMatched.bind(this));
			this.getView().addEventDelegate({
				onAfterShow: this.onAfterShow.bind(this, router),
			});
		},

		onRoutePatternMatched: function(event) {
			const key = event.getParameter("name");
			this.byId("childViewSegmentedButton").setSelectedKey(key);
		},

		onAfterShow: function(router) {
			router.navTo("childRoute1");
		},

		onSelect: function(event) {
			const router = this.getOwnerComponent().getRouter();
			router.navTo(event.getParameter("key"));
		},

	});
});