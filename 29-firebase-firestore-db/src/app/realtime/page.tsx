
export default function Realtime() {
  return (
    <div className="p-4 max-w-[600px] mx-auto">
      <form className="mb-8">
        <label>Add New Todo to Realtime Database from Firebase</label>
        <input type="text" placeholder="add todo here ..." className="w-full border p-2 my-2 rounded-md"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 w-full" >Add New Todo</button>
      </form>
    </div>
  )
}
