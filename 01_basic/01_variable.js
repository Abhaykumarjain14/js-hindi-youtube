const accountId = 144553
let accountEmail = "Abhayjain@1234.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2

/* 
perfer not to use var because of its
Block scope and functional scope
*/

accountEmail = "ak@ak.com"
accountPassword = "1234234"
accountCity = "bengluru"

console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])