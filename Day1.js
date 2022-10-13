import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var arrCopy = [...arr];

  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
      for (var k = 0; k < arr.length; k++){
        if (i == j || j == k || k == i){
          continue;
        }
        else if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) == 2020){
          return Number(arr[i]) * Number(arr[j]) * Number(arr[k]);
        }
      }
    }
  }

  return arr;
}

console.log(syncReadFile('./Day1Data.txt'));