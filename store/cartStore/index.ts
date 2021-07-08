import { makeAutoObservable } from "mobx";
import { ProductProps } from "../productStore";
import ShoppingCartEntry from "./cartEntry";

class CartStore {
  entryList: ShoppingCartEntry[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: ProductProps): void {
    const i = this.entryList.find((entry) => entry.product?.id === product.id);
    if (i === undefined) {
      const cartEntry = new ShoppingCartEntry(product);
      this.entryList.push(cartEntry);
    }
  }
  removeFromCart(id: string): void {
    this.entryList = this.entryList.filter((entry) => {
      return entry.product.id !== id;
    });
  }
  get total(): number {
    return this.entryList.reduce((acc, entry) => {
      return acc + entry.price;
    }, 0);
  }
}

export default CartStore;
