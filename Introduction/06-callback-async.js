setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);

console.log('E');

// ^
// |
// |                              lg                lg    lg                   lg
// |st - st - st - st - lg ..↻..  cbC ..↻..         cbA - cbD ..↻..            cbB
// +----------0-------------------10----------------501---504------------------1000---->
//                      E         C                 A     D                    B

// fil d'attente (0ms) : cbC
// fil d'attente (10ms) :
// fil d'attente (500ms) : cbA - cbD
// fil d'attente (501ms) : cbD
// fil d'attente (502ms) :
// fil d'attente (1000ms) : cbB
// fil d'attente (1001ms) :

// Jake Archibald : In the Loop JSConf.Asia 2018
