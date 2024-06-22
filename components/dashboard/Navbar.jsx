"use client";
import React, {useState} from 'react';
import { TbHistoryToggle } from "react-icons/tb";
import { IoSearch,IoSettingsOutline } from "react-icons/io5";
import { FaPlus, FaUserGroup  } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import  Link  from "next/link";
import Modal from '../dashboard/Modal'
import Form from '../dashboard/Form';



export default function Navbar() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = data => {
    console.log('Form submitted:', data);
    handleCloseModal();
  };
  return (
    <div className=' z-20 bg-slate-300 h-14 flex items-center justify-between px-7 border-b border-slate-200 shadow-lg'>
        <div className='flex gap-5'>
          <button><TbHistoryToggle size={34} className=''/></button>
          
<form className=" max-w-lg mx-auto">
    <div className="flex">
        {/*<label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>*/}
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full rounded-lg z-20 text-sm hover:w-96 text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {/*<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>*/}
  <IoSearch size={20}/>

                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

        </div>
        <div className='flex gap-5'>
        
        
        <button type="button" className="ms-3 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}><FaPlus size={20} className="cursor-pointer" />
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <Form onSubmit={handleFormSubmit} />
      </Modal>
      </button>
        <button><IoMdNotificationsOutline size={25} /></button>
        <button><FaUserGroup size={24.5}/></button>
        <button><IoSettingsOutline size={25} /></button>
        <button className='flex gap-1 border-2 justify-center items-center px-2'><span>Garat</span>
        <GoChevronDown/></button>
        {/*User Image*/}
        <button><TfiLayoutGrid3Alt size={24}/>
        </button>
        </div>
        
    </div>
  )
}