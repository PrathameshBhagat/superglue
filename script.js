gsap.registerPlugin(TextPlugin)

const timeline = gsap.timeline({defaults:{ }});


for(var i =0 ; i <5; i++){
    timeline.to('.box',{x : '-100%', ease: 'bounce'})
    timeline.to('.box',{x : '100%', ease: 'bounce'})
}

timeline.to('.box',{x : '00%', ease: 'bounce'})
timeline.to('.box',{ width : '550px'})
timeline.to('#logo-text',{ opacity : 1})
timeline.to('.box',{ backgroundColor : "white"});
timeline.to('.box',{  border: "5px solid black" })
timeline.to('.box',{ color:"black"})

timeline.to('.box',{ y:"-100"})
timeline.to('.box',{ x:"00"})
timeline.to('.text',{ display: 'block'})
timeline.to('.text',{ opacity : 1})
timeline.to('.text',{ text:"Integrations  "})
timeline.to('.text',{ duration :3,text:"Integrations in minutes .... "})
timeline.to('.text',{ duration :2,text:"Integrations in minutes ......"})
timeline.to('.text',{ duration :3,text:"Integrations in minutes ......"})
timeline.to('.text',{ duration :2,text:"."})
timeline.to('.text',{ duration :1,text:"0"})
timeline.to('.text',{ duration :1,text:"1"})
timeline.to('.text',{ duration :1,text:"2"})
timeline.to('.text',{ duration :1,text:"3"})

timeline.to('.box',{ background:'linear-gradient(45deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

timeline.to('.box',{ background:'linear-gradient(360deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

timeline.to('.box',{ background:'linear-gradient(45deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

timeline.to('.box',{ background:'black'})
timeline.to('.box',{ background:'white', fontSize:"700%",  height: "250px",width: "750px"})
timeline.to('.box',{ fontSize:"500%",  height: "100px",width: "550px"})

timeline.to('.text',{ duration :1,text:"&check;", fontSize:"1000%"})
timeline.to('.text',{ duration :3,text:"&check;", fontSize:"500%"})
timeline.to('.text',{ duration :3,text:"Integeration complete...", fontSize:"500%"})
timeline.to('.text',{ duration :3,text:" As simple as that"})
timeline.to('.text',{ duration :3,text:" As simple as that...."})
timeline.to('.text',{ duration :3,text:""})


timeline.to('.text',{ display:'none'})
timeline.to('.box',{ background:'black'})
timeline.to('.box',{ background:'white', fontSize:"1000%",  height: "500px",width: "1000px"})

timeline.to('.box',{ background:'white', fontSize:"0%",  height: "0px",width: "0px"})

timeline.to('.box',{ display:'none'})
