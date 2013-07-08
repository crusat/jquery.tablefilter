/*
 * jquery.tablefilter.js
 *
 * Author: Kuznetsov Aleksey (crusat@crusat.ru)
 * Github: https://github.com/crusat/tablefilter
 *
 * License: GPL (http://www.opensource.org/licenses/gpl-license.php).
 *
 * Version 0.1
 *
 */

(function($) {

    $.fn.tablefilter = function(options) {
        var that = this;

        var settings = $.extend({
            table : 'table',
            ignoreLetterCase: true
        }, options);

        return this.each(function() {
            $(this).keyup(function(){
                $(settings.table+' tbody tr').each(function() {
                    var tr_text = $(this).text();
                    var input_text = $(that).val();
                    if (settings.ignoreLetterCase) {
                        tr_text = tr_text.toLowerCase();
                        input_text = input_text.toLowerCase();
                    }

                    if (tr_text.indexOf(input_text) != -1) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });

        });
    }
})(jQuery);