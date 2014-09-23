angular.module('ngPersianTools', []).filter('pnumber', function () {
    return function ($string) {

        if (typeof $string === 'string' || isFinite($string)) {

            $string = str_replace('0', '۰', $string);
            $string = str_replace('1', '۱', $string);
            $string = str_replace('2', '۲', $string);
            $string = str_replace('3', '۳', $string);
            $string = str_replace('4', '۴', $string);
            $string = str_replace('5', '۵', $string);
            $string = str_replace('6', '۶', $string);
            $string = str_replace('7', '۷', $string);
            $string = str_replace('8', '۸', $string);
            $string = str_replace('9', '۹', $string);

        }

        return $string;
    }
});

