$(document).ready(function() {
    var currentDay = moment().format('dddd MMMM Do YYYY');
    var hour = moment().hour();
    console.log(hour);
    $("#currentDay").append(currentDay).text;

    $("btn9").on("click", function (event) {
        event.preventDefault();
        var user = {
            input: userInput
        }
        var userInput = $(this).siblings("textarea").val();

        localStorage.setItem("input", userInput);
        var lastInput = localStorage.getItem("input");
        var JSONFinal = JSON.stringify(lastInput).val();
        $("#text9").append(JSONFinal.input);

    })
})









// const now = moment().format('MMM Do YYYY')
//     console.log(moment().format('MMM Do YYYY'))
// // loop over time blocks

// function hourUpdater() { 
//     var currentHour = moment().hours();


//     $(".time-block").each(function () {
//         var blockHour = parseInt($(this).attr("id").split("-")[1]);

//         // check if we"ve moved past this time
//         if (blockHour < currentHour) {
//             $(this).addClass("past");
//         }
//         else if (blockHour === currentHour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     })

// }




// $(document).ready(function() { 
//      $(".saveBtn").on("click", function() { 
//           var value = $(this).siblings(".description").val(); 
//           var time = $(this).parent().attr("id");
//           localStorage.setItem("time", "value");
//     })
    
// })




// // //local storage

// // localStorage.setItem("#hour-0", "value");

// // localStorage.setItem("#hour-1", "value");

// // localStorage.setItem("#hour-2", "value");

// // localStorage.setItem("#hour-3", "value");

// // localStorage.setItem("#hour-4", "value");

// // localStorage.setItem("#hour-5", "value");

// // localStorage.setItem("#hour-6", "value");

// // localStorage.setItem("#hour-7", "value");

// // localStorage.setItem("#hour-8", "value");

// // localStorage.setItem("#hour-9", "value");

// // localStorage.setItem("#hour-10", "value");

// // localStorage.setItem("#hour-11", "value");

// // localStorage.setItem("#hour-12", "value");

// // localStorage.setItem("#hour-13", "value");


// // localStorage.setItem("#hour-14", "value");

// // localStorage.setItem("#hour-15", "value");

// // localStorage.setItem("#hour-16", "value");


// // localStorage.setItem("#hour-17", "value");

// // localStorage.setItem("#hour-18", "value");

// // localStorage.setItem("#hour-19", "value");

// // localStorage.setItem("#hour-20", "value");

// // localStorage.setItem("#hour-21", "value");

// // localStorage.setItem("#hour-22", "value");

// // localStorage.setItem("#hour-23", "value");



// //retrieve data from local storage
// $("#hour-0 .description").val(localStorage.getItem("#hour-0"));
// $("#hour-1 .description").val(localStorage.getItem("#hour-1"));
// $("#hour-2 .description").val(localStorage.getItem("#hour-2"));
// $("#hour-3 .description").val(localStorage.getItem("#hour-3"));
// $("#hour-4 .description").val(localStorage.getItem("#hour-4"));
// $("#hour-5 .description").val(localStorage.getItem("#hour-5"));
// $("#hour-6 .description").val(localStorage.getItem("#hour-6"));
// $("#hour-7 .description").val(localStorage.getItem("#hour-7"));
// $("#hour-8 .description").val(localStorage.getItem("#hour-8"));
// $("#hour-9 .description").val(localStorage.getItem("#hour-9"));
// $("#hour-10 .description").val(localStorage.getItem("#hour-10"));
// $("#hour-11 .description").val(localStorage.getItem("#hour-11"));
// $("#hour-12 .description").val(localStorage.getItem("#hour-12"));
// $("#hour-13 .description").val(localStorage.getItem("#hour-13"));
// $("#hour-14 .description").val(localStorage.getItem("#hour-14"));
// $("#hour-15 .description").val(localStorage.getItem("#hour-15"));
// $("#hour-16 .description").val(localStorage.getItem("#hour-16"));
// $("#hour-17 .description").val(localStorage.getItem("#hour-17"));
// $("#hour-18 .description").val(localStorage.getItem("#hour-18"));
// $("#hour-19 .description").val(localStorage.getItem("#hour-19"));
// $("#hour-20 .description").val(localStorage.getItem("#hour-20"));
// $("#hour-21 .description").val(localStorage.getItem("#hour-21"));
// $("#hour-22 .description").val(localStorage.getItem("#hour-22"));
// $("#hour-23 .description").val(localStorage.getItem("#hour-23")); 


