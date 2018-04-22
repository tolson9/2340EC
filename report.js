$(document).ready(function(){
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('#dateContainer').length>0 ? $('#dateContainer').parent() : "body";
  var options={
    format: 'yyyy/mm/dd',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});

$(function(){
    $('#submit').click(function() { 
        var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/addSighting";
        var date = $('#date').val();
        date = date.replace(/\//g, "-");

        url += "?userID=" + "1";
        url += "&date=" + $('#date').val();
        url += "&locationType=" + $('#locType input').val();
        url += "&address=" + $('#address input').val();
        url += "&city=" + $('#city input').val();
        url += "&borough=" + $('#borough input').val();
        url += "&zipcode=" + $('#zip input').val();
        url += "&latitude=" + $('#lat input').val();
        url += "&longitude=" + $('#long input').val();
        $.post(url, function(data) {
            if(data) {
                if(data[0].insertID != -1) {
                    $('#hide').removeClass('hidden');
                }
            }
        });
    });
});