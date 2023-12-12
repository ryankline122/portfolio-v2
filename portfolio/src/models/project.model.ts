export class Project {
    constructor (
        public image: string,
        public title: string,
        public description: string,
        public technologies: string[],
        public source?: string
    ){}
}