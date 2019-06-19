let js = new PointJS('2d', 400, 300, {backgroundColor: '#757575'});

let game = js.game;

let rect = js.game.newRectObject({
  x: 100,
  y: 150,
  w: 100,
  h: 40,
  fillColor: "red"
});

game.createLoop('rotation', function () {
  rect.draw();
});


game.setLoop('rotation');
game.start();