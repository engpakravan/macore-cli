import {AbstractAction} from "./abstract-action";
import {INewProject, Input} from "../commands/interface.command";
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'

export class NewAction extends AbstractAction {

    public async handle(inputs: Input[], options: Input[]) {
        inquirer
            .prompt([
                { type: 'input', name: 'projectName', message: 'Choose a Name for Project' } ,
                { type: 'list', name: 'database', message: 'Chose Your Database : ' , choices : ["nothing" , "mongo" , "mysql" , "postgres"] },
                { type: 'list', name: 'caching', message: 'Chose Your Caching : ' , choices : ["nothing" , "redis"] }
            ])
            .then((newProjectData : INewProject) => {
                console.log(`
------------------------------------------------------------------
${chalk.bgGreen("You're Application has Configured !!!")}
------------------------------------------------------------------
* Project Name : ${chalk.green(newProjectData.projectName)}
* Database Name : ${chalk.green(newProjectData.database)}
* Caching Name/Method : ${chalk.green(newProjectData.caching)}
                `)
                console.log(newProjectData)
            })
    }

}