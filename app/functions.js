if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0],arr[1],arr[2]);

    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
          return  str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {
        var partial = fn.bind(null, str1, str2);
        return partial;
    },

    useArguments : function() {
      var sum = 0;
       for (var i=0;i<arguments.length;i++)
         sum = sum +arguments[i];
      return sum;
    },

    callIt : function(fn) {
      var arr =[];
       for (var i=1;i<arguments.length;i++) {
         arr.push(arguments[i])
      }
      fn.apply(null, arr);
    },

    curryIt : function(fn) {
      //return function(){
       //for (var i=1;i<arguments.length;i++) {
      //}
      //return fn();
      //}
    }
  };
});
