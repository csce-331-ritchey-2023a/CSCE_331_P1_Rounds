var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElement.getAttribute("href");
  
    // 1 (c) Determine new stylesheet file name
    var newFileName = "style2.css"
    if(fileName == "style1.css"){
        newFileName = "style2.css";
    }else{
      newFileName = "style1.css"
    }
  
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newFileName);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem('STYLESHEET_KEY', newFileName);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
  
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleSheetValue = localStorage.getItem('STYLESHEET_KEY') || "style1.css";
  
    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");
  
    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", styleSheetValue);  
}