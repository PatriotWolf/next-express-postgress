import React from "react";
import ProductStore from "./productStore";

class RootStore {
  productStore: ProductStore;
  constructor() {
    this.productStore = new ProductStore();
  }
}

const StoresContext = React.createContext<RootStore>(new RootStore());

export const useStores = (): RootStore => React.useContext(StoresContext);

export default RootStore;
