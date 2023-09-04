class StorageValue {
  static isUpdateMenu = false;

  static updateMenu() {
    StorageValue.isUpdateMenu = !StorageValue.isUpdateMenu;
  }
}

export default StorageValue;
