setTimeout(() => {
  console.log("Hi");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("hey");
}, 1000);
