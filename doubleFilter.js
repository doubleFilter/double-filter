export default function doubleFilter(arr, predicateFn, self){
    const result = {
        true: [],
        truthy: [],
        false: [],
        falsey: []
    }
    const boundPredicate = predicateFn.bind(self)

    for (var i = 0; i < arr.length; i++){
        var cbResult = boundPredicate(arr[i], i, arr)
        if ( cbResult === true ){
            result.true.push(arr[i]);
        } 
        if ( cbResult === false ){
            result.false.push(arr[i]);
        }
        if (cbResult){
            result.truthy.push(arr[i]);
        } else {
            result.falsey.push(arr[i]);
        }
    }
    return result;
}
