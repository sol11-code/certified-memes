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
        let infoElement = document.getElementById('info');
        infoElement.innerText = e.target.value;
    });

    /*document.getElementById('date').addEventListener('change', function(e){
        let dateElement = document.getElementById('date');
    });*/

    document.getElementById('form').addEventListener("submit", function (e){
        e.preventDefault();

        console.log(e.target);

        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);

        let nameElement = document.getElementById('name');
        let textElement = document.getElementById('info');

        nameElement.innerText = formData.name;
        textElement.innerText = formData.type;
    });

    function changeCert(value){
        let certificate = document.getElementById('certificate');
        certificate.classList = "";
        switch(value){
            case 'A':
                certificate.classList.add('n1');
            break;
            case 'B':
                certificate.classList.add('n2');
            break;
            case 'C':
                certificate.classList.add('n3');
            break;
        }
    }

    let todayDate = new Date();
    document.getElementById('date').innerHTML = todayDate;

});

    function processForm(form) {

}

document.getElementById("")

//current date
const date = new Date ();
console.log(date);

//const todayDate = new Date();
    //document.getElementById('date') = todayDate;
    //dateElement.innerText = formData.date