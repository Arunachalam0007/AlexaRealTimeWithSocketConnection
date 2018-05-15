var oldDogNumber;

function refresh() {
    // if (arguments[0]) {
    //     var newURL = "file:///C:/Users/Premalatha/Desktop/Alexa%20Arun/dogPictureAlexa/index.html";
    //     chrome.tabs.create({ url: newURL });
    // }
    // console.log('Refresh called..!');
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://ayunk5urzl.execute-api.us-east-1.amazonaws.com/prod", true);
    xhttp.send();
    xhttp.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var dogNumber = response.dogPicture;
            //console.log(oldDogNumber);
            if (oldDogNumber != dogNumber) {
                console.log("The Dog image is " + dogNumber);
                oldDogNumber = dogNumber;
                if (oldDogNumber > 0 && oldDogNumber < 5) {
                    var openImage = "http://localhost:1000/page" + oldDogNumber + ".html";
                    chrome.tabs.create({ url: openImage });
                } else {
                    var openImage = "http://localhost:1000//index.html";
                    chrome.tabs.create({ url: openImage });
                }
            }
            setTimeout(refresh.bind(false), 1000);
        }
    }
}
refresh(true);


// chrome.windows.getAll({ populate: true }, function (windows) {
//     windows.forEach(function (window) {
//         console.log(window);
//         window.tabs.forEach(function (tab) {
//             //collect all of the urls here, I will just log them instead
//             //  console.log(tab.orign);
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




