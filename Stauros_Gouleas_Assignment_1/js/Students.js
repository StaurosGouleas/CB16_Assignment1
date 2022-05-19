function showStudents() {
    $("#welcome").hide();
    emptyTableAndButtons();
    $("thead").append(`<tr> <th id="HeadName" class="Sortable">Name</th><th id="HeadAge" class="Sortable">Age</th><th id="HeadHours" class="Sortable">Hours</th><th>Edit</th><th>Delete</th></tr>`);
    for (let i = 0; i < students.length; i++) {
        $("tbody").append("<tr> <td>" + students[i].name + "</td > <td>" + students[i].age + "</td ><td>" + students[i].hours +
            `</td ><td><button type="button" value="edit" onclick="editStudent(${i})" class="btn btn-secondary">Edit</button></td><td><button type="button" value="delete" onclick="deleteStudent(${i})" class="btn btn-danger">Delete</button></td> </tr>`);

    }
    $(".Buttons").append(`<button onclick="addNewStudent()" class="btn btn-dark">Add new</button>`);
    $("#HeadName").click(function () {
        sort(students, "name");
        showStudents();

    });
    $("#HeadAge").click(function () {
        sort(students, "age");
        showStudents();

    });
    $("#HeadHours").click(function () {
        sort(students, "hours");
        showStudents();

    });
}

function editStudent(index) {
    resetModal();
    $("#ModalTitle").append("Edit Student <strong>" + students[index].name + "</strong>");
    let template = `<form id="forma" class="form-group">
                        <label for="#StudentText">Student:</label>
                        <input id="StudentText" class="form-control" type="text" value="${students[index].name}"  maxlength="50" required>
                        <label for= "#StudentAgeText" > Age: </label>
                        <input id="StudentAgeText" class="form-control" type="number" value="${students[index].age}" min="18" max="90"
                         oninvalid="this.setCustomValidity('Age must be between 18-90')" oninput="setCustomValidity('')" required>
                        <label for= "#HoursOption" > Hours: </label>
                        <select id="HoursOption" class="form-control">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>                       
                        </select>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                    </from>`
    $(".modal-body").append(template);
    $("#HoursOption").val(students[index].hours);
    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            changeStudent($("#StudentText").val(), $("#StudentAgeText").val(), $("#HoursOption").val(), index);
            $("#FormModal").modal('hide');
            showStudents();
        }
    });
}
function addNewStudent() {
    resetModal();
    $("#ModalTitle").append("Add New Student");
    let template = `<form id="forma" class="form-group">
                        <label for="#StudentText">Student:</label>
                        <input id="StudentText" type="text" maxlength="50" class="form-control" required>
                        <label for= "#StudentAgeText" > Age: </label>
                        <input id="StudentAgeText" class="form-control" type="number" maxlength="2" min="18" max="90"
                         oninvalid="this.setCustomValidity('Age must be between 18-90')" oninput="setCustomValidity('')" required>
                        <label for= "#HoursOption" > Hours: </label>
                        <select id="HoursOption" class="form-control">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        </select>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                    </from>`
    $(".modal-body").append(template);

    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            addStudent($("#StudentText").val(), $("#StudentAgeText").val(), $("#HoursOption").val());
            $("#FormModal").modal('hide');
            showStudents();
        }

    });

}


function addStudent(studentName, studentAge, studentHours) {
    let newId = students.length ? students[students.length - 1].id + 1 : 1
    let newStudent = { id: newId, name: studentName, age: studentAge, hours: studentHours };
    students.push(newStudent);

}

function changeStudent(name, age, hours, index) {
    students[index].name = name;
    students[index].age = age;
    students[index].hours = hours;

}
function deleteStudent(index) {
    let comparison = students.splice(index, 1);
    showStudents();
    for (let i = 0; i < courses.length; i++) {
        courses[i].student = courses[i].student.filter(x => x.id != comparison[0].id);

    }
}

