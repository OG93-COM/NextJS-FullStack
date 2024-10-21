import { useFirebase } from "../context/dataContext";
import DataItems from "./DataItems";

export default function DataTab() {
    const { members } = useFirebase();
  return (
    <table className="shadow-lg rounded-lg divide-x divide-y">
      <thead className="bg-slate-800 text-white rounded-lg">
        <tr>
          <th className="p-2 text-sm border">Id</th>
          <th className="p-2 text-sm border">Image</th>
          <th className="p-2 text-sm border">First Name</th>
          <th className="p-2 text-sm border">Last Name</th>
          <th className="p-2 text-sm border">Email</th>
          <th className="p-2 text-sm border">Phone</th>
          <th className="p-2 text-sm border">Adress</th>
          <th className="p-2 text-sm border">Postal</th>
          <th className="p-2 text-sm border">City</th>
          <th className="p-2 text-sm border">Country</th>
          <th className="p-2 text-sm border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member => (
            <DataItems key={member.id} member={member}/>
        ))}
      </tbody>
    </table>
  );
}
