function showTrainers() {
    $("#welcome").hide();
    emptyTableAndButtons();
    $("thead").append(`<tr> <th id="HeadName" class="Sortable">Name</th><th id="HeadAge" class="Sortable">Age</th><th>Edit</th><th>Delete</th></tr>`);
    for (let i = 0; i < trainers.length; i++) {
        $("tbody").append("<tr> <td>" + trainers[i].name + "</td > <td>" + trainers[i].age +
            `</td ><td><button type="button" value="edit" onclick="editTrainer(${i})" class="btn btn-secondary">Edit</button></td><td><button type="button" value="delete" onclick="deleteTrainer(${i})" class="btn btn-danger">Delete</button></td> </tr>`);

    }
    $(".Buttons").append(`<button onclick="addNewTrainer()" class="btn btn-dark">Add new</button>`);
    $("#HeadName").click(function () {
        sort(trainers, "name");
        showTrainers();

    });
    $("#HeadAge").click(function () {
        sort(trainers, "age");
        showTrainers();

    });

}

function editTrainer(index) {
    resetModal();
    $("#ModalTitle").append("Edit Trainer <strong>" + trainers[index].name + "</strong>");
    let template = `<form id="forma" class="form-group">
                        <label for="#TrainerText">Trainer:</label>
                        <input id="TrainerText" type="text" value="${trainers[index].name}" maxlength="50" class="form-control" required>
                        <label for= "#TrainerAgeText" > Age: </label>
                        <input id="TrainerAgeText" type="number" value="${trainers[index].age}" min="18" max="90"
                        oninvalid="this.setCustomValidity('Age must be between 18-90')" oninput="setCustomValidity('')" class="form-control" required>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                    </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            changeTrainer($("#TrainerText").val(), $("#TrainerAgeText").val(), index);
            $("#FormModal").modal('hide');
            showTrainers();
        }
    });

}
function addNewTrainer() {
    resetModal();
    $("#ModalTitle").append("Add New Trainer");
    let template = `<form id="forma" class="form-group">
                        <label for="#TrainerText">Trainer:</label>
                        <input id="TrainerText" class="form-control"type="text" maxlength="50" required>
                        <label for= "#TrainerAgeText" > Age: </label>
                        <input id="TrainerAgeText" class="form-control" type="number" min="18" max="90"
                        oninvalid="this.setCustomValidity('Age must be between 18-90')" oninput="setCustomValidity('')" required>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                    </from>`
    $(".modal-body").append(template)
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            addTrainer($("#TrainerText").val(), $("#TrainerAgeText").val());
            $("#FormModal").modal('hide');
            showTrainers();
        }
    });

}
function addTrainer(trainerName, trainerAge) {
    let newId = trainers.length ? trainers[trainers.length - 1].id + 1 : 1
    let newTrainer = { id: newId, name: trainerName, age: trainerAge };
    trainers.push(newTrainer)

}
function changeTrainer(name, age, index) {
    trainers[index].name = name;
    trainers[index].age = age;
}
function deleteTrainer(index) {

    let comparison = trainers.splice(index, 1);
    showTrainers();
    for (let i = 0; i < courses.length; i++) {
        courses[i].trainer = courses[i].trainer.filter(x => x.id != comparison[0].id);

    }
}
