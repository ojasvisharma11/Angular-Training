// First
{/*Call back functions are those functions which are passed as an argument, later to be expected to executed*/}
function AI(face, automation){
    console.log(face, "<br>", automation)
}
function DataScience(callback){
    callback("Ojasvi", "Automated")
}
DataScience(AI)

// Second
sentence = "Hello Friends"
function reverse(word){
    reversed = ""
    for(i=0;i<word.length;i++){
        reversed += word[word.length-1-i]
    }
    return reversed
}
function reverseWords(sentence){
    currentWord = ""
    reverseSentence = ""
    for(i=0;i<sentence.length;i++){
        if(sentence[i] == " "){
            reverseSentence += reverse(currentWord)
            currentWord = ""
            reverseSentence += " "
        }
        else{
            currentWord += sentence[i]
        }
    }
    reverseSentence += reverse(currentWord)
    return reverseSentence
}
// First Approach
console.log(reverseWords(sentence))

// Second Approach
words = sentence.split(" ")
result = ""
console.log(words)
for(i=0;i<words.length;i++){
    console.log("LOOP",words[i])
    result += reverse(words[i])
}
console.log(result)
// Fails when working with more than one space


// Third
num1 = 2.5
num2 = 1
function CheckInteger(number){
    // Function to check if it is a number
    if(Number.isInteger(number) == true){
        return true
    }
    return false
}
console.log(CheckInteger(num1))
console.log(CheckInteger(num2))


// Fourth
class myQueue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    push(element){
        this.stack1.push(element)
    }
    pop(){
        if(this.stack1.length == 0){
            console.log("Stack Empty")
        }
        else{
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1[this.stack1.length-1])
                this.stack1.pop()
            }
            this.stack2.pop()
            while(this.stack2.length > 0){
                this.stack1.push(this.stack2[this.stack2.length-1])
                this.stack2.pop()
            }
        }
    }
    display(){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1[this.stack1.length-1])
            this.stack1.pop()
        }
        while(this.stack2.length > 0){
            console.log(this.stack2[this.stack2.length-1])
            this.stack1.push(this.stack2[this.stack2.length-1])
            this.stack2.pop()
        }
    }
}
var queue = new myQueue()
queue.push(2)
queue.push(1)
queue.display()
queue.pop()
queue.display()    


// Sixth
function fizzbuzz(range){
    for(i=1;i<=range;i++){
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }
        else if(i%3==0){
            console.log("fizz")
        }
        else if(i%5==0){
            console.log("buzz")
        }
    }
}
fizzbuzz(100)


// Seventh
function CheckAnnagrams(string1, string2){
    var map1 = new Map()
    var map2 = new Map()
    if(string1.length != string2.length){
        return false
    }
    for(i=0;i<string1.length;i++){
        if(map1.get(string1[i]) == undefined){
            map1.set(string1[i], 1)
        }
        else{
            map1.set(string1[i], map1.get(string1[i])+1)
        }
    }
    for(i=0;i<string2.length;i++){
        if(map2.get(string2[i]) == undefined){
            map2.set(string2[i], 1)
        }
        else{
            map2.set(string2[i], map2.get(string2[i])+1)
        }
    }
    for (let alphabet in map1) {
        console.log(alphabet, map1.get(alphabet))
        if(map1.get(alphabet) != map2.get(alphabet)){
            return false
        }
    }
    return true
}

// Second
function isAnnagrams(string1, string2){
    arr1 = string1.split("").sort()
    arr2 = string2.split("").sort()
    if(arr1.length != arr2.length){
        return false
    }
    for(i=0;i<arr1.length;i++){
        if(arr1[i] != arr2[i]){
            return false
        }
    }
    return true
}
console.log(CheckAnnagrams("ABC", "CBC"))
console.log(CheckAnnagrams("ABC", "CBA"))

console.log(isAnnagrams("ABC", "CBC"))
console.log(isAnnagrams("ABC", "CBA"))
