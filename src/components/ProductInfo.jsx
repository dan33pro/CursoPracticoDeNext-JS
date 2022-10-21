import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';
import btAddCart from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  const { state, addToCart } = useContext(AppContext);
  const payload = state.actualProduct[0] ? state.actualProduct[1] : null;

  return (
    <div className ={styles.ProductInfo}>
        <p>${payload.price}</p>
        <p>{payload.title}</p>
        <p>
          {payload.description}
        </p>
        <button className ={`${styles['primary-button']} ${styles['add-to-cart-button']}`} onClick={() => addToCart(payload)}>
            <Image src={btAddCart} alt="add to cart" />
            Add to cart
        </button>
    </div>
  );
}

export default ProductInfo;