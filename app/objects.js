exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var properties = Object.getOwnPropertyNames(obj);

    list = properties.map(function(prop){
      return prop + ": " + obj[prop];
    });

    return list;
  }
};
