$(document).ready(function() {

  var flavors = ['vanilla', 'pistachio', 'rocky road', 'butter pecan'];

  // flavors.forEach(function(flavor) {

    for  (var i = 0; i <= flavors.length; i++){
    $("#" + i).append(flavors[i]);
   }
  // });
});
