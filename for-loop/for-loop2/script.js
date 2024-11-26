function reverseString(){
    let original = "Hello"
    let reversed = "";
    for(let i = original.lenght - 1; i >= 0; i--){
            reversed += original[i];
    }
console.table(reversed);
}