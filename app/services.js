angular.module('ngAdminLteApp.services', [])

// Setup basic Admin console information, e.g. The owner, copyright, reference link etc.
.factory('SiteConfig', function(){
	return {
		userIconUrl: 'http://etsmock.azurewebsites.net/dist/img/254b489.jpg',
		userName: 'Greg Johnston',
		logoHtml: '</span><b>ETS</b>admin</span>',
		copyrightUrl: 'http://carlsolutions.com/',
		copyrightCompany: 'Carl Solutions'
	}
})

// Set up Site Detail, e.g. Side bar menu details
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
			sortKey: 'CampaignName',
			cellTemplate: '<strong>{{row.CampaignName}}</strong> </br><small>Created {{row.AddDate | date}}</small>',
		}, {
			label: 'Account',
			sortKey: 'Account',
			cellTemplate: '<span>{{row.Account.value.label}}</span>',
		}, {
			label: 'Referral Status',
			cellTemplate: '<a class="btn btn-app"> <span class="badge bg-red">{{row.Referral.signup}}</span> <i class="fa fa-heart-o"></i> Sign Ups </a> <a class="btn btn-app"> <span class="badge badge bg-teal">{{row.Referral.referrers}}</span> <i class="fa fa-users"></i> Referrers </a> <a class="btn btn-app"> <span class="badge bg-yellow">{{row.Referral.referees}}</span> <i class="fa fa-bullhorn"></i> Referees </a>',
		}, {
			label: 'Start Date',
			sortKey: 'startDate',
			cellTemplate: '<span>{{row.StartDate | date}}</span>',
		}, {
			label: 'End Date',
			sortKey: 'endDate',
			cellTemplate: '<span>{{row.EndDate | date}}</span>',
		}],
		actionButtons: [{
			label: 'Export Contacts',
			btnClass: 'btn-info',
			iconClass: 'glyphicon glyphicon-cloud-download'
		}, {
			label: 'Export Referrals',
			btnClass: 'btn-info',
			iconClass: 'glyphicon glyphicon-download-alt'
		}]
	};
	var campaign_edit = {
		label: 'Campaign',
		fields: [{
			key: 'Account',
			label: 'Account',
			type: 'dropdown',
		}, {
			key: 'CampaignCode',
			label: 'Shortcode for Campaign',
			type: 'text',
		}, {
			key: 'CampaignName',
			label: 'Campaign Name',
			type: 'text',
		}, {
			key: 'CallContacts',
			label: 'Contact Person',
			type: 'text',
		}, {
			key: 'StartDate',
			label: 'Start Date',
			type: 'datepicker',
		}, {
			key: 'EndDate',
			label: 'End Date',
			type: 'datepicker',
		}, {
			key: 'TrackingCode',
			label: 'Tracking Code',
			type: 'text',
		}, {
			key: 'Questions',
			label: 'Questions',
			type: 'sortable',
			sortableOptions: {
				// this sort options is very important. helper box top position will be wrong without it
				sort: function(event, ui) {  
			    	ui.helper.css({'top' : ui.position.top + $(window).scrollTop() + 'px'});
			    },
				placeholder: "sortable-item",
    			connectWith: ".sortable-container"
    		},
    		sortableCfg: {
    			choice: {
    				key: 'AvailableQuestions',
    				label: 'Available Questions',
    			},
    			selection: {
    				label: 'Selected Questions',
    			}
    		}
		}]
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
			cellTemplate: '<span>{{row.AddDate | date}}</span>',
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
	var contact_list = {
		label: 'Contact',
		columnCfg: [{
			label: 'Email',
			cellTemplate: '<span>{{row.Email}}</span>'
		}, {
			label: 'FirstName',
			cellTemplate: '<span>{{row.FirstName}}</span>'
		}, {
			label: 'LastName',
			cellTemplate: '<span>{{row.LastName}}</span>'
		}]
	};
	var contact_edit = {
		label: 'Contact',
		fields: [{
			key: 'Email',
			label: 'Email',
			type: 'text',
		}, {
			key: 'FirstName',
			label: 'First Name',
			type: 'text',
		}, {
			key: 'LastName',
			label: 'Last Name',
			type: 'text',
		}, {
			key: 'Photo',
			label: 'Photo URL',
			type: 'text',
		}, {
			key: 'Address1',
			label: 'Address 1',
			type: 'text',
		}, {
			key: 'Address2',
			label: 'Address 2',
			type: 'text',
		}, {
			key: 'City',
			label: 'City',
			type: 'text',
		}, {
			key: 'Phone',
			label: 'Phone',
			type: 'text',
		}, {
			key: 'Geography',
			label: 'Geography Info',
			type: 'text',
		}, {
			key: 'AddDate',
			label: 'Date Added',
			type: 'datepicker',
		}, {
			key: 'ChangeDate',
			label: 'Date Changed',
			type: 'datepicker',
		}]
	};
    var questionhistory_list = {
    	label: 'Question History',
    	columnCfg: [{
    		label: 'Contact',
    		cellTemplate: '<span>{{row.Contact}}</span>',
    	}, {
    		label: 'Campaign',
    		cellTemplate: '<span>{{row.Campaign}}</span>',
    	}, {
    		label: 'Question',
    		cellTemplate: '<span>{{row.Question}}</span>',
    	}, {
    		label: 'Answer',
    		cellTemplate: '<span>{{row.Answer}}</span>',
    	}, {
    		label: 'AddDate',
    		cellTemplate: '<span>{{row.AddDate | date}}</span>',
    	}]
    };
    var questionhistory_edit = {
    	label: 'Question History',
    	fields: [{
    		key: 'Contact',
    		label: 'Contact',
    		type: 'text',
    	}, {
    		key: 'Campaign',
    		label: 'Campaign',
    		type: 'text',
    	}, {
    		key: 'Question',
    		label: 'Question',
    		type: 'text',
    	}, {
    		key: 'Answer',
    		label: 'Answer',
    		type: 'text',
    	}, {
    		key: 'AddDate',
    		label: 'Date Added',
    		type: 'datepicker,'
    	}]
    };
    var contestentry_list = {
    	label: 'Contest Entry',
    	columnCfg: [{
    		label: 'Contact',
    		cellTemplate: '<span>{{row.Contact}}</span>',
    	}, {
    		label: 'Campaign',
    		cellTemplate: '<span>{{row.Campaign}}</span>'
    	}, {
    		label: 'Voucher',
    		cellTemplate: '<span>{{row.Voucher}}</span>',
    	}, {
    		label: 'SocialChannel',
    		cellTemplate: '<span>{{row.SocialChannel}}</span>',
    	}]
    };
    var contestentry_edit = {
    	label: 'Contest Entry',
    	fields: [{
    		key: 'Contact',
    		label: 'Contact',
    		type: 'text',
    	}, {
    		key: 'Campaign',
    		label: 'Campaign',
    		type: 'text',
    	}, {
    		key: 'Voucher',
    		label: 'Voucher',
    		type: 'text',
    	}, {
    		key: 'SocialChannel',
    		label: 'Social Channel',
    		type: 'text',
    	}, {
    		key: 'SocialId',
    		label: 'Social User ID',
    		type: 'text',
    	}, {
    		key: 'SocialExtra',
    		label: 'Extra Info about Social User',
    		type: 'text',
    	}, {
    		key: 'IssueDate',
    		label: 'Issue Date',
    		type: 'datepicker',
    	}]
    };
    var referral_list = {
    	label: 'Referral',
    	columnCfg: [{
    		label: 'Contact',
    		cellTemplate: '<span>{{row.Contact}}</span>',
    	}, {
    		label: 'Campaign',
    		cellTemplate: '<span>{{row.Campaign}}</span>',
    	}, {
    		label: 'IssueDate',
    		cellTemplate: '<span>{{row.IssueDate | date}}</span>',
    	}]
    };
    var referral_edit = {
    	label: 'Referral',
    	fields: [{
    		key: 'Contact',
    		label: 'Contact',
    		type: 'text',
    	}, {
    		key: 'Campaign',
    		label: 'Campaign',
    		type: 'text',
    	}, {
    		key: 'ReferCode',
    		label: 'Referral Code',
    		type: 'text',
    	}, {
    		key: 'Voucher',
    		label: 'Voucher',
    		type: 'text',
    	}, {
    		key: 'IssueDate',
    		label: 'Issue Date',
    		type: 'datepicker',
    	}, {
    		key: 'RedeemedDate',
    		label: 'Redeemed Date',
    		type: 'datepicker',
    	}]
    };
    var referee_list = {
    	label: 'Referee',
    	columnCfg: [{
    		label: 'Contact',
    		cellTemplate: '<span>{{row.Contact}}</span>',
    	}, {
    		label: 'Campaign',
    		cellTemplate: '<span>{{row.Campaign}}</span>',
    	}, {
    		label: 'IssueDate',
    		cellTemplate: '<span>{{row.IssueDate | date}}</span>',
    	}]
    };
    var referee_edit = {
    	label: 'Referee',
    	fields: [{
    		key: 'Contact',
    		label: 'Contact',
    		type: 'text',
    	}, {
    		key: 'Campaign',
    		label: 'Campaign',
    		type: 'text',
    	}, {
    		key: 'ReferCode',
    		label: 'Referral Code',
    		type: 'text',
    	}, {
    		key: 'Voucher',
    		label: 'Voucher',
    		type: 'text',
    	}, {
    		key: 'IssueDate',
    		label: 'Issue Date',
    		type: 'datepicker',
    	}, {
    		key: 'RedeemedDate',
    		label: 'Redeemed Date',
    		type: 'datepicker',
    	}]
    };
    var sharehistory_list = {
    	label: 'Share History',
    	columnCfg: [{
    		label: 'From',
    		cellTemplate: '<span>{{row.From}}</span>',
    	}, {
    		label: 'Campaign',
    		cellTemplate: '<span>{{row.Campaign}}</span>',
    	}, {
    		label: 'To',
    		cellTemplate: '<span>{{row.ToName}} from channel {{row.ToChannel}}</span>',
    	}, {
    		label: 'Date',
    		cellTemplate: '<span>{{row.ToDate | date}}</span>',
    	}]
    };
    var sharehistory_edit = {
    	label: 'Share History',
    	fields: [{
    		key: 'From',
    		label: 'From',
    		type: 'text',
    	}, {
    		key: 'Campaign',
    		label: 'Campaign',
    		type: 'text',
    	}, {
    		key: 'ToId',
    		label: 'To ID',
    		type: 'text',
    	}, {
    		key: 'ToChannel',
    		label: 'To Channel',
    		type: 'radio',
    		radioOptions: [{
    			value: 'facebook',
    			label: 'Facebook',
    		}, {
    			value: 'google',
    			label: 'Google Plus',
    		}, {
    			value: 'linkedin',
    			label: 'LinkedIn',
    		}, {
    			value: 'twitter',
    			label: 'Twitter',
    		}, {
    			value: 'email',
    			label: 'Email',
    		}]
    	}, {
    		key: 'ToExtra',
    		label: 'Extra Info for To user',
    		type: 'text',
    	}, {
    		key: 'ToDate',
    		label: 'Date of sharing',
    		type: 'datepicker',
    	}]
    }
    var questions_list = {
    	label: 'Questions',
    	columnCfg: [{
    		label: 'Question',
    		cellTemplate: '<span>{{row.Question}}</span>',
    	}]
    };
    var questions_edit = {
    	label: 'Questions',
    	fields: [{
    		key: 'Question',
    		label: 'Question',
    		type: 'text',
    	}]
    };
    var geography_list = {
    	label: 'Geography',
    	columnCfg: [{
    		label: 'Province/State',
    		cellTemplate: '<span>{{row.ProvState}}</span>',
    	}, {
    		label: 'Country',
    		cellTemplate: '<span>{{row.Country}}</span>',
    	}]
    };
    var geography_edit = {
    	label: 'Geography',
    	fields: [{
    		key: 'ProvState',
    		label: 'Province/State',
    		type: 'text',
    	}, {
    		key: 'Country',
    		label: 'Country',
    		type: 'text',
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
		},
		contact: {
			list: contact_list,
			edit: contact_edit,
		},
		questionhistory: {
			list: questionhistory_list,
			edit: questionhistory_edit,
		},
		contestentry: {
			list: contestentry_list,
			edit: contestentry_edit,
		},
		referral: {
			list: referral_list,
			edit: referral_edit,
		},
		referee: {
			list: referee_list,
			edit: referee_edit,
		},
		sharehistory: {
			list: sharehistory_list,
			edit: sharehistory_edit
		},
		questions: {
			list: questions_list,
			edit: questions_edit,
		},
		geography: {
			list: geography_list,
			edit: geography_edit,
		},
	}
})

