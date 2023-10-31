"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   mainMiddleware: () => (/* binding */ mainMiddleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var _middlewares_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/withAuth */ \"(middleware)/./src/middlewares/withAuth.ts\");\n\n\nfunction mainMiddleware(req) {\n    const isLogin = true;\n    if (isLogin) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/auth/login\", req.url));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_withAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mainMiddleware, [\n    \"\"\n])); // export const config = {\n //     matcher: (\"/profile\")\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUVHO0FBRXZDLFNBQVNFLGVBQWVDLEdBQWdCO0lBQzNDLE1BQU1DLFVBQVU7SUFDaEIsSUFBSUEsU0FBUztRQUNULE9BQU9KLHVGQUFpQjtJQUM1QjtJQUNBLE9BQU9BLDJGQUFxQixDQUFDLElBQUlPLElBQUksZUFBZUosSUFBSUssR0FBRztBQUMvRDtBQUVBLGlFQUFlUCxpRUFBUUEsQ0FBQ0MsZ0JBQWdCO0lBQUM7Q0FBRyxDQUFDLEVBQUMsQ0FDOUMsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4vbWlkZGxld2FyZXMvd2l0aEF1dGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW5NaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCBpc0xvZ2luID0gdHJ1ZVxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hdXRoL2xvZ2luXCIsIHJlcS51cmwpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChtYWluTWlkZGxld2FyZSwgW1wiXCJdKTtcbi8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4vLyAgICAgbWF0Y2hlcjogKFwiL3Byb2ZpbGVcIilcbi8vIH0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwid2l0aEF1dGgiLCJtYWluTWlkZGxld2FyZSIsInJlcSIsImlzTG9naW4iLCJuZXh0IiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});