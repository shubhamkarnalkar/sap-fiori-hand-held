import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace handheldd.controller
 */
export default class HomeScreen extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {}

  public goToTransactions(): void {
    MessageToast.show("Hey there");
    // let Oml: HomeScreenModel = {
    //     input: ""
    // };
    // let oModel = new JSONModel();
    // this.getView()?.setModel(oModel: oModel);
  }
}
