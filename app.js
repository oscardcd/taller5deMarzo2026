const app = () => {
  let countHistory = false;

  countHistory = prompt("¿quieres escuchar la historia?");

  if (countHistory === "si") {
    let typeHistory = prompt(
      "¿quieres escuchar la historia?, 1. alegre, 2. triste, 3. terror",
    );

    switch (typeHistory) {
      case "1":
        console.log("La historia comienza pequeño y era feliz...");
        break;
      case "2":
        console.log(
          "La historia comienza en una casa vacía, una niña guardaba la última carta de su abuela. Las palabras decían: 'Te quiero siempre'. Cada noche la releía y las lágrimas caían sobre el papel. Sabía que ya no habría más cartas, pero aquella la acompañaría para siempre.",
        );
        break;
      case "3":
        console.log(
          "La historia comienza en las 3:00 AM cuando escuchó pasos en el pasillo. Su puerta estaba cerrada con llave. Los pasos se detuvieron justo afuera. Algo raspó la madera. Cuando abrió los ojos, la sombra en la ventana no era la de un árbol. Era la de alguien mirando hacia adentro.",
        );
        break;
      default:
        console.log(
          "No reconocí ese tipo. ¿Querías decir alegre, triste o terror? Vuelve a intentarlo.",
        );
    }
  } else {
    console.log("adios, hasta la próxima");
  }
};

app();
