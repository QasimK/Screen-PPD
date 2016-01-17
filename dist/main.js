/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);


	document.addEventListener('DOMContentLoaded', function initialise(event) {
	  __webpack_require__(30).initialise()
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./foundation.min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./foundation.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "meta.foundation-version{font-family:\"/5.5.1/\"}meta.foundation-mq-small{font-family:\"/only screen/\";width:0}meta.foundation-mq-small-only{font-family:\"/only screen and (max-width: 40em)/\";width:0}meta.foundation-mq-medium{font-family:\"/only screen and (min-width:40.063em)/\";width:40.063em}meta.foundation-mq-medium-only{font-family:\"/only screen and (min-width:40.063em) and (max-width:64em)/\";width:40.063em}meta.foundation-mq-large{font-family:\"/only screen and (min-width:64.063em)/\";width:64.063em}meta.foundation-mq-large-only{font-family:\"/only screen and (min-width:64.063em) and (max-width:90em)/\";width:64.063em}meta.foundation-mq-xlarge{font-family:\"/only screen and (min-width:90.063em)/\";width:90.063em}meta.foundation-mq-xlarge-only{font-family:\"/only screen and (min-width:90.063em) and (max-width:120em)/\";width:90.063em}meta.foundation-mq-xxlarge{font-family:\"/only screen and (min-width:120.063em)/\";width:120.063em}meta.foundation-data-attribute-namespace{font-family:false}html,body{height:100%}*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html,body{font-size:100%}body{background:#fff;color:#222;padding:0;margin:0;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-weight:normal;font-style:normal;line-height:1.5;position:relative;cursor:auto}a:hover{cursor:pointer}img{max-width:100%;height:auto}img{-ms-interpolation-mode:bicubic}#map_canvas img,#map_canvas embed,#map_canvas object,.map_canvas img,.map_canvas embed,.map_canvas object{max-width:none !important}.left{float:left !important}.right{float:right !important}.clearfix:before,.clearfix:after{content:\" \";display:table}.clearfix:after{clear:both}.hide{display:none}.invisible{visibility:hidden}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}img{display:inline-block;vertical-align:middle}textarea{height:auto;min-height:50px}select{width:100%}.row{width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;max-width:62.5rem}.row:before,.row:after{content:\" \";display:table}.row:after{clear:both}.row.collapse>.column,.row.collapse>.columns{padding-left:0;padding-right:0}.row.collapse .row{margin-left:0;margin-right:0}.row .row{width:auto;margin-left:-0.9375rem;margin-right:-0.9375rem;margin-top:0;margin-bottom:0;max-width:none}.row .row:before,.row .row:after{content:\" \";display:table}.row .row:after{clear:both}.row .row.collapse{width:auto;margin:0;max-width:none}.row .row.collapse:before,.row .row.collapse:after{content:\" \";display:table}.row .row.collapse:after{clear:both}.column,.columns{padding-left:0.9375rem;padding-right:0.9375rem;width:100%;float:left}[class*=\"column\"]+[class*=\"column\"]:last-child{float:right}[class*=\"column\"]+[class*=\"column\"].end{float:left}@media only screen{.small-push-0{position:relative;left:0%;right:auto}.small-pull-0{position:relative;right:0%;left:auto}.small-push-1{position:relative;left:8.33333%;right:auto}.small-pull-1{position:relative;right:8.33333%;left:auto}.small-push-2{position:relative;left:16.66667%;right:auto}.small-pull-2{position:relative;right:16.66667%;left:auto}.small-push-3{position:relative;left:25%;right:auto}.small-pull-3{position:relative;right:25%;left:auto}.small-push-4{position:relative;left:33.33333%;right:auto}.small-pull-4{position:relative;right:33.33333%;left:auto}.small-push-5{position:relative;left:41.66667%;right:auto}.small-pull-5{position:relative;right:41.66667%;left:auto}.small-push-6{position:relative;left:50%;right:auto}.small-pull-6{position:relative;right:50%;left:auto}.small-push-7{position:relative;left:58.33333%;right:auto}.small-pull-7{position:relative;right:58.33333%;left:auto}.small-push-8{position:relative;left:66.66667%;right:auto}.small-pull-8{position:relative;right:66.66667%;left:auto}.small-push-9{position:relative;left:75%;right:auto}.small-pull-9{position:relative;right:75%;left:auto}.small-push-10{position:relative;left:83.33333%;right:auto}.small-pull-10{position:relative;right:83.33333%;left:auto}.small-push-11{position:relative;left:91.66667%;right:auto}.small-pull-11{position:relative;right:91.66667%;left:auto}.column,.columns{position:relative;padding-left:0.9375rem;padding-right:0.9375rem;float:left}.small-1{width:8.33333%}.small-2{width:16.66667%}.small-3{width:25%}.small-4{width:33.33333%}.small-5{width:41.66667%}.small-6{width:50%}.small-7{width:58.33333%}.small-8{width:66.66667%}.small-9{width:75%}.small-10{width:83.33333%}.small-11{width:91.66667%}.small-12{width:100%}.small-offset-0{margin-left:0% !important}.small-offset-1{margin-left:8.33333% !important}.small-offset-2{margin-left:16.66667% !important}.small-offset-3{margin-left:25% !important}.small-offset-4{margin-left:33.33333% !important}.small-offset-5{margin-left:41.66667% !important}.small-offset-6{margin-left:50% !important}.small-offset-7{margin-left:58.33333% !important}.small-offset-8{margin-left:66.66667% !important}.small-offset-9{margin-left:75% !important}.small-offset-10{margin-left:83.33333% !important}.small-offset-11{margin-left:91.66667% !important}.small-reset-order{margin-left:0;margin-right:0;left:auto;right:auto;float:left}.column.small-centered,.columns.small-centered{margin-left:auto;margin-right:auto;float:none}.column.small-uncentered,.columns.small-uncentered{margin-left:0;margin-right:0;float:left}.column.small-centered:last-child,.columns.small-centered:last-child{float:none}.column.small-uncentered:last-child,.columns.small-uncentered:last-child{float:left}.column.small-uncentered.opposite,.columns.small-uncentered.opposite{float:right}.row.small-collapse>.column,.row.small-collapse>.columns{padding-left:0;padding-right:0}.row.small-collapse .row{margin-left:0;margin-right:0}.row.small-uncollapse>.column,.row.small-uncollapse>.columns{padding-left:0.9375rem;padding-right:0.9375rem;float:left}}@media only screen and (min-width: 40.063em){.medium-push-0{position:relative;left:0%;right:auto}.medium-pull-0{position:relative;right:0%;left:auto}.medium-push-1{position:relative;left:8.33333%;right:auto}.medium-pull-1{position:relative;right:8.33333%;left:auto}.medium-push-2{position:relative;left:16.66667%;right:auto}.medium-pull-2{position:relative;right:16.66667%;left:auto}.medium-push-3{position:relative;left:25%;right:auto}.medium-pull-3{position:relative;right:25%;left:auto}.medium-push-4{position:relative;left:33.33333%;right:auto}.medium-pull-4{position:relative;right:33.33333%;left:auto}.medium-push-5{position:relative;left:41.66667%;right:auto}.medium-pull-5{position:relative;right:41.66667%;left:auto}.medium-push-6{position:relative;left:50%;right:auto}.medium-pull-6{position:relative;right:50%;left:auto}.medium-push-7{position:relative;left:58.33333%;right:auto}.medium-pull-7{position:relative;right:58.33333%;left:auto}.medium-push-8{position:relative;left:66.66667%;right:auto}.medium-pull-8{position:relative;right:66.66667%;left:auto}.medium-push-9{position:relative;left:75%;right:auto}.medium-pull-9{position:relative;right:75%;left:auto}.medium-push-10{position:relative;left:83.33333%;right:auto}.medium-pull-10{position:relative;right:83.33333%;left:auto}.medium-push-11{position:relative;left:91.66667%;right:auto}.medium-pull-11{position:relative;right:91.66667%;left:auto}.column,.columns{position:relative;padding-left:0.9375rem;padding-right:0.9375rem;float:left}.medium-1{width:8.33333%}.medium-2{width:16.66667%}.medium-3{width:25%}.medium-4{width:33.33333%}.medium-5{width:41.66667%}.medium-6{width:50%}.medium-7{width:58.33333%}.medium-8{width:66.66667%}.medium-9{width:75%}.medium-10{width:83.33333%}.medium-11{width:91.66667%}.medium-12{width:100%}.medium-offset-0{margin-left:0% !important}.medium-offset-1{margin-left:8.33333% !important}.medium-offset-2{margin-left:16.66667% !important}.medium-offset-3{margin-left:25% !important}.medium-offset-4{margin-left:33.33333% !important}.medium-offset-5{margin-left:41.66667% !important}.medium-offset-6{margin-left:50% !important}.medium-offset-7{margin-left:58.33333% !important}.medium-offset-8{margin-left:66.66667% !important}.medium-offset-9{margin-left:75% !important}.medium-offset-10{margin-left:83.33333% !important}.medium-offset-11{margin-left:91.66667% !important}.medium-reset-order{margin-left:0;margin-right:0;left:auto;right:auto;float:left}.column.medium-centered,.columns.medium-centered{margin-left:auto;margin-right:auto;float:none}.column.medium-uncentered,.columns.medium-uncentered{margin-left:0;margin-right:0;float:left}.column.medium-centered:last-child,.columns.medium-centered:last-child{float:none}.column.medium-uncentered:last-child,.columns.medium-uncentered:last-child{float:left}.column.medium-uncentered.opposite,.columns.medium-uncentered.opposite{float:right}.row.medium-collapse>.column,.row.medium-collapse>.columns{padding-left:0;padding-right:0}.row.medium-collapse .row{margin-left:0;margin-right:0}.row.medium-uncollapse>.column,.row.medium-uncollapse>.columns{padding-left:0.9375rem;padding-right:0.9375rem;float:left}.push-0{position:relative;left:0%;right:auto}.pull-0{position:relative;right:0%;left:auto}.push-1{position:relative;left:8.33333%;right:auto}.pull-1{position:relative;right:8.33333%;left:auto}.push-2{position:relative;left:16.66667%;right:auto}.pull-2{position:relative;right:16.66667%;left:auto}.push-3{position:relative;left:25%;right:auto}.pull-3{position:relative;right:25%;left:auto}.push-4{position:relative;left:33.33333%;right:auto}.pull-4{position:relative;right:33.33333%;left:auto}.push-5{position:relative;left:41.66667%;right:auto}.pull-5{position:relative;right:41.66667%;left:auto}.push-6{position:relative;left:50%;right:auto}.pull-6{position:relative;right:50%;left:auto}.push-7{position:relative;left:58.33333%;right:auto}.pull-7{position:relative;right:58.33333%;left:auto}.push-8{position:relative;left:66.66667%;right:auto}.pull-8{position:relative;right:66.66667%;left:auto}.push-9{position:relative;left:75%;right:auto}.pull-9{position:relative;right:75%;left:auto}.push-10{position:relative;left:83.33333%;right:auto}.pull-10{position:relative;right:83.33333%;left:auto}.push-11{position:relative;left:91.66667%;right:auto}.pull-11{position:relative;right:91.66667%;left:auto}}@media only screen and (min-width: 64.063em){.large-push-0{position:relative;left:0%;right:auto}.large-pull-0{position:relative;right:0%;left:auto}.large-push-1{position:relative;left:8.33333%;right:auto}.large-pull-1{position:relative;right:8.33333%;left:auto}.large-push-2{position:relative;left:16.66667%;right:auto}.large-pull-2{position:relative;right:16.66667%;left:auto}.large-push-3{position:relative;left:25%;right:auto}.large-pull-3{position:relative;right:25%;left:auto}.large-push-4{position:relative;left:33.33333%;right:auto}.large-pull-4{position:relative;right:33.33333%;left:auto}.large-push-5{position:relative;left:41.66667%;right:auto}.large-pull-5{position:relative;right:41.66667%;left:auto}.large-push-6{position:relative;left:50%;right:auto}.large-pull-6{position:relative;right:50%;left:auto}.large-push-7{position:relative;left:58.33333%;right:auto}.large-pull-7{position:relative;right:58.33333%;left:auto}.large-push-8{position:relative;left:66.66667%;right:auto}.large-pull-8{position:relative;right:66.66667%;left:auto}.large-push-9{position:relative;left:75%;right:auto}.large-pull-9{position:relative;right:75%;left:auto}.large-push-10{position:relative;left:83.33333%;right:auto}.large-pull-10{position:relative;right:83.33333%;left:auto}.large-push-11{position:relative;left:91.66667%;right:auto}.large-pull-11{position:relative;right:91.66667%;left:auto}.column,.columns{position:relative;padding-left:0.9375rem;padding-right:0.9375rem;float:left}.large-1{width:8.33333%}.large-2{width:16.66667%}.large-3{width:25%}.large-4{width:33.33333%}.large-5{width:41.66667%}.large-6{width:50%}.large-7{width:58.33333%}.large-8{width:66.66667%}.large-9{width:75%}.large-10{width:83.33333%}.large-11{width:91.66667%}.large-12{width:100%}.large-offset-0{margin-left:0% !important}.large-offset-1{margin-left:8.33333% !important}.large-offset-2{margin-left:16.66667% !important}.large-offset-3{margin-left:25% !important}.large-offset-4{margin-left:33.33333% !important}.large-offset-5{margin-left:41.66667% !important}.large-offset-6{margin-left:50% !important}.large-offset-7{margin-left:58.33333% !important}.large-offset-8{margin-left:66.66667% !important}.large-offset-9{margin-left:75% !important}.large-offset-10{margin-left:83.33333% !important}.large-offset-11{margin-left:91.66667% !important}.large-reset-order{margin-left:0;margin-right:0;left:auto;right:auto;float:left}.column.large-centered,.columns.large-centered{margin-left:auto;margin-right:auto;float:none}.column.large-uncentered,.columns.large-uncentered{margin-left:0;margin-right:0;float:left}.column.large-centered:last-child,.columns.large-centered:last-child{float:none}.column.large-uncentered:last-child,.columns.large-uncentered:last-child{float:left}.column.large-uncentered.opposite,.columns.large-uncentered.opposite{float:right}.row.large-collapse>.column,.row.large-collapse>.columns{padding-left:0;padding-right:0}.row.large-collapse .row{margin-left:0;margin-right:0}.row.large-uncollapse>.column,.row.large-uncollapse>.columns{padding-left:0.9375rem;padding-right:0.9375rem;float:left}.push-0{position:relative;left:0%;right:auto}.pull-0{position:relative;right:0%;left:auto}.push-1{position:relative;left:8.33333%;right:auto}.pull-1{position:relative;right:8.33333%;left:auto}.push-2{position:relative;left:16.66667%;right:auto}.pull-2{position:relative;right:16.66667%;left:auto}.push-3{position:relative;left:25%;right:auto}.pull-3{position:relative;right:25%;left:auto}.push-4{position:relative;left:33.33333%;right:auto}.pull-4{position:relative;right:33.33333%;left:auto}.push-5{position:relative;left:41.66667%;right:auto}.pull-5{position:relative;right:41.66667%;left:auto}.push-6{position:relative;left:50%;right:auto}.pull-6{position:relative;right:50%;left:auto}.push-7{position:relative;left:58.33333%;right:auto}.pull-7{position:relative;right:58.33333%;left:auto}.push-8{position:relative;left:66.66667%;right:auto}.pull-8{position:relative;right:66.66667%;left:auto}.push-9{position:relative;left:75%;right:auto}.pull-9{position:relative;right:75%;left:auto}.push-10{position:relative;left:83.33333%;right:auto}.pull-10{position:relative;right:83.33333%;left:auto}.push-11{position:relative;left:91.66667%;right:auto}.pull-11{position:relative;right:91.66667%;left:auto}}button,.button{border-style:solid;border-width:0;cursor:pointer;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-weight:normal;line-height:normal;margin:0 0 1.25rem;position:relative;text-decoration:none;text-align:center;-webkit-appearance:none;-moz-appearance:none;border-radius:0;display:inline-block;padding-top:1rem;padding-right:2rem;padding-bottom:1.0625rem;padding-left:2rem;font-size:1rem;background-color:#008CBA;border-color:#007095;color:#fff;transition:background-color 300ms ease-out}button:hover,button:focus,.button:hover,.button:focus{background-color:#007095}button:hover,button:focus,.button:hover,.button:focus{color:#fff}button.secondary,.button.secondary{background-color:#e7e7e7;border-color:#b9b9b9;color:#333}button.secondary:hover,button.secondary:focus,.button.secondary:hover,.button.secondary:focus{background-color:#b9b9b9}button.secondary:hover,button.secondary:focus,.button.secondary:hover,.button.secondary:focus{color:#333}button.success,.button.success{background-color:#43AC6A;border-color:#368a55;color:#fff}button.success:hover,button.success:focus,.button.success:hover,.button.success:focus{background-color:#368a55}button.success:hover,button.success:focus,.button.success:hover,.button.success:focus{color:#fff}button.alert,.button.alert{background-color:#f04124;border-color:#cf2a0e;color:#fff}button.alert:hover,button.alert:focus,.button.alert:hover,.button.alert:focus{background-color:#cf2a0e}button.alert:hover,button.alert:focus,.button.alert:hover,.button.alert:focus{color:#fff}button.warning,.button.warning{background-color:#f08a24;border-color:#cf6e0e;color:#fff}button.warning:hover,button.warning:focus,.button.warning:hover,.button.warning:focus{background-color:#cf6e0e}button.warning:hover,button.warning:focus,.button.warning:hover,.button.warning:focus{color:#fff}button.info,.button.info{background-color:#a0d3e8;border-color:#61b6d9;color:#333}button.info:hover,button.info:focus,.button.info:hover,.button.info:focus{background-color:#61b6d9}button.info:hover,button.info:focus,.button.info:hover,.button.info:focus{color:#fff}button.large,.button.large{padding-top:1.125rem;padding-right:2.25rem;padding-bottom:1.1875rem;padding-left:2.25rem;font-size:1.25rem}button.small,.button.small{padding-top:0.875rem;padding-right:1.75rem;padding-bottom:0.9375rem;padding-left:1.75rem;font-size:0.8125rem}button.tiny,.button.tiny{padding-top:0.625rem;padding-right:1.25rem;padding-bottom:0.6875rem;padding-left:1.25rem;font-size:0.6875rem}button.expand,.button.expand{padding-right:0;padding-left:0;width:100%}button.left-align,.button.left-align{text-align:left;text-indent:0.75rem}button.right-align,.button.right-align{text-align:right;padding-right:0.75rem}button.radius,.button.radius{border-radius:3px}button.round,.button.round{border-radius:1000px}button.disabled,button[disabled],.button.disabled,.button[disabled]{background-color:#008CBA;border-color:#007095;color:#fff;cursor:default;opacity:0.7;box-shadow:none}button.disabled:hover,button.disabled:focus,button[disabled]:hover,button[disabled]:focus,.button.disabled:hover,.button.disabled:focus,.button[disabled]:hover,.button[disabled]:focus{background-color:#007095}button.disabled:hover,button.disabled:focus,button[disabled]:hover,button[disabled]:focus,.button.disabled:hover,.button.disabled:focus,.button[disabled]:hover,.button[disabled]:focus{color:#fff}button.disabled:hover,button.disabled:focus,button[disabled]:hover,button[disabled]:focus,.button.disabled:hover,.button.disabled:focus,.button[disabled]:hover,.button[disabled]:focus{background-color:#008CBA}button.disabled.secondary,button[disabled].secondary,.button.disabled.secondary,.button[disabled].secondary{background-color:#e7e7e7;border-color:#b9b9b9;color:#333;cursor:default;opacity:0.7;box-shadow:none}button.disabled.secondary:hover,button.disabled.secondary:focus,button[disabled].secondary:hover,button[disabled].secondary:focus,.button.disabled.secondary:hover,.button.disabled.secondary:focus,.button[disabled].secondary:hover,.button[disabled].secondary:focus{background-color:#b9b9b9}button.disabled.secondary:hover,button.disabled.secondary:focus,button[disabled].secondary:hover,button[disabled].secondary:focus,.button.disabled.secondary:hover,.button.disabled.secondary:focus,.button[disabled].secondary:hover,.button[disabled].secondary:focus{color:#333}button.disabled.secondary:hover,button.disabled.secondary:focus,button[disabled].secondary:hover,button[disabled].secondary:focus,.button.disabled.secondary:hover,.button.disabled.secondary:focus,.button[disabled].secondary:hover,.button[disabled].secondary:focus{background-color:#e7e7e7}button.disabled.success,button[disabled].success,.button.disabled.success,.button[disabled].success{background-color:#43AC6A;border-color:#368a55;color:#fff;cursor:default;opacity:0.7;box-shadow:none}button.disabled.success:hover,button.disabled.success:focus,button[disabled].success:hover,button[disabled].success:focus,.button.disabled.success:hover,.button.disabled.success:focus,.button[disabled].success:hover,.button[disabled].success:focus{background-color:#368a55}button.disabled.success:hover,button.disabled.success:focus,button[disabled].success:hover,button[disabled].success:focus,.button.disabled.success:hover,.button.disabled.success:focus,.button[disabled].success:hover,.button[disabled].success:focus{color:#fff}button.disabled.success:hover,button.disabled.success:focus,button[disabled].success:hover,button[disabled].success:focus,.button.disabled.success:hover,.button.disabled.success:focus,.button[disabled].success:hover,.button[disabled].success:focus{background-color:#43AC6A}button.disabled.alert,button[disabled].alert,.button.disabled.alert,.button[disabled].alert{background-color:#f04124;border-color:#cf2a0e;color:#fff;cursor:default;opacity:0.7;box-shadow:none}button.disabled.alert:hover,button.disabled.alert:focus,button[disabled].alert:hover,button[disabled].alert:focus,.button.disabled.alert:hover,.button.disabled.alert:focus,.button[disabled].alert:hover,.button[disabled].alert:focus{background-color:#cf2a0e}button.disabled.alert:hover,button.disabled.alert:focus,button[disabled].alert:hover,button[disabled].alert:focus,.button.disabled.alert:hover,.button.disabled.alert:focus,.button[disabled].alert:hover,.button[disabled].alert:focus{color:#fff}button.disabled.alert:hover,button.disabled.alert:focus,button[disabled].alert:hover,button[disabled].alert:focus,.button.disabled.alert:hover,.button.disabled.alert:focus,.button[disabled].alert:hover,.button[disabled].alert:focus{background-color:#f04124}button.disabled.warning,button[disabled].warning,.button.disabled.warning,.button[disabled].warning{background-color:#f08a24;border-color:#cf6e0e;color:#fff;cursor:default;opacity:0.7;box-shadow:none}button.disabled.warning:hover,button.disabled.warning:focus,button[disabled].warning:hover,button[disabled].warning:focus,.button.disabled.warning:hover,.button.disabled.warning:focus,.button[disabled].warning:hover,.button[disabled].warning:focus{background-color:#cf6e0e}button.disabled.warning:hover,button.disabled.warning:focus,button[disabled].warning:hover,button[disabled].warning:focus,.button.disabled.warning:hover,.button.disabled.warning:focus,.button[disabled].warning:hover,.button[disabled].warning:focus{color:#fff}button.disabled.warning:hover,button.disabled.warning:focus,button[disabled].warning:hover,button[disabled].warning:focus,.button.disabled.warning:hover,.button.disabled.warning:focus,.button[disabled].warning:hover,.button[disabled].warning:focus{background-color:#f08a24}button.disabled.info,button[disabled].info,.button.disabled.info,.button[disabled].info{background-color:#a0d3e8;border-color:#61b6d9;color:#333;cursor:default;opacity:0.7;box-shadow:none}button.disabled.info:hover,button.disabled.info:focus,button[disabled].info:hover,button[disabled].info:focus,.button.disabled.info:hover,.button.disabled.info:focus,.button[disabled].info:hover,.button[disabled].info:focus{background-color:#61b6d9}button.disabled.info:hover,button.disabled.info:focus,button[disabled].info:hover,button[disabled].info:focus,.button.disabled.info:hover,.button.disabled.info:focus,.button[disabled].info:hover,.button[disabled].info:focus{color:#fff}button.disabled.info:hover,button.disabled.info:focus,button[disabled].info:hover,button[disabled].info:focus,.button.disabled.info:hover,.button.disabled.info:focus,.button[disabled].info:hover,.button[disabled].info:focus{background-color:#a0d3e8}button::-moz-focus-inner{border:0;padding:0}@media only screen and (min-width: 40.063em){button,.button{display:inline-block}}form{margin:0 0 1rem}form .row .row{margin:0 -0.5rem}form .row .row .column,form .row .row .columns{padding:0 0.5rem}form .row .row.collapse{margin:0}form .row .row.collapse .column,form .row .row.collapse .columns{padding:0}form .row .row.collapse input{-webkit-border-bottom-right-radius:0;-webkit-border-top-right-radius:0;border-bottom-right-radius:0;border-top-right-radius:0}form .row input.column,form .row input.columns,form .row textarea.column,form .row textarea.columns{padding-left:0.5rem}label{font-size:0.875rem;color:#4d4d4d;cursor:pointer;display:block;font-weight:normal;line-height:1.5;margin-bottom:0}label.right{float:none !important;text-align:right}label.inline{margin:0 0 1rem 0;padding:0.5625rem 0}label small{text-transform:capitalize;color:#676767}.prefix,.postfix{display:block;position:relative;z-index:2;text-align:center;width:100%;padding-top:0;padding-bottom:0;border-style:solid;border-width:1px;overflow:visible;font-size:0.875rem;height:2.3125rem;line-height:2.3125rem}.postfix.button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;text-align:center;border:none}.prefix.button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;text-align:center;border:none}.prefix.button.radius{border-radius:0;-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}.postfix.button.radius{border-radius:0;-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}.prefix.button.round{border-radius:0;-webkit-border-bottom-left-radius:1000px;-webkit-border-top-left-radius:1000px;border-bottom-left-radius:1000px;border-top-left-radius:1000px}.postfix.button.round{border-radius:0;-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}span.prefix,label.prefix{background:#f2f2f2;border-right:none;color:#333;border-color:#ccc}span.postfix,label.postfix{background:#f2f2f2;border-left:none;color:#333;border-color:#ccc}input[type=\"text\"],input[type=\"password\"],input[type=\"date\"],input[type=\"datetime\"],input[type=\"datetime-local\"],input[type=\"month\"],input[type=\"week\"],input[type=\"email\"],input[type=\"number\"],input[type=\"search\"],input[type=\"tel\"],input[type=\"time\"],input[type=\"url\"],input[type=\"color\"],textarea{-webkit-appearance:none;border-radius:0;background-color:#fff;font-family:inherit;border-style:solid;border-width:1px;border-color:#ccc;box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);color:rgba(0,0,0,0.75);display:block;font-size:0.875rem;margin:0 0 1rem 0;padding:0.5rem;height:2.3125rem;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;transition:all 0.15s linear}input[type=\"text\"]:focus,input[type=\"password\"]:focus,input[type=\"date\"]:focus,input[type=\"datetime\"]:focus,input[type=\"datetime-local\"]:focus,input[type=\"month\"]:focus,input[type=\"week\"]:focus,input[type=\"email\"]:focus,input[type=\"number\"]:focus,input[type=\"search\"]:focus,input[type=\"tel\"]:focus,input[type=\"time\"]:focus,input[type=\"url\"]:focus,input[type=\"color\"]:focus,textarea:focus{background:#fafafa;border-color:#999;outline:none}input[type=\"text\"]:disabled,input[type=\"password\"]:disabled,input[type=\"date\"]:disabled,input[type=\"datetime\"]:disabled,input[type=\"datetime-local\"]:disabled,input[type=\"month\"]:disabled,input[type=\"week\"]:disabled,input[type=\"email\"]:disabled,input[type=\"number\"]:disabled,input[type=\"search\"]:disabled,input[type=\"tel\"]:disabled,input[type=\"time\"]:disabled,input[type=\"url\"]:disabled,input[type=\"color\"]:disabled,textarea:disabled{background-color:#ddd;cursor:default}input[type=\"text\"][disabled],input[type=\"text\"][readonly],fieldset[disabled] input[type=\"text\"],input[type=\"password\"][disabled],input[type=\"password\"][readonly],fieldset[disabled] input[type=\"password\"],input[type=\"date\"][disabled],input[type=\"date\"][readonly],fieldset[disabled] input[type=\"date\"],input[type=\"datetime\"][disabled],input[type=\"datetime\"][readonly],fieldset[disabled] input[type=\"datetime\"],input[type=\"datetime-local\"][disabled],input[type=\"datetime-local\"][readonly],fieldset[disabled] input[type=\"datetime-local\"],input[type=\"month\"][disabled],input[type=\"month\"][readonly],fieldset[disabled] input[type=\"month\"],input[type=\"week\"][disabled],input[type=\"week\"][readonly],fieldset[disabled] input[type=\"week\"],input[type=\"email\"][disabled],input[type=\"email\"][readonly],fieldset[disabled] input[type=\"email\"],input[type=\"number\"][disabled],input[type=\"number\"][readonly],fieldset[disabled] input[type=\"number\"],input[type=\"search\"][disabled],input[type=\"search\"][readonly],fieldset[disabled] input[type=\"search\"],input[type=\"tel\"][disabled],input[type=\"tel\"][readonly],fieldset[disabled] input[type=\"tel\"],input[type=\"time\"][disabled],input[type=\"time\"][readonly],fieldset[disabled] input[type=\"time\"],input[type=\"url\"][disabled],input[type=\"url\"][readonly],fieldset[disabled] input[type=\"url\"],input[type=\"color\"][disabled],input[type=\"color\"][readonly],fieldset[disabled] input[type=\"color\"],textarea[disabled],textarea[readonly],fieldset[disabled] textarea{background-color:#ddd;cursor:default}input[type=\"text\"].radius,input[type=\"password\"].radius,input[type=\"date\"].radius,input[type=\"datetime\"].radius,input[type=\"datetime-local\"].radius,input[type=\"month\"].radius,input[type=\"week\"].radius,input[type=\"email\"].radius,input[type=\"number\"].radius,input[type=\"search\"].radius,input[type=\"tel\"].radius,input[type=\"time\"].radius,input[type=\"url\"].radius,input[type=\"color\"].radius,textarea.radius{border-radius:3px}form .row .prefix-radius.row.collapse input,form .row .prefix-radius.row.collapse textarea,form .row .prefix-radius.row.collapse select,form .row .prefix-radius.row.collapse button{border-radius:0;-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}form .row .prefix-radius.row.collapse .prefix{border-radius:0;-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}form .row .postfix-radius.row.collapse input,form .row .postfix-radius.row.collapse textarea,form .row .postfix-radius.row.collapse select,form .row .postfix-radius.row.collapse button{border-radius:0;-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}form .row .postfix-radius.row.collapse .postfix{border-radius:0;-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}form .row .prefix-round.row.collapse input,form .row .prefix-round.row.collapse textarea,form .row .prefix-round.row.collapse select,form .row .prefix-round.row.collapse button{border-radius:0;-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}form .row .prefix-round.row.collapse .prefix{border-radius:0;-webkit-border-bottom-left-radius:1000px;-webkit-border-top-left-radius:1000px;border-bottom-left-radius:1000px;border-top-left-radius:1000px}form .row .postfix-round.row.collapse input,form .row .postfix-round.row.collapse textarea,form .row .postfix-round.row.collapse select,form .row .postfix-round.row.collapse button{border-radius:0;-webkit-border-bottom-left-radius:1000px;-webkit-border-top-left-radius:1000px;border-bottom-left-radius:1000px;border-top-left-radius:1000px}form .row .postfix-round.row.collapse .postfix{border-radius:0;-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}input[type=\"submit\"]{-webkit-appearance:none;border-radius:0}textarea[rows]{height:auto}textarea{max-width:100%}select{-webkit-appearance:none !important;border-radius:0;background-color:#FAFAFA;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+);background-position:100% center;background-repeat:no-repeat;border-style:solid;border-width:1px;border-color:#ccc;padding:0.5rem;font-size:0.875rem;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;color:rgba(0,0,0,0.75);line-height:normal;border-radius:0;height:2.3125rem}select::-ms-expand{display:none}select.radius{border-radius:3px}select:hover{background-color:#f3f3f3;border-color:#999}select:disabled{background-color:#ddd;cursor:default}select[multiple]{height:auto}input[type=\"file\"],input[type=\"checkbox\"],input[type=\"radio\"],select{margin:0 0 1rem 0}input[type=\"checkbox\"]+label,input[type=\"radio\"]+label{display:inline-block;margin-left:0.5rem;margin-right:1rem;margin-bottom:0;vertical-align:baseline}input[type=\"file\"]{width:100%}fieldset{border:1px solid #ddd;padding:1.25rem;margin:1.125rem 0}fieldset legend{font-weight:bold;background:#fff;padding:0 0.1875rem;margin:0;margin-left:-0.1875rem}[data-abide] .error small.error,[data-abide] .error span.error,[data-abide] span.error,[data-abide] small.error{display:block;padding:0.375rem 0.5625rem 0.5625rem;margin-top:-1px;margin-bottom:1rem;font-size:0.75rem;font-weight:normal;font-style:italic;background:#f04124;color:#fff}[data-abide] span.error,[data-abide] small.error{display:none}span.error,small.error{display:block;padding:0.375rem 0.5625rem 0.5625rem;margin-top:-1px;margin-bottom:1rem;font-size:0.75rem;font-weight:normal;font-style:italic;background:#f04124;color:#fff}.error input,.error textarea,.error select{margin-bottom:0}.error input[type=\"checkbox\"],.error input[type=\"radio\"]{margin-bottom:1rem}.error label,.error label.error{color:#f04124}.error small.error{display:block;padding:0.375rem 0.5625rem 0.5625rem;margin-top:-1px;margin-bottom:1rem;font-size:0.75rem;font-weight:normal;font-style:italic;background:#f04124;color:#fff}.error>label>small{color:#676767;background:transparent;padding:0;text-transform:capitalize;font-style:normal;font-size:60%;margin:0;display:inline}.error span.error-message{display:block}input.error,textarea.error,select.error{margin-bottom:0}label.error{color:#f04124}meta.foundation-mq-topbar{font-family:\"/only screen and (min-width:40.063em)/\";width:40.063em}.contain-to-grid{width:100%;background:#333}.contain-to-grid .top-bar{margin-bottom:0}.fixed{width:100%;left:0;position:fixed;top:0;z-index:99}.fixed.expanded:not(.top-bar){overflow-y:auto;height:auto;width:100%;max-height:100%}.fixed.expanded:not(.top-bar) .title-area{position:fixed;width:100%;z-index:99}.fixed.expanded:not(.top-bar) .top-bar-section{z-index:98;margin-top:2.8125rem}.top-bar{overflow:hidden;height:2.8125rem;line-height:2.8125rem;position:relative;background:#333;margin-bottom:0}.top-bar ul{margin-bottom:0;list-style:none}.top-bar .row{max-width:none}.top-bar form,.top-bar input{margin-bottom:0}.top-bar input{height:1.75rem;padding-top:.35rem;padding-bottom:.35rem;font-size:0.75rem}.top-bar .button,.top-bar button{padding-top:0.4125rem;padding-bottom:0.4125rem;margin-bottom:0;font-size:0.75rem}@media only screen and (max-width: 40em){.top-bar .button,.top-bar button{position:relative;top:-1px}}.top-bar .title-area{position:relative;margin:0}.top-bar .name{height:2.8125rem;margin:0;font-size:16px}.top-bar .name h1,.top-bar .name h2,.top-bar .name h3,.top-bar .name h4,.top-bar .name p,.top-bar .name span{line-height:2.8125rem;font-size:1.0625rem;margin:0}.top-bar .name h1 a,.top-bar .name h2 a,.top-bar .name h3 a,.top-bar .name h4 a,.top-bar .name p a,.top-bar .name span a{font-weight:normal;color:#fff;width:75%;display:block;padding:0 0.9375rem}.top-bar .toggle-topbar{position:absolute;right:0;top:0}.top-bar .toggle-topbar a{color:#fff;text-transform:uppercase;font-size:0.8125rem;font-weight:bold;position:relative;display:block;padding:0 0.9375rem;height:2.8125rem;line-height:2.8125rem}.top-bar .toggle-topbar.menu-icon{top:50%;margin-top:-16px}.top-bar .toggle-topbar.menu-icon a{height:34px;line-height:33px;padding:0 2.5rem 0 0.9375rem;color:#fff;position:relative}.top-bar .toggle-topbar.menu-icon a span::after{content:\"\";position:absolute;display:block;height:0;top:50%;margin-top:-8px;right:0.9375rem;box-shadow:0 0 0 1px #fff,0 7px 0 1px #fff,0 14px 0 1px #fff;width:16px}.top-bar .toggle-topbar.menu-icon a span:hover:after{box-shadow:0 0 0 1px \"\",0 7px 0 1px \"\",0 14px 0 1px \"\"}.top-bar.expanded{height:auto;background:transparent}.top-bar.expanded .title-area{background:#333}.top-bar.expanded .toggle-topbar a{color:#888}.top-bar.expanded .toggle-topbar a span::after{box-shadow:0 0 0 1px #888,0 7px 0 1px #888,0 14px 0 1px #888}.top-bar-section{left:0;position:relative;width:auto;transition:left 300ms ease-out}.top-bar-section ul{padding:0;width:100%;height:auto;display:block;font-size:16px;margin:0}.top-bar-section .divider,.top-bar-section [role=\"separator\"]{border-top:solid 1px #1a1a1a;clear:both;height:1px;width:100%}.top-bar-section ul li{background:#333}.top-bar-section ul li>a{display:block;width:100%;color:#fff;padding:12px 0 12px 0;padding-left:0.9375rem;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-size:0.8125rem;font-weight:normal;text-transform:none}.top-bar-section ul li>a.button{font-size:0.8125rem;padding-right:0.9375rem;padding-left:0.9375rem;background-color:#008CBA;border-color:#007095;color:#fff}.top-bar-section ul li>a.button:hover,.top-bar-section ul li>a.button:focus{background-color:#007095}.top-bar-section ul li>a.button:hover,.top-bar-section ul li>a.button:focus{color:#fff}.top-bar-section ul li>a.button.secondary{background-color:#e7e7e7;border-color:#b9b9b9;color:#333}.top-bar-section ul li>a.button.secondary:hover,.top-bar-section ul li>a.button.secondary:focus{background-color:#b9b9b9}.top-bar-section ul li>a.button.secondary:hover,.top-bar-section ul li>a.button.secondary:focus{color:#333}.top-bar-section ul li>a.button.success{background-color:#43AC6A;border-color:#368a55;color:#fff}.top-bar-section ul li>a.button.success:hover,.top-bar-section ul li>a.button.success:focus{background-color:#368a55}.top-bar-section ul li>a.button.success:hover,.top-bar-section ul li>a.button.success:focus{color:#fff}.top-bar-section ul li>a.button.alert{background-color:#f04124;border-color:#cf2a0e;color:#fff}.top-bar-section ul li>a.button.alert:hover,.top-bar-section ul li>a.button.alert:focus{background-color:#cf2a0e}.top-bar-section ul li>a.button.alert:hover,.top-bar-section ul li>a.button.alert:focus{color:#fff}.top-bar-section ul li>a.button.warning{background-color:#f08a24;border-color:#cf6e0e;color:#fff}.top-bar-section ul li>a.button.warning:hover,.top-bar-section ul li>a.button.warning:focus{background-color:#cf6e0e}.top-bar-section ul li>a.button.warning:hover,.top-bar-section ul li>a.button.warning:focus{color:#fff}.top-bar-section ul li>button{font-size:0.8125rem;padding-right:0.9375rem;padding-left:0.9375rem;background-color:#008CBA;border-color:#007095;color:#fff}.top-bar-section ul li>button:hover,.top-bar-section ul li>button:focus{background-color:#007095}.top-bar-section ul li>button:hover,.top-bar-section ul li>button:focus{color:#fff}.top-bar-section ul li>button.secondary{background-color:#e7e7e7;border-color:#b9b9b9;color:#333}.top-bar-section ul li>button.secondary:hover,.top-bar-section ul li>button.secondary:focus{background-color:#b9b9b9}.top-bar-section ul li>button.secondary:hover,.top-bar-section ul li>button.secondary:focus{color:#333}.top-bar-section ul li>button.success{background-color:#43AC6A;border-color:#368a55;color:#fff}.top-bar-section ul li>button.success:hover,.top-bar-section ul li>button.success:focus{background-color:#368a55}.top-bar-section ul li>button.success:hover,.top-bar-section ul li>button.success:focus{color:#fff}.top-bar-section ul li>button.alert{background-color:#f04124;border-color:#cf2a0e;color:#fff}.top-bar-section ul li>button.alert:hover,.top-bar-section ul li>button.alert:focus{background-color:#cf2a0e}.top-bar-section ul li>button.alert:hover,.top-bar-section ul li>button.alert:focus{color:#fff}.top-bar-section ul li>button.warning{background-color:#f08a24;border-color:#cf6e0e;color:#fff}.top-bar-section ul li>button.warning:hover,.top-bar-section ul li>button.warning:focus{background-color:#cf6e0e}.top-bar-section ul li>button.warning:hover,.top-bar-section ul li>button.warning:focus{color:#fff}.top-bar-section ul li:hover:not(.has-form)>a{background-color:#555;background:#333;color:#fff}.top-bar-section ul li.active>a{background:#008CBA;color:#fff}.top-bar-section ul li.active>a:hover{background:#0078a0;color:#fff}.top-bar-section .has-form{padding:0.9375rem}.top-bar-section .has-dropdown{position:relative}.top-bar-section .has-dropdown>a:after{content:\"\";display:block;width:0;height:0;border:inset 5px;border-color:transparent transparent transparent rgba(255,255,255,0.4);border-left-style:solid;margin-right:0.9375rem;margin-top:-4.5px;position:absolute;top:50%;right:0}.top-bar-section .has-dropdown.moved{position:static}.top-bar-section .has-dropdown.moved>.dropdown{display:block;position:static !important;height:auto;width:auto;overflow:visible;clip:auto;position:absolute !important;width:100%}.top-bar-section .has-dropdown.moved>a:after{display:none}.top-bar-section .dropdown{padding:0;position:absolute;left:100%;top:0;z-index:99;display:block;position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}.top-bar-section .dropdown li{width:100%;height:auto}.top-bar-section .dropdown li a{font-weight:normal;padding:8px 0.9375rem}.top-bar-section .dropdown li a.parent-link{font-weight:normal}.top-bar-section .dropdown li.title h5,.top-bar-section .dropdown li.parent-link{margin-bottom:0;margin-top:0;font-size:1.125rem}.top-bar-section .dropdown li.title h5 a,.top-bar-section .dropdown li.parent-link a{color:#fff;display:block}.top-bar-section .dropdown li.title h5 a:hover,.top-bar-section .dropdown li.parent-link a:hover{background:none}.top-bar-section .dropdown li.has-form{padding:8px 0.9375rem}.top-bar-section .dropdown li .button,.top-bar-section .dropdown li button{top:auto}.top-bar-section .dropdown label{padding:8px 0.9375rem 2px;margin-bottom:0;text-transform:uppercase;color:#777;font-weight:bold;font-size:0.625rem}.js-generated{display:block}@media only screen and (min-width: 40.063em){.top-bar{background:#333;overflow:visible}.top-bar:before,.top-bar:after{content:\" \";display:table}.top-bar:after{clear:both}.top-bar .toggle-topbar{display:none}.top-bar .title-area{float:left}.top-bar .name h1 a,.top-bar .name h2 a,.top-bar .name h3 a,.top-bar .name h4 a,.top-bar .name h5 a,.top-bar .name h6 a{width:auto}.top-bar input,.top-bar .button,.top-bar button{font-size:0.875rem;position:relative;height:1.75rem;top:0.53125rem}.top-bar.expanded{background:#333}.contain-to-grid .top-bar{max-width:62.5rem;margin:0 auto;margin-bottom:0}.top-bar-section{transition:none 0 0;left:0 !important}.top-bar-section ul{width:auto;height:auto !important;display:inline}.top-bar-section ul li{float:left}.top-bar-section ul li .js-generated{display:none}.top-bar-section li.hover>a:not(.button){background-color:#555;background:#333;color:#fff}.top-bar-section li:not(.has-form) a:not(.button){padding:0 0.9375rem;line-height:2.8125rem;background:#333}.top-bar-section li:not(.has-form) a:not(.button):hover{background-color:#555;background:#333}.top-bar-section li.active:not(.has-form) a:not(.button){padding:0 0.9375rem;line-height:2.8125rem;color:#fff;background:#008CBA}.top-bar-section li.active:not(.has-form) a:not(.button):hover{background:#0078a0;color:#fff}.top-bar-section .has-dropdown>a{padding-right:2.1875rem !important}.top-bar-section .has-dropdown>a:after{content:\"\";display:block;width:0;height:0;border:inset 5px;border-color:rgba(255,255,255,0.4) transparent transparent transparent;border-top-style:solid;margin-top:-2.5px;top:1.40625rem}.top-bar-section .has-dropdown.moved{position:relative}.top-bar-section .has-dropdown.moved>.dropdown{display:block;position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}.top-bar-section .has-dropdown.hover>.dropdown,.top-bar-section .has-dropdown.not-click:hover>.dropdown{display:block;position:static !important;height:auto;width:auto;overflow:visible;clip:auto;position:absolute !important}.top-bar-section .has-dropdown>a:focus+.dropdown{display:block;position:static !important;height:auto;width:auto;overflow:visible;clip:auto;position:absolute !important}.top-bar-section .has-dropdown .dropdown li.has-dropdown>a:after{border:none;content:\"\\BB\";top:1rem;margin-top:-1px;right:5px;line-height:1.2}.top-bar-section .dropdown{left:0;top:auto;background:transparent;min-width:100%}.top-bar-section .dropdown li a{color:#fff;line-height:2.8125rem;white-space:nowrap;padding:12px 0.9375rem;background:#333}.top-bar-section .dropdown li:not(.has-form):not(.active)>a:not(.button){color:#fff;background:#333}.top-bar-section .dropdown li:not(.has-form):not(.active):hover>a:not(.button){color:#fff;background-color:#555;background:#333}.top-bar-section .dropdown li label{white-space:nowrap;background:#333}.top-bar-section .dropdown li .dropdown{left:100%;top:0}.top-bar-section>ul>.divider,.top-bar-section>ul>[role=\"separator\"]{border-bottom:none;border-top:none;border-right:solid 1px #4e4e4e;clear:none;height:2.8125rem;width:0}.top-bar-section .has-form{background:#333;padding:0 0.9375rem;height:2.8125rem}.top-bar-section .right li .dropdown{left:auto;right:0}.top-bar-section .right li .dropdown li .dropdown{right:100%}.top-bar-section .left li .dropdown{right:auto;left:0}.top-bar-section .left li .dropdown li .dropdown{left:100%}.no-js .top-bar-section ul li:hover>a{background-color:#555;background:#333;color:#fff}.no-js .top-bar-section ul li:active>a{background:#008CBA;color:#fff}.no-js .top-bar-section .has-dropdown:hover>.dropdown{display:block;position:static !important;height:auto;width:auto;overflow:visible;clip:auto;position:absolute !important}.no-js .top-bar-section .has-dropdown>a:focus+.dropdown{display:block;position:static !important;height:auto;width:auto;overflow:visible;clip:auto;position:absolute !important}}.breadcrumbs{display:block;padding:0.5625rem 0.875rem 0.5625rem;overflow:hidden;margin-left:0;list-style:none;border-style:solid;border-width:1px;background-color:#f4f4f4;border-color:#dcdcdc;border-radius:3px}.breadcrumbs>*{margin:0;float:left;font-size:0.6875rem;line-height:0.6875rem;text-transform:uppercase;color:#008CBA}.breadcrumbs>*:hover a,.breadcrumbs>*:focus a{text-decoration:underline}.breadcrumbs>* a{color:#008CBA}.breadcrumbs>*.current{cursor:default;color:#333}.breadcrumbs>*.current a{cursor:default;color:#333}.breadcrumbs>*.current:hover,.breadcrumbs>*.current:hover a,.breadcrumbs>*.current:focus,.breadcrumbs>*.current:focus a{text-decoration:none}.breadcrumbs>*.unavailable{color:#999}.breadcrumbs>*.unavailable a{color:#999}.breadcrumbs>*.unavailable:hover,.breadcrumbs>*.unavailable:hover a,.breadcrumbs>*.unavailable:focus,.breadcrumbs>*.unavailable a:focus{text-decoration:none;color:#999;cursor:not-allowed}.breadcrumbs>*:before{content:\"/\";color:#aaa;margin:0 0.75rem;position:relative;top:1px}.breadcrumbs>*:first-child:before{content:\" \";margin:0}[aria-label=\"breadcrumbs\"] [aria-hidden=\"true\"]:after{content:\"/\"}.alert-box{border-style:solid;border-width:1px;display:block;font-weight:normal;margin-bottom:1.25rem;position:relative;padding:0.875rem 1.5rem 0.875rem 0.875rem;font-size:0.8125rem;transition:opacity 300ms ease-out;background-color:#008CBA;border-color:#0078a0;color:#fff}.alert-box .close{font-size:1.375rem;padding:0 6px 4px;line-height:.9;position:absolute;top:50%;margin-top:-0.6875rem;right:0.25rem;color:#333;opacity:0.3;background:inherit}.alert-box .close:hover,.alert-box .close:focus{opacity:0.5}.alert-box.radius{border-radius:3px}.alert-box.round{border-radius:1000px}.alert-box.success{background-color:#43AC6A;border-color:#3a945b;color:#fff}.alert-box.alert{background-color:#f04124;border-color:#de2d0f;color:#fff}.alert-box.secondary{background-color:#e7e7e7;border-color:#c7c7c7;color:#4f4f4f}.alert-box.warning{background-color:#f08a24;border-color:#de770f;color:#fff}.alert-box.info{background-color:#a0d3e8;border-color:#74bfdd;color:#4f4f4f}.alert-box.alert-close{opacity:0}.inline-list{margin:0 auto 1.0625rem auto;margin-left:-1.375rem;margin-right:0;padding:0;list-style:none;overflow:hidden}.inline-list>li{list-style:none;float:left;margin-left:1.375rem;display:block}.inline-list>li>*{display:block}.button-group{list-style:none;margin:0;left:0}.button-group:before,.button-group:after{content:\" \";display:table}.button-group:after{clear:both}.button-group.even-2 li{margin:0 -2px;display:inline-block;width:50%}.button-group.even-2 li>button,.button-group.even-2 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-2 li:first-child button,.button-group.even-2 li:first-child .button{border-left:0}.button-group.even-2 li button,.button-group.even-2 li .button{width:100%}.button-group.even-3 li{margin:0 -2px;display:inline-block;width:33.33333%}.button-group.even-3 li>button,.button-group.even-3 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-3 li:first-child button,.button-group.even-3 li:first-child .button{border-left:0}.button-group.even-3 li button,.button-group.even-3 li .button{width:100%}.button-group.even-4 li{margin:0 -2px;display:inline-block;width:25%}.button-group.even-4 li>button,.button-group.even-4 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-4 li:first-child button,.button-group.even-4 li:first-child .button{border-left:0}.button-group.even-4 li button,.button-group.even-4 li .button{width:100%}.button-group.even-5 li{margin:0 -2px;display:inline-block;width:20%}.button-group.even-5 li>button,.button-group.even-5 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-5 li:first-child button,.button-group.even-5 li:first-child .button{border-left:0}.button-group.even-5 li button,.button-group.even-5 li .button{width:100%}.button-group.even-6 li{margin:0 -2px;display:inline-block;width:16.66667%}.button-group.even-6 li>button,.button-group.even-6 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-6 li:first-child button,.button-group.even-6 li:first-child .button{border-left:0}.button-group.even-6 li button,.button-group.even-6 li .button{width:100%}.button-group.even-7 li{margin:0 -2px;display:inline-block;width:14.28571%}.button-group.even-7 li>button,.button-group.even-7 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-7 li:first-child button,.button-group.even-7 li:first-child .button{border-left:0}.button-group.even-7 li button,.button-group.even-7 li .button{width:100%}.button-group.even-8 li{margin:0 -2px;display:inline-block;width:12.5%}.button-group.even-8 li>button,.button-group.even-8 li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.even-8 li:first-child button,.button-group.even-8 li:first-child .button{border-left:0}.button-group.even-8 li button,.button-group.even-8 li .button{width:100%}.button-group>li{margin:0 -2px;display:inline-block}.button-group>li>button,.button-group>li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group>li:first-child button,.button-group>li:first-child .button{border-left:0}.button-group.stack>li{margin:0 -2px;display:inline-block;display:block;margin:0;float:none}.button-group.stack>li>button,.button-group.stack>li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.stack>li:first-child button,.button-group.stack>li:first-child .button{border-left:0}.button-group.stack>li>button,.button-group.stack>li .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.stack>li>button{width:100%}.button-group.stack>li:first-child button,.button-group.stack>li:first-child .button{border-top:0}.button-group.stack-for-small>li{margin:0 -2px;display:inline-block}.button-group.stack-for-small>li>button,.button-group.stack-for-small>li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.stack-for-small>li:first-child button,.button-group.stack-for-small>li:first-child .button{border-left:0}@media only screen and (max-width: 40em){.button-group.stack-for-small>li{margin:0 -2px;display:inline-block;display:block;margin:0}.button-group.stack-for-small>li>button,.button-group.stack-for-small>li .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.stack-for-small>li:first-child button,.button-group.stack-for-small>li:first-child .button{border-left:0}.button-group.stack-for-small>li>button,.button-group.stack-for-small>li .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.stack-for-small>li>button{width:100%}.button-group.stack-for-small>li:first-child button,.button-group.stack-for-small>li:first-child .button{border-top:0}}.button-group.radius>*{margin:0 -2px;display:inline-block}.button-group.radius>*>button,.button-group.radius>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.radius>*:first-child button,.button-group.radius>*:first-child .button{border-left:0}.button-group.radius>*,.button-group.radius>*>a,.button-group.radius>*>button,.button-group.radius>*>.button{border-radius:0}.button-group.radius>*:first-child,.button-group.radius>*:first-child>a,.button-group.radius>*:first-child>button,.button-group.radius>*:first-child>.button{-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}.button-group.radius>*:last-child,.button-group.radius>*:last-child>a,.button-group.radius>*:last-child>button,.button-group.radius>*:last-child>.button{-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}.button-group.radius.stack>*{margin:0 -2px;display:inline-block;display:block;margin:0}.button-group.radius.stack>*>button,.button-group.radius.stack>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.radius.stack>*:first-child button,.button-group.radius.stack>*:first-child .button{border-left:0}.button-group.radius.stack>*>button,.button-group.radius.stack>* .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.radius.stack>*>button{width:100%}.button-group.radius.stack>*:first-child button,.button-group.radius.stack>*:first-child .button{border-top:0}.button-group.radius.stack>*,.button-group.radius.stack>*>a,.button-group.radius.stack>*>button,.button-group.radius.stack>*>.button{border-radius:0}.button-group.radius.stack>*:first-child,.button-group.radius.stack>*:first-child>a,.button-group.radius.stack>*:first-child>button,.button-group.radius.stack>*:first-child>.button{-webkit-top-left-radius:3px;-webkit-top-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.button-group.radius.stack>*:last-child,.button-group.radius.stack>*:last-child>a,.button-group.radius.stack>*:last-child>button,.button-group.radius.stack>*:last-child>.button{-webkit-bottom-left-radius:3px;-webkit-bottom-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}@media only screen and (min-width: 40.063em){.button-group.radius.stack-for-small>*{margin:0 -2px;display:inline-block}.button-group.radius.stack-for-small>*>button,.button-group.radius.stack-for-small>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.radius.stack-for-small>*:first-child button,.button-group.radius.stack-for-small>*:first-child .button{border-left:0}.button-group.radius.stack-for-small>*,.button-group.radius.stack-for-small>*>a,.button-group.radius.stack-for-small>*>button,.button-group.radius.stack-for-small>*>.button{border-radius:0}.button-group.radius.stack-for-small>*:first-child,.button-group.radius.stack-for-small>*:first-child>a,.button-group.radius.stack-for-small>*:first-child>button,.button-group.radius.stack-for-small>*:first-child>.button{-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}.button-group.radius.stack-for-small>*:last-child,.button-group.radius.stack-for-small>*:last-child>a,.button-group.radius.stack-for-small>*:last-child>button,.button-group.radius.stack-for-small>*:last-child>.button{-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}}@media only screen and (max-width: 40em){.button-group.radius.stack-for-small>*{margin:0 -2px;display:inline-block;display:block;margin:0}.button-group.radius.stack-for-small>*>button,.button-group.radius.stack-for-small>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.radius.stack-for-small>*:first-child button,.button-group.radius.stack-for-small>*:first-child .button{border-left:0}.button-group.radius.stack-for-small>*>button,.button-group.radius.stack-for-small>* .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.radius.stack-for-small>*>button{width:100%}.button-group.radius.stack-for-small>*:first-child button,.button-group.radius.stack-for-small>*:first-child .button{border-top:0}.button-group.radius.stack-for-small>*,.button-group.radius.stack-for-small>*>a,.button-group.radius.stack-for-small>*>button,.button-group.radius.stack-for-small>*>.button{border-radius:0}.button-group.radius.stack-for-small>*:first-child,.button-group.radius.stack-for-small>*:first-child>a,.button-group.radius.stack-for-small>*:first-child>button,.button-group.radius.stack-for-small>*:first-child>.button{-webkit-top-left-radius:3px;-webkit-top-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px}.button-group.radius.stack-for-small>*:last-child,.button-group.radius.stack-for-small>*:last-child>a,.button-group.radius.stack-for-small>*:last-child>button,.button-group.radius.stack-for-small>*:last-child>.button{-webkit-bottom-left-radius:3px;-webkit-bottom-right-radius:3px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}}.button-group.round>*{margin:0 -2px;display:inline-block}.button-group.round>*>button,.button-group.round>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.round>*:first-child button,.button-group.round>*:first-child .button{border-left:0}.button-group.round>*,.button-group.round>*>a,.button-group.round>*>button,.button-group.round>*>.button{border-radius:0}.button-group.round>*:first-child,.button-group.round>*:first-child>a,.button-group.round>*:first-child>button,.button-group.round>*:first-child>.button{-webkit-border-bottom-left-radius:1000px;-webkit-border-top-left-radius:1000px;border-bottom-left-radius:1000px;border-top-left-radius:1000px}.button-group.round>*:last-child,.button-group.round>*:last-child>a,.button-group.round>*:last-child>button,.button-group.round>*:last-child>.button{-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}.button-group.round.stack>*{margin:0 -2px;display:inline-block;display:block;margin:0}.button-group.round.stack>*>button,.button-group.round.stack>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.round.stack>*:first-child button,.button-group.round.stack>*:first-child .button{border-left:0}.button-group.round.stack>*>button,.button-group.round.stack>* .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.round.stack>*>button{width:100%}.button-group.round.stack>*:first-child button,.button-group.round.stack>*:first-child .button{border-top:0}.button-group.round.stack>*,.button-group.round.stack>*>a,.button-group.round.stack>*>button,.button-group.round.stack>*>.button{border-radius:0}.button-group.round.stack>*:first-child,.button-group.round.stack>*:first-child>a,.button-group.round.stack>*:first-child>button,.button-group.round.stack>*:first-child>.button{-webkit-top-left-radius:1rem;-webkit-top-right-radius:1rem;border-top-left-radius:1rem;border-top-right-radius:1rem}.button-group.round.stack>*:last-child,.button-group.round.stack>*:last-child>a,.button-group.round.stack>*:last-child>button,.button-group.round.stack>*:last-child>.button{-webkit-bottom-left-radius:1rem;-webkit-bottom-right-radius:1rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}@media only screen and (min-width: 40.063em){.button-group.round.stack-for-small>*{margin:0 -2px;display:inline-block}.button-group.round.stack-for-small>*>button,.button-group.round.stack-for-small>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.round.stack-for-small>*:first-child button,.button-group.round.stack-for-small>*:first-child .button{border-left:0}.button-group.round.stack-for-small>*,.button-group.round.stack-for-small>*>a,.button-group.round.stack-for-small>*>button,.button-group.round.stack-for-small>*>.button{border-radius:0}.button-group.round.stack-for-small>*:first-child,.button-group.round.stack-for-small>*:first-child>a,.button-group.round.stack-for-small>*:first-child>button,.button-group.round.stack-for-small>*:first-child>.button{-webkit-border-bottom-left-radius:1000px;-webkit-border-top-left-radius:1000px;border-bottom-left-radius:1000px;border-top-left-radius:1000px}.button-group.round.stack-for-small>*:last-child,.button-group.round.stack-for-small>*:last-child>a,.button-group.round.stack-for-small>*:last-child>button,.button-group.round.stack-for-small>*:last-child>.button{-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}}@media only screen and (max-width: 40em){.button-group.round.stack-for-small>*{margin:0 -2px;display:inline-block;display:block;margin:0}.button-group.round.stack-for-small>*>button,.button-group.round.stack-for-small>* .button{border-left:1px solid;border-color:rgba(255,255,255,0.5)}.button-group.round.stack-for-small>*:first-child button,.button-group.round.stack-for-small>*:first-child .button{border-left:0}.button-group.round.stack-for-small>*>button,.button-group.round.stack-for-small>* .button{border-top:1px solid;border-color:rgba(255,255,255,0.5);border-left-width:0;margin:0;display:block}.button-group.round.stack-for-small>*>button{width:100%}.button-group.round.stack-for-small>*:first-child button,.button-group.round.stack-for-small>*:first-child .button{border-top:0}.button-group.round.stack-for-small>*,.button-group.round.stack-for-small>*>a,.button-group.round.stack-for-small>*>button,.button-group.round.stack-for-small>*>.button{border-radius:0}.button-group.round.stack-for-small>*:first-child,.button-group.round.stack-for-small>*:first-child>a,.button-group.round.stack-for-small>*:first-child>button,.button-group.round.stack-for-small>*:first-child>.button{-webkit-top-left-radius:1rem;-webkit-top-right-radius:1rem;border-top-left-radius:1rem;border-top-right-radius:1rem}.button-group.round.stack-for-small>*:last-child,.button-group.round.stack-for-small>*:last-child>a,.button-group.round.stack-for-small>*:last-child>button,.button-group.round.stack-for-small>*:last-child>.button{-webkit-bottom-left-radius:1rem;-webkit-bottom-right-radius:1rem;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}}.button-bar:before,.button-bar:after{content:\" \";display:table}.button-bar:after{clear:both}.button-bar .button-group{float:left;margin-right:0.625rem}.button-bar .button-group div{overflow:hidden}.panel{border-style:solid;border-width:1px;border-color:#d8d8d8;margin-bottom:1.25rem;padding:1.25rem;background:#f2f2f2;color:#333}.panel>:first-child{margin-top:0}.panel>:last-child{margin-bottom:0}.panel h1,.panel h2,.panel h3,.panel h4,.panel h5,.panel h6,.panel p,.panel li,.panel dl{color:#333}.panel h1,.panel h2,.panel h3,.panel h4,.panel h5,.panel h6{line-height:1;margin-bottom:0.625rem}.panel h1.subheader,.panel h2.subheader,.panel h3.subheader,.panel h4.subheader,.panel h5.subheader,.panel h6.subheader{line-height:1.4}.panel.callout{border-style:solid;border-width:1px;border-color:#b6edff;margin-bottom:1.25rem;padding:1.25rem;background:#ecfaff;color:#333}.panel.callout>:first-child{margin-top:0}.panel.callout>:last-child{margin-bottom:0}.panel.callout h1,.panel.callout h2,.panel.callout h3,.panel.callout h4,.panel.callout h5,.panel.callout h6,.panel.callout p,.panel.callout li,.panel.callout dl{color:#333}.panel.callout h1,.panel.callout h2,.panel.callout h3,.panel.callout h4,.panel.callout h5,.panel.callout h6{line-height:1;margin-bottom:0.625rem}.panel.callout h1.subheader,.panel.callout h2.subheader,.panel.callout h3.subheader,.panel.callout h4.subheader,.panel.callout h5.subheader,.panel.callout h6.subheader{line-height:1.4}.panel.callout a:not(.button){color:#008CBA}.panel.callout a:not(.button):hover,.panel.callout a:not(.button):focus{color:#0078a0}.panel.radius{border-radius:3px}.dropdown.button,button.dropdown{position:relative;outline:none;padding-right:3.5625rem}.dropdown.button::after,button.dropdown::after{position:absolute;content:\"\";width:0;height:0;display:block;border-style:solid;border-color:#fff transparent transparent transparent;top:50%}.dropdown.button::after,button.dropdown::after{border-width:0.375rem;right:1.40625rem;margin-top:-0.15625rem}.dropdown.button::after,button.dropdown::after{border-color:#fff transparent transparent transparent}.dropdown.button.tiny,button.dropdown.tiny{padding-right:2.625rem}.dropdown.button.tiny:after,button.dropdown.tiny:after{border-width:0.375rem;right:1.125rem;margin-top:-0.125rem}.dropdown.button.tiny::after,button.dropdown.tiny::after{border-color:#fff transparent transparent transparent}.dropdown.button.small,button.dropdown.small{padding-right:3.0625rem}.dropdown.button.small::after,button.dropdown.small::after{border-width:0.4375rem;right:1.3125rem;margin-top:-0.15625rem}.dropdown.button.small::after,button.dropdown.small::after{border-color:#fff transparent transparent transparent}.dropdown.button.large,button.dropdown.large{padding-right:3.625rem}.dropdown.button.large::after,button.dropdown.large::after{border-width:0.3125rem;right:1.71875rem;margin-top:-0.15625rem}.dropdown.button.large::after,button.dropdown.large::after{border-color:#fff transparent transparent transparent}.dropdown.button.secondary:after,button.dropdown.secondary:after{border-color:#333 transparent transparent transparent}.th{line-height:0;display:inline-block;border:solid 4px #fff;max-width:100%;box-shadow:0 0 0 1px rgba(0,0,0,0.2);transition:all 200ms ease-out}.th:hover,.th:focus{box-shadow:0 0 6px 1px rgba(0,140,186,0.5)}.th.radius{border-radius:3px}.toolbar{background:#333;width:100%;font-size:0;display:inline-block}.toolbar.label-bottom .tab .tab-content i,.toolbar.label-bottom .tab .tab-content img{margin-bottom:10px}.toolbar.label-right .tab .tab-content i,.toolbar.label-right .tab .tab-content img{margin-right:10px;display:inline-block}.toolbar.label-right .tab .tab-content label{display:inline-block}.toolbar.vertical.label-right .tab .tab-content{text-align:left}.toolbar.vertical{height:100%;width:auto}.toolbar.vertical .tab{width:auto;margin:auto;float:none}.toolbar .tab{text-align:center;width:25%;margin:0 auto;display:block;padding:20px;float:left}.toolbar .tab:hover{background:rgba(255,255,255,0.1)}.toolbar .tab-content{font-size:16px;text-align:center}.toolbar .tab-content label{color:#ccc}.toolbar .tab-content i{font-size:30px;display:block;margin:0 auto;color:#ccc;vertical-align:middle}.toolbar .tab-content img{width:30px;height:30px;display:block;margin:0 auto}.pricing-table{border:solid 1px #ddd;margin-left:0;margin-bottom:1.25rem}.pricing-table *{list-style:none;line-height:1}.pricing-table .title{background-color:#333;padding:0.9375rem 1.25rem;text-align:center;color:#eee;font-weight:normal;font-size:1rem;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif}.pricing-table .price{background-color:#F6F6F6;padding:0.9375rem 1.25rem;text-align:center;color:#333;font-weight:normal;font-size:2rem;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif}.pricing-table .description{background-color:#fff;padding:0.9375rem;text-align:center;color:#777;font-size:0.75rem;font-weight:normal;line-height:1.4;border-bottom:dotted 1px #ddd}.pricing-table .bullet-item{background-color:#fff;padding:0.9375rem;text-align:center;color:#333;font-size:0.875rem;font-weight:normal;border-bottom:dotted 1px #ddd}.pricing-table .cta-button{background-color:#fff;text-align:center;padding:1.25rem 1.25rem 0}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@-moz-keyframes rotate{from{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(360deg)}}@-o-keyframes rotate{from{-o-transform:rotate(0deg)}to{-o-transform:rotate(360deg)}}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.slideshow-wrapper{position:relative}.slideshow-wrapper ul{list-style-type:none;margin:0}.slideshow-wrapper ul li,.slideshow-wrapper ul li .orbit-caption{display:none}.slideshow-wrapper ul li:first-child{display:block}.slideshow-wrapper .orbit-container{background-color:transparent}.slideshow-wrapper .orbit-container li{display:block}.slideshow-wrapper .orbit-container li .orbit-caption{display:block}.slideshow-wrapper .orbit-container .orbit-bullets li{display:inline-block}.slideshow-wrapper .preloader{display:block;width:40px;height:40px;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px;border:solid 3px;border-color:#555 #fff;border-radius:1000px;animation-name:rotate;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}.orbit-container{overflow:hidden;width:100%;position:relative;background:none}.orbit-container .orbit-slides-container{list-style:none;margin:0;padding:0;position:relative;-webkit-transform:translateZ(0)}.orbit-container .orbit-slides-container img{display:block;max-width:100%}.orbit-container .orbit-slides-container>*{position:absolute;top:0;width:100%;margin-left:100%}.orbit-container .orbit-slides-container>*:first-child{margin-left:0}.orbit-container .orbit-slides-container>* .orbit-caption{position:absolute;bottom:0;background-color:rgba(51,51,51,0.8);color:#fff;width:100%;padding:0.625rem 0.875rem;font-size:0.875rem}.orbit-container .orbit-slide-number{position:absolute;top:10px;left:10px;font-size:12px;color:#fff;background:transparent;z-index:10}.orbit-container .orbit-slide-number span{font-weight:700;padding:0.3125rem}.orbit-container .orbit-timer{position:absolute;top:12px;right:10px;height:6px;width:100px;z-index:10}.orbit-container .orbit-timer .orbit-progress{height:3px;background-color:rgba(255,255,255,0.3);display:block;width:0;position:relative;right:20px;top:5px}.orbit-container .orbit-timer>span{display:none;position:absolute;top:0;right:0;width:11px;height:14px;border:solid 4px #fff;border-top:none;border-bottom:none}.orbit-container .orbit-timer.paused>span{right:-4px;top:0;width:11px;height:14px;border:inset 8px;border-left-style:solid;border-color:transparent;border-left-color:#fff}.orbit-container .orbit-timer.paused>span.dark{border-left-color:#333}.orbit-container:hover .orbit-timer>span{display:block}.orbit-container .orbit-prev,.orbit-container .orbit-next{position:absolute;top:45%;margin-top:-25px;width:36px;height:60px;line-height:50px;color:white;background-color:transparent;text-indent:-9999px !important;z-index:10}.orbit-container .orbit-prev:hover,.orbit-container .orbit-next:hover{background-color:rgba(0,0,0,0.3)}.orbit-container .orbit-prev>span,.orbit-container .orbit-next>span{position:absolute;top:50%;margin-top:-10px;display:block;width:0;height:0;border:inset 10px}.orbit-container .orbit-prev{left:0}.orbit-container .orbit-prev>span{border-right-style:solid;border-color:transparent;border-right-color:#fff}.orbit-container .orbit-prev:hover>span{border-right-color:#fff}.orbit-container .orbit-next{right:0}.orbit-container .orbit-next>span{border-color:transparent;border-left-style:solid;border-left-color:#fff;left:50%;margin-left:-4px}.orbit-container .orbit-next:hover>span{border-left-color:#fff}.orbit-bullets-container{text-align:center}.orbit-bullets{margin:0 auto 30px auto;overflow:hidden;position:relative;top:10px;float:none;text-align:center;display:block}.orbit-bullets li{cursor:pointer;display:inline-block;width:0.5625rem;height:0.5625rem;background:#ccc;float:none;margin-right:6px;border-radius:1000px}.orbit-bullets li.active{background:#999}.orbit-bullets li:last-child{margin-right:0}.touch .orbit-container .orbit-prev,.touch .orbit-container .orbit-next{display:none}.touch .orbit-bullets{display:none}@media only screen and (min-width: 40.063em){.touch .orbit-container .orbit-prev,.touch .orbit-container .orbit-next{display:inherit}.touch .orbit-bullets{display:block}}@media only screen and (max-width: 40em){.orbit-stack-on-small .orbit-slides-container{height:auto !important}.orbit-stack-on-small .orbit-slides-container>*{position:relative;margin:0 !important;opacity:1 !important}.orbit-stack-on-small .orbit-slide-number{display:none}.orbit-timer{display:none}.orbit-next,.orbit-prev{display:none}.orbit-bullets{display:none}}[data-magellan-expedition],[data-magellan-expedition-clone]{background:#fff;z-index:50;min-width:100%;padding:10px}[data-magellan-expedition] .sub-nav,[data-magellan-expedition-clone] .sub-nav{margin-bottom:0}[data-magellan-expedition] .sub-nav dd,[data-magellan-expedition-clone] .sub-nav dd{margin-bottom:0}[data-magellan-expedition] .sub-nav a,[data-magellan-expedition-clone] .sub-nav a{line-height:1.8em}.icon-bar{width:100%;font-size:0;display:inline-block;background:#333}.icon-bar>*{text-align:center;font-size:1rem;width:25%;margin:0 auto;display:block;padding:1.25rem;float:left}.icon-bar>* i,.icon-bar>* img{display:block;margin:0 auto}.icon-bar>* i+label,.icon-bar>* img+label{margin-top:.0625rem}.icon-bar>* i{font-size:1.875rem;vertical-align:middle}.icon-bar>* img{width:1.875rem;height:1.875rem}.icon-bar.label-right>* i,.icon-bar.label-right>* img{margin:0 .0625rem 0 0;display:inline-block}.icon-bar.label-right>* i+label,.icon-bar.label-right>* img+label{margin-top:0}.icon-bar.label-right>* label{display:inline-block}.icon-bar.vertical.label-right>*{text-align:left}.icon-bar.vertical,.icon-bar.small-vertical{height:100%;width:auto}.icon-bar.vertical .item,.icon-bar.small-vertical .item{width:auto;margin:auto;float:none}@media only screen and (min-width: 40.063em){.icon-bar.medium-vertical{height:100%;width:auto}.icon-bar.medium-vertical .item{width:auto;margin:auto;float:none}}@media only screen and (min-width: 64.063em){.icon-bar.large-vertical{height:100%;width:auto}.icon-bar.large-vertical .item{width:auto;margin:auto;float:none}}.icon-bar>*{font-size:1rem;padding:1.25rem}.icon-bar>* i+label,.icon-bar>* img+label{margin-top:.0625rem}.icon-bar>* i{font-size:1.875rem}.icon-bar>* img{width:1.875rem;height:1.875rem}.icon-bar>* label{color:#fff}.icon-bar>* i{color:#fff}.icon-bar>a:hover{background:#008CBA}.icon-bar>a:hover label{color:#fff}.icon-bar>a:hover i{color:#fff}.icon-bar>a.active{background:#008CBA}.icon-bar>a.active label{color:#fff}.icon-bar>a.active i{color:#fff}.icon-bar .item.disabled{opacity:0.7;cursor:not-allowed;pointer-events:none}.icon-bar .item.disabled>*{opacity:0.7;cursor:not-allowed}.icon-bar.two-up .item{width:50%}.icon-bar.two-up.vertical .item,.icon-bar.two-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.two-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.two-up.large-vertical .item{width:auto}}.icon-bar.three-up .item{width:33.3333%}.icon-bar.three-up.vertical .item,.icon-bar.three-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.three-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.three-up.large-vertical .item{width:auto}}.icon-bar.four-up .item{width:25%}.icon-bar.four-up.vertical .item,.icon-bar.four-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.four-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.four-up.large-vertical .item{width:auto}}.icon-bar.five-up .item{width:20%}.icon-bar.five-up.vertical .item,.icon-bar.five-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.five-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.five-up.large-vertical .item{width:auto}}.icon-bar.six-up .item{width:16.66667%}.icon-bar.six-up.vertical .item,.icon-bar.six-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.six-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.six-up.large-vertical .item{width:auto}}.icon-bar.seven-up .item{width:14.28571%}.icon-bar.seven-up.vertical .item,.icon-bar.seven-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.seven-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.seven-up.large-vertical .item{width:auto}}.icon-bar.eight-up .item{width:12.5%}.icon-bar.eight-up.vertical .item,.icon-bar.eight-up.small-vertical .item{width:auto}@media only screen and (min-width: 40.063em){.icon-bar.eight-up.medium-vertical .item{width:auto}}@media only screen and (min-width: 64.063em){.icon-bar.eight-up.large-vertical .item{width:auto}}.tabs{margin-bottom:0 !important;margin-left:0}.tabs:before,.tabs:after{content:\" \";display:table}.tabs:after{clear:both}.tabs dd,.tabs .tab-title{position:relative;margin-bottom:0 !important;list-style:none;float:left}.tabs dd>a,.tabs .tab-title>a{display:block;background-color:#EFEFEF;color:#222;padding:1rem 2rem;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-size:1rem}.tabs dd>a:hover,.tabs .tab-title>a:hover{background-color:#e1e1e1}.tabs dd>a:focus,.tabs .tab-title>a:focus{outline:none}.tabs dd.active a,.tabs .tab-title.active a{background-color:#fff;color:#222}.tabs.radius dd:first-child a,.tabs.radius .tab:first-child a{-webkit-border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px}.tabs.radius dd:last-child a,.tabs.radius .tab:last-child a{-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}.tabs.vertical dd,.tabs.vertical .tab-title{position:inherit;float:none;display:block;top:auto}.tabs-content{margin-bottom:1.5rem;width:100%}.tabs-content:before,.tabs-content:after{content:\" \";display:table}.tabs-content:after{clear:both}.tabs-content>.content{display:none;float:left;padding:0.9375rem 0;width:100%}.tabs-content>.content.active{display:block;float:none}.tabs-content>.content.contained{padding:0.9375rem}.tabs-content.vertical{display:block}.tabs-content.vertical>.content{padding:0 0.9375rem}@media only screen and (min-width: 40.063em){.tabs.vertical{width:20%;max-width:20%;float:left;margin:0 0 1.25rem}.tabs-content.vertical{width:80%;max-width:80%;float:left;margin-left:-1px;padding-left:1rem}}.no-js .tabs-content>.content{display:block;float:none}ul.pagination{display:block;min-height:1.5rem;margin-left:-0.3125rem}ul.pagination li{height:1.5rem;color:#222;font-size:0.875rem;margin-left:0.3125rem}ul.pagination li a,ul.pagination li button{display:block;padding:0.0625rem 0.625rem 0.0625rem;color:#999;background:none;border-radius:3px;font-weight:normal;font-size:1em;line-height:inherit;transition:background-color 300ms ease-out}ul.pagination li:hover a,ul.pagination li a:focus,ul.pagination li:hover button,ul.pagination li button:focus{background:#e6e6e6}ul.pagination li.unavailable a,ul.pagination li.unavailable button{cursor:default;color:#999}ul.pagination li.unavailable:hover a,ul.pagination li.unavailable a:focus,ul.pagination li.unavailable:hover button,ul.pagination li.unavailable button:focus{background:transparent}ul.pagination li.current a,ul.pagination li.current button{background:#008CBA;color:#fff;font-weight:bold;cursor:default}ul.pagination li.current a:hover,ul.pagination li.current a:focus,ul.pagination li.current button:hover,ul.pagination li.current button:focus{background:#008CBA}ul.pagination li{float:left;display:block}.pagination-centered{text-align:center}.pagination-centered ul.pagination li{float:none;display:inline-block}.side-nav{display:block;margin:0;padding:0.875rem 0;list-style-type:none;list-style-position:outside;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif}.side-nav li{margin:0 0 0.4375rem 0;font-size:0.875rem;font-weight:normal}.side-nav li a:not(.button){display:block;color:#008CBA;margin:0;padding:0.4375rem 0.875rem}.side-nav li a:not(.button):hover,.side-nav li a:not(.button):focus{background:rgba(0,0,0,0.025);color:#1cc7ff}.side-nav li.active>a:first-child:not(.button){color:#1cc7ff;font-weight:normal;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif}.side-nav li.divider{border-top:1px solid;height:0;padding:0;list-style:none;border-top-color:#fff}.side-nav li.heading{color:#008CBA;font-size:0.875rem;font-weight:bold;text-transform:uppercase}.accordion{margin-bottom:0}.accordion:before,.accordion:after{content:\" \";display:table}.accordion:after{clear:both}.accordion .accordion-navigation,.accordion dd{display:block;margin-bottom:0 !important}.accordion .accordion-navigation.active>a,.accordion dd.active>a{background:#e8e8e8}.accordion .accordion-navigation>a,.accordion dd>a{background:#EFEFEF;color:#222;padding:1rem;display:block;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-size:1rem}.accordion .accordion-navigation>a:hover,.accordion dd>a:hover{background:#e3e3e3}.accordion .accordion-navigation>.content,.accordion dd>.content{display:none;padding:0.9375rem}.accordion .accordion-navigation>.content.active,.accordion dd>.content.active{display:block;background:#fff}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}.text-justify{text-align:justify !important}@media only screen and (max-width: 40em){.small-only-text-left{text-align:left !important}.small-only-text-right{text-align:right !important}.small-only-text-center{text-align:center !important}.small-only-text-justify{text-align:justify !important}}@media only screen{.small-text-left{text-align:left !important}.small-text-right{text-align:right !important}.small-text-center{text-align:center !important}.small-text-justify{text-align:justify !important}}@media only screen and (min-width: 40.063em) and (max-width: 64em){.medium-only-text-left{text-align:left !important}.medium-only-text-right{text-align:right !important}.medium-only-text-center{text-align:center !important}.medium-only-text-justify{text-align:justify !important}}@media only screen and (min-width: 40.063em){.medium-text-left{text-align:left !important}.medium-text-right{text-align:right !important}.medium-text-center{text-align:center !important}.medium-text-justify{text-align:justify !important}}@media only screen and (min-width: 64.063em) and (max-width: 90em){.large-only-text-left{text-align:left !important}.large-only-text-right{text-align:right !important}.large-only-text-center{text-align:center !important}.large-only-text-justify{text-align:justify !important}}@media only screen and (min-width: 64.063em){.large-text-left{text-align:left !important}.large-text-right{text-align:right !important}.large-text-center{text-align:center !important}.large-text-justify{text-align:justify !important}}@media only screen and (min-width: 90.063em) and (max-width: 120em){.xlarge-only-text-left{text-align:left !important}.xlarge-only-text-right{text-align:right !important}.xlarge-only-text-center{text-align:center !important}.xlarge-only-text-justify{text-align:justify !important}}@media only screen and (min-width: 90.063em){.xlarge-text-left{text-align:left !important}.xlarge-text-right{text-align:right !important}.xlarge-text-center{text-align:center !important}.xlarge-text-justify{text-align:justify !important}}@media only screen and (min-width: 120.063em) and (max-width: 99999999em){.xxlarge-only-text-left{text-align:left !important}.xxlarge-only-text-right{text-align:right !important}.xxlarge-only-text-center{text-align:center !important}.xxlarge-only-text-justify{text-align:justify !important}}@media only screen and (min-width: 120.063em){.xxlarge-text-left{text-align:left !important}.xxlarge-text-right{text-align:right !important}.xxlarge-text-center{text-align:center !important}.xxlarge-text-justify{text-align:justify !important}}div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0}a{color:#008CBA;text-decoration:none;line-height:inherit}a:hover,a:focus{color:#0078a0}a img{border:none}p{font-family:inherit;font-weight:normal;font-size:1rem;line-height:1.6;margin-bottom:1.25rem;text-rendering:optimizeLegibility}p.lead{font-size:1.21875rem;line-height:1.6}p aside{font-size:0.875rem;line-height:1.35;font-style:italic}h1,h2,h3,h4,h5,h6{font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-weight:normal;font-style:normal;color:#222;text-rendering:optimizeLegibility;margin-top:0.2rem;margin-bottom:0.5rem;line-height:1.4}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-size:60%;color:#6f6f6f;line-height:0}h1{font-size:2.125rem}h2{font-size:1.6875rem}h3{font-size:1.375rem}h4{font-size:1.125rem}h5{font-size:1.125rem}h6{font-size:1rem}.subheader{line-height:1.4;color:#6f6f6f;font-weight:normal;margin-top:0.2rem;margin-bottom:0.5rem}hr{border:solid #ddd;border-width:1px 0 0;clear:both;margin:1.25rem 0 1.1875rem;height:0}em,i{font-style:italic;line-height:inherit}strong,b{font-weight:bold;line-height:inherit}small{font-size:60%;line-height:inherit}code{font-family:Consolas,\"Liberation Mono\",Courier,monospace;font-weight:normal;color:#333;background-color:#f8f8f8;border-width:1px;border-style:solid;border-color:#dfdfdf;padding:0.125rem 0.3125rem 0.0625rem}ul,ol,dl{font-size:1rem;line-height:1.6;margin-bottom:1.25rem;list-style-position:outside;font-family:inherit}ul{margin-left:1.1rem}ul.no-bullet{margin-left:0}ul.no-bullet li ul,ul.no-bullet li ol{margin-left:1.25rem;margin-bottom:0;list-style:none}ul li ul,ul li ol{margin-left:1.25rem;margin-bottom:0}ul.square li ul,ul.circle li ul,ul.disc li ul{list-style:inherit}ul.square{list-style-type:square;margin-left:1.1rem}ul.circle{list-style-type:circle;margin-left:1.1rem}ul.disc{list-style-type:disc;margin-left:1.1rem}ul.no-bullet{list-style:none}ol{margin-left:1.4rem}ol li ul,ol li ol{margin-left:1.25rem;margin-bottom:0}dl dt{margin-bottom:0.3rem;font-weight:bold}dl dd{margin-bottom:0.75rem}abbr,acronym{text-transform:uppercase;font-size:90%;color:#222;cursor:help}abbr{text-transform:none}abbr[title]{border-bottom:1px dotted #ddd}blockquote{margin:0 0 1.25rem;padding:0.5625rem 1.25rem 0 1.1875rem;border-left:1px solid #ddd}blockquote cite{display:block;font-size:0.8125rem;color:#555}blockquote cite:before{content:\"\\2014    \"}blockquote cite a,blockquote cite a:visited{color:#555}blockquote,blockquote p{line-height:1.6;color:#6f6f6f}.vcard{display:inline-block;margin:0 0 1.25rem 0;border:1px solid #ddd;padding:0.625rem 0.75rem}.vcard li{margin:0;display:block}.vcard .fn{font-weight:bold;font-size:0.9375rem}.vevent .summary{font-weight:bold}.vevent abbr{cursor:default;text-decoration:none;font-weight:bold;border:none;padding:0 0.0625rem}@media only screen and (min-width: 40.063em){h1,h2,h3,h4,h5,h6{line-height:1.4}h1{font-size:2.75rem}h2{font-size:2.3125rem}h3{font-size:1.6875rem}h4{font-size:1.4375rem}h5{font-size:1.125rem}h6{font-size:1rem}}.split.button{position:relative;padding-right:5.0625rem}.split.button span{display:block;height:100%;position:absolute;right:0;top:0;border-left:solid 1px}.split.button span:after{position:absolute;content:\"\";width:0;height:0;display:block;border-style:inset;top:50%;left:50%}.split.button span:active{background-color:rgba(0,0,0,0.1)}.split.button span{border-left-color:rgba(255,255,255,0.5)}.split.button span{width:3.09375rem}.split.button span:after{border-top-style:solid;border-width:0.375rem;top:48%;margin-left:-0.375rem}.split.button span:after{border-color:#fff transparent transparent transparent}.split.button.secondary span{border-left-color:rgba(255,255,255,0.5)}.split.button.secondary span:after{border-color:#fff transparent transparent transparent}.split.button.alert span{border-left-color:rgba(255,255,255,0.5)}.split.button.success span{border-left-color:rgba(255,255,255,0.5)}.split.button.tiny{padding-right:3.75rem}.split.button.tiny span{width:2.25rem}.split.button.tiny span:after{border-top-style:solid;border-width:0.375rem;top:48%;margin-left:-0.375rem}.split.button.small{padding-right:4.375rem}.split.button.small span{width:2.625rem}.split.button.small span:after{border-top-style:solid;border-width:0.4375rem;top:48%;margin-left:-0.375rem}.split.button.large{padding-right:5.5rem}.split.button.large span{width:3.4375rem}.split.button.large span:after{border-top-style:solid;border-width:0.3125rem;top:48%;margin-left:-0.375rem}.split.button.expand{padding-left:2rem}.split.button.secondary span:after{border-color:#333 transparent transparent transparent}.split.button.radius span{-webkit-border-bottom-right-radius:3px;-webkit-border-top-right-radius:3px;border-bottom-right-radius:3px;border-top-right-radius:3px}.split.button.round span{-webkit-border-bottom-right-radius:1000px;-webkit-border-top-right-radius:1000px;border-bottom-right-radius:1000px;border-top-right-radius:1000px}.split.button.no-pip span:before{border-style:none}.split.button.no-pip span:after{border-style:none}.split.button.no-pip span>i{top:50%;display:block;position:absolute;left:50%;margin-left:-0.28889em;margin-top:-0.48889em}.reveal-modal-bg{position:fixed;top:0;bottom:0;left:0;right:0;background:#000;background:rgba(0,0,0,0.45);z-index:1004;display:none;left:0}.reveal-modal{visibility:hidden;display:none;position:absolute;z-index:1005;width:100%;top:0;border-radius:3px;left:0;background-color:#fff;padding:1.875rem;border:solid 1px #666;box-shadow:0 0 10px rgba(0,0,0,0.4)}@media only screen and (max-width: 40em){.reveal-modal{min-height:100vh}}.reveal-modal .column,.reveal-modal .columns{min-width:0}.reveal-modal>:first-child{margin-top:0}.reveal-modal>:last-child{margin-bottom:0}@media only screen and (min-width: 40.063em){.reveal-modal{width:80%;max-width:62.5rem;left:0;right:0;margin:0 auto}}@media only screen and (min-width: 40.063em){.reveal-modal{top:6.25rem}}.reveal-modal.radius{border-radius:3px}.reveal-modal.round{border-radius:1000px}.reveal-modal.collapse{padding:0}@media only screen and (min-width: 40.063em){.reveal-modal.tiny{width:30%;max-width:62.5rem;left:0;right:0;margin:0 auto}}@media only screen and (min-width: 40.063em){.reveal-modal.small{width:40%;max-width:62.5rem;left:0;right:0;margin:0 auto}}@media only screen and (min-width: 40.063em){.reveal-modal.medium{width:60%;max-width:62.5rem;left:0;right:0;margin:0 auto}}@media only screen and (min-width: 40.063em){.reveal-modal.large{width:70%;max-width:62.5rem;left:0;right:0;margin:0 auto}}@media only screen and (min-width: 40.063em){.reveal-modal.xlarge{width:95%;max-width:62.5rem;left:0;right:0;margin:0 auto}}.reveal-modal.full{top:0;left:0;height:100%;height:100vh;min-height:100vh;max-width:none !important;margin-left:0 !important}@media only screen and (min-width: 40.063em){.reveal-modal.full{width:100%;max-width:62.5rem;left:0;right:0;margin:0 auto}}.reveal-modal.toback{z-index:1003}.reveal-modal .close-reveal-modal{font-size:2.5rem;line-height:1;position:absolute;top:0.625rem;right:1.375rem;color:#aaa;font-weight:bold;cursor:pointer}.has-tip{border-bottom:dotted 1px #ccc;cursor:help;font-weight:bold;color:#333}.has-tip:hover,.has-tip:focus{border-bottom:dotted 1px #003f54;color:#008CBA}.has-tip.tip-left,.has-tip.tip-right{float:none !important}.tooltip{display:none;position:absolute;z-index:1006;font-weight:normal;font-size:0.875rem;line-height:1.3;padding:0.75rem;max-width:300px;left:50%;width:100%;color:#fff;background:#333}.tooltip>.nub{display:block;left:5px;position:absolute;width:0;height:0;border:solid 5px;border-color:transparent transparent #333 transparent;top:-10px;pointer-events:none}.tooltip>.nub.rtl{left:auto;right:5px}.tooltip.radius{border-radius:3px}.tooltip.round{border-radius:1000px}.tooltip.round>.nub{left:2rem}.tooltip.opened{color:#008CBA !important;border-bottom:dotted 1px #003f54 !important}.tap-to-close{display:block;font-size:0.625rem;color:#777;font-weight:normal}@media only screen and (min-width: 40.063em){.tooltip>.nub{border-color:transparent transparent #333 transparent;top:-10px}.tooltip.tip-top>.nub{border-color:#333 transparent transparent transparent;top:auto;bottom:-10px}.tooltip.tip-left,.tooltip.tip-right{float:none !important}.tooltip.tip-left>.nub{border-color:transparent transparent transparent #333;right:-10px;left:auto;top:50%;margin-top:-5px}.tooltip.tip-right>.nub{border-color:transparent #333 transparent transparent;right:auto;left:-10px;top:50%;margin-top:-5px}}.clearing-thumbs,[data-clearing]{margin-bottom:0;margin-left:0;list-style:none}.clearing-thumbs:before,.clearing-thumbs:after,[data-clearing]:before,[data-clearing]:after{content:\" \";display:table}.clearing-thumbs:after,[data-clearing]:after{clear:both}.clearing-thumbs li,[data-clearing] li{float:left;margin-right:10px}.clearing-thumbs[class*=\"block-grid-\"] li,[data-clearing][class*=\"block-grid-\"] li{margin-right:0}.clearing-blackout{background:#333;position:fixed;width:100%;height:100%;top:0;left:0;z-index:998}.clearing-blackout .clearing-close{display:block}.clearing-container{position:relative;z-index:998;height:100%;overflow:hidden;margin:0}.clearing-touch-label{position:absolute;top:50%;left:50%;color:#aaa;font-size:0.6em}.visible-img{height:95%;position:relative}.visible-img img{position:absolute;left:50%;top:50%;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%);-ms-transform:translateY(-50%) translateX(-50%);max-height:100%;max-width:100%}.clearing-caption{color:#ccc;font-size:0.875em;line-height:1.3;margin-bottom:0;text-align:center;bottom:0;background:#333;width:100%;padding:10px 30px 20px;position:absolute;left:0}.clearing-close{z-index:999;padding-left:20px;padding-top:10px;font-size:30px;line-height:1;color:#ccc;display:none}.clearing-close:hover,.clearing-close:focus{color:#ccc}.clearing-assembled .clearing-container{height:100%}.clearing-assembled .clearing-container .carousel>ul{display:none}.clearing-feature li{display:none}.clearing-feature li.clearing-featured-img{display:block}@media only screen and (min-width: 40.063em){.clearing-main-prev,.clearing-main-next{position:absolute;height:100%;width:40px;top:0}.clearing-main-prev>span,.clearing-main-next>span{position:absolute;top:50%;display:block;width:0;height:0;border:solid 12px}.clearing-main-prev>span:hover,.clearing-main-next>span:hover{opacity:0.8}.clearing-main-prev{left:0}.clearing-main-prev>span{left:5px;border-color:transparent;border-right-color:#ccc}.clearing-main-next{right:0}.clearing-main-next>span{border-color:transparent;border-left-color:#ccc}.clearing-main-prev.disabled,.clearing-main-next.disabled{opacity:0.3}.clearing-assembled .clearing-container .carousel{background:rgba(51,51,51,0.8);height:120px;margin-top:10px;text-align:center}.clearing-assembled .clearing-container .carousel>ul{display:inline-block;z-index:999;height:100%;position:relative;float:none}.clearing-assembled .clearing-container .carousel>ul li{display:block;width:120px;min-height:inherit;float:left;overflow:hidden;margin-right:0;padding:0;position:relative;cursor:pointer;opacity:0.4;clear:none}.clearing-assembled .clearing-container .carousel>ul li.fix-height img{height:100%;max-width:none}.clearing-assembled .clearing-container .carousel>ul li a.th{border:none;box-shadow:none;display:block}.clearing-assembled .clearing-container .carousel>ul li img{cursor:pointer !important;width:100% !important}.clearing-assembled .clearing-container .carousel>ul li.visible{opacity:1}.clearing-assembled .clearing-container .carousel>ul li:hover{opacity:0.8}.clearing-assembled .clearing-container .visible-img{background:#333;overflow:hidden;height:85%}.clearing-close{position:absolute;top:10px;right:20px;padding-left:0;padding-top:0}}.progress{background-color:#F6F6F6;height:1.5625rem;border:1px solid #fff;padding:0.125rem;margin-bottom:0.625rem}.progress .meter{background:#008CBA;height:100%;display:block}.progress.secondary .meter{background:#e7e7e7;height:100%;display:block}.progress.success .meter{background:#43AC6A;height:100%;display:block}.progress.alert .meter{background:#f04124;height:100%;display:block}.progress.radius{border-radius:3px}.progress.radius .meter{border-radius:2px}.progress.round{border-radius:1000px}.progress.round .meter{border-radius:999px}.sub-nav{display:block;width:auto;overflow:hidden;margin-bottom:-0.25rem 0 1.125rem;padding-top:0.25rem}.sub-nav dt{text-transform:uppercase}.sub-nav dt,.sub-nav dd,.sub-nav li{float:left;margin-left:1rem;margin-bottom:0;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-weight:normal;font-size:0.875rem;color:#999}.sub-nav dt a,.sub-nav dd a,.sub-nav li a{text-decoration:none;color:#999;padding:0.1875rem 1rem}.sub-nav dt a:hover,.sub-nav dd a:hover,.sub-nav li a:hover{color:#737373}.sub-nav dt.active a,.sub-nav dd.active a,.sub-nav li.active a{border-radius:3px;font-weight:normal;background:#008CBA;padding:0.1875rem 1rem;cursor:default;color:#fff}.sub-nav dt.active a:hover,.sub-nav dd.active a:hover,.sub-nav li.active a:hover{background:#0078a0}.joyride-list{display:none}.joyride-tip-guide{display:none;position:absolute;background:#333;color:#fff;z-index:101;top:0;left:2.5%;font-family:inherit;font-weight:normal;width:95%}.lt-ie9 .joyride-tip-guide{max-width:800px;left:50%;margin-left:-400px}.joyride-content-wrapper{width:100%;padding:1.125rem 1.25rem 1.5rem}.joyride-content-wrapper .button{margin-bottom:0 !important}.joyride-content-wrapper .joyride-prev-tip{margin-right:10px}.joyride-tip-guide .joyride-nub{display:block;position:absolute;left:22px;width:0;height:0;border:10px solid #333}.joyride-tip-guide .joyride-nub.top{border-top-style:solid;border-color:#333;border-top-color:transparent !important;border-left-color:transparent !important;border-right-color:transparent !important;top:-20px}.joyride-tip-guide .joyride-nub.bottom{border-bottom-style:solid;border-color:#333 !important;border-bottom-color:transparent !important;border-left-color:transparent !important;border-right-color:transparent !important;bottom:-20px}.joyride-tip-guide .joyride-nub.right{right:-20px}.joyride-tip-guide .joyride-nub.left{left:-20px}.joyride-tip-guide h1,.joyride-tip-guide h2,.joyride-tip-guide h3,.joyride-tip-guide h4,.joyride-tip-guide h5,.joyride-tip-guide h6{line-height:1.25;margin:0;font-weight:bold;color:#fff}.joyride-tip-guide p{margin:0 0 1.125rem 0;font-size:0.875rem;line-height:1.3}.joyride-timer-indicator-wrap{width:50px;height:3px;border:solid 1px #555;position:absolute;right:1.0625rem;bottom:1rem}.joyride-timer-indicator{display:block;width:0;height:inherit;background:#666}.joyride-close-tip{position:absolute;right:12px;top:10px;color:#777 !important;text-decoration:none;font-size:24px;font-weight:normal;line-height:.5 !important}.joyride-close-tip:hover,.joyride-close-tip:focus{color:#eee !important}.joyride-modal-bg{position:fixed;height:100%;width:100%;background:transparent;background:rgba(0,0,0,0.5);z-index:100;display:none;top:0;left:0;cursor:pointer}.joyride-expose-wrapper{background-color:#fff;position:absolute;border-radius:3px;z-index:102;box-shadow:0 0 15px #fff}.joyride-expose-cover{background:transparent;border-radius:3px;position:absolute;z-index:9999;top:0;left:0}@media only screen and (min-width: 40.063em){.joyride-tip-guide{width:300px;left:inherit}.joyride-tip-guide .joyride-nub.bottom{border-color:#333 !important;border-bottom-color:transparent !important;border-left-color:transparent !important;border-right-color:transparent !important;bottom:-20px}.joyride-tip-guide .joyride-nub.right{border-color:#333 !important;border-top-color:transparent !important;border-right-color:transparent !important;border-bottom-color:transparent !important;top:22px;left:auto;right:-20px}.joyride-tip-guide .joyride-nub.left{border-color:#333 !important;border-top-color:transparent !important;border-left-color:transparent !important;border-bottom-color:transparent !important;top:22px;left:-20px;right:auto}}.label{font-weight:normal;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;text-align:center;text-decoration:none;line-height:1;white-space:nowrap;display:inline-block;position:relative;margin-bottom:auto;padding:0.25rem 0.5rem 0.25rem;font-size:0.6875rem;background-color:#008CBA;color:#fff}.label.radius{border-radius:3px}.label.round{border-radius:1000px}.label.alert{background-color:#f04124;color:#fff}.label.warning{background-color:#f08a24;color:#fff}.label.success{background-color:#43AC6A;color:#fff}.label.secondary{background-color:#e7e7e7;color:#333}.label.info{background-color:#a0d3e8;color:#333}.off-canvas-wrap{-webkit-backface-visibility:hidden;position:relative;width:100%;overflow:hidden}.off-canvas-wrap.move-right,.off-canvas-wrap.move-left{min-height:100%;-webkit-overflow-scrolling:touch}.inner-wrap{position:relative;width:100%;-webkit-transition:-webkit-transform 500ms ease;-moz-transition:-moz-transform 500ms ease;-ms-transition:-ms-transform 500ms ease;-o-transition:-o-transform 500ms ease;transition:transform 500ms ease}.inner-wrap:before,.inner-wrap:after{content:\" \";display:table}.inner-wrap:after{clear:both}.tab-bar{-webkit-backface-visibility:hidden;background:#333;color:#fff;height:2.8125rem;line-height:2.8125rem;position:relative}.tab-bar h1,.tab-bar h2,.tab-bar h3,.tab-bar h4,.tab-bar h5,.tab-bar h6{color:#fff;font-weight:bold;line-height:2.8125rem;margin:0}.tab-bar h1,.tab-bar h2,.tab-bar h3,.tab-bar h4{font-size:1.125rem}.left-small{width:2.8125rem;height:2.8125rem;position:absolute;top:0;border-right:solid 1px #1a1a1a;left:0}.right-small{width:2.8125rem;height:2.8125rem;position:absolute;top:0;border-left:solid 1px #1a1a1a;right:0}.tab-bar-section{padding:0 0.625rem;position:absolute;text-align:center;height:2.8125rem;top:0}@media only screen and (min-width: 40.063em){.tab-bar-section.left{text-align:left}.tab-bar-section.right{text-align:right}}.tab-bar-section.left{left:0;right:2.8125rem}.tab-bar-section.right{left:2.8125rem;right:0}.tab-bar-section.middle{left:2.8125rem;right:2.8125rem}.tab-bar .menu-icon{text-indent:2.1875rem;width:2.8125rem;height:2.8125rem;display:block;padding:0;color:#fff;position:relative;transform:translate3d(0, 0, 0)}.tab-bar .menu-icon span::after{content:\"\";position:absolute;display:block;height:0;top:50%;margin-top:-0.5rem;left:0.90625rem;box-shadow:0 0 0 1px #fff,0 7px 0 1px #fff,0 14px 0 1px #fff;width:1rem}.tab-bar .menu-icon span:hover:after{box-shadow:0 0 0 1px #b3b3b3,0 7px 0 1px #b3b3b3,0 14px 0 1px #b3b3b3}.left-off-canvas-menu{-webkit-backface-visibility:hidden;width:15.625rem;top:0;bottom:0;position:absolute;overflow-x:hidden;overflow-y:auto;background:#333;z-index:1001;box-sizing:content-box;transition:transform 500ms ease 0s;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;-ms-transform:translate(-100%, 0);-webkit-transform:translate3d(-100%, 0, 0);-moz-transform:translate3d(-100%, 0, 0);-ms-transform:translate3d(-100%, 0, 0);-o-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);left:0}.left-off-canvas-menu *{-webkit-backface-visibility:hidden}.right-off-canvas-menu{-webkit-backface-visibility:hidden;width:15.625rem;top:0;bottom:0;position:absolute;overflow-x:hidden;overflow-y:auto;background:#333;z-index:1001;box-sizing:content-box;transition:transform 500ms ease 0s;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;-ms-transform:translate(100%, 0);-webkit-transform:translate3d(100%, 0, 0);-moz-transform:translate3d(100%, 0, 0);-ms-transform:translate3d(100%, 0, 0);-o-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);right:0}.right-off-canvas-menu *{-webkit-backface-visibility:hidden}ul.off-canvas-list{list-style-type:none;padding:0;margin:0}ul.off-canvas-list li label{display:block;padding:0.3rem 0.9375rem;color:#999;text-transform:uppercase;font-size:0.75rem;font-weight:bold;background:#444;border-top:1px solid #5e5e5e;border-bottom:none;margin:0}ul.off-canvas-list li a{display:block;padding:0.66667rem;color:rgba(255,255,255,0.7);border-bottom:1px solid #262626;transition:background 300ms ease}ul.off-canvas-list li a:hover{background:#242424}.move-right>.inner-wrap{-ms-transform:translate(15.625rem, 0);-webkit-transform:translate3d(15.625rem, 0, 0);-moz-transform:translate3d(15.625rem, 0, 0);-ms-transform:translate3d(15.625rem, 0, 0);-o-transform:translate3d(15.625rem, 0, 0);transform:translate3d(15.625rem, 0, 0)}.move-right .exit-off-canvas{-webkit-backface-visibility:hidden;transition:background 300ms ease;cursor:pointer;box-shadow:-4px 0 4px rgba(0,0,0,0.5),4px 0 4px rgba(0,0,0,0.5);display:block;position:absolute;background:rgba(255,255,255,0.2);top:0;bottom:0;left:0;right:0;z-index:1002;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 40.063em){.move-right .exit-off-canvas:hover{background:rgba(255,255,255,0.05)}}.move-left>.inner-wrap{-ms-transform:translate(-15.625rem, 0);-webkit-transform:translate3d(-15.625rem, 0, 0);-moz-transform:translate3d(-15.625rem, 0, 0);-ms-transform:translate3d(-15.625rem, 0, 0);-o-transform:translate3d(-15.625rem, 0, 0);transform:translate3d(-15.625rem, 0, 0)}.move-left .exit-off-canvas{-webkit-backface-visibility:hidden;transition:background 300ms ease;cursor:pointer;box-shadow:-4px 0 4px rgba(0,0,0,0.5),4px 0 4px rgba(0,0,0,0.5);display:block;position:absolute;background:rgba(255,255,255,0.2);top:0;bottom:0;left:0;right:0;z-index:1002;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 40.063em){.move-left .exit-off-canvas:hover{background:rgba(255,255,255,0.05)}}.offcanvas-overlap .left-off-canvas-menu,.offcanvas-overlap .right-off-canvas-menu{-ms-transform:none;-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none;z-index:1003}.offcanvas-overlap .exit-off-canvas{-webkit-backface-visibility:hidden;transition:background 300ms ease;cursor:pointer;box-shadow:-4px 0 4px rgba(0,0,0,0.5),4px 0 4px rgba(0,0,0,0.5);display:block;position:absolute;background:rgba(255,255,255,0.2);top:0;bottom:0;left:0;right:0;z-index:1002;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 40.063em){.offcanvas-overlap .exit-off-canvas:hover{background:rgba(255,255,255,0.05)}}.offcanvas-overlap-left .right-off-canvas-menu{-ms-transform:none;-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none;z-index:1003}.offcanvas-overlap-left .exit-off-canvas{-webkit-backface-visibility:hidden;transition:background 300ms ease;cursor:pointer;box-shadow:-4px 0 4px rgba(0,0,0,0.5),4px 0 4px rgba(0,0,0,0.5);display:block;position:absolute;background:rgba(255,255,255,0.2);top:0;bottom:0;left:0;right:0;z-index:1002;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 40.063em){.offcanvas-overlap-left .exit-off-canvas:hover{background:rgba(255,255,255,0.05)}}.offcanvas-overlap-right .left-off-canvas-menu{-ms-transform:none;-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none;z-index:1003}.offcanvas-overlap-right .exit-off-canvas{-webkit-backface-visibility:hidden;transition:background 300ms ease;cursor:pointer;box-shadow:-4px 0 4px rgba(0,0,0,0.5),4px 0 4px rgba(0,0,0,0.5);display:block;position:absolute;background:rgba(255,255,255,0.2);top:0;bottom:0;left:0;right:0;z-index:1002;-webkit-tap-highlight-color:transparent}@media only screen and (min-width: 40.063em){.offcanvas-overlap-right .exit-off-canvas:hover{background:rgba(255,255,255,0.05)}}.no-csstransforms .left-off-canvas-menu{left:-15.625rem}.no-csstransforms .right-off-canvas-menu{right:-15.625rem}.no-csstransforms .move-left>.inner-wrap{right:15.625rem}.no-csstransforms .move-right>.inner-wrap{left:15.625rem}.left-submenu{-webkit-backface-visibility:hidden;width:15.625rem;top:0;bottom:0;position:absolute;margin:0;overflow-x:hidden;overflow-y:auto;background:#333;z-index:1002;box-sizing:content-box;-webkit-overflow-scrolling:touch;-ms-transform:translate(-100%, 0);-webkit-transform:translate3d(-100%, 0, 0);-moz-transform:translate3d(-100%, 0, 0);-ms-transform:translate3d(-100%, 0, 0);-o-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);left:0;-webkit-transition:-webkit-transform 500ms ease;-moz-transition:-moz-transform 500ms ease;-ms-transition:-ms-transform 500ms ease;-o-transition:-o-transform 500ms ease;transition:transform 500ms ease}.left-submenu *{-webkit-backface-visibility:hidden}.left-submenu .back>a{padding:0.3rem 0.9375rem;color:#999;text-transform:uppercase;font-weight:bold;background:#444;border-top:1px solid #5e5e5e;border-bottom:none;margin:0}.left-submenu .back>a:hover{background:#303030;border-top:1px solid #5e5e5e;border-bottom:none}.left-submenu .back>a:before{content:\"\\AB\";margin-right:0.5rem;display:inline}.left-submenu.move-right,.left-submenu.offcanvas-overlap-right,.left-submenu.offcanvas-overlap{-ms-transform:translate(0%, 0);-webkit-transform:translate3d(0%, 0, 0);-moz-transform:translate3d(0%, 0, 0);-ms-transform:translate3d(0%, 0, 0);-o-transform:translate3d(0%, 0, 0);transform:translate3d(0%, 0, 0)}.right-submenu{-webkit-backface-visibility:hidden;width:15.625rem;top:0;bottom:0;position:absolute;margin:0;overflow-x:hidden;overflow-y:auto;background:#333;z-index:1002;box-sizing:content-box;-webkit-overflow-scrolling:touch;-ms-transform:translate(100%, 0);-webkit-transform:translate3d(100%, 0, 0);-moz-transform:translate3d(100%, 0, 0);-ms-transform:translate3d(100%, 0, 0);-o-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);right:0;-webkit-transition:-webkit-transform 500ms ease;-moz-transition:-moz-transform 500ms ease;-ms-transition:-ms-transform 500ms ease;-o-transition:-o-transform 500ms ease;transition:transform 500ms ease}.right-submenu *{-webkit-backface-visibility:hidden}.right-submenu .back>a{padding:0.3rem 0.9375rem;color:#999;text-transform:uppercase;font-weight:bold;background:#444;border-top:1px solid #5e5e5e;border-bottom:none;margin:0}.right-submenu .back>a:hover{background:#303030;border-top:1px solid #5e5e5e;border-bottom:none}.right-submenu .back>a:after{content:\"\\BB\";margin-left:0.5rem;display:inline}.right-submenu.move-left,.right-submenu.offcanvas-overlap-left,.right-submenu.offcanvas-overlap{-ms-transform:translate(0%, 0);-webkit-transform:translate3d(0%, 0, 0);-moz-transform:translate3d(0%, 0, 0);-ms-transform:translate3d(0%, 0, 0);-o-transform:translate3d(0%, 0, 0);transform:translate3d(0%, 0, 0)}.left-off-canvas-menu ul.off-canvas-list li.has-submenu>a:after{content:\"\\BB\";margin-left:0.5rem;display:inline}.right-off-canvas-menu ul.off-canvas-list li.has-submenu>a:before{content:\"\\AB\";margin-right:0.5rem;display:inline}.f-dropdown{position:absolute;left:-9999px;list-style:none;margin-left:0;outline:none;width:100%;max-height:none;height:auto;background:#fff;border:solid 1px #ccc;font-size:0.875rem;z-index:89;margin-top:2px;max-width:200px}.f-dropdown>*:first-child{margin-top:0}.f-dropdown>*:last-child{margin-bottom:0}.f-dropdown:before{content:\"\";display:block;width:0;height:0;border:inset 6px;border-color:transparent transparent #fff transparent;border-bottom-style:solid;position:absolute;top:-12px;left:10px;z-index:89}.f-dropdown:after{content:\"\";display:block;width:0;height:0;border:inset 7px;border-color:transparent transparent #ccc transparent;border-bottom-style:solid;position:absolute;top:-14px;left:9px;z-index:88}.f-dropdown.right:before{left:auto;right:10px}.f-dropdown.right:after{left:auto;right:9px}.f-dropdown.drop-right{position:absolute;left:-9999px;list-style:none;margin-left:0;outline:none;width:100%;max-height:none;height:auto;background:#fff;border:solid 1px #ccc;font-size:0.875rem;z-index:89;margin-top:0;margin-left:2px;max-width:200px}.f-dropdown.drop-right>*:first-child{margin-top:0}.f-dropdown.drop-right>*:last-child{margin-bottom:0}.f-dropdown.drop-right:before{content:\"\";display:block;width:0;height:0;border:inset 6px;border-color:transparent #fff transparent transparent;border-right-style:solid;position:absolute;top:10px;left:-12px;z-index:89}.f-dropdown.drop-right:after{content:\"\";display:block;width:0;height:0;border:inset 7px;border-color:transparent #ccc transparent transparent;border-right-style:solid;position:absolute;top:9px;left:-14px;z-index:88}.f-dropdown.drop-left{position:absolute;left:-9999px;list-style:none;margin-left:0;outline:none;width:100%;max-height:none;height:auto;background:#fff;border:solid 1px #ccc;font-size:0.875rem;z-index:89;margin-top:0;margin-left:-2px;max-width:200px}.f-dropdown.drop-left>*:first-child{margin-top:0}.f-dropdown.drop-left>*:last-child{margin-bottom:0}.f-dropdown.drop-left:before{content:\"\";display:block;width:0;height:0;border:inset 6px;border-color:transparent transparent transparent #fff;border-left-style:solid;position:absolute;top:10px;right:-12px;left:auto;z-index:89}.f-dropdown.drop-left:after{content:\"\";display:block;width:0;height:0;border:inset 7px;border-color:transparent transparent transparent #ccc;border-left-style:solid;position:absolute;top:9px;right:-14px;left:auto;z-index:88}.f-dropdown.drop-top{position:absolute;left:-9999px;list-style:none;margin-left:0;outline:none;width:100%;max-height:none;height:auto;background:#fff;border:solid 1px #ccc;font-size:0.875rem;z-index:89;margin-top:-2px;margin-left:0;max-width:200px}.f-dropdown.drop-top>*:first-child{margin-top:0}.f-dropdown.drop-top>*:last-child{margin-bottom:0}.f-dropdown.drop-top:before{content:\"\";display:block;width:0;height:0;border:inset 6px;border-color:#fff transparent transparent transparent;border-top-style:solid;position:absolute;top:auto;bottom:-12px;left:10px;right:auto;z-index:89}.f-dropdown.drop-top:after{content:\"\";display:block;width:0;height:0;border:inset 7px;border-color:#ccc transparent transparent transparent;border-top-style:solid;position:absolute;top:auto;bottom:-14px;left:9px;right:auto;z-index:88}.f-dropdown li{font-size:0.875rem;cursor:pointer;line-height:1.125rem;margin:0}.f-dropdown li:hover,.f-dropdown li:focus{background:#eee}.f-dropdown li.radius{border-radius:3px}.f-dropdown li a{display:block;padding:0.5rem;color:#555}.f-dropdown.content{position:absolute;left:-9999px;list-style:none;margin-left:0;outline:none;padding:1.25rem;width:100%;height:auto;max-height:none;background:#fff;border:solid 1px #ccc;font-size:0.875rem;z-index:89;max-width:200px}.f-dropdown.content>*:first-child{margin-top:0}.f-dropdown.content>*:last-child{margin-bottom:0}.f-dropdown.tiny{max-width:200px}.f-dropdown.small{max-width:300px}.f-dropdown.medium{max-width:500px}.f-dropdown.large{max-width:800px}.f-dropdown.mega{width:100% !important;max-width:100% !important}.f-dropdown.mega.open{left:0 !important}table{background:#fff;margin-bottom:1.25rem;border:solid 1px #ddd;table-layout:auto}table caption{background:transparent;color:#222;font-size:1rem;font-weight:bold}table thead{background:#F5F5F5}table thead tr th,table thead tr td{padding:0.5rem 0.625rem 0.625rem;font-size:0.875rem;font-weight:bold;color:#222}table tfoot{background:#F5F5F5}table tfoot tr th,table tfoot tr td{padding:0.5rem 0.625rem 0.625rem;font-size:0.875rem;font-weight:bold;color:#222}table tr th,table tr td{padding:0.5625rem 0.625rem;font-size:0.875rem;color:#222;text-align:left}table tr.even,table tr.alt,table tr:nth-of-type(even){background:#F9F9F9}table thead tr th,table tfoot tr th,table tfoot tr td,table tbody tr th,table tbody tr td,table tr td{display:table-cell;line-height:1.125rem}.range-slider{position:relative;border:1px solid #ddd;margin:1.25rem 0;-ms-touch-action:none;touch-action:none;display:block;width:100%;height:1rem;background:#FAFAFA}.range-slider.vertical-range{position:relative;border:1px solid #ddd;margin:1.25rem 0;-ms-touch-action:none;touch-action:none;display:inline-block;width:1rem;height:12.5rem}.range-slider.vertical-range .range-slider-handle{margin-top:0;margin-left:-0.5rem;position:absolute;bottom:-10.5rem}.range-slider.vertical-range .range-slider-active-segment{width:0.875rem;height:auto;bottom:0}.range-slider.radius{background:#FAFAFA;border-radius:3px}.range-slider.radius .range-slider-handle{background:#008CBA;border-radius:3px}.range-slider.radius .range-slider-handle:hover{background:#007ba4}.range-slider.round{background:#FAFAFA;border-radius:1000px}.range-slider.round .range-slider-handle{background:#008CBA;border-radius:1000px}.range-slider.round .range-slider-handle:hover{background:#007ba4}.range-slider.disabled,.range-slider[disabled]{background:#FAFAFA;cursor:not-allowed;opacity:0.7}.range-slider.disabled .range-slider-handle,.range-slider[disabled] .range-slider-handle{background:#008CBA;cursor:default;opacity:0.7}.range-slider.disabled .range-slider-handle:hover,.range-slider[disabled] .range-slider-handle:hover{background:#007ba4}.range-slider-active-segment{display:inline-block;position:absolute;height:0.875rem;background:#e5e5e5}.range-slider-handle{display:inline-block;position:absolute;z-index:1;top:-0.3125rem;width:2rem;height:1.375rem;border:1px solid none;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;background:#008CBA}.range-slider-handle:hover{background:#007ba4}[class*=\"block-grid-\"]{display:block;padding:0;margin:0 -0.625rem}[class*=\"block-grid-\"]:before,[class*=\"block-grid-\"]:after{content:\" \";display:table}[class*=\"block-grid-\"]:after{clear:both}[class*=\"block-grid-\"]>li{display:block;height:auto;float:left;padding:0 0.625rem 1.25rem}@media only screen{.small-block-grid-1>li{width:100%;list-style:none}.small-block-grid-1>li:nth-of-type(1n){clear:none}.small-block-grid-1>li:nth-of-type(1n+1){clear:both}.small-block-grid-2>li{width:50%;list-style:none}.small-block-grid-2>li:nth-of-type(1n){clear:none}.small-block-grid-2>li:nth-of-type(2n+1){clear:both}.small-block-grid-3>li{width:33.33333%;list-style:none}.small-block-grid-3>li:nth-of-type(1n){clear:none}.small-block-grid-3>li:nth-of-type(3n+1){clear:both}.small-block-grid-4>li{width:25%;list-style:none}.small-block-grid-4>li:nth-of-type(1n){clear:none}.small-block-grid-4>li:nth-of-type(4n+1){clear:both}.small-block-grid-5>li{width:20%;list-style:none}.small-block-grid-5>li:nth-of-type(1n){clear:none}.small-block-grid-5>li:nth-of-type(5n+1){clear:both}.small-block-grid-6>li{width:16.66667%;list-style:none}.small-block-grid-6>li:nth-of-type(1n){clear:none}.small-block-grid-6>li:nth-of-type(6n+1){clear:both}.small-block-grid-7>li{width:14.28571%;list-style:none}.small-block-grid-7>li:nth-of-type(1n){clear:none}.small-block-grid-7>li:nth-of-type(7n+1){clear:both}.small-block-grid-8>li{width:12.5%;list-style:none}.small-block-grid-8>li:nth-of-type(1n){clear:none}.small-block-grid-8>li:nth-of-type(8n+1){clear:both}.small-block-grid-9>li{width:11.11111%;list-style:none}.small-block-grid-9>li:nth-of-type(1n){clear:none}.small-block-grid-9>li:nth-of-type(9n+1){clear:both}.small-block-grid-10>li{width:10%;list-style:none}.small-block-grid-10>li:nth-of-type(1n){clear:none}.small-block-grid-10>li:nth-of-type(10n+1){clear:both}.small-block-grid-11>li{width:9.09091%;list-style:none}.small-block-grid-11>li:nth-of-type(1n){clear:none}.small-block-grid-11>li:nth-of-type(11n+1){clear:both}.small-block-grid-12>li{width:8.33333%;list-style:none}.small-block-grid-12>li:nth-of-type(1n){clear:none}.small-block-grid-12>li:nth-of-type(12n+1){clear:both}}@media only screen and (min-width: 40.063em){.medium-block-grid-1>li{width:100%;list-style:none}.medium-block-grid-1>li:nth-of-type(1n){clear:none}.medium-block-grid-1>li:nth-of-type(1n+1){clear:both}.medium-block-grid-2>li{width:50%;list-style:none}.medium-block-grid-2>li:nth-of-type(1n){clear:none}.medium-block-grid-2>li:nth-of-type(2n+1){clear:both}.medium-block-grid-3>li{width:33.33333%;list-style:none}.medium-block-grid-3>li:nth-of-type(1n){clear:none}.medium-block-grid-3>li:nth-of-type(3n+1){clear:both}.medium-block-grid-4>li{width:25%;list-style:none}.medium-block-grid-4>li:nth-of-type(1n){clear:none}.medium-block-grid-4>li:nth-of-type(4n+1){clear:both}.medium-block-grid-5>li{width:20%;list-style:none}.medium-block-grid-5>li:nth-of-type(1n){clear:none}.medium-block-grid-5>li:nth-of-type(5n+1){clear:both}.medium-block-grid-6>li{width:16.66667%;list-style:none}.medium-block-grid-6>li:nth-of-type(1n){clear:none}.medium-block-grid-6>li:nth-of-type(6n+1){clear:both}.medium-block-grid-7>li{width:14.28571%;list-style:none}.medium-block-grid-7>li:nth-of-type(1n){clear:none}.medium-block-grid-7>li:nth-of-type(7n+1){clear:both}.medium-block-grid-8>li{width:12.5%;list-style:none}.medium-block-grid-8>li:nth-of-type(1n){clear:none}.medium-block-grid-8>li:nth-of-type(8n+1){clear:both}.medium-block-grid-9>li{width:11.11111%;list-style:none}.medium-block-grid-9>li:nth-of-type(1n){clear:none}.medium-block-grid-9>li:nth-of-type(9n+1){clear:both}.medium-block-grid-10>li{width:10%;list-style:none}.medium-block-grid-10>li:nth-of-type(1n){clear:none}.medium-block-grid-10>li:nth-of-type(10n+1){clear:both}.medium-block-grid-11>li{width:9.09091%;list-style:none}.medium-block-grid-11>li:nth-of-type(1n){clear:none}.medium-block-grid-11>li:nth-of-type(11n+1){clear:both}.medium-block-grid-12>li{width:8.33333%;list-style:none}.medium-block-grid-12>li:nth-of-type(1n){clear:none}.medium-block-grid-12>li:nth-of-type(12n+1){clear:both}}@media only screen and (min-width: 64.063em){.large-block-grid-1>li{width:100%;list-style:none}.large-block-grid-1>li:nth-of-type(1n){clear:none}.large-block-grid-1>li:nth-of-type(1n+1){clear:both}.large-block-grid-2>li{width:50%;list-style:none}.large-block-grid-2>li:nth-of-type(1n){clear:none}.large-block-grid-2>li:nth-of-type(2n+1){clear:both}.large-block-grid-3>li{width:33.33333%;list-style:none}.large-block-grid-3>li:nth-of-type(1n){clear:none}.large-block-grid-3>li:nth-of-type(3n+1){clear:both}.large-block-grid-4>li{width:25%;list-style:none}.large-block-grid-4>li:nth-of-type(1n){clear:none}.large-block-grid-4>li:nth-of-type(4n+1){clear:both}.large-block-grid-5>li{width:20%;list-style:none}.large-block-grid-5>li:nth-of-type(1n){clear:none}.large-block-grid-5>li:nth-of-type(5n+1){clear:both}.large-block-grid-6>li{width:16.66667%;list-style:none}.large-block-grid-6>li:nth-of-type(1n){clear:none}.large-block-grid-6>li:nth-of-type(6n+1){clear:both}.large-block-grid-7>li{width:14.28571%;list-style:none}.large-block-grid-7>li:nth-of-type(1n){clear:none}.large-block-grid-7>li:nth-of-type(7n+1){clear:both}.large-block-grid-8>li{width:12.5%;list-style:none}.large-block-grid-8>li:nth-of-type(1n){clear:none}.large-block-grid-8>li:nth-of-type(8n+1){clear:both}.large-block-grid-9>li{width:11.11111%;list-style:none}.large-block-grid-9>li:nth-of-type(1n){clear:none}.large-block-grid-9>li:nth-of-type(9n+1){clear:both}.large-block-grid-10>li{width:10%;list-style:none}.large-block-grid-10>li:nth-of-type(1n){clear:none}.large-block-grid-10>li:nth-of-type(10n+1){clear:both}.large-block-grid-11>li{width:9.09091%;list-style:none}.large-block-grid-11>li:nth-of-type(1n){clear:none}.large-block-grid-11>li:nth-of-type(11n+1){clear:both}.large-block-grid-12>li{width:8.33333%;list-style:none}.large-block-grid-12>li:nth-of-type(1n){clear:none}.large-block-grid-12>li:nth-of-type(12n+1){clear:both}}.flex-video{position:relative;padding-top:1.5625rem;padding-bottom:67.5%;height:0;margin-bottom:1rem;overflow:hidden}.flex-video.widescreen{padding-bottom:56.34%}.flex-video.vimeo{padding-top:0}.flex-video iframe,.flex-video object,.flex-video embed,.flex-video video{position:absolute;top:0;left:0;width:100%;height:100%}.keystroke,kbd{background-color:#ededed;border-color:#ddd;color:#222;border-style:solid;border-width:1px;margin:0;font-family:\"Consolas\",\"Menlo\",\"Courier\",monospace;font-size:inherit;padding:0.125rem 0.25rem 0;border-radius:3px}.switch{padding:0;border:none;position:relative;outline:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.switch label{display:block;margin-bottom:1rem;position:relative;color:transparent;background:#ddd;text-indent:100%;width:4rem;height:2rem;cursor:pointer;transition:left 0.15s ease-out}.switch input{opacity:0;position:absolute;top:9px;left:10px;padding:0}.switch input+label{margin-left:0;margin-right:0}.switch label:after{content:\"\";display:block;background:#fff;position:absolute;top:.25rem;left:.25rem;width:1.5rem;height:1.5rem;-webkit-transition:left 0.15s ease-out;-moz-transition:left 0.15s ease-out;-o-transition:translate3d(0, 0, 0);transition:left 0.15s ease-out;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.switch input:checked+label{background:#008CBA}.switch input:checked+label:after{left:2.25rem}.switch label{width:4rem;height:2rem}.switch label:after{width:1.5rem;height:1.5rem}.switch input:checked+label:after{left:2.25rem}.switch label{color:transparent;background:#ddd}.switch label:after{background:#fff}.switch input:checked+label{background:#008CBA}.switch.large label{width:5rem;height:2.5rem}.switch.large label:after{width:2rem;height:2rem}.switch.large input:checked+label:after{left:2.75rem}.switch.small label{width:3.5rem;height:1.75rem}.switch.small label:after{width:1.25rem;height:1.25rem}.switch.small input:checked+label:after{left:2rem}.switch.tiny label{width:3rem;height:1.5rem}.switch.tiny label:after{width:1rem;height:1rem}.switch.tiny input:checked+label:after{left:1.75rem}.switch.radius label{border-radius:4px}.switch.radius label:after{border-radius:3px}.switch.round{border-radius:1000px}.switch.round label{border-radius:2rem}.switch.round label:after{border-radius:2rem}@media only screen{.show-for-small-only,.show-for-small-up,.show-for-small,.show-for-small-down,.hide-for-medium-only,.hide-for-medium-up,.hide-for-medium,.show-for-medium-down,.hide-for-large-only,.hide-for-large-up,.hide-for-large,.show-for-large-down,.hide-for-xlarge-only,.hide-for-xlarge-up,.hide-for-xlarge,.show-for-xlarge-down,.hide-for-xxlarge-only,.hide-for-xxlarge-up,.hide-for-xxlarge,.show-for-xxlarge-down{display:inherit !important}.hide-for-small-only,.hide-for-small-up,.hide-for-small,.hide-for-small-down,.show-for-medium-only,.show-for-medium-up,.show-for-medium,.hide-for-medium-down,.show-for-large-only,.show-for-large-up,.show-for-large,.hide-for-large-down,.show-for-xlarge-only,.show-for-xlarge-up,.show-for-xlarge,.hide-for-xlarge-down,.show-for-xxlarge-only,.show-for-xxlarge-up,.show-for-xxlarge,.hide-for-xxlarge-down{display:none !important}.visible-for-small-only,.visible-for-small-up,.visible-for-small,.visible-for-small-down,.hidden-for-medium-only,.hidden-for-medium-up,.hidden-for-medium,.visible-for-medium-down,.hidden-for-large-only,.hidden-for-large-up,.hidden-for-large,.visible-for-large-down,.hidden-for-xlarge-only,.hidden-for-xlarge-up,.hidden-for-xlarge,.visible-for-xlarge-down,.hidden-for-xxlarge-only,.hidden-for-xxlarge-up,.hidden-for-xxlarge,.visible-for-xxlarge-down{position:static !important;height:auto;width:auto;overflow:visible;clip:auto}.hidden-for-small-only,.hidden-for-small-up,.hidden-for-small,.hidden-for-small-down,.visible-for-medium-only,.visible-for-medium-up,.visible-for-medium,.hidden-for-medium-down,.visible-for-large-only,.visible-for-large-up,.visible-for-large,.hidden-for-large-down,.visible-for-xlarge-only,.visible-for-xlarge-up,.visible-for-xlarge,.hidden-for-xlarge-down,.visible-for-xxlarge-only,.visible-for-xxlarge-up,.visible-for-xxlarge,.hidden-for-xxlarge-down{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}table.show-for-small-only,table.show-for-small-up,table.show-for-small,table.show-for-small-down,table.hide-for-medium-only,table.hide-for-medium-up,table.hide-for-medium,table.show-for-medium-down,table.hide-for-large-only,table.hide-for-large-up,table.hide-for-large,table.show-for-large-down,table.hide-for-xlarge-only,table.hide-for-xlarge-up,table.hide-for-xlarge,table.show-for-xlarge-down,table.hide-for-xxlarge-only,table.hide-for-xxlarge-up,table.hide-for-xxlarge,table.show-for-xxlarge-down{display:table !important}thead.show-for-small-only,thead.show-for-small-up,thead.show-for-small,thead.show-for-small-down,thead.hide-for-medium-only,thead.hide-for-medium-up,thead.hide-for-medium,thead.show-for-medium-down,thead.hide-for-large-only,thead.hide-for-large-up,thead.hide-for-large,thead.show-for-large-down,thead.hide-for-xlarge-only,thead.hide-for-xlarge-up,thead.hide-for-xlarge,thead.show-for-xlarge-down,thead.hide-for-xxlarge-only,thead.hide-for-xxlarge-up,thead.hide-for-xxlarge,thead.show-for-xxlarge-down{display:table-header-group !important}tbody.show-for-small-only,tbody.show-for-small-up,tbody.show-for-small,tbody.show-for-small-down,tbody.hide-for-medium-only,tbody.hide-for-medium-up,tbody.hide-for-medium,tbody.show-for-medium-down,tbody.hide-for-large-only,tbody.hide-for-large-up,tbody.hide-for-large,tbody.show-for-large-down,tbody.hide-for-xlarge-only,tbody.hide-for-xlarge-up,tbody.hide-for-xlarge,tbody.show-for-xlarge-down,tbody.hide-for-xxlarge-only,tbody.hide-for-xxlarge-up,tbody.hide-for-xxlarge,tbody.show-for-xxlarge-down{display:table-row-group !important}tr.show-for-small-only,tr.show-for-small-up,tr.show-for-small,tr.show-for-small-down,tr.hide-for-medium-only,tr.hide-for-medium-up,tr.hide-for-medium,tr.show-for-medium-down,tr.hide-for-large-only,tr.hide-for-large-up,tr.hide-for-large,tr.show-for-large-down,tr.hide-for-xlarge-only,tr.hide-for-xlarge-up,tr.hide-for-xlarge,tr.show-for-xlarge-down,tr.hide-for-xxlarge-only,tr.hide-for-xxlarge-up,tr.hide-for-xxlarge,tr.show-for-xxlarge-down{display:table-row}th.show-for-small-only,td.show-for-small-only,th.show-for-small-up,td.show-for-small-up,th.show-for-small,td.show-for-small,th.show-for-small-down,td.show-for-small-down,th.hide-for-medium-only,td.hide-for-medium-only,th.hide-for-medium-up,td.hide-for-medium-up,th.hide-for-medium,td.hide-for-medium,th.show-for-medium-down,td.show-for-medium-down,th.hide-for-large-only,td.hide-for-large-only,th.hide-for-large-up,td.hide-for-large-up,th.hide-for-large,td.hide-for-large,th.show-for-large-down,td.show-for-large-down,th.hide-for-xlarge-only,td.hide-for-xlarge-only,th.hide-for-xlarge-up,td.hide-for-xlarge-up,th.hide-for-xlarge,td.hide-for-xlarge,th.show-for-xlarge-down,td.show-for-xlarge-down,th.hide-for-xxlarge-only,td.hide-for-xxlarge-only,th.hide-for-xxlarge-up,td.hide-for-xxlarge-up,th.hide-for-xxlarge,td.hide-for-xxlarge,th.show-for-xxlarge-down,td.show-for-xxlarge-down{display:table-cell !important}}@media only screen and (min-width: 40.063em){.hide-for-small-only,.show-for-small-up,.hide-for-small,.hide-for-small-down,.show-for-medium-only,.show-for-medium-up,.show-for-medium,.show-for-medium-down,.hide-for-large-only,.hide-for-large-up,.hide-for-large,.show-for-large-down,.hide-for-xlarge-only,.hide-for-xlarge-up,.hide-for-xlarge,.show-for-xlarge-down,.hide-for-xxlarge-only,.hide-for-xxlarge-up,.hide-for-xxlarge,.show-for-xxlarge-down{display:inherit !important}.show-for-small-only,.hide-for-small-up,.show-for-small,.show-for-small-down,.hide-for-medium-only,.hide-for-medium-up,.hide-for-medium,.hide-for-medium-down,.show-for-large-only,.show-for-large-up,.show-for-large,.hide-for-large-down,.show-for-xlarge-only,.show-for-xlarge-up,.show-for-xlarge,.hide-for-xlarge-down,.show-for-xxlarge-only,.show-for-xxlarge-up,.show-for-xxlarge,.hide-for-xxlarge-down{display:none !important}.hidden-for-small-only,.visible-for-small-up,.hidden-for-small,.hidden-for-small-down,.visible-for-medium-only,.visible-for-medium-up,.visible-for-medium,.visible-for-medium-down,.hidden-for-large-only,.hidden-for-large-up,.hidden-for-large,.visible-for-large-down,.hidden-for-xlarge-only,.hidden-for-xlarge-up,.hidden-for-xlarge,.visible-for-xlarge-down,.hidden-for-xxlarge-only,.hidden-for-xxlarge-up,.hidden-for-xxlarge,.visible-for-xxlarge-down{position:static !important;height:auto;width:auto;overflow:visible;clip:auto}.visible-for-small-only,.hidden-for-small-up,.visible-for-small,.visible-for-small-down,.hidden-for-medium-only,.hidden-for-medium-up,.hidden-for-medium,.hidden-for-medium-down,.visible-for-large-only,.visible-for-large-up,.visible-for-large,.hidden-for-large-down,.visible-for-xlarge-only,.visible-for-xlarge-up,.visible-for-xlarge,.hidden-for-xlarge-down,.visible-for-xxlarge-only,.visible-for-xxlarge-up,.visible-for-xxlarge,.hidden-for-xxlarge-down{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}table.hide-for-small-only,table.show-for-small-up,table.hide-for-small,table.hide-for-small-down,table.show-for-medium-only,table.show-for-medium-up,table.show-for-medium,table.show-for-medium-down,table.hide-for-large-only,table.hide-for-large-up,table.hide-for-large,table.show-for-large-down,table.hide-for-xlarge-only,table.hide-for-xlarge-up,table.hide-for-xlarge,table.show-for-xlarge-down,table.hide-for-xxlarge-only,table.hide-for-xxlarge-up,table.hide-for-xxlarge,table.show-for-xxlarge-down{display:table !important}thead.hide-for-small-only,thead.show-for-small-up,thead.hide-for-small,thead.hide-for-small-down,thead.show-for-medium-only,thead.show-for-medium-up,thead.show-for-medium,thead.show-for-medium-down,thead.hide-for-large-only,thead.hide-for-large-up,thead.hide-for-large,thead.show-for-large-down,thead.hide-for-xlarge-only,thead.hide-for-xlarge-up,thead.hide-for-xlarge,thead.show-for-xlarge-down,thead.hide-for-xxlarge-only,thead.hide-for-xxlarge-up,thead.hide-for-xxlarge,thead.show-for-xxlarge-down{display:table-header-group !important}tbody.hide-for-small-only,tbody.show-for-small-up,tbody.hide-for-small,tbody.hide-for-small-down,tbody.show-for-medium-only,tbody.show-for-medium-up,tbody.show-for-medium,tbody.show-for-medium-down,tbody.hide-for-large-only,tbody.hide-for-large-up,tbody.hide-for-large,tbody.show-for-large-down,tbody.hide-for-xlarge-only,tbody.hide-for-xlarge-up,tbody.hide-for-xlarge,tbody.show-for-xlarge-down,tbody.hide-for-xxlarge-only,tbody.hide-for-xxlarge-up,tbody.hide-for-xxlarge,tbody.show-for-xxlarge-down{display:table-row-group !important}tr.hide-for-small-only,tr.show-for-small-up,tr.hide-for-small,tr.hide-for-small-down,tr.show-for-medium-only,tr.show-for-medium-up,tr.show-for-medium,tr.show-for-medium-down,tr.hide-for-large-only,tr.hide-for-large-up,tr.hide-for-large,tr.show-for-large-down,tr.hide-for-xlarge-only,tr.hide-for-xlarge-up,tr.hide-for-xlarge,tr.show-for-xlarge-down,tr.hide-for-xxlarge-only,tr.hide-for-xxlarge-up,tr.hide-for-xxlarge,tr.show-for-xxlarge-down{display:table-row}th.hide-for-small-only,td.hide-for-small-only,th.show-for-small-up,td.show-for-small-up,th.hide-for-small,td.hide-for-small,th.hide-for-small-down,td.hide-for-small-down,th.show-for-medium-only,td.show-for-medium-only,th.show-for-medium-up,td.show-for-medium-up,th.show-for-medium,td.show-for-medium,th.show-for-medium-down,td.show-for-medium-down,th.hide-for-large-only,td.hide-for-large-only,th.hide-for-large-up,td.hide-for-large-up,th.hide-for-large,td.hide-for-large,th.show-for-large-down,td.show-for-large-down,th.hide-for-xlarge-only,td.hide-for-xlarge-only,th.hide-for-xlarge-up,td.hide-for-xlarge-up,th.hide-for-xlarge,td.hide-for-xlarge,th.show-for-xlarge-down,td.show-for-xlarge-down,th.hide-for-xxlarge-only,td.hide-for-xxlarge-only,th.hide-for-xxlarge-up,td.hide-for-xxlarge-up,th.hide-for-xxlarge,td.hide-for-xxlarge,th.show-for-xxlarge-down,td.show-for-xxlarge-down{display:table-cell !important}}@media only screen and (min-width: 64.063em){.hide-for-small-only,.show-for-small-up,.hide-for-small,.hide-for-small-down,.hide-for-medium-only,.show-for-medium-up,.hide-for-medium,.hide-for-medium-down,.show-for-large-only,.show-for-large-up,.show-for-large,.show-for-large-down,.hide-for-xlarge-only,.hide-for-xlarge-up,.hide-for-xlarge,.show-for-xlarge-down,.hide-for-xxlarge-only,.hide-for-xxlarge-up,.hide-for-xxlarge,.show-for-xxlarge-down{display:inherit !important}.show-for-small-only,.hide-for-small-up,.show-for-small,.show-for-small-down,.show-for-medium-only,.hide-for-medium-up,.show-for-medium,.show-for-medium-down,.hide-for-large-only,.hide-for-large-up,.hide-for-large,.hide-for-large-down,.show-for-xlarge-only,.show-for-xlarge-up,.show-for-xlarge,.hide-for-xlarge-down,.show-for-xxlarge-only,.show-for-xxlarge-up,.show-for-xxlarge,.hide-for-xxlarge-down{display:none !important}.hidden-for-small-only,.visible-for-small-up,.hidden-for-small,.hidden-for-small-down,.hidden-for-medium-only,.visible-for-medium-up,.hidden-for-medium,.hidden-for-medium-down,.visible-for-large-only,.visible-for-large-up,.visible-for-large,.visible-for-large-down,.hidden-for-xlarge-only,.hidden-for-xlarge-up,.hidden-for-xlarge,.visible-for-xlarge-down,.hidden-for-xxlarge-only,.hidden-for-xxlarge-up,.hidden-for-xxlarge,.visible-for-xxlarge-down{position:static !important;height:auto;width:auto;overflow:visible;clip:auto}.visible-for-small-only,.hidden-for-small-up,.visible-for-small,.visible-for-small-down,.visible-for-medium-only,.hidden-for-medium-up,.visible-for-medium,.visible-for-medium-down,.hidden-for-large-only,.hidden-for-large-up,.hidden-for-large,.hidden-for-large-down,.visible-for-xlarge-only,.visible-for-xlarge-up,.visible-for-xlarge,.hidden-for-xlarge-down,.visible-for-xxlarge-only,.visible-for-xxlarge-up,.visible-for-xxlarge,.hidden-for-xxlarge-down{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}table.hide-for-small-only,table.show-for-small-up,table.hide-for-small,table.hide-for-small-down,table.hide-for-medium-only,table.show-for-medium-up,table.hide-for-medium,table.hide-for-medium-down,table.show-for-large-only,table.show-for-large-up,table.show-for-large,table.show-for-large-down,table.hide-for-xlarge-only,table.hide-for-xlarge-up,table.hide-for-xlarge,table.show-for-xlarge-down,table.hide-for-xxlarge-only,table.hide-for-xxlarge-up,table.hide-for-xxlarge,table.show-for-xxlarge-down{display:table !important}thead.hide-for-small-only,thead.show-for-small-up,thead.hide-for-small,thead.hide-for-small-down,thead.hide-for-medium-only,thead.show-for-medium-up,thead.hide-for-medium,thead.hide-for-medium-down,thead.show-for-large-only,thead.show-for-large-up,thead.show-for-large,thead.show-for-large-down,thead.hide-for-xlarge-only,thead.hide-for-xlarge-up,thead.hide-for-xlarge,thead.show-for-xlarge-down,thead.hide-for-xxlarge-only,thead.hide-for-xxlarge-up,thead.hide-for-xxlarge,thead.show-for-xxlarge-down{display:table-header-group !important}tbody.hide-for-small-only,tbody.show-for-small-up,tbody.hide-for-small,tbody.hide-for-small-down,tbody.hide-for-medium-only,tbody.show-for-medium-up,tbody.hide-for-medium,tbody.hide-for-medium-down,tbody.show-for-large-only,tbody.show-for-large-up,tbody.show-for-large,tbody.show-for-large-down,tbody.hide-for-xlarge-only,tbody.hide-for-xlarge-up,tbody.hide-for-xlarge,tbody.show-for-xlarge-down,tbody.hide-for-xxlarge-only,tbody.hide-for-xxlarge-up,tbody.hide-for-xxlarge,tbody.show-for-xxlarge-down{display:table-row-group !important}tr.hide-for-small-only,tr.show-for-small-up,tr.hide-for-small,tr.hide-for-small-down,tr.hide-for-medium-only,tr.show-for-medium-up,tr.hide-for-medium,tr.hide-for-medium-down,tr.show-for-large-only,tr.show-for-large-up,tr.show-for-large,tr.show-for-large-down,tr.hide-for-xlarge-only,tr.hide-for-xlarge-up,tr.hide-for-xlarge,tr.show-for-xlarge-down,tr.hide-for-xxlarge-only,tr.hide-for-xxlarge-up,tr.hide-for-xxlarge,tr.show-for-xxlarge-down{display:table-row}th.hide-for-small-only,td.hide-for-small-only,th.show-for-small-up,td.show-for-small-up,th.hide-for-small,td.hide-for-small,th.hide-for-small-down,td.hide-for-small-down,th.hide-for-medium-only,td.hide-for-medium-only,th.show-for-medium-up,td.show-for-medium-up,th.hide-for-medium,td.hide-for-medium,th.hide-for-medium-down,td.hide-for-medium-down,th.show-for-large-only,td.show-for-large-only,th.show-for-large-up,td.show-for-large-up,th.show-for-large,td.show-for-large,th.show-for-large-down,td.show-for-large-down,th.hide-for-xlarge-only,td.hide-for-xlarge-only,th.hide-for-xlarge-up,td.hide-for-xlarge-up,th.hide-for-xlarge,td.hide-for-xlarge,th.show-for-xlarge-down,td.show-for-xlarge-down,th.hide-for-xxlarge-only,td.hide-for-xxlarge-only,th.hide-for-xxlarge-up,td.hide-for-xxlarge-up,th.hide-for-xxlarge,td.hide-for-xxlarge,th.show-for-xxlarge-down,td.show-for-xxlarge-down{display:table-cell !important}}@media only screen and (min-width: 90.063em){.hide-for-small-only,.show-for-small-up,.hide-for-small,.hide-for-small-down,.hide-for-medium-only,.show-for-medium-up,.hide-for-medium,.hide-for-medium-down,.hide-for-large-only,.show-for-large-up,.hide-for-large,.hide-for-large-down,.show-for-xlarge-only,.show-for-xlarge-up,.show-for-xlarge,.show-for-xlarge-down,.hide-for-xxlarge-only,.hide-for-xxlarge-up,.hide-for-xxlarge,.show-for-xxlarge-down{display:inherit !important}.show-for-small-only,.hide-for-small-up,.show-for-small,.show-for-small-down,.show-for-medium-only,.hide-for-medium-up,.show-for-medium,.show-for-medium-down,.show-for-large-only,.hide-for-large-up,.show-for-large,.show-for-large-down,.hide-for-xlarge-only,.hide-for-xlarge-up,.hide-for-xlarge,.hide-for-xlarge-down,.show-for-xxlarge-only,.show-for-xxlarge-up,.show-for-xxlarge,.hide-for-xxlarge-down{display:none !important}.hidden-for-small-only,.visible-for-small-up,.hidden-for-small,.hidden-for-small-down,.hidden-for-medium-only,.visible-for-medium-up,.hidden-for-medium,.hidden-for-medium-down,.hidden-for-large-only,.visible-for-large-up,.hidden-for-large,.hidden-for-large-down,.visible-for-xlarge-only,.visible-for-xlarge-up,.visible-for-xlarge,.visible-for-xlarge-down,.hidden-for-xxlarge-only,.hidden-for-xxlarge-up,.hidden-for-xxlarge,.visible-for-xxlarge-down{position:static !important;height:auto;width:auto;overflow:visible;clip:auto}.visible-for-small-only,.hidden-for-small-up,.visible-for-small,.visible-for-small-down,.visible-for-medium-only,.hidden-for-medium-up,.visible-for-medium,.visible-for-medium-down,.visible-for-large-only,.hidden-for-large-up,.visible-for-large,.visible-for-large-down,.hidden-for-xlarge-only,.hidden-for-xlarge-up,.hidden-for-xlarge,.hidden-for-xlarge-down,.visible-for-xxlarge-only,.visible-for-xxlarge-up,.visible-for-xxlarge,.hidden-for-xxlarge-down{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}table.hide-for-small-only,table.show-for-small-up,table.hide-for-small,table.hide-for-small-down,table.hide-for-medium-only,table.show-for-medium-up,table.hide-for-medium,table.hide-for-medium-down,table.hide-for-large-only,table.show-for-large-up,table.hide-for-large,table.hide-for-large-down,table.show-for-xlarge-only,table.show-for-xlarge-up,table.show-for-xlarge,table.show-for-xlarge-down,table.hide-for-xxlarge-only,table.hide-for-xxlarge-up,table.hide-for-xxlarge,table.show-for-xxlarge-down{display:table !important}thead.hide-for-small-only,thead.show-for-small-up,thead.hide-for-small,thead.hide-for-small-down,thead.hide-for-medium-only,thead.show-for-medium-up,thead.hide-for-medium,thead.hide-for-medium-down,thead.hide-for-large-only,thead.show-for-large-up,thead.hide-for-large,thead.hide-for-large-down,thead.show-for-xlarge-only,thead.show-for-xlarge-up,thead.show-for-xlarge,thead.show-for-xlarge-down,thead.hide-for-xxlarge-only,thead.hide-for-xxlarge-up,thead.hide-for-xxlarge,thead.show-for-xxlarge-down{display:table-header-group !important}tbody.hide-for-small-only,tbody.show-for-small-up,tbody.hide-for-small,tbody.hide-for-small-down,tbody.hide-for-medium-only,tbody.show-for-medium-up,tbody.hide-for-medium,tbody.hide-for-medium-down,tbody.hide-for-large-only,tbody.show-for-large-up,tbody.hide-for-large,tbody.hide-for-large-down,tbody.show-for-xlarge-only,tbody.show-for-xlarge-up,tbody.show-for-xlarge,tbody.show-for-xlarge-down,tbody.hide-for-xxlarge-only,tbody.hide-for-xxlarge-up,tbody.hide-for-xxlarge,tbody.show-for-xxlarge-down{display:table-row-group !important}tr.hide-for-small-only,tr.show-for-small-up,tr.hide-for-small,tr.hide-for-small-down,tr.hide-for-medium-only,tr.show-for-medium-up,tr.hide-for-medium,tr.hide-for-medium-down,tr.hide-for-large-only,tr.show-for-large-up,tr.hide-for-large,tr.hide-for-large-down,tr.show-for-xlarge-only,tr.show-for-xlarge-up,tr.show-for-xlarge,tr.show-for-xlarge-down,tr.hide-for-xxlarge-only,tr.hide-for-xxlarge-up,tr.hide-for-xxlarge,tr.show-for-xxlarge-down{display:table-row}th.hide-for-small-only,td.hide-for-small-only,th.show-for-small-up,td.show-for-small-up,th.hide-for-small,td.hide-for-small,th.hide-for-small-down,td.hide-for-small-down,th.hide-for-medium-only,td.hide-for-medium-only,th.show-for-medium-up,td.show-for-medium-up,th.hide-for-medium,td.hide-for-medium,th.hide-for-medium-down,td.hide-for-medium-down,th.hide-for-large-only,td.hide-for-large-only,th.show-for-large-up,td.show-for-large-up,th.hide-for-large,td.hide-for-large,th.hide-for-large-down,td.hide-for-large-down,th.show-for-xlarge-only,td.show-for-xlarge-only,th.show-for-xlarge-up,td.show-for-xlarge-up,th.show-for-xlarge,td.show-for-xlarge,th.show-for-xlarge-down,td.show-for-xlarge-down,th.hide-for-xxlarge-only,td.hide-for-xxlarge-only,th.hide-for-xxlarge-up,td.hide-for-xxlarge-up,th.hide-for-xxlarge,td.hide-for-xxlarge,th.show-for-xxlarge-down,td.show-for-xxlarge-down{display:table-cell !important}}@media only screen and (min-width: 120.063em){.hide-for-small-only,.show-for-small-up,.hide-for-small,.hide-for-small-down,.hide-for-medium-only,.show-for-medium-up,.hide-for-medium,.hide-for-medium-down,.hide-for-large-only,.show-for-large-up,.hide-for-large,.hide-for-large-down,.hide-for-xlarge-only,.show-for-xlarge-up,.hide-for-xlarge,.hide-for-xlarge-down,.show-for-xxlarge-only,.show-for-xxlarge-up,.show-for-xxlarge,.show-for-xxlarge-down{display:inherit !important}.show-for-small-only,.hide-for-small-up,.show-for-small,.show-for-small-down,.show-for-medium-only,.hide-for-medium-up,.show-for-medium,.show-for-medium-down,.show-for-large-only,.hide-for-large-up,.show-for-large,.show-for-large-down,.show-for-xlarge-only,.hide-for-xlarge-up,.show-for-xlarge,.show-for-xlarge-down,.hide-for-xxlarge-only,.hide-for-xxlarge-up,.hide-for-xxlarge,.hide-for-xxlarge-down{display:none !important}.hidden-for-small-only,.visible-for-small-up,.hidden-for-small,.hidden-for-small-down,.hidden-for-medium-only,.visible-for-medium-up,.hidden-for-medium,.hidden-for-medium-down,.hidden-for-large-only,.visible-for-large-up,.hidden-for-large,.hidden-for-large-down,.hidden-for-xlarge-only,.visible-for-xlarge-up,.hidden-for-xlarge,.hidden-for-xlarge-down,.visible-for-xxlarge-only,.visible-for-xxlarge-up,.visible-for-xxlarge,.visible-for-xxlarge-down{position:static !important;height:auto;width:auto;overflow:visible;clip:auto}.visible-for-small-only,.hidden-for-small-up,.visible-for-small,.visible-for-small-down,.visible-for-medium-only,.hidden-for-medium-up,.visible-for-medium,.visible-for-medium-down,.visible-for-large-only,.hidden-for-large-up,.visible-for-large,.visible-for-large-down,.visible-for-xlarge-only,.hidden-for-xlarge-up,.visible-for-xlarge,.visible-for-xlarge-down,.hidden-for-xxlarge-only,.hidden-for-xxlarge-up,.hidden-for-xxlarge,.hidden-for-xxlarge-down{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}table.hide-for-small-only,table.show-for-small-up,table.hide-for-small,table.hide-for-small-down,table.hide-for-medium-only,table.show-for-medium-up,table.hide-for-medium,table.hide-for-medium-down,table.hide-for-large-only,table.show-for-large-up,table.hide-for-large,table.hide-for-large-down,table.hide-for-xlarge-only,table.show-for-xlarge-up,table.hide-for-xlarge,table.hide-for-xlarge-down,table.show-for-xxlarge-only,table.show-for-xxlarge-up,table.show-for-xxlarge,table.show-for-xxlarge-down{display:table !important}thead.hide-for-small-only,thead.show-for-small-up,thead.hide-for-small,thead.hide-for-small-down,thead.hide-for-medium-only,thead.show-for-medium-up,thead.hide-for-medium,thead.hide-for-medium-down,thead.hide-for-large-only,thead.show-for-large-up,thead.hide-for-large,thead.hide-for-large-down,thead.hide-for-xlarge-only,thead.show-for-xlarge-up,thead.hide-for-xlarge,thead.hide-for-xlarge-down,thead.show-for-xxlarge-only,thead.show-for-xxlarge-up,thead.show-for-xxlarge,thead.show-for-xxlarge-down{display:table-header-group !important}tbody.hide-for-small-only,tbody.show-for-small-up,tbody.hide-for-small,tbody.hide-for-small-down,tbody.hide-for-medium-only,tbody.show-for-medium-up,tbody.hide-for-medium,tbody.hide-for-medium-down,tbody.hide-for-large-only,tbody.show-for-large-up,tbody.hide-for-large,tbody.hide-for-large-down,tbody.hide-for-xlarge-only,tbody.show-for-xlarge-up,tbody.hide-for-xlarge,tbody.hide-for-xlarge-down,tbody.show-for-xxlarge-only,tbody.show-for-xxlarge-up,tbody.show-for-xxlarge,tbody.show-for-xxlarge-down{display:table-row-group !important}tr.hide-for-small-only,tr.show-for-small-up,tr.hide-for-small,tr.hide-for-small-down,tr.hide-for-medium-only,tr.show-for-medium-up,tr.hide-for-medium,tr.hide-for-medium-down,tr.hide-for-large-only,tr.show-for-large-up,tr.hide-for-large,tr.hide-for-large-down,tr.hide-for-xlarge-only,tr.show-for-xlarge-up,tr.hide-for-xlarge,tr.hide-for-xlarge-down,tr.show-for-xxlarge-only,tr.show-for-xxlarge-up,tr.show-for-xxlarge,tr.show-for-xxlarge-down{display:table-row}th.hide-for-small-only,td.hide-for-small-only,th.show-for-small-up,td.show-for-small-up,th.hide-for-small,td.hide-for-small,th.hide-for-small-down,td.hide-for-small-down,th.hide-for-medium-only,td.hide-for-medium-only,th.show-for-medium-up,td.show-for-medium-up,th.hide-for-medium,td.hide-for-medium,th.hide-for-medium-down,td.hide-for-medium-down,th.hide-for-large-only,td.hide-for-large-only,th.show-for-large-up,td.show-for-large-up,th.hide-for-large,td.hide-for-large,th.hide-for-large-down,td.hide-for-large-down,th.hide-for-xlarge-only,td.hide-for-xlarge-only,th.show-for-xlarge-up,td.show-for-xlarge-up,th.hide-for-xlarge,td.hide-for-xlarge,th.hide-for-xlarge-down,td.hide-for-xlarge-down,th.show-for-xxlarge-only,td.show-for-xxlarge-only,th.show-for-xxlarge-up,td.show-for-xxlarge-up,th.show-for-xxlarge,td.show-for-xxlarge,th.show-for-xxlarge-down,td.show-for-xxlarge-down{display:table-cell !important}}.show-for-landscape,.hide-for-portrait{display:inherit !important}.hide-for-landscape,.show-for-portrait{display:none !important}table.hide-for-landscape,table.show-for-portrait{display:table !important}thead.hide-for-landscape,thead.show-for-portrait{display:table-header-group !important}tbody.hide-for-landscape,tbody.show-for-portrait{display:table-row-group !important}tr.hide-for-landscape,tr.show-for-portrait{display:table-row !important}td.hide-for-landscape,td.show-for-portrait,th.hide-for-landscape,th.show-for-portrait{display:table-cell !important}@media only screen and (orientation: landscape){.show-for-landscape,.hide-for-portrait{display:inherit !important}.hide-for-landscape,.show-for-portrait{display:none !important}table.show-for-landscape,table.hide-for-portrait{display:table !important}thead.show-for-landscape,thead.hide-for-portrait{display:table-header-group !important}tbody.show-for-landscape,tbody.hide-for-portrait{display:table-row-group !important}tr.show-for-landscape,tr.hide-for-portrait{display:table-row !important}td.show-for-landscape,td.hide-for-portrait,th.show-for-landscape,th.hide-for-portrait{display:table-cell !important}}@media only screen and (orientation: portrait){.show-for-portrait,.hide-for-landscape{display:inherit !important}.hide-for-portrait,.show-for-landscape{display:none !important}table.show-for-portrait,table.hide-for-landscape{display:table !important}thead.show-for-portrait,thead.hide-for-landscape{display:table-header-group !important}tbody.show-for-portrait,tbody.hide-for-landscape{display:table-row-group !important}tr.show-for-portrait,tr.hide-for-landscape{display:table-row !important}td.show-for-portrait,td.hide-for-landscape,th.show-for-portrait,th.hide-for-landscape{display:table-cell !important}}.show-for-touch{display:none !important}.hide-for-touch{display:inherit !important}.touch .show-for-touch{display:inherit !important}.touch .hide-for-touch{display:none !important}table.hide-for-touch{display:table !important}.touch table.show-for-touch{display:table !important}thead.hide-for-touch{display:table-header-group !important}.touch thead.show-for-touch{display:table-header-group !important}tbody.hide-for-touch{display:table-row-group !important}.touch tbody.show-for-touch{display:table-row-group !important}tr.hide-for-touch{display:table-row !important}.touch tr.show-for-touch{display:table-row !important}td.hide-for-touch{display:table-cell !important}.touch td.show-for-touch{display:table-cell !important}th.hide-for-touch{display:table-cell !important}.touch th.show-for-touch{display:table-cell !important}.print-only{display:none !important}@media print{*{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}.show-for-print{display:block}.hide-for-print{display:none}table.show-for-print{display:table !important}thead.show-for-print{display:table-header-group !important}tbody.show-for-print{display:table-row-group !important}tr.show-for-print{display:table-row !important}td.show-for-print{display:table-cell !important}th.show-for-print{display:table-cell !important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}.ir a:after,a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}@page{margin:0.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.hide-on-print{display:none !important}.print-only{display:block !important}.hide-for-print{display:none !important}.show-for-print{display:inherit !important}}@media print{.show-for-print{display:block}.hide-for-print{display:none}table.show-for-print{display:table !important}thead.show-for-print{display:table-header-group !important}tbody.show-for-print{display:table-row-group !important}tr.show-for-print{display:table-row !important}td.show-for-print{display:table-cell !important}th.show-for-print{display:table-cell !important}}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* Interactive interface */

	module.exports = {
	  initialise: initialise,
	}

	const $ = window.$ = window.jQuery = __webpack_require__(31)

	const calc = __webpack_require__(32)


	// Private
	var form
	var prevDistanceUnits

	function majorError(message) {
	  // Log a major error
	  window.alert(message)
	}

	function onSelectCommonResolution(e) {
	  var resWidth, resHeight
	  switch (e.target.id) {
	    case 'res-4k':
	      resWidth = 3840
	      resHeight = 2160
	      break

	    case 'res-1080p':
	      resWidth = 1920
	      resHeight = 1080
	      break

	    case 'res-720p':
	      resWidth = 1280
	      resHeight = 720
	      break

	    case 'res-1440p':
	      resWidth = 2560
	      resHeight = 1440
	      break

	    case 'res-5k':
	      resWidth = 5120
	      resHeight = 2880
	      break

	    default:
	      majorError('Major Error\nUnknown selected resolution: ' + e.target.id)
	  }

	  form.resWidth.val(resWidth)
	  form.resHeight.val(resHeight)

	  circuit()
	}


	function onDiagonalUnitsChange() {
	  var diagonalUnits = form.diagonalActiveUnit().val()

	  // Update diagonal length
	  var DSF
	  if (diagonalUnits === 'cm') {
	    DSF = 2.54
	  } else {  // inches
	    DSF = 1 / 2.54
	  }
	  var newLength = Math.round(DSF * parseInt(form.diagonalLength.val(), 10))
	  form.diagonalLength.val(newLength)

	  // Update text
	  if (diagonalUnits === 'cm') {
	    $('#monitor-size-units').text('cm')
	    $("label[for='ppu']").text('PPCM:')
	    $("label[for='scaled-ppu']").text('Scaled PPCM:')
	  } else {
	    $('#monitor-size-units').text('inches')
	    $("label[for='ppu']").text('PPI:')
	    $("label[for='scaled-ppu']").text('Scaled PPI:')
	  }

	  updateDiagonalButtons()
	}

	function onDistanceUnitsChange() {
	  updateDistanceSlider()
	  updateDistanceButtons()
	  updateDistanceText()
	}


	function _selectButton(buttonsList, activeInput) {
	  var currentSelectedValue = activeInput.val()
	  buttonsList.each(function() {
	    var correspondingInput = $('#' + $(this).attr('for'))
	    if (correspondingInput.val() === currentSelectedValue) {
	      $(this).removeClass('secondary')
	    } else {
	      $(this).addClass('secondary')
	    }
	  })
	}

	function updateDiagonalButtons() {
	  _selectButton(form.diagonalButtons, form.diagonalActiveUnit())
	}

	function updateDistanceButtons() {
	  _selectButton(form.distanceButtons, form.distanceActiveUnit())
	}

	function updateScalingButtons() {
	  _selectButton(form.scalingButtons, form.scalingActiveInput())
	}

	function updateDistanceSlider() {
	  var distanceUnits = form.distanceActiveUnit().val()
	  var DSF
	  if (prevDistanceUnits === 'inches' && distanceUnits === 'cm') {
	    DSF = 2.54
	  } else if (prevDistanceUnits === 'cm' && distanceUnits === 'inches') {
	    DSF = 0.393700
	  } else if (prevDistanceUnits === 'inches' && distanceUnits === 'feet') {
	    DSF = 0.083333 // 1 / 12
	  } else if (prevDistanceUnits === 'feet' && distanceUnits === 'inches') {
	    DSF = 12
	  } else if (prevDistanceUnits === 'inches' && distanceUnits === 'm') {
	    DSF = 0.0254 // 2.54 / 100
	  } else if (prevDistanceUnits === 'm' && distanceUnits === 'inches') {
	    DSF = 39.37
	  } else if (prevDistanceUnits === 'cm' && distanceUnits === 'feet') {
	    DSF = 0.032808 // 1 / 30.48
	  } else if (prevDistanceUnits === 'feet' && distanceUnits === 'cm') {
	    DSF = 30.48
	  } else if (prevDistanceUnits === 'cm' && distanceUnits === 'm') {
	    DSF = 0.01 // 1 / 100
	  } else if (prevDistanceUnits === 'm' && distanceUnits === 'cm') {
	    DSF = 100
	  } else if (prevDistanceUnits === 'feet' && distanceUnits === 'm') {
	    DSF = 0.3048 // 30.48 / 100
	  } else if (prevDistanceUnits === 'm' && distanceUnits === 'feet') {
	    DSF = 3.280839
	  } else if (prevDistanceUnits === distanceUnits) {
	    DSF = 1
	  } else {
	    window.alert('Bug - unknown distance units')
	  }

	  var maxSize
	  var stepSize = 1
	  if (distanceUnits === 'inches') {
	    maxSize = 100
	  } else if (distanceUnits === 'cm') {
	    maxSize = 100
	  } else if (distanceUnits === 'feet') {
	    maxSize = 30
	  } else if (distanceUnits === 'm') {
	    maxSize = 10
	    stepSize = 0.1
	  }

	  prevDistanceUnits = distanceUnits

	  // Update diagonal length
	  var oldDistance = parseFloat(form.distance.val(), 10)
	  var newDistance = stepSize * Math.round(DSF * (1 / stepSize) * oldDistance)

	  form.distance.attr('max', maxSize).attr('step', stepSize).val(newDistance)
	}

	function updateDistanceText() {
	  form.distanceNumberText.val(form.distance.val())
	  var unitsText = form.distanceActiveUnit().val()
	  if (unitsText === 'inches') {
	    unitsText = "'"
	  }
	  form.distanceUnitsText.val(unitsText)
	}


	function getInput() {
	  // Return input as metric measurements
	  /* Example: Return {
	    diagonalLength: 68.58, //27 inches in metric
	    resW: 5120,
	    resH: 2160,
	    distance: 101.6, //40 inches in metric
	    scaling: 2 //200% scaling
	  }*/
	  var diagonalUnits = form.diagonalActiveUnit().val()
	  var DSF = 1  // Assume cm
	  if (diagonalUnits === 'inches') {
	    DSF = 2.54
	  }

	  var distanceUnits = form.distanceActiveUnit().val()
	  var diagSF = 1  // Assume cm
	  if (distanceUnits === 'inches') {
	    diagSF = 2.54
	  } else if (distanceUnits === 'feet') {
	    diagSF = 30.48
	  } else if (distanceUnits === 'm') {
	    diagSF = 100
	  }

	  var diagonalLength = parseFloat(form.diagonalLength.val())
	  var resW = parseInt(form.resWidth.val(), 10)
	  var resH = parseInt(form.resHeight.val(), 10)
	  var distance = parseFloat(form.distance.val(), 10)

	  var scaling = form.scalingActiveInput().val()
	  scaling = parseInt(scaling, 10) / 100

	  return {
	    diagonalLength: DSF * diagonalLength,
	    resW: resW,
	    resH: resH,
	    distance: diagSF * distance,
	    scaling: scaling,
	  }
	}

	function setOutput(calcs) {
	  // Set output in the appropriate units (takes in calcs from getCalculations)
	  var diagonalUnits = form.diagonalActiveUnit().val()
	  var DSF = 1 // Assume CM
	  if (diagonalUnits === 'inches') {
	    DSF = 1 / 2.54
	  }

	  var PPD = Math.round(calcs.PPD)
	  var scaledPPD = Math.round(calcs.scaledPPD)
	  var horizontalFOV = Math.round(calcs.horizontalFOV)
	  var aspectRatio = calcs.aspectRatioW + ':' + calcs.aspectRatioH + ' (' +
	                    Math.round(calcs.aspectRatio * 1000) / 1000 + ')'
	  var monitorSize = Math.round(DSF * calcs.lengthW * 10) / 10 + ' by ' +
	                      Math.round(DSF * calcs.lengthH * 10) / 10
	  var PPU = Math.round((1 / DSF) * calcs.PPCM)
	  var scaledPPU = Math.round((1 / DSF) * calcs.scaledPPCM)
	  var scaledResolution = Math.round(calcs.scaledResW) + ' x ' +
	                          Math.round(calcs.scaledResH)

	  $('#ppd').text(PPD)
	  $('#ppd-scaled').text(scaledPPD)
	  $('#horizontal-fov').text(horizontalFOV)
	  $('#aspect-ratio').text(aspectRatio)
	  $('#monitor-size').text(monitorSize)
	  $('#ppu').text(PPU)
	  $('#scaled-ppu').text(scaledPPU)
	  $('#scaled-resolution').text(scaledResolution)
	}


	function circuit() {
	  setOutput(calc.calculate(getInput()))
	}

	// Public
	// Note: you can move the functions into the update...Buttons function
	// and create a static property
	function initialise() {
	  form = {
	    diagonalLength: $('#diagonal-size'),
	    diagonalUnits: $("input:radio[name='diagonal-units']"),
	    diagonalActiveUnit: function() { return $("input:radio[name='diagonal-units']:checked") },
	    diagonalButtons: $("label[for^='diagonal-units-']"),
	    resWidth: $('#resolution-width'),
	    resHeight: $('#resolution-height'),
	    distance: $('#distance'),
	    distanceNumberText: $('#distance-value'),
	    distanceUnitsText: $('#distance-units-text'),
	    distanceUnits: $("input[type='radio'][name='distance-units']"),
	    distanceActiveUnit: function() { return $("input[type='radio'][name='distance-units']:checked") },
	    distanceButtons: $("label[for^='distance-units-']"),
	    scalingInputs: $("input[type='radio'][name='scaling']"),
	    scalingActiveInput: function() { return $("input[type='radio'][name='scaling']:checked") },
	    scalingButtons: $("label[for^='scale-']"),
	  }

	  prevDistanceUnits = form.distanceActiveUnit().val()

	  updateDiagonalButtons()
	  updateDistanceButtons()
	  updateScalingButtons()
	  updateDistanceText()
	  updateDistanceSlider()
	  circuit()  // Calculate PPD (may already be input on the form)

	  form.diagonalUnits.change(onDiagonalUnitsChange)
	  form.distanceUnits.change(onDistanceUnitsChange)
	  form.scalingInputs.change(updateScalingButtons)
	  form.distance.on('input', updateDistanceText)  // Update as mouse dragged
	  form.distance.on('input', circuit)  // Do a complete calculation
	  $('.userin').change(circuit)  // Any change on a user-input form element

	  // Changing common resolution
	  $('#common-resolutions a').click(onSelectCommonResolution)
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,

		version = "2.1.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},

		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );

			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );

						if ( value === false ) {
							break;
						}
					}
				}

			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );

						if ( value === false ) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});

	function isArraylike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.nodeType === 1 && length ) {
			return true;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}

		context = context || document;
		results = results || [];
		nodeType = context.nodeType;

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed && documentIsHTML ) {

			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}

				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;

		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return doc;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];

							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};

	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;

			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},

		sibling: function( n, elem ) {
			var matched = [];

			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});

	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);



	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );

		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend({

		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	});


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};


	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}

			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];

			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );

				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}

			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}

			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];

			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];

			if ( key === undefined ) {
				this.cache[ unlock ] = {};

			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}

				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});

	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );

					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}

			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});


	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}

			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};

	var rcheckableType = (/^(?:checkbox|radio)$/i);



	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;



	support.focusinBubbles = "onfocusin" in window;


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );

			if ( !elemData || !(events = elemData.events) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};

	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );

					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}

			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}

			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},

		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
		wrapMap = {

			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],

			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

			_default: [ 0, "", "" ]
		};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			data_user.set( dest, udataCur );
		}
	}

	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;

			for ( ; i < l; i++ ) {
				elem = elems[ i ];

				if ( elem || elem === 0 ) {

					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );

					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );

						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while ( (elem = nodes[ i++ ]) ) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}

				contains = jQuery.contains( elem.ownerDocument, elem );

				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );

				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}

				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;

			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];

					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});

	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},

		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},

		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},

		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},

		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},

		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;

			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}

			return this;
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = value.replace( rxhtmlTag, "<$1></$2>" );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var arg = arguments[ 0 ];

			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;

				jQuery.cleanData( getAll( this ) );

				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function( selector ) {
			return this.remove( selector, true );
		},

		domManip: function( args, callback ) {

			// Flatten any nested arrays
			args = concat.apply( [], args );

			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );

			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}

			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;

				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}

				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;

						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );

							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}

						callback.call( this[ i ], node, i );
					}

					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;

						// Reenable scripts
						jQuery.map( scripts, restoreScript );

						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	});


	var iframe,
		elemdisplay = {};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = (/^margin/);

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}

			return window.getComputedStyle( elem, null );
		};



	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}


	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );

			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild( container );
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );

					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

					docElem.removeChild( container );
					div.removeChild( marginDiv );

					return ret;
				}
			});
		}
	})();


	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}

			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;

				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];

					// Make sure we update the tween properties later on
					parts = parts || [];

					// Iteratively approximate from a nonzero starting point
					start = +target || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}

				return tween;
			} ]
		};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;

				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ]);

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};


	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();


	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});

	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {

				if ( value === null ) {
					jQuery.removeAttr( elem, name );

				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;

				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}

			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				ret = jQuery.find.attr( elem, name );

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});




	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );

			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});




	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}

			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];

				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);

					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}

			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];

					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},

		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}

			return false;
		}
	});




	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each(function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});




	// Return jQuery for attributes-only inclusion


	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});

	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});


	var nonce = jQuery.now();

	var rquery = (/\?/);



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = window.location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};


	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map(function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}

			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			});
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},

		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});


	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );

				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function( options ) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;

				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});




	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf(" ");

		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};




	var docElem = window.document.documentElement;

	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});


	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;

	}));


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = calculate;


	function calculate(info) {
	  /* Take in info = { // in metric form
	    diagonalLength: ,
	    resW: ,
	    resH: ,
	    distance: ,
	    scaling:
	  }
	  return { // in metric form
	    aspectRatio: 2.3755435,
	    aspectRatioW: 21, // or "uncommon"
	    aspectRatioH: 9,  // or "uncommon"
	    scaledResW: 2560,
	    scaledResH: 1080,
	    horizontalFOV: ,
	    PPD: ,
	    scaledPPD: ,

	    // Unit dependent (in metric):
	    lengthW: ,
	    lengthH: ,
	    PPCM: ,
	    scaledPPCM:
	  }*/

	  var ratioInfo = getAspectRatio(info.resW, info.resH)
	  var aspectRatio = ratioInfo.ratio
	  var aspectRatioW = ratioInfo.ratioHor
	  var aspectRatioH = ratioInfo.ratioVer

	  // Scaled resolution
	  var scaledResW = info.resW / info.scaling
	  var scaledResH = info.resH / info.scaling

	  var lengthW = info.diagonalLength / Math.sqrt(1 + Math.pow(aspectRatio, -2))
	  var lengthH = info.diagonalLength / Math.sqrt(1 + Math.pow(aspectRatio, 2))

	  var horizontalFOV = 180 / Math.PI * 2 * Math.atan(lengthW / 2 / info.distance)
	  var PPD = info.resW / horizontalFOV
	  var scaledPPD = scaledResW / horizontalFOV

	  var PPCM = info.resW / lengthW // Pixels per unit
	  var scaledPPCM = PPCM / info.scaling

	  return {
	    aspectRatio: aspectRatio,
	    aspectRatioW: aspectRatioW,
	    aspectRatioH: aspectRatioH,
	    scaledResW: scaledResW,
	    scaledResH: scaledResH,
	    horizontalFOV: horizontalFOV,
	    PPD: PPD,
	    scaledPPD: scaledPPD,

	    lengthW: lengthW,
	    lengthH: lengthH,
	    PPCM: PPCM,
	    scaledPPCM: scaledPPCM,
	  }
	}


	// PRIVATE


	function getAspectRatio(width, height) {
	  var theGCD = gcd(width, height)
	  var ratioHor = width / theGCD
	  var ratioVer = height / theGCD

	  // Only one of width or height is valid
	  if (isNaN(ratioHor) || isNaN(ratioVer)) {
	    ratioHor = NaN
	    ratioVer = NaN
	  } else if (ratioHor === 683 && ratioVer === 384) {
	    // 1366 x 768
	    ratioHor = 16
	    ratioVer = 9
	  } else if (ratioHor === 64 && ratioVer === 27) {
	    // 2560 x 1080
	    ratioHor = 21
	    ratioVer = 9
	  } else if (ratioHor === 43 && ratioVer === 18) {
	    // 3440 x 1440
	    ratioHor = 21
	    ratioVer = 9
	  } else if (ratioHor === 8 && ratioVer === 5) {
	    // Change 8:5 to 16:10
	    ratioHor = 16
	    ratioVer = 10
	  }

	  return {
	    ratio: width / height,
	    ratioHor: ratioHor,
	    ratioVer: ratioVer,
	  }
	}


	function gcd(a, b) {
	  // Not fastest algorithm but good enough
	  if (!b) {
	    return a
	  }
	  return gcd(b, a % b)
	}


/***/ }
/******/ ]);