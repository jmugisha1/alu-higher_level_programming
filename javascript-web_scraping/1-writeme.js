#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
fs.writeFile(filePath[0], filePath[1], 'utf-8', (err) => {
  if (err) console.log(err);
});
