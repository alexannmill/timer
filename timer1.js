// process.stdout.write('\x07');

const times = process.argv.slice(2);
for (set of times) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, set);
};