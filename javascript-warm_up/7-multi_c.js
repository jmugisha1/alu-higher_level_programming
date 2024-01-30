#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args);

if (num[0] === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let rep = 1; rep <= args[0]; rep++) {
    console.log();
  }
}
