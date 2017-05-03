$(document).ready(function(){
    var teachers_students = [
        ['Zack', 'Justin', 'Aaron', 'Julia', 'Alyxe'],
    ['Alan', 'Yanella', 'Tushar', 'Odalys', 'Joel']
    ];
    
    function rngt(){
    var numb = Math.floor(Math.random()*4);
    return teachers_students[0][numb];
    }
    var t = rngt();
console.log(t);
function rngs(){
    var numb = Math.floor(Math.random()*4);
    return teachers_students[1][numb];
    }
    var s = rngs();
console.log(s);
$("#studentButton").click(function() {
document.getElementById("xd").innerHTML = rngs();
});
$("#teacherButton").click(function() {
document.getElementById("lol").innerHTML = rngt();
});
});
 