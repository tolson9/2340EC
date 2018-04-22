$(function(){
    var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/get50Sightings";
    $.get(url, function(data) {
        if(data){

            var code = "";
            for(var i = 0; i < data.length; i++) {
                code += 
                "<a href = 'detail.html?id=" + data[i].id + "' class='list-group-item'>Report #" + data[i].id + "</a>"
            }

            $('#load-reports .list-group').html(code);
        }
    });
});