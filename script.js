gsap.registerPlugin(TextPlugin)

const t  = gsap.timeline({defaults:{ }});

t.to('.text',{  display: 'none'})

for(var i =0 ; i <5; i++){
    t.to('.box',{x : '-100%', ease: 'bounce'})
    t.to('.box',{x : '100%', ease: 'bounce'})
}

t.to('.box',{x : '00%', ease: 'bounce'})
t.to('.box',{ width : '550px'})
t.to('#logo-text',{ opacity : 1})
t.to('.box',{ backgroundColor : "white"});
t.to('.box',{  border: "5px solid black" })
t.to('.box',{ color:"black"})

t.to('.box',{ y:"-100"})
t.to('.box',{ x:"00"})
t.to('.text',{ display: 'block'})
t.to('.text',{ opacity : 1})
t.to('.text',{ text:"Integrations  "})
t.to('.text',{ duration :3,text:"Integrations in minutes .... "})
t.to('.text',{ duration :2,text:"Integrations in minutes ......"})
t.to('.text',{ duration :3,text:"Integrations in minutes ......"})
t.to('.text',{ duration :2,text:"."})
t.to('.text',{ duration :1,text:"0"})
t.to('.text',{ duration :1,text:"1"})
t.to('.text',{ duration :1,text:"2"})
t.to('.text',{ duration :1,text:"3"})

t.to('.box',{ background:'linear-gradient(45deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

t.to('.box',{ background:'linear-gradient(360deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

t.to('.box',{ background:'linear-gradient(45deg,#00ffff,#cc33ff,#ff33cc,#0000b3,#00ff00,#00ffff,#ffff00,#ff00ff)'})

t.to('.box',{ background:'black'})
t.to('.box',{ background:'white', fontSize:"700%",  height: "250px",width: "750px"})
t.to('.box',{ fontSize:"500%",  height: "100px",width: "550px"})

t.to('.text',{ duration :1,text:"&check;", fontSize:"1000%"})
t.to('.text',{ duration :3,text:"&check;", fontSize:"500%"})
t.to('.text',{ duration :3,text:"Integeration complete...", fontSize:"500%"})
t.to('.text',{ duration :3,text:" As simple as that"})
t.to('.text',{ duration :3,text:" As simple as that...."})
t.to('.text',{ duration :3,text:""})


t.to('.text',{ display:'none'})
t.to('.box',{ background:'black'})
t.to('.box',{ background:'white', fontSize:"1000%",  height: "500px",width: "1000px"})

t.to('.box',{ background:'white', fontSize:"0%",  height: "0px",width: "0px"})

t.to('.box',{ display:'none'})
