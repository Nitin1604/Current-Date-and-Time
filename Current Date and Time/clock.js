console.log('Current Date and Time')
function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
      month = '0' + month;
    }
    if (day.toString().length == 1) {
      day = '0' + day;
    }
    if (hour.toString().length == 1) {
      hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
      minute = '0' + minute;
    }
    if (second.toString().length == 1) {
      second = '0' + second;
    }
    // Date : 16/12/2023 | Time : 21:00:00 (current time and date will shown) on the browser
    var dateTime = 'Date: ' + day + '/' + month + '/' + year + ' | ' + ' Time: ' + hour + ':' + minute + ':' + second;
               //  Date:    16     /     12       /   2023      |       Time:      08      :     30       :      00
    return dateTime;
  }
  
  // example usage: realtime clock
  setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
  }, 1000);