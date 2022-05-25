export type Shoe = {
    shoeName: string;
    price: number;
    shoesize: Shoesize[];
    description: string;
    img: String;
};

export type Shoesize = {
    size: number;
};