navigator.mediaDevices.getUserMedia({audio:true,video:false}).then((stream)=>{
    console.log(stream)

    let video=document.getElementById('video')

video.srcObject=stream
video.onloadedmetadata=(ev)=>video.onplay()

}).catch((err)=>console.log(err))