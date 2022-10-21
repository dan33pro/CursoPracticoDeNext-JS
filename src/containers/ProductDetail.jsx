import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';
import ProductInfo from '@components/ProductInfo';
import iconClose from '@icons/icon_close.png';

import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
  const { state, removeFromActualProduct } = useContext(AppContext);
  const payload = state.actualProduct;

  const handleToggleProductDetail = () => {
    removeFromActualProduct();
  }

  return (
    <aside className ={styles.ProductDetail}>
        <div className ={styles['ProductDetail-close']} onClick={ () => handleToggleProductDetail()}>
            <Image src={iconClose} alt="close" />
        </div>
        <Image src={payload[0] && payload[1].images[0]} alt={payload[1].title} />
        <ProductInfo />
    </aside>
  );
}

export default ProductDetail;