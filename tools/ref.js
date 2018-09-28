#!/usr/bin/env node

const sketchtool = require('sketchtool-cli');

const sketchFile = 'UIKit_TruckSystems_Master.sketch'

// var sketchtool = require('sketchtool')
//
// sketchtool(`dump ${sketch_file}`, function (error, stdout, stderr) {
//   console.log(error)
//   console.log(stdout)
//   console.log(stderr)
// })


// Check if sketchtool binary is available
console.log(sketchtool.check());

// Get current version (string)
console.log(sketchtool.version());  // = sketchtool --version

// Get path to sketch plugin folder
// console.log(sketchtool.pluginFolder());  // = sketchtool show plugins

// Execute any command

// Abstractions for most commonly used commands

// Want to dump the JSON object to multiple files, split up by what? Assets?
// What?

// process.chdir('./export');

// Dump to JSON
// sketchtool.run(`dump ../${sketchFile} > dump.json`);

// NOTE: PNG export takes 1min+
// export PNGs of everything
// sketchtool.run(`export layers ../${sketchFile}`);

// process.chdir('../');

// dump sketch file to JSON object
// sketchtool.dump(sketchFile);

// console.log(sketchtool.list('pages', sketchFile));
