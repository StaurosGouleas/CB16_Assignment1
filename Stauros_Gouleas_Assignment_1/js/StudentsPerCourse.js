function showStudentsCourse() {
    $("#welcome").hide();
    emptyTableAndButtons();
    $("thead").append(`<tr> <th id="HeadCourse" class="Sortable">Course</th><th>Students</th><th>Pair</th></tr>`);
    for (let i = 0; i < courses.length; i++) {
        let template = `<tr>
                                <td>${courses[i].name} </td >                                
                                <td><ul style="list-style-type: none">
                                ${courses[i].student.map(x => "<li>" + x.name + "</li>").join("")}
                                </ul></td ><td><button type="button" value="edit" onclick="pairStudentsCourse(${i})" class="btn btn-secondary">Pair</button></td>
                            </tr>`;
        $("tbody").append(template);
    }
    $("#HeadCourse").click(function () {
        sort(courses, "name");
        showStudentsCourse();
    });
}

function pairStudentsCourse(index) {
    resetModal();
    $("#ModalTitle").append(`Pair Course <strong>` + courses[index].name + `</strong> with Students `);
    let template = `<form class="form-group">
                        <label for="#Students">Students:</label>
                        <select id="Students" class="form-control" size="${students.length}" multiple>`

    for (var i = 0; i < students.length; i++) {
        if (courses[index].student.includes(students[i])) {
            template += `<option value="${students[i].id}" selected> ${students[i].name}</option>`
        }
        else {
            template += `<option value="${students[i].id}"> ${students[i].name}</option>`
        }
    }
    template += `</select><br>
                 <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                 </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        e.preventDefault();
        changeStudentsCourse($("#Students").val(), index);
        $("#FormModal").modal('hide');
        showStudentsCourse();

    });
}
function changeStudentsCourse(selectedStudents, indexCourse) {
    let newStudents = []
    for (let i = 0; i < selectedStudents.length; i++) {
        newStudents.push(students.filter(x => x.id == selectedStudents[i])[0])
    }
    courses[indexCourse].student = newStudents

}