

let print = function(number){

  if (number == 5) {
    return;
  }
  console.log(number);
  print(number + 1);
}

print(0)