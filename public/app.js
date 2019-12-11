// click listener for takes the info from the form fields and adds it to db and adds it to the table, with buttons to update and delete.
$("#createPlan").on("click", () => {
    $.ajax({
        type: "POST",
        url: "/submit",
        dataType: "json",
        data: {
            plan: $("#plan").val(),
            workout: $("#workout").val(),
            created: Date.now()
        }
    }).then( (data) => {
        console.log(data);
        newPlan();
        $("#plan").val("");
        $("#workout").val("");
    })
})


// function that takes workout plan from database and displays it in a table
function newPlan() {
    $("#plans").empty();
    $.getJSON("/plans", function (data) {
        for (var i = 0; i < data.length; i++) {
            $("#plans").prepend("<tr><td>" + data[i].plan + "</td><td>" +data[i].workout + "</td><td><button class='edit' data-id='" + data[i]._id + "'>Edit</button></td></tr>")
        }
        $("plans").prepend("<tr><th>Plan</th><th>Workout</th><th>Edit</th></tr>");
    })
}


router.get("/newPlan", (req, res) => {
    res.render("newPlan")
})
router.get("/existing", (req, res) => {
    res.render("existing")
})