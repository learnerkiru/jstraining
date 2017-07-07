jsTraining.demo.userSingUp = {
    initialize: function() {
        console.log("Calling Init");
        document.getElementById("submitBtn").onclick = function() {
            jsTraining.demo.userSingUp.userSingupSubmit();
            return false;
        }

        document.getElementById("loaddataBtn").onclick = function() {
            jsTraining.demo.userSingUp.getUserdata();
        }

    },

    getUserdata: function() {
        jsTraining.demo.utility.callApi({
            url: "http://localhost:8080/data.json",
            method: "GET",
            success: function(data) {
                debugger;
                document.getElementById("container").innerHTML = data.data.msg;
                console.log("Sucess");
            },
            error: function() {
                console.log("Error");
            }
        })
    },


    userSingupSubmit: function() {
        console.log("Calling User Submit");
        var inputdata = {};
        var form = document.forms['userSignupForm'];
        for (var i = 0; i < form.length; i++) {
            var elem = form[i];
            if (elem.type == "radio") {
                if (elem.checked == true) {
                    inputdata[elem.name] = elem.value;
                }
            } else if (elem.type == "checkbox") {
                if (elem.checked == true) {
                    if (typeof inputdata[elem.name] != "undefined" && inputdata[elem.name].length) {
                        inputdata[elem.name].push(elem.value);
                    } else {
                        inputdata[elem.name] = [];
                        inputdata[elem.name].push(elem.value);
                    }


                }
            } else if (elem.type != "button") {
                inputdata[elem.name] = elem.value;
            }
        }

        jsTraining.demo.utility.callApi({
            url: "data.json",
            method: "POST",
            data: inputdata,
            success: function(data) {
                console.log("Sucess");
            },
            error: function() {
                console.log("Error");
            }
        })

        console.log(inputdata);


        return false;
    }

}