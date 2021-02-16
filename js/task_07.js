  
function StringBuilder(baseValue) {
    this.value = baseValue;
}

StringBuilder.prototype.getValue = function getValue() {
    return this.value;
}

StringBuilder.prototype.padStart = function padStart(str) {
    this.value = `${str}` + `${this.value}`;
}

StringBuilder.prototype.padEnd = function padEnd(str) {
    this.value = `${this.value}` + `${str}`;
}

StringBuilder.prototype.padBoth = function padBoth(str) {
    this.value = `${str}` + `${this.value}` + `${str}`;
}

console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
console.log(StringBuilder.prototype.hasOwnProperty('padEnd'));
console.log(StringBuilder.prototype.hasOwnProperty('padStart'));
console.log(StringBuilder.prototype.hasOwnProperty('padBoth'));


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='