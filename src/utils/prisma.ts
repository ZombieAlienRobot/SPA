import prisma from "src/lib/prisma";

export async function getShoes() {
    const shoes = await prisma.shoe.findMany({
        include: {shoesize: true},
        orderBy: {name: 'asc'}
    })

    return shoes.map((shoe) => {
        return {
            shoe_id: shoe.shoe_id,
            name: shoe.name,
            price: shoe.price,
            description: shoe.description,
            img: shoe.img,
            shoesize: shoe.shoesize
        }
    })
    
}

export async function getShoe(params) {

    const shoe = await prisma.shoe.findUnique({
        where: {shoe_id: params.shoe_id},
        include: {shoesize: true}
    })
    
}