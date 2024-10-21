import { useFirebase } from "../context/dataContext"
import DataItems from "./DataItems"


export default function DataTab() {
    const {members} = useFirebase()
    return (
    <div>DataTab

        <DataItems/>
    </div>
  )
}
