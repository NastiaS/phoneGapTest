angular.module("Soju").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html ng-app=\"Soju\"><head><meta charset=\"utf-8\"><title ng-bind=\"pageTitle\"></title><meta name=\"description\" content=\"\"><meta http-equiv=\"Content-Security-Policy\" content=\"\n    default-src *; \n    style-src * \'unsafe-inline\'; \n    script-src * \'unsafe-inline\'; \n    media-src *; img-src * data:; \n\"></head><body ng-controller=\"MainController\"><div ui-view></div></body></html>");
$templateCache.put("auth/auth.html","<div class=\"authProfile\" layout=\"row\" layout-align=\"end center\"><md-button class=\"md-primary right\" ng-if=\"!isAuthenticated && features.auth\" ng-click=\"authService.login()\">Log In</md-button><md-button class=\"md-primary right\" ng-if=\"isAuthenticated\" ng-click=\"authService.logout()\">Log Out</md-button><div class=\"welcomeProfile\" ng-if=\"isAuthenticated\">Greetings, {{userProfile.nickname}}</div><img class=\"png-icon iconProfile\" ng-if=\"isAuthenticated\" ng-src=\"{{userProfile.picture}}\"></div>");
$templateCache.put("feed/feed.html","<div layout=\"column\" layout-fill><ng-include src=\"\'shared/templates/toolbar.html\'\"></ng-include><section layout=\"row\" flex><ng-include src=\"\'shared/templates/sidenav.html\'\"></ng-include><div class=\"news-feed\"><h1 class=\"md-padding\" layout=\"row\" layout-wrap>New York Times Feed</h1><div class=\"md-padding\" layout=\"row\" layout-wrap><md-card style=\"width: 300px\" ng-repeat=\"article in techNews\"><img ng-src=\"{{article.multimedia[4].url | trusted}}\" class=\"md-card-image\" src=\"http://placehold.it/150x150\"><md-card-content><h2>{{article.title}}</h2><p>{{article.byline}}</p></md-card-content><div class=\"md-actions\" layout=\"row\" layout-align=\"end center\"><md-button ng-href=\"{{article.url}}\" target=\"_blank\">View</md-button></div></md-card></div></div></section><ng-include src=\"\'shared/templates/footer.html\'\"></ng-include></div>");
$templateCache.put("home/home.html","<div id=\"container\" layout=\"column\" layout-fill><ng-include src=\"\'shared/templates/toolbar.html\'\"></ng-include><section layout=\"row\" flex><ng-include src=\"\'shared/templates/sidenav.html\'\"></ng-include></section><ng-include src=\"\'shared/templates/footer.html\'\"></ng-include></div>");
$templateCache.put("landing/landing.html","<div id=\"container\" layout=\"column\" layout-fill><ng-include src=\"\'shared/templates/toolbar.html\'\"></ng-include><div layout=\"row\"><md-content><div id=\"landingSection\"><section><md-sidenav class=\"sidenavLanding\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\"><md-button class=\"sidenavLandingSelect\" ng-click=\"gotoAnchor(\'homeSection\')\"><i class=\"material-icons\">home</i></md-button><md-button class=\"sidenavLandingSelect\" ng-click=\"gotoAnchor(\'developerResSection\')\"><i class=\"material-icons\">build</i></md-button><md-button class=\"sidenavLandingSelect\" ng-click=\"gotoAnchor(\'aboutUsSection\')\"><i class=\"material-icons\">people</i></md-button><md-button class=\"sidenavLandingSelect\" ng-click=\"gotoAnchor(\'faqsSection\')\"><i class=\"material-icons\">help_outline</i></md-button><md-button class=\"sidenavLandingSelect\"><i class=\"material-icons\">face</i></md-button></md-sidenav></section><section><md-toolbar flex layout=\"row\" class=\"headerMenu\" hide-xs><h6 ng-click=\"gotoAnchor(\'homeSection\')\">WHAT IS SOJU</h6><h6 ng-click=\"gotoAnchor(\'devResourcesSection\')\">RESOURCES</h6><h6 ng-click=\"gotoAnchor(\'aboutUsSection\')\">ABOUT US</h6><h6 ng-click=\"gotoAnchor(\'faqsSection\')\">FAQs</h6></md-toolbar><div layout=\"row\" id=\"landingBanner\" class=\"sectionContent\"><div flex class=\"projectDescription\"><h2 class=\"welcomeTitle\">Build an application with CODESOJU</h2><h4 class=\"welcomeContent\">Codesoju has been designed to provide a set of standards, best practices and tools to a developer for the purpose of building modern Enterprise applications. It offers a step-by-step guidance for all aspects of the integrated development cycle.</h4><md-button ng-if=\"isAuthenticated || !features.auth\" aria-label=\"Get started\" id=\"getStartedButton\" href=\"#/home\">Get started</md-button></div><div flex class=\"photoDescription\"></div></div></section></div><section id=\"devResourcesSection\"><div layout=\"row\" layout-wrap class=\"sectionContent\"><div flex class=\"devResourcesImage\"><img alt=\"\" src=\"images/graphic_developer_resources.png\"></div><div flex class=\"devResourcesDescription\"><h2>Developer Resources</h2><h4>Building an Enterprise or a smaller scale App? Not sure how all pieces of the development cycle fit together? Not sure where to start so it is scalable and easily maintanable? We are here to help. We provide you with the best practices and tools to ease the process:</h4><ol><li>Generator with Angular1/Angular 2 option will help you with both architecture and design.</li><li>Documentation will provide you with a reasoning and a guidance on all the tools and standards that were chosen.</li><li>Cloud Foudry deployment manifest will help you to deploy your app to any cloud.</li><li>Auth0 feature will help you to secure your app.</li></ol><h5 class=\"anchorScrollArrow\">About us</h5><i class=\"material-icons\" ng-click=\"gotoAnchor(\'aboutUsSection\')\">keyboard_arrow_down</i></div></div></section><section id=\"aboutUsSection\"><div layout=\"row\" layout-wrap class=\"sectionContent\"><div flex class=\"aboutUsDescription\"><h2>About us</h2><h4>We are a team of software architects, developers and UX designers with 20+ years of experience. We all worked on large scale Enterprise applications, some of them are currently available worldwide. Our team members have expertise with DevOps, UX Design, Prototyping, UI Frameworks, API Management & Micro-Services, Digital Platforms, Cloud Application Frameworks, etc. Codesoju is an Open Source project and we hope it will be driven by the community.</h4><h5 class=\"anchorScrollArrow\">FAQs</h5><i class=\"material-icons\" ng-click=\"gotoAnchor(\'faqsSection\')\">keyboard_arrow_down</i></div><div flex class=\"aboutUsImage\"><img alt=\"\" src=\"images/graphic_about_us.png\"></div></div></section><section id=\"faqsSection\"><div layout=\"row\" layout-wrap class=\"sectionContent\"><div flex class=\"faqsImage\"><img alt=\"\" src=\"images/graphic_faqs.png\"></div><div flex class=\"faqsDescription\"><h2>FAQs</h2><h4 class=\"faqsQuestion\">Q: Why did you decide to create CodeSoju?</h4><h4 class=\"faqsAnswer\">A: While working on Enterprise apps we noticed that developers often have to maintain just one or two parts of the development cycle. It is very hard to build something from the scratch and make it robust so it can easily grow if some pieces in the understanding are missing. It is important to keep in mind and to understand the big picture.</h4><h4 class=\"faqsQuestion\">Q: Why did you chose Node, Angular, Angular2, Typescript, Angular Material?</h4><h4 class=\"faqsAnswer\">A: The experience shows that Node and Angular are very robust and widely used technologies. We love to explore technologies and we see that Angular2 with Typescript and Angular Material2 are rapidly developing and we think it will grow even faster in the future.</h4><h4 class=\"faqsQuestion\">Q: Can I create my app with CodeSoju?</h4><h4 class=\"faqsAnswer\">A: Absolutely! CodeSoju provides you with Yeoman generators to create a scaffold of your app ready to run on multiple devices. It provides you with tools, standards and documentation. It covers the deployment phase as well. It is designed to make you life as a developer easier. So, of course you can!</h4></div></div></section><ng-include src=\"\'shared/templates/footer.html\'\"></ng-include></md-content></div></div>");
$templateCache.put("newsfeed/newsfeed.html","<div id=\"container\" layout=\"column\" layout-fill><ng-include src=\"\'shared/templates/toolbar.html\'\"></ng-include><section layout=\"row\" flex><ng-include src=\"\'shared/templates/sidenav.html\'\"></ng-include><md-content><div class=\"md-padding\" layout=\"row\" layout-wrap><md-card class=\"newsfeedCard\" ng-repeat=\"article in articles\"><img ng-src=\"{{article.image}}\" class=\"md-card-image\" alt=\"image caption\"><md-card-content><h3><a ng-href=\"{{article.link}}\">{{article.title}}</a></h3><span>{{article.pubDate}}</span><p style=\"font-size: 13px\">{{article.description}}</p></md-card-content><md-card-footer><div class=\"md-actions\" layout=\"row\" layout-align=\"center center\"><md-button class=\"newsfeed newsFeedIconFav\"><i class=\"material-icons\">favorite</i></md-button><md-button class=\"newsfeed newsFeedIconMenu\"><i class=\"material-icons\">menu</i></md-button></div></md-card-footer></md-card></div></md-content></section><ng-include src=\"\'shared/templates/footer.html\'\"></ng-include></div>");
$templateCache.put("user_profile/user_profile.html","<div layout=\"column\" layout-fill><ng-include src=\"\'shared/templates/toolbar.html\'\"></ng-include><section layout=\"row\" flex><ng-include src=\"\'shared/templates/sidenav.html\'\"></ng-include><section layout=\"row\" class=\"userProfileSection\"><div layout=\"column\" layout-fill><md-content layout-padding><div class=\"userProfileContent\"><h2>User Profile</h2><form name=\"userProfileForm\"><div class=\"userProfileCompanyNameSection\"><div layout-gt-xs=\"row\"><md-input-container class=\"md-block\" flex-gt-xs=\"\"><label>Company (Disabled)</label><input ng-model=\"user.company\" disabled></md-input-container></div></div><div class=\"userProfileNameSection\"><div layout-gt-sm=\"row\"><md-input-container class=\"md-block\" flex-gt-sm=\"\"><label>First Name</label><input required name=\"firstName\" ng-model=\"user.firstName\"><div ng-messages=\"userProfileForm.firstName.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container><md-input-container class=\"md-block\" flex-gt-sm=\"\"><label>Last Name</label><input required name=\"lastName\" ng-model=\"theMax\"><div ng-messages=\"userProfileForm.lastName.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container></div></div><div class=\"userProfileEmailBdSection\"><div layout-gt-sm=\"row\"><md-input-container class=\"md-block\" flex-gt-sm=\"\" class=\"emailSection\"><label>Email</label><input required name=\"email\" ng-model=\"user.email\" minlength=\"10\" maxlength=\"100\" ng-pattern=\"/^.+@.+\\..+$/\"><div ng-messages=\"userProfileForm.email.$error\" role=\"alert\"><div ng-message-exp=\"[\'required\', \'minlength\', \'maxlength\', \'pattern\']\">Your email must be between 10 and 100 characters long and should be a valid email address.</div></div></md-input-container><div class=\"userProfileDropdownStyle\"><md-datepicker ng-model=\"user.birthday\" md-placeholder=\"Birthday\" class=\"ng-pristine ng-valid ng-isolate-scope ng-empty ng-valid-mindate ng-valid-maxdate ng-valid-filtered ng-valid-valid ng-touched bdSection\" tabindex=\"-1\" aria-invalid=\"false\" style=\"\"><button class=\"md-datepicker-button md-icon-button md-button md-ink-ripple\" type=\"button\" ng-transclude=\"\" tabindex=\"-1\" aria-hidden=\"true\" ng-click=\"ctrl.openCalendarPane($event)\"><i class=\"material-icons\">date_range</i></button><div class=\"md-datepicker-input-container\" ng-class=\"{\'md-datepicker-focused\': ctrl.isFocused}\"><input class=\"md-datepicker-input\" aria-haspopup=\"true\" ng-focus=\"ctrl.setFocused(true)\" ng-blur=\"ctrl.setFocused(false)\" placeholder=\"Birthday\" size=\"3\"> <button class=\"md-datepicker-triangle-button md-icon-button md-button\" type=\"button\" ng-transclude=\"\" md-no-ink=\"\" ng-click=\"ctrl.openCalendarPane($event)\" aria-label=\"Open calendar\"><div class=\"md-datepicker-expand-triangle ng-scope\"></div></button></div><div class=\"md-datepicker-calendar-pane md-whiteframe-z1\" id=\"md-date-pane119\"><div class=\"md-datepicker-input-mask\"><div class=\"md-datepicker-input-mask-opaque\"></div></div><div class=\"md-datepicker-calendar\"></div></div></md-datepicker></div></div></div><div layout-gt-sm=\"row\"><md-input-container class=\"md-block UserProfileAddressLineOne\"><label>Address Line1</label><input required ng-model=\"user.addressLine1\" name=\"addressLine1\"><div ng-messages=\"userProfileForm.addressLine1.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container><md-input-container class=\"md-block UserProfileAddressLineTwo\" flex-gt-sm=\"\"><label>Address Line2</label><input required name=\"addressLine2\" ng-model=\"user.addressLine2\"><div ng-messages=\"userProfileForm.addressLine2.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container></div><div layout-gt-sm=\"row\" class=\"userProfileCityZipStateSection\"><md-input-container class=\"md-block\" flex-gt-sm=\"\"><label>City</label><input required name=\"city\" ng-model=\"user.city\"><div ng-messages=\"userProfileForm.city.$error\"><div ng-message=\"required\">This is required.</div></div></md-input-container><md-input-container class=\"md-block userProfileDropdownStyle\" flex-gt-sm=\"\"><label>State</label><md-select ng-model=\"user.state\"><md-option ng-repeat=\"state in states\" value=\"{{state.abbrev}}\">{{state.abbrev}}</md-option></md-select></md-input-container><md-input-container class=\"md-block\" flex-gt-sm=\"\"><label>Postal Code</label><input name=\"postalCode\" ng-model=\"user.postalCode\" required ng-pattern=\"/^[0-9]{5}$/\" md-maxlength=\"5\"><div ng-messages=\"userProfileForm.postalCode.$error\" role=\"alert\" multiple><div ng-message=\"required\" class=\"my-message\">You must supply a postal code.</div><div ng-message=\"pattern\" class=\"my-message\">This code is invalid</div><div ng-message=\"md-maxlength\" class=\"my-message\">Your code is too long</div></div></md-input-container></div></form><div flex class=\"userProfileSaveButton\"><md-button>Save</md-button></div></div></md-content></div></section></section><ng-include src=\"\'shared/templates/footer.html\'\"></ng-include></div>");
$templateCache.put("shared/templates/footer.html","<footer id=\"footer\"><div layout=\"row\" class=\"sectionContent\"><div flex><h6>Copyright (c) 2016 Cedrus. All Rights Reserved</h6></div><div flex class=\"footerImageSocial\"><img id=\"footerSocial\" alt=\"\" src=\"images/icon_social_fb.png\"> <img id=\"footerSocial\" alt=\"\" src=\"images/icon_social_insta.png\"> <img id=\"footerSocial\" alt=\"\" src=\"images/icon_social_pin.png\"> <img id=\"footerSocial\" alt=\"\" src=\"images/icon_social_twitter.png\"></div><div id=\"addressFooter\" flex hide-sm hide-xs><h6>136 Madison Avenue, 6th Floor New York, NY 10016<br>646.679.7090<br>info@cedrusco.com</h6></div></div></footer>");
$templateCache.put("shared/templates/sidenav.html","<md-sidenav class=\"sidenavItem\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-xs\')\"><div layout=\"row\"><md-button class=\"sidenavButton\" ng-class=\"{\'sidenavButtonSelected\':selectedMenu(\'/home\')}\" href=\"#/home\"><i class=\"material-icons\">home</i></md-button></div><span></span><div layout=\"row\"><md-button class=\"sidenavButton\" ng-class=\"{\'sidenavButtonSelected\': selectedMenu(\'/user_profile\')}\" href=\"#/user_profile\"><i class=\"material-icons\">account_box</i></md-button></div><span></span><div layout=\"row\"><md-button class=\"sidenavButton\" ng-class=\"{\'sidenavButtonSelected\': selectedMenu(\'/feed\')}\" href=\"#/feed\"><i class=\"material-icons\">view_headline</i></md-button></div><span></span><div layout=\"row\"><md-button class=\"sidenavButton\" ng-class=\"{\'sidenavButtonSelected\': selectedMenu(\'/newsfeed\')}\" href=\"#/newsfeed\"><i class=\"material-icons\">tv</i></md-button></div><span></span><div layout=\"row\"><md-button class=\"sidenavButton\"><i class=\"material-icons\">help_outline</i></md-button></div></md-sidenav>");
$templateCache.put("shared/templates/toolbar.html","<md-toolbar layout=\"row\" class=\"toolbarShared\" ng-style=\"isLandingStyle === true && {\'background\': \'#fff\', \'border-bottom\': \'1px solid #dcdcdc\'}\"><img id=\"sojuLogo\" src=\"images/soju_logo2.png\" ng-click=\"navigateHome()\"><span flex></span> <i id=\"hamburgerMenuButton\" hide-gt-xs class=\"material-icons\" ng-click=\"toggleList()\">menu</i><ng-include src=\"\'auth/auth.html\'\"></ng-include></md-toolbar>");
$templateCache.put("shared/directives/login/login.template.html","");}]);
