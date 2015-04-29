angular.module('ngAdminLteApp.controllers', ['ngAdminLteApp.services'])

.controller('RootCtrl', function($scope, $rootScope, $state, SiteConfig, SiteContent){
  $scope.siteConfig = SiteConfig;
  // controls sidebar expand/close
  $rootScope.sidebarCollapse = false;
  $scope.toggleSidebar = function(){
    $rootScope.sidebarCollapse = !$rootScope.sidebarCollapse;
  };
  // controls sidebar multiple level tree menu open and close
  $scope.treeview = [];
  $scope.treeviewCfg = SiteContent.sidebarTableMenu;
  $scope.resetTreeview = function(){
    $scope.treeview.forEach(function(v, i){$scope.treeview[i] = false});
  }
  // open a certain treeview category based on $state.params.tableName if any
  if ($state.params.tableName) {
    $scope.treeviewCfg.forEach(function(c, i){
      if (c.tables.filter(function(t){return t.tableName === $state.params.tableName}).length > 0) {
        $scope.treeview[i] = true;
      }
    })
  }
})
.controller('LoginCtrl', function($scope){ })
.controller('LockCtrl', function($scope){ })
.controller('RegisterCtrl', function($scope){ })
.controller('DashboardCtrl', function($scope){ })
.controller('TableListCtrl', function($scope, $state, TableConfig, TableDataService){
  $scope.tableName = $state.params.tableName;
  $scope.tableConfig = TableConfig[$scope.tableName].list;
  $scope.rowCollection = TableDataService[$scope.tableName];

  $scope.removeRow = function removeRow(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
      }
  }
})
.controller('TableEditCtrl', function($scope, $state, TableConfig, TableDataService){
  $scope.tableName = $state.params.tableName;
  $scope.tableConfig = TableConfig[$scope.tableName].edit;
  $scope.rowData = TableDataService[$scope.tableName][parseInt($state.params.recordId)];
  // Datepicker
  $scope.dtOpened = {};
  $scope.dtOpen = function($event, key) {
    $scope.dtOpened = {};
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dtOpened[key] = true;
  };

})