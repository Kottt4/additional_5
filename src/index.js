module.exports = function check(str, bracketsConfig) {
  function bigFormula (stro, array){
    var string = stro.split("");
    var bbb = true;
    for (var c = 0; c <(string.length-1); c++) {
     if (string[c] === array [0]){
         for (var j =c+1; j<(string.length); j++) {
             if (string[j]=== array[1] && Math.round((j-c)/2)!=(j-c)/2) {
             string[j] = "b";
             string[c] = "b";
             break;
             };
         };
      };
    };
  var count =0;
  for (var t=0; t<string.length; t++) {
  if (string[t]=== array[0] || string[t]=== array[1]) {count++;};
  };
  string = string.join("");
  if (count >0) {bbb = false;};
  return bbb;
  };
  
  
  var yyy = true;
  for (var j =0; j<bracketsConfig.length; j++) {
  var b = bracketsConfig[j];
  var yyy = bigFormula (str, b);
  if (yyy === false) {return yyy};
  };
  return yyy;
  
  
}
