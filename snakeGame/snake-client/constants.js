const HOST = '10.0.2.15'; // 165.227.47.243 francis   10.0.2.15 local
const PORT = 50541;

const MESSAGE = {
  //Implement some special keys that send canned messages to the server, for everyone to see.
  1: "Say: hello everyone~",
  2: "Say: good game!!!",
  3: "OFF my way!!!",
  4: "I am good at this~~",
  5: 'Hello I am Dylan!!!'
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
