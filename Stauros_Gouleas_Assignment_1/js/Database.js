

var trainers = [
    { id: 1, name: "Kosmas Marinopoulos", age: "33" },
    { id: 2, name: "Panos Sakellarios", age: "55" },
    { id: 3, name: "Labros Papadhmhtriou", age: "29" },
    { id: 4, name: "Maria Polydoroy", age: "41" },
    { id: 5, name: "Olga Papastratoy", age: "51" }
]



var assignments = [
    { id: 1, name: "HTML", startDate: "2022-12-01", deadlineDate: "2022-12-04" },
    { id: 2, name: "CSS", startDate: "2022-12-10", deadlineDate: "2022-12-24" },
    { id: 3, name: "C#", startDate: "2022-01-10", deadlineDate: "2022-01-26" },
    { id: 4, name: "Creating Round Objects", startDate: "2022-04-12", deadlineDate: "2022-04-19" },
    { id: 5, name: "Creating RPG Game", startDate: "2022-09-17", deadlineDate: "2022-10-10" },
    { id: 6, name: "Creating 3D Game", startDate: "2022-11-28", deadlineDate: "2022-12-19" },
    { id: 7, name: "Complex Numbers", startDate: "2022-10-22", deadlineDate: "2022-10-30" },
    { id: 8, name: "Derivative Functions", startDate: "2022-11-03", deadlineDate: "2022-11-09" }
]

var students = [
    { id: 1, name: "Stayros Goyleas", age: "27", hours: "Part-Time" },
    { id: 2, name: "Giannis Goyleas", age: "31", hours: "Part-Time" },
    { id: 3, name: "Orestis Kaplanis", age: "26", hours: "Full-Time" },
    { id: 4, name: "Philip Mystriotis", age: "22", hours: "Full-Time" },
    { id: 5, name: "Panagiotis Soykis", age: "22", hours: "Full-Time" },
    { id: 6, name: "Mairi Christofakaki", age: "19", hours: "Part-Time" },
    { id: 7, name: "Eleutheria Andrianopoulou", age: "27", hours: "Part-Time" },
    { id: 8, name: "Apostolis Kaplanis", age: "36", hours: "Part-Time" },
    { id: 9, name: "Konstantinos Kremmydas", age: "27", hours: "Part-Time" },
    { id: 10, name: "Alexandra Kontomhna", age: "49", hours: "Full-Time" },
    { id: 11, name: "Gabriel Mystriotis", age: "32", hours: "Full-Time" }
]

var courses = [
    { id: 1, name: "Algebra I", classroom: "A23", semester: "1st", trainer: [trainers[0], trainers[1]], student: [students[0], students[1], students[2], students[3]], assignment: [assignments[6]] },
    { id: 2, name: "Algebra II", classroom: "A23", semester: "2nd", trainer: [trainers[0], trainers[1]], student: [students[0], students[1], students[2], students[3]], assignment: [] },
    { id: 3, name: "Algebra III", classroom: "A23", semester: "4th", trainer: [trainers[0], trainers[1]], student: [students[0], students[1], students[2], students[3]], assignment: [assignments[7]] },
    { id: 4, name: "Introduction to Programming", classroom: "B04", semester: "1st", trainer: [trainers[2]], student: [students[4], students[5], students[6], students[7], students[8]], assignment: [assignments[0], assignments[1]] },
    { id: 5, name: "Object Oriented Programming", classroom: "B04", semester: "3rd", trainer: [trainers[2]], student: [students[4], students[5], students[6], students[7], students[8]], assignment: [assignments[2]] },
    { id: 6, name: "Algorithms", classroom: "A01", semester: "2nd", trainer: [trainers[2], trainers[3]], student: [students[0], students[3], students[6], students[9], students[10]], assignment: [] },
    { id: 7, name: "Unity 2D", classroom: "A01", semester: "3rd", trainer: [trainers[4]], student: [students[0], students[1], students[3], students[4], students[5], students[6], students[9]], assignment: [assignments[4]] },
    { id: 8, name: "Unity 3D", classroom: "A01", semester: "4th", trainer: [trainers[4]], student: [students[0], students[1], students[3], students[4], students[5], students[6], students[9]], assignment: [assignments[3], assignments[5]] },
    { id: 9, name: "Matlab", classroom: "A23", semester: "2nd", trainer: [trainers[1], trainers[2], trainers[3]], student: [students[0], students[10]], assignment: [] }
]
