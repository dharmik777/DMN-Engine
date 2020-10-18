// Code to get the current day
var now = function(daily){
    today = new Date();
    var day = today.getDate();
    var month = today.getMonth()+1; 
    var year = today.getFullYear();
    
    if(day<10) day='0'+day;
    if(month<10) month='0'+month;
    return (month+daily+day+daily+year);
    };
    console.log(now('/'));
   
// Code to get timeblocks 

var time = function(hour){
    var militaryTime = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]
    
    click.militaryTime()

    console.log(time)
    


}

