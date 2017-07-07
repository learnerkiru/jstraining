JSTraining.demo.utility = {
    callApi: function(obj) {
        $.ajax({
            url: obj.url,
            async: true,
            dataType: "JSON",
            data: typeof(obj.data != "undefined") ? obj.data : "",
            type: obj.method,
            cache: false,
            success: obj.success,
            error: obj.error,

            beforeSend: function() {

            }
        });
    }
}