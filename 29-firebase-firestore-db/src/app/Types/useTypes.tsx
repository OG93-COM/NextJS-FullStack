// Data Type Form
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

// Type of our CRUD
export type DbContextType = {
    members: DataType[],
    addMember: (membersData: Omit<DataType, "id"> & {image:string} ) => Promise<void>,
    updateMember: (member : DataType) => Promise<void>,
    deleteMember: (id: string) => Promise<void>,
}

// Modal Types
export type ModalType = {
    openModal:boolean,
    onClose: ()=> void,
    onOpen?: ()=> void,
    member?: any,
    isUpdate?: boolean,
}

// Type of Form
export type FormType = {
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

// Type of TODOS
export type Todos = {
    id:string,
    textTodo:string,
}