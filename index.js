// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {

const superbowlWin=record.find(win=>
 win.result ==="W");
 return superbowlWin? superbowlWin.year : undefined;
 
}
console.log(superbowlWin);
