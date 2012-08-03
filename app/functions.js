if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0],arr[1],arr[2]);

    },

    speak : function(fn, obj) {
    },

    functionFunction : function(str) {
      console.log(str);
      //func : function(sas){
        //return cad= str +', '+sas); 
      //}
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
