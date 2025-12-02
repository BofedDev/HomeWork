//4 TASK -------------------
console.log('finalAccess-----------------')
let finalAccess = null;
if(userFinalAccess && orderFinalAccess && systemSettingsFinalAccess){
    finalAccess = true;
    console.log("Full access granted");
}
else{
    finalAccess = false;
    console.log("Access denied");
}