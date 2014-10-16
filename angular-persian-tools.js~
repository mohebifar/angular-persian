(function (angular) {

    var ngPersian = angular.module('ngPersianTools', []);

    /**
     * @author Mohamad Mohebifar
     * @author Hadi Mostafapour
     */
    ngPersian.filter('pnumber', function () {
        return function ($string) {

            if (typeof $string === 'string' || isFinite($string)) {

                // string
                $string = $string + '';

                // Numbers
                $numbers = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};

                // Replace
                var regex = new RegExp(Object.keys($numbers).join('|'), 'gi');
                $string = $string.replace(regex, function (match) {
                    return $numbers[match];
                });

            }

            return $string;
        }
    });

    /**
     * @author Mohamad Mohebifar
     * @description Algorithm is designed by Mohamad Mohebifar
     */
    ngPersian.filter('toPWords', function () {
        return function (num) {
            if (!isFinite(num) || typeof num === 'undefined' || num == '' || num === null) {
                return '';
            }

            var parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون'];
            var numbers = {};
            numbers[1] = ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
            numbers[2] = ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
            numbers[3] = ['', 'صد', 'دویصت', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
            numbers[0] = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
            var delimiter = ' و ';
            num = num.toString();

            function farsi(num) {
                var times = 0;
                var r = num.length % 3;
                if (r == 1) times = 2;
                else if (r == 2) times = 1;
                else times = 0;
                for (var i = 1; i <= times; i++) {
                    num = '0' + num;
                }

                var letters = [];
                for (var i = 0; i < num.length; i += 3) {
                    var val = part(num.slice(i, i + 3));
                    if (val != false) {
                        val += ' ' + parts[(num.length - i - 3) / 3];
                        letters.push(val);
                    }
                }

                if (letters.length == 0)
                    letters.push(numbers[1][0]);

                return letters.join(delimiter);
            }

            function part(num) {
                var letters = [];
                get(num, 0) != 0 && letters.push(numbers[3][get(num, 0)]);

                if (get(num, 1) != 1) {
                    get(num, 1) != 0 && letters.push(numbers[2][get(num, 1)]);
                    get(num, 2) != 0 && letters.push(numbers[1][get(num, 2)]);
                } else {
                    letters.push(numbers[0][get(num, 2)]);
                }

                if (letters.length != 0)
                    return letters.join(delimiter);
                else
                    return false;
            }

            function get(num, digit) {
                return num[digit];
            }

            return farsi(num)
        }
    });
})(angular);
