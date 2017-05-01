import React from 'react';

export default (props) => {
  return (
    <div className="Products">
      <h2>Products</h2>
      <ul>
        { props.products.map((product, i) => ( <li key={i}>{ product.name }</li> )) }
      </ul>
    </div>
  );
};