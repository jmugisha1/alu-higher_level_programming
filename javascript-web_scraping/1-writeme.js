#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv.slice(2);
fs.writeFileSync(filePath[0], filePath[1], 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
