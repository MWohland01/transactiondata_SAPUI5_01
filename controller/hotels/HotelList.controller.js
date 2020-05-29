sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) 
{
	"use strict";	  
  return Controller.extend("sap.tnt.sample.ToolPage.controller.hotels.HotelList", 
  {

// https://help.sap.com/doc/saphelp_uiaddon20/2.05/en-US/50/897decc9504b2a875fb41d89fd254a/frameset.htm	  
	getServiceUrl: function(sServiceUrl) 
	{
	
		if (window.location.hostname == "localhost") {

//		var bIsMocked = jQuery.sap.getUriParameters().get("mock") === "true";
		var bIsMocked = "true";		
		// Start the mock server for the domain model
		if (bIsMocked) {

			jQuery.sap.require("sap.ui.core.util.MockServer");
			var oMockServer = new sap.ui.core.util.MockServer({
				rootUri : "http://mymockserver/"
			});
			oMockServer.simulate("localService/metadata.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: false
			});
			oMockServer.start();

			return "http://mymockserver/";
		} else {
			return "proxy" + sServiceUrl;
		}
	} else {
		return sServiceUrl;
	}
	},	  
	  
    onInit: function() 
	{
		
		var serviceUrl = this.getServiceUrl(
		                     "/sap/opu/odata/sap/ZUI5_USER_SRV/");

		    var oModel = new sap.ui.model.odata.v2.ODataModel(
		                 serviceUrl);

		    // attach model to view
		    this.getView().setModel(oModel);		
		
		
//				return this.getView().getModel(sName);	
//     console.log("onBeforeShow was called" + this.getView().getModel(sName));				
 //     this.getView().addEventDelegate({ 
 //       onBeforeShow: this.onBeforeShow,
 //     }, this);
    },
    
    onBeforeShow: function() {
      console.log("onBeforeShow was called"); // For https://stackoverflow.com/q/48097675/5846045
    },

	onListItemPressed : function(oEvent){
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
//	this.getRouter().navTo("hotel",{
//			this.getRouter().navTo("hotel",{
			this.getRouter().navTo("hotel",{
				employeeId : oCtx.getProperty("EmployeeID")
			});

	}



  });



});
