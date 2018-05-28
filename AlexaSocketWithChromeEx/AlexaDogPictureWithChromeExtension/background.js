var oldtabName;
function refresh() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://htnob2qsd3.execute-api.us-east-1.amazonaws.com/XcpChrome", true);
    xhttp.send();
    xhttp.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var tabName = response.tabName;
            console.log(oldtabName);
            if (oldtabName !== tabName) {
                console.log("The tabName is " + tabName);
                oldtabName = tabName;
                    var openImage = "http://192.168.1.187:8000/custom_Widgets/?reload#application/cstm_"+tabName;
                    var openImageURL = new URL(openImage);
                    var newImageOrgin = openImageURL.origin;
                    if(tabName=="resultlist test"){
                        openImage = "http://192.168.1.187:8000/custom_Widgets/?reload#application/cstm_resultlist_test";
                    }
                    chrome.windows.getAll({ populate: true }, function (windows) {
                        windows.forEach(function (window) {
                            var tabs = window.tabs;
                            var tabs_length = tabs.length;
                            var tab_count = 0;
                            for (var i = 0; i < tabs_length; i++) {
                                var tab = tabs[i];
                                var tabURL = tab.url;
                                var origin = new URL(tabURL).origin;
                                var tabID = tab.id;
                                tab_count++;
                                if (newImageOrgin == origin) {
                                    chrome.tabs.update(tabID, { highlighted: true, url: openImage }, function (tab) {
                                        console.log(tab.url);
                                        console.log("update");
                                    });
                                    break;
                                }
                                if (tabs_length == tab_count) {
                                    chrome.tabs.create({ url: openImage });
                                }
                            }
                        });
                    });
            }
            setTimeout(refresh.bind(false), 1000);
        }
    }
}
refresh(true);



// function gettingAllTabs(callback) {

//     chrome.windows.getAll({ populate: true }, function (window_list) {
//         var list = [];
//         for (var i = 0; i < window_list.length; i++) {
//             list = list.concat(window_list[i].tabs);
//         }
//         if (callback) {
//             callback(list);
//         }
//     });
// }







// chrome.windows.getAll({ populate: true }, function (windows) {
//     windows.forEach(function (window) {
//         console.log(window);
//         window.tabs.forEach(function (tab) {
//             //collect all of the urls here, I will just log them instead
//             var tabURL = tab.url;
//             var origin = new URL(tabURL).origin;
//             console.log(origin);
//         });
//     });
// });

// getting the current tab
// chrome.tabs.getSelected(null, function (tab) {
//     var currentURL = "file:///C:/Users/arun/Desktop/Alexa%20Arun/AlexaDogPictureWithChromeExtension/index.html";
//     console.log(currentURL);
//     // var origin = window.location.origin;
//     // console.log(origin);

//     //finding the no of tabs in this origin
//     chrome.tabs.query({ url: currentURL }, function (tab) {
//         console.log(tab);
//         if (tab == undefined) {
//             console.log("Tab created");
//             chrome.tabs.create({ index: 0, url: "https://developer.chrome.com/extensions/tabs" });
//         }
//         tab.forEach(element => {
//             tabId = element.id;
//             chrome.tabs.update(tabId, { highlighted: true });
//         });
//     });
// });



// getting all the tabs using getAll method

// chrome.windows.getAll({ populate: true }, function (windows) {
//     windows.forEach(function (window) {
//         //  console.log(window);
//         window.tabs.forEach(function (tab) {
//             //collect all of the urls here, I will just log them instead

//             var newURL = 'https://developer.chrome.com/extensions/windows#current-window';
//             var testURL = new URL(newURL);
//             var testDomail = testURL.hostname;
//             var url = new URL(tab.url);
//             var domain = url.hostname;
//             if (domain === testDomail) {
//                 tabId = tab.id;
//                 // chrome.tabs.onDetached.addListener(function (tabId, detachInfo) {
//                 //     console.log(tabId);
//                 //     console.log(tabId);
//                 //     console.log(detachInfo);
//                 // });

//                 // console.log(testDomail);
//                 // console.log(tab);
//                 // chrome.tabs.create({ url: newURL });


//                 chrome.tabs.update(tabId, { url: "http://stackoverflow.com/" }, function (tab) {
//                     console.log("update");
//                 });
//             }
//             else {
//                 chrome.tabs.create({ index: 0, url: newURL });
//             }
//         });
//     });
// });




// chrome.tabs.query({ url: new URL("https://developer.chrome.com/extensions/tabs").href }, function (tab) {
//     console.log(tab);
//     // if (tab == undefined) {
//     //     console.log("Tab created");
//     //     chrome.tabs.create({ index: 0, url: "https://developer.chrome.com/extensions/tabs" });
//     // }
//     // tab.forEach(element => {
//     //     tabId = element.id;
//     //     chrome.tabs.update(tabId, { highlighted: true });

//     // });
// });




// // Check the current tab getting undefind called from a non-tab context
// chrome.tabs.getCurrent(null,function (tab) {
//     console.log(tab.url);
// });




