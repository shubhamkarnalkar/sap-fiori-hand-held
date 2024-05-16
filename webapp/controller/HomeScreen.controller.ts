import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace handheldd.controller.HomeScreen
 */
export default class HomeScreen extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    const data = {
      recipient: {
        name: ""
      }
    };
    const dataModel = new JSONModel(data);
    this.getView()?.setModel(dataModel);
  }

  public goToTransactions(): void {
    MessageToast.show("Hey there");
  }
}
