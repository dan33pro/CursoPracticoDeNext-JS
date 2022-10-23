import ProductList from '@containers/ProductList';
import ProductDetail from '@containers/ProductDetail';
import AppContext from '@context/AppContext';
import { useContext } from 'react';
import Head from 'next/head';

export default function Home() {
  const { state } = useContext(AppContext);

  return (
    <>
    <Head>
      <title>React:Shop</title>
    </Head>
      <ProductList />
      {state.actualProduct[0] && <ProductDetail />}
    </>
  );
}
