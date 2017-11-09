webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Custom styles\r\n */\r\n.fixed-theme {\r\n  position: fixed;\r\n  top: 0px;\r\n\tborder-bottom: 1px solid #9a9a9a;\r\n\tbox-shadow: 0 5px 20px -1px #9a9a9a;\r\n  z-index: 1;\r\n  width: 100%;  \r\n}\r\n\r\n.navbar-nav.mr-auto{\r\n  width: 100%;\r\n  -webkit-box-pack: space-evenly;\r\n      -ms-flex-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n}\r\n.nav-item{\r\n  width: 130px;\r\n  text-align: -webkit-center;\r\n}\r\n\r\n.nav-item img {\r\n  width: 60px;\r\n  height: 60px;\r\n  margin-top: 1.6px;\r\n  margin-bottom: -17px;\r\n}\r\n.left_margin{\r\n  margin-left: auto;\r\n}\r\n.top_padding{\r\n  padding-top: 8px;  \r\n}\r\n.right_margin{\r\n  margin-right: auto;\r\n}\r\n.category_header{\r\n    text-align: left;\r\n    padding: 15px 0px 15px 44px;\r\n    margin-bottom: -23px;\r\n}\r\n\r\n/* Home Section */\r\n#home{\r\n    height: 680px;\r\n    background-color: #fafafa; \r\n}\r\n#dgsm_carousel{\r\n  height: 680px;\r\n}  \r\n.carousel-item img {\r\n  height: 680px;\r\n}\r\n/* Functions Section */\r\n#functions{\r\n  height: 100%;  \r\n  padding-top: 0px;  \r\n}\r\n.function_ul{\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n  padding: 15px 10px 0px 30px;\r\n  transition: all 0.6s;\r\n}\r\n.function_first{\r\n  margin-left: auto;\r\n}\r\n.function_third{\r\n  margin-right: auto;\r\n}\r\n.icon_div_wrapper{\r\n  width: 31px;\r\n  position: absolute;\r\n  height: 100%;\r\n}\r\n.dept_icon{\r\n  position: absolute;\r\n  height: 100%;\r\n  margin-top: 18px;\r\n}\r\n.fa_div{\r\n  margin-top: 10px;\r\n  margin-left: -29px;\r\n  margin-right: 35px;\r\n  text-align: -webkit-center;\r\n  font-weight: lighter;\r\n  color: rgba(255, 255, 255, 0);\r\n  opacity: .85;\r\n  height: 3px;\r\n  border: 1px solid rgba(255, 255, 255, 0);\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.last{\r\n  margin-top: 28px;\r\n}\r\n@media(max-width: 993px){\r\n  #wrapper{\r\n    width: 100% !important;\r\n  }  \r\n  .header > div{\r\n    padding: 68px 0px 0px !important;\r\n  }    \r\n  .last{\r\n    margin-top: 0px !important;\r\n  }\r\n  .row.onHover{\r\n    height: 80px !important;\r\n  }\r\n  .sections_wrapper{\r\n    height: 100% !important;\r\n    display: inline-block;\r\n    width: 100%;\r\n  }\r\n  #functions, #departments > div, #geoscientific_info, #map {\r\n      padding-top: 1px !important;\r\n  }  \r\n  footer{\r\n    margin-top: -6px;    \r\n  }\r\n  #contact{\r\n    margin-bottom: 0px;    \r\n  }\r\n}\r\n.row.onHover{\r\n  margin-bottom: 15px;\r\n  height: 40px;  \r\n  margin-left: auto;  \r\n  transition-duration: 300ms;\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);\r\n}\r\n.row.onHover > div{\r\n  text-align: -webkit-left;  \r\n}\r\n.info{\r\n  transition-duration: 300ms;\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);  \r\n}\r\n.function_ul .onHover:hover .dept_icon{\r\n  width: 75%;  \r\n}\r\n.function_ul .onHover:hover .fa_div{\r\n  margin-left: -1px;\r\n  transition-duration: 300ms;\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);\r\n  border: 1px solid #f35757;\r\n  background-color: #f35757;\r\n  margin-right: 0px;\r\n}\r\n.function_ul .onHover:hover .info{\r\n  margin-left: 40px;\r\n}\r\n.depart_gen{\r\n  cursor: pointer;\r\n}\r\n.function_ul .depart_gen:hover .info{\r\n  margin-left: 0px !important;\r\n  color: black; \r\n  text-decoration: underline;\r\n  -webkit-text-decoration-style: dashed;\r\n          text-decoration-style: dashed;\r\n  text-underline-position: under;   \r\n}\r\n.function_ul .row .info{\r\n  padding: 0px;\r\n  height: -webkit-fill-available ;\r\n  height: -moz-available ;\r\n  height: stretch ;\r\n  padding-top: 1px;\r\n  width: 100%;  \r\n}\r\n/* Department Section */\r\n#departments{\r\n    height: 100%;\r\n}\r\n#departments > div{\r\n  /*padding-top: 64px;*/\r\n}\r\n#departments > div > .row{\r\n  padding-top: 0px;\r\n}\r\n#departments div .row .card_first_div{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.wrap-card {\r\n  position: relative;\r\n  box-shadow: 0px 0px 0px #818181;\r\n  transition: all 0.2s ease 0s;\r\n  -webkit-transform: translateY(0px) translateX(0px);\r\n  margin-top: 48px;\r\n}\r\n.wrap-card:before,\r\n.wrap-card:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  content: \" \";\r\n  width: 100%;\r\n  height: 3px;\r\n  background: #818181;\r\n  -webkit-transform: scaleX(0);\r\n  transition: all 0.2s ease;\r\n}\r\n.wrap-card:before {\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-transform-origin: 0 0;\r\n}\r\n.wrap-card:after {\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-transform-origin: 100% 0;\r\n}\r\n.wrap-card:hover {\r\n  box-shadow: 20px 20px 0px #818181;\r\n  -webkit-transform: translateY(-10px) translateX(-10px);\r\n  transition: all 0.2s ease 0.4s;\r\n}\r\n.wrap-card:hover:after,\r\n.wrap-card:hover:before {\r\n  -webkit-transform: scaleX(1);\r\n}\r\n.card_custom {\r\n  background: #ffffff;\r\n  padding: 30px 35px 45px 35px;\r\n  margin-bottom: 30px;\r\n  border: 1px solid rgba(129, 129, 129, 0.1);\r\n  height: 435px;\r\n}\r\n.card_custom:before,\r\n.card_custom:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  content: \" \";\r\n  width: 3px;\r\n  height: 100%;\r\n  background: #818181;\r\n  -webkit-transform: scaleY(0);\r\n  transition: all 0.2s ease 0.2s;\r\n}\r\n.card_custom:before {\r\n  top: 0;\r\n  left: 0;\r\n  -webkit-transform-origin: 0 100%;\r\n}\r\n.card_custom:after {\r\n  top: 0;\r\n  right: 0;\r\n  -webkit-transform-origin: 0 0;\r\n}\r\n.card_custom:hover:after,\r\n.card_custom:hover:before {\r\n  -webkit-transform: scaleY(1);\r\n}\r\n.text-detail{\r\n  padding: 20px 20px 0px 20px;    \r\n}\r\n\r\n/* Geoscientific Section */\r\n#geoscientific_info{\r\n    height: 100%;\r\n    overflow-y: auto;    \r\n}\r\n\r\n#geoscientific_info > div {\r\n    height: 100%;   \r\n}\r\n.geo_first{\r\n  margin-left: auto;\r\n}\r\n.geo_last{\r\n  margin-right: auto;\r\n}\r\n.services {\r\n  margin: 10px 0;\r\n  height: 100%;\r\n  text-align: -webkit-center;\r\n}\r\n.service {\r\n  width: 90%;\r\n  height: 200px;  \r\n\tmargin: 7px 0;\r\n\ttext-align: center;\r\n\tborder: 1px solid #ddd;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.service > a{\r\n  color: inherit\r\n}\r\n\r\n.map_service:hover{\r\n    height: 100% !important;  \r\n}\r\n.service .icon-holder {\r\n  position: relative;\r\n  top: 40px;\r\n  display: inline-block;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n  background: white;\r\n  transition: all 0.3s ease;\r\n  border:1px solid transparent;\r\n}\r\n\r\n.service .heading {\r\n\tposition: relative;\r\n\ttop: 30px;\r\n\ttransition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n.service .icon-holder > img.icon {\r\n\twidth: 40px;\r\n}\r\n\r\n.service:hover {\r\n  border-color: #f35757;\r\n  cursor: pointer;\r\n}\r\n\r\n.service:hover .icon-holder {\r\n  top: -23px !important;\r\n  border-color: #f35757;\r\n}\r\n.service:hover  a{\r\n  color: inherit\r\n}\r\n\r\n.service > a:hover{\r\n  color: inherit !important;\r\n}\r\n\r\n.service:hover .heading {\r\n\ttop: -30px !important;\r\n}\r\n\r\n.service:hover .map_img {\r\n\tfont-size: 14px !important;\r\n}\r\n\r\n.service .service-img{\r\n  cursor: pointer;\r\n}\r\n\r\n.service .description,\r\n.service .service-img {\r\n  width: 100%;\r\n  padding: 0px 10px;\r\n  text-align: justify;\r\n\tmargin: 0 auto;\r\n\topacity: 0;\r\n\ttransition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\t-webkit-transform: scale(0);\r\n\ttransform: scale(0);\r\n}\r\n\r\n.service:hover .description,\r\n.service:hover .service-img {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  margin-top: -26px;\r\n}\r\n.light {\r\n\tfont-weight: 300;\r\n}\r\n.muted {\r\n\tcolor: #989da0;\r\n}\r\n\r\n/* Map Section */\r\n#map{\r\n  height: 100%;\r\n  text-align: -webkit-center;  \r\n}\r\n#map > div,\r\n#contact > div{\r\n  padding: 0px;\r\n  height: 100%;\r\n}\r\n.map_heading{\r\n  margin-bottom: -6px;  \r\n}\r\n#map > div > .row{\r\n  height: 100%;\r\n  margin: 0px;\r\n}\r\n.actual_map{\r\n  height: 100%;\r\n}\r\n.contact_us_map{\r\n  height: 300px;  \r\n}\r\n.actual_map,\r\n.contact_us_map{\r\n  display: -webkit-inline-box;  \r\n  padding: 0px;\r\n}\r\n/* Contact Section */\r\n#contact{\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.91);\r\n  background: url(" + __webpack_require__("../../../../../src/assets/images/world_Map_2-min.jpg") + ");\r\n  color: white;\r\n  overflow-y: auto; \r\n  overflow-x: hidden;\r\n  transition: all 0.5s ease;\r\n background-size: cover;  \r\n}\r\n#contact > div{\r\n  background-color: rgba(0, 0, 0, 0.91);\r\n}\r\n#contact > div > .row{\r\n  margin: 0px;\r\n}\r\n.contact-info-box{\r\n\tfont-size:15px;\r\n\tmargin:0 0 14px 68px;\r\n\tpadding-left:0;\r\n}\r\n.contact-info-box h3{\r\n\tfont-size: 15px;\r\n\tfont-weight:400;\r\n\tfloat:left;\r\n\twidth:102px;\r\n\tmargin-right:12px;\r\n\tline-height:28px;\r\n}\r\n.contact-info-box h3 i{\r\n\tfont-style:normal;\r\n\tfont-size:18px;\r\n\tcolor:#222222;\r\n\tfont-family: 'FontAwesome';\r\n\tfont-weight:normal;\r\n\tmargin-right:7px;\r\n}\r\n.contact-info-box span{\r\n\tline-height:28px;\r\n\tdisplay:block;\r\n  overflow:hidden;\r\n  text-align: -webkit-left;  \r\n}\r\n.contact_info_cols{\r\n  margin-top: 10px;  \r\n}\r\n\r\n#contact .open-blink {\r\n\tcontent: ' ';\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 14px;\r\n\theight: 14px;\r\n\tmargin: 0 20px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: yellow;\r\n\t-webkit-animation-name: flash;\r\n\tanimation-name: flash;\r\n\t-webkit-animation-duration: 2s;\r\n\tanimation-duration: 2s;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\tanimation-iteration-count: infinite;\r\n}\r\n\r\n/* Loading overlay */\r\n.loading-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99999;\r\n    background: #1d1d1d;\r\n}\r\n.mineral-map-loading-overlay{\r\n  position: absolute;\r\n  z-index: 0;\r\n  background-color: rgba(52, 58, 64, 0.16);\r\n  width: 80%;\r\n  height: 56.8%;\r\n}\r\n/*spinner*/\r\n.sk-cube-grid {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 300px auto;\r\n}\r\n\r\n.sk-cube-grid-mm{\r\n  margin: 221px auto !important;\r\n}\r\n\r\n.sk-cube-grid .sk-cube {\r\n  width: 33%;\r\n  height: 33%;\r\n  float: left;\r\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; \r\n}\r\n.sk-cube-grid .sk-cube1 {\r\n  background-color: red;\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; \r\n}\r\n.sk-cube-grid .sk-cube2 {\r\n  background-color: black;\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; \r\n}\r\n.sk-cube-grid .sk-cube3 {\r\n  background-color: yellow;\r\n  -webkit-animation-delay: 0.4s;\r\n          animation-delay: 0.4s;\r\n}\r\n.sk-cube-grid .sk-cube4 {\r\n  background-color: yellow;\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; \r\n}\r\n.sk-cube-grid .sk-cube5 {\r\n  background-color: red;\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; \r\n}\r\n.sk-cube-grid .sk-cube6 {\r\n  background-color: black;\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; \r\n}\r\n.sk-cube-grid .sk-cube7 {\r\n  background-color: black;\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s; \r\n}\r\n.sk-cube-grid .sk-cube8 {\r\n  background-color: yellow;\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; \r\n}\r\n.sk-cube-grid .sk-cube9 {\r\n  background-color: red;\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; \r\n}\r\n\r\n@-webkit-keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1); \r\n  }\r\n}\r\n\r\n@keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1);\r\n  } \r\n}\r\n/* Footer Section */\r\nfooter {\r\n  color: white;\r\n  height: 100%;\r\n}\r\nfooter > .cover{\r\n  background-color: rgba(0, 0, 0, 0.61);  \r\n  padding: 0px 0px 0px 0px;\r\n}\r\n\r\n.blink_wrapper{\r\n  position: absolute;\r\n  margin-top: 111px;\r\n  margin-left: 40px;  \r\n}\r\n\r\nfooter .open-blink:before {\r\n\tcontent: ' ';\r\n\tposition: absolute;\r\n\ttop: -8px;\r\n\tleft: -8px;\r\n\tdisplay: inline-block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\topacity: 0.1;\r\n\tborder-radius: 50%;\r\n\tbackground-color: yellow;\r\n}\r\n\r\nfooter .opening-hours {\r\n\tmargin-top: 60px;\r\n}\r\n\r\nfooter .bottom-footer {\r\n  margin-top: 0px;\r\n  width: 100%;\r\n  padding-left: 11px;\r\n  margin-left: 0px;  \r\n}\r\n\r\n.bottom-footer > div > p{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;  \r\n}\r\n\r\nfooter .social-footer {\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\nfooter .social-footer li {\r\n\tdisplay: inline-block;\r\n\tmargin: 0 10px;\r\n}\r\n\r\nfooter .social-footer li a {\r\n\tfont-size: 24px;\r\n\tcolor: #fff;\r\n}\r\n\r\nfooter .social-footer li:hover a {\r\n\tcolor: #00a8ff;\r\n}\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n  content: ' ';\r\n  display: block;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix:after {\r\n  clear: both;\r\n}\r\n.social-link{\r\n\tpadding:35px 0;\r\n\tmargin:0 0 0 68px;\r\n\tdisplay:block;\r\n\toverflow:hidden;\r\n\tlist-style:none;\r\n}\r\n.social-link li{\r\n\tfloat:left;\r\n\tmargin-right:8px;\r\n}\r\n.social-link li a{\r\n\tdisplay:block;\r\n\twidth:50px;\r\n\theight:50px;\r\n\ttext-align:center;\r\n\tline-height:50px;\r\n\tfont-size:25px;\r\n\tcolor:#fff;\r\n\tbackground:#222222;\r\n\tborder-radius:50%;\r\n\ttransition:all 0.3s ease-in-out;\r\n}\r\n.social-link li a:hover, .social-link li a:focus{\r\n\ttext-decoration:none;\r\n}\r\n.twitter a:hover {\r\n\tbackground: #55acee;\r\n}\r\n.facebook a:hover {\r\n\tbackground: #3b5998;\r\n}\r\n.pinterest a:hover {\r\n\tbackground: #cb2026;\r\n}\r\n.gplus a:hover {\r\n\tbackground: #dd4b39;\r\n}\r\n.dribbble a:hover {\r\n\tbackground: #ea4c89;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- Sidebar -->\n    <div id=\"sidebar-wrapper\">\n        <fa class=\"sidebar_fa_dismiss pull-right wow fadeInLeft delay-02s \" name=\"bars\" (click)=\"_closeSidebar()\"></fa>\n        <ul class=\"sidebar-nav\">\n            <li class=\"sidebar-brand\">\n              <img class=\"sidebar_logo\" src=\"assets/images/logo_2.jpg\" alt=\"\">\n            </li>\n            <li>\n                <a href=\"#header\" (click)=\"_navSwitch('home')\"><fa class=\"sidebar_fa\" name=\"home\"></fa><span class=\"sidebar_labels sidebar_labels_home\">Home</span></a> <!--animation=\"spin\" -->\n            </li>          \n            <li>\n                <a href=\"#departments\" (click)=\"_navSwitch('departments')\"><fa class=\"sidebar_fa\" name=\"users\"></fa><span class=\"sidebar_labels\">Departments</span></a>\n            </li>\n            <li>\n                <a href=\"#geoscientific_info\" (click)=\"_navSwitch('geo')\"><fa class=\"sidebar_fa geo_fa\" name=\"file-text-o\"></fa><span class=\"sidebar_labels\">Geoscientific Information</span></a>\n            </li>\n            <li>\n                <a href=\"#map\" (click)=\"_navSwitch('map')\"><fa class=\"sidebar_fa mineral_map_fa\" name=\"street-view\"></fa><span class=\"sidebar_labels\">Mineral Maps</span></a>\n            </li>                  \n            <li>\n                <a href=\"#contactUs\" (click)=\"_navSwitch('contact')\"><fa class=\"sidebar_fa contact_fa\" name=\"volume-control-phone\"></fa><span class=\"sidebar_labels\">Contact us</span></a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"sidebar_overlary\" (click)=\"_closeSidebar()\"></div>      \n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n    <!-- Home Section -->  \n    <header class=\"header\" id=\"header\"><!--header-start-->\n      <div class=\"container-fluid\">\n        <div id=\"header_overlay\">\n          <h1 id=\"dgsm_main\" class=\"animated fadeInDown delay-07s\">Directorate Of Geological Survey and Mines</h1>\n          <ul class=\"we-create animated fadeInUp delay-1s\">\n            <li>A model of excellence in sustainable management and utilization of mineral resources.</li>\n          </ul>\n        </div>     \n      </div>\n    </header><!--header-end-->\n    <nav class=\"main-nav-outer bg-dark\" id=\"test\"><!--main-nav-start-->\n      <div class=\"container-fluid\">\n        <ul class=\"main-nav\">\n          <li><a href=\"#header\" class=\"home_btn\" (click)=\"_navSwitch('home')\">Home</a></li>\n          <li><a href=\"#departments\" class=\"department_btn\" (click)=\"_navSwitch('departments')\">Departments</a></li>\n          <!--<li class=\"small-logo\" class=\"logo_btn\"><a href=\"#header\"><img class=\"small_logo\" src=\"assets/images/logo_2.jpg\" alt=\"\"></a></li>-->\n          <li><a href=\"#geoscientific_info\" class=\"geo_btn\" (click)=\"_navSwitch('geo')\">Geoscientific Information</a></li>\n          <li><a href=\"#map\" class=\"map_btn\" (click)=\"_navSwitch('map')\">Mineral Maps</a></li>\n          <li><a href=\"#contactUs\" class=\"contact_btn\" (click)=\"_navSwitch('contact')\">Contact</a></li>\n        </ul>            \n        <a class=\"res-nav_click pull-left\" (click)=\"_menuToggle($event)\"><fa name=\"bars\"></fa></a>\n        <span class=\"pull-right res-nav-name\">Directorate of Geological Survey and Mines</span>\n      </div>\n    </nav><!--main-nav-end-->\n    <div [ngSwitch]=\"switchValue\" class=\"sections_wrapper\"> \n      <!-- Functions Section -->\n      <section id=\"functions\" class=\"m-100 mw-100 section\" *ngSwitchCase=\"'home'\">\n        <div class=\"category_header wow fadeInDown delay-01s\"><h4>Functions Of DGSM</h4></div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 function_first\">\n            <ul class=\"function_ul\">\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Attract investment in the country’s mineral sector</div>\n              </li>\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Mineral Exploration and Development</div>\n              </li>\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Institution Development and Capacity building</div>\n              </li>   \n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Policy formulation and Regulation</div>\n              </li>\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Licensing and Inspection</div>\n              </li>\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Earthquake monitoring and advisory services</div>\n              </li> \n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Acquire and disseminate information on, mining, geotechnical, geological, geophysical investigations and mineral statistics</div>\n              </li>\n              <li class=\"row onHover wow fadeInRight delay-02s col-lg-6 col-md-12 col-sm-12 pull-left second_last\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Geoscience Laboratory services</div>\n              </li>\n              <li class=\"row onHover wow delay-02s col-lg-6 col-md-12 col-sm-12 pull-left last\">\n                <div class=\"icon_div_wrapper\"><div class=\"fa_div\"></div></div>\n                <div class=\"info\">Develop the geothermal Energy potential of Uganda</div>\n              </li>                                                           \n            </ul>\n          </div>                          \n        </div>  \n      </section>         \n      <!-- Departments Section -->\n      <section id=\"departments\" class=\"m-100 mw-100 section\" *ngSwitchCase=\"'departments'\">        \n        <div class=\"container-fluid\">\n          <div class=\"category_header wow fadeInDown delay-01s\"><h4>Departments</h4></div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 function_first\">\n              <ul class=\"function_ul\">\n                <li title=\"Working progress\" class=\"depart_gen row onHover wow fadeInRight delay-02s col-sm-12 pull-left\" >\n                  <!--<div class=\"dept_icon\"><div class=\"fa_div\"></div></div>-->\n                  <div class=\"info\">Geological Survey Department (Geology Division, Geophysics division, Geodatadivision, Laboratory division)</div>\n                </li>\n                <li title=\"Working progress\" class=\"depart_gen depart_li row onHover wow fadeInRight delay-02s col-sm-12 pull-left\">\n                  <!--<div class=\"dept_icon\"><div class=\"fa_div\"></div></div>-->\n                  <div class=\"info\">Mines Department (Licensing and Administration division, Monitoring and Inspection division, Geoscience division)</div>\n                </li>\n                <li title=\"Working progress\" class=\"depart_gen depart_li row onHover wow fadeInRight delay-02s col-sm-12 pull-left\">\n                 <!--<div class=\"dept_icon\"><div class=\"fa_div\"></div></div>-->\n                  <div class=\"info\">Geothermal Resource Department (Geology Division)</div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>         \n      </section>  \n      <!-- Geoscientific Information Section-->\n      <section id=\"geoscientific_info\" class=\"m-100 mw-100 section\" *ngSwitchCase=\"'geo'\">     \n        <div class=\"container\">\n          <div class=\"category_header wow fadeInDown delay-01s\"><h4>Geoscientific Information</h4></div>\n          <div class=\"row services\">\n            <div class=\"col-lg-4 col-md-6 col-sm-12 wow fadeInLeft delay-04s\">\n              <div class=\"service\" title=\"Download Act\">\n                <a href=\"assets/regulations/Mining_Act.pdf\" target=\"blank\" donwload=\"Mining Act.pdf\">\n                  <div class=\"icon-holder\">\n                    <fa name=\"cloud-download\" size=\"lg\"></fa>\n                  </div>\n                  <h4 class=\"heading\">Mining Act 2003</h4>\n                  <p class=\"description\">An Act to repeal and replace the Mining Act, Cap. 248, with a new legislation on mining and mineral development, which conforms, and otherwise gives effect, to ...</p>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 wow fadeIn delay-04s\">\n              <div class=\"service\" title=\"Download Act\">\n                <a href=\"assets/regulations/Mining_Regulations_A.pdf\" target=\"blank\" donwload=\"Mining Regulations.pdf\">\n                  <div class=\"icon-holder\">\n                    <fa name=\"cloud-download\" size=\"lg\"></fa>\n                  </div>\n                  <h4 class=\"heading\">Mining Regulations</h4>\n                  <p class=\"description\">In exercise of the powers conferred upon the Minister by section 121 of the Mining Act, 2003, these Regulations are made this 2nd day of September, 2004.</p>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 wow fadeInRight delay-04s\">\n              <div class=\"service\" title=\"Download Act\">\n                <a href=\"assets/regulations/Mineral Policy of Uganda 2002.pdf\" target=\"blank\" donwload=\"Mineral Policy of Uganda 2002.pdf\">\n                  <div class=\"icon-holder\">\n                    <fa name=\"cloud-download\" size=\"lg\"></fa>\n                  </div>\n                  <h4 class=\"heading\">Mineral Policy</h4>\n                  <p class=\"description\">The Constitution of the Republic of Uganda places important natural resources including minerals under the protection of Government, on behalf of the people of Uganda.</p>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12 wow fadeInLeft delay-04s\">\n              <div class=\"service map_service\" title=\"Download Map\">\n                <a href=\"assets/regulations/Mineral Occurence_Concession Map.pdf\" target=\"blank\" donwload=\"Mineral Occurence Concession Map.pdf\">\n                  <div class=\"icon-holder\">\n                    <fa name=\"cloud-download\" size=\"lg\"></fa>\n                  </div>\n                  <h4 class=\"heading map_img\">Mineral concession and occurrence map</h4>\n                  <img class=\"service-img\" title=\"Download Map\" src=\"assets/images/mineral concessions and occurencies map_thumbnail.png\" />\n                </a>\n              </div>\n            </div>\n            <!--\n            <div class=\"col-lg-4 col-md-6 col-sm-12 wow fadeIn delay-04s\">\n              <div class=\"service\">\n                <div class=\"icon-holder\">\n                  <fa name=\"link\" size=\"lg\"></fa>\n                </div>\n                <h4 class=\"heading\">Mining Cadastre</h4>\n                <p class=\"description\">A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque a aenean hac montes.</p>\n              </div>\n            </div> -->                                     \n          </div>\n        </div>  \n      </section>            \n      <!-- Map Section -->\n      <section id=\"map\" class=\"m-100 mw-100 section\" *ngSwitchCase=\"'map'\">\n        <div class=\"container-fluid\">          \n          <!--<div class=\"map_heading category_header wow fadeInDown delay-01s\"><a href=\"http://portals.flexicadastre.com/uganda/\" target=\"_blank\" title=\"Visit the link\"><h4>Mineral Occurance Map</h4></a></div>-->\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 mineral-map-loading-overlay wow fadeIn delay-02s\">\n              <div class=\"sk-cube-grid sk-cube-grid-mm\">\n                  <div class=\"sk-cube sk-cube1\"></div>\n                  <div class=\"sk-cube sk-cube2\"></div>\n                  <div class=\"sk-cube sk-cube3\"></div>\n                  <div class=\"sk-cube sk-cube4\"></div>\n                  <div class=\"sk-cube sk-cube5\"></div>\n                  <div class=\"sk-cube sk-cube6\"></div>\n                  <div class=\"sk-cube sk-cube7\"></div>\n                  <div class=\"sk-cube sk-cube8\"></div>\n                  <div class=\"sk-cube sk-cube9\"></div>\n              </div>              \n            </div>\n            <div class=\"col-lg-12 col-md-12 wow fadeIn delay-04s actual_map\">\n              <div class=\"embed-responsive embed-responsive-1by1 wow fadeIn delay-04s\">\n                <iframe \n                  class=\"embed-responsive-item\" \n                  height=\"600\" \n                  frameborder=\"0\" \n                  style=\"border:0\" \n                  src=\"http://portals.flexicadastre.com/uganda/\"\n                  allowfullscreen>\n                </iframe>\n              </div>            \n            </div>   \n          </div> \n        </div>       \n      </section>\n      <!-- Contact Information Section-->\n      <section id=\"contact\" class=\"m-100 mw-100 section\" *ngSwitchCase=\"'contact'\">\n        <div class=\"container\">\n          <div class=\"category_header wow fadeInDown delay-01s\"><h4>Contact Information</h4></div>\n          <div class=\"row\">\n            <div class=\"contact_info_cols col-lg-6 col-md-6  col-sm-12 wow fadeInLeft delay-02s\">\n              <div class=\"contact-info-box address clearfix\">\n                <h3><fa name=\"map-marker\"></fa>Address:</h3>\n                <span>Directorate of Geological Survey and Mines<br />Department of Mines<br />Plot 21 -29, Johnstone Road</span>\n              </div>\n              <div class=\"contact-info-box phone clearfix\">\n                <h3><fa name=\"phone\"></fa>Phone:</h3>\n                <span>+256 414 323432, +256 414 320118</span>\n              </div>\n              <div class=\"contact-info-box fax clearfix\">\n                <h3><fa name=\"fax\"></fa>Fax:</h3>\n                <span>+256 414 320364</span>\n              </div>              \n              <div class=\"contact-info-box email clearfix\">\n                <h3><fa name=\"pencil\"></fa>email:</h3>\n                <span><a href=\"mailto:dgsm@minerals.go.ug\" title=\"Write to us\">dgsm@minerals.go.ug</a></span>\n              </div>\n            </div>            \n            <div class=\"contact_info_cols col-md-6 col-sm-12 text-center-mobile wow fadeInRight delay-02s\">\n              <h3 class=\"white\">Opening Hours <span class=\"open-blink\"></span></h3>               \n              <div class=\"row opening-hours\">\n                <div class=\"col-sm-6 text-center-mobile\">\n                  <h5 class=\"light-white light\">Mon - Fri</h5>\n                  <h3 class=\"regular white\">8:00 - 17:00</h3>\n                </div>\n                <div class=\"col-sm-6 text-center-mobile\">\n                  <h5 class=\"light-white light\">Sat - Sun</h5>\n                  <h3 class=\"regular white\">10:00 - 15:00</h3>\n                </div>\n                <ul class=\"social-link\">\n                  <li class=\"twitter\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Follow us on Twitter\"><a><fa name=\"twitter\"></fa></a></li>\n                  <li class=\"facebook\"><a><fa name=\"facebook\" title=\"Check us out on Facebook\"></fa></a></li>\n                  <li class=\"gplus\"><a><fa name=\"google-plus\" title=\"Follow us on Google plus\"></fa></a></li>\n                </ul>                                  \n              </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 wow fadeInRight delay-04s contact_us_map\">\n              <div class=\"embed-responsive embed-responsive-1by1\">\n                <iframe \n                  class=\"embed-responsive-item\" \n                  height=\"600\" \n                  frameborder=\"0\" \n                  style=\"border:0\" \n                  src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9486.521541803044!2d32.47512708170844!3d0.05523665286863108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d868fc7d6ce29%3A0xf0b754352428061c!2sDirectorate+Of+Geological+Surveys+And+Mines!5e0!3m2!1sen!2s!4v1506767200920\"\n                  allowfullscreen>\n                </iframe>\n              </div>            \n            </div>                                       \n          </div>\n        </div>\n      </section>               \n    </div>               \n    <section class=\"loading-overlay\">\n      <div class=\"sk-cube-grid\">\n          <div class=\"sk-cube sk-cube1\"></div>\n          <div class=\"sk-cube sk-cube2\"></div>\n          <div class=\"sk-cube sk-cube3\"></div>\n          <div class=\"sk-cube sk-cube4\"></div>\n          <div class=\"sk-cube sk-cube5\"></div>\n          <div class=\"sk-cube sk-cube6\"></div>\n          <div class=\"sk-cube sk-cube7\"></div>\n          <div class=\"sk-cube sk-cube8\"></div>\n          <div class=\"sk-cube sk-cube9\"></div>\n      </div>\n    </section>  \n    <!-- Contact Us Section -->\n    <footer>\n      <div class=\"cover\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"row bottom-footer text-center-mobile text-center\">\n              <div class=\"col-lg-12 col-sm-12\">\n                <p>&copy; 2017 All Rights Reserved. Powered by <a href=\"mailto:kindsolutionsltd@gmail.com\">Kindsolutions</a> exclusively for <a href=\"#header\" class=\"caller_link\">DGSM</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n    </footer>      \n    <!-- /#page-content-wrapper -->\n</div>\n<!-- /#wrapper -->  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(Sanitizer) {
        this.Sanitizer = Sanitizer;
        this.target = '#test';
        this.setVisibility = 'display:none';
        this.sidebarOverlayHeight = 0;
        this.switchValue = "home";
        this.sectionHeight = $(window).height() - 350;
        this.pdfSrc = 'assets/regulations/Mining_Regulations.pdf';
        this.mineralMapOverlay = 0;
        this.pdfTitle = 'test';
        this.acts = { 'miningAct2003': 'Mining_Act.pdf', 'miningRegulations': 'Mining_Regulations.pdf', 'mineralPolicy': 'Mineral Policy of Uganda 2002.pdf', 'mineralCCM': 'Mineral Occurence_Concession Map.pdf' };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sidebarOverlayHeight = $(document).height();
        $(".mineral-map-loading-overlay").css("height", this.sectionHeight);
        $(".sections_wrapper").css('height', this.sectionHeight);
        //$("#contact").css('height',this.sectionHeight);
        //Set sidebar overlay visibility
        $(".sidebar_overlary").css("display", "none").css("height", this.sidebarOverlayHeight);
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
        if (width <= 930) {
            console.log("small");
            $(".last").removeClass("fadeInRight").show(1000);
        }
        else {
            $(".last").addClass("fadeInRight");
        }
        window.onscroll = function (e) {
            var width = $(window).width();
            var scrollPosition = window.pageYOffset;
            if (scrollPosition >= 779 || width <= 930) {
                console.log("small");
                $(".main-nav-outer").addClass("fixed-theme");
                $(".last").removeClass("fadeInRight").show(1000);
            }
            else {
                $(".main-nav-outer").removeClass("fixed-theme");
                console.log("bigger");
                $(".last").addClass("fadeInRight");
            }
        };
    };
    AppComponent.prototype._menuToggle = function ($event) {
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".sidebar_overlary").css("display", "block");
        this.sidebarOverlayHeight = $(document).height();
        $(".sidebar_overlary").css("height", this.sidebarOverlayHeight);
    };
    ;
    AppComponent.prototype._closeSidebar = function () {
        console.log("sidebar Close");
        $("#wrapper").toggleClass("toggled");
        $(".sidebar_overlary").css("display", "none");
    };
    AppComponent.prototype._onMouceScroll = function () {
        console.log("pressed");
        var width = $(window).width();
        if (width <= 930) {
            this.target = "#functions";
        }
        else {
            this.target = "#test";
        }
        console.log(this.target);
        this._onScroll(".caller_link");
    };
    AppComponent.prototype._onScroll = function (trigger) {
        $(trigger).bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset()
            }, 1000);
            event.preventDefault();
        });
    };
    AppComponent.prototype._navSwitch = function (activated) {
        console.log(activated);
        this.switchValue = activated;
    };
    AppComponent.prototype._getEmbededPdf = function () {
        return this.Sanitizer.bypassSecurityTrustHtml(this.pdfSrc);
    };
    AppComponent.prototype._downloadAct = function (act) {
        var _this = this;
        console.log(act);
        var keys = Object.keys(this.acts);
        keys.filter(function (item) {
            if (item == act) {
                var path = "assets/regulations/" + _this.acts[item];
                _this.pdfSrc = path;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__safe_html_pipe_pipe__ = __webpack_require__("../../../../../src/app/safe-html-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gsd_gsd_component__ = __webpack_require__("../../../../../src/app/gsd/gsd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__md_md_component__ = __webpack_require__("../../../../../src/app/md/md.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grd_grd_component__ = __webpack_require__("../../../../../src/app/grd/grd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__safe_html_pipe_pipe__["a" /* SafeHtmlPipePipe */],
            __WEBPACK_IMPORTED_MODULE_5__gsd_gsd_component__["a" /* GSDComponent */],
            __WEBPACK_IMPORTED_MODULE_6__md_md_component__["a" /* MDComponent */],
            __WEBPACK_IMPORTED_MODULE_7__grd_grd_component__["a" /* GRDComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/grd/grd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grd/grd.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  grd works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/grd/grd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GRDComponent = (function () {
    function GRDComponent() {
    }
    GRDComponent.prototype.ngOnInit = function () {
    };
    return GRDComponent;
}());
GRDComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-grd',
        template: __webpack_require__("../../../../../src/app/grd/grd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grd/grd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GRDComponent);

//# sourceMappingURL=grd.component.js.map

/***/ }),

/***/ "../../../../../src/app/gsd/gsd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gsd/gsd.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gsd works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/gsd/gsd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GSDComponent = (function () {
    function GSDComponent() {
    }
    GSDComponent.prototype.ngOnInit = function () {
    };
    return GSDComponent;
}());
GSDComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gsd',
        template: __webpack_require__("../../../../../src/app/gsd/gsd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gsd/gsd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GSDComponent);

//# sourceMappingURL=gsd.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/md/md.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  md works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/md/md.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MDComponent = (function () {
    function MDComponent() {
    }
    MDComponent.prototype.ngOnInit = function () {
    };
    return MDComponent;
}());
MDComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-md',
        template: __webpack_require__("../../../../../src/app/md/md.component.html"),
        styles: [__webpack_require__("../../../../../src/app/md/md.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MDComponent);

//# sourceMappingURL=md.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe-html-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipePipe = (function () {
    function SafeHtmlPipePipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipePipe.prototype.transform = function (value) {
        console.log(this.sanitized.bypassSecurityTrustHtml(value));
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipePipe;
}());
SafeHtmlPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipePipe);

var _a;
//# sourceMappingURL=safe-html-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/assets/images/world_Map_2-min.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "world_Map_2-min.d378e8ccd5eb60be92d0.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map