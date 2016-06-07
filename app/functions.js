exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    var func = function (str2) {
      return str + ", " + str2;
    }

    return func;
  },

  makeClosures: function(arr, fn) {
    var funcs = [];
    arr.forEach(function (el){
      var func = function () {
        return fn(el);
      }
      funcs.push(func);
    });

    return funcs;
  },

  partial: function(fn, str1, str2) {
    var func = function (str3) {
      return fn(str1, str2, str3);
    }

    return func;
  },

  useArguments: function() {
    var sum = 0;
    [...arguments].forEach(function (arg){
      sum += arg;
    });

    return sum;
  },

  callIt: function(fn) {
    var args = [...arguments];
    args.splice(0, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var firstArgs = [...arguments];
    firstArgs.splice(0, 1);

    var func = function (){
      var secondArgs = firstArgs.concat([...arguments]);
      return fn.apply(null, secondArgs);
    }

    return func;
  },

  curryIt: function(fn) {
    var args = [];

    function _curriedFunc(arg) {
      args.push(arg);

      if (fn.length === args.length){
        return fn.apply(null, args);
      } else {
        return _curriedFunc;
      }
    }

    return _curriedFunc;
  }
};
