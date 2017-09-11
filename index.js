function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i< musicians.length; i ++){
    var newString = musicians[i] + " plays " + instruments[i];
    newArr.push(newString);
    newString;
  }
  return newArr;
}

function johnLennonFacts(array){
  var i = 0;
  var newArr = [];
  while (i < array.length){
    newArr.push(array[i] + "!!!");
    i++;
  }
}
