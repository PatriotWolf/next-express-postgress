import { makeAutoObservable } from "mobx";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image?: string;
}

class ProductStore {
  productList: ProductProps[] = [
    {
      id: `wf`,
      name: `Workflow`,
      price: 199.99,
    },
    {
      id: `docgen`,
      name: `Document Generation`,
      price: 9.99,
      image: `https://i.imgflip.com/444tuw.jpg`,
    },
    {
      id: `form`,
      name: `Form`,
      price: 99.99,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default ProductStore;
