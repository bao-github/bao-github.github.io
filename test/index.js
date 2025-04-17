async function print() {

  var myDisplayStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });

  document.getElementById("local_video").srcObject = myDisplayStream;
}

