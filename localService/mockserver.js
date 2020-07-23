sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	var _sAppModulePath       = "sap/ui/core/sample/RoutingNestedComponent/",
		_sSuppliersModulePath  = "sap/ui/core/sample/RoutingNestedComponent/reuse/suppliers/",
//		_sJsonFilesModulePath = _sAppModulePath + "sap/ui/core/sample/RoutingNestedComponent/localService/mockdata";	
		_sJsonFilesModulePath = _sAppModulePath + "localService/mockdata";

	return {

		init: function () 
		{
			
			var sManifestUrl = jQuery.sap.getModulePath(_sSuppliersModulePath + "manifest", ".json"),
				sJsonFilesUrl = jQuery.sap.getModulePath(_sJsonFilesModulePath),
				oManifest = jQuery.sap.syncGetJSON(sManifestUrl).data,
				oMainDataSource = oManifest["sap.app"].dataSources.employeeRemote,
//				sMetadataUrl = jQuery.sap.getModulePath(_sAppModulePath + oMainDataSource.settings.localUri.replace(".xml", ""), ".xml");
				sMetadataUrl = jQuery.sap.getModulePath("sap/ui/core/sample/RoutingNestedComponent/localService/metadata.xml".replace(".xml", ""), ".xml");				

console.log("mockserver init _sAppModulePath : " + _sAppModulePath);
console.log("mockserver init _sSuppliersModulePath : " + _sSuppliersModulePath);
console.log("mockserver init _sJsonFilesModulePath : " + _sJsonFilesModulePath);
console.log("mockserver init sJsonFilesUrl : " + sJsonFilesUrl);
console.log("mockserver init oMainDataSource : " + oMainDataSource);
console.log("mockserver init sMetadataUrl : " + sMetadataUrl);
			// create
			var oMockServer = new MockServer({
				rootUri: oMainDataSource.uri
			});

			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 1000
			});

			// simulate
			oMockServer.simulate(sMetadataUrl, {
				sMockdataBaseUrl : sJsonFilesUrl
			});

			// start
			oMockServer.start();
		}
	};

});
