/*
 *  Copyright (c) 2012 The mraid-web-tester project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree. All contributing project authors may
 *  be found in the AUTHORS file in the root of the source tree.
 */
	
devicesizeWidget = {
	init : function() { 
		$( "#resizable-screensize" ).resizable({stop: function(evt,ui) {devicesizeWidget.updateScreenFromDrag(evt,ui);} });
		
		$( "#resizable-maxAdSize" ).resizable({ containment: "#resizable-screensize", stop: function(evt,ui) {devicesizeWidget.updateMaxFromDrag(evt,ui);} });
		$( "#resizable-maxAdSize" ).draggable({ containment: "parent", stop: function(evt,ui) {devicesizeWidget.updatePositionFromMaxDrag(evt,ui);} });

		$( "#resizable-initialAdSize" ).resizable({ containment: "#resizable-maxAdSize", stop: function(evt,ui) {devicesizeWidget.updateMinFromDrag(evt,ui);}});
		$( "#resizable-initialAdSize" ).draggable({ containment: "parent", stop: function(evt,ui) {devicesizeWidget.updatePositionFromMinDrag(evt,ui);} });
	
		devicesizeWidget.updatePreview();
		
	},
	
	updateScreenFromDrag : function (evt, ui) {
		var width = parseInt($("#resizable-screensize").css("width")),
			height = parseInt($("#resizable-screensize").css("height"));
		$("#screenWidth").val(width);
		$("#screenHeight").val(height);
	},
	
	updateMaxFromDrag : function (evt, ui) {
		var width = parseInt($("#resizable-maxAdSize").css("width")) + 2,
			height = parseInt($("#resizable-maxAdSize").css("height")) + 2;
		$("#adMaxWidth").val(width);
		$("#adMaxHeight").val(height);
	},
	
	updatePositionFromMaxDrag : function (evt, ui) {
		devicesizeWidget.updatePositionFromMinDrag(evt,ui);
		
		var top = parseInt($("#resizable-maxAdSize").css("top")),
			left = parseInt($("#resizable-maxAdSize").css("left"));
		$("#adMaxTop").val(top);
		$("#adMaxLeft").val(left);
	},
	
	updateMinFromDrag : function (evt, ui) {
		var width = parseInt($("#resizable-initialAdSize").css("width")) + 4,
			height = parseInt($("#resizable-initialAdSize").css("height")) + 4;
		$("#adWidth").val(width);
		$("#adHeight").val(height);
	},
	
	updatePositionFromMinDrag : function (evt, ui) {
		var top = parseInt($("#resizable-initialAdSize").css("top")), // + parseInt($("#resizable-maxAdSize").css("top")),
			left = parseInt($("#resizable-initialAdSize").css("left")); // + parseInt($("#resizable-maxAdSize").css("left"));
		$("#adTop").val(top);
		$("#adLeft").val(left);
	},
	
	updatePreview : function () {
		var screenWidth = parseInt($("#screenWidth").val()),
			screenHeight = parseInt($("#screenHeight").val()),
			adMaxWidth = parseInt($("#adMaxWidth").val()),
			adMaxHeight = parseInt($("#adMaxHeight").val()),
			adWidth = parseInt($("#adWidth").val()),
			adHeight = parseInt($("#adHeight").val()),
			adTop = parseInt($("#adTop").val()),
			adLeft = parseInt($("#adLeft").val()),
			adMaxTop = parseInt($("#adMaxTop").val()),
			adMaxLeft = parseInt($("#adMaxLeft").val());
			
		$("#resizable-screensize").css("width", screenWidth);
		$("#resizable-screensize").css("height", screenHeight);
		$("#resizable-maxAdSize").css("width", adMaxWidth - 2);
		$("#resizable-maxAdSize").css("height", adMaxHeight - 2);
		$("#resizable-initialAdSize").css("width", adWidth - 4);
		$("#resizable-initialAdSize").css("height", adHeight - 4);
		$("#resizable-initialAdSize").css("top", adTop);
		$("#resizable-initialAdSize").css("left", adLeft);
		$("#resizable-maxAdSize").css("top", adMaxTop);
		$("#resizable-maxAdSize").css("left", adMaxLeft);
	}

};