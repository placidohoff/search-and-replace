/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

function myReplace(str, before, after) {
    let arrStr = str.split(" ");
    let arrBefore = before.split('')

    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i] == before){
            //check to see if word starts with capital:
            if(before.startsWith(arrBefore[0].toUpperCase())){
                let arrAfter = after.split('')
                arrAfter[0] = arrAfter[0].toUpperCase();
                after = arrAfter.join('')
            }
            else if(before.startsWith(arrBefore[0].toLowerCase())){
                let arrAfter = after.split('')
                arrAfter[0] = arrAfter[0].toLowerCase();
                after = arrAfter.join('')
            }
            arrStr[i] = after;
        }
        
    }

    str = arrStr.join(" ")

    return str;
    
}
  
myReplace("I think we should look up there", "up", "Down")