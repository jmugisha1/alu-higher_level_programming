#!/usr/bin/node
const args = process.argv.slice(2);
if (parseInt(args) === Number) {
  console.log(`My number: ${parseInt(args)}`);
} else {
  console.log('Not a number');
}