.factory('DashboardDataService', function(){
	var analyticsData = [{
		title: 'Leads Conversion Rate',
		chartOpt: {
		    data: {
		        columns: [
		            ['signup', 0.30, 0.35, 0.30, 0, 0, 0],
		            ['referral', 0.13, 0.10, 0.14, 0.20, 0.15, 0.50]
		        ],
		        types: {
		            signup: 'area',
		            referral: 'area-spline'
		        }
		    }
		}    
	}, {
		title: 'Referrals by Position',
		chartOpt: {
			data: {
		        columns: [
		            ['% of refferals', 10, 30, 60]
		        ],
		        types: {
		            '% of refferals': 'bar'
		        },
		        color: function (inColor, data) {
		            if (data.index !== undefined) {
		                return d3.scale.category10()(data.index);
		            }

		            return inColor;
		        }
		    },
		      
		    axis: {
		        x: {
		            type: 'category',
		            categories: ['Manager', 'Senior level', 'Junior level']
		        },
		        y: {

		            label: '% of refferals'
		        },
		        rotated: true
		    },
		    legend: {
		        show: false
		    }
		}    
	}, {
		title: 'Topic Analysis',
		chartOpt: {
	        data: {
	            columns: [
	                ['% of refferals', 80, 20]
	            ],
	            types: {
	                '% of refferals': 'bar'
	            },
	            color: function (inColor, data) {
	                if (data.index !== undefined) {
	                    return d3.scale.category10()(data.index);
	                }

	                return inColor;
	            }
	        },	       
	        axis: {
	        	x: {
	        		type: 'category',
	        		categories: ['Polarity', 'Guidance']
				},
	    		y: {
	    			label: '% of refferals'
	    		},
				rotated: true
			},
	      
			legend: {
			  show: false
			}
		}
	}, {
		title: 'Actions Analysis',
		chartOpt: {
	    data: {
	        columns: [
	            ['% of refferals',30, 45, 20, 10, 40, 20]
	        ],
	        types: {
	            '% of refferals': 'bar'
	        },
	        color: function (inColor, data) {
	            if (data.index !== undefined) {
	                return d3.scale.category10()(data.index);
	            }

	            return inColor;
	        }
	    },
	        
	     
	    axis: {
	        x: {
	            type: 'category',
	            categories: ['Decisiveness','Temporality', 'Guidance', 'Flamboyance', 'Slang', 'Contrast']
	        },
	        y: {

	            label: '% of refferals'
	        },
	        rotated: true
	    },
	    legend: {
	        show: false
	    }
		}
	}, {
		title: 'Referral by Country',
		chartOpt: {
	    data: {
	        columns: [
            ["Canada", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3],
            ["USA", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0],
            ["UK", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8],
            ["German", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8],
            ["China", 5.5, 1.9, 2.1, 1.8, 2.2],
        ],
	        type : 'pie',
	    }
		}
	}];
	var overall = [{
		title: 'Daily Referral - Overwaitea Food Group',
		chartOpt: {
	    data: {
	        x: 'x',
	//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
	        columns: [
	            ['x', '2015-01-01', '2015-01-02', '2015-01-03', '2015-01-04', '2015-01-05', '2015-01-06'],
	//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
	            ['referral', 30, 200, 100, 400, 150, 250],
	            ['sign up', 130, 340, 200, 500, 250, 350]
	        ]
	    },
	    axis: {
	        x: {
	            type: 'timeseries',
	            tick: {
	                format: '%Y-%m-%d'
	            }
	        }
	    }
		}
	}, {
		title: 'Daily Referral - Future Flow Media',
		chartOpt: {
	    data: {
	        x: 'x',
	//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
	        columns: [
	            ['x', '2015-01-01', '2015-01-02', '2015-01-03', '2015-01-04', '2015-01-05', '2015-01-06'],
	//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
	            ['referral', 40, 100, 50, 60, 70, 90],
	            ['sign up', 130, 240, 100, 300, 250, 350]
	        ]
	    },
	    axis: {
	        x: {
	            type: 'timeseries',
	            tick: {
	                format: '%Y-%m-%d'
	            }
	        }
	    }
		}
	}, {
		title: 'Daily Referral - Revenue Automation',
		chartOpt: {
	    data: {
	        x: 'x',
	//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
	        columns: [
	            ['x', '2015-01-01', '2015-01-02', '2015-01-03', '2015-01-04', '2015-01-05', '2015-01-06'],
	//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
	            ['referral', 20, 30, 50, 70, 85, 90],
	            ['sign up', 200, 150, 450, 500, 400, 350]
	        ]
	    },
	    axis: {
	        x: {
	            type: 'timeseries',
	            tick: {
	                format: '%Y-%m-%d'
	            }
	        }
	    }
		}
	}];
	return {
		analytics: analyticsData,
		overall: overall
	}
})

