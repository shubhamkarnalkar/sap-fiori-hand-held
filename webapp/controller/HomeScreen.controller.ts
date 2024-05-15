import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace handheldd.controller
 */
export default class HomeScreen extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public goToTransactions(): void{
        alert("Going to tranasctions button pressed");
    }
}