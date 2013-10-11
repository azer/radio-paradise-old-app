var audio = require("play-audio");
var dom = require('domquery');
var player;

play();

dom(window).on('> space', toggle);

function toggle () {
  if (!player) return play();
  stop();
}

function play () {
  player = audio('http://stream-tx4.radioparadise.com/ogg-192').autoplay();
}

function stop () {
  player.element().parentNode.removeChild(player.element());
  player = undefined;
}
