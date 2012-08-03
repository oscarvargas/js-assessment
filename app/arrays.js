if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i=0; i<arr.length; i++){
          if (arr[i] === item){return (i);}
        }
    },

    sum : function(arr) {
      var sum = 0;
      for (var i=0; i<=arr.length-1; i++)
        sum= sum + arr[i];
      return (sum);
    },

    remove : function(arr, item) {

      for (var i=0; i<=arr.length-1; i++){
        var pos = arr.indexOf( 2 );
        pos > -1 && arr.splice( pos, 1 );
      }
      return (arr);
    },

    append : function(arr, item) {
       arr.push(item);
       return(arr);

    },

    truncate : function(arr) {
        var pos = arr.indexOf(arr.lenght-1);
        arr.splice( pos, 1 );
        return (arr)
    },

    concat : function(arr1, arr2) {
      for (var i=0; i<=arr2.length-1; i++)
       arr1.push(arr2[i]);
      return(arr1);
    },

    insert : function(arr, item, index) {
        arr.splice( index, 0, item );
        return arr;
    },

    count : function(arr, item) {
      var cont = 0;
      for (var i=0; i<=arr.length-1; i++){
        if (arr[i]=== item)
          cont=cont+1;
      }
      return (cont);
    },

    duplicates : function(arr) {
      var arr2=[];
      for (var i=0; i<=arr.length-2; i++){
        var num = arr[i];
        var pos = arr.indexOf(num);
        arr.splice( pos, 1 );
        for (var j=0; j<=arr.length-1; j++){
          var cont=0;
          if(num === arr[j]){
            cont= cont+1;
            arr2.push(num)}
        }
      }
      return (arr2);

    },

    square : function(arr) {
      for (var i=0; i<=arr.length-1; i++)
        arr[i]=arr[i] *arr[i];
      return(arr);
    },

    findAllOccurrences : function(arr, target) {
      var str = [];
      for (var i=0; i<=arr.length-1; i++){
        if(arr[i]=== target)
          str.push(i); 
      }
      return(str);

    }
  };
});
