const accountId = 144553
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountyCity = "Jaipur" // not recommeneded
let accountState;
// accountId = 2

accountEmail = "hc@gmail.com"
accountPassword = "2123153"
accountyCity = "Bengalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountyCity,accountState]);
