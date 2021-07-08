import React from "react";

class RootStore {
  obj: {
    data: string;
  };
  constructor() {
    this.obj = { data: "foo" };
  }
}

const StoresContext = React.createContext<RootStore>(new RootStore());

export const useStores = (): RootStore => React.useContext(StoresContext);

export default RootStore;
