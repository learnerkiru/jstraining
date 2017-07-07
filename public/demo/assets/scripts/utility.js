jsTraining.demo.utility = {


    callApi: function(obj) {
        $.ajax({
            url: obj.url,
            async: true,
            cache: false,
            dataType: "json",
            data: (typeof obj.data != "undefined") ? obj.data : "",
            method: obj.method,
            success: obj.success,
            error: obj.error
        })
    }
}