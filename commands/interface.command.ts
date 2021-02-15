export interface Input {
    name : string
    value : boolean|string|any
    options?:any
}

export interface INewProject {
    projectName : string
    database : "mongo" | "postgres" | "mysql" | "nothing"
    caching : "redis" | "nothing"
}