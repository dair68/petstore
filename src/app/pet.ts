export class Pet {
    _id: string;
    name: string;
    species: string;
    sex: string;
    details: string;
    in_stock: boolean;
    image: string;
    price: number;

    constructor(
    ) {
        this.name = '';
        this.species = '';
        this.sex = '';
        this.details = '';
        this.in_stock = true;
        this.image = '';
        this.price = 0;
    }
}