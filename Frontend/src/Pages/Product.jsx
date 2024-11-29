import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllProducts } from '../Redux/Shop/shopSlice';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

function Product() {
  const all_products = useSelector(selectAllProducts);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  // Check if the product exists
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
    </div>
  );
}

export default Product;
