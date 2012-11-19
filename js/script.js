$(function() {
    var myurl="http://kiosko.net/es/general.html";
    //make the call to YQL 
    $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent(myurl)+
                "%22&format=xml'&callback=?",
        function(data){
            if(data.results[0]){
                addFirstPages(data.results[0]);
                applyMasonry();
            } else {
                var errormsg = 'Error: could not load the page.';
                conole.log(errormsg);
            }
        }
      );
});

function addFirstPages(data) {
    var $dom;
    dom = $('<div>').html(data);
    $('.thcover > img', dom).each(function(index) {
        $('#content').append("<a href='" + $(this).attr("src").replace("200", "750") + "' target='_blank'><img class='frontpage' src='" + $(this).attr("src").replace("200", "300") + "'/></a>");
    });
}

function applyMasonry() {
    var $container = $('#content');
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : 'img',
            isFitWidth: true
        });
    });
}
