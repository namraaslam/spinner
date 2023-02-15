let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  '];
let time = 100;

for (const str of arr) {
  setTimeout(() => {
  process.stdout.write(str);
   }, time)
   time += 200;
   }
  