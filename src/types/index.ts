export type ShoeType = {
  shoe_id: number
  name: string
  price:number
  shoesize: ShoesizeType[]
  description: string
  img: string
}

export type ShoesizeType = {
  shoesize_id: number
  shoe_id: number
  size: number
}