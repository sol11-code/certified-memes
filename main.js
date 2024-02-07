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

    document.getElementById('form').addEventListener("submit", function (e){
        e.preventDefault();
        console.log(e.target);
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);

        let nameElement = document.getElementById('name');
        let textElement = document.getElementById('info');

        nameElement.innerText = formData.nameInput;
        textElement.innerText = formData.type;
    });
});

    function processForm(form) {

}