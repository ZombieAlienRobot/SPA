export type Shoe = {
    name: string;
    price: number;
    shoesize: Shoesize[];
    description: string;
    img: String;
};

export type Shoesize = {
    size: number;
};