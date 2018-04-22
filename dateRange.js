$(function(){
    $('#chart').click(function() {
        var start = $('#startdate').val();
        var end = $('#enddate').val();

        start = start.replace(/\//g, "-");
        end = end.replace(/\//g, "-");
        url = "chart.html"
        url += "?start=" + start;
        url += "&end=" + end;
        window.location = url;
    });
    $('#map').click(function() {
        var start = $('#startdate').val();
        var end = $('#enddate').val();

        start = start.replace(/\//g, "-");
        end = end.replace(/\//g, "-");
        url = "map.html"
        url += "?start=" + start;
        url += "&end=" + end;
        window.location = url;
    });
});