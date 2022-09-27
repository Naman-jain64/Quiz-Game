
question = ["Q1 What is the result of 56 + 6 ?","Q2 What is the result of 12 + 4 ?","Q3 What is the result of 12 x 4 ?","Q4 What is the result of 28 + 21 ?","Q5 What is the result of 42 + 28 ?","Q6 What is the result of 24 + 67 ?","Q7 What is the result of 20 x 6 ?" ,"Q8 What is the result of 32 - 26 ?","Q9 What is the result of 23 - 30 ?","Q10 What is the result of 56 - 30 ?",] ;

answer = [ 62 , 16 , 48 , 49 , 76 , 91 , 120 , 6 , 7 , 26 ] ;

i=0 ;

function submit(){

var a = Number(document.getElementById("text").value) ;

if(answer [i] == a ){
            
document.getElementById("p2").innerHTML = answer [i] + " is Correct " ;

}

else{

document.getElementById("p2").innerHTML = a + " is incorrect " ;   

}

console.log(i) ;
            
}
            
function Next(){

document.getElementById("text").value = " " ;

document.getElementById("p2").innerHTML =  " " ;

if (i< 9){

document.getElementById("p1").innerHTML = question [i+1] ;
        
i = i+1 ;

}

else{

    document.getElementById("p1").innerHTML = question [9] ;

    document.getElementById("pp1").innerHTML = ("<br> this is the last question of the quiz");

}

}

function Previous(){

if (i > 0){

document.getElementById("p1").innerHTML = question [i-1] ;

i = i-1 ;

}

else{

document.getElementById("p1").innerHTML = question [0] ;

document.getElementById("pp1").innerHTML = ("<br> this is the first question of the quiz");

}

}

function SCORE(){

var a = Number(document.getElementById("text").value) ;

for(c = 0 ; c = 10; c += 1 ){

document.getElementById("p1").innerHTML = " Your SCORE is " + a ;

}

}
