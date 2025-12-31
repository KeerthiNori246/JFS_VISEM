function showDetails() {
    var select = document.getElementById("nameSelect").value;
    var photo = document.getElementById("photo");
    var infoText = document.getElementById("infoText");

    if (select === "") {
        photo.src = "";
        infoText.innerText = "Please select a person.";
        return;
    }

    var data = {
        guido: {
            img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Guido_van_Rossum_OSCON_2006.jpg",
            info: "Guido van Rossum is the creator of Python."
        },
        dennis: {
            img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Dennis_Ritchie_2011.jpg",
            info: "Dennis M. Ritchie created the C programming language."
        },
        james: {
            img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/James_Gosling_Oct_2008.jpg",
            info: "James Gosling is the creator of Java."
        },
        stroustrup: {
            img: "https://upload.wikimedia.org/wikipedia/commons/5/53/BjarneStroustrup.jpg",
            info: "Bjarne Stroustrup created C++."
        }
    };

    photo.src = data[select].img;
    infoText.innerText = data[select].info;
}
