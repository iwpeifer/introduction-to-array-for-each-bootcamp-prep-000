var doToElementsInArray = (array, callback) => array.forEach(callback);

var changeCompletely = (element, index, array) => {
  array[index] = (Math.random() * 100).toString() + '!!!';
}

var animals = ["dog", "fish", "cat"];

doToElentsInArray(animals, changeCompletely);

console.log(animals);
