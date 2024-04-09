import React, { Component } from 'react'

export class Chat extends Component {
    componentDidMount(){
       
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1a5513fca723e60a70b112076fd9a6a54","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
  render() {
    return (
      <div className='mt-20'> 
        <br/><br/>
      </div>
    )
  }
}

export default Chat
