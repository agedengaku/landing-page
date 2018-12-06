var poochVids = document.getElementsByClassName("pooch-vids");

[].forEach.call(poochVids, (poochVid) => {
  poochVid.addEventListener("mouseover", function(){
 	poochVid.play();
  });	
  poochVid.addEventListener("mouseout", function(){
 	poochVid.pause();
  });  
});

