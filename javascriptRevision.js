const fruits = ["orange","banana", "pear", "apple"]

let strr = "a "

for(i = 0; i < fruits.length; i++){

    fruits[i] += strr

    console.log(fruits[i])
}

for(i = 1; i <= 12; ++i){
    
    console.log(5 ,"x" , i , "=" ,i*5 )
}

let num = 2
num++;
console.log(num)

let str = [ 2,5,3];

let result = 0

    for(i in str ){
        result += str[i]
    }

console.log(result)
