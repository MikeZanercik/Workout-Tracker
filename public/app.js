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
        $("")
    })
})
// function that takes workout plan from database and displays it in a table
function newPlan() {
    $("#plans").empty();
    $.getJSON()
}