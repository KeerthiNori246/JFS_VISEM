function registerCourse() {
    let name = document.getElementById("studentName").value;
    let course = document.getElementById("course").value;

    if (name === "" || course === "") {
        alert("Please enter name and select a course");
        return;
    }

    let list = document.getElementById("registrationList");
    let li = document.createElement("li");
    li.textContent = name + " registered for " + course;

    list.appendChild(li);

    // clear fields
    document.getElementById("studentName").value = "";
    document.getElementById("course").value = "";
}
