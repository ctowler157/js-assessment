exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item)
      {
        index = i;
      }
    }

    return index;
  },

  sum: function(arr) {
    var sum = 0;
    arr.forEach(function (num){
      sum += num;
    })

    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    return this.remove(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function (el) {
      if (el === item){
        count++;
      }
    });

    return count;
  },

  duplicates: function(arr) {
    var count = new Map();
    arr.forEach(function (el){
      if (count.get(el)){
        count.set(el, count.get(el) + 1);
      } else {
        count.set(el, 1);
      }
    });
    var dups = [];
    count.forEach(function (val, key){
      if (val > 1) {
        dups.push(key);
      }
    });

    return dups;
  },

  square: function(arr) {
    var squares = [];
    arr.forEach(function (el){
      squares.push(el * el);
    });

    return squares;
  },

  findAllOccurrences: function(arr, target) {
    var indices = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === target){
        indices.push(i);
      }
    }

    return indices;
  }
};
