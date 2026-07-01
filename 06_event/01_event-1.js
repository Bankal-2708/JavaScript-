const nature = document.querySelector('.nature')
const imageList = document.querySelector('#imageList')
const google = document.querySelector('#google')

nature.addEventListener('click', (e) => {
  console.log('nature clicked')
}, false)


imageList.addEventListener('click', (e) => { // remove img
  // console.log('clicked insdide the Ul')
  // console.log(e.target.parentNode)

  if (e.target.tagName === 'IMG') {
    let removeIt = e.target.parentNode
    removeIt.remove()
  }

  // removeIt.parentNode.removeChild(removeIt)

}, false)

// false means bubbling phase, true means capturing phase (it goes bottom to top)

imageList.addEventListener('click', (e) => {
  // console.log('clicked inside the UL 2nd event')
}, true) // true means capturing phase, true means capturing phase (it goes top to bottom)

google.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation() // stops the event from bubbling up to the parent element
  console.log('clicked on google')
}, false)

