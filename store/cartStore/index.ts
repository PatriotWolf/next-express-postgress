import { makeAutoObservable } from "mobx";
import { ProductProps } from "../productStore";
import ShoppingCartEntry from "./cartEntry";

export interface PromotionRedeemedProps {
  name: string;
  effect: string;
}

class CartStore {
  entryList: ShoppingCartEntry[] = [];
  promotionRedeemedList: PromotionRedeemedProps[] = [];
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

  redeemPromo(code: string): void {
    if (code === `FF9543D1`) {
      const promotionStoredData = this.promotionRedeemedList.find(
        (promotionData) => promotionData.name === code
      );
      //guard approach to avoid duplicate promotion
      if (promotionStoredData) {
        return void 0;
      }
      this.promotionRedeemedList.push({
        name: `FF9543D1`,
        effect: `Reduces Document Generation price to $8.99 a unit when at least 10 documents are purchased`,
      });
      const i = this.entryList.find((entry) => entry.product?.id === `docgen`);
      if (i !== undefined) {
        i.discount = () => {
          if (i.amount >= 10) {
            return 8.99 * i.amount;
          }
          return 0;
        };
      }
    }
  }

  get total(): number {
    return this.entryList.reduce((acc, entry) => {
      return acc + entry.price;
    }, 0);
  }
}

export default CartStore;
