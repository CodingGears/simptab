
define([ "jquery" ], function( $ ) {

    format = function ( value ) {
        if ( value < 10 ) {
            return "0" + value;
        }
        return value;
    }

    return {
        Show: function () {
            $( "#time" ).fadeIn( 500 );
            var date = new Date();

            $( "#time" ).text( date.getHours() + ":" + format(date.getMinutes()) );
            setInterval(function() {
                date = new Date();
                $( "#time" ).text(date.getHours() + ":" + format(date.getMinutes()) );
            }, 1000 * 30 );
        },

        Hide: function () {
            $( "#time" ).fadeOut( 500 );
        },

        Today: function () {
            var date = new Date();
            return date.getFullYear() + format( date.getUTCMonth() + 1 ) + date.getUTCDate()
        }
    }
});
