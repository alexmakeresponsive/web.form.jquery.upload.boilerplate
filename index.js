$(document).ready(function (e) {
    $("#test-ajax-upload-form").on('submit',(function(e) {
        e.preventDefault();
        $.ajax({
            // sftp://176.57.216.209/home/m/minitiny/public_html/
            //                url: 'http://minitiny.tmweb.ru/api/amocrm/tilda/heeelp/test-ajax-upload-form.php

            url: "http://minitiny.tmweb.ru/api/amocrm/tilda/heeelp/test-ajax-upload-form.php",
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend : function()
            {
                //$("#preview").fadeOut();
                $("#err").fadeOut();
            },
            success: function(data)
            {
                if(data=='invalid')
                {
                    // invalid file format.
                    $("#err").html("Invalid File !").fadeIn();
                }
                else
                {
                    // view uploaded file.
                    $("#preview").html(data).fadeIn();
                    // $("#form")[0].reset();
                    $("#err").html("sent success File !").fadeIn();
                }
            },
            error: function(e)
            {
                $("#err").html(e).fadeIn();
            }
        });
    }));
});