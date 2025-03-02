/* 
console.time() = tool that allows you to measure the time it takes
for a section of code or process to execute
Great for identifying performance "bottlenecks"

console.time("label");
console.timeEnd("label");
*/
/*
console.time("test");

for(let i = 0; i < 1000; i++){
    console.log(i);
}

console.timeEnd("test");
*/

function loadDate(){
    console.time("loadData");
    for(let i = 0; i < 100000; i++){

    }
    console.timeEnd("loadData");
}

function processData(){
    console.time("processData");
    for(let i = 0; i < 10000000; i++){

    }
    console.timeEnd("processData");
}


loadDate();
processData();