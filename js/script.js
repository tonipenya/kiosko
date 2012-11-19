$(function() {
    var $dom;
    
    var myurl="http://kiosko.net/es/general.html";
    //make the call to YQL 
    $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent(myurl)+
                "%22&format=xml'&callback=?",
        function(data){
          if(data.results[0]){
            //this data.results[0] is the return object you work with, 
            //if you actually want to do something with the returned json
            dom = $('<div>').html(data.results[0]);
            $('.thcover > img', dom).each(function(index) {
                $('#content').append("<a href='" + $(this).attr("src").replace("200", "750") + "' target='_blank'><img class='frontpage' src='" + $(this).attr("src").replace("200", "300") + "'/></a>");
            });

            var $container = $('#content');
            $container.imagesLoaded( function(){
                $container.masonry({
                    itemSelector : 'img',
                    isFitWidth: true
                });
            });
          } else {
            var errormsg = 'Error: could not load the page.';
            //output to firebug's console
            //use alert() for other browsers/setups
            conole.log(errormsg);
          }
        }
      );
/*
    var $container = $('#content');
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : 'img',
            isFitWidth: true
        });
    });
  */  

/*
    $.ajax({
        url : "http://kiosko.net/es/general.html",
        success : function(result){
            dom = $('<div>').html(result);
            $('.thcover > img', dom).each(function(index) {
                $('#content').append("<a href='" + $(this).attr("src").replace("200", "750") + "' target='_blank'><img class='frontpage' src='" + $(this).attr("src").replace("200", "300") + "'/></a>");
            });
        }
    });
    */
});

