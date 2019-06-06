/*

Git repository link: https://github.com/raybox94/PuMpup

*/

var knowledge_area_arr = ["Project Integration", "Project Scope", "Project Schedule", "Project Cost", "Project Quality", "Project Resource", "Project Communications", "Project Risk", "Project Procurement", "Project Stakeholder"];
var process_group_arr = ["Initiating", "Planning", "Execution", "Monitoring and controlling", "Closing"];


function load_storage(){

console.log(localStorage.length);

if(localStorage.length == 0){
localStorage.knowledge_area_score = 0;
localStorage.process_group_score = 0;
}else{
document.getElementById("score").innerHTML = localStorage.knowledge_area_score;
console.log(document.getElementById("score").innerHTML);
console.log(localStorage.knowledge_area_score);
}//end of if-else statement

}//end of function load_storage


function load_storage1(){

console.log(localStorage.length);

if(localStorage.length == 0){
localStorage.knowledge_area_score = 0;
localStorage.process_group_score = 0;
}else{
console.log(document.getElementById("score").innerHTML);
console.log(localStorage.knowledge_area_score);
document.getElementById("score").innerHTML = localStorage.process_group_score;
}//end of if-else statement

}//end of function load_storage




function knowledge_area(){
var count = 0;

 var a = document.getElementById("sortable").innerHTML;

var clean_data = strip_string_knowledge(a);
console.log(clean_data);

for(var k = 0; k < clean_data.length; k++){
if(clean_data[k] == knowledge_area_arr[k]){
count += 1;
}//end of if statement

}//end of for loop
console.log(count);
localStorage.knowledge_area_score = count;
document.getElementById("score").innerHTML = localStorage.knowledge_area_score;

}//end of function knowledge_area

function process_group(){
var count = 0;
 var b = document.getElementById("sortable").innerHTML;

var clean_data = strip_string_process(b);
console.log(clean_data);

for(var p = 0; p < clean_data.length; p++){
if(clean_data[p] == process_group_arr[p]){
count += 1;
}//end of if statement

}//end of for loop
console.log(count);
localStorage.process_group_score = count;
document.getElementById("score").innerHTML = localStorage.process_group_score;


}//end of function process_group

function strip_string_knowledge(string){

    if (typeof string !== 'string') {
		throw Error('The given argument is not a string');
	}

var striped_data = string.replace(/(<([^>]+)>)/ig,"");
var unclean_array = striped_data.split("Management");
var clean_array = []

for(var i = 0; i < unclean_array.length-1;i++ ){
clean_array[i] = unclean_array[i].trim()
}//end of for loop

return clean_array;
}//end of function strip for knowledge_groups

function strip_string_process(string){

    if (typeof string !== 'string') {
		throw Error('The given argument is not a string');
	}

var striped_data = string.replace(/(<([^>]+)>)/ig,"");
var unclean_array = striped_data.split("Phase");
var clean_array = []

for(var i = 0; i < unclean_array.length-1;i++ ){
clean_array[i] = unclean_array[i].trim()
}//end of for loop

return clean_array;
}//end of function strip for Process_group