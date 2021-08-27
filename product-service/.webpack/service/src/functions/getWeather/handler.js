/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getWeather/handler.ts":
/*!*********************************************!*\
  !*** ./src/functions/getWeather/handler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler),\n/* harmony export */   \"respondJson\": () => (/* binding */ respondJson),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/lambda */ \"./src/libs/lambda.ts\");\n\n\n\n\nconst API_KEY = process.env.WEATHERSTACK_API_KEY;\nasync function handler(event) {\n    const { city } = event.pathParameters;\n    const endpoint = \"http://api.weatherstack.com/current\";\n    const { data } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(endpoint, {\n        params: { access_key: API_KEY, query: city },\n    });\n    if (\"error\" in data) {\n        return respondJson({ error: true }, 200);\n    }\n    const response = {\n        city: data.location.name,\n        temperature: data.current.temperature,\n        textWeather: data.current.weather_descriptions,\n    };\n    return respondJson(response, 200);\n}\nconst respondJson = async (body, statusCode) => {\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__.formatJSONResponse)({\n        statusCode,\n        body: JSON.stringify(body),\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_3__.middyfy)(handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFdlYXRoZXIvaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQTZDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvZnVuY3Rpb25zL2dldFdlYXRoZXIvaGFuZGxlci50cz81MWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIi4uLy4uL2xpYnMvbGFtYmRhXCI7XG5cbmV4cG9ydCB0eXBlIEh0dHBSZXNwb25zZSA9IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PjtcbmV4cG9ydCB0eXBlIEh0dHBFdmVudFJlcXVlc3Q8VCA9IG51bGw+ID0gT21pdDxcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnQsXG4gIFwicGF0aFBhcmFtZXRlcnNcIlxuPiAmIHtcbiAgcGF0aFBhcmFtZXRlcnM6IFQ7XG59O1xuZXhwb3J0IHR5cGUgV2VhdGhlcnN0YWNrU3VjY2Vzc1Jlc3BvbnNlID0ge1xuICByZXF1ZXN0OiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHF1ZXJ5OiBzdHJpbmc7XG4gICAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgICB1bml0OiBzdHJpbmc7XG4gIH07XG4gIGxvY2F0aW9uOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBsYXQ6IHN0cmluZztcbiAgICBsb246IHN0cmluZztcbiAgfTtcbiAgY3VycmVudDoge1xuICAgIHRlbXBlcmF0dXJlOiBudW1iZXI7XG4gICAgd2VhdGhlcl9kZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICAgIHdpbmRfc3BlZWQ6IG51bWJlcjtcbiAgICBwcmVzc3VyZTogbnVtYmVyO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgSHR0cFJlc3BvbnNlQm9keSA9IHtcbiAgY2l0eTogc3RyaW5nO1xuICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICB0ZXh0V2VhdGhlcjogc3RyaW5nW107XG59XG5cbmV4cG9ydCB0eXBlIFdlYXRoZXJzdGFja0Vycm9yUmVzcG9uc2UgPSB7XG4gIHN1Y2Nlc3M6IGZhbHNlO1xuICBlcnJvcjogb2JqZWN0O1xufTtcbmV4cG9ydCB0eXBlIFdlYXRoZXJzdGFja1Jlc3BvbnNlID1cbiAgfCBXZWF0aGVyc3RhY2tTdWNjZXNzUmVzcG9uc2VcbiAgfCBXZWF0aGVyc3RhY2tFcnJvclJlc3BvbnNlO1xuXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuV0VBVEhFUlNUQUNLX0FQSV9LRVk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICBldmVudDogSHR0cEV2ZW50UmVxdWVzdDx7IGNpdHk6IHN0cmluZyB9PlxuKTogSHR0cFJlc3BvbnNlIHtcbiAgY29uc3QgeyBjaXR5IH0gPSBldmVudC5wYXRoUGFyYW1ldGVycztcbiAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHA6Ly9hcGkud2VhdGhlcnN0YWNrLmNvbS9jdXJyZW50XCI7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0PFdlYXRoZXJzdGFja1Jlc3BvbnNlPihlbmRwb2ludCwge1xuICAgIHBhcmFtczogeyBhY2Nlc3Nfa2V5OiBBUElfS0VZLCBxdWVyeTogY2l0eSB9LFxuICB9KTtcblxuICBpZiAoXCJlcnJvclwiIGluIGRhdGEpIHtcbiAgICByZXR1cm4gcmVzcG9uZEpzb24oeyBlcnJvcjogdHJ1ZSB9LCAyMDApO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2U6IEh0dHBSZXNwb25zZUJvZHkgPSB7XG4gICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgIHRlbXBlcmF0dXJlOiBkYXRhLmN1cnJlbnQudGVtcGVyYXR1cmUsXG4gICAgdGV4dFdlYXRoZXI6IGRhdGEuY3VycmVudC53ZWF0aGVyX2Rlc2NyaXB0aW9ucyxcbiAgfTtcblxuICByZXR1cm4gcmVzcG9uZEpzb24ocmVzcG9uc2UsIDIwMCk7XG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25kSnNvbiA9IGFzeW5jIChib2R5OiBvYmplY3QsIHN0YXR1c0NvZGU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICBzdGF0dXNDb2RlLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShoYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getWeather/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIlxuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5cbnR5cGUgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBPbWl0PEFQSUdhdGV3YXlQcm94eUV2ZW50LCAnYm9keSc+ICYgeyBib2R5OiBGcm9tU2NoZW1hPFM+IH1cbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LCBBUElHYXRld2F5UHJveHlSZXN1bHQ+XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAocmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getWeather/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;