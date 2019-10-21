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


});
