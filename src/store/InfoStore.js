import { makeAutoObservable, runInAction } from "mobx";
import getValue from "../utils/storage/getValue";
import storeValue from "../utils/storage/storeValue";


class store {

  places = [];

  level = 0;

  avatar = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getPlaces() {
    const array = await getValue("PLACES", [])
    runInAction(() => {
      this.places = array
      this.level = Math.floor(array.length / 5)
    })
  }

  addPlace(id) {
    runInAction(() => {
      this.level = Math.floor([id, ...this.places].length / 5)
      this.places = [id, ...this.places]
    })
    storeValue("PLACES", this.places)
  }

  async getAvatar() {
    const avatar = await getValue("AVATAR", null)
    runInAction(() => {
      this.avatar = avatar;
    })
  }

  addAvatar(uri) {
    runInAction(() => {
      this.avatar = uri
    })
    storeValue("AVATAR", uri)
  }

}

const InfoStore = new store();

export default InfoStore;
