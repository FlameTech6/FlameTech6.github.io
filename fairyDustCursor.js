!function()
{
   let e=["#D61C59","#E7D84B","#1B8798"],
   t=document.body,
   i=window.innerWidth,n=window.innerHeight;
   const o={x:i/2,y:i/2},h={x:i/2,y:i/2},a=[],s=[];
   let l,c;

   function d(e)
   {
      if(0<e.touches.length)
      for(let t=0;t<e.touches.length;t++)
      r(e.touches[t].clientX,e.touches[t].clientY,
      s[Math.floor(Math.random()*s.length)])
   }

   function r(t,e,i)
   {
      a.push(new u(t,e,i))
   }

   function u(t,e,i)
   {
      var n=Math.floor(30*Math.random()+60);
      this.initialLifeSpan=n,
      this.lifeSpan=n,
      this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:.7*Math.random()+.9},
      this.position={x:t,y:e},
      this.canv=i,
      this.update=function(t)
      {
        this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.velocity.y+=.02;
        var e=Math.max(this.lifeSpan/this.initialLifeSpan,0);
        t.drawImage(this.canv,this.position.x-this.canv.width/2*e,this.position.y-this.canv.height/2,this.canv.width*e,this.canv.height*e)
      }
   }

   l=document.createElement("canvas"),
   c=l.getContext("2d"),
   l.style.top="0px",
   l.style.left="0px",
   l.style.pointerEvents="none",
   l.style.position="fixed",
   t.appendChild(l),
   l.width=i,
   l.height=n,
   c.font="21px serif",
   c.textBaseline="middle",
   c.textAlign="center",
   e.forEach(t=>{let e=c.measureText("*"),i=document.createElement("canvas"),n=i.getContext("2d");
   i.width=e.width,
   i.height=e.actualBoundingBoxAscent+e.actualBoundingBoxDescent,
   n.fillStyle=t,n.textAlign="center",
   n.font="21px serif",
   n.textBaseline="middle",
   n.fillText("*",i.width/2,e.actualBoundingBoxAscent),
   s.push(i)}),
   t.addEventListener("mousemove",function(t)
   {
      window.requestAnimationFrame(()=>{o.x=t.clientX,o.y=t.clientY,1.5<Math.hypot(o.x-h.x,o.y-h.y)&&(r(o.x,o.y,s[Math.floor(Math.random()*e.length)]),h.x=o.x,h.y=o.y)})
   }),
   t.addEventListener("touchmove",d,{passive:!0}),
   t.addEventListener("touchstart",d,{passive:!0}),
   window.addEventListener("resize",function(t){i=window.innerWidth,n=window.innerHeight,l.width=i,l.height=n}),
   function t(){c.clearRect(0,0,i,n);for(let t=0;t<a.length;t++)a[t].update(c);for(let t=a.length-1;0<=t;t--)a[t].lifeSpan<0&&a.splice(t,1);requestAnimationFrame(t)}()
}();