// Speed Limit = 70
// 5b -> 1 point
// Math.floor(1.3)
// 12 poist -> suspended

checkspeed(130);

function checkspeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint){
      console.log("Ok");
      return;
    }
     
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }

