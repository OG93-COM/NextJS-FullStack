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

export type ModalType = {
    openModal:boolean,
    onClose: ()=> void,
    onOpen: ()=> void,
    isUpdate?: boolean,
    member?: any,
    children?: any,
}

export type FormData = {
    lastName:string,
    firstName:string,
    email:string,
    phone:number,
    adress:string,
    cp:number,
    city:string,
    country:string,
    image?:string,
}