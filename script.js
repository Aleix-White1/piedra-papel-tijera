var ia = [
    "https://historiamateriales.ubuinvestiga.es/wp-content/uploads/sites/2/2020/06/Materiales-Una-historia-sobre-la-evolucio%CC%81n-humana-y-los-avances-tecnolo%CC%81gicos-Piedra-piedra.png",
    "https://texlimca.com/api/wp-content/uploads/2021/12/42.png",
    "https://www.cablepelado.es/intranet/inventario/imagenes/Tijera-de-electricista-14-cm-inox.png"
]
var jugador1;
$(document).ready(function () {
    $(".piedra").click(function () {
        jugador1 = 0;
        Swal.fire({
            title: 'Has escogido: ',
            imageUrl: ia[jugador1],
            imageHeight: 200,
            background: 'lightgrey',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Jugar'
        }).then((result) => {
            if (result.isConfirmed) {
                player2(jugador1);
            }
        })

    });

    $(".papel").click(function () {
        jugador1 = 1;
        Swal.fire({
            title: 'Has escogido: ',
            imageUrl: ia[jugador1],
            imageHeight: 200,
            background: 'lightgrey',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Jugar'
        }).then((result) => {
            if (result.isConfirmed) {
                player2(jugador1);
            }
        })

    });
    $(".tijera").click(function () {
        jugador1 = 2;
        Swal.fire({
            title: 'Has escogido: ',
            imageUrl: ia[jugador1],
            imageHeight: 200,
            background: 'lightgrey',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Jugar'
        }).then((result) => {
            if (result.isConfirmed) {
                player2(jugador1);
            }
        })
    });
});

function player2(jugador1) {
    var aleatorio = Math.floor(Math.random() * ia.length);
    var jugador2 = ia[aleatorio];
    jugador1 = ia[jugador1];
    var score = 0;

    if (jugador1 === jugador2) {
        Swal.fire({
            icon: 'question',
            title: "Jugador 2 ha escogido: ",
            imageUrl: jugador2,
            imageHeight: 200,
            text: 'Empate'
        });
    } else if (
        (jugador1 === ia[0] && jugador2 === ia[2]) ||
        (jugador1 === ia[1] && jugador2 === ia[0]) ||
        (jugador1 === ia[2] && jugador2 === ia[1])
    ) {
        Swal.fire({
            icon: 'success',
            title: "Jugador 2 ha escogido: ",
            imageUrl: jugador2,
            imageHeight: 200,
            text: 'Has ganado',
            backdrop: `rgba(0, 255, 0, 0.3)
            url("/img/cf506d6998d68de01e9171f30fc4e287.gif")`
        });

        marcador();
    } else {
        Swal.fire({
            icon: 'error',
            title: "Jugador 2 ha escogido: ",
            imageUrl: jugador2,
            imageHeight: 200,
            text: 'Has perdido',
            backdrop: `rgba(255, 0, 0, 0.3)
            url("/img/perdimos-derrota.gif")
            left top
            no-repeat
            `
            
        });
    }
}

function marcador(){
    var marcador = document.getElementById("score");
    var puntos = parseInt(marcador.innerHTML);
    puntos++;
    marcador.innerHTML = puntos;
}

