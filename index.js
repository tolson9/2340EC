$(function(){
    $('#loginBtn').click(function(){
        var username = $('#usr').val();
        var password = $('#pwd').val();
        var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/checkPassword";
        url += "?username=" + username;
        url += "&password=" + password;
        if(username && password) {
            $.get(url, function(data) {
                if(data){
                    if(data[0].validated){
                        window.location = "home.html";
                    } else{
                        $('#alertWindow').removeClass('hidden');
                    }
                }
            });
        }
    });
});