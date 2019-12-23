function pause(delay) {
  const begin = Date.now();
  while (begin + delay > Date.now());
}

pause(500);
console.log('A');
pause(1000);
console.log('B');
pause(0);
console.log('C');
pause(500);
console.log('D');
console.log('E');
