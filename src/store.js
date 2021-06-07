import {observable, action} from 'mobx';
import {createContext} from 'react';

class Store {
  @observable realPhoto = [];
  @observable showPhoto = {};

  @action changeRealPhoto(realPhoto) {
    this.realPhoto = realPhoto;
  }

  @action changeShowPhoto(showPhoto) {
    this.showPhoto = showPhoto;
  }
}

export const StoreContext = createContext(new Store());
