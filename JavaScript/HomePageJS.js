
var myIndex = 0;
    carousel();
    
    function carousel() {
      var one;
      var x = document.getElementsByClassName("mySlides");
      for (one = 0; one < x.length; one++) {
        x[one].style.display = "none";  
      };
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1
      };    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 5000);
    }
  
