function showCourses() {
    emptyTableAndButtons();
    $("#welcome").hide();
    $("thead").append(`<tr> <th id="HeadCourses" class="Sortable">Course</th><th id="HeadClassroom" class="Sortable">Classroom</th><th id="HeadSemester" class="Sortable">Semester</th><th>Edit</th><th>Delete</th></tr>`);
    for (let i = 0; i < courses.length; i++) {
        $("tbody").append("<tr> <td>" + courses[i].name + "</td > <td>" + courses[i].classroom + "</td><td>" + courses[i].semester +
            `</td ><td><button type="button" value="edit" onclick="editCourse(${i})" class="btn btn-secondary">Edit</button></td><td><button type="button" value="delete" onclick="deleteCourse(${i})" class="btn btn-danger">Delete</button></td> </tr>`);

    }
    $(".Buttons").append(`<button onclick="addNewCourse()" class="btn btn-dark">Add new</button>`);
    $("#HeadCourses").click(function () {
        sort(courses, "name");
        showCourses();

    });
    $("#HeadClassroom").click(function () {
        sort(courses, "classroom");
        showCourses();

    });
    $("#HeadSemester").click(function () {
        sort(courses, "semester");
        showCourses();

    });

}

function editCourse(index) {
    resetModal();
    $("#ModalTitle").append("Edit Course <strong>" + courses[index].name + "</strong> ");
    let template = `<form id="forma" class="form-group">
                        <label for="#CourseText">Course:</label>
                        <input id="CourseText" type="text" value="${courses[index].name}" maxlength="50" class="form-control" required >
                        <label for= "#ClassroomText" > Classroom: </label>
                        <input id="ClassroomText" type="text" value="${courses[index].classroom}" pattern="[A-Z]{1}[0-9]{2}" maxlength="3" 
                        oninvalid="this.setCustomValidity('Classroom must be one upper case letter and two numbers')" oninput="setCustomValidity('')" class="form-control" required>
                        <label for= "#SemesterOption" > Semester: </label>
                        <select id="SemesterOption" class="form-control">
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        </select>
                        <br>
                        <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                        
                       
                        
                   </from>`
    $(".modal-body").append(template)
    $("#SemesterOption").val(courses[index].semester);
    $("#FormModal").modal('show');

    $("#submitButton").click(function (e) {

        if (forma.checkValidity()) {
            e.preventDefault();
            changeCourse($("#CourseText").val(), $("#ClassroomText").val(), $("#SemesterOption").val(), index);
            $("#FormModal").modal('hide');
            showCourses();

        }





    });

}



function addNewCourse() {
    resetModal();
    $("#ModalTitle").append("Add New Course");
    let template = `<form id="forma" class="form-group">
                        <label for="#CourseText">Course:</label>
                        <input id="CourseText" type="text" maxlength="50" class="form-control" required></input>
                        <label for= "#ClassroomText"  > Classroom: </label>
                        <input id="ClassroomText" class="form-control" type="text" pattern="[A-Z]{1}[0-9]{2}" maxlength="3"
                        oninvalid="this.setCustomValidity('Classroom must be one upper case letter and two numbers')" oninput="setCustomValidity('')" required></input>
                        <label for= "#SemesterOption" > Semester: </label>
                        <select id="SemesterOption" class="form-control">
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        </select>
                        <br>
                         <input type="submit" id="submitButton" value="Submit" class="btn btn-primary">
                        
                        
                   </from>`
    $(".modal-body").append(template)

    $("#FormModal").modal('show');
    $("#submitButton").click(function (e) {
        if (forma.checkValidity()) {
            e.preventDefault();
            addCourse($("#CourseText").val(), $("#ClassroomText").val(), $("#SemesterOption").val());
            $("#FormModal").modal('hide');
            showCourses();
        }
    });
}

function addCourse(courseName, courseClassroom, courseSemester) {
    let newId = courses.length ? courses[courses.length - 1].id + 1 : 1
    let newCourse = { id: newId, name: courseName, classroom: courseClassroom, semester: courseSemester, trainer: [], student: [], assignment: [] }
    courses.push(newCourse);

}

function changeCourse(name, classroom, semester, index) {
    courses[index].name = name
    courses[index].classroom = classroom
    courses[index].semester = semester

}
function deleteCourse(index) {
    courses.splice(index, 1);
    showCourses();
}
