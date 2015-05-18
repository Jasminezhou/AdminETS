angular.module('ngAdminLteApp', ['ui.router', 'ui.bootstrap', 'ui.sortable', 'ngSanitize', 'smart-table', 'ngAdminLteApp.controllers', 'ngAdminLteApp.directives', 'ngAdminLteApp.filters'])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('root.login');
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider
      // Root state to master all
        .state('root', {
            abstract: true,
            controller: 'rootCtrl',
            views: {
                'header': {
                    templateUrl: 'app/partials/header.html',
                    controller: 'RootCtrl'
                },
                'sidebar': {
                    templateUrl: 'app/partials/sidebar.html',
                    controller: 'RootCtrl'
                },
                'main': {
                    template: '<div ui-view="master"></div>',
                    controller: 'RootCtrl'
                },
                'footer': {
                    templateUrl: 'app/partials/footer.html',
                    controller: 'RootCtrl'
                },
            }
        })

        // login
        .state('root.login', {
            url: '/login',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        // register
        .state('root.register', {
            url: '/register',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/register.html',
                    controller: 'RegisterCtrl'
                }
            }
        })       
        // lock screen
        .state('root.lock', {
            url: '/lock',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/lock.html',
                    controller: 'LockCtrl'
                }
            }
        })    
        // Dashboard
        .state('root.dashboard', {
            url: '/dashboard',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/dashboard_overall.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        // Dashboard Summary
        .state('root.dashboard.summary', {
            url: '/summary/:dashboardCampaign',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/dashboard_summary.html',
                    controller: 'DashboardSummaryCtrl'
                }
            }
        })
        // Dashboard Analytics
        .state('root.dashboard.analytics', {
            url: '/analytics/:dashboardCampaign',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/dashboard_analytics.html',
                    controller: 'DashboardAnalyticsCtrl'
                }
            }
        })

        // table
        .state('root.table', {
            abstract: true,
        })
        // table list view
        .state('root.table.list', {
            url: '/table/:tableName/list',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/table_list.html',
                    controller: 'TableListCtrl'
                }
            }
        })
        // table edit view
        .state('root.table.edit', {
            url: '/table/:tableName/edit/:recordId',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/table_edit.html',
                    controller: 'TableEditCtrl'
                }
            }
        })
        // table create view
        .state('root.table.create', {
            url: '/table/:tableName/create',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/table_edit.html',
                    controller: 'TableEditCtrl'
                }
            }
        })
        // Root elements
        .state('root.elements', {
            abstract: true
        })

        // elements Button
        .state('root.elements.buttons', {
            url: '/elements/buttons',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/buttons.html',
                }
            }
        })

        // elements General
        .state('root.elements.general', {
            url: '/elements/general',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/general.html',
                }
            }
        })
        // elements Modals
        .state('root.elements.modals', {
            url: '/elements/modals',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/modals.html',
                }
            }
        })
        // elements Forms
        .state('root.elements.forms', {
            url: '/elements/forms',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/forms.html',
                }
            }
        })
        // API Doc
        .state('root.elements.api', {
            url: '/elements/api',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/api.html',
                    controller: 'ApiDocCtrl'
                }
            }
        })
    }
  ]
);