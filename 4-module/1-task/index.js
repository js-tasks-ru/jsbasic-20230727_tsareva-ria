function makeFriendsList(friends) {
  let newUl = document.createElement("UL");
  newUl.innerHTML = friends.map(item => `<li>${item.firstName} ${item.lastName}</li>`).join('');
  return newUl;
}
