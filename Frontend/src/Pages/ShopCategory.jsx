import React from "react";
import "./CSS/ShopCategory.css";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../Redux/Shop/shopSlice"; // Selector from Redux
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Item from "../Components/Items/Item";


function ShopCategory({ banner, category }) {
  const all_product = useSelector(selectAllProducts); // Fetch products from Redux store

  return (
    <div className="shop-category">
      <img src={banner} alt={`${category} banner`} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of {all_product.filter(item => item.category === category).length} Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) =>
          item.category === category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default ShopCategory;
