sap.ui.define(
  ['com/sap/usingEvents/controller/BaseController', 'sap/m/MessageBox'],
  function (Controller, MessageBox) {
    'use strict'

    return Controller.extend('com.sap.usingEvents.controller.MainView', {
      onInit: function () {
        this.getView().byId('idImg1').setSrc('./img/O_UI5_V_noBG.png')
      },
      onImg1Press: function () {
        MessageBox.information('UI5 Logo Clicked', {
          icon: MessageBox.Icon.INFORMATION,
          title: 'Information'
        })

        // sap.m.MessageToast.show('icon clicked')
      }
    })
  }
)
