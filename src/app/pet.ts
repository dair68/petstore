export class Pet {
    constructor(
        public id: number,
        public name: string,
        public species: string,
        public sex: string,
        public details: string,
        public in_stock: boolean,
        public image: string
    ) {}
}