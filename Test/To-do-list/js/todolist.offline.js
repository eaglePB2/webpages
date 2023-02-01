// Click on a close button to hide the current list item
function setupOnClose() {
  var close = document.getElementsByClassName('close')
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement
      div.style.display = 'none'
    }
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value
  li.innerHTML = inputValue
  if (inputValue === '') {
    console.error('抱歉，你必须要输入一些东西才能帮你储存哦~')
    // or using fire event method:
    // Swal.fire({
    //   type: 'error',
    //   title: 'You must write something!'
    // })
  } else {
    document.getElementById('myUL').appendChild(li)
    document.getElementById('myInput').value = ''
    li.innerHTML += '<span class="close">\u00D7</span>'
    setupOnClose()
  }
} 

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
	  ev.target.classList.toggle('checked')
  }
}, false)