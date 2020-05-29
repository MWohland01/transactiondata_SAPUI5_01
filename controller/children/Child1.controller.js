sap.ui.define([
  "sap/ui/core/mvc/Controller",
], function(Controller) {
  "use strict";

  return Controller.extend("sap.tnt.sample.ToolPage.controller.children.Child1", {
    onInit: function() {
      this.getView().addEventDelegate({ 
        onBeforeShow: this.onBeforeShow,
      }, this);
    },
    
    onBeforeShow: function() {
      console.log("onBeforeShow was called"); // For https://stackoverflow.com/q/48097675/5846045
    },

  });
});