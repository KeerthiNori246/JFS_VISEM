const timetable = [
    { day: "MON", session: "FN", batch: "VI-SU-B1", course: "JFS", room: "5102", faculty: "XYZ" },
    { day: "TUE", session: "FN", batch: "VI-SU-B1", course: "CP", room: "5102", faculty: "XYZ" },
    { day: "WED", session: "FN", batch: "VI-SU-B1", course: "CP", room: "5102", faculty: "XYZ" },
    { day: "THU", session: "AN", batch: "VI-SU-B1", course: "DBS", room: "5102", faculty: "XYZ" },
    { day: "FRI", session: "AN", batch: "VI-SU-B1", course: "JFS", room: "5102", faculty: "XYZ" },

    { day: "SAT", session: "AN", batch: "VI-SU-B1", course: "CP", room: "5102", faculty: "BP" },
    { day: "TUE", session: "FN", batch: "VI-SU-B2", course: "CP", room: "5106", faculty: "BP" },

    { day: "MON", session: "FN", batch: "VI-SU-B2", course: "DBS", room: "5106", faculty: "BR" },

    { day: "WED", session: "FN", batch: "VI-SU-B2", course: "JFS", room: "5106", faculty: "patro" },

    { day: "MON", session: "FN", batch: "VI-SN-B1", course: "JFS", room: "5204", faculty: "KMY" },
    { day: "TUE", session: "FN", batch: "VI-SN-B1", course: "DBS", room: "5204", faculty: "PVNR" },

    { day: "WED", session: "FN", batch: "VI-SN-B1", course: "CP", room: "5204", faculty: "CVR" }
];

function showTimetable() {
    const faculty = document.getElementById("facultySelect").value;
    const body = document.getElementById("tableBody");

    body.innerHTML = "";

    if (!faculty) {
        body.innerHTML = `
            <tr class="placeholder">
                <td colspan="5">Please select a faculty</td>
            </tr>`;
        return;
    }

    const rows = timetable.filter(t => t.faculty === faculty);

    if (rows.length === 0) {
        body.innerHTML = `
            <tr class="placeholder">
                <td colspan="5">No classes assigned</td>
            </tr>`;
        return;
    }

    rows.forEach(r => {
        body.innerHTML += `
            <tr>
                <td>${r.day}</td>
                <td>${r.session}</td>
                <td>${r.batch}</td>
                <td>${r.course}</td>
                <td>${r.room}</td>
            </tr>
        `;
    });
}

