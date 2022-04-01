var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoCliente = {};
   $scope.clienteSelecionado = {};

   $scope.clientes = [
       {nome: "Michael Douglas", telefone: 111111111, email: "michael@gmail.com"},
       {nome: "Ana Barbera", telefone: 222222222, email: "anabarbera@gmail.com"},
       {nome: "Vanessa Briech", telefone: 333333333, email: "vanessabriech@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.clientes.push($scope.novoCliente);
       $scope.novoCliente = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };

   $scope.alterarCliente = function () {
       
   };

   $scope.excluirCliente = function(){
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
   };
   
});