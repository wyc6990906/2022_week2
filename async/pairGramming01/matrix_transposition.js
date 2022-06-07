const transpose = function (matrix) {
  // Put your solution here
  let result = []
  for (let col = 0; col < matrix[0].length; col++) {
    let temArr = []
    for (let row = 0; row < matrix.length; row++) {
      temArr.push(matrix[row][col])
    }
    result.push(temArr)
  }
  return result
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);
/*
*   1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4
*
*
* */

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
  /*
*   1 3 5
    2 4 6
* */
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
/*
1
2
3
4
5
6
7*/
