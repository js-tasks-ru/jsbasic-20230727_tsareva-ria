function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  btn.onclick = function () {
    text.hidden = !text.hidden;
  };
}
