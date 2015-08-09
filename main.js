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

function drawTriangle(coords) {
  ctx.fillRect(coords[0].x, coords[0].y, 5, 5);
  ctx.fillRect(coords[1].x, coords[1].y, 5, 5);
  ctx.fillRect(coords[2].x, coords[2].y, 5, 5);
}

function calculateNext(p, triang) {
  const rand = Math.floor(Math.random() * 3);
  const corner = triang[rand];
  return {
    x: (p.x + corner.x) / 2,
    y: (p.y + corner.y) / 2,
  }
}

function nextPoint(current) {
  const next = calculateNext(current, triang);
  ctx.fillRect(next.x, next.y, 1, 1);
  setTimeout(nextPoint.bind(null, next), 0);
}

const triang = defineTriangle(590);
drawTriangle(triang);

var start = { x: 10, y: 10 };

nextPoint(start, triang);
