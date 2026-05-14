const t  = gsap.timeline({defaults:{ }});
for(var i =0 ; i <5; i++){
t.to('.box',{y : '-100%'})
t.to('.box',{y : '100%', ease: 'bounce'})
}
//t.to('.box',{ borderRadius:0})
t.to('.box',{y : '-10%'})
//t.to('.box',{ borderRadius:50})
t.to('.box',{ width : '500px'})