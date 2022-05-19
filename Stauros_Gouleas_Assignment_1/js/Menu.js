$(document).ready(function () {
    $("#HomeLink").click(function () {
        selectedMenu(this);
        showHome();
    });
    $("#CoursesLink").click(function () {
        selectedMenu(this);
        showCourses();
    });

    $("#TrainersLink").click(function () {
        selectedMenu(this);
        showTrainers();
    });

    $("#StudentsLink").click(function () {
        selectedMenu(this);
        showStudents();
    });

    $("#AssignmentsLink").click(function () {
        selectedMenu(this);
        showAssignments();
    });

    $("#TrainersCourseLink").click(function () {
        selectedMenu(this);
        showTrainersCourse();
    });


    $("#StudentsCourseLink").click(function () {
        selectedMenu(this);
        showStudentsCourse();
    });

    $("#AssignmentsCourseLink").click(function () {
        selectedMenu(this);
        showAssignmentsCourse();
    });
    $("#AssignmentsStudentsCourseLink").click(function () {
        selectedMenu(this);
        showAssignmentsStudentsCourse();
    });
    
});

function selectedMenu(menuItem) {
    $("#HomeLink").removeClass("selected")
    $("#CoursesLink").removeClass("selected");
    $("#TrainersLink").removeClass("selected");
    $("#StudentsLink").removeClass("selected");
    $("#AssignmentsLink").removeClass("selected");
    $("#TrainersCourseLink").removeClass("selected");
    $("#StudentsCourseLink").removeClass("selected");
    $("#AssignmentsCourseLink").removeClass("selected");
    $("#AssignmentsStudentsCourseLink").removeClass("selected");
    $(menuItem).addClass("selected");
    
}
