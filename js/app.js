let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es:" + myUserProfile.darkmode);

let myInput = prompt("Quiere pasar a darkmode? [S]i o [N]o");

if (myInput.toLowerCase() == "s") {
    myUserProfile.darkmode = true;
    myUserProfile.save();    
}
