// Facebook No Ads
// version 0.1
// 27-11-2010
// Copyright (c) 2010, Kybalion Labs - Kybalion Group
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Access Bar", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name           FaceBook NoAds
// @namespace      facebook
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// ==/UserScript==

function addCss(){
	var style = document.createElement("style");
		style.type = "text/css";
		style.media="all";
		style.innerHTML='#rightCol,#pagelet_ads{visibility:hidden;display:block;width:0;height:0;}#contentArea{width:95% !important;} .uiUfi{width:100%;}.profile_two_columns .right_column{width:75%;} #right_column #tab_canvas{width:100%;}';
	document.getElementsByTagName('head')[0].appendChild(style);
}

window.addEventListener('load',addCss, false);