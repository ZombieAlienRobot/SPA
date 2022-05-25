export type Shoe = {
    shoe_id: number;
    name: string;
    price: number;
    shoesize: Shoesize[];
    description: string;
    img: String;
};

export type Shoesize = {
    shoesize_id: number;
    size: number;
};