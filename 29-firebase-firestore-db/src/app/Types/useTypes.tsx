export type DataType = {
    id:string,
    lastName:string,
    firstName:string,
    email:string,
    phone:number,
    adress:string,
    cp:number,
    city:string,
    country:string,
    image:string,
}

export type DbContextType = {
    members: DataType[]
}