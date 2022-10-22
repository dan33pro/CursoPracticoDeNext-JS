import React, { useContext, useState } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';
import btAddCart from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart, addToActualProduct } = useContext(AppContext);

  const handleToggleProductInfo = (item1) => {
    addToActualProduct(item1);
  }

  const handleClick = (item2) => {
    console.log(item2);
    addToCart(item2);
  };

  return (
    <div className={styles.ProductItem}>
      <Image
        src={product.images[0]}
        alt={product.title}
        width="100%"
        height="100%"
        layout="responsive"
        onClick={() => handleToggleProductInfo(product)}
      />
      <div className={styles['ProductItem-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={btAddCart} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;