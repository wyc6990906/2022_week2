const HOST = '10.0.2.15';
const PORT = 50541;

const MESSAGE = {
  //Implement some special keys that send canned messages to the server, for everyone to see.
  1: "Say: hello everyone~",
  2: "Say: good game!!!",
  3: "Get out off my way!!!",
  4: "I am too good at this~~"
};

/*
  "Move: up" - move up one square (unless facing down)
  "Move: down" - move down one square (unless facing up)
  "Move: left" - move left one square (unless facing right)
  "Move: right" - move left one square (unless facing left)
  * */
const MOVEMENT = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

module.exports = {
  HOST,
  PORT,
  MOVEMENT,
  MESSAGE
};
