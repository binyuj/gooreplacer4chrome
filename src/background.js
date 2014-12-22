chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var requestUrl = info.url;
    var redirectMap = {
        'googleapis.com': 'lug.ustc.edu.cn',        
        'themes.googleusercontent.com': 'google-themes.lug.ustc.edu.cn',
        'fonts.gstatic.com': 'fonts-gstatic.lug.ustc.edu.cn',
        '(www|0|1|2).gravatar.com': 'ruby-china.org'
    };
    for(var key in redirectMap) {
        var redirectReg = new RegExp(key);
        if( requestUrl.match(redirectReg) ) {
            var newUrl = requestUrl.replace(redirectReg, redirectMap[key]);    

            return {redirectUrl: newUrl};
         }
    }

  },
  // filters
  {
    urls: [
      "*://ajax.googleapis.com/*",
      "*://fonts.googleapis.com/*",
      "*://themes.googleusercontent.com/*",
      "*://fonts.gstatic.com/*",
      "*://*.gravatar.com/avatar/*"
    ],
  },
  // extraInfoSpec
  ["blocking"]);
