import { makeAutoObservable } from "mobx";
import { ProductProps } from "store/productStore";
class ShoppingCartEntry {
  product: ProductProps;
  amount = 1;

  constructor(product: ProductProps) {
    makeAutoObservable(this);
    this.product = product;
  }

  increaseAmount(): void {
    this.amount++;
  }

  decreaseAmount(): void {
    this.amount--;
  }

  removeFromCart(): void {
    this.amount = 0;
  }

  get price(): number {
    return this.product ? this.product.price * this.amount : 0;
  }
}

export default ShoppingCartEntry;
