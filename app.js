$(document).ready(function(){
    var href = $('a').attr('href');
    $('a').attr('href', href.replace(href,'http//:www.raj.com')).html("Raj website");
    // First find the attribute value
    //get the anchor reference and replace the href value
    // change the inner html value from existing to raj website
})