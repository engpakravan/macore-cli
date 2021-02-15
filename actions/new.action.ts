import {AbstractAction} from "./abstract-action";
import {Input} from "../commands/interface.command";

export class NewAction extends AbstractAction {

    public async handle(inputs: Input[], options: Input[]) {
        console.log("Everything is Ok Let's Create New Macore Application")
    }

}