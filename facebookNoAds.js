// Facebook No Ads
// version 0.2
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
		style.innerHTML='#rightCol,#pagelet_ads{width:0 !important;height:0 !important;display:block !important;visibility:hidden !important;float:left;}#contentArea{width:95% !important;} #pagelet_tab_content{width:100%;}.profile_two_columns .right_column{width:75%;} .uiGrid.fbxphotos,.uiUfi,.photo_table,#photos_by_wrapper table,.notes_dashboard .note_content{width:100% !important;}.profile_two_columns #tab_canvas,.notes_dashboard .note_content{width:100%;}.photos_tab .has_extra .photos_tab_header{width:98%;}.notePermalinkMaincol{width:730px !important;}.profile .info_tab .info_section .profile_info dl.info dd {width: 555px !important;}';
	document.getElementsByTagName('head')[0].appendChild(style);
}

window.addEventListener('load',addCss, false);