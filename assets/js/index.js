var toggle = document.getElementById('container');
var priceBasic = document.getElementById('card__price__basic');
var priceMiddle = document.getElementById('card__price__middle');
var priceMaster = document.getElementById('card__price__master');
var mensually = false;

window.onload = function(){
    priceAnnualy();
    mensually = true;
}

toggle.onclick = function(){
    toggle.classList.toggle('active');

    if(mensually){
        priceMensually();
        mensually = false;
    }

    else{
        priceAnnualy();
        mensually = true;
    }

}

function priceAnnualy(){
    priceBasic.innerHTML = '$199.99';
    priceMiddle.innerHTML = '$249.99';
    priceMaster.innerHTML = '$399.99';
}

function priceMensually(){
    priceBasic.innerHTML = '$19.99';
    priceMiddle.innerHTML = '$24.99';
    priceMaster.innerHTML = '$39.99';
}