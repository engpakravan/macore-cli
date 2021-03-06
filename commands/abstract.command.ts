import {AbstractAction} from "../actions/abstract-action";
import {CommanderStatic} from "commander";

export abstract class AbstractCommand {
    constructor(protected action:AbstractAction) {}

    public abstract load(program : CommanderStatic) : void
}