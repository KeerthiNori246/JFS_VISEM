const personSelect = document.getElementById("personSelect");
const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileImage = document.getElementById("profileImage");

const profiles = {
    john: {
        name: "John Doe",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    keerthi: {
        name: "Keerthi Nori",
        img: "./images/keerthi.jpg"
    },
    mike: {
        name: "Mike Johnson",
        img: "https://randomuser.me/api/portraits/men/52.jpg"
    }
};

personSelect.addEventListener("change", function () {
    const value = this.value;

    if (value && profiles[value]) {
        profileName.textContent = profiles[value].name;
        profileImage.src = profiles[value].img;
        profileCard.style.display = "block";
    } else {
        profileCard.style.display = "none";
    }
});
