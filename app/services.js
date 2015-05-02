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
	var account_list = {
		label: 'Account',
		columnCfg: [{
			label: 'Company Name',
			cellTemplate: '<h2>{{row.Name}}</h2>'
		}, {
			label: 'Shortcode for Company',
			sortKey: 'AccountCode',
			cellTemplate: '<b>{{row.AccountCode}}</b>',
		}]
	};
	var account_edit = {
		label: 'Change Account',
		fields: [{
			key: 'Name',
			label: 'Company Name',
			type: 'text',
		}, {
			key: 'AccountCode',
			label: 'Shortcode for Company',
			type: 'text',
		}, {
			key: 'PrimaryContact',
			label: 'Primary Contact Person Name',
			type: 'text',
		}, {
			key: 'BillingContact',
			label: 'Billing Contact Person Name',
			type: 'text',
		}, {
			key: 'PrimaryCPhone',
			label: 'Primary Contact phone number',
			type: 'text',
		}, {
			key: 'BillingCPhone',
			label: 'Billing Contact phone number',
			type: 'text',
		}, {
			key: 'MainGeographyAddr1',
			label: 'Main Address 1',
			type: 'text',
		}, {
			key: 'MainGeographyAddr2',
			label: 'Main Address 2',
			type: 'text',
		}, {
			key: 'BillingAddr1',
			label: 'Billing Address 1',
			type: 'text',
		}, {
			key: 'BillingAddr2',
			label: 'Billing Address 2',
			type: 'text',
		}, {
			key: 'AddDate',
			label: 'Date Added',
			type: 'datepicker',
		}, {
			key: 'ChangeDate',
			label: 'Date Changed',
			type: 'datepicker',
		}, {
			key: 'AccountLogoLocation',
			label: 'Account Logo URL',
			type: 'text',
		}]
	};
	var vouchergroup_list = {
		label: 'Voucher Group',
		columnCfg: [{
			label: 'Name',
			cellTemplate: '<span>{{row.Name}}</span>',
		}, {
			label: 'Campaign',
			cellTemplate: '<span>{{row.Campaign}}</span>',
		}, {
			label: 'Voucher Category',
			cellTemplate: '<span>{{row.VoucherCategory}}</span>',
		}, {
			label: 'Description',
			cellTemplate: '<span>{{row.DescTitle}}</span>',
		}]
	};

	var vouchergroup_edit = {
		label: 'Voucher Group',
		fields: [{
			key: 'Name',
			label: 'Voucher Group Name',
			type: 'text',
		}, {
			key: 'Campaign',
			label: 'Campaign Name',
			type: 'dropdown',
		}, {
			key: 'VoucherCategory',
			label: 'Category',
			type: 'dropdown',
		}, {
			key: 'Creator',
			label: 'Creator',
			type: 'text',
		}, {
			key: 'CreationDate',
			label: 'Date Created',
			type: 'datepicker',
		}, {
			key: 'StartDate',
			label: 'Date Start',
			type: 'datepicker',
		}, {
			key: 'EndDate',
			label: 'Date End',
			type: 'datepicker',
		}, {
			key: 'VoucherImage',
			label: 'Voucher Image URL',
			type: 'text',
		}, {
			key: 'DescTitle',
			label: 'Description Title',
			type: 'text',
		}, {
			key: 'DescHighlight',
			label: 'Description Highlight',
			type: 'text',
		}, {
			key: 'DescSubTitle',
			label: 'Description sub-title',
			type: 'text'
		}, {
			key: 'DescDetail',
			label: 'Description Details',
			type: 'text',
		}]
	};
	var voucher_list = {
		label: 'Vouchers',
		columnCfg: [{
			label: 'Voucher Code',
			cellTemplate: '<span>{{row.VoucherCode}}</span>',
		}, {
			label: 'Group',
			cellTemplate: '<span>{{row.Group}}</span>',
		}, {
			label: 'Added Date',
			cellTemplate: '<span>{{row.AddDate}}</span>',
		}, {
			label: 'Available',
			cellTemplate: '<span>{{row.Available}}</span>',
		}, {
			label: 'Contact',
			cellTemplate: '<span>{{row.Contact}}</span>'
		}]
	};
	var voucher_edit = {
		label: 'Voucher',
		fields: [{
			key: 'VoucherCode',
			label: 'Voucher Code',
			type: 'text',
		}, {
			key: 'Group',
			label: 'Group',
			type: 'dropdown',
		}, {
			key: 'AddDate',
			label: 'Added Date',
			type: 'datepicker',
		}, {
			key: 'Available',
			label: 'Available',
			type: 'radio',
			radioOptions: [{
				value: 'yes',
				label: 'Yes',
			}, {
				value: 'no',
				label: 'No',
			}]
		}, {
			key: 'Contact',
			label: 'Contact',
			type: 'text'
		}]
	};
	return {
		campaign: {
			list: campaign_list,
			edit: campaign_edit,
		},
		account: {
			list: account_list,
			edit: account_edit,
		},
		vouchergroup: {
			list: vouchergroup_list,
			edit: vouchergroup_edit,
		},
		voucher: {
			list: voucher_list,
			edit: voucher_edit,
		}
	}
})

.factory('TableDataService', function(TableConfig){
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
  var account = [
  	{
  		Name: 'Overwaitea Food Group',
  		AccountCode: 'food',
  		PrimaryContact: 'John Joe',
  	}, {
  		Name: 'Future Flow Media',
  		AccountCode: 'ffm',
  		PrimaryContact: 'Chris',
  	}
  ];
  var randomData = function(tableName) {
  	var fields = TableConfig[tableName].edit.fields;
  	var result = [];
  	for (var i=0; i<5; i++) {
  		var record = {};
  		fields.forEach(function(f){
  			var value = 'Very cool ' + f.label + i;
  			if (f.type === 'datepicker') {
  				value = new Date();
  			} else if (f.type === 'radio') {
  				value = 'Yes';
  			}
  			record[f.key] = value
  		});
  		result.push(record);
  	}
  	return result;
  };
  return {
  	campaign: campaign,
  	account: account,
  	vouchergroup: randomData('vouchergroup'),
  	voucher: randomData('voucher'),
  };
})