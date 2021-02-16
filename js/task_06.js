function Storage(items) {
    this.items = items;
}

Storage.prototype.getItems = function getItems() {
    return this.items;
}

Storage.prototype.addItem = function addItem(newItem) {
    return this.items.push(newItem);
}

Storage.prototype.removeItem = function removeItem(item) {
    const index = this.items.indexOf(item);
    return this.items.splice(index, 1);
}

console.log(Storage.prototype.hasOwnProperty('getItems'));
console.log(Storage.prototype.hasOwnProperty('addItem'));
console.log(Storage.prototype.hasOwnProperty('removeItem'));

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]