var play = require("play-audio");
var dom = require('domquery');

var player = play('http://stream-tx4.radioparadise.com/ogg-192').autoplay();

dom(window).on('> space', toggle);

function toggle () {
  if (player.element().paused) return player.play();
  player.pause();
}
