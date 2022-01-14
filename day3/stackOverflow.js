var somelist = readVeryLongList(); //some list is an array

/*
As stack has limited memory , we can save our recursive function calls 
on heap memory , the callback/job queue uses heap memory
thus changing our recursive function into asynchronous
can solve the problem of stack overflow
*/

function nextItem() {
  return new Promise((resolve, reject) => {
    let item = somelist.pop();
    console.log(item);

    if (item) {
      // process the list item...
      resolve(nextItem);
    }
  });
}
