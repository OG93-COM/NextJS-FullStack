import Image from "next/image";
import { useFirebase } from "../context/dataContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DataType } from "../Types/useTypes";


export default function DataItems({member}:{member : DataType}) {
  const imgNotFound = "https://firebasestorage.googleapis.com/v0/b/app-firestore-9d1f1.appspot.com/o/imagesProfile%2FimgNotFound.png?alt=media&token=838aa4da-4a6a-430c-aabb-c200e5758f7b"
  return (

      <tr key={member.id} >
        <td className="p-3 text-sm border">{member.id}</td>
        <td className="p-3 text-sm border">
            {member.image ? <Image src={member.image} width={40}  height={40} alt={member.firstName}/> : <Image src={imgNotFound} width={40}  height={40} alt="Image Not Found"/>}
        </td>
        <td className="p-3 text-sm border">{member.firstName}</td>
        <td className="p-3 text-sm border">{member.lastName}</td>
        <td className="p-3 text-sm border">{member.email}</td>
        <td className="p-3 text-sm border">{member.phone}</td>
        <td className="p-3 text-sm border">{member.adress}</td>
        <td className="p-3 text-sm border">{member.cp}</td>
        <td className="p-3 text-sm border">{member.city}</td>
        <td className="p-3 text-sm border">{member.country}</td>
        <td className="p-3 text-sm border">
            <div className="flex justify-center items-center gap-2">
                <button className="hover:scale-110 duration-300 cursor-pointer"><FaEdit/> </button>
                <button className="hover:scale-110 duration-300 cursor-pointer text-red-500"><FaTrash/> </button>
            </div>
        </td>
      </tr>
)}
