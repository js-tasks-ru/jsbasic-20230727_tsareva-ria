function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  let addHidden = () => btn.hidden = true;
  btn.addEventListener('click', addHidden);
}
