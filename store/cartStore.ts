import { makeAutoObservable } from "mobx";
import { ProductProps } from "./productStore";

class CartStore {
  entryList: ProductProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: ProductProps): void {
    const i = this.entryList.find((entry) => entry.id === product.id);
    if (i === undefined) {
      this.entryList.push(product);
    }
  }
}

export default CartStore;
