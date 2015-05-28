var matchParens = function (string) {
    var reg = /[^(()\[\]{})]/g;
    var parens = string.replace(reg, "");
    //parens returns the string stripped of non-parenthesis characters
    
    var pair = {
        "(" : ")" ,
        "{" : "}" ,
        "[" : "]" ,
    };
    
    var truthy = true;
    
    //loop through to ensure that every parenthesis character is mirrored 
    for (var i=0, backcount=(parens.length-1-i); i<((parens.length)/2); i++, backcount--) {
        if (pair[parens[i]] !== parens[backcount]) {
            truthy = false;
        }
    }   
    
    return truthy;
};

matchParens("([)"); //false

matchParens("[]"); //true
matchParens("{}"); //true
matchParens("()"); //true
matchParens("k[ad(sjfa)l]sdjf"); //true
matchParens("{[]}"); //true