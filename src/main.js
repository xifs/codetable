// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview This file contains the necessary methods to generate the markup for
 * the periodic table with data pulled both from the constants and the external dictionary
 * API snapshot src/codesite_product_dictionary_mmmYY.js
 * @author ernestd@google.com (Ernest Delgado)
 */

(function() {
 //// debug keywords
 // console.log(CODESITE_productDictionary.products.entries);
 var kw = {};
 var lb = {};
 for (productName in CODESITE_productDictionary.products.entries) {
   var product = CODESITE_productDictionary.products.entries[productName];
   for (keyword in product.keywords) {
     kw[keyword] = 1;
   }
   for (var i = 0; i < product.labels.length; i++) {
     lb[product.labels[i]] = 1;
   }
 }
 // console.log(kw);
 // console.log(lb);
 //// end debug


 var GROUPS = {
   android: ['0a'],
   search: ['1a', '2a', '3a', '4a', '5a', '6a'],
   gadgets: ['1b', '2b', '3b', '4b', '5b', '6b'],
   dataapis: [
     '3c', '4c', '5c', '6c',
     '3d', '4d', '5d', '6d',
     '3e', '4e', '5e', '6e',
     '3f', '4f', '5f', '6f',
     '3g', '4g', '5g', '6g'
   ],
   social: [
     '3h', '4h', '5h', '6h',
     '3i', '4i', '5i', '6i'
   ],
   misc: [
     '3j', '4j', '5j', '6j',
     '3k', '4k', '5k', '6k',
     '3l', '4l', '5l', '6l',
     '3m', '4m', '5m', '6m',
     '3n', '4n', '5n', '6n',
     '3o', '4o', '5o', '6o'
   ],
   ads: [
     '2p', '3p', '4p', '5p',
     '3q', '4q', '5q',
     '4r', '5r',
     '5s'
   ],
   geo: [
     '1p',
     '1q', '2q',
     '1r', '2r', '3r',
     '1s', '2s', '3s', '4s'
   ],
   tools: ['1t', '2t', '3t', '4t', '5t'],
   chrome: ['0u', '1u', '2u', '3u', '4u', '5u']
 }
 var CELL_DISTRIBUTION = {
   "0a": "<img src=\"src/android.png\"><p>Android</p>",
   "0u": "<img src=\"src/chromium.png\"><p>Chromium</p>",
   "1a": "<img src=\"src/custom_search.png\"><p>Google Custom Search API</p>",
   "1b": "<img src=\"src/gadgets.png\"><p>Gadgets API</p>",
   "1p": "<img src=\"src/kml.png\"><p>KML</p>",
   "1q": "<img src=\"src/lat.png\"><p>Google Latitude API (Labs)</p>",
   "1r": "<img src=\"src/earth.png\"><p>Google Earth API</p>",
   "1s": "<img src=\"src/glogo.png\"><p>Google Transit Feed Specification</p>",
   "1t": "<img src=\"src/closure.png\"><p>Closure Tools (Labs)</p>",
   "1u": "<img src=\"src/chromium.png\"><p>Google Chrome Frame</p>",
   "2a": "<img src=\"src/glogo.png\" /><p>Image Search API</p>",
   "2b": "<img src=\"src/igoog.png\"><p>iGoogle Developer Home (Labs)</p>",
   "2p": "<img src=\"src/glogo.png\"><p>Google AdWords API</p>",
   "2q": "<img src=\"src/maps.png\" /><p>Google Javascript Maps API</p>",
   "2r": "<img src=\"src/maps.png\"><p>Google Maps API For Flash</p>",
   "2s": "<img src=\"src/maps.png\"><p>Google Maps API Premier</p>",
   "2t": "<img src=\"src/appeng.png\"><p>Google App Engine</p>",
   "2u": "<img src=\"src/chromium.png\"><p>Google Chrome Extensions (Labs)</p>",
   "3a": "<img src=\"src/glogo.png\" /><p>News Search API</p>",
   "3b": "<img src=\"src/glogo.png\"><p>iGoogle Themes API (Labs)</p>",
   "3c": "<img src=\"src/data.png\"><p>Google Data Protocol</p>",
   "3d": "<img src=\"src/analytics.png\"><p>Google Analytics</p>",
   "3e": "<img src=\"src/blogger.png\"><p>Blogger Data API (Labs)</p>",
   "3f": "<img src=\"src/gmail.png\"><p>Gmail APIs and Tools (Labs)</p>",
   "3g": "<img src=\"src/calendar.png\"><p>Google Calendar APIs and Tools</p>",
   "3h": "<img src=\"src/buzz.png\"><p>Google Buzz API (Labs)</p>",
   "3i": "<img src=\"src/glogo.png\"><p>Google Friend Connect APIs (Labs)</p>",
   "3j": "<img src=\"src/glogo.png\"><p>Google Feed API</p>",
   "3k": "<img src=\"src/burner.png\"><p>Feedburner APIs (Labs)</p>",
   "3l": "<img src=\"src/glogo.png\"><p>Google Language API</p>",
   "3m": "<img src=\"src/glogo.png\"><p>Google Translator Toolkit Data API (Labs)</p>",
   "3n": "<img src=\"src/glogo.png\"><p>Google Prediction API (Labs)</p>",
   "3o": "<img src=\"src/glogo.png\"><p>BigQuery (Labs)</p>",
   "3p": "<img src=\"src/glogo.png\"><p>Google AdSense API</p>",
   "3q": "<img src=\"src/glogo.png\"><p>AdSense for Search Ads Only</p>",
   "3r": "<img src=\"src/maps.png\"><p>Google Static Maps API</p>",
   "3s": "<img src=\"src/maps.png\" /><p>Google Geocoding API</p>",
   "3t": "<img src=\"src/gwt.png\"><p>Google Web Toolkit</p>",
   "3u": "<img src=\"src/chromium.png\"><p>Installable Web Apps (Labs)</p>",
   "4a": "<img src=\"src/glogo.png\" /><p>Blog Search API</p>",
   "4b": "<img src=\"src/desktop.png\"><p>Google Desktop APIs (Labs)</p>",
   "4c": "<img src=\"src/contacts.png\"><p>Google Contacts APIs</p>",
   "4d": "<img src=\"src/apps.png\"><p>Google Apps</p>",
   "4e": "<img src=\"src/webmaster.png\"><p>Google Webmaster Tools Data API (Labs)</p>",
   "4f": "<img src=\"src/sidewiki.png\"><p>Google Sidewiki API (Labs)</p>",
   "4g": "<img src=\"src/shopping.png\"><p>Content API for Shopping (Labs)</p>",
   "4h": "<img src=\"src/pubsub.png\"><p>PubSubHubbub (Labs)</p>",
   "4i": "<img src=\"src/orkut.png\"><p>Orkut Developer Home</p>",
   "4j": "<img src=\"src/checkout.png\" /><p>Google Checkout</p>",
   "4k": "<img src=\"src/commerce.png\" /><p>Google Commerce Search</p>",
   "4l": "<img src=\"src/charts.png\"><p>Chart Tools</p>",
   "4m": "<img src=\"src/sketchup.png\"><p>Google SketchUp Ruby API</p>",
   "4n": "<img src=\"src/glogo.png\"><p>Google Storage for Developers (Labs)</p>",
   "4o": "<img src=\"src/glogo.png\"><p>Google Fusion Tables API (Labs)</p>",
   "4p": "<img src=\"src/glogo.png\"><p>AdSense for Ajax</p>",
   "4q": "<img src=\"src/glogo.png\" /><p>AdSense for Mobile Applications (Labs)</p>",
   "4r": "<img src=\"src/glogo.png\" /><p>AdMob</p>",
   "4s": "<img src=\"src/maps.png\" /><p>Google Directions API</p>",
   "4t": "<img src=\"src/eclipse.png\"><p>Google Plugin for Eclipse</p>",
   "4u": "<img src=\"src/store.png\" /><p>Chrome Web Store (Labs)</p>",
   "5a": "<img src=\"src/glogo.png\" /><p>Video Search API</p>",
   "5b": "<img src=\"src/market.png\"><p>Google Apps Marketplace</p>",
   "5c": "<img src=\"src/docs.png\"><p>Google Documents List Data API</p>",
   "5d": "<img src=\"src/xls.png\"><p>Google Spreadsheets Data API (Labs)</p>",
   "5e": "<img src=\"src/finance.png\"><p>Google Finance Data API (Labs)</p>",
   "5f": "<img src=\"src/health.png\"><p>Google Health API</p>",
   "5g": "<img src=\"src/sites.png\"><p>Google Sites Data API (Labs)</p>",
   "5h": "<img src=\"src/glogo.png\"><p>Social Graph API (Labs)</p>",
   "5i": "<img src=\"src/opensocial.png\"><p>OpenSocial</p>",
   "5j": "<img src=\"src/glogo.png\"><p>Google PowerMeter API (Labs)</p>",
   "5k": "<img src=\"src/glogo.png\" /><p>Google Moderator API (Labs)</p>",
   "5l": "<img src=\"src/glogo.png\"><p>Google Safe Browsing APIs (Labs)</p>",
   "5m": "<img src=\"src/mobile.png\" /><p>Mobile Homepage</p>",
   "5n": "<img src=\"src/glogo.png\" /><p>Google Cloud Print (Labs)</p>",
   "5o": "<img src=\"src/tv.png\" /><p>Google TV Optimization Guides</p>",
   "5p": "<img src=\"src/media.png\"><p>Google Interactive Media Ads (Labs)</p>",
   "5q": "<img src=\"src/dclick.png\"><p>Google's DoubleClick for Publishers (Labs)</p>",
   "5r": "<img src=\"src/dclick.png\" /><p>Google's DoubleClick for Advertisers</p>",
   "5s": "<img src=\"src/glogo.png\" /><p>Google Analytics for Mobile (Labs)</p>",
   "5t": "<img src=\"src/glogo.png\"><p>Google Java Developer Tools</p>",
   "5u": "<img src=\"src/glogo.png\"><p>V8</p>",
   "6a": "<img src=\"src/glogo.png\" /><p>Patent Search API</p>",
   "6b": "<img src=\"src/elements.png\"><p>Google Web Elements</p>",
   "6c": "<img src=\"src/picassaweb.png\"><p>Picasa Web Albums Data API</p>",
   "6d": "<img src=\"src/book_search.png\"><p>Google Book Search APIs (Labs)</p>",
   "6e": "<img src=\"src/youtube.png\"><p>YouTube APIs</p>",
   "6f": "<img src=\"src/code_search.png\"><p>Google Code Search Data API (Labs)</p>",
   "6g": "<img src=\"src/connector.png\"><p>Google Secure Data Connector</p>",
   "6h": "<img src=\"src/wave.png\"><p>Google Wave API (Labs)</p>",
   "6i": "<img src=\"src/talk.png\"><p>Google Talk for Developers (Labs)</p>",
   "6j": "<img src=\"src/auth.png\"><p>Google Account Authentication</p>",
   "6k": "<img src=\"src/glogo.png\" /><p>reCAPTCHA (Labs)</p>",
   "6l": "<img src=\"src/glogo.png\" /><p>Google Libraries API</p>",
   "6m": "<img src=\"src/hosting.png\" /><p>Google Project Hosting</p>",
   "6n": "<img src=\"src/script.png\" /><p>Google Apps Script</p>",
   "6o": "<img src=\"src/console.png\" /><p>Google APIs Console</p>"
 };

 var EXTENSIONS = {
   "labels": {
     "gadgets": ["iGoogle Themes API (Labs)", "Google Apps Marketplace", "Google Web Elements"],
     "data apis": ["Gmail APIs and Tools (Labs)", "Content API for Shopping (Labs)",
                   "Google Apps", "Google Sidewiki API (Labs)",
                   "Google Sites Data API (Labs)", "Google Book Search APIs (Labs)",
                   "YouTube APIs", "Google Code Search Data API (Labs)"],
     "tools": ["Closure Tools (Labs)", "Google Plugin for Eclipse", "Google Java Developer Tools"],
     "misc": ["Google Feed API", "Feedburner APIs (Labs)", "Google Language API",
              "Google Translator Toolkit Data API (Labs)", "Google Prediction API (Labs)",
              "BigQuery (Labs)", "Google Commerce Search", "Google Checkout",
              "Chart Tools", "Google SketchUp Ruby API", "Google Storage for Developers (Labs)",
              "Google Fusion Tables API (Labs)", "Google PowerMeter API (Labs)",
              "Google Moderator API (Labs)", "Google Safe Browsing APIs (Labs)",
              "Mobile Homepage", "Google Cloud Print (Labs)", "Google TV Optimization Guides",
              "Google Account Authentication", "reCAPTCHA (Labs)", "Google Libraries API",
              "Google Project Hosting", "Google Apps Script", "Google APIs Console"]
   },
   "urls": {
     "Google APIs Console": "https://code.google.com/apis/console/",
     "Content API for Shopping (Labs)": "http://code.google.com/apis/shopping/content/"
   }
 };

 var TABLE_WIDTH = 21;
 var TABLE_HEIGHT = 7;

 function Cell(cellId) {
   this.row = null;
   this.column = null;
   this.validCell = false;
   this.emptyCell = false;
   this.tdEl = document.createElement('td');
   this.tdEl.id = cellId;
   addClassName(this.tdEl, 'hidden');
 }

 Cell.prototype.renderCell = function(tr) {
   tr.appendChild(this.tdEl);
 };

 Cell.prototype.attachListeners = function() {
   var cell = this.tdEl;

   cell.addEventListener('mouseover', handleCellOver, false);
   cell.addEventListener('click', handleCellClick, false);

 }

 var notes = null;
 window.addEventListener('load', function() {
   var getEl = function(id) { return document.getElementById(id); };
   notes = {
     "android": getEl("horn"),
     "search": getEl("do"),
     "gadgets": getEl("re"),
     "dataapis": getEl("mi"),
     "social": getEl("fa"),
     "misc": getEl("sol"),
     "ads": getEl("la"),
     "geo": getEl("ti"),
     "tools": getEl("do8"),
     "chrome": getEl("crow")
   }
 }, false);

 var egg = [0, 0, 0];
 var easter = false;
 window.addEventListener('keydown', function(e) {
   egg.shift();
   egg.push(e.keyCode);
   if (egg[0] == 69 && egg[1] == 71 && egg[2] == 71) {
     easter = true;
   }
 }, false);

 var lastActionId = ''; // to handle the event bubbling
 function handleCellOver(e) {
   if (!easter) return;
   if (hasClassName(this, 'hidden')) {
     lastActionId = '';
     return;
   }
   if (this.id == lastActionId) {
     return;
   } else {
     lastActionId = this.id;
   }
   var el = notes[this.className.replace(' labs', '').replace('labs ', '')];
   el.currentTime = 0;
   el.play();
 }

 function handleCellClick() {
   var clickedTitle = this.querySelector('p') && this.querySelector('p').textContent;
   if (clickedTitle) {
     for (productName in CODESITE_productDictionary.products.entries) {
       var product = CODESITE_productDictionary.products.entries[productName];
       if (product.title.replace(' (Labs)', '') == clickedTitle) {
         var urlBase = (product.url.indexOf('http')) ? 'http://code.google.com' : '';
         window.open(urlBase + product.url);
       }
     }
     if (EXTENSIONS.urls[clickedTitle]) window.open(EXTENSIONS.urls[clickedTitle]);
     if (EXTENSIONS.urls[clickedTitle+' (Labs)']) {
       window.open(EXTENSIONS.urls[clickedTitle+' (Labs)']);
     }
   }
 }

 function highlight() {
   var kw_h = {};
   var groupKw = this.getAttribute('data-keywords').split(',');
   for (productName in CODESITE_productDictionary.products.entries) {
     var product = CODESITE_productDictionary.products.entries[productName];
     for (keyword in product.keywords) {
       if (groupKw.indexOf(keyword) != -1) kw_h[product.title] = 1;
     }
     for (var i = 0; i < product.labels.length; i++) {
       if (groupKw.indexOf(product.labels[i]) != -1) kw_h[product.title] = 1;
     }
   }

   for (var m = 0; m < groupKw.length; m++) {
     var gkw = groupKw[m];
     if (EXTENSIONS.labels[gkw]) {
       for (var n = 0; n < EXTENSIONS.labels[gkw].length; n++) {
         kw_h[EXTENSIONS.labels[gkw][n]] = 1;
       }
     }
   }

   for (cellId in CELL_DISTRIBUTION) {
     if (cellId != 'labels' && CELL_DISTRIBUTION[cellId].match(/<p>(.*)<\/p>/) &&
         kw_h[CELL_DISTRIBUTION[cellId].match(/<p>(.*)<\/p>/)[1]] == 1) {
           addClassName(document.getElementById(cellId), 'highlight');
     }
   }
 }

 function removeHighlight() {
   var cells = document.querySelectorAll('table td');
   for (var i = 0, len = cells.length; i < len; i++) {
     removeClassName(cells[i], 'highlight');
   }
 }

 window.addEventListener('load', function() {
   function generateTable() {
     var tb = document.querySelector('table');
     var abc = 'abcdefghijklmnopqrstuvwxyz';
     for (var row = 0; row < TABLE_HEIGHT; row++) {
       var tr = document.createElement('tr');
       for (var col = 0; col < TABLE_WIDTH; col++) {
         var cell = new Cell(row.toString() + abc[col]);
         cell.attachListeners();
         cell.renderCell(tr);
       }
       tb.appendChild(tr);
     }
   }

   function generateCellContent() {
     for (var cellId in CELL_DISTRIBUTION) {
       if (cellId != 'legend' && cellId != 'notes') {
         var targetcell = document.getElementById(cellId);
         if (targetcell) {
           removeClassName(targetcell, 'hidden');
           var cellContent = CELL_DISTRIBUTION[cellId].split('#')[0];
           if (cellContent.indexOf('Labs') != -1) {
             cellContent = cellContent.replace(' (Labs)', '');
             addClassName(targetcell, 'labs');
           }
           targetcell.innerHTML = cellContent;
           targetcell.style.backgroundColor = CELL_DISTRIBUTION[cellId].split('#')[1];
         }
       }
     }
   }

   function paintCells() {
     for (var tag in GROUPS) {
       for (var k = 0; k < GROUPS[tag].length; k++) {
         var cell = document.getElementById(GROUPS[tag][k]);
         if (cell) addClassName(cell, tag);
       }
     }
   }

   generateTable();
   generateCellContent();
   paintCells();

   toArray(document.querySelectorAll('#legend-list li')).forEach(function(label) {
     label.addEventListener('mouseover', highlight, true);
     label.addEventListener('mouseout', removeHighlight, true);
   });
 }, false);

 /*
  * Helpers
  */

 function addClassName(el, name) {
   if (!hasClassName(el, name)) {
     el.className = el.className ? [el.className, name].join(' ') : name;
   }
 }

 function removeClassName(el, name) {
   if (hasClassName(el, name)) {
     var c = el.className;
     el.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
   }
 };

 function hasClassName(el, name) {
   return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(el.className);
 }

 var toArray = function(list) {
   return Array.prototype.slice.call(list || [], 0);
 };


 /*
  * all code below is not used now
  * drag and drop was used only in edit mode
  */

 var dragSrc = null;
 var draggingColumn = null;
 var ENABLE_GHOST_COL = false;


 function mouseCoords(ev) {
   if (ev.pageX || ev.pageY) {
     return {x: ev.pageX, y: ev.pageY};
   }
   return {
     x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
     y: ev.clientY + document.body.scrollTop  - document.body.clientTop
   };
 }

 function handleDragStart(e) {
   console.log('handleDragStart')
   e.dataTransfer.effectAllowed = 'move';
   e.dataTransfer.setData('text/html', this.innerHTML);
   dragSrc = this;

   if (ENABLE_GHOST_COL) {
     draggingColumn = dragSrc.cloneNode(true);
     draggingColumn.style.display = 'none';
     document.body.appendChild(draggingColumn);
   }
 }

 function handleDragOver(e) {
   if (e.preventDefault) {
     e.preventDefault(); // Allows us to drop.
   }

   if (ENABLE_GHOST_COL) {
     var mousePos = mouseCoords(e);
     draggingColumn.style.display = 'block';
     draggingColumn.style.position =  'absolute';
     draggingColumn.style.top =  mousePos.y + 5 + 'px';
     draggingColumn.style.left = mousePos.x + 5 + 'px';
   }

   e.dataTransfer.dropEffect = 'move';

   // this.className = 'over';

   return false;
 }

 function handleDragLeave(e) {
   // this.className = '';
 }

 function handleDrop(e) {
   if (e.stopPropagation) {
     e.stopPropagation(); // stops the browser from redirecting.
   }

   // Don't do anything if we're dropping on the same column we're dragging.
   if (dragSrc != this) {
     if (this.className == 'hidden') {
       return;
     }

     if (dragSrc.nodeName == 'P') {
       this.style.backgroundColor = e.dataTransfer.getData('text/plain');
       var colortext = e.dataTransfer.getData('text/plain');
       CELL_DISTRIBUTION[this.id] = CELL_DISTRIBUTION[this.id].split('#')[0].replace(/#/, '');
       CELL_DISTRIBUTION[this.id] += colortext;
       return;
     }

     // swap contents
     var destContent = this.innerHTML;
     this.innerHTML = dragSrc.innerHTML;
     CELL_DISTRIBUTION[this.id] = '' + dragSrc.innerHTML;
     if (dragSrc.nodeName == 'LI') {
       dragSrc.style.opacity = '0.3';
     } else {
       dragSrc.innerHTML = destContent;
       CELL_DISTRIBUTION[dragSrc.id] = '' + destContent;
     }
     // this.innerHTML = e.dataTransfer.getData('text/html');
   }

   return false;
 }

 function handleDragEnd(e) {
   console.log('dragend')
   toArray(document.querySelectorAll('li')).forEach(function (col) {
     this.className = '';
   });

   // dragSrc.style.opacity = '1';

   if (ENABLE_GHOST_COL) {
     document.body.removeChild(draggingColumn);
   }
 }

})();
