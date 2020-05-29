sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	
//	var _sAppModulePath = "sap/ui/demo/nav/",	
	var _sAppModulePath = "sap/tnt/sample/ToolPage/",
		_sJsonFilesModulePath = _sAppModulePath + "localService/mockdata";

				console.log("mockserver.js _sAppModulePath " + _sAppModulePath);
				console.log("mockserver.js _sJsonFilesModulePath " + _sJsonFilesModulePath);
	return {

		init: function () {
//			var sManifestUrl = jQuery.sap.getModulePath(_sAppModulePath + "manifest", ".json");
			var sManifestUrl = 	_sAppModulePath	 + "manifest.json"	
				console.log("mockserver.js sManifestUrl " + sManifestUrl);			
//			var 	sJsonFilesUrl = jQuery.sap.getModulePath(_sJsonFilesModulePath);
			var	sJsonFilesUrl = 	_sJsonFilesModulePath;	
				console.log("mockserver.js sJsonFilesUrl " + sJsonFilesUrl);			
			var 	oManifest = jQuery.sap.syncGetJSON(sManifestUrl).data;
			
				console.log("mockserver.js oManifest " + oManifest);			
			var 	oMainDataSource = oManifest["sap.app"].dataSources.employeeRemote;
				console.log("mockserver.js oMainDataSource " + oMainDataSource);
			var	sMetadataUrl = jQuery.sap.getModulePath(_sAppModulePath + oMainDataSource.settings.localUri.replace(".xml", ""), ".xml");
				console.log("mockserver.js sMetadataUrl " + sMetadataUrl);
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
