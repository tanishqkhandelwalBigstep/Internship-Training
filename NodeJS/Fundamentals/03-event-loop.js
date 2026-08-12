let i = 0;

console.log(i)

setTimeout(() => {
    i++ 
    console.log(`setTimeout: ${i}  `)
}, 0);

setImmediate(() => {
    i++
    console.log(`setImmediate: ${i}  `)
});




Promise.resolve().then(() => {
    i++
    console.log(`promise: ${i}  `)
})

process.nextTick(() => { 
    i++             
    console.log(`nextTick: ${i}  `)
})

console.log(`end: ${i} `)



// 0 
// end : 0
// nextTick : 1
// promise : 2
// setTimeout : 3
// setImmediate : 4