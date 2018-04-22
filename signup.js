$(function(){
    $('#signupBtn').click(function(){
        var username = $('#usr').val();
        var password = $('#pwd').val();
        var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/addUser";
        url += "?username=" + username;
        url += "&password=" + password;
        url += "&isAdmin=false";
        if(username && password) {
            $.post(url, function(data) {
                if(data){
                    if(data.insertId != -1){
                        window.location = "home.html";
                    } else{
                        $('#alertWindow').removeClass('hidden');
                    }
                }
            });
        }
    });
});