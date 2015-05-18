angular.module('ngAdminLteApp.directives', [])
.directive('fullHeight', function($window){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var offsetHeight = attrs.offset | 0;
			element.css('min-height', ($window.innerHeight - offsetHeight) + 'px');
			// handle resize, fix footer position. Now only support fixed mode
		  angular.element($window).bind('resize', function(e) {
		    element.css('min-height', (e.target.innerHeight - offsetHeight) + 'px');
		  })
		}
	}
})

.directive('stCellWithTemplate', function($compile) {
	return {
	  restrict: 'A',
	  link: function(scope, element, attr) {
	    var html = scope.col.cellTemplate;
	    var cellElement = $compile(html)(scope);
	    element.append(cellElement);
	    // adjust the width to align with header (if any)
	    if (element.parent('table').find('thead').length) {
	      var header = element.parents('table')
	      .find('thead tr th').get(element.index());
	      if (header.style.width) {
	        element.width($(header).width());
	      }
	    }
	  }
	};
})

.directive('widgetChart', function($timeout){
	return {
		restrict: 'E',
		scope: {
			cfg: "=cfg"
		},
		templateUrl: 'app/partials/widget-chart.html',
		link: function(scope, element, attr) {
			$timeout(function(){
				var columns = angular.copy(scope.cfg.chartOpt.data.columns);
				scope.cfg.chartOpt.data.columns = [];
				scope.cfg.chartOpt.bindto = '#chart_' + scope.$parent.$index;
				scope.chart = c3.generate(scope.cfg.chartOpt);
				$timeout(function(){
					scope.cfg.chartOpt.data.columns = angular.copy(columns);
					scope.chart.load({
						columns: columns,
					})
				}, 500 * scope.$parent.$index);
			});

		}
	}
})

