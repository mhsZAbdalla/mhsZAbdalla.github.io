// trail.js file, contains different trail types that can be found in the game shop.
// Fire Trail
function Trail() {
  this.history = []

  this.update = function() {
    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 10) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    noStroke()
    fill(255, 185, 81)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      ellipse(pos.x,pos.y,i)
    }
  }

}

function Trail2() {
  // Big Blade Trail
  this.history = []

  this.update = function() {

    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 10) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    beginShape()
    noStroke()
    fill(255)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      vertex(pos.x,pos.y)
    }
    endShape()
  }

}

function Trail3() {
  // Electric Trail
  this.history = []

  this.update = function() {
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2,2)
      this.history[i].y += random(-2,2)
    }

    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 10) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    noFill()
    stroke(110,215,250)
    beginShape()
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      vertex(pos.x,pos.y)
    }
    endShape()
  }

}

function Trail4() {
  // Plasma Trail
  this.history = []

  this.update = function() {
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2,2)
      this.history[i].y += random(-2,2)
    }

    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 20) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    noStroke()
    fill(140,0,255)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      ellipse(pos.x,pos.y,i*sin(90))
    }
  }

}
