var nameOfTheStudentArray=[]
var displayStudentArray=[]

function submit(){
    for(var a=1;a<=4;a++){
        var nameOfTheStudent=document.getElementById("nameOfTheStudent"+a).value;
        nameOfTheStudentArray.push(nameOfTheStudent)
    }

    lengthnameOfTheStudent=nameOfTheStudentArray.length;
    for(var b=0;b<lengthnameOfTheStudent;b++){
        displayStudentArray.push("<h4>name-"+nameOfTheStudentArray[b]+"</h4>");
    }
    document.getElementById("displayNameWithCommas").innerHTML=displayStudentArray;
    var Sem_virgula=displayStudentArray.join(" ")
    document.getElementById("displayNameWithoutCommas").innerHTML=Sem_virgula;
    document.getElementById("submitButton").style.display = "none"; 
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting(){
    nameOfTheStudentArray.sort()
    var studentSorting=[]
    lengthnameOfTheStudent=nameOfTheStudentArray.length;
    for(var b=0;b<lengthnameOfTheStudent;b++){
        studentSorting.push("<h4>name-"+nameOfTheStudentArray[b]+"</h4>");
    }
    var Sem_virgula=studentSorting.join(" ")
    document.getElementById("displayNameWithoutCommas").innerHTML=Sem_virgula;   
}