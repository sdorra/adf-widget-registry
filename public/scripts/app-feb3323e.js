!function(){"use strict";angular.module("adf-widgets",[])}(),function(){"use strict";angular.module("adf-widgets").controller("WidgetsCtrl",["registryService","$routeParams","ngDialog","$location",function(e,i,a,s){function t(e){for(var i=0;i<r.widgets.length;i++){var a=r.widgets[i];if(a.name===e)return a}return void 0}function o(){r.status="loading",e.getApi().then(function(e){return e}).then(function(i){var a=i.data.widgets;return e.get(a)}).then(function(e){r.status="loaded",r.widgets=e.data},function(e){r.status="error",r.error=e}).then(function(){return i.name?a.open({template:"app/widgets/detail.html",controller:"WidgetDetailCtrl",controllerAs:"vm",resolve:{widget:function(){var a=t(i.name);return e.get(a.link).then(function(e){return e.data})}}}).closePromise.then(function(e){console.log(e.id+" has been dismissed."),s.path("/#/widgets")}):void 0})}var r=this;o(),r.openModal=function(){}}])}(),function(){"use strict";angular.module("adf-widgets").controller("WidgetDetailCtrl",["registryService","widget",function(e,i){function a(e){var i=o[e.name];if(i){e.images=[];for(var a=0;a<i.captions.length;a++){var s={};s.url="/assets/images/widget-images/"+e.name+"/"+i.imagePrefix+"-0"+(a+1)+".png",s.caption=i.captions[a],e.images.push(s)}}return void 0}function s(){console.log("widget",i),t.widget=i,a(t.widget)}var t=this,o={"adf-widget-clock":{imagePrefix:"adf-widget-clock",captions:["Clock widget view","Clock widget configuration"]},"adf-widget-github":{imagePrefix:"adf-widget-github",captions:["Github History widget view","Github Author widget view","Github widgets configuration"]},"adf-widget-linklist":{imagePrefix:"adf-widget-linklist",captions:["Linklist widget view","Configuration dialog of the linklist widget"]},"adf-widget-markdown":{imagePrefix:"adf-widget-markdown",captions:["Markdown widget view","Markdown widget configuration"]},"adf-widget-news":{imagePrefix:"adf-widget-news",captions:["News widget view","Configuration dialog of the news widget"]},"adf-widget-randommsg":{imagePrefix:"adf-widget-randommsg",captions:["The RandomMsg widget displaying a Douglas Adams","RandomMsg widget configuration"]},"adf-widget-tweet":{imagePrefix:"adf-widget-tweet",captions:["Tweet widget view"]},"adf-widget-version":{imagePrefix:"adf-widget-version",captions:["The version widget displaying the current version","Configuration of the version widget"]},"adf-widget-weather":{imagePrefix:"adf-widget-weather",captions:["Various widgets displaying temperatures from around the Word","Configuration dialog of the weather widget"]}};s()}])}(),function(){"use strict";angular.module("adf-widgets").service("registryService",["$http","config",function(e,i){var a,s={headers:{Accept:"application/json"}},t={};return{getApi:function(){return a?a:a=e.get("/api/v"+i.apiVersion,s)},get:function(i){return t[i]?t[i]:(t[i]=e.get(i,s),t[i])}}}])}(),function(e){"use strict";e.module("adf-widget-registry",["angular-loading-bar","ngAnimate","ngSanitize","ngResource","ngRoute","ngDialog","adf-widgets"])}(angular),function(e,i){"use strict";i.module("adf-widget-registry").directive("pageScroll",function(){return function(a,s){s.find("a").on("click",function(a){var s=$(this),t=s.attr("href").indexOf("#"),o=s.attr("href").substring(t),r=i.element(o);r&&(e.log(r,r.offset()),i.element("html, body").stop().animate({scrollTop:r.offset().top-60},1500,"easeInOutExpo")),a.preventDefault()}),a.$on("$destroy",function(){s.find("a").off("click")})}}).controller("MainCtrl",["$scope","config",function(e,i){e.enterPageClass="bounceIn",e.leavePageClass="bounceOut",e.config=i}])}(console,angular),function(){"use strict";angular.module("adf-widget-registry").constant("config",{appTitle:"ADF Widget Registry",appVersion:"0.1.0-SNAPSHOT",portfolioTitle:"Widgets",portfolioLink:"widgets",apiVersion:1}).config(["$compileProvider",function(e){location.host.match(/localhost/)||e.debugInfoEnabled(!1)}]).constant("angularMomentConfig",{preprocess:"utc",timezone:"Europe/Rome"}).config(["$sceDelegateProvider",function(e){e.resourceUrlWhitelist(["self","https://www.github.com/**","http://www.github.com/**"])}]).config(["cfpLoadingBarProvider",function(e){e.includeSpinner=!1}]).config(["ngDialogProvider",function(e){e.setDefaults({className:"ngdialog-theme-default",plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0})}]).config(["$routeProvider","$locationProvider",function(e,i){i.html5Mode(!1),e.when("/widgets",{templateUrl:"app/widgets/widgets.html",controller:"WidgetsCtrl",controllerAs:"vm"}).when("/widgets/:name",{templateUrl:"app/widgets/widgets.html",controller:"WidgetsCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/widgets"})}])}(angular),angular.module("adf-widget-registry").run(["$templateCache",function(e){e.put("app/sections/about.html",'<section class="success" id="about"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>About</h2><hr class="star-light"></div></div><div class="row"><div class="col-lg-4 col-lg-offset-2"><p>ADF Widgets Registry is the official showcase of widgets available for Angular Dashboard Framework. This site aims promote the production of beautiful widget for the awesome ADF framework.</p></div><div class="col-lg-4"><p>There are already some useful widgets in the repository. But your contributions are welcome. Do you know an Angular module that would be great to have in form of configurable widget? Why not learn how to build a new widget yourself and share your work with the community!</p></div></div></div></section>'),e.put("app/sections/contact.html",'<section id="contact"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Contact Me</h2><hr class="star-primary"></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2"><form name="sentMessage" id="contactForm" novalidate=""><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Name</label> <input type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Email Address</label> <input type="email" class="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Phone Number</label> <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p></div></div><div class="row control-group"><div class="form-group col-xs-12 floating-label-form-group controls"><label>Message</label> <textarea rows="5" class="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div><br><div id="success"></div><div class="row"><div class="form-group col-xs-12"><button type="submit" class="btn btn-success btn-lg">Send</button></div></div></form></div></div></div></section>'),e.put("app/sections/footer.html",'<footer class="text-center"><div class="footer-above"><div class="container"><div class="row"><div class="footer-col col-md-4" style="margin-top: 90px"><p>Built with <i class="fa fa-2x fa-heart"></i> by: <a href="https://twitter.com/ssdorra" target="_blank">Sebastian Sdorra</a></p></div><div class="footer-col col-md-4"><h3>Around the Web</h3><ul class="list-inline"><li><a href="https://github.com/sdorra/angular-dashboard-framework" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-github"></i></a></li><li><a href="https://twitter.com/ssdorra" class="btn-social btn-outline" target="_blank"><i class="fa fa-fw fa-twitter"></i></a></li></ul></div><div class="footer-col col-md-4"><h3>About Angular Dashboard Framework</h3><p>Angular Dashboard Framework is a MIT licance based open source framework that allow to develop interactive dashboards with little, no effort.</p></div></div></div></div><div class="footer-below"><div class="container"><div class="row"><div class="col-lg-12">Theme based on <a href="http://ironsummitmedia.github.io/startbootstrap-freelancer/">Freelancer theme</a>, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>. Adapted by <a href="mailto:ivan.saorin(at)gmail.com">Ivan Saorin</a></div></div></div></div></footer><div class="scroll-top page-scroll visible-xs visible-sm"><a class="btn btn-primary" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>'),e.put("app/sections/header.html",'<header id="page-top"><div class="container"><div class="row"><div class="col-md-offset-3 col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/2row_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/grid_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/blank_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/3column_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/calendar_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/header_wf.svg" alt=""></div></div><div class="row"><div class="col-md-offset-3 col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/footer_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/form_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/sidebar_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/list_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/profile_wf.svg" alt=""></div><div class="col-lg-1"><img class="img-responsive header-img" src="../assets/images/wireframer/portfolio_wf.svg" alt=""></div></div><div class="row"><div class="col-lg-12"><div class="intro-text"><span class="name">{{config.appTitle}}</span><hr class="star-warning"><span class="skills">A collection of reusable widgets for the ADF framework.</span></div></div></div></div></header>'),e.put("app/sections/navigation.html",'<nav class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header" page-scroll=""><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#page-top">{{config.appTitle}}</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li class="hidden"><a href="#page-top"></a></li><li page-scroll=""><a href="#{{config.portfolioLink}}">{{config.portfolioTitle}}</a></li><li page-scroll=""><a href="#about">About</a></li></ul></div></div></nav>'),e.put("app/widgets/detail.html",'<h2 style="text-align: center">{{vm.widget.name}}</h2><hr class="star-dialog"><img ng-src="/assets/images/widget-icons/{{vm.widget.name}}.png" class="widget-icon img-responsive img-centered" alt="" style="width: 140px; margin-bottom: 30px;"><p>{{vm.widget.latest.description}}</p><ul class="item-details"><li>Homepage: <strong><a href="{{vm.widget.latest.homepage}}" target="_blank">Gihub repository</a></strong></li><li class="versions">Versions (latest is highlighted):<ul class="list-inline item-details"><li ng-repeat="version in vm.widget.versions"><strong>{{version}}</strong></li></ul></li><li>Keywords:<ul class="list-inline item-details"><li ng-repeat="keyword in vm.widget.latest.keywords"><strong>{{keyword}}</strong></li></ul></li><li>Dependencies:<ul class="item-details"><li ng-repeat="(id, obj) in vm.widget.latest.dependencies"><strong>{{id}}</strong> {{obj}}</li></ul></li><li ng-if="vm.widget.images">Images:</li></ul><div ng-repeat="image in vm.widget.images"><img ng-src="{{image.url}}" class="widget-icon img-responsive img-centered" alt="" style="width: 380px; margin: 20px 0px 10px 20px;"> <strong style="margin-left: 20px">{{image.caption}}</strong><div></div></div>'),e.put("app/widgets/widgets.html",'<section id="{{config.portfolioLink}}"><div class="container"><div class="row error" ng-if="vm.status == \'loading\'"><div class="col-lg-12 text-center"><h2>Loading...</h2></div></div><div class="row" ng-if="vm.status == \'error\'"><div class="col-lg-12 text-center"><h2>{{config.portfolioTitle}}</h2><hr class="star-primary"><h4>{{error}}</h4></div></div><div class="row error" ng-if="vm.status == \'loaded\' && !vm.widgets"><div class="col-lg-12 text-center"><h2>Error:</h2><hr class="star-primary"><h4>No widget available</h4></div></div><div class="row" ng-if="vm.status == \'loaded\' && vm.widgets"><div class="col-lg-12 text-center"><h2>{{config.portfolioTitle}}</h2><hr class="star-primary"></div></div><div class="row" ng-if="vm.status == \'loaded\' && vm.widgets"><div class="col-sm-4 portfolio-item" ng-repeat="widget in vm.widgets"><a href="/#/widgets/{{widget.name}}" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h4>{{widget.name}}</h4></div></div><h4 class="title">{{widget.name}}</h4><img ng-src="/assets/images/widget-icons/{{widget.name}}.png" class="widget-icon img-responsive" alt=""></a></div></div></div></section>')}]);