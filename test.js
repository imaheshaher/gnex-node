var array=[1,2,3,4,5,6,7,8,9,0,9]

function delay() {
    // console.log("delay")
    // setTimeout(() => {},3000)
    return "somtn"
}
async function delayLog(item) {
      await delay()
    console.log(item)
}


 async function processArray(array) {
    for(const i of array) {
        console.log(i)
    //   await delayLog(i) //if remove await then first execute  console.log("donne!")
      console.log("come")
    }
    return "elemnt"
}

async function doThis() {
let a =  processArray(array)

return a
}
var a= doThis()
a.then(k=>{
    console.log(k,"element")
})