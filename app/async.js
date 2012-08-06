if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
      return{
      then: function(cb){
        $.ajax({
          url:url
        }).done(function(data){
          var users = [];
          for(var i=0;i<= data.people.length-1; i++){
            users.push(data.people[i].name); 
          }
            users.sort();
          return cb(users); 
        });
      }
      }
    }
  };
});
