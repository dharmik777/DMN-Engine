// loop over time blocks
$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (blockHour < currentHour) {
        $(this).addClass("past");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});


$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val(); var time = $(this).parent().attr("id");


        localStorage.setItem(time, value);
    })
})
