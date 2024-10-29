import useModal from "../hooks/useModal"
import { IoMdClose } from "react-icons/io";
import { ModalType, FormType } from "../Types/useTypes";
import {useForm, SubmitHandler} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../schema/formSchema";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/dataContext";
import {ref , uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from "../db/firebaseConfig";

export default function FormModal({onClose, openModal, isUpdate, member}: ModalType) {
    const {handleSubmit, register, reset, formState:{errors}} = useForm<FormType>({
        resolver: yupResolver(validationSchema)
    })

    //For Add File and Update File
    const [file,setFile] = useState<File | undefined>();
    const {addMember, updateMember} = useFirebase()
    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        setFile(selectedFile)
    }


    //Reset Form with data member to update with the reset
    useEffect(()=>{
        if(isUpdate && member){
            reset(member)
        }

    },[isUpdate, member, reset])

    //Function On Submit
    const onSubmit:SubmitHandler<FormType> = async (formData) => {
        try {
            // Add Image
            let imageUrl = "";
            if(file){
                const imageRef = ref(storage, `imagesProfile/${file.name}`)
                await uploadBytes(imageRef, file);
                imageUrl = await getDownloadURL(imageRef)
            }else {
                imageUrl = member?.image || "" ;
            }

            if(isUpdate && member){
                //Update Member
                updateMember({...formData, id: member.id, image:imageUrl})
                onClose()
            } else {
                //Add member
                addMember({...formData, image:imageUrl})
                onClose()
            }
        } catch (error) {
            console.log("Error Sumbmit Form ❌", error)
        }
    }

  return (
    <>
    {openModal && (
        <div className="absolute top-0 left-0 z-40 grid h-screen w-full rounded-xl place-items-center backdrop-blur-sm">
           <div className="relative bg-white z-50 max-w-[700px] m-auto min-h-[200px] shadow-lg rounded-xl border border-gray-800 p-2">
                <div onClick={onClose} className="flex justify-end cursor-pointer">
                    <IoMdClose className="self-end text-xl"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 w-[400px] p-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register("lastName")} id="lastName" className="border border-gray-300 p-2 rounded-md" placeholder="Last Name Here"/>
                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                    <label htmlFor="firstName">First Name</label>
                    <input {...register("firstName")} id="firstName" className="border border-gray-300 p-2 rounded-md" placeholder="First Name Here"/>
                    {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} id="email" className="border border-gray-300 p-2 rounded-md" placeholder="First Name Here"/>
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                    <label htmlFor="phone">Phone</label>
                    <input {...register("phone")} id="phone" className="border border-gray-300 p-2 rounded-md" placeholder="Your Phone Number Here"/>
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    <label htmlFor="adress">Adress</label>
                    <input {...register("adress")} id="adress" className="border border-gray-300 p-2 rounded-md" placeholder="Your Adress Here"/>
                    {errors.adress && <span className="text-xs text-red-500">{errors.adress.message}</span>}
                    <label htmlFor="cp">Postal</label>
                    <input {...register("cp")} id="cp" className="border border-gray-300 p-2 rounded-md" placeholder="Your Postal Code here exp : 7070"/>
                    {errors.cp && <span className="text-xs text-red-500">{errors.cp.message}</span>}
                    <label htmlFor="city">City</label>
                    <input {...register("city")} id="city" className="border border-gray-300 p-2 rounded-md" placeholder="exp : Paris"/>
                    {errors.city && <span className="text-xs text-red-500">{errors.city.message}</span>}
                    <label htmlFor="country">Country</label>
                    <input {...register("country")} id="country" className="border border-gray-300 p-2 rounded-md" placeholder="exp : France"/>
                    {errors.country && <span className="text-xs text-red-500">{errors.country.message}</span>}
                    <label htmlFor="image">Image</label>
                    <input {...register("image")} onChange={handleChangeImg} type="file" id="image"  accept="image/gif, image/jpeg, image/png, image/jpg, image/webp" className="border border-gray-300 p-2 rounded-md"/>
                    <button type="submit" className="text-white bg-slate-700 p-3 rounded-md hover:bg-slate-600 my-2">
                        {isUpdate ? "Update Member" : "Add New Membre"}
                    </button>
                </form>
           </div>
        </div>
    )}
    </>
  )
}
