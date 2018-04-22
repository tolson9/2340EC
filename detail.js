$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

$(function(){
    var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/getSightingByID";
    url += "?id=" + decodeURIComponent($.urlParam("id"));
    $.get(url, function(data) {
        if(data){
            if(data[0]){
                $('#sightingID').text(data[0].id);
                $('#userID').text(data[0].userID);
                $('#date').text(data[0].date);
                $('#locType').text(data[0].locationType);
                $('#address').text(data[0].address);
                $('#city').text(data[0].city);
                $('#borough').text(data[0].borough);
                $('#zip').text(data[0].zipcode);
                $('#lat').text(data[0].latitude);
                $('#long').text(data[0].longitude);
            }
        }
    });
});