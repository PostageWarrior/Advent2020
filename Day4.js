import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var count = 0;
  var passport = "";
  var copy = [...arr];
  var passports = [];

for (var p = 0; p < copy.length; p++){
    for (var i = 0; i < copy.indexOf(''); i++){
        passport = passport.concat(copy[i], " "); 
    }
    
    copy.splice(0, copy.indexOf('') + 1);
    
    passports.push(passport);
      
    passport = "";
    
}  

    console.log(passports);
  for (var r = 0; r < passports.length; r++){
    if (passports[r].includes("byr") && passports[r].includes("iyr") && passports[r].includes("eyr") && passports[r].includes("hgt") && passports[r].includes("hcl") && passports[r].includes("ecl") && passports[r].includes("pid")){
        count++;
        console.log(passports[r]);
      }
  }   

    return count;
}

console.log(syncReadFile('./Day4Data.txt'));