import React, { useEffect, useState } from 'react';
import './View.css';
import axiosInstance from '../../axios/axios';
import { useParams } from 'react-router-dom';

function View() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async (productId) => {
      try {
        setLoading(true); // Set loading state to true while fetching
        const response = await axiosInstance.get(`product/${productId}`);
        setProduct(response.data);
        setLoading(false); 
      } catch (error) {
        setLoading(false); 
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };
    fetchData(productId);
  }, [productId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{product.createAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{product.user.userName}</p>
          <p>{product.user.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
