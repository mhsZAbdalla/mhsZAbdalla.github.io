function Trail() {
  //this.x = x
  //this.y = y
  this.history = []

  this.update = function() {
    //this.x += random(-10,10)
    //this.y += random(-10,10)
  //  this.x = mouseX
  //  this.y = mouseY

    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 10) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    //beginShape()
    //noFill()
    noStroke()
    fill(255, 185, 81)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      ellipse(pos.x,pos.y,i)
      //vertex(pos.x,pos.y)
    }
    //endShape()
  }

}

function Trail2() {
  //this.x = x
  //this.y = y
  this.history = []

  this.update = function() {
    //this.x += random(-10,10)
    //this.y += random(-10,10)
  //  this.x = mouseX
  //  this.y = mouseY

    var v = createVector(mouseX,mouseY)
    this.history.push(v)

    if (this.history.length > 10) {
      this.history.splice(0,1)
    }

  }

  this.display = function() {
    beginShape()
    //noFill()
    noStroke()
    fill(255)
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i]
      //ellipse(pos.x,pos.y,i)
      vertex(pos.x,pos.y)
    }
    endShape()
  }

}
