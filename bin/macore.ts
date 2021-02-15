import * as commander from 'commander'
import {CommanderStatic} from 'commander'
import CommandLoader from "../commands/loader";

(() => {
    const program : CommanderStatic = commander
        .version(
            require("../../package.json").version || "0.1",
            '-v --version' ,
            'Show Current Version')
        .helpOption('-h --help' , 'Show Help Menu')

    CommandLoader.load(program)
    commander.parse(process.argv)
})()