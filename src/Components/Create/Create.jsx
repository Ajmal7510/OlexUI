import React, { Fragment, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import axiosInstance from '../../axios/axios';
import { useAuth } from '../../Security/AouthContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const navigate=useNavigate()
  const authContext=useAuth()
  const email = authContext.user ? authContext.user.email : ''; // Check if user exists before accessing email




  useEffect(() => {
    
    if(authContext.user===null){
      navigate("/login")
    }
  }, [navigate,authContext.user]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);




  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('image', image);
      formData.append('email',email)
  
      const response = await axiosInstance.post('/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  

      console.log('Product created:', response.data);
  
     
      setName('');
      setCategory('');
      setPrice('');
      setImage(null);

      document.getElementById('imageInput').value = '';
      navigate('')
    } catch (error) {
      // Handle error
      console.error('Error creating product:', error);
    }
  };
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
            />
            <br />
            <br />
            <input type="file" onChange={handleImageChange} />
            <br />
            <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <button className="uploadBtn" type="submit">Upload and Submit</button>
          </form>
    
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
