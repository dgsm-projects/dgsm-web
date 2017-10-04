import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  target = '#test';
  setVisibility = 'display:none';
  sidebarOverlay = $(document).height();
  ngOnInit(){
    //Set sidebar overlay visibility
    $(".sidebar_overlary").css("display","none").css("height",this.sidebarOverlay);
    // Loading Elements
    $(".loading-overlay .sk-cube-grid").fadeOut(2000, function () {
        // Show The Scroll
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });   
    // /'.main-nav li a, .caller_link, .sidebar-nav li a'
    this._onScroll(".main-nav li a");
    this._onScroll(".sidebar-nav li a"); 
    this._onScroll(".caller_link");   

    window.onscroll = function(e) {
      var width = $(window).width();
      var scrollPosition = window.pageYOffset;

      if(scrollPosition >= 779 || width <= 930){
        $(".main-nav-outer").addClass("fixed-theme");
      }else{
        $(".main-nav-outer").removeClass("fixed-theme");
      }
        
    }    
  }

  _menuToggle($event){
      event.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $(".sidebar_overlary").css("display","block");
      //Capture the current height...
      this.sidebarOverlay = $(document).height();
      $(".sidebar_overlary").css("height",this.sidebarOverlay);
  };  

  _closeSidebar(){
    console.log("sidebar Close");
      $("#wrapper").toggleClass("toggled");
      $(".sidebar_overlary").css("display","none");    
  }

  _onMouceScroll(){
    console.log("pressed");
    var width = $(window).width();
    if(width <= 930){
      this.target = "#functions";
    }else{
      this.target = "#test";
    }
    console.log(this.target);
    this._onScroll(".caller_link");  
  }

  _onScroll(trigger){
    $(trigger).bind('click',function(event){
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      event.preventDefault();
    });      
    
  }
  
}
