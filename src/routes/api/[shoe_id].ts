import prisma from "$lib/prisma"

export type Shoe = {
  shoe_id: number,
  name: string,
  price: number,
  shoesize: Shoesize[]
  description: string
  img: string
}

export type Shoesize = {
  shoesize_id: number,
  shoe_id: number,
  size: number
}

export async function get(params:Shoe) {
    console.log(params);
    
    const shoe = await prisma.shoe.findUnique({
        where: {
            shoe_id: params.shoe_id
        }
    })

    if(shoe) {
        return {
            body: { shoe }
        };
    }

    return {
        status: 404
    };
}