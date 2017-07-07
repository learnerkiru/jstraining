jsTraining.utility = {
    callAPI: function(obj) {

        $.ajax({
            url: obj.url,
            method: obj.method,
            dataType: "JSON",
            data: obj.data,
            success: obj.success,
            error: obj.error
        })


    }
}