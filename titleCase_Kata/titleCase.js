const titleCase = function (str = '') {
  if (str === "") {
    return ""
  }
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split('');
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join('');
  }

  return arr.join(' ');
}

console.log(titleCase('this is an example'))
