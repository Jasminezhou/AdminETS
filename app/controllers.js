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
.controller('TableListCtrl', function($scope, $state){
  $scope.tableName = $state.params.tableName;
  $scope.rowCollection = [
    {
      campaignName: 'California Dreaming', 
      account: 'Overwaitea Food Group', 
      referral: {'signup': 10, 'referrers': 5, 'referees': 4}, 
      startDate: new Date(), 
      endDate: new Date(), 
      addDate: new Date()
    },
    {
      campaignName: 'Refer a Friend for FREE Increase in Campaign Performance!', 
      account: 'Future Flow Media', 
      referral: {'signup': 33, 'referrers': 28, 'referees': 19}, 
      startDate: new Date(), 
      endDate: new Date(), 
      addDate: new Date()
    },
    {
      campaignName: 'Free email responsive design template...', 
      account: 'Revenue Automation', 
      referral: {'signup': 5, 'referrers': 5, 'referees': 4}, 
      startDate: new Date(), 
      endDate: new Date(), 
      addDate: new Date()
    },
    {
      campaignName: 'Enter to win the all-new 2013 Nissan Pathfinder', 
      account: 'Nissan', 
      referral: {'signup': 10, 'referrers': 5, 'referees': 4}, 
      startDate: new Date(), 
      endDate: new Date(), 
      addDate: new Date()
    },
  ];

  $scope.removeRow = function removeRow(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
      }
  }
})
.controller('TableEditCtrl', function($scope, $state){
  $scope.tableName = $state.params.tableName;
  $scope.recordId = $state.params.recordId;
  // Datepicker
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

})