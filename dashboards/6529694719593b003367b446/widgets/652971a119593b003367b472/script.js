/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('ready', function(){

$.each($("tbody .p-head-content span",element), function(){

  var span = this.textContent;

  var maxDate =  new Date(span);

  maxDate.setDate(maxDate.getDate() - 3)

  maxDate =  (maxDate.getMonth() +'/'+ maxDate.getDate() +'/'+ maxDate.getFullYear());

  this.textContent = maxDate;

});
