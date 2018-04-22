$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results[1] || 0;
}
var bararray = [["Month", "Num Sightings", { role: "style" } ]];
var linearray = [];
$(function() {
    var start = decodeURIComponent($.urlParam("start"));
    var end = decodeURIComponent($.urlParam("end"));
    var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/getSightingsCountByMonth";
    url += "?start=" + start;
    url += "&end=" + end;
     $.get(url, function(data) {
        if(data) {
          if(data.length > 1) {
            for(var i = 0; i < data.length; i++) {
                var label = data[i].year + "-" + data[i].month;
                if(i%2 == 0) {
                  bararray.push(
                    [ label, data[i].count, "#color: blue"]
                  );
                } else {
                  bararray.push(
                    [ label, data[i].count, "#color: gold"]
                  );
                }
                linearray.push([i, data[i].count]);
            }
          }
        }
        google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var bardata = google.visualization.arrayToDataTable(bararray);

          var barview = new google.visualization.DataView(bardata);
          barview.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);

          var linedata = new google.visualization.DataTable();
          linedata.addColumn('number', 'X');
          linedata.addColumn('number', 'Sightings');
          linedata.addRows(linearray);

          var options1 = {
            title: "Bar Chart",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var options2 = {
            title: "Line Graph",
            width: 600,
            height: 400,
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Sightings'
            }
          };
          var options3 = {
            title: "Pie Chart",
            width: 600,
            height: 400
          };
          var chart1 = new google.visualization.ColumnChart(document.getElementById("barchart"));
          chart1.draw(barview, options1);

          var chart2 = new google.visualization.LineChart(document.getElementById("linegraph"));
          chart2.draw(linedata, options2);

          var chart3 = new google.visualization.PieChart(document.getElementById("piechart"));
          chart3.draw(bardata, options3);
      }
    });
});
        