// ==UserScript==
// @name           hipchat-edit-last-message
// @namespace      http://usayplz.com
// @include        https://*.hipchat.com/chat*
// @updateURL      
// @version        1
// ==/UserScript==

(function(){
    // HipChat already includes jQuery and we can use $
    
    // Settings
    EDIT_HEIGHT = '50px'; // default = 30px 
    
    var initEvent = {
        keyCode: 90,
        altKey:  true,
        shiftKey: false,
        ctrlKey: false
    };
    // End of Settings
   
    // Set 
    var $edit  = $('#hc-message-input');
    $edit.css('min-height', EDIT_HEIGHT);
    
    function getMyLastMessage() {
        return $('.hc-msg-blue:last').find('.msg-line:last').text();
    }
    
    $edit.on('keydown', function(event) {
        if (event.which === initEvent.keyCode 
                && event.altKey == initEvent.altKey
                && event.shiftKey == initEvent.shiftKey
                && event.ctrlKey == initEvent.ctrlKey) {
            
            event.preventDefault();

            var msg = getMyLastMessage();
            $edit.val('s/' + msg + '/' + msg);
        }
    });
}());
