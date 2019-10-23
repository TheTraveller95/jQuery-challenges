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

    $("#stream1, #stream2, #stream3").click(function(){
        var idName2 = $(this).attr("id");
        var className = $(".card").attr("class").split(" ");
        var className2 = className[1];
        console.log(className);

        if("idName2" == "className2"  && $(className).css("background-color")=="#fff"){
            $("."+className2).css("background-color", "red");

        } else {
             $("."+className2).css("background-color", "white");
        }

    })

});
