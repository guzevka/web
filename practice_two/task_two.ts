function returnArray(element: string | null | number | number[] | string[]) {
    if(typeof element === 'string') {
        return [] = element.split(' ');
    }
    if(typeof element === 'number') {
        let res = [];
        for(let i=1; i<=element; i++) {
            res.push(i);
        }
        return res;
    }
    if(element === null) {
        return new Array;
    }
    if(Array.isArray(element)) {
        return element;
    }
}
let str = "dasha okay";
console.log("string - Значение:");
console.log(returnArray(str));
console.log("massive - Значение:");
console.log(returnArray([1,2,3,4,5]));
console.log(returnArray(["alina","sonya"]));

console.log("number - Значение:");
console.log(returnArray(7));
console.log("null- Значение:");
console.log(returnArray(null));
