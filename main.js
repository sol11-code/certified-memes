document.addEventListener("DOMContentLoaded", function(){

    if (document.querySelectorAll('.button') !== null){
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('nameInput').addEventListener('change', function(e){
        let nameElement = document.getElementById('name');
        nameElement.innertext = e.target.value;
    });

    document.getElementById('type').addEventListener('change', function(e){
        let nameElement = document.getElementById('name');
        console.log(e);
        let info = document.getElementById('info');
        info.innerText = e.target.value;
        changeCert(e.target.value);
    });

    //change certificate logo and title
    document.getElementById('type').addEventListener('change', function(e){
        let title = document.getElementById('title');
        title.innerText = e.target.value;
        if(this.value === "excellence"){
            document.getElementById("imgCert").src = "img/certified.png";
        } else if (this.value === "chillness") {
            document.getElementById("imgCert").src = "img/satisfaction.webp";
        } else {
            document.getElementById("imgCert").src = "img/quality_control.jpg";
        };
    })

    document.getElementById('form').addEventListener("submit", function (e){
        e.preventDefault();
        console.log(e.target);
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);

        let nameElement = document.getElementById('name');
        let info = document.getElementById('info');
        let title = document.getElementById('title');
        nameElement.innerText = formData.name;
        info.innerText = formData.type;
        title.innerText = formData.type;
    });

    //change certificate design
    function changeCert (value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = "";
        switch (value){
            case 'excellence':
                certificate.classList.add('n1');
            break;
            case 'chillness':
                certificate.classList.add('n2');
            break;
            case 'silence':
                certificate.classList.add('n3');
            break;
        }
    }

    //set today's date
    let todayDate = new Date().toLocaleDateString('en-us',{weekday:"long", year:"numeric", month:"numeric", day:"numeric"});
    document.getElementById('date').innerHTML = todayDate;

    //add print function
    let printCert = document.getElementById('print');
    printCert.addEventListener('click', function(e){
        window.print();
    })

});

    function processForm(form) {

}

//current date
const date = new Date ();
console.log(date);