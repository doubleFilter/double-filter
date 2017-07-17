function doubleFilter(arr, predicate){
    var result = {
        true: [],
        false: []
    }

    for(var i = 0; i < arr.length; i++){
        if( predicate(arr[i], i, arr) ){
            result.true.push(arr[i]);
        } else {
            result.false.push(arr[i]);
        }
    }
    return result;
}