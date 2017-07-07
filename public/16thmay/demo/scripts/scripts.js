jsTraining.batch.usersignup = {
    initialize: function() {
        console.log("Calling Initialize");
        document.getElementById("submit").addEventListener("click", function() {
            jsTraining.batch.usersignup.getFormdata();
        })

    },
    getFormdata: function() {
        console.log("Calling Get FormData");
        var subFormObj = {};

        var formData = document.forms['userSignup'];
        for (var i = 0; i < formData.length; i++) {
            var elem = formData[i];
            if (elem.type == 'checkbox') {
                if (elem.checked) {
                    debugger;
                    if (subFormObj[elem.name] != undefined) {
                        subFormObj[elem.name].push(elem.value);
                    } else {
                        subFormObj[elem.name] = [];
                        subFormObj[elem.name].push(elem.value);
                    }
                }
                subFormObj[elem.name] = elem.value;
            } else if (elem.type == 'radio') {
                if (elem.checked) {
                    subFormObj[elem.name] = elem.value;
                }


            } else if (elem.type != 'button') {
                subFormObj[elem.name] = elem.value;
            }
        }

        console.log(subFormObj);

    }
}