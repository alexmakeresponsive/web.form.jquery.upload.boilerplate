$(document).ready(function (e) {
    $("#test-ajax-upload-form").on('submit',(function(e) {
        e.preventDefault();


        $.ajax({
            url: "http://minitiny.tmweb.ru/api/amocrm/tilda/heeelp/test-ajax-upload-form.php",
            type: 'POST',
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false
        })
            .done(function(response, textStatus) {
                console.log('done: response = ', JSON.parse(response));
                // console.log('done: status = ', response);
                // console.log('done: textStatus = ', textStatus);
            })
            .fail(function(response, textStatus) {
                console.log('fail: response = ', response.responseText);
                console.log('fail: status = ', response.status);
                // console.log('fail: textStatus = ', textStatus);
            });
    }));
});