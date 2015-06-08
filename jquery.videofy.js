/*!
  jQuery videofy plugin
  @name jquery.videofy.js
  @author Blaž Carli (blaz@2bion.net or @ilrac)
  @version 1.0
  @date 06/08/2015
  @category jQuery Plugin video
  @copyright (c) 2013 Blaž Carli
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function ( $ ) {
    $.fn.videofy = function(options) {
        var settings = $.extend({
            width: "100%",
            height: "auto",
            controls: "true",
            mp4: "video/mp4",
            webm: "video/webm",
            ogg: "video/ogg",
            mute: "false",
            preload: "true",
            poster: ""
        }, options );
        $('a').each(function(){
            var videolink = $(this).attr('href');
            if(videolink.search('mp4') != -1){
                $(this).replaceWith('<video poster="'+settings.poster+'"  controls="'+settings.controls+'" style="width:'+settings.width+'; height:'+settings.height+';" mute="'+settings.mute+'" preload="'+settings.preload+'"><source src="'+videolink+'" type="'+settings.mp4+'"></video>');
            }
            if(videolink.search('webm') != -1){
                $(this).replaceWith('<video poster="'+settings.poster+'" controls="'+settings.controls+'" style="width:'+settings.width+'; height:'+settings.height+';" mute="'+settings.mute+'" preload="'+settings.preload+'"><source src="'+videolink+'" type="'+settings.webm+'"></video>');
            }
            if(videolink.search('ogg') != -1){
                $(this).replaceWith('<video poster="'+settings.poster+'" controls="'+settings.controls+'" style="width:'+settings.width+'; height:'+settings.height+';" mute="'+settings.mute+'" preload="'+settings.preload+'"><source src="'+videolink+'" type="'+settings.ogg+'"></video>');
            }
        });
    };
}( jQuery ));
