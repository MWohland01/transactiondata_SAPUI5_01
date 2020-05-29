sap.ui.define([
	"sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button",
	"sap/m/library"
], function (Device, Controller, JSONModel, Popover, Button, library) {
	"use strict";

	var ButtonType = library.ButtonType,
		PlacementType = library.PlacementType;

	return Controller.extend("sap.tnt.sample.ToolPage.ToolPage", 
	{

		onInit: function () 
		{
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/tnt/sample/ToolPage/model/data.json"));
			this.getView().setModel(oModel);
			this._setToggleButtonTooltip(!Device.system.desktop);
//          ---------------------------------------------------------------			
			const router = this.getOwnerComponent().getRouter();
			router.attachRoutePatternMatched(this.onRoutePatternMatched.bind(this));
//			this.getView().addEventDelegate({
//				onAfterShow: this.onAfterShow.bind(this, router),
//			});			
			
		},

		onRoutePatternMatched: function(event) {
			const key = event.getParameter("name");
//			this.byId("childViewSegmentedButton").setSelectedKey(key);
		},

		onAfterShow: function(router) {
			router.navTo("childRoute1");
		},

		onSelect: function(event) {
			const router = this.getOwnerComponent().getRouter();
			router.navTo(event.getParameter("key"));
		},

//      -------------------------------------------------------
		onItemSelect: function (oEvent) 
		{
			var oItem = oEvent.getParameter("item");
			console.log(oItem.getKey());
			// login = ""
			var l_key = oItem.getKey();
			if (l_key  === "")
			{
				l_key  = "login";
			}	
			if(   l_key ==="root2" ||  l_key ==="login")
			{
	
				console.log(l_key);
//		        this.getRouter().navTo("employeeList");				
				this.byId("pageContainer").to(this.getView().createId(l_key));	
			}	
			if( l_key ==="root1" )
			{
	
				console.log(l_key);
			    const router = this.getOwnerComponent().getRouter();
			    router.navTo("hotelListRoute");				

				
			}							
			
			if( l_key ==="childRoute1" )
			{
	
				console.log(l_key);
			    const router = this.getOwnerComponent().getRouter();
			    router.navTo(l_key);				
/*				
				var oScrollContainer = sap.ui.getCore().byId("root2");
				var oCurrentView = oScrollContainer.getContent();
				if (!oCurrentView[0]) {
					var view = sap.ui.getCore().byId("id_loginPage");
					if (view === undefined) {
						view = sap.ui.view({
						type: sap.ui.core.mvc.ViewType.JS,
						viewName: "xxx.yyy.view.ProductTable"
						});
					}
					oScrollContainer.addContent(view);
				}
*/				
				
			}				

		},

		onLogOnButton: function (oEvent) 
		{
				var 	l_key  = "entry";			
				this.byId("pageContainer").to(this.getView().createId(l_key));				
		},
		
		handleUserNamePress: function (event) {
			var oPopover = new Popover({
				showHeader: false,
				placement: PlacementType.Bottom,
				content: [
					new Button({
						text: 'Feedback',
						type: ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			oPopover.openBy(event.getSource());
		},

		onSideNavButtonPress: function () {
			var oToolPage = this.byId("toolPage");
			var bSideExpanded = oToolPage.getSideExpanded();

			this._setToggleButtonTooltip(bSideExpanded);

			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip: function (bLarge) {
			var oToggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		}

	});
});