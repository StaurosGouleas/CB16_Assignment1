function showAssignments() {
    emptyTableAndButtons();
    $("#welcome").hide();
    $("thead").append(`<tr> <th id="HeadAssignments" class="Sortable">Assignment</th><th id="HeadStart" class="Sortable">Start</th><th id="HeadDeadline" class="Sortable">Deadline</th><th>Edit</th><th>Delete</th></tr>`);
    for (let i = 0; i < assignments.length; i++) {
        $("tbody").append("<tr> <td>" + assignments[i].name + "</td > <td>" + assignments[i].startDate + "</td><td>" + assignments[i].deadlineDate +
            `</td ><td><button type="button" value="edit" onclick="editAssignment(${i})" class="btn btn-secondary">Edit</button></td><td><button type="button" value="delete" onclick="deleteAssignment(${i})" class="btn btn-danger">Delete</button></td> </tr>`);

    }
    $(".Buttons").append(`<button onclick="addNewAssignment()" class="btn btn-dark">Add new</button>`);
    $("#HeadAssignments").click(function () {
        sort(assignments, "name");
        showAssignments();

    });
    $("#HeadStart").click(function () {
        sort(assignments, "startDate");
        showAssignments();

    });
    $("#HeadDeadline").click(function () {
        sort(assignments, "deadlineDate");
        showAssignments();

    });
}

function editAssignment(index) {
    resetModal();
    $("#ModalTitle").append("Edit Assignment <strong>" + assignments[index].name + "</strong>");
    let template = `<form id="forma" class="form-group">
                        <label for="#AssignmentText">Assignment:</label>
                        <input id="AssignmentText" class="form-control" type="text" value="${assignments[index].name}" required></input>
                        <label for= "#StartDate" > Start: </label>
                        <input id="StartDate" class="form-control" type="date" required>
                        <label for= "#Deadline" > Deadline: </label>
                        <input id="Deadline" class="form-control" type="date" required>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                    </from>`
    $(".modal-body").append(template)
    $("#StartDate").val(assignments[index].startDate);
    $("#Deadline").val(assignments[index].deadlineDate);
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            changeAssignment($("#AssignmentText").val(), $("#StartDate").val(), $("#Deadline").val(), index);
            $("#FormModal").modal('hide');
            showAssignments();
        }
    });
}
function addNewAssignment() {
    resetModal();
    $("#ModalTitle").append("Add New Assignment");
    let template = `<form id="forma" class="form-group">
                        <label for="#AssignmentText">Assignment:</label>
                        <input id="AssignmentText" class="form-control" type="text" required></input>
                        <label for= "#StartDate" required> Start: </label>
                        <input id="StartDate" class="form-control" type="date" required>
                        <label for= "#Deadline" required> Deadline: </label>
                        <input id="Deadline" class="form-control" type="date" required>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                  </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            addAssignment($("#AssignmentText").val(), $("#StartDate").val(), $("#Deadline").val());
            $("#FormModal").modal('hide');
            showAssignments();
        }
    });
}
function addAssignment(assignmentName, assignmentStartDate, assignmentDeadline) {
    let newId = assignments.length ? assignments[assignments.length - 1].id + 1 : 1
    let newAssignment = { id: newId, name: assignmentName, startDate: assignmentStartDate, deadlineDate: assignmentDeadline };
    assignments.push(newAssignment);
}
function changeAssignment(name, start, deadline, index) {
    assignments[index].name = name;
    assignments[index].startDate = start;
    assignments[index].deadlineDate = deadline;

}

function deleteAssignment(index) {
    let comparison = assignments.splice(index, 1);
    showAssignments();
    for (let i = 0; i < courses.length; i++) {
        courses[i].assignment = courses[i].assignment.filter(x => x.id != comparison[0].id);

    }
}
