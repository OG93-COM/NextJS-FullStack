"use client"

import DataTab from "./components/DataTab";
import { GrUserNew } from "react-icons/gr";

export default function Home() {



  return (
    <div className="mx-auto flex flex-col items-center justify-items-center min-h-screen p-2 ">
      <button
      className="flex items-center gap-2 my-2 py-2 px-4 text-sm rounded-xl bg-gray-100 hover:bg-gray-200 duration-200">
        Add New Member <GrUserNew/>
      </button>
      <DataTab/>
    </div>
  );
}
