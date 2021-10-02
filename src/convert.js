const shorten = (num)=>{
    const directory = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let rem,digits=[],returnString='',i
    while(num>0){
        rem=num%62
        digits.push(rem)
        num=Math.trunc(num/62)
    }
    digits.reverse()
    for(i=0;i<digits.length;i++)
        returnString=returnString.concat(directory[digits[i]])
    return returnString
}    

const longen = (tiny)=>{
    const directory = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let arr=[],i,result=0
    for(i=0;i<tiny.length;i++){
        arr.push(directory.search(tiny[i]))
    }
    for(i=0;i<arr.length;i++){
        result+=(arr[i]*(62**(arr.length-i-1)))
    }
    return result
}
export {shorten,longen}
