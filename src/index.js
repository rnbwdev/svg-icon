#!/usr/bin/env node

const { exec } = require("child_process");

// install iconsvgjs package as dependency
exec("npm install --save iconsvgjs", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`${stderr}`);
    return;
  }
  console.log(`${stdout}`);

  // install degit package as dev-dependency
  exec("npm install --save-dev degit", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`${stderr}`);
      return;
    }
    console.log(`${stdout}`);

    // download the template structure of iconsvgjs
    exec("degit rnbwdev/svg-icon-template --force", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`${stderr}`);
        return;
      }
      console.log(`${stdout}`);
    });
  });
});

