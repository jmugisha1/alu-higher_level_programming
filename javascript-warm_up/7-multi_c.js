#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args);

if (num === undefined || isNaN(num)) {
  console.log('Missing number of occurrences');
} else {
  for (let rep = 1; rep <= args; rep++) {
    console.log();
  }
}
