import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var correct = 0;

  for (var i = 0; i < arr.length; i++){
    var line = arr[i].split(" ");
    var min = line[0].substring(0, line[0].indexOf("-"));
    var max = line[0].substring(line[0].indexOf("-") + 1);
    var policy = line[1].substring(0, line[1].indexOf(":"));
    var count = 0;
    line = line[2].split("");
    if (line[min - 1] == policy && line[max - 1] == policy){
      continue;
    }
    
    if (line[min - 1] == policy || line[max - 1] == policy){
      correct++;
    }
  }

  return correct;
}

console.log(syncReadFile('./Day2Data.txt'));