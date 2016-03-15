/*Create a function that takes a stringified mathematical operation and returns its evaluated result
eg.
evaluate('1+20*6/2+3*8') --> 85
*/
function evaluate (str){
  var array = [];
  var tempStr = '';
  var result = '';
  
  var operators = {
    '*' : function(a,b){return a * b},
    '/' : function(a,b){return a / b},
    '+' : function(a,b){return a + b},
    '-' : function(a,b){return a - b}
  }
  
  //create an array of the numbers and operators as they appear on the str
  for (var i = 0; i < str.length; i++){
    if (operators[str[i]]){
      array.push(parseInt(tempStr));
      array.push(str[i]);
      tempStr = "";
    } else {
      tempStr += str[i];
    }
  }
  array.push(parseInt(tempStr));
  
  //recurse function takes an array, runs a mathematical operation, and recurses on new collapsed array
  function recurse (subArr){
    //base case: subArr is collapsed down to one number
    if (subArr.length === 1){
      result = subArr[0];
      return;
    }
    
    //toDo object will store info about position of our operator (*,/,+,-)
    var toDo = {};
    for (var operator in operators){
        var position = subArr.indexOf(operator);
        if (position > -1){
            toDo.position = position;
            toDo.operator = operator;
            break;
        }
    }
    
    //run the operator, and create new collapsed array
    var newArr = subArr.slice(0, toDo.position-1);
    newArr.push(operators[toDo.operator](subArr[toDo.position-1], subArr[toDo.position+1]));
    newArr = newArr.concat(subArr.slice(toDo.position+2));
    console.log(newArr, 'new')
    recurse (newArr);
  }
  
  
  recurse(array);

  return result;

}

console.log(evaluate('1+20*6/2+3*8'));
console.log(evaluate('20*6+3*8'));
