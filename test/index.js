async function conn1() {

  var myDisplayStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });

  document.getElementById("local_video1").srcObject = myDisplayStream;
}

async function conn2() {

  var myDisplayStream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: true,
  });

  document.getElementById("local_video2").srcObject = myDisplayStream;
}