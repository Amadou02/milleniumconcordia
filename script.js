var Millenium = angular.module('Millenium', ['ngRoute']);


    Millenium.config(function($routeProvider) {

        $routeProvider
            .when('/main', {
                templateUrl: 'views/Main.html'

            })
            .when('/planetes', {
                templateUrl: 'views/Planetes.html'

            })
            .when('/etoiles', {
                templateUrl: 'views/Étoiles.html'       })
            .when('/lunes', {
                templateUrl: 'views/Lunes.html'

            })
            .when('/info', {
                templateUrl: 'views/Info.html',
                controller: 'Millenium.controller'

            })
            .otherwise({
                retirectTo: '/main'
            })
    })
    Millenium.run(function($rootScope, $http) {
    $http.get("index.json")
        .then(function(response) {
            // reponse.data correspond au données du JSON et le renvoi dans la variable 'element'
            $rootScope.element = response.data;
            console.log($rootScope.element);
        });

    Millenium.controller('detailCtrl', function($rootScope, $scope, $http, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.type = $scope.element[$scope.id].type;
        $scope.nom = $scope.element[$scope.id].nom;
        $scope.localisation = $scope.element[$scope.id].localisation;
        $scope.satellites = $scope.element[$scope.id].satellites;
        $scope.paysages = $scope.element[$scope.id].paysages;
        $scope.sites = $scope.element[$scope.id].sites;
        $scope.langues = $scope.element[$scope.id].langues;
        $scope.description = $scope.element[$scope.id].description;
        $scope.activites = $scope.element[$scope.id].activites;
        $scope.dpopulation = $scope.element[$scope.id].ammenage;

    });
});