"use client";
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ item: '', date: '', purchased:''});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
      <div className='flex gap-7 justify-items-center'>
        <label>Item</label>
        <input type="text" name="item" value={formData.item} onChange={handleChange} required className='border-2 border-black'/>
      </div>
      <div className='flex gap-7 justify-items-center'>
        <label>Date</label>
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required className='border-2 border-black'/>
      </div>
      <div className='flex gap-7 justify-items-center'>
        <label>Purchased</label>
        <input type="number" name="purchased" value={formData.purchased} onChange={handleChange} required className='border-2 border-black'/>
      </div>
      <button type="submit" className='border-2 py-4 border-black'>Submit</button>
    </form>
  );
};

export default Form;
