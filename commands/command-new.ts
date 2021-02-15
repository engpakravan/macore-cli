import {AbstractCommand} from "./abstract.command";
import {CommanderStatic , Command} from "commander";

export class NewCommand extends AbstractCommand {
    load(program: CommanderStatic) {
        console.log("Commandnew")
        program
            .command("new [name]")
            .alias('n')
            .description('Create New Macore Application')
        .action(async (name:string , command : Command) => {
            console.log(name , command)
            await this.action.handle(
                [{name:"test" , value : "testVal" , options : "testOp"}] ,
               [{name : "testNameOp" , value : "testValOp"}]
            )
        })
    }
}