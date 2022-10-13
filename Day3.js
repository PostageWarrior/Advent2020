import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  function slope(arr, right, down){
    var x = 0;
    var count = 0;

    for (var y = 0; y < arr.length; y += down){
        y += down;
        if (y >= arr.length){
            break;
        }
        var line = arr[y].split("");
        x += right;
        if (x >= line.length){
            x -= line.length;
        }
        if (line[x] == "#"){
            // line[x] = 'X';
            count++;
        }
        else if (line[x] == "."){
            // line[x] = 'O';
        }
        arr[y] = line.join("");
        y -= down;
    }

    return count;
  }
  var test1 = slope(arr, 1, 1)
  console.log(test1);
  var test2 = slope(arr, 3, 1);
  console.log(test2);
  var test3 = slope(arr, 5, 1);
  console.log(test3);
  var test4 = slope(arr, 7, 1);
  console.log(test4);
  var test5 = slope(arr, 1, 2);
  console.log(test5);

//   console.log(arr);
  return test1 * test2 * test3 * test4 * test5;
}

console.log(syncReadFile('./Day3Data.txt'));