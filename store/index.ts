import React from "react";
import CartStore from "./cartStore";
import ProductStore from "./productStore";

class RootStore {
  productStore: ProductStore;
  cartStore: CartStore;
  constructor() {
    this.productStore = new ProductStore();
    this.cartStore = new CartStore();
  }
}

const StoresContext = React.createContext<RootStore>(new RootStore());

export const useStores = (): RootStore => React.useContext(StoresContext);

export default RootStore;
