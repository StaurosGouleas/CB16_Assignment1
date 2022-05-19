function showAssignmentsCourse() {
    emptyTableAndButtons();
    $("#welcome").hide();
    $("thead").append(`<tr> <th id="HeadCourse" class="Sortable">Course</th><th>Assignments</th><th>Pair</th></tr>`);
    for (let i = 0; i < courses.length; i++) {
        let template = `<tr>
                                <td>${courses[i].name} </td >                                
                                <td><ul style="list-style-type: none">
                                ${courses[i].assignment.map(x => "<li>" + x.name + "</li>").join("")}
                                </ul></td ><td><button type="button" value="edit" onclick="pairAssignmentsCourse(${i})" class="btn btn-secondary">Pair</button></td>
                            </tr>`;
        $("tbody").append(template);

    }
    $("#HeadCourse").click(function () {
        sort(courses, "name");
        showAssignmentsCourse();


    });
}

function pairAssignmentsCourse(index) {
    resetModal();
    $("#ModalTitle").append(`Pair Course <strong>` + courses[index].name + `</strong> with Assignments `);
    let template = `<form class="form-group">
                        <label for="#Assignments">Assignments:</label>
                        <select id="Assignments" class="form-control" size="${assignments.length}" multiple>`

    for (var i = 0; i < assignments.length; i++) {
        if (courses[index].assignment.includes(assignments[i])) {
            template += `<option value="${assignments[i].id}" selected> ${assignments[i].name}</option>`
        }
        else {
            template += `<option value="${assignments[i].id}"> ${assignments[i].name}</option>`
        }
    }
    template += `</select > <br>
                <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        e.preventDefault();
        changeAssignmentsCourse($("#Assignments").val(), index);
        $("#FormModal").modal('hide');
        showAssignmentsCourse();

    });
}

function changeAssignmentsCourse(selectedAssignments, indexCourse) {
    let newAssignments = []
    for (let i = 0; i < selectedAssignments.length; i++) {
        newAssignments.push(assignments.filter(x => x.id == selectedAssignments[i])[0])
    }
    courses[indexCourse].assignment = newAssignments

}
