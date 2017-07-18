export default function doubleFilter(arr, predicateFn, self){
    const result = {
        true: [],
        false: []
    }
    const boundPredicate = predicateFn.bind(self)

    for (var i = 0; i < arr.length; i++){
        if ( boundPredicate(arr[i], i, arr) ){
            result.true.push(arr[i]);
        } else {
            result.false.push(arr[i]);
        }
    }
    return result;
}
