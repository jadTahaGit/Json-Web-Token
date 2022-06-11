import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

function ejs2html({ path, outPath, data, options }) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return false;
    }
    ejs.renderFile(path, data, options, (err, html) => {
      if (err) {
        console.log(err);
        return false;
      }
      fs.writeFile(outPath, html, function (err) {
        if (err) {
          console.log(err);
          return false;
        }
        return true;
      });
    });
  });
}

ejs2html({
  path: `${__dirname}/views/index.ejs`,
  outPath: `${__dirname}/public/index.html`,
});
