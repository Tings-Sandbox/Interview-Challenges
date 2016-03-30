//LinkedList is a function, not an object. Constructor functions instantiate instances with the new keyword, and returns an object

/*Considerations
- is it a doubly or singly linked list?
*/

var node = function(val){
	this.val = val;
	this.next = undefined;
};

//note that you are setting 'this's properties
var LinkedList = function (){
  this.startNode = undefined;
  this.endNode = undefined;
};

//add a semicolon to the end of your functions
//note that you will need to add them to the prototypes
LinkedList.prototype.addNode = function(val){
  var newNode = new node(val);
  
  if (this.startNode === undefined){
  	this.startNode = newNode;
  	this.endNode = newNode;
  } else {
  	this.endNode.next = newNode;
  	this.endNode = newNode;
  }
  
};

LinkedList.prototype.removeNode = function(val){
  //go through each node from start to end, then remove
  var context = this;
  
  function recurse (currNode, val){
  	if (context.startNode.val === val){
  		context.startNode = context.startNode.next;
  		return;
  	} else if (currNode.next.val === val){
  		currNode.next = currNode.next.next;
  	} else if (currNode.next !== undefined) { 
  		recurse(currNode.next, val);
  	} else {
  		return "nothing to remove";
  	}
  }
  
  recurse(this.startNode, val);
  
};

//Commented out, because this function isn't working properly. I will implement contains instead. 
// LinkedList.prototype.findNode = function(val, currNode){
//   currNode = currNode || this.startNode;
//   console.log('currNode', currNode)
  
//   //go through each node from start to end, then return 
//   if (this.startNode !== undefined && currNode !== this.endNode){
//   	if (currNode.val != val){
//   		console.log('here too', val)
//   		this.findNode(val, currNode.next);
//   	} else if (currNode.val == val) {
//   		console.log('here', val)
//   		return currNode;
//   	}
//   } else {
//   	return null;
//   }
// };
/*problem with my findNode implementation:
- it returns undefined when it should be returning the node instance. why?
*/


LinkedList.prototype.contains = function(val){
	/*version 1
	function search (currNode, val){
		if (currNode === undefined){
			return false;
		} else if (currNode.val === val){
			return true;
		} else {
			return search(currNode.next, val);
		}	
	}
	*/
	
	//version 2
	function search (currNode, val){
		if (currNode !== undefined){
			return currNode.val === val ? true : search(currNode.next, val);
		} else {
			return false;
		}
	}
	
	return search(this.startNode, val);
};


var a = new LinkedList();

a.addNode(6);
a.addNode(7);
a.addNode(8);
var addNodeTest = a.contains(7);
a.removeNode(6);
var removeNodeTest = a.contains(6);

console.log(addNodeTest, 'addNodeTest');
console.log(removeNodeTest, 'removeNodeTest');

