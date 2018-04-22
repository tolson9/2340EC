$(function(){
    $('#recoveryBtn').click(function(){
        var username = $('#usr').val();
        var password = $('#pwd').val();
        var url = "https://2xcxiwvvy8.execute-api.us-east-2.amazonaws.com/prod/passwordRecovery";
        url += "?username=" + username;
        if(username) {
            $.post(url, function(data) {
                if(data){
                    if(data.success == true){
                        $('#alertWindow').removeClass('hidden');
                    }
                }
            });
        }
    });
});