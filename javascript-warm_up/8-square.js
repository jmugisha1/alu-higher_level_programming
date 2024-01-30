#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (num === undefined) {
  console.log('Missing size');
} else if (num < 0) {
  console.log();
} else {
  for (let rep = 0; rep < num; rep++) {
    console.log('X'.repeat(num));
  }
}
