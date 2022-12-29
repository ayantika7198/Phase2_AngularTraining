export enum Category{
    jeans='jeans',
    grocery='grocery',
    top='top',
    shirt='shirt',
    food='food'
}
export interface IProduct{
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    category: Category,
    quantity: number,
    rating:number
}