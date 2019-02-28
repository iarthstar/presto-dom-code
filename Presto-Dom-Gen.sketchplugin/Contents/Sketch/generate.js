var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/generate.js")}({"./src/generate.js":
/*!*************************!*\
  !*** ./src/generate.js ***!
  \*************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var a=r(/*! sketch */"sketch"),n=r.n(a),o=r(/*! ./parseParams.js */"./src/parseParams.js"),s=r(/*! sketch/ui */"sketch/ui"),c=NSPasteboard.generalPasteboard();t.default=function(){var e=n.a.getSelectedDocument().selectedLayers,t=e.isEmpty?[]:e.layers,r="";t.forEach(function(e){r+=i(e)}),t.length?(c.clearContents(),c.setString_forType(r,"public.utf8-plain-text"),s.message("Presto-Dom node generated and is ready for pasting...")):s.alert("No Selection","Please Select a layer and try again...")};var i=function(e){var t="";switch(t+=o.setFrame(e),t+=o.setAlpha(e),e.type){case"Text":e.fixedWidth=!1,t="textView"+t,t+=o.setText(e),t+=o.setFont(e),t+="\n  , textSize ".concat(e.style.fontSize),t+='\n  , color "#'.concat(e.style.textColor.slice(1,7).toUpperCase(),'"'),t+=o.setKerning(e),t+="\n  ]\n";break;case"Group":t="linearLayout"+t,t+="\n  ][]\n";break;case"Image":t="imageView"+t,t+=o.setImageUrl(e),t+="\n  ]\n";break;case"ShapePath":switch(e.shapeType){case"Rectangle":t="linearLayout"+t,t+=o.setBackground(e),t+=o.setBorder(e),t+=o.setCornerRadius(e),t+="\n  ][]\n"}break;default:t="linearLayout"+t,t+="\n  ][]\n"}return t}},"./src/parseParams.js":
/*!****************************!*\
  !*** ./src/parseParams.js ***!
  \****************************/
/*! no static exports found */function(e,t,r){function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=r(/*! sketch/ui */"sketch/ui");e.exports={setAlpha:function(e){return 1!=e.style.opacity?"\n  , alpha ".concat(e.style.opacity.toPrecision(2)):""},setBackground:function(e){if(!e.style.fills.length)return"";var t=e.style.fills.filter(function(e){return e.enabled}).pop();switch(t.fill){case"Color":return'\n  , background "#'.concat(t.color.slice(7,9).toUpperCase()+t.color.slice(1,7).toUpperCase(),'"')}},setBorder:function(e){if(!e.style.borders.length)return"";var t=e.style.borders.filter(function(e){return e.enabled}).pop();switch(t.fillType){case"Color":return'\n  , stroke "'.concat(t.thickness,",#").concat(t.color.slice(7,9).toUpperCase()+t.color.slice(1,7).toUpperCase(),'"')}},setCornerRadius:function(e){var t=e.points.map(function(e){return e.cornerRadius});return Math.max.apply(Math,a(t))?"\n  , cornerRadius ".concat(parseInt(Math.max.apply(Math,a(t)))):""},setFont:function(e){var t=e.style.fontFamily,r="";if("Roboto"==t)switch(e.style.fontWeight){case 3:r="Light";break;case 5:r="Regular";break;case 6:r="Medium";break;case 9:r="Bold";break;case 11:r="Black";break;default:r="Regular"}else if("SF Pro Display"==t)switch(e.style.fontWeight){case 2:r="UltraLight";break;case 3:r="Light";break;case 5:r="Regular";break;case 6:r="Medium";break;case 8:r="SemiBold";break;case 9:r="Bold";break;case 10:r="Heavy";break;case 11:r="Black";break;default:r="Regular"}else if("Gilroy"==t)switch(e.style.fontWeight){case 2:r="Thin";break;case 3:r="Light";break;case 5:r="Regular";break;case 6:r="Medium";break;case 8:r="SemiBold";break;case 9:r="Bold";break;case 10:r="ExtraBold";break;default:r="Regular"}else switch(e.style.fontWeight){case 2:case 3:r="Light";break;case 5:r="Regular";break;case 6:r="Medium";break;case 8:r="SemiBold";break;case 9:r="Bold";break;case 10:r="Heavy";break;case 11:r="Black";break;default:r="Regular"}return'\n  , fontStyle "'.concat(t.split(" ").join(""),"-").concat(r,'"')},setFrame:function(e){return"\n  [ height $ V ".concat(parseInt(e.frame.height)," \n  , width $ V ").concat(parseInt(e.frame.width))},setGravity:function(e){var t="";switch(e.style.alignment){case"left":return"";case"right":t="RIGHT";break;case"center":t="CENTER";break;default:t="LEFT"}return"\n  , gravity ".concat(t)},setImageUrl:function(e){return n.getInputFromUser("Set ImageUrl",{initialValue:e.name},function(t,a){t||(e.name=a,r(/*! sketch/dom */"sketch/dom").export(e,{scales:"3",output:"~/Desktop/",overwriting:!0}))}),'\n  , imageUrl "'.concat(e.name,'"')},setKerning:function(e){if(null!=e.style.kerning){var t=e.style.kerning.toPrecision(2)>0?e.style.kerning.toPrecision(2):"(".concat(e.style.kerning.toPrecision(2),")");return"\n  , letterSpacing ".concat(t)}return""},setText:function(e){var t="";switch(e.style.textTransform){case"none":t=e.text;break;case"uppercase":t=e.text.toUpperCase();break;case"lowercase":t=e.text.toLowerCase();break;default:t=e.text}return'\n  , text "'.concat(t.replace("\n","\\n"),'"')}}},sketch:
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("sketch")},"sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/dom")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")}});"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default");