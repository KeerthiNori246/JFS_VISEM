const subjects = document.querySelectorAll(".subject");
const totalSpan = document.getElementById("total");
const form = document.getElementById("regForm");
const result = document.getElementById("result");

let total = 0;

// Calculate total fee dynamically
subjects.forEach(subject => {
    subject.addEventListener("change", () => {
        total = 0;
        subjects.forEach(s => {
            if (s.checked) {
                total += parseInt(s.value);
            }
        });
        totalSpan.textContent = "₹" + total;
    });
});

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (total === 0) {
        alert("Please select at least one subject");
        return;
    }

    result.style.display = "block";
    result.innerHTML = `
        Registration Successful!<br>
        Student: <b>${name}</b><br>
        Total Fee: <b>₹${total}</b>
    `;

    form.reset();
    totalSpan.textContent = "₹0";
});
