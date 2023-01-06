export enum Category{
    jeans='jeans',
    grocery='grocery',
    top='top',
    shirt='shirt',
    food='food'
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
    qty:number;

}