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
					$scope.insertUser = function() {

						var usuario= {
							email : $scope.email,
							password : $scope.password,
							nombre: $scope.nombre,
							apellidos : $scope.apellidos,
							fechanac : $scope.fechanac,
							sexo : $scope.sexo
						};
			
//						$http.post('http://localhost:8080/funme/)
//						.success(function(data) {
//						 alert("EXITO");
//						}).error(function(data) {
//						 alert("ERROR");
//						});
					$http({
							    method: 'GET', 
							    url: 'http://ip.jsontest.com/'
							  }).success(function(data, status, headers, config) {
							      $scope.myData=data;							      
							  }).error(function(data, status, headers, config) {
							      alert("Ha fallado la peticion. Estado HTTP:"+status+"     data:"+data+
							    		  "    headers:"+headers+"      config:"+config);
							  });
			
//				       $http.get('http://localhost:8080/funme/SeguroMedico/1').then(function(response) {
//						       
//						        $scope.content = response.data;
//						        $scope.statuscode = response.status;
//						        $scope.statustext = response.statustext; 
//						       
//				       });
						

					}
					$scope.guardarRegistro = function() {
						var registro = {
								email : $scope.email,
								password : $scope.password,
								rpassword : $scope.rpassword,
								nombre : $scope.nombre,
								apellidos : $scope.apellidos,
								fecha : $scope.fecha,
								genero : $scope.genero
							};
						if($scope.password != $scope.rpassword){
							alert("Las passwords deben de coincidir");
						}
						else{
							if($scope.registro.$valid){
								$http.post('http://localhost:8080/funme/Usuario',registro)
								.success(function(data) {
									alert("Usuario creado satisfactoriamente");
								      location.href='../index.html';
								}).error(function(data) {
									open('Error en el registro, inténtelo de nuevo');
								});
							}
						}

					}
					
				} ]);



