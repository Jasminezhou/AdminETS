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