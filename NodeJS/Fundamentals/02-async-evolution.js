const fs = require("fs");
const fsPromises = require("fs").promises;

fs.writeFileSync("data1.txt", "This is data from file 1.");
fs.writeFileSync("data2.txt", "This is data from file 2.");
fs.writeFileSync("data3.txt", "This is data from file 3.");

function readFilesWithCallbacks(done) {
  console.time("Callbacks");

  fs.readFile("data1.txt", "utf8", (err, data1) => {
    fs.readFile("data2.txt", "utf8", (err, data2) => {
      fs.readFile("data3.txt", "utf8", (err, data3) => {
        const summary = data1 + "\n" + data2 + "\n" + data3;

        fs.writeFile("summary-callback.txt", summary, () => {
          console.timeEnd("Callbacks");
          done();
        });
      });
    });
  });
}

function readFilesWithPromises() {
  console.time("Promises");

  const file1 = fsPromises.readFile("data1.txt", "utf8");
  const file2 = fsPromises.readFile("data2.txt", "utf8");
  const file3 = fsPromises.readFile("data3.txt", "utf8");

  return Promise.all([file1, file2, file3])
    .then(([data1, data2, data3]) => {
      const summary = data1 + "\n" + data2 + "\n" + data3;

      return fsPromises.writeFile("summary-promise.txt", summary);
    })
    .then(() => {
      console.timeEnd("Promises");
    });
}

async function readFilesWithAsyncAwait() {
  console.time("Async/Await");

  const [data1, data2, data3] = await Promise.all([
    fsPromises.readFile("data1.txt", "utf8"),
    fsPromises.readFile("data2.txt", "utf8"),
    fsPromises.readFile("data3.txt", "utf8")
  ]);

  const summary = data1 + "\n" + data2 + "\n" + data3;

  await fsPromises.writeFile("summary-async.txt", summary);

  console.timeEnd("Async/Await");
}

readFilesWithCallbacks(() => {
  readFilesWithPromises().then(() => {
    readFilesWithAsyncAwait();
  });
});