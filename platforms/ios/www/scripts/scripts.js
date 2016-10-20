'use strict';

var app = angular.module('Soju', ['ngRoute', 'ngMaterial', 'ngMessages', 'ui.knob']);

app.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', '$httpProvider', function($routeProvider, $locationProvider, $mdThemingProvider, $httpProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'landing/landing.html',
			controller: 'LandingController'
		}).
		when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeController'
		}).
		when('/newsfeed', {
			templateUrl: 'newsfeed/newsfeed.html',
			controller: 'NewsfeedController'
		}).
		when('/user_profile', {
			templateUrl: 'user_profile/user_profile.html',
			controller: 'UserProfileController'
		}).
		when('/feed', {
			templateUrl: 'feed/feed.html',
			controller: 'FeedController',
			resolve: {
				nytFeed: ['Feed', function(Feed) {

					return Feed.getNews();

				}]
			}
		});
		var h5m = (typeof html5Mode !== 'undefined') ? html5Mode : true;
		$locationProvider.html5Mode(h5m);
	$mdThemingProvider.theme('default');

	var lightGreyMap = $mdThemingProvider.extendPalette('red', {
		'500': '#eee',
		'contrastDefaultColor': 'dark'
	});
	$mdThemingProvider.definePalette('lightGrey', lightGreyMap);
	$mdThemingProvider.theme('default')
			.primaryPalette('lightGrey');

}]);

(function() {

	'use strict';

	angular
	.module('Soju')
	.controller('loginController', loginController);

	loginController.$inject = ['$scope', 'authService'];

	function loginController($scope, authService) {

		// Put the authService on $scope to access
		// the login method in the view
		$scope.authService = authService;

	}

})();

(function() {

	'use strict';

	angular.module('Soju')
	.run(['$rootScope', '$location', function($rootScope, $location) {

	}]);

})();

(function() {

	'use strict';

	angular.module('Soju')
	.service('authService', authService);

	authService.$inject = ['$rootScope', '$location', 'lock', 'authManager'];

	function authService($rootScope, $location, lock, authManager) {

		$rootScope.userProfile = JSON.parse(localStorage.getItem('profile')) || {};

		function login() {

			lock.show();

		}

		// Logging out just requires removing the user's
		// id_token and profile
		function logout() {

			localStorage.removeItem('id_token');
			localStorage.removeItem('profile');
			authManager.unauthenticate();
			$rootScope.userProfile = {};
			window.location = '/';

		}

		// Set up the logic for when a user authenticates
		// This method is called from app.run.js
		function registerAuthenticationListener() {

			lock.on('authenticated', function(authResult) {

				localStorage.setItem('id_token', authResult.idToken);
				authManager.authenticate();

				lock.getProfile(authResult.idToken, function(error, profile) {

					if (error) {

						console.log(error);

					}

					localStorage.setItem('profile', JSON.stringify(profile));
					$rootScope.$broadcast('userProfileSet', profile);

				});

			});

		}

		function isAuthenticated() {

			var idToken = localStorage.getItem('id_token') || null;
			return (idToken === null) ? false : true;

		}

		return {
			login: login,
			logout: logout,
			registerAuthenticationListener: registerAuthenticationListener,
			isAuthenticated: isAuthenticated
		};

	}

})();

'use strict';

angular.module('Soju')
.factory('featureToggle', ['$rootScope', function($rootScope) {

	return {
		features: {
			'auth': false
		},
		init: function() {

			$rootScope.features = this.features;

		}
	};

}]);

'use strict';

angular.module('Soju')

.controller('FeedController', ['$scope', 'nytFeed', function($scope, nytFeed) {

	$scope.techNews = nytFeed.results;

}]);

'use strict';

angular.module('Soju')

.factory('Feed', ['$http', function($http) {

	return {
		getNews: function() {

			return $http.get('/api/feed').then(function(res) {

				return res.data;

			});

		}

	};

}]);

'use strict';

angular.module('Soju')
.controller('HomeController', ['$scope', '$location', '$mdSidenav', '$log', '$interval', function($scope, $location, $mdSidenav, $log, $interval) {

	// /* Charts Initialization */
	// Chart.defaults.global.responsive = true;
	// Chart.defaults.global.maintainAspectRatio = false;

	// /* Radar Chart Initialization */
	// $scope.radar_labels = ['Objects', 'Functions', 'Modules', 'Reusability', 'Duplication', 'Comments', 'Documentation'];

	// $scope.radar_data = [
	// 	[65, 59, 90, 81, 56, 55, 40],
	// 	[28, 48, 40, 19, 96, 27, 100]
	// ];

	// /* Bubble Chart Initialization */
	// $scope.bubble_options = {
	// 	scales: {
	// 		xAxes: [{
	// 			display: false,
	// 			ticks: {
	// 				max: 125,
	// 				min: -125,
	// 				stepSize: 10
	// 			}
	// 		}],
	// 		yAxes: [{
	// 			display: false,
	// 			ticks: {
	// 				max: 125,
	// 				min: -125,
	// 				stepSize: 10
	// 			}
	// 		}]
	// 	}
	// };

	// createBubbleChart();
	// $interval(createBubbleChart, 2000);

	// function createBubbleChart() {

	// 	$scope.bubble_series = [];
	// 	$scope.bubble_data = [];
	// 	for (var i = 0; i < 50; i++) {

	// 		$scope.bubble_series.push('Series ${i}');
	// 		$scope.bubble_data.push([{
	// 			x: randomScalingFactor(),
	// 			y: randomScalingFactor(),
	// 			r: randomRadius()
	// 		}]);

	// 	}

	// }

	// function randomScalingFactor() {

	// 	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);

	// }

	// function randomRadius() {

	// 	return Math.abs(randomScalingFactor()) / 4;

	// }


	// /* Bar Chart Initialization */
	// $scope.bar_colors = ['#2d87b2', '#fc5b6c', '#f1f1f1'];
	// $scope.bar_labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	// $scope.bar_data = [
	// 	[32, 20, 44, 38, 19, 43, 12],
	// 	[28, 24, 33, 22, 37, 27, 38]
	// ];
	// $scope.datasetOverride = [
	// 	{
	// 		label: 'Bar chart',
	// 		borderWidth: 1,
	// 		type: 'bar'
	// 	},
	// 	{
	// 		label: 'Line chart',
	// 		borderWidth: 3,
	// 		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
	// 		hoverBorderColor: 'rgba(255,99,132,1)',
	// 		type: 'line'
	// 	}
	// ];

	// /* Knob Chart Initialization */

	// $scope.first_knob_value = 65;
	// $scope.first_knob_options = {
	// 	size: 125,
	// 	unit: '%',
	// 	subText: {
	// 		enabled: true,
	// 		text: 'CPU used',
	// 		color: 'grey',
	// 		font: 'auto'
	// 	},
	// 	trackWidth: 20,
	// 	barWidth: 10,
	// 	trackColor: '#2d87b2',
	// 	barColor: '#a0efdd'
	// };
	// $scope.second_knob_value = 35;
	// $scope.second_knob_options = {
	// 	size: 125,
	// 	unit: '%',
	// 	subText: {
	// 		enabled: true,
	// 		text: 'Memory used',
	// 		color: 'grey',
	// 		font: 'auto'
	// 	},
	// 	trackWidth: 20,
	// 	barWidth: 10,
	// 	trackColor: '#2d87b2',
	// 	barColor: '#a0efdd'
	// };
	// $scope.third_knob_value = 88;
	// $scope.third_knob_options = {
	// 	size: 125,
	// 	unit: '%',
	// 	subText: {
	// 		enabled: true,
	// 		text: 'Storage used',
	// 		color: 'grey',
	// 		font: 'auto'
	// 	},
	// 	trackWidth: 20,
	// 	barWidth: 10,
	// 	trackColor: '#2d87b2',
	// 	barColor: '#a0efdd'
	// };

	// /* End Charts Initialization */

	// $scope.close = function() {

	// 	$mdSidenav('left').close()
	// 		.then(function() {

	// 			$log.debug('close LEFT is done');

	// 		});

	// };
	$scope.toggleList = function() {
		console.log('++++I am in HomeController++++');
		$mdSidenav('left').toggle();
	};

}]);



'use strict';

angular.module('Soju')

.controller('LandingController', ['$scope', '$anchorScroll', '$location', '$mdSidenav', function($scope, $anchorScroll, $location, $mdSidenav) {
  console.log('++++I am inside of Landing Controller++++');
	$scope.isLandingStyle = true;

	$scope.gotoAnchor = function(eID) {

		var old = $location.hash();
		$location.hash(eID);
		$anchorScroll();
		$mdSidenav('left').close();
		$location.hash(old);

	};

	$scope.toggleList = function() {
		console.log('++++I am clicked in LandingController++++');
		$mdSidenav('left').toggle();

	};

}]);



'use strict';

angular.module('Soju')

.controller('MainController', ['$location', '$scope', 'featureToggle', function($location, $scope, featureToggle) {

	featureToggle.init();

	$scope.selectedMenu = function(route) {

		return route === $location.path();

	};

	$scope.navigateHome = function() {

		$location.url('#/');

	};
  console.log('++++I am inside MainController++++',$location.path().toString());
  //$location.path('#/');

}]);

'use strict';

angular.module('Soju')

	.controller('NewsfeedController', ['$scope', 'Newsfeed', '$mdSidenav', function($scope, Newsfeed, $mdSidenav) {

		$scope.toggleList = function() {
			console.log('++++I am clicked in NewsfeedController++++');

			$mdSidenav('left').toggle();

		};

		function init() {

			Newsfeed
				.getArticles()
				.then(function(cnnArticles) {

					$scope.articles = cnnArticles;

				});

		}

		init();

	}]);


angular.module('Soju')

	.factory('Newsfeed', ['$http', function($http) {

		return {
			getArticles: function() {

				return $http
					.get('/api/newsfeed')
					.then(function(response) {

						return response.data;

					});

			}
		};

	}]);

'use strict';

angular.module('Soju')

.controller('UserProfileController', ['$scope', '$location', '$mdSidenav', '$log', function($scope, $location, $mdSidenav, $log) {

	$scope.close = function() {

		$mdSidenav('left').close()
			.then(function() {

				$log.debug('close LEFT is done');

			});

	};

	$scope.toggleList = function() {
		console.log('++++I am clicked in UserProfileController++++');
		$mdSidenav('left').toggle();

	};

	$scope.user = {
		email: '',
		firstName: '',
		lastName: '',
		company: 'Cedrus',
		addressLine1: '',
		addressLine2: '',
		city: '',
		state: '',
		postalCode: ''
	};

	$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
	'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
	'WY').split(' ').map(function(state) {

		return {abbrev: state};

	});

}]);



'use strict';

angular.module('Soju')
.filter('trusted', ['$sce', function($sce) {

	return function(url) {

		return $sce.trustAsResourceUrl(url);

	};

}]);
