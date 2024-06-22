"use client";
import React, {useState} from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible";
import { FaPlus} from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table";
import Modal from '../../../../../components/dashboard/Modal'
import Form from '../../../../../components/dashboard/Form'



export default function Inventory() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (data) => {
    setFormData(prev => [...prev, data]);
    console.log('Form submitted:', data);
    handleCloseModal();
  };
  return (
    <div>
      <div className='flex justify-around p-10'>
        <div>
        <Collapsible>
  <CollapsibleTrigger>Raw Material</CollapsibleTrigger>
  {formData.map((data,index)=>
  <CollapsibleContent key={index}>
  {data.item}
  </CollapsibleContent>
  )}
</Collapsible>
        </div>
        <div>
        <button type="button" className="flex gap-3 font-bold ms-3 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}><FaPlus size={20} className="cursor-pointer" /> ADD ITEM
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <Form onSubmit={handleFormSubmit} />
      </Modal>
      </button>
        </div>
      </div>
      
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">S.No</TableHead>
      <TableHead>Item</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Purchased</TableHead>
      <TableHead>Used</TableHead>
      <TableHead className="text-right">Available</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {formData.map((data, index) => (
    <TableRow key={index}>
      <TableCell className="font-medium">{index+1}</TableCell>
      <TableCell>{data.item}</TableCell>
      <TableCell>{data.date}</TableCell>
      <TableCell>{data.purchased}</TableCell>
      <TableCell>{data.purchased}</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  ))}
  </TableBody>
</Table>

    </div>
  )
}
 