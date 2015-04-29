angular.module('ngAdminLteApp.services', [])

.factory('SiteConfig', function(){
	return {
		userIconUrl: 'http://etsmock.azurewebsites.net/dist/img/254b489.jpg',
		userName: 'Greg Johnston',
		logoHtml: '</span><b>ETS</b>admin</span>',
		copyrightUrl: 'http://carlsolutions.com/',
		copyrightCompany: 'Carl Solutions'
	}
})

.factory('SiteContent', function(){
	var sidebarTableMenu = [
	{
		label: 'Client Management',
		icon: 'glyphicon glyphicon-user',
		tables: [{
			tableName: 'account',
			label: 'Account'
		},{
			tableName: 'geography',
			label: 'Geography'
		}]
	}, {
		label: 'Campaign Management',
		icon: 'glyphicon glyphicon-gift',
		tables: [{
			tableName: 'campaign',
			label: 'Campaign'
		}, {
			tableName: 'questions',
			label: 'Questions'
		}, {
			tableName: 'vouchergroup',
			label: 'Voucher Group'
		}, {
			tableName: 'voucher',
			label: 'Voucher'
		}]
	}, {
		label: 'Referral',
		icon: 'glyphicon glyphicon-share-alt',
		tables: [{
			tableName: 'contact',
			label: 'Contact'
		}, {
			tableName: 'contestentry',
			label: 'Content Entry'
		}, {
			tableName: 'referee',
			label: 'Referees'
		}, {
			tableName: 'referral',
			label: 'Referrals'
		}, {
			tableName: 'sharehistory',
			label: 'Share History'
		}, {
			tableName: 'questionhistory',
			label: 'Question History'
		}]
	}]
	return {
		sidebarTableMenu: sidebarTableMenu
	}
})

.factory('TableConfig', function(){
	var campaign_list = {
		label: 'Campaign',
		columnCfg: [{
			label: 'Campaign Page',
			cellTemplate: '<button type="button" class="btn btn-sm btn-success"> <i class="fa fa-desktop"> </i> </button>'
		}, {
			label: 'Campaign Name',
			sortKey: 'campaignName',
			cellTemplate: '<strong>{{row.campaignName}}</strong> </br><small>Created {{row.addDate | date}}</small>',
		}, {
			label: 'Account',
			sortKey: 'account',
			cellTemplate: '<span>{{row.account}}</span>',
		}, {
			label: 'Referral Status',
			cellTemplate: '<a class="btn btn-app"> <span class="badge bg-red">{{row.referral.signup}}</span> <i class="fa fa-heart-o"></i> Sign Ups </a> <a class="btn btn-app"> <span class="badge badge bg-teal">{{row.referral.referrers}}</span> <i class="fa fa-users"></i> Referrers </a> <a class="btn btn-app"> <span class="badge bg-yellow">{{row.referral.referees}}</span> <i class="fa fa-bullhorn"></i> Referees </a>',
		}, {
			label: 'Start Date',
			sortKey: 'startDate',
			cellTemplate: '<span>{{row.startDate | date}}</span>',
		}, {
			label: 'End Date',
			sortKey: 'endDate',
			cellTemplate: '<span>{{row.endDate | date}}</span>',
		}, {
			label: 'Actions',
			cellTemplate: '<button type="button" class="btn btn-sm btn-info" ng-click="$state.go(\'root.table.edit\', {\'tableName\': tableName, \'recordId\': $index})"> <i class="glyphicon glyphicon-pencil"> </i> </button> <button type="button" ng-click="removeRow(row)" class="btn btn-sm btn-danger"> <i class="glyphicon glyphicon-remove"> </i> </button>', 
		}]
	};
	var campaign_edit = {
		label: 'Campaign',
		fields: [{
			key: 'account',
			label: 'Account',
			type: 'dropdown',
		}, {
			key: 'campaignCode',
			label: 'Shortcode for Campaign',
			type: 'text',
		}, {
			key: 'campaignName',
			label: 'Campaign Name',
			type: 'text',
		}, {
			key: 'callContacts',
			label: 'Contact Person',
			type: 'text',
		}, {
			key: 'startDate',
			label: 'Start Date',
			type: 'datepicker',
		}, {
			key: 'endDate',
			label: 'End Date',
			type: 'datepicker',
		}, {
			key: 'trackingCode',
			label: 'Tracking Code',
			type: 'text',
		}, ]
	};
	return {
		campaign: {
			list: campaign_list,
			edit: campaign_edit
		}
	}
})

.factory('TableDataService', function(){
	var campaign = [
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
  return {
  	campaign: campaign,
  };
})