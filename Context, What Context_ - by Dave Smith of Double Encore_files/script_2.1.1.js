var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($) {
	// Link popup handler:
    $.each($("a.mr_social_sharing_popup_link"), function() {
    	var elem = $(this);
    	elem.click( function (event) {
			event.preventDefault();
      		var popup = window.open(elem.attr('href'),'mr_social_sharing','height=400,width=740');
			if (popup) {
				popup.focus();
			}
    	});
    });
    // Remove pesky <p> tags:
    $(".mr_social_sharing_wrapper p").each(function(){
    	$(this).remove();
	});
});

}
/*
     FILE ARCHIVED ON 15:03:35 Aug 09, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:02:49 May 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.347
  exclusion.robots: 0.371
  LoadShardBlock: 97.327 (3)
  RedisCDXSource: 1.145
  CDXLines.iter: 31.566 (3)
  PetaboxLoader3.resolve: 32.908
  esindex: 0.027
  PetaboxLoader3.datanode: 107.595 (4)
  captures_list: 137.056
  load_resource: 98.1
*/