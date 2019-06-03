/*

Git repository link: https://github.com/raybox94/PuMpup

*/

function knowledge_area(){

 var a = document.getElementById("sortable").innerHTML;

var clean_data = strip_string_knowledge(a);
console.log(clean_data);

}//end of function knowledge_area

function process_group(){

 var b = document.getElementById("sortable").innerHTML;

var clean_data = strip_string_process(b);
console.log(clean_data);


}//end of function process_group

function strip_string_knowledge(string){
var striped_data = string.replace(/(<([^>]+)>)/ig,"");
var unclean_array = striped_data.split("Management");
var clean_array = []

for(var i = 0; i < unclean_array.length-1;i++ ){
clean_array[i] = unclean_array[i].trim()
}//end of for loop

return clean_array;
}//end of function strip for knowledge_groups

function strip_string_process(string){
var striped_data = string.replace(/(<([^>]+)>)/ig,"");
var unclean_array = striped_data.split("Phase");
var clean_array = []

for(var i = 0; i < unclean_array.length-1;i++ ){
clean_array[i] = unclean_array[i].trim()
}//end of for loop

return clean_array;
}//end of function strip for Process_group