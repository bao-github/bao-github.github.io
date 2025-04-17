async function print() {

  var myDisplayStream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      aspectRatio: {
        ideal: 16 / 9,
      },
    },
  });

  document.getElementById("local_video").srcObject = myDisplayStream;
}

