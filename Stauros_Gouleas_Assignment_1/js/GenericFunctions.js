function resetModal() {
    $(".modal").on("hidden.bs.modal", function () {
        $(".modal-title").html("");
        $(".modal-body").html("");
    });
}

function emptyTableAndButtons() {
    $("thead").empty();
    $("tbody").empty();
    $(".Buttons").empty();
}
function sort(array, property) {

    if (isSorted(array, property)) {

        array.reverse();
        return;
    }

    array.sort(function (a, b) {

        let x = a[property].toLowerCase();
        let y = b[property].toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
}

function isSorted(arr, property) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][property].toLowerCase() > arr[i + 1][property].toLowerCase()) {

            return false;

        }
    }
    return true;
}

