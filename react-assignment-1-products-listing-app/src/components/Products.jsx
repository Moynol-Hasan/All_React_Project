/* eslint-disable react/prop-types */

import { v4 as uuidv4 } from 'uuid';

const Products = (props) => {
  const product = props.product;

  const productList = product.map((pro) => (
    <article className="product" key={uuidv4()}>
      <img className="product_img" src={pro.image} />
      <div className="product__details">
        <h4 className="product__title">{pro.title}</h4>
        <p className="product__price">Price: ${pro.price}</p>
        <p className="product__rating">Rating: {pro.rating.rate}/5</p>
        <p className="product__desc">Description: {pro.description}</p>
        <button className="product_btn btn">Add to cart</button>
      </div>
    </article>
  ));

  return <div className="products">{productList}</div>;
};

export default Products;
