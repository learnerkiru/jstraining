"use strict";
JSTraining.demo.userSignUpForm = {
    initialize: function() {
        //document.getElementById('submit').onclick = this.submitUserSignUpForm();
        document.getElementById('submit').onclick = function() {
            JSTraining.demo.userSignUpForm.submitUserSignUpForm();
        }

        $(document).on("click", "#get_data", function() {
            JSTraining.demo.userSignUpForm.getUserData();
        })
    },
    getUserData: function() {
        JSTraining.demo.utility.callApi({
            url: "/data.json",
            method: "get",
            success: function(data) {
                console.log(data);
            },
            error: function() {
                console.log("We are getting the error");
            }
        })
    },
    submitUserSignUpForm: function() {
        var signUpData = {};
        var signUpForm = document.forms['signup'];

        for (var i = 0; i < signUpForm.length; i++) {
            var elem = signUpForm[i];
            if (elem.type == "checkbox") {
                if (elem.checked == true) {
                    if (typeof signUpData[elem.name] != "undefined") {
                        signUpData[elem.name].push(elem.value);
                    } else {
                        signUpData[elem.name] = [elem.value];
                    }
                }
            } else if (elem.type == "radio") {
                if (elem.checked == true) {
                    signUpData[elem.name] = elem.value;
                }
            } else if (elem.type != "submit" && elem.type != "button") {
                signUpData[elem.name] = elem.value;
                //console.log(elem);
            }
        }

        JSTraining.demo.utility.callApi({
            url: "/data.json",
            method: "post",
            data: signUpData,
            success: function() {
                console.log("Data Posted");
            },
            error: function() {
                console.log("We are getting the error");
            }
        });

        console.log(signUpData);
        return false;
    }

}


















/*
document.getElementById('submit').onclick = function() {
    var signUpData = {};
    var signUpForm = document.forms['signup'];
    console.log("length" + signUpForm.length);

    for (var i = 0; i < signUpForm.length; i++) {
        var elem = signUpForm[i];
        if (elem.type == "checkbox") {
            if (elem.checked == true) {
                if (typeof signUpData[elem.name] != "undefined") {
                    signUpData[elem.name].push(elem.value);
                } else {
                    signUpData[elem.name] = [elem.value];
                }
            }
        } else if (elem.type == "radio") {
            if (elem.checked == true) {
                signUpData[elem.name] = elem.value;
            }
        } else if (elem.type != "submit" && elem.type != "button") {
            signUpData[elem.name] = elem.value;
            console.log(elem);
        }
    }

    console.log(signUpData);
    return false;
};
*/