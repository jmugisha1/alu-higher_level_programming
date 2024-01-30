#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (num === undefined) {
  console.log('Missing size');
} else {
  for (let rep = 1; rep <= num; rep++) {
    for (let rep = 1; rep <= num; rep++) {
      console.log('*');
    }
  }
}
