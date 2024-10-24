import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addProduct } from '../redux/actions/productsActions';
import { toast } from "react-hot-toast";

const AddProduct = () => {
//   const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price: Number(price),
    };
    // dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice('');
    toast.success("Added Successfully");
  };

  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit}>
      <div className='mb-10px border-solid' >
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className='mb-10px border-solid'>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className='mb-10px border-solid'>
        <label>Price:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <button className='p-5px bg-green-700 text-white border-none cursor-pointer' type="submit">Add Product</button>
    </form>
    </div>
  );
};

export default AddProduct;
