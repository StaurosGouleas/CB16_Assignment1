function showTrainersCourse() {
    $("#welcome").hide();
    emptyTableAndButtons();
    $("thead").append(`<tr> <th id="HeadCourse" class="Sortable">Course</th><th>Trainers</th><th>Pair</th></tr>`);
    for (let i = 0; i < courses.length; i++) {
        let template = `<tr>
                                <td>${courses[i].name} </td >                                
                                <td><ul style="list-style-type: none">
                                ${courses[i].trainer.map(x => "<li>" + x.name + "</li>").join("")}
                                </ul></td ><td><button type="button" value="edit" onclick="pairTrainersCourse(${i})" class="btn btn-secondary">Pair</button></td>
                            </tr>`;
        $("tbody").append(template);
    }
    $("#HeadCourse").click(function () {
        sort(courses, "name");
        showTrainersCourse();

    });
}

function pairTrainersCourse(index) {
    resetModal();
    $("#ModalTitle").append(`Pair Course <strong>` + courses[index].name + `</strong> with Trainers `);
    let template = `<form class="form-group">
                        <label for="#Trainers">Trainers:</label>
                        <select id="Trainers" class="form-control" size="${trainers.length}" multiple>`

    for (var i = 0; i < trainers.length; i++) {
        if (courses[index].trainer.includes(trainers[i])) {
            template += `<option value="${trainers[i].id}" selected> ${trainers[i].name}</option>`
        }
        else {
            template += `<option value="${trainers[i].id}"> ${trainers[i].name}</option>`
        }
    }
    template += `</select><br><input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
               </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        e.preventDefault();
        changeTrainersCourse($("#Trainers").val(), index);
        $("#FormModal").modal('hide');
        showTrainersCourse();

    });
}

function changeTrainersCourse(selectedTrainers, indexCourse) {
    let newTrainers = []
    for (let i = 0; i < selectedTrainers.length; i++) {
        newTrainers.push(trainers.filter(x => x.id == selectedTrainers[i])[0])
    }
    courses[indexCourse].trainer = newTrainers

}
