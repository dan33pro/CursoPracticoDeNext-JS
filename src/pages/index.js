import ProductList from "@containers/ProductList";
import ProductDetail from "@containers/ProductDetail";
import AppContext from "@context/AppContext";
import { useContext } from "react";

export default function Home() {
  const {state} = useContext(AppContext);

  return (
    <>
      <ProductList />
      { state.actualProduct[0] && <ProductDetail /> }
    </>
  );
};
