jsTraining.userSignup = {
    formData: null,
    initialize: function() {
        console.log("User Signup Loaded");
        //Register Events
        document.getElementById("submit").onclick = function(event) {
            jsTraining.userSignup.submitForm(event);
        }
        document.getElementById("loadData").onclick = function(evnet) {
            jsTraining.userSignup.getData(event);
        }

    },

    getData: function(evt) {
        debugger;
        jsTraining.utility.callAPI({
            url: "http://localhost:3005/data.json",
            method: "GET",
            dataType: "JSON",
            success: function(result) {
                debugger;
                document.getElementById("container").innerHTML = result.data
            },
            error: function(error) {
                debugger;
                document.getElementById("container").innerHTML = error;
            }

        })
    },

    submitForm: function(event) {
        var form = document.forms['usersignup'];
        console.log("Your Form Length:" + form.length);
        var userData = {};
        for (var i = 0; i < form.length; i++) {
            var element = form[i];
            if (element.type == 'checkbox') {
                if (element.checked == true) {
                    if (typeof userData[element.name] != "undefined") {
                        userData[element.name].push(element.value);
                    } else {
                        userData[element.name] = [];
                        userData[element.name].push(element.value);
                    }

                } else {
                    //userData[element.name].push(element.value);
                }
            } else if (element.type == 'radio') {
                if (element.checked) {
                    userData[element.name] = element.value;
                }
            } else if (element.type != "button") {
                userData[element.name] = element.value;
            }
        }

        jsTraining.utility.callAPI({
            url: "data.json",
            method: "POST",
            data: userData,
            success: function(data) {
                Console.log(data)
            },
            error: function(error) {

            }
        });

        console.log(userData);
    }
}