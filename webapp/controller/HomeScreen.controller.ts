import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import Dialog from "sap/m/Dialog";

/**
 * @namespace handheldd.controller
 */
export default class HomeScreen extends Controller {
  private dialog: Dialog;
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    const viewModel = new JSONModel({
      currency: "EUR"
    });
    this.getView()?.setModel(viewModel, "view");
  }

  public onTransactionsButtonPress(): void {
    MessageToast.show("Hey there");
  }
  async onOpenDialog(): Promise<void> {
    this.dialog ??= await <Promise<Dialog>>this.loadFragment({
      name: "handheldd.view.HelloDialog"
    });
    this.dialog.open();
  }

  onCloseDialog(): void {
    // note: We don't need to chain to the pDialog promise, since this event-handler
    // is only called from within the loaded dialog itself.
    (<Dialog>this.byId("helloDialog"))?.close();
  }
}