.factory('TableDataService', function(TableConfig){
	var campaign = [
    {
      CampaignName: 'California Dreaming', 
      Account: {
      	value: {
      		id: 1,
      		label: 'Overwaitea Food Group',
      	},
      	options: [{
      		id: 1,
      		label: 'Overwaitea Food Group',
      	}, {
      		id: 2,
      		label: 'Future Flow Media',
      	}, {
      		id: 3,
      		label: 'Revenue Automation'
      	}]
      }, 
      Referral: {'signup': 10, 'referrers': 5, 'referees': 4}, 
      StartDate: new Date().toISOString().split('T')[0], 
      EndDate: new Date().toISOString().split('T')[0], 
      AddDate: new Date().toISOString().split('T')[0],
      Questions: [{
      	id: '123',
      	label: 'Do you know that you can add new questions?',
      }],
      AvailableQuestions: [{
      	id: '152', 
      	label: 'What is the best Question 1?',
      }, {
      	id: '321',
      	label: 'Do you like this survey?',
      }, {
      	id: '12312',
      	label: 'This drag and drop feature in ETS is cool, right?'
      }]
    },
    {
      CampaignName: 'Refer a Friend for FREE Increase in Campaign Performance!', 
      Account: {
      	value: {
      		id: 2,
      		label: 'Future Flow Media',
      	},
      	options: [{
      		id: 1,
      		label: 'Overwaitea Food Group',
      	}, {
      		id: 2,
      		label: 'Future Flow Media',
      	}, {
      		id: 3,
      		label: 'Revenue Automation'
      	}]
      },
      Referral: {'signup': 33, 'referrers': 28, 'referees': 19}, 
      StartDate: new Date().toISOString().split('T')[0], 
      EndDate: new Date().toISOString().split('T')[0], 
      AddDate: new Date().toISOString().split('T')[0],
      Questions: [{
      	id: '123',
      	label: 'Do you know that you can add new questions?',
      }],
      AvailableQuestions: [{
      	id: '152', 
      	label: 'What is the best Question 1?',
      }, {
      	id: '321',
      	label: 'Do you like this survey?',
      }, {
      	id: '12312',
      	label: 'This drag and drop feature in ETS is cool, right?'
      }]
    },
    {
      CampaignName: 'Free email responsive design template...', 
      Account: {
      	value: {
      		id: 3,
      		label: 'Revenue Automation'
      	},
      	options: [{
      		id: 1,
      		label: 'Overwaitea Food Group',
      	}, {
      		id: 2,
      		label: 'Future Flow Media',
      	}, {
      		id: 3,
      		label: 'Revenue Automation'
      	}]
      },
      Referral: {'signup': 5, 'referrers': 5, 'referees': 4}, 
      StartDate: new Date().toISOString().split('T')[0], 
      EndDate: new Date().toISOString().split('T')[0], 
      AddDate: new Date().toISOString().split('T')[0],
      Questions: [{
      	id: '123',
      	label: 'Do you know that you can add new questions?',
      }],
      AvailableQuestions: [{
      	id: '152', 
      	label: 'What is the best Question 1?',
      }, {
      	id: '321',
      	label: 'Do you like this survey?',
      }, {
      	id: '12312',
      	label: 'This drag and drop feature in ETS is cool, right?'
      }]
    },
    {
      CampaignName: 'Enter to win the all-new 2013 Nissan Pathfinder', 
      Account: {
      	value: {
      		id: 4,
      		label: 'Nissan'
      	},
      	options: [{
      		id: 1,
      		label: 'Overwaitea Food Group',
      	}, {
      		id: 2,
      		label: 'Future Flow Media',
      	}, {
      		id: 3,
      		label: 'Revenue Automation'
      	}, {
      		id: 4,
      		label: 'Nissan'
      	}]
      },
      Referral: {'signup': 10, 'referrers': 5, 'referees': 4}, 
      StartDate: new Date().toISOString().split('T')[0], 
      EndDate: new Date().toISOString().split('T')[0], 
      AddDate: new Date().toISOString().split('T')[0],
      Questions: [{
      	id: '123',
      	label: 'Do you know that you can add new questions?',
      }],
      AvailableQuestions: [{
      	id: '152', 
      	label: 'What is the best Question 1?',
      }, {
      	id: '321',
      	label: 'Do you like this survey?',
      }, {
      	id: '12312',
      	label: 'This drag and drop feature in ETS is cool, right?'
      }]
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
  				value = new Date().toISOString().split('T')[0];
  			} else if (f.type === 'radio') {
  				value = 'Yes';
  			} else if (f.type === 'dropdown') {
  				value = {};
  				value.options = [{id: 1}, {id: 2}, {id: 3}].map(function(o, i){
  					o.label = f.label + ' ' + i;
  					return o;
  				});
  				value.value = value.options[1];
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
  	contact: randomData('contact'),
  	contestentry: randomData('contestentry'),
  	questionhistory: randomData('questionhistory'),
  	referral: randomData('referral'),
  	referee: randomData('referee'),
  	sharehistory: randomData('sharehistory'),
  	questions: randomData('questions'),
  	geography: randomData('geography'),
  };
})