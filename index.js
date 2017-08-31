function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
    const grand_node = document.getElementById('grand-node')
    var next_node = grand_node.children[0]
    var child_node = next_node.children[0]
    // debugger
      while (child_node) {
        // debugger
        next_node = child_node
        child_node = next_node.children[0]
      }
      return next_node
}


function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  // debugger
  // .innerHTML this is a getter and interHTML= is a setter. if you call it without an
  // argument itll tell youy what's there, otherwise itll change it with an equals
  for (let i = 0; i < lis.length; i++) {
    var currentValue = lis[i].innerHTML
        currentValue = parseInt(currentValue, 10)
        currentValue+= n
        lis[i].innerHTML =  currentValue
  }
}

//
//
//
// const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
//
// for (let i = 0; i < lis.length; i++) {
//   lis[i].innerHTML = (i + 1).toString()
// }
//
//
// const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
//
// for (let i = 0; i < lis.length; i++) {
//   lis[i].innerHTML = (i + 1).toString()
// }
