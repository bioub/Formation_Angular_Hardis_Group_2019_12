const fs = require('fs');

// Version Synchrone
try {
  const content = fs.readFileSync('package.json', { encoding: 'utf-8' });
  fs.writeFileSync('package.json.tmp', content);
  console.log('Copy Sync DONE');
} catch (err) {
  console.log(err);
}

// Version Asynchrone (style callback)
// Callback hell / Pyramid of doom
fs.readFile('package.json', { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('package.json.tmp', content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Async Callback DONE');
      }
    });
  }
});

// Version Asynchrone (style promise)
fs.promises.readFile('package.json', { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile('package.json.tmp', content))
  .then(() => console.log('Copy Async Promise DONE'))
  .catch((err) => console.log(err));

// ECMAScript 2017
async function copyPackageJson() {
  try {
    const content = await fs.promise.readFile('package.json', { encoding: 'utf-8' });
    await fs.promise.writeFile('package.json.tmp', content);
    console.log('Copy Sync DONE');
  } catch (err) {
    console.log(err);
  }
}
copyPackageJson();
