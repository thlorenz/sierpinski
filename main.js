'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function defineTriangle(length) {
  return [
      { x: 0, y: 0 }
    , { x: length, y: 0 }
    , { x: length / 2, y: length  }
  ]
}

function calculateNext(p, triang) {
  const rand = Math.floor(Math.random() * 3);
  const corner = triang[rand];
  return {
    x   : (p.x + corner.x) / 2,
    y   : (p.y + corner.y) / 2,
    col : rand
  }
}

function nextPoint(current) {
  const next = calculateNext(current, triang);
  ctx.fillStyle = 
    next.col === 0 ? 'red' :
    next.col === 1 ? 'green' : 'blue';
  ctx.fillRect(next.x, next.y, 1, 1);
  setTimeout(nextPoint.bind(null, next), 0);
}

const triang = defineTriangle(590);
const start = { x: 10, y: 10 };
nextPoint(start, triang);
