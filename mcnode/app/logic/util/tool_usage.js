"use strict";

// Take a jsonSubtree object representing the output (or part of the output) of McLabCore kind analysis
// 'output' is mutated through the function; may want to make this function pure instead
function extractKinds(jsonSubtree, output){
  if (typeof jsonSubtree === 'object'){
    if ('kind' in jsonSubtree){
      let record = {
        name: jsonSubtree.name.name,
        position: {
          startRow: jsonSubtree.name.position.start.line - 1,
          startColumn: jsonSubtree.name.position.start.column - 1,
          endRow: jsonSubtree.name.position.end.line - 1,
          endColumn: jsonSubtree.name.position.end.column
        }
      };
      if(!(jsonSubtree.kind in output)){
        output[jsonSubtree.kind] = [];
      }
      output[jsonSubtree.kind].push(record);
    }
    else{
      for(let key in jsonSubtree){
        extractKinds(jsonSubtree[key], output);
      }
    }
  }
  // If it's an array: extract kinds on every element
  else if (jsonSubtree.constructor === Array){
    for(let item of jsonSubtree){
      extractKinds(item, output)
    }
  }
}

// Takes object representing Mc2For command line arguments; returns a formatted argument string.
// Throws an exception if the arguments are not valid; the compilation would fail anyways, but this protects us against
// an injection attack.
function buildFortranArgString(arg){
  const mlClass = arg.mlClass;
  const numRows = arg.numRows;
  const numCols = arg.numCols;
  const realComplex = arg.realComplex;

  const argsAreValid = validateArgs(mlClass, numRows, numCols, realComplex);
  if (argsAreValid){
    return `'${mlClass}&${numRows}*${numCols}&${realComplex}'`;
  }
  else{
    throw "Fortran compilation arguments are invalid.";
  }
}

// Checks if arguments for compilation are valid; returns true if they are valid, false otherwise
function validateArgs(mlClass, numRows, numCols, realComplex){
  // Confirm that mlClass and realComplex args are within the possible range of values
  const ML_CLASS_POSSIBLE_VALUES = ['LOGICAL', 'CHAR', 'SINGLE', 'DOUBLE', 'INT8', 'UINT8', 'INT16', 'UINT16', 'INT32',
  'INT64', 'UINT64'];
  const REAL_COMPLEX_POSSIBLE_VALUES = ['REAL', 'COMPLEX'];
  if((ML_CLASS_POSSIBLE_VALUES.indexOf(mlClass) == -1) || (REAL_COMPLEX_POSSIBLE_VALUES.indexOf(realComplex) == -1)){
    return false;
  }

  // Confirm that the row/cols arguments are actually numbers; if they are parsed as NaN, they are not numbers
  const numRowsAsInt = parseInt(numRows);
  const numColsAsInt = parseInt(numCols);
  if(isNaN(numRowsAsInt) || isNaN(numColsAsInt)){
    return false;
  }

  return true;
}

module.exports = {
  extractKinds,
  buildFortranArgString
};