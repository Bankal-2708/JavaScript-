function palidrom(str){
    let rev = '';
    let string = str.toLowerCase();
    for(let i = string.length-1;i>=0;i--){
        rev+=string[i];
    }
    if(rev === string){
        return true
    }
    return false
}
console.log(palidrom("Abba"))