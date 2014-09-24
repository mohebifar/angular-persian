angular.module('ngPersianTools', []).filter('pnumber', function () {
    return function ($string) {

        if (typeof $string === 'string' || isFinite($string)) {
            
            // string
            $string = $string + '';
            
            // Numbers
            $numbers = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};
            
            // Replace
            var regex = new RegExp(Object.keys($numbers).join('|'), 'gi');
            $string = $string.replace(regex, function(match){
              return $numbers[match];
            });

        }

        return $string;
    }
});
