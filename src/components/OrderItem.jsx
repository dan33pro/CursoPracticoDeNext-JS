import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = (props) => {
  const { product, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  }

  return (
    <div className ={styles.OrderItem}>
        <figure>
            <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={iconClose} alt="close" className ="OrderItem-close"  onClick={() => handleRemove(indexValue)}/>
    </div>
  );
}

export default OrderItem;