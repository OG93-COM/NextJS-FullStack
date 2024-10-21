import useModal from "../hooks/useModal"
import { IoMdClose } from "react-icons/io";
import { ModalType } from "../Types/useTypes";


export default function FormModal({onClose, openModal, isUpdate}: ModalType) {
    
  return (
    <>
    {openModal && (
        <div className="absolute top-0 left-0 z-40 grid h-screen w-full rounded-xl place-items-center backdrop-blur-sm">
           <div className="relative bg-white z-50 max-w-[700px] m-auto min-h-[200px] shadow-lg rounded-xl border border-gray-800 p-2">
                <div onClick={onClose} className="flex justify-end cursor-pointer">
                    <IoMdClose className="self-end text-xl"/>
                </div>
                <form className="flex flex-col gap-1 w-[400px] p-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="border border-gray-300 p-2 rounded-md" placeholder="Last Name Here"/>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="border border-gray-300 p-2 rounded-md" placeholder="First Name Here"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="border border-gray-300 p-2 rounded-md" placeholder="First Name Here"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" className="border border-gray-300 p-2 rounded-md" placeholder="Your Phone Number Here"/>
                    <label htmlFor="adress">Adress</label>
                    <input type="text" id="adress" className="border border-gray-300 p-2 rounded-md" placeholder="Your Adress Here"/>
                    <label htmlFor="postal">Postal</label>
                    <input type="text" id="postal" className="border border-gray-300 p-2 rounded-md" placeholder="Your Postal Code here exp : 7070"/>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="border border-gray-300 p-2 rounded-md" placeholder="exp : Paris"/>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" className="border border-gray-300 p-2 rounded-md" placeholder="exp : France"/>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image"  accept="image/gif, image/jpeg, image/png, image/jpg, image/webp" className="border border-gray-300 p-2 rounded-md"/>
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
