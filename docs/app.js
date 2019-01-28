
const { hljs } = self;
hljs.initHighlighting();

// Initialize the tabs
tabs();
document.querySelector('#refresh').addEventListener('click', refresh);

function tabs() {
  let tabs = document.querySelector('.tabs');
  tabs.addEventListener('click', ev => {
    if(ev.target.localName === 'button') {
      let parentLi = ev.target.parentNode;

      for(let li of tabs.children) {
        if(li === parentLi) {
          li.classList.add('selected');
        } else {
          li.classList.remove('selected');
        }
      }

      let selectedArea = document.querySelector('.selected-example');
      let example = document.querySelector(ev.target.dataset.for);

      clear(selectedArea);
      selectedArea.appendChild(document.importNode(example.content, true));
    }
  });
}

function clear(el) {
  while(el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function refresh() {
  for(let frame of document.querySelectorAll('iframe')) {
    frame.src += '';
  }
}