const arr = [{ name: "a" }, { name: "b" }, { name: "a" }];
Array.prototype.unique = function () {
  const set = new Set(this.map((item) => item.name));
  return Array.from(set).map((item) => ({ name: item }));
};
console.log(arr.unique());
