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

// Takes object representing Mc2For command line arguments; returns a formatted argument string
function buildFortranArgString(arg){
  const mlClass = arg.mlClass;
  const numRows = arg.numRows;
  const numCols = arg.numCols;
  const realComplex = arg.realComplex;
  return `'${mlClass}&${numRows}*${numCols}&${realComplex}'`;
}

module.exports = {
  extractKinds,
  buildFortranArgString
};