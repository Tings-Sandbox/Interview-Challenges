var arr = [5,8,13,111,7,0];

var quickSort = function(array, start, end){
    if (end > start){
        var pivotPosition = partition(array, start, end)
        //call quickSort on left side of pivot
        quickSort(array, start, pivotPosition-1);
        //call quickSort of the right side of the pivot
        quickSort(array, pivotPosition+1, end);
    }
    return array;
}


//partition: arrange the list into two subarrays, Greater Than Pivot & Less Than Pivot. Partition should return the index of the pivot's new position
var partition = function(array, start, end){
    
    var wall = start;
    
    for (var current = start; current < end; current++){
        if (array[current] < array[end]){
            //swap
            var wallCopy = array[wall];
            array[wall] = array[current];
            array[current] = wallCopy;
            //move the wall
            wall++;
        }
    }
    
    //swap pivot with wallCopy
    var wallCopy2 = array[wall];
    array[wall] = array[end];
    array[end] = wallCopy2;
    
    return wall;
}


quickSort(arr, 0, arr.length-1);
