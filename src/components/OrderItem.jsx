import React, {useContext} from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';
import iconClose from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = (props) => {
  const { product, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className ={styles.OrderItem}>
        <figure>
            <Image 
              src={product?.images[0]} 
              alt={product?.title} 
              width="100%"
              height="100%"
            />
        </figure>
        <p>{product?.title}</p>
        <p>${product?.price}</p>
        <div className ={styles['OrderItem-close']}>
          <Image src={iconClose} alt="close"  onClick={() => handleRemove(indexValue)}/>
        </div>
    </div>
  );
};

export default OrderItem;