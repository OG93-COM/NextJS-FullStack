"use client"

import DataTab from "./components/DataTab";
import { GrUserNew } from "react-icons/gr";
import useModal from "./hooks/useModal";
import FormModal from "./components/FormModal";
import { DataType, FormType } from "./Types/useTypes";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export default function Home() {

  const {onOpen, onClose, openModal} = useModal()

  return (
    <div className="mx-auto flex flex-col items-center justify-items-center min-h-screen p-2 ">
      <button
      onClick={onOpen}
      className="flex items-center gap-2 my-2 py-2 px-4 text-sm rounded-xl bg-gray-100 hover:bg-gray-200 duration-200">
        <span>Add New Member</span> <GrUserNew/>
      </button>
      <DataTab/>
      <FormModal onOpen={onOpen} onClose={onClose} openModal={openModal} />

      <ToastContainer/>
    </div>
  );
}
