document.getElementById('length_s').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext').innerText = "Периметр: " + this.value * 4 + " м";
    }
)
document.getElementById('length_s').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext2').innerHTML = "Площадь: " + this.value * this.value + " м<sup>2</sup>";
    }
)


document.getElementById('length_t').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext3').innerText = "Периметр: " + this.value * 3 + " м";
    }
)
document.getElementById('length_t').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext4').innerHTML = "Площадь: " + (Math.pow(this.value, 2) * 0.433) + " м<sup>2</sup>";
    }
)


document.getElementById('length_c').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext5').innerText = "Длина окружности: " + this.value * 6.28 + " м";
    }
)
document.getElementById('length_c').addEventListener
(
    'input',
    function (e){
        document.getElementById('pertext6').innerHTML = "Площадь: " + (Math.pow(this.value, 2) * 3.14) + " м<sup>2</sup>";
    }
)