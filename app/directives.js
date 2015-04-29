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
});

