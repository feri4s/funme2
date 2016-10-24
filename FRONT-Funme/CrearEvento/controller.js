/**
 * 
 */
'use strict';
var app = angular.module('app', [])
app.controller('controlador', ['$scope','$http', function($scope, $http) {
					$scope.newPage = function() {
						open('crearEvento.html',
								'top=300,left=300,width=300,height=300');
					}
					$scope.cancelar = function() {
						open('Calendario.html');
					}
					$scope.close = function () {
						window.close();
					};
					$scope.insertEvent = function() {

						var insertarEv = {
								lugar : $scope.lugar,
								nombre : $scope.nombre
							};
						var mes = $scope.dia.getMonth()+1;
						insertarEv.dia = $scope.dia.getDate() + "/" + mes + "/" + $scope.dia.getFullYear(); 
						insertarEv.hora = $scope.hora.getHours() + ":" + $scope.hora.getMinutes();
						var posicion_x; 
						var posicion_y; 
						posicion_x=(screen.width/2)-(400/2); 
						posicion_y=(screen.height/2)-(300/2); 
						//alert(insertarEv.hora);							
			
						$http.post('http://localhost:8080/funme/crearEvento',insertarEv)
						.success(function(data) {
							window.open('popup-exito.html', this.target, 'width=400,height=300,left='+posicion_x+',top='+posicion_y+'')
						}).error(function(data) {
							window.open('popup-exito.html', this.target, 'width=400,height=300,left='+posicion_x+',top='+posicion_y+'')
						});
					}
				} ]);