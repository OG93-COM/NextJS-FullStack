import { useFirebase } from "../context/dataContext";
import { FaEdit, FaTrash } from "react-icons/fa";


export default function DataItems() {
  const { members } = useFirebase();
  return (
  <>
  {members && members.map((member) => (
      <tr>
      <td>{member.id}</td>
      <td>{member.image}</td>
      <td>{member.firstName}</td>
      <td>{member.lastName}</td>
      <td>{member.email}</td>
      <td>{member.phone}</td>
      <td>{member.adress}</td>
      <td>{member.cp}</td>
      <td>{member.city}</td>
      <td>{member.country}</td>
      <td>
      <div className="flex justify-center items-center gap-2">
      <FaEdit />
      <FaTrash />
      </div>
      </td>
      </tr>
  )
  )}
  </>)
}
