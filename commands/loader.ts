import {CommanderStatic} from "commander";
import * as chalk from 'chalk'
import {NewAction} from "../actions/new.action";
import {NewCommand} from "./command-new";

export default class CommandLoader{
    public static load(program:CommanderStatic) : void{
        new NewCommand(new NewAction()).load(program)

        this.invalidCommand(program)
    }

    private static invalidCommand(program: CommanderStatic) {
        program.on('command:*', () => {
            console.error(
                `\n Invalid command: ${chalk.red('%s')}`,
                program.args.join(' '),
            );
            console.log(
                `Print ${chalk.red('--help')} For Get Help.\n`,
            );
            process.exit(1);
        });
    }
}