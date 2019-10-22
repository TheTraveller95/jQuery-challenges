$(document).ready(function() {


 	$("p").click(function() {
 		$("p").addClass('red_p');
	});

    $(".stream1>h2").mouseenter(function() {
        $(".stream1>h2").addClass('blue_h2');
    })

    $(".stream1>h2").mouseleave(function() {
        $(".stream1>h2").removeClass('blue_h2');
    })



    $("#button1").mouseenter(function(){
        $("#button1").fadeTo('slow',0.5)
    })

    $("#button1").mouseleave(function(){
        $("#button1").fadeTo('slow',1)
    })

    $("#button1").click(function(){
        $("#p_button1").slideToggle('3000')
    })

    $("#stream1_btn").click(function(){
        var className = $(this).attr("class").split(" ");
        var card = className[0];
        var stream = className[1];

        if($(this).css("background-color") == '#ffff'{
            $("."+ stream).css("background-color", "red");

        } else {
             $("."+ stream).css("background-color", "white");
        }

    })

});
