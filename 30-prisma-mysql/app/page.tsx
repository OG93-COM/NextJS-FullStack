import AddForm from "./Components/AddForm";
import TaskTab from "./Components/TaskTab";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <AddForm/>
      <TaskTab/>
    </div>
  );
}
