$(document).ready(function (e) {
    $("#test-ajax-upload-form").on('submit',(function(e) {
        e.preventDefault();
        // $.ajax({
        //     url: "http://minitiny.tmweb.ru/api/amocrm/tilda/heeelp/test-ajax-upload-form.php",
        //     type: "POST",
        //     data:  new FormData(this),
        //     contentType: false,
        //     cache: false,
        //     processData:false,
            // beforeSend : function()
        //     {
        //         //$("#preview").fadeOut();
        //         $("#err").fadeOut();
        //     },
        //     success: function(data)
        //     {
        //         if(data=='invalid')
        //         {
        //             // invalid file format.
        //             $("#err").html("Invalid File !").fadeIn();
        //         }
        //         else
        //         {
        //             $("#err").html(data).fadeIn();
        //         }
        //     },
        //     error: function(e)
        //     {
        //         $("#err").html(e).fadeIn();
        //     }
        // });

        $.ajax({
            type: 'POST',
            url: "http://minitiny.tmweb.ru/api/amocrm/tilda/heeelp/test-ajax-upload-form.php",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false
        })
            .done(function(response, textStatus) {
                console.log('done: response = ', response);
                console.log('done: textStatus = ', textStatus);
            })
            .fail(function(response, textStatus) {
                console.log('fail: response = ', response);
                console.log('fail: textStatus = ', textStatus);
            });
    }));
});