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


	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

    $("#button1").mouseenter(function(){
        $("#button1").fadeTo('slow',0.5)
    })

    $("#button1").mouseleave(function(){
        $("#button1").fadeTo('slow',1)
    })

    $("#button1").click(function(){
        $("#p_button1").slideToggle('3000')
    })

    $(".card").click(function(){
        var className = $(this).attr("class").split(" ");
        var card = className[0];
        var stream = className[1];

        if($(this).css("background-color") == "#fff"){
            $("."+className[1]).css("background-color", "red")

        } else {
             $("."+className[1]).css("background-color", "white");
        }

    })

});
