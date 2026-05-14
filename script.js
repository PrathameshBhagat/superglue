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
t.to('.box',{ x:"-500"})
t.to('.box',{ y:"-100"})
t.to('.box',{ x:"00"})
t.to('.text',{ display: 'block'})
t.to('.text',{ opacity : 1})
t.to('.text',{ text:"Enterprise Integrations  "})
t.to('.text',{ duration :3,text:"Enterprise Integrations in minutes .... "})
t.to('.text',{ duration :3,text:"Enterprise Integrations in minutes ......"})
t.to('.text',{ duration :3,text:"Enterprise Integrations in minutes ......"})
t.to('.text',{ duration :1,text:"1"})
t.to('.text',{ duration :1,text:"2"})
t.to('.text',{ duration :1,text:"3"})
t.to('.text',{ duration :3,text:"Integeration complete..."})
t.to('.text',{ duration :3,text:" As simple as that"})
t.to('.text',{ duration :3,text:" As simple as that ...."})
