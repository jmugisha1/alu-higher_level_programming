#!/usr/bin/node
const args = process.argv.slice(2);
if (parseInt(args) !== Number) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(args)}`);
}
