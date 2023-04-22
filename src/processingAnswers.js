// Beaver triples : c = a*b 
// https://medium.com/applied-mpc/a-crash-course-on-mpc-part-2-fe6f847640ae
// https://www.cs.virginia.edu/~evans/pragmaticmpc/pragmaticmpc.pdf
const crypto = require("crypto")
function answerProcessing(answers){

    let largePrime = (2**49) - 81
    
    
    // Make 16 random bytes ; convert to number ; largePrime
    
    
    // ^Using crypto library's randomInt to get our random numbers
    
    let answerList = answers
    // ^ Should be filled with answers of user
    
    let additiveSharesList = []
    // ^ Will contain the shares lists, max size of 3
    // To grab independent shares of distributions, sharesList[answer#][shares#]
    
    let beaverTriplesList = []
    
    for( let currentAnswer = 0; currentAnswer < answerList.length; currentAnswer+=1){
        additiveSharesList.push(makeShareSet(answerList[currentAnswer]))
        beaverTriplesList.push(makeBeaverTripleSet())
    }
    // Making Beaver Triples
    let beaverTripleSharesFullCollection = []
    let beaverTriplesSharesCollection = []
    let tempBeaverTripleShareStorage = []
    for(let x = 0; x < beaverTriplesList.length; x++){
    for(let currentBeaverSet = 0; currentBeaverSet < beaverTriplesList.length; currentBeaverSet+=1){
        tempBeaverTripleShareStorage = []
        for(let currentBeaverInSet = 0; currentBeaverInSet < 3; currentBeaverInSet+=1){
            tempBeaverTripleShareStorage.push(makeShareSet(beaverTriplesList[currentBeaverSet][currentBeaverInSet]))
        }
        beaverTriplesSharesCollection.push(tempBeaverTripleShareStorage)
    }
    beaverTripleSharesFullCollection.push(beaverTriplesSharesCollection)
    beaverTriplesSharesCollection = []
    }
    // Dividing up into 'A', 'B', and 'C' sets containing sets of shares for each beaver number triple
    let A_beaverShares = []
    let B_beaverShares = []
    let C_beaverShares = []
    for(let beaverNumberSetID = 0; beaverNumberSetID < beaverTriplesList.length; beaverNumberSetID++){
        A_beaverShares.push(beaverTripleSharesFullCollection[0][beaverNumberSetID][0])
        B_beaverShares.push(beaverTripleSharesFullCollection[0][beaverNumberSetID][1])
        C_beaverShares.push(beaverTripleSharesFullCollection[0][beaverNumberSetID][2])
    }
    
    let A_beaverSharesForServerOne = []
    let A_beaverSharesForServerTwo = []
    let A_beaverSharesForServerThree = []
    let B_beaverSharesForServerOne = []
    let B_beaverSharesForServerTwo = []
    let B_beaverSharesForServerThree = []
    let C_beaverSharesForServerOne = []
    let C_beaverSharesForServerTwo = []
    let C_beaverSharesForServerThree = []
    
    for(let x = 0; x < A_beaverShares.length; x++){
        A_beaverSharesForServerOne.push(A_beaverShares[x][0])
        A_beaverSharesForServerTwo.push(A_beaverShares[x][1])
        A_beaverSharesForServerThree.push(A_beaverShares[x][2])
        B_beaverSharesForServerOne.push(B_beaverShares[x][0])
        B_beaverSharesForServerTwo.push(B_beaverShares[x][1])
        B_beaverSharesForServerThree.push(B_beaverShares[x][2])
        C_beaverSharesForServerOne.push(C_beaverShares[x][0])
        C_beaverSharesForServerTwo.push(C_beaverShares[x][1])
        C_beaverSharesForServerThree.push(C_beaverShares[x][2])
    }
    
    // Note : These should be divided up by question for actual usage
    let additiveSharesForServer1 = []
    let additiveSharesForServer2 = []
    let additiveSharesForServer3 = []
    
    for(let x = 0; x < additiveSharesList.length; x++){
        additiveSharesForServer1.push(additiveSharesList[x][0])
        additiveSharesForServer2.push(additiveSharesList[x][1])
        additiveSharesForServer3.push(additiveSharesList[x][2])
    }
    
    //Send shares ; Consider extended euclidean algorithm ; some libraries have support
    
    
    }
    
    function makeShareSet(secret){
        let largePrime = (2**49) - 81;
        let additiveSharesSet = []
       // secret = secret%largePrime
    
        let share1 = makeRandomNumber() // getting range of 2^48, with the max being half of that minus 1 which is max this can handle by taking 2^48 / 2
        let share2 = makeRandomNumber() 
        let share3 = (secret - share1 - share2) %largePrime
        additiveSharesSet.push(share1)
        additiveSharesSet.push(share2)
        additiveSharesSet.push(share3)
        return additiveSharesSet   
    }
    
    function makeBeaverTripleSet(){
        let returnNumbers = []
        let a = makeRandomNumber()
        let b = makeRandomNumber()
        let c = a * b
        returnNumbers.push(a)
        returnNumbers.push(b)
        returnNumbers.push(c)
        return returnNumbers
    }
    
function makeRandomNumber(){
     let bytes = crypto.randomBytes(6)
        let value = 0;
        for (let i = bytes.length - 1; i >= 0; i--) {
                value = (value * 256) + bytes[i];
        }
            return Math.floor(value);
}
    
    // Have to break beaver numbers down into shares for multiplication
    // Will then generate d and e as called for by multiplication formula

module.exports = answerProcessing