var settings = false;

function resetPos() {
    robot.x = 150;
    robot.y = 370;
    robot2.x = 1154;
    robot2.y = 370;

    pathDrawer2.x = 1154;
    pathDrawer2.y = 370;
    pathDrawer.x = 630;
    pathDrawer.y = 370;
    update();
}

function blueAlliance() {
    robot.x = 150;
    robot.y = 370;
    pathDrawer.x = 150;
    pathDrawer.y = 370;
    update();
}

function redAlliance() {
    robot2.x = 1154;
    robot2.y = 370;
    pathDrawer2.x = 1154;
    pathDrawer2.y = 370;
    update();
}

function toggleSettings() {
    if (settings === false) {
        $("#settings").css("display", "block");
        settings = true;
    } else if (settings === true) {
        $("#settings").css("display", "none");
        settings = false;
    }
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var map = document.getElementById("mapImage");
//draw field, 2px = 1 in. also fillRect(x, y, w, h)
function drawField() {
    ctx.drawImage(map, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", function(e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
update();
/*function drawField() {
		   //field lines
		   ctx.fillStyle = "gray";
		   ctx.fillRect(652, 0, 10, 640);
		   //blue nodes
		   ctx.fillStyle = "blue";
		   ctx.fillRect(120, 220, 10, 440);
		   ctx.fillRect(0, 220, 260, 10);
		   //red nodes
		   ctx.fillStyle = "red";
		   ctx.fillRect(1184, 220, 10, 440);
		   ctx.fillRect(1054, 220, 260, 10);
		   //blue charging line
		   ctx.fillStyle = "blue";
		   ctx.fillRect(360, 310, 10, 440);
		   //charging station
		   ctx.fillRect(220, 480, 150, 10);
		   ctx.fillRect(220, 310, 150, 10);
		   ctx.fillRect(220, 310, 10, 180); //line on side
		   //above charging station
		   ctx.fillRect(260, 220, 10, 100);
		   //red charging line
		   ctx.fillStyle = "red";
		   ctx.fillRect(944, 310, 10, 440);
		   //charging station
		   ctx.fillRect(944, 480, 150, 10);
		   ctx.fillRect(944, 310, 150, 10);
		   ctx.fillRect(1094, 310, 10, 180); //line on side
		   //above charging station
		   ctx.fillRect(1044, 220, 10, 100);
		   //top
		   ctx.fillStyle = "blue";
		   ctx.fillRect(1044, 120, 10, 100);
		   ctx.fillRect(804, 120, 250, 10);
		   ctx.fillRect(804, 0, 10, 130);
		   ctx.fillStyle = "red";
		   ctx.fillRect(260, 120, 10, 100);
		   ctx.fillRect(260, 120, 250, 10);
		   ctx.fillRect(500, 0, 10, 130);
	   }
	   drawField();
   */
function hitbox(x, y) {
    this.x = x;
    this.y = y;
}

function pathPoint(x, y) {
    this.x = x;
    this.y = y;
}

function hitbox2(x, y) {
    this.x = x;
    this.y = y;
}

function pathPoint2(x, y) {
    this.x = x;
    this.y = y;
}
var robot = new hitbox(150, 370);
var pathDrawer = new hitbox(150, 370);
var robot2 = new hitbox(1154, 370);
var pathDrawer2 = new hitbox(1154, 370);
var pressedW = false;
var pressedS = false;
var pressedA = false;
var pressedD = false;
var pressedUp = false;
var pressedDown = false;
var pressedLeft = false;
var pressedRight = false;

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 87) {
        pressedW = true;
    } else if (e.keyCode == 83) {
        pressedS = true;
    } else if (e.keyCode == 65) {
        pressedA = true;
    } else if (e.keyCode == 68) {
        pressedD = true;
    }

    if (e.keyCode == 38) {
        pressedUp = true;
    } else if (e.keyCode == 40) {
        pressedDown = true;
    } else if (e.keyCode == 39) {
        pressedRight = true;
    } else if (e.keyCode == 37) {
        pressedLeft = true;
    }
}
document.onkeyup = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 87) {
        pressedW = false;
    } else if (e.keyCode == 83) {
        pressedS = false;
    } else if (e.keyCode == 65) {
        pressedA = false;
    } else if (e.keyCode == 68) {
        pressedD = false;
    }

    if (e.keyCode == 38) {
        pressedUp = false;
    } else if (e.keyCode == 40) {
        pressedDown = false;
    } else if (e.keyCode == 39) {
        pressedRight = false;
    } else if (e.keyCode == 37) {
        pressedLeft = false;
    }
}
var phase = "auto";

function switchPhase(p) {
    if (p == "auto") {
        phase = "auto";
        Document.getElementById("js-timeout").innerHTML = "2:30";
    } else if (p == "teleop") {
        phase = "teleop";
        Document.getElementById("js-timeout").innerHTML = "2:15";
    }
}
var isDrawing = false;

function toggleDrawing() {
    if (isDrawing === true) {
        isDrawing = false;
        update(isDrawing);
    } else if (isDrawing === false) {
        isDrawing = true;
    }
}

function update() {
    if (isDrawing === false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawField();
        ctx.fillStyle = "#9497ff";
        ctx.fillRect(robot.x, robot.y, 60, 60);
        ctx.fillStyle = "#ff9494";
        ctx.fillRect(robot2.x, robot2.y, 60, 60);
    } else if (isDrawing === true) {
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(pathDrawer.x, pathDrawer.y, 5, 5);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(pathDrawer2.x, pathDrawer2.y, 5, 5);
    }
}
update();
var robotSpeed = 3;

var XvA = 0;
var YvA = 0;
var XvB = 0;
var YvB = 0;

function changeSpeed() {
    robotSpeed = parseInt(document.getElementById("speedInput").value);
}

var maxVelocity = 2.16;

function constrain() {
    if (XvA > maxVelocity) {
        XvA = maxVelocity;
    }
    if (XvB > maxVelocity) {
        XvB = maxVelocity;
    }
    if (YvA > maxVelocity) {
        YvA = maxVelocity;
    }
    if (YvB > maxVelocity) {
        YvB = maxVelocity;
    }

    if (XvA < -1 * maxVelocity) {
        XvA = -1 * maxVelocity;
    }
    if (XvB < -1 * maxVelocity) {
        XvB = -1 * maxVelocity;
    }
    if (YvA < -1 * maxVelocity) {
        YvA = -1 * maxVelocity;
    }
    if (YvB < -1 * maxVelocity) {
        YvB = -1 * maxVelocity;
    }
    if (XvA > -0.04 && XvA < 0.04) {
        XvA = 0;
    }

    if (YvA > -0.04 && YvA < 0.04) {
        YvA = 0;
    }

    if (XvB > -0.04 && XvB < 0.04) {
        XvB = 0;
    }

    if (YvB > -0.04 && YvB < 0.04) {
        YvB = 0;
    }
}
timer = 0;
setInterval(function() {
    timer += 1;
}, 1000);

function smooth(x) {
    return Math.round(x * 100) / 100
}

setInterval(function() {
    update();
    //log
    $("#timeDisplay").text("(time elapsed: " + timer + "s)");
    if (phase == "auto") {
        $("#phaseDisplay").text("Phase: Autonomous");
    } else if (phase == "teleop") {
        $("#phaseDisplay").text("Phase: Teleoperated");
    }

    if (robot.x <= 0) {
        robot.x = 0;
    } else if (robot.x >= 1244) {
        robot.x = 1244;
    } else if (robot.y <= 0) {
        robot.y = 0;
    } else if (robot.y >= 592) {
        robot.y = 592;
    }

    if (robot2.x <= 0) {
        robot2.x = 0;
    } else if (robot2.x >= 1244) {
        robot2.x = 1244;
    } else if (robot2.y <= 0) {
        robot2.y = 0;
    } else if (robot2.y >= 592) {
        robot2.y = 592;
    }

    $("#blueVeloX").text("x velocity: " + Math.abs(smooth(XvA)) + " pixels/ms (" + smooth((Math.abs(smooth(XvA)) * 4.1666666666666667)) + " ft/s);");
    $("#blueVeloY").text("y velocity: " + Math.abs(smooth(YvA)) + " pixels/ms (" + smooth((Math.abs(smooth(YvA)) * 4.1666666666666667)) + " ft/s);");
    $("#redVeloX").text("x velocity: " + Math.abs(smooth(XvB)) + " pixels/ms (" + smooth((Math.abs(smooth(XvB)) * 4.1666666666666667)) + " ft/s);");
    $("#redVeloY").text("y velocity: " + Math.abs(smooth(YvB)) + " pixels/ms (" + smooth((Math.abs(smooth(YvB)) * 4.1666666666666667)) + " ft/s);");

    //real movement
    robot.x -= XvA;
    robot.y -= YvA;
    pathDrawer.x -= XvA;
    pathDrawer.y -= YvA;

    robot2.x -= XvB;
    robot2.y -= YvB;
    pathDrawer2.x -= XvB;
    pathDrawer2.y -= YvB;

    //smooth
    XvA = smooth(XvA);
    XvB = smooth(XvB);
    YvA = smooth(YvA);
    YvB = smooth(YvB);

    //draw path
    if (isDrawing) {
        XvA = 0;
        XvB = 0;
        YvA = 0;
        YvB = 0;
        if (pressedW === true) {
            pathDrawer.y -= robotSpeed;
        } else if (pressedS === true) {
            pathDrawer.y += robotSpeed;
        } else if (pressedA === true) {
            pathDrawer.x -= robotSpeed;
        } else if (pressedD === true) {
            pathDrawer.x += robotSpeed;
        }

        if (pressedUp === true) {
            pathDrawer2.y -= robotSpeed;
        } else if (pressedDown === true) {
            pathDrawer2.y += robotSpeed;
        } else if (pressedLeft === true) {
            pathDrawer2.x -= robotSpeed;
        } else if (pressedRight === true) {
            pathDrawer2.x += robotSpeed;
        }
    } else {
        pathDrawer.x = robot.x
        pathDrawer.y = robot.y
        if (pressedW === true) {
            YvA += 0.0624;
            constrain();
        } else if (pressedS === true) {
            YvA -= 0.0624;
            constrain();
        } else if (pressedD === true) {
            XvA -= 0.0624;
            constrain();
        } else if (pressedA === true) {
            XvA += 0.0624;
            constrain();
        } else {

            //decelerate
            if (XvA < 0) {
                XvA += 0.0624;
                constrain();
            } else if (XvA > 0) {
                XvA -= 0.0624;
                constrain();
            }

            if (YvA < 0) {
                YvA += 0.0624;
                constrain();
            } else if (YvA > 0) {
                YvA -= 0.0624;
                constrain();
            }
        }

        pathDrawer2.x = robot2.x
        pathDrawer2.y = robot2.y
        if (pressedUp === true) {
            YvB += 0.0624;
            constrain();
        } else if (pressedDown === true) {
            YvB -= 0.0624;
            constrain();
        } else if (pressedRight === true) {
            XvB -= 0.0624;
            constrain();
        } else if (pressedLeft === true) {
            XvB += 0.0624;
            constrain();
        } else {

            //decelerate
            if (XvB < 0) {
                XvB += 0.0624;
                constrain();
            } else if (XvB > 0) {
                XvB -= 0.0624;
                constrain();
            }

            if (YvB < 0) {
                YvB += 0.0624;
                constrain();
            } else if (YvB > 0) {
                YvB -= 0.0624;
                constrain();
            }
        }
    }

    if (settings === true) {
        $('#settingsButton').text("Close Settings");
    } else {
        $('#settingsButton').text("Open Settings");
    }
}, 1)
//timer
var interval;

function pauseTimer() {
    clearInterval(interval);
}

function resumeTimer() {
    countdown();
}

function countdown() {
    clearInterval(interval);
    interval = setInterval(function() {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
        $('.js-timeout').html(minutes + ':' + seconds);
        if (minutes == 0 && seconds == 0) clearInterval(interval);
        if (minutes == 2 && seconds == 30) {
            phase = "teleop";
        } else if (minutes == 2 && seconds == 45) {
            phase = "autonomous";
        }
    }, 1000);
}
$('#js-pauseTimer').click(function() {
    pauseTimer();
    $("#gameTimeDisplay").css("color", "gray");
});
$('#js-startTimer').click(function() {
    $('.js-timeout').text("2:30");
    countdown();
    $("#gameTimeDisplay").css("color", "red");
});
$('#js-resumeTimer').click(function() {
    resumeTimer();
    $("#gameTimeDisplay").css("color", "red");
});
$('#js-resetTimer').click(function() {
    $('.js-timeout').text("2:30");
    clearInterval(interval);
    $("#gameTimeDisplay").css("color", "black");
});