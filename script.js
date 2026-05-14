const t  = gsap.timeline({defaults:{ }});

for(var i =0 ; i <5; i++){
    t.to('.box',{x : '-100%', ease: 'bounce'})
    t.to('.box',{x : '100%', ease: 'bounce'})
}
t.to('.box',{x : '00%', ease: 'bounce'})
t.to('.box',{ width : '500px'})