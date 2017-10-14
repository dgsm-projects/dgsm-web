import { Component, OnInit,Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  sidebarOverlayHeight = 0;
  switchValue = "home";
  sectionHeight = $(window).height()-350;
  pdfSrc: string = 'assets/regulations/MINING_ACT_2003.pdf';
  pdfUrl: String = "http://docs.google.com/gview?url="+this.pdfSrc+"&embedded=true"

  constructor(private Sanitizer: DomSanitizer){}

  ngOnInit(){
    this.sidebarOverlayHeight = $(document).height();
    $(".sections_wrapper").css('height',this.sectionHeight);
    //$("#contact").css('height',this.sectionHeight);
    //Set sidebar overlay visibility
    $(".sidebar_overlary").css("display","none").css("height",this.sidebarOverlayHeight);
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

      var width = $(window).width();

      if(width <= 930){
        console.log("small");
        $(".last").removeClass("fadeInRight").show(1000);
      }else{
        $(".last").addClass("fadeInRight");
      }  

    window.onscroll = function(e) {
      var width = $(window).width();
      var scrollPosition = window.pageYOffset;

      if(scrollPosition >= 779 || width <= 930){
        console.log("small");
        $(".main-nav-outer").addClass("fixed-theme");
        $(".last").removeClass("fadeInRight").show(1000);
      }else{
        $(".main-nav-outer").removeClass("fixed-theme");
        console.log("bigger");
        $(".last").addClass("fadeInRight");
      }  
    }  
  }
  _menuToggle($event){
      event.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $(".sidebar_overlary").css("display","block");
      this.sidebarOverlayHeight = $(document).height();
      $(".sidebar_overlary").css("height",this.sidebarOverlayHeight);
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
        scrollTop: $($anchor.attr('href')).offset()}, 1000);
      event.preventDefault();
    });      
  }

  _navSwitch(activated){
    console.log(activated);
    this.switchValue = activated;
  }

  _getEmbededPdf(){
    return this.Sanitizer.bypassSecurityTrustHtml(this.pdfSrc)
  }

}
