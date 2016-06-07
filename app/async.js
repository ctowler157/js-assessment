exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var promise = new Promise(function(resolve) {
      setTimeout(function(){
        resolve(value);
      }, 1);
    });

    return promise;
  },

  manipulateRemoteData: function(url) {
    var promise = new Promise(function(resolve){
      $.ajax(url).then(function(response){
        var people = response.people;
        var names = people.map(function(person){
          return person.name;
        });

        resolve(names.sort());
      });
    });

    return promise;
  }
};
