

var fs = require('fs');

function ReadAppend(file,appendFile)
{
  fs.readFile(appendFile,function  (err,data){
    if(err) throw err;
    console.log("file read");

    fs.appendFile(file,data,function(err){
      if(err) throw err;
      console.log("appended");

    });
  });
}

file='csv1.csv';
appendFile='csv2.csv';
ReadAppend(file,appendFile);

appendFile='csv3.csv';
ReadAppend(file,appendFile);
var readLine = require('readline')

headerRow=0,
push_array = [],
readStream = fs.createReadStream('csv1.csv');
writeStream = fs.createWriteStream('first.json');
var count = 0;
var age,liPerson;
function Push_first(age,liPerson){

    this.age = age,
    this.liPerson = liPerson;

};

var lineStream = readLine.createInterface({
input: readStream
});
/*Reister callback to read each line from CSV. All logic to select data to write to JSON goes here*/
var readLine = lineStream.on('line', function (line) {
 if(count==0){
   var headers = line.split(",");
  //  Area = headers.indexOf("Area Name");
   age = headers.indexOf("Age-group");
   liPerson = headers.indexOf("Literate - Persons");

   count = 1;
 }
 else{
    objectArray='';
   var lines = line.split(',');
//   if(lines[age]>=7){
     objectArray =  new Push_first(lines[age],lines[liPerson]);
     console.log(objectArray);
     push_array.push(objectArray);
}

}).on('close', function() {
      writeStream.write(JSON.stringify(push_array));
 }); //END OF CLOSE)
