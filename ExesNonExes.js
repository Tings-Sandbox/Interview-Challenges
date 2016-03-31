/*See ExesNonexes.png for details on the problem*/
function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var obj = {
      exes : 0,
      nonexes : 0
    };
    
    for (var i = 0; i< A.length; i++){
      if (A[i] === X){
        obj.exes++;
      } else {
        obj.nonexes++;
      }
      
      if (obj.exes === obj.nonexes){
        return i+1;
      }
    }
}
