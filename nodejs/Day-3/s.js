var count = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileUpdate: 0,
}
function incrementCount() {
  count.login++;
  count.logout++;
  count.purchase++;
  count.profileUpdate++;
}
incrementCount();
console.log(count)
incrementCount();
console.log(count)
incrementCount();