# jquery.videofy
Change links to .mp4, .webm, .ogg into embed html video

jQuery plugin that check object for links that links to video files (.mp4, .webm, .ogg), 
and replace them whit HTML video tag.

##SUPORTED OPTIONS AND DEFAULT VALUES
* width: "100%" // Sets video width
* height: "auto", // Sets video height
* controls: "true", // Enable or disable video controls
* mp4: "video/mp4", // MP4 video type
* webm: "video/webm", // WEBM video type
* ogg: "video/ogg", // OGG video type
* mute: "false", // Mute video
* preload: "true", // Preload options (auto, metadata, none)
* poster: "" // Sets posted image

##How to use it:
* Include jquery.videofy.js
* Run plugin on object, can be body, that will check all links in body that links to video files, and replace them with video tag

##Example:
```
$(function(){
    $('body').videofy({
        poster: "https://peach.blender.org/wp-content/uploads/bbb-splash.png"
    }); 
});
```
