$(document).ready(function(){


    var allTheThings = function(){
        $(".hotspot").addClass("hide_btn"); //.hotspot so it closes all hotspots, not just the one
        $('#x-close').addClass('btn_close_show'); //show the x (close) button in the corner
        $('#slide').addClass('info_slides_show'); //show the slide that the information will appear on
    }

    $("#dotA").click(function(){
        allTheThings();
        $('#popIn').text("Here's some fascinating info about our lobby!").addClass('popIn-info');
    });
    

    $("#dotB").click(function(){
        allTheThings();
        $('#popIn').text("This is absolutely, certainly, in no way the same text we used on the last button!").addClass('popIn-info');
    });


    $('#x-close').click(function(){
        $('#x-close').removeClass("btn_close_show")
        $('.hotspot').removeClass("hide_btn")
        $("#slide").removeClass('info_slides_show')
    });



});