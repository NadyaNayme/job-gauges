(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["sharp", "canvas", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["vos"] = factory((function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["vos"] = factory(root["sharp"], root["canvas"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/data/bloat/bloat_10.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_10.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_100.data.png":
/*!*********************************************!*\
  !*** ./asset/data/bloat/bloat_100.data.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_20.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_20.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_30.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_30.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_40.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_40.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_50.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_50.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAF0AAAAXCAIAAADm0NSeAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAABohJREFUeJztmGtsFFUUx+9j3ttu2+2DPlisLcurPMQXaijGQGxAEkJi1A8aox9M+GSMCiYkmBgVJRI+GIzxAyYmRCXxXRATE0RXAS1WagsUCpu2sC20W/ZFZ2Zn5o5nd9ph2W1LAdNi5N929s65d+7c+c05554uh25rLHHTvYBbVBNx2brjZQYfNqIxXxV7OJpkL+5YMVULm2aNzWXbzlcpxT8f2ceQDWKMeXojixKPf/XGsfVblkzxEqdFuVy2fbCR8vhw235C8ZyHeJSGgpjFSG2n3drZ0ly19aV9WNRfe2f9tCx3ynQVl+07N7eG9haW0gXLecOwMcSQjQhBisLrYpJd6iyI18Y6z89cdezzr1/445CRfW1jc9svaxfnzA4zLG9uC+bZ0fj2xr1tbyoUY5xjV1VVkqT88ZqmybLstMG13QthvKIo7jDocu3O+OxbuL2WZbW0tORykXxsSZ0SmMcNRc3wOdMybIBSXML57+AjA+YA6yot8df4ByMXlLP7/LHa97OvLZ9ZESsK5nLBGXtxcGQNeOQHVDGrPFn2q2PPHEd6KmaVVQvlOKOseXA4HK6pqXHa8BiAw+kaGhry+/2EEAeKe2EoFKqrq4MGdEEecLu6uroCgYA7M/Q6czrTtre3O/YrXD7cub2j/9N5lbT9iC54iSDiwYjlLaGGZh3er1bMFoRiNdkm9J2eY0e8NOGt+usjjY87rIE2p36nfra+wpNeij36BqCHat/Hd6+bK9+ncAqzWdJMXsJD6ful9l/8+LEypS7jlFfGW+aPHcPBbBdwGgUFBa2trWDneV4QBFEU4chxHBxPnz4Np6mMTNN0xhcVFQWDwXwXKy4uPnDgQI7duUtjY6NrucKF+BIDR1lPRzI+YBaW0cWPKrFBE/Lu+QHr1KHhO/rkhXcho3cmOVdLbCtpJrCsj/pABgxygIwtDvMCFi1sUkTHGzNJwYslo3KeB9zBGtXkJ5ngFLlcvtnY09zxpH8+On4QbmJrw8w0bS1hMYxSmm0atpmyCWfLEhWQpHJRQTAtyii4qM3Sb3l8IiDBkIEL/MIogm+2YgIcbrAAEUBzvVAmI3eVWOAFxZviJIIJEz3E0hhkP2bagoypQAQFECBioxh3jgiMUMg9JrEBS5oMYmiPvHYGGgmGbO0WV/tpCUChmIOh4C9SqkATkp8ITeUCsvN47qKrZPlo/kITiQQEkQPFOaJMmgSBHSIoh0ssFhszT0ejUTdIr83FIkbpcP3Se04qMg6dTDU0FM7wkv5KradLb3hQlkVc1yD6bDlmSAZVBZlR3kS2YUGcGeAro0k1D4ojHgsc5iDeCIKqiEs7zo3KdRZQdvi4aeXf0giXJFP5geoSqXvpYrG+HjeUV5bKanv/xSofN/tOkYjMW0itkCc1I6bYxOCNApklh3WkMWRRcAIIN2KPmziAC0U8gj0BuCCO3kQouckFZaUVgALtG55zTI36CzJTHU3R7lMLGoYNWTD11Klw9NCRZFVACF+wO4/o8xaW8WcC2ok5tKhnRoU4szr+x8mYadlMLQIuguEBj7MhnPIcRtFLKM8RBGGY7kq7zE2kXgdKdhABFMMwrnnh9WqEy3Pblny5+ezRt1brb+yOXx4816kN9mp//64F7vfMXyad+F2vwDXe4MOGKlic1N1//kys+2wkUuolHu0B2I5MmkLjJF8uEziZvZylQwlTSGA3tlZKqcvFcRaA8u+mW1dXXDrFLD0cCHd6DW/aEaiIOR7DTgjJpbCcimplqrfGRHo8Qo5He4m/u7jhcsr3W2rJFxPMDu9VRejiSOV2VV2HM58kr66Dv7qD8/PrOvfUKcCySziU8aN8o9PIqetytuScum4MLk9tDfzwZs/eb2f51vSLkllUL3V3GpRIiHD+RSI9WT+kX+6zuwv4Qp/uj/SpZXNDKLZ8Yuq5VcHkFA535BcUKKvGy73L6ODs/wPQOJX+xL2u912VAjHjuAtLe34KCSXhpmeUEy06B7mBV2rKfCxWjIiZIOGobcz33lO1Yvazb987yef8L+oqLo9uqd7zXpDVrQz92Tu7cqBpHR/XWbnHlzhfPYDjl1OaRxRmrRKqpEtPb1ozXSueGuVumU+8kg6NXe/+4L2EVi47ZFolg2fIT72nes8kksN9d6+q3fD6I9OxzqnW2KXE85ua0Caka82IlutUnXufWF3pO9tSsOHt/wUUNPH3mKK0dsrWcavp9vfeY+sfir0bEjCW5LMAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/bloat/bloat_60.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_60.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_70.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_70.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_80.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_80.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_90.data.png":
/*!********************************************!*\
  !*** ./asset/data/bloat/bloat_90.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/bloat/bloat_expired.data.png":
/*!*************************************************!*\
  !*** ./asset/data/bloat/bloat_expired.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAF0AAAAXCAMAAABebLP7AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAASZQTFRFAAAARERERUVFPT09TExMSUlJSkpKMjIyMzMzJycnOzs7U1NTTk5OWlpaWVlZV1dXVVVVPDw8OTk5Nzc3QUFBSEhIPz8/ZGRkYWFhYGBgZWVlVFRUUlJSNjY2LS0tLi4uODg4NDQ0a2trs7Ozg4ODbGxsaGhoaWlpcXFxvr6+enp6S0tLTU1NT09PUFBQUVFROjo6WFhYW1tbXFxcXl5eXV1dX19fYmJiY2NjRkZGcHBwb29vQEBANTU1KSkpKCgoMTExJiYmMDAwLy8vJSUlIyMjLCwsPj4+ICAgHx8fZ2dnKioqR0dHQkJCQ0NDKysro6Ojc3Nzp6enj4+PlZWVf39/mpqagoKCuLi4mJiYhoaGZmZmbW1td3d3VlZWdnZ27e3trq6uDguuHwAAAt9JREFUeJy9lftTElEUx89dBBZ2eSgLUZouOSAaSAql9tBxRpvJnPob+ueaafqpcXKcRsd0tDDLZhQjIMOQ8MlDhTWQZdsXauHQNIOeH/bcPffez5577v3eRXCRhi6JjhCHoVLpQuhKhBDweJSrPV2lKuW1SDLYqzHdjFImKfVfJQzhYgxx8oC/PFZiRE/KNcSyAFo+RAqzDnmfBZ3U0kclusEk543CLIWOrwmxLas4OWTYB3B+dUKWX5KNH36gR0k+nlZrIEdsA7iiXOsaZ4eSgk8A47CAge9tBhS1RZIivY9hDClrVH+cpxliyRHGCaAh4N4A2ORzu72yr8fckKlH4kqTVASAX0fWiworvjdU2yLBWGiAmPNITOdH+1vB9cKRTDe6EBZr/4mvDqSKDZNwHdg/6Ivd4WLnefQZooM1ZVQRu+bwLF2qHOQlemPeRiAs2P15Wzn00fc+7Y4hLdAn9MGJkXTWeB49YojbFyh8x+KuQjf2Fxdc3y1XYynvOHXcFAZH5lBLQxxEOljb1O+YKy2YfAa+CZ6nOyHUHLi/R82Rdo2whxW6lOlEgzeIbwG9OjzdsXZnZUfdkhFKU6Y7yfnRObK1kl6MJB6PmYtMv7Ia3bVp9Ag6nR1A+YTig17BWFg63lSmaxR3uXGju5JeWGd6uTnSgUM1ep3e3IXQVO4pMz364lF+SU0laVinZbo5MYK4QoiupM86yQZ/MTcEVenQqHzgTxCeSXtM1+NPu5O2ugh/xGS6lekBWCh2VtDZQkABrEuF/4PuieMEkxggw8m+1xTbCavm0zEh4SGoaR0kNSFOUpMReDXlnrziPyWqSezi1bQhTDirJtD7Mmut9UTwYHd4xlpyhKCqySdOe/oq3ARl/Z+2yjeBjrJ/Gn151OZ9/jDonGoPVKf/h0nV8niWb/hZU+zWl5zOWjv4yV7c9CGY3z+4t7xbO/bZnX7GcRPKrrFawi/tv3oR9hue6kUnp2xfagAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/buffs/Darkness.data.png":
/*!********************************************!*\
  !*** ./asset/data/buffs/Darkness.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/Living_Death.data.png":
/*!************************************************!*\
  !*** ./asset/data/buffs/Living_Death.data.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/Necrosis.data.png":
/*!********************************************!*\
  !*** ./asset/data/buffs/Necrosis.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/Residual_Soul.data.png":
/*!*************************************************!*\
  !*** ./asset/data/buffs/Residual_Soul.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/Split_Soul.data.png":
/*!**********************************************!*\
  !*** ./asset/data/buffs/Split_Soul.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/Threads_of_Fate.data.png":
/*!***************************************************!*\
  !*** ./asset/data/buffs/Threads_of_Fate.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/buffs/putrid_zombie-top.data.png":
/*!*****************************************************!*\
  !*** ./asset/data/buffs/putrid_zombie-top.data.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAIAAADTzFK5AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAulJREFUeJw1U81rVUcUP+fMzHv3XRNNoFThCSl+oPhJ6aKF0kVcCEp1UylFrF256MqNqy4E40JQ/DNcaRNESEDaRSnNIgQEFUys+IW1pYbYF1/ey71v5pz+5ol3cS93Zs7v/D7O+EPbzzELSxAKxESmahEfYSfkmRvYJVIroztcFie2Ppq/w8/rvWdOPbp9k2uamJxMc+8GD7uUzIsIGcociomZ2NjETIU9DxeZPRZld1l/FZdmf+barEw4x5F2Hj/my1b8LHB06cWGJxSIsKHGoThTIyVORKCDncAU2Jm0i1e/z368a9/4nj1LN27Gbh/9/plfHNh6f9Dd/8Op6pcOmgs6c35QmQkaJ1NAgyHeYUjQeIV2HT3+9Nbs5k92UNLl6Rlphd7rN9SgA6e/q9e6blPDf9Dis2vZoACF5pJZZkXkHRaN9KUGHd18cOLJwl0GV29klJoclKlnNF3Hf5N30sCq4zBk4d1718gp7IdgHloJ3Qk+yH9/vXRvUmwZWiIPGVg0xWFaEX6r4IWkUCwue5wtAxyAoEvEaPgLKAnkRgNv2I5vTj6+PaOxQvboZRq7b18VW8ZpNWMV0KZQREPvcpzAhWeEo5Lhsc9pQLQKXfZs7i5FnGbVhI5WDUJzRBrOTPx7p+CAEUvTudJz4Tiy9CzVubXL4aDG9KECNq33Mz5gXdKNCoqK8TGrqsSSE8yMmuy3edof3L6GttRHz3+qPVD3N0uVp84jjAd0aPdZ+lJ6IyvLd27pan+okXzVHHQ3AIP5Ii45HGzKidbCpSvut4JCsHITjPr8/DmZi+6ecT9bZx21e8RL7NoffXrmx4Xr13ighNhfJ+sjI/AKAi72dWPx8lXMl0VkU3O/p+XIHxcufjH1k7OGLDnqWE4bw4EJeJbsPuT61F2jpqeWeI8ZwfiMeTlSLE5dHd5Fi1UN53xZqHft779dG606259ubR8Iv3ruWL5hMBxj0FFRiqq0Xknb2aizdfsfhQlMvDg+e7cAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/buffs/skeleton_warrior-top.data.png":
/*!********************************************************!*\
  !*** ./asset/data/buffs/skeleton_warrior-top.data.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAIAAADTzFK5AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAA1xJREFUeJxFk39oW1UUx8/98X7kpdmabE1WbVPWdVpdNzVqUafunyFChf2zUf1DZQOZhiHdP1a3gGxqB/NHddB/nBMEqZrN2RQn+0Nw3UTmDyiCOCpmNbVbkza0TZuXvJf37j3epMOdy7tcHud87vfccw7f3n6AICOEEqpT4EAAUEj0iTKgMtKcP/Q0fvEhTE+B+oHIXh9evPQ5cG5EtzbXYsZCleVu6DPzKo4T4LQexlQkJQ0WUHX2Q+bCS7vF+McwlIH/DdG5Px548B3N98pvHKSPvJz7anBLd1JEI9r8imKpxZUuJaquDhhqtLD/sdq3I3Dqu9sQw+i49HPUk7/tvA9On6N2jTS3QCxi3tGTXcl0bdhHlmoqXuFoY1fyeLG/177yKZwZv01xnXsv/sLtWul4ZuLFXnNbT9PMKlg8+tzgXGpfJDniDPat7uVUtnJGdYKoKO7mWDERFOkUNPJsGOk5/wMUbTeZxrmSgaJlY3Dh+PCmU5e1VddtCcpImBhW7MTFQqov8PwnnCoWIcU9CfubY5Bjt0CaET+d0Rcrlf2f6WWhEwaUg4Sm7KK4PK2XvEC+QgVuuru/cKSvdWDU6Njxz9WTvPzkPU7Mqpx7GyhDxPW9T9x5+BhbrtaSZ4kndEQgjCqWSpZC+PeCNWdb+SrzfD+oB9s6oLOLSLbx2bduDD3DF91J/H4y/OiubcmjpmnMfvmrM5jhwLhpoiZRFVUS5sq6WgX1pD5bVQVSMs0lt4yEhcI339vT9tqFDXtTPDF0solR+DE7e3RcSsXg0rdL7k2DhtZp7dL1VJ+otqFVn6FEVWgECmoD7vjWvLPlrlf+nv7LL2StrTt56al3y9SQoaCIhq5PfmBXclJ4t55eldc0H9/8PkVAS6cVl9QhjXZWGSMGiq4IW7yrq5A+0vbqWXUpQU6d+PrrV96sucuoQCjrzkDiiYc7e7ZPjB7a9cAZXhWUCrJGAiJQ6Kq3VzzIVzofSuXbLzjxdZwRJgOaszpT95JrFFgbl4Nfj6nhmrn2p9fdql0r8KrfQBGpfNSnhs4HXPaWNAh299m6z4FqMhRYmkqj56J6EeUmRP/A4fRHw0OJHQOjo9mrP/2be2H3gTEyNsV8URdc5zSSFEqb7oV0/48J58TIf8iTdyIW+EFBAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/buffs/vengeful_ghost-top.data.png":
/*!******************************************************!*\
  !*** ./asset/data/buffs/vengeful_ghost-top.data.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAIAAADTzFK5AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAypJREFUeJwlU91rFFcUv+ecO/fO7Gay25jSkCr4RWIbwUawFdKUisU+FEGQiiD9A4ogCLF9LIW8tA8+tQ/tYwuBUgyG9qVNzVNQC1W0sR+RTGyNiRpdEzeb3Z3Z+9Fz03kY7tx7zm9+H+fK4Z4xEAiC+C3ACwACSUIjKgAQwlvfsbbjfM4LIcIOhDofFkBCCOfaxhe8kHy8hcWNhEgSS7GsKFEuBqsPz++Awvd/tmgePGqZJ846RuBiBkIARWVN3asXBuLxK+idF06ikBAIEGMRKI3p4uQbGHMLovUFwsLXg9s/T9VM2znrmRCjeRdhnFLfX7Mje0anN1iJYIIgESPhA1tkwoBcPXQ6u32xP+qSDoEpgveL4wNDo0sd23bCemEZTFL8x/Tr6eQ9xo4wkagK25TAvDDY8L9SxkWHolb4JPD1TeNiorVGbNNcbuR2UwQ5ofilr5Yevl/dSRUN6fLE4cqpydDAvw9YEBIgVC6JmOHWnmhNzbTn5ljuv598+OJ43djcCSeCCFXOWvTCTqdx/vJhqD3r8xUZuLA3ILcES3b01kfdURQME8YWd34PVjtXe6vUT0luJGGkMNVRpVbFuFyZ/+UIzf7tXu0ljGWQFh4kCCFyNORZNDsoGj9Oh+iDVN+ZuELwMpFWWM5uH4OCOE9qehl5+/bA5vez2c+H2PtgmQSlqJTInvor2oogL6rbrvfeWVuY5/nh8/LJI9HEkqYu5UpkMV/4J9m9AyIwzfbmpesHvzTZcc0obE9Jy25N6Y2xGjTWkvu22LvfJZ5ndtuFc81rN+OhfRzwrQ9WD3zbw86zkNfOrFw/O8cFoJODX9i2Xe8bmZKMUpa9v42t6U4hnqMzKiejVjKn9+I2gYTp6CGbyk62XGDr7sn1wUu9/R/fzbXRMRVPiuFvSvViJbd1JwoZy+rVwe9KzaN5HiFHJMB56TfWbdMA51flT9icumpbDZsXzxORjfrdM/7PT63ycf7Y5PZZ7hrW5zx3zJKGs3fvmMvw5gnH3eEOMLmKmv/VHBhxT6H+0w8ijjwz9ODajVq1+fTYUgoDft3supZ07GoY9a2L9R+ee2lPH77d2gAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/conjures/conjure_ghost.data.png":
/*!****************************************************!*\
  !*** ./asset/data/conjures/conjure_ghost.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAIAAADZ8fBYAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAABsZJREFUeJyNVkuPHFcVPue+6l39mul5j8cksWfA4WEsCAGkCAekRGLNDgmEEBKIBQoBNoglSiRWICEwSGTJD4BsWQWkkGSwsYNJPHYcjz2T6e7pRz1v3Xu4nUSyEmzDVS1K1V1fnfud7/vOFfDAtdZ9rB2dBORAQNQAWOIcACfTvVvDlx7worgvYu/xxF/lTDF3oWIgGSAxMAIaqlvJI2l0clbcunn0l/8X98Ti+UB1GQrGOMdApn2+0LcbnWYzsaHE/Zm/e93uv91AFSXbDy8/VE72337rxf+Bu7X4ZOyvMcYILBByVHZzKX96R3+0C4oRR5zYMPK8PxWmGUEkOGdptHCqu3n1td/cF3dr4Xw837tE5Z4TNBYB1K2svp436ym2FXCGqWge7nnrfXGzaJDIcR/E6uyZjS+fuvn8M/fA3Vr4UuyvuAKZlBjHIBDyEitEbaE0UBFU1t4Z6OtvmWGjUikp4DqzDIS1ImPh587tPPbDK399/gO4J5e+EnvLDCUyjlwy30PJySIzYFuxTQIQnGa5vny1unTZhqmW64EKpS6RSQUhkXANgO9/de2JpVs/f+YubtjdZCrCQqNBmEMLJqT7UUrZdFuUeu6Z3j/UezdoOjModKihFatBRVvLxVPbTT+ilXaznDCe3a13a+MptrREno+DGc5qFgUsjQVJURN0gtlmq25JqmkuuCAwgmMaYrfNBsArqnbW83OL5BQowEzqYK86ffa7/3rlV3PcJN7CMIIw4BnxRrl75XeZ8nSP8hTyvjZUYCN5r+uf/bjcWGHt1Kp2ORjFZUuQgsHM3DgwHd8/tMnLx9yuzOvd7D3BuSJCBC5kLDuKcaVDr1wWZUi1tAY0To/B47DYkifW5fqy1VV9MBq3czZzWI3/5nSWjWiA/p7Co7EdD7d650U3Ps15SMxHK0UQNGeWo2tNXh/MrNUyJpBkgVUVGw1Accepzcr69u1mMKpJ204VgrWziCVC7YOohOYNJ92NTgnBPNbuYWeJ1SAEFI/2oqL070wnd64RGUh7yBk5mWYzOAR9NNKjIzOdUmOQIKe8oiMft9CGyiaUSjvyuPMUOfmglNbPt3teJdgbmfWYDYTntWEwslQw4WGSOoacR2g8MUVhitJxhsiYsbaYNXVu6hPOnVwmdlHAMJx7x6JwtbBpKca6Oh1RzK2wzkSFndTVtDl8hzMh1k6wNEXpQe1sXFqGxoLzIVYVTSfuzgxnNh/CYs92fGr74Lki6nf9Csa7U1UnyuyRgDws10QWS/L7ePOGHR5AkmAUOvmT8HiYOkSdF7ZqIMuwyCxA/cbrzLHS3QbZokiCpzArBTgheKpclXxYWx8gVfkqs1srXpqj2+ZEg65YXc5D0pXg/BJEaBvTGOmlvOuPRzfN9FgsrGLgk23cV10MEDLhqCLFrEA1JJEXpqcbn7DlScMhTMlUtmkgn74bvtwqYX2fYcMsT8NuEi2ZwZW8HnrpKleeKQu0jlrHARNH08tL1PfGVtTIRrWZmikNaSl0mvW8xGBQlqWejpn7fhiRUOQLQp+Vzsy+Wl1LVhMqDnyWgAFWVHPiubPtFfHm4Z8Xdj4vG0MSHVnMcDw8pmzIPSNWVipHwsHtRpdQjFwdlATWc0GnKKAyirOeR/6CRx2elXA0ZrnDdhlN1w5fnPt4fHy1q7aZz40QNgxRLrLR7WihT6dP8dnIp8pORo1TrHHbrIECVztPItPv5C1pQbuEUtxCJjGbq2A8/Pf7ufP67gufefJp1fZN6tWtmC9E3qy/8NCaXmnTQEGTNyMvbzSTAkNVu15wCmOfLcUsZDYHhuCHsm4HptRmNLj62h/u5mR2vCe3N6jXsrHPNQbUafVDmcpEdIjpfKEzAa7cIIF5H5Wldhyzjl8yNnXBD9aNVUy8slSTf9z4QK7/83c/ObPx62j9iyzgrhwGLPJ5N3RObEEgxkU9Ru50EGnNqFGCh75fecE7JZWcudbMUwvsdG/38m9//OE5dOln39l57vfxZ7/g6HICLGHuK18qmbpcMgrAQ9Z2L+AcxQC62VQ70qUwDHVVDnf/dvGn37733Lzy7Dd3fvGC96nHjfLvVHY2aXzpNuCygANz5xI8AmwIamOLxs60zbTRzqy6Hr360sUffeNBc/7KD77+6LO/TD55zrbaVeCj4MwFFEPXHKdgh20tWeMu62ptqqqZHE9fffnic9/7EM49ziXv/enMJ77V+8g53utAHFglrWDzxtt5tVBqmOV2eDza+/vFixf+G+HeuO/TvXsBdi98bONrq51Pu2jA+VHiveXS1e4fv3Lp1h/v965b/wHPNluRCUCQAAAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/conjures/conjure_ghost_inactive.data.png":
/*!*************************************************************!*\
  !*** ./asset/data/conjures/conjure_ghost_inactive.data.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAZVQTFRFAAAAGxsbKysrLCwsKioqHBwcKCgoLy8vMTExMzMzNDQ0MjIyMDAwLS0tHh4eICAgKSkpOTk5RUVFUlJSXV1dYGBgVVVVQEBAIiIiISEhLi4uSEhIZGRkc3NzdnZ2d3d3cnJyWlpaOjo6NjY2Nzc3Pz8/WVlZbW1tdHR0eHh4aGhoPT09U1NTTExMNTU1Pj4+VlZWa2trcXFxUVFRTU1NOzs7ODg4REREW1tbUFBQS0tLQUFBdXV1ampqQkJCYWFhb29vXl5eSUlJR0dHPDw8aWlpgICAfn5+ZmZmIyMjRkZGQ0NDVFRUTk5Oenp6gYGBXFxcWFhYbGxsYmJiY2NjHx8fSkpKV1dXZWVlcHBwZ2dnX19fbm5uT09PJCQkeXl5e3t7iYmJfHx8g4ODfX19f39/k5OTm5ubj4+PgoKCkJCQhoaGmpqaqampp6enoKCglpaWkZGRlZWVl5eXoqKipaWlmZmZhYWFmJiYra2trq6uqKioo6Ojr6+viIiIhISEi4uLnZ2dn5+fnp6ekpKSh4eHioqKWbhaHQAAArdJREFUeJxdk/tTElEUx+9ZXrvswsICCYQPDMVQQ3JEk2oqf6imfqhm+rW/sh8qJocZLZEcxeT9EMFiGOURz4VdYNs1pez8cu+cz5y5c+f7OYBGBQBIwNBQEP62ri4K6CtELmAAbapxndLQIAWJitWQ8Uqy9A+1tDgDqjF/KJQsCEqtEaWlt2BgEwmrhjohgArg6JJKUKkHUprrKmUAvTYzZKnQBTVjjT5m5wa1Waip8XMwZTUVV10H7J5EqbEismKWeocWp6tZhQegQ1aMAB9E+pxnY4xdSLi71TJppgLUCgxYDRL/5m8DIpcVZRPHN9GUojo0ba3K93Q4mV+Ou074Q3ib1GVtlCHGoXllaLXUcPa2JpTC9I43OpkoA07AUld1I0ZNoCSaSrnLeScRLz779CTK7AHc0UWn0G32JDfdd4p4W9ioJGzorOUrMT+y4DUSuyu4sHsrv8ZxORt0Emiu3FzpySDZKYLDKtPjidnIMWYxmqNqYrySWEoyQ63lAOv+BMeYra7f0U/yn2cr90MKT4EIj2eQBS1UjIclcBiy88qCxcLm2tX11HxUvbg51/qud/HnzpQMvBn30aIhaI978wb61HnA04RZlZFhdMQXoODdCWeOubZm0nY6wjtZPMNUHiQIXVprYs60gHzFpsb9zXcsb5FyvFNqCRt9KkCou6aC9QsgakGFiP1HXHjN74Yzh/rjol4r1NLDtu2gJ2ZkvxeH9nL5ZtDTUYVaD8vDGTHnszCjCkoJriuPH9fGpOgDAqs2FF7AkFdinN/69cKN14MeshGXUg36uGhlF8+kcpdevTIqtGLiko+kHA1aChJ29ssjJ413PURRR0JF0xPoprZ/nr6AVz6/PHwqGLW90xmUdnBhg9/9/voukG+2J7ILTDXS0zs32/9vCkKYDq2JR/DXcNT6DQ16JwjFBZ7sAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/conjures/conjure_skeleton.data.png":
/*!*******************************************************!*\
  !*** ./asset/data/conjures/conjure_skeleton.data.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/conjures/conjure_skeleton_inactive.data.png":
/*!****************************************************************!*\
  !*** ./asset/data/conjures/conjure_skeleton_inactive.data.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAActQTFRFAAAAICAgMzMzOTk5Pz8/SkpKVlZWSEhILy8vHBwcIiIiMTExNDQ0Nzc3PT09TU1NREREQEBAQkJCR0dHKCgoNTU1NjY2Ojo6RkZGJycnKysrOzs7S0tLRUVFJiYmKSkpPDw8IyMjMjIyUFBQZ2dnXl5eSUlJODg4Pj4+JSUlZGRkVFRUYWFhQUFBWVlZY2NjZWVlXV1dXFxcLS0tISEhWlpaW1tbVVVVTExMLi4uJCQkX19fYGBgV1dXUlJSUVFRU1NTT09PKioqaGhod3d3dnZ2cXFxZmZmaWlpeHh4GhoaFhYWFxcXcHBwQ0NDEBAQCQkJCAgIGRkZgICAb29vdHR0DAwMiIiIbm5uExMTCwsLfn5+ioqKcnJyEhISCgoKuLi4m5ubhISEfHx8enp6i4uLkJCQg4ODf39/fX19bGxsWFhYGBgYGxsbLCwsmJiYiYmJgYGBc3Nza2trlpaWampqjIyMYmJibW1tgoKCe3t7dXV1jY2NeXl5kpKSl5eXTk5OhYWFqampqKiok5OTlJSUt7e3xcXFtbW1oaGhhoaGj4+Pp6envb29mpqapKSkmZmZr6+vh4eHlZWVoqKio6Ojn5+foKCgjo6OGfhmCwAAAsJJREFUeJxdk8tTUmEYxr+Xc+N6AEHuBoIaDE1JktN46TLqomaaaaaNMy1a9g+1alq1qmXumppaOFZaat5AJBQQDIEDh8OBAxzgdDQl7V198/zm/W7P8wLqFZyX8E86X6jPmUhyFH+ZmkumE11SQAcX1NCi0heoO2MjuC6hOvT87S+r+WKP2mlgm0Yh58/Z5dNRfJAzVaXUGQ0w7W6HYjyM3MkrCeCLFk0WaxZP6ZWGNeLqZ9I3a1rgyaZyW3LaxAzJuqInlMb80Nwch7pG3rUhqFSwVxWmf9KFmky1Y98mMpKbgZ1hbRcpEK8ltwJkVFvquKKAppTyTQoRqq8zyNohr6kgqpTTtj3ZOlWACW6grfjkCAKUEgFdQ7Gv4W2t3+UwXf3V8gFmd+erxhH5kSWOJnVQxvSlYt2ZtdS3fWXwVLrm3H11s6DMkR2HgVE1JDMrFvJDbEyyAh4o0KU5eDu/7NhvuoICh4t2cXNo0UlEOi7AHy6psLuQHIRkuuXztijIivZYRW09yjc7gGv9ZHRaeWCIt7OK4NipSfCxHhJrEckCRsoffBmW1Q9FzB8gASQONhuWGwv2A54Ho2L+O4lHRcuebuROZqCWHGASOZNdAWVNtAlufv7LbDI+8w4I03UG44ZxKbb+SFJFqixDAbI55iBvZY2lVByMZU24G1t+ziJPA+cXDgF5Ma80jo6IPjzep0EbWDi5+oBMexI/aHZf9mj4ycYtELCV6TdlMJmgMDGQIqC/Rr5fP3FQP36NxmBxozglHQvthi0QgoRegL4XldNshB4nhyGeur12vDVaowszXoBdgo+uneVq9CnAlle7s2qeNEBRp5S+Th6sLPUyGbqnqxjMqIPLX4V2A5/HlvfXL+TZ9izS9uTNPiSk9FzK4HvFXJ4Fp0tUAYuQQRKI5PH/k4LQ1Vm0iNA0el3tSX8AU0swIxzzxF4AAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/conjures/conjure_undead_army.data.png":
/*!**********************************************************!*\
  !*** ./asset/data/conjures/conjure_undead_army.data.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/conjures/conjure_undead_army_inactive.data.png":
/*!*******************************************************************!*\
  !*** ./asset/data/conjures/conjure_undead_army_inactive.data.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAdRQTFRFAAAAKSkpRERESkpKPT09MzMzMTExICAgNjY2RkZGPj4+RUVFS0tLQkJCMjIyIyMjJiYmQUFBW1tbWlpaNzc3KCgoTExMR0dHSEhIPDw8UVFRPz8/ODg4OTk5Ojo6JycnQ0NDNTU1MDAwLy8vTU1NLCwsOzs7KioqJSUlJCQkQEBALS0tT09PUlJSVVVVUFBQKysrSUlJZWVlYGBgYmJiZ2dnYWFhVlZWTk5OVFRUV1dXZmZmXl5eXFxcWFhYWVlZZGRkLi4uaWlpbGxsNDQ0bW1ta2trISEhHx8faGhoU1NTampqlpaWdXV1eHh4HBwcGBgYb29vioqKsrKyycnJGhoaExMTdnZ2iIiIjY2NFBQUcXFxY2NjX19feXl5e3t7cHBwf39/d3d3h4eHc3NzcnJyhoaGfn5+bm5uXV1dg4ODkJCQdHR0iYmJmpqakpKSIiIijIyMk5OThISEmZmZi4uLn5+fubm5sbGxlZWVlJSUgICAgYGBmJiYqampoqKit7e3vLy8tLS0rKysnZ2dv7+/vr6+r6+vpKSkp6enurq6fX19qqqqzMzM0tLS09PT3t7e7+/v8fHx5eXlu7u7o6Ojenp6q6urtra2sLCwoaGhgoKCTW+wpQAAAsFJREFUeJxdk19P01AYxs+zlrKN0g7sNkZBGAzdEIhCIooKmig3xgtvjB/AG73yxg/jRzAhRk00MV6JMWAIZEhQJGVsgzFY2d/SrV13VjdUFE/yJifv782Tk/M8L8jJAfCrzL+tPxcnLK7BLEqIC8XT1GNURc0WYRosIfwR9aj/UK/GtDU16wxlm/KkziROqNd25yRoQu4MZbWsl6hctctUf9MhaGr/Xi+wh2q3Br03Xevd7N6xj+mFpC4SeYOGbYKCJu1EMn5A6cv7o03q5oWUI3TobkgFFDkbSvQ33o7yt55kg14EdSHmS3WW3MWuOEwM84lOAdiEtA7iHvTYpXpL/GggZ/lLJR4C0bPe3ATWhDg8dJjyNWrkTeYAXQ53ojJDkmx3pmAPbrWBbR1vQdVaihCVJWnRaWgjJFX1MAPLYomD7GM9+mHcyblVhgZrBq3rnFPYoVaQ9e2iI9xOCyuzi8Ytc35Mz5HW8kS0ECE0NrB9E/CHPMCHWy3v7mI5d6ZO9CozsWyTDifRruxjNHAwuJWZwp6MVSbRngknZJq0vWzNaUx/w3S7eaCOSHg9636rXTfY70TEboCmw5v2w1VMBV+NMWqZdfa1Ro2InPoupvl9yeXjdKFPQVAKvzQpkTrT/jx726F9qXAaN/nxAdJMcQlkJjhHHe3ZmWz+kL/DwsrmDvJdW9P9MJUFEHYmOi1tLTLDIIdnQ8DSbqCD2biH1Y22ZMMj5vJ5kvk0WimW5L7ebHa7UOStymMoqa9NB718zVWWz83RQH4yov9Y4MilGjviUtbjx9l4+oIOXTaVWP/81Djm7ViPLFSt8Pu137m6caXpt7oUuxrmQZTcJIqe6JuTTD6Smxgr40BJbH5bue3ZP3m+b93U+eMJ1FryLheenN6Fa5NsUPUhI+nC9vzn/zeFkNA1x9RGpVN8rpy0fgKrlCunDxa4SQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/conjures/conjure_zombie.data.png":
/*!*****************************************************!*\
  !*** ./asset/data/conjures/conjure_zombie.data.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/conjures/conjure_zombie_inactive.data.png":
/*!**************************************************************!*\
  !*** ./asset/data/conjures/conjure_zombie_inactive.data.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAZJQTFRFAAAAHh4eLy8vMDAwLi4uHx8fICAgLS0tMzMzMTExNjY2OTk5IyMjKSkpNDQ0MjIyNTU1Ojo6Nzc3QUFBTk5ORUVFPz8/QkJCKCgoPT09REREQEBASkpKPDw8KioqJCQkPj4+SUlJTU1NR0dHQ0NDIiIiOzs7RkZGUFBQVFRUT09PSEhIS0tLJSUlODg4TExMVlZWWlpaISEhUVFRW1tbX19fWFhYU1NTKysrV1dXYGBgYmJiXFxcUlJSZWVlZ2dnYWFhbGxsY2NjXV1dVVVVampqb29vbm5ubW1tZGRkHR0dcnJyc3NzeHh4d3d3dHR0p6enkJCQf39/fn5+e3t7HBwcnp6ejo6OhoaGh4eHg4ODaWlpGhoaWVlZJiYmjIyMjY2NiIiIFRUVJycnj4+Pi4uLdnZ2FBQUGxsbGRkZiYmJenp6ERERa2trcHBwaGhoExMTFhYWEhISFxcXcXFxXl5egICAZmZmfHx8fX19k5OTgoKCm5ublpaWhISEkZGRmpqagYGBioqKmJiYkpKShYWFJVIDsQAAAsBJREFUeJxdk0tPE1EUx8+586LTlr54SAPU0jZYw5vgCxNj2AgLNy6MMboxfgQ/DAvjwo2JxqVsQBPlpUYw4U0tgi1QhwKdaWfa6by8EETwLu69Ob+c/705538QThciOgTAZox/ob8XHk0OsEpPtJnSeerFqoAIaANDJVDx5c5Qr8cydIEIqLECmlXCKqFfpzSS91e8skhFKy7NFEAXLMbIndCE1LgfKBsBKlkW0SaqeOg1c1g6pp2Z1r1qAMBNU5GotZbKF42wVEjOHVGxwagIRtD0H/2noha9hzXg4vN6cpZSPuRmwLQNvpFCS5P5qibyhfb1soYGAuvzO94iKEmHIJZMReUZK6A07u84to6c3Rh0mwVLxwYfsREIFrI6qW/YPbBKBBlPHde8oLBQFcIt6FCKmZQRERSZqyD60HMpvdOaGIv/7vAALaZjbWUvHjQXNNV2sJb1t0kb0RInFOJFl5ti3JZ2uRur7J5jo4iR0LR9OYHztrXP9wUpzc/cfdu/4YTyGorNBDdvr/XjZDfk0h30aYKvHny8tb7BKgyKobC1K4Ks3ns5PM4MRGmjNmYffu35kdN8EooNcZl1Pg+PcbTijzaj+3U40d7y/ApZDekSenytgj31FJ1RzoC45zou5gb8ys+ehbIqaQihka2WqaHxnSc098Wgs1Qzwk5XEpHvkeWMhMD0DqZ1uXapqYdzvQsvPEZ8Q7rsdoOff09LBzfdPB/L7k2PBN3518kBMno1HFOzeveHL0cdbOtMppz2hc3U/ZlNwGCxN1mPqxcy+lL22Bu9d8iKGSlM10gax3ex/dSVK9A0N3Piq6H+mpQTVddQcXVQdy3HWcv+NHnqyWee1WQGuMMEpCp91LeM/G3ijJ+TsQ7Xmo0BKAOUY9ZieuX8LPi44bSvaxYcIuvb8v+TAnAtHaT7AcRmT0N/APtmKo6Cx3PnAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/enemyDebuffs/Death_Mark.data.png":
/*!*****************************************************!*\
  !*** ./asset/data/enemyDebuffs/Death_Mark.data.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACJVBMVEXMAAAYEzIcFDsdFDsfFUEjF0koGVUjHEZKeIcdFz8nHlQiGEYiGEcjFUgdFTsYEy0WEigaFDIkF00kGEs0R2ZJeoZJd4gaEDgYDjU1R2kmGFIeFT0cFDkaFDYaFDQgFkQoGVZHdoNKeIg2IMobET0ZDzckGE4iFkkeFUEgFUVHdoRHdIozGNAgFFIbEjsbETscETsmGVMfFj8mF081RmlIdYczGdAwF8keFD4eFT80RmUiF0gkGExHd4Y2IMkzGNEgF0EdFjsgGDsdFT4eFkIlGE4kHUtJfI4tGLEeFzkZFCeRhnC5sp0qJDElHU9KhZNJdJ0zGNIgGTsZFS0bFDdAmrJlXVPMxrRNkp5AVrcxGM4dGDIYFDFNSU1W1+NQtsnMyLZPnapBXrorGKgbFzgfGT28tZ5waV8xK0LQy7lwaWBRq7hTocEfGTQdF0PMxbHSyrXGv6XCuqPX0sAlIlFbw9EgGToeF0woIj94b1qimH22rJfRyrcpIj8nI1YjGExg2OMoJ3IdFjgYFDIoIjyxp5CQhWqMgWYmGFElF05FfJ1o0+sbFjYbFjSro4peVUoZFTFFfJ4fFT9qu+hnneIZFTRPR1NBOUYnGVQeFkAoGVdvkuNxe98gGkIZFDEjGEYjFksZEzIfFUMiF0pKRZN0Zd92V91rR85LLpNNRpkpGVkZFTMZEjMcFTojF0wnGVMnGlF7Tt18St4qHFcfF0EZFDMUEiR0Rw+vAAAAyklEQVQY022QsQrCMBCGr6G1l4SqdRXcCk7ufQBHwcEnEGd3fRafQp+iUOjcyUFdVXCTQrwkDVbJNx0f/13uAuAhgMABitniGcLw1XdSqbCViXOgrYqoCkFeJt8kEWsppsaYJJgoSf59yII6GTxGHXlPY5MU3SRXytf+J1njpOgke54kXfSmqXr5n5mRXomBIGreUguRnkjyI2JeIZYlYpUjxgVdt5rb5huM7T9tGgYLzq+IyLOMIyaDg1xSu9zvZsKSbOW5EGvw8gEL/GObfhoqMQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/enemyDebuffs/bloated.data.png":
/*!**************************************************!*\
  !*** ./asset/data/enemyDebuffs/bloated.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAA69JREFUeJwVkUlsG2Ucxb/5lvGMPTOOYzu2szhKk7hriGgiIgStkBoQSlqJIHHocuAAAg4gQIUKoXKgoQeoVAl6KZGQEKIlAhUVkFhiQBCJEFoIxGlaJUrqLHUdb7E99sx4lu9j8s7/p/f+v4fH33hNPpBdWyK3JvssKR9/6iuEOchBwAG2I+AwMzj5yZw6L4l8otcM9ZTUrB8nv1RGMgf8rSueUK3j2DWECUIQchyAADBAKaMUOUc+Hp5+iw/ltlBqZprdz2zjWkNf/iewL3O0ZeyEB3shhghDiDjXuGNjzLGoFV/giFHX2B9LBnWExME85olXs017O+AhXsIj5Ia5JTG342NuFHMwdBBlJpHM+H5FGz3/U/zhTdzf2RGv7wENHvNo8LDSu9d7717jv5s6hO5jsCmAB4e8m+vGHfHVyF+nn3zmZ9Wwr7z0GF617kAsB0enfAoGkH37RTHWQ1pa0fKCIXi45h4y/sL606ebkWLV18O3zozJTApRCYdqfe1Cp7knRTH6bDxvaA6g3Njbwdya2T0kXvmgYFTp5LniE8+FQK49yHTEqEY1fJAfNA2HYQth5NguAJcepTs8WP6uqavUsRhEQFII4IjCoYy1XqRZDFxxABl+qVNFPEQNFx/XFrbTYd7gWKADlzftpjbiImXugrAclKHoIdj2bgNNEL9/sf/SRfN5f3Kisn/U1xNChQHy6dncsxeC33xYfeBxKRpzspCt6rmSWladAp7KzPGcNJwaDgsTh/rM/ovgUOAYRxftnrT/QmgwIXe9z9zla1WPw1kAQIfZgEFs2HrUF4Oi8edibbivJWFHZjO/PBSR3z1bOnxKbitZl8/XTpwJVF65LEAB8Q2LalpDxw92KlltjYrtzsvfTV0a8XnQzV9r16q54qp2/T1r70dScd3avOtIqr9mN2TCG2SVj2zjem8ynh5J5/VeoVZMG927RVGGw0eVud91TGC5YYW7SMduJw9MQqxC1XA8sLlLxZXbvUI5ussX5ZAlz55UO74WRBiNejGhHpHXHCfxiKi+OZGlG8uNhYGmoUqpOztj4a0NmOf+bVci7jU/e9xz8nphk4ZJEJM04aGqOd2z7xRXIkFfYYlVUiB5pHV0pdaCdUf3e2UlpGfafiCpscyP+bWrx4Ov2+c+L2RL5i45dOMqa+BtTTebBPG+5+/bxHrUdwo3x+hQwreFp2/M5zu1jXpZtypeTt83IERoWxSDSNI3E4jFkvMpxavYQVrt+m0R1P8HgULKvA0RLa0AAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/incantations/darkness.data.png":
/*!***************************************************!*\
  !*** ./asset/data/incantations/darkness.data.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAPxQTFRFAAAACQIPNBZ4VijTGAkvcy/ojDz/ajTbdjb5mED/FAcmkjn/nkD/SDtuMipVQTdjVTKQukr/BwILRRh01VP/VS2JNy9WHBY8Jh1IOzRWm0D421X/FgkqiTvQzFr/NChTHxRBGhQ5Kh1LWC+J72r/Hws7q1P4sFj8KBhNNg2iHBI+IxFWNA2cQypq8nn/nlPivWr/IxZDLw+HHxJGKhFqJhFlRStt/4//ZTSZWDSEIxRFHBE8JhhIGhI7LSFNwHP/Kg1OQyVrJhpGJR1BJh9FKBpKKyFKhU6/KxFSIRZBHxhAHxg+IRpAIxxAJRpFKxFTKg1NJhFLHRJAKBJNk7STsgAAAHtJREFUeJxdj6EOhTAMRXcD5s0xjcU+g0fy0fAPCCwWvTzVBwQorBuDcESTnfSuLdQL+AooZo4ihWPlNQgNz8IkwuBiYutELg/3z8yjE8WjYxChoyARuWT25IyMEjFf/DLpmHvrx1Yh0lJYTNdAV24NxdWN/qg/2fuWBwfSWSYPMwZJywAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/incantations/darkness_inactive.data.png":
/*!************************************************************!*\
  !*** ./asset/data/incantations/darkness_inactive.data.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAHtQTFRFAAAAAgICDw8PHBwcBgYGIiIiLi4uICAgJSUlMjIyBQUFKysrMDAwFBQUDg4OEhISFxcXOzs7AQEBQkJCCAgICgoKEBAQLCwsREREJiYmPj4+CQkJBwcHCwsLTExMMTExMzMzERERTk5OLS0tODg4DAwMVFRUGxsbOjo6+ag5qgAAAJNJREFUeJxdz8EKwjAQBNAMDRqT1kJaEA/+/4d5EFEDbW1aY+NqklLFOezhwbKzYH9BmgAjogU4QiaaZpBIcWQjaM99q4MMmQkgS9wLMHTbZ2MD1Aqed8hN5ftrhBLDaS/HduebCPJwVg+ssMnoGFd0ljv3OSYuhTfpbPUKbZy42bmYVIzWjvV2qa5Hyaww319+8gakfDUPpU5HkgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/incantations/invoke_death.data.png":
/*!*******************************************************!*\
  !*** ./asset/data/incantations/invoke_death.data.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAALRQTFRFAAAADRQYN1VgMjtdMU1VbqLQU2KlMR9icI3/UDL7NCNqNiNobaHPWDT/PCuFPi9tNypwOV1oa3j/SC3OMipYt7auxbmxVZOiYlb/OS14RUF0hP//9fnrWqe2XmL/QDdr//Pm9fLf///7QYKNbav+Qzd+xbmw///b////ESMljP//Ozd5Rj5l/u/OpJaNRXuPhLb/Ni9lmY2QPDReSlaKnJb/c1rSUzyWFBIlWECbhFXihFPhvEoaAQAAAGNJREFUeJxjZEADjBCSkZHh////cAEWqMAfqAALXOAPWICRmxEq8P/rf5CAICNc4P97kIA4ksBLkIAsksBjkIAyksBdkIAmksB1sLX6cIGLUIeZQAXOwJ1uART59/8Ewi9IAAAg5TwPJ7CblQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/incantations/invoke_death_inactive.data.png":
/*!****************************************************************!*\
  !*** ./asset/data/incantations/invoke_death_inactive.data.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAHJQTFRFAAAABAQEExMTDw8PERERKysrHBwcDg4OLCwsHR0dKioqIyMjEhISEBAQFRUVGRkZNjY2ODg4IiIiKSkpFBQURkZGVFRUJycnJiYmUVFRTk5OXV1dLy8vVVVVdHR0BgYGSUlJGBgYNzc3BQUFGhoaKCgoRT6CZwAAAJRJREFUeJxdz20LgjAQB/D7kwwnWiKhvYvo+3+kiN6lhJjKNsbi2pZYdC/u4Af3BPoLfDJAzLxCsoBbIElgfRHsXARIwEjSKbPmAFudGelbdKrkGKDCs4wzhh33ARrMRYQp5zaAqM0r9zBv0s4GOOKhDj1V92zPt7hWZFNpSQyFssthJ7Q1dQ1f19PPwFjw5fvLT7wBvLM7D+Qdgo0AAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/incantations/splitsoul.data.png":
/*!****************************************************!*\
  !*** ./asset/data/incantations/splitsoul.data.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAMxQTFRFAAAAAAACDQkSBQINFA05CQUaBwULKB03DwstQy3GDQcjQS2tJhprHRIxjTffFA8vTTbQNiOWGBFFTTbVBwUSRSuSTiqW7lL/NiaPLyZtYDKzTjTLQy2t/17//3j/kEX/ZTTLjzzrPCuTPCiijTfh61D//3n//27/XjH+/2P/KxhQGBE5IRZeGBE7ZSqHsFL/VTL//2b/7FL/QCuTWDTZKiOPmUX//3P//2L/TiqYTjTJMiZmMSZrPiqe71L/NiWWTTbSjDfhCwcjEg05FCYEUAAAAI5JREFUeJxjZEADjFCK8R+QZP73HyzAwvibjfEnxw8GTsZvYAFWNkYYeAPRwsMJ5T8Fa2FkZedkhwjcBRvKxCoL03EFYosOmPNW5NPj3//AAsoCUPmfvyFmSMuBuL/vfP8CcZjI//+6jOeNzvz//+s3WMDp+HcGjh/s/3+x2u0FCzAy/QUqZfr/H9kvCAAAK8MqD0zBrAoAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/incantations/splitsoul_inactive.data.png":
/*!*************************************************************!*\
  !*** ./asset/data/incantations/splitsoul_inactive.data.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAHtQTFRFAAAAAwMDAQEBBgYGAgICCgoKBQUFFxcXBAQEFRUVDAwMBwcHJycnGhoaEhISGxsbFBQUFhYWR0dHERERDw8PHBwcUFBQa2trLS0tHh4eKSkpExMTRkZGbGxsW1tbICAgUlJSCwsLGRkZOTk5Hx8fHR0dMDAwaGhoSEhIdQN/cQAAAIlJREFUeJxdj90OwjAIhXv6Q6PeTBMz3//t9KbGZG6jrKjtZoznAsIX4ADMn7BlfQdbGnAQ6zKxiZgq8AEARyx+kDayJ3w0+dRG7I5CJcO9AvjY1frGuXUE6oEHMs+iFXTmnE5ImcfV9ijRyOWq/GyH+YM4jKSqWdpSmg1xWIrXZbUt2+0/v3z1AlWyMg9WmGcVAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/incantations/threads.data.png":
/*!**************************************************!*\
  !*** ./asset/data/incantations/threads.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAT5QTFRFAAAACQURLRRQNBZaHw02GgstgS/IaCWbHQstBwINpUH/xU3/qEH/003/hTHZHAsrnDbi61L/Sx95AAACRR14zFL/FAklPhhm6U7/cCrGAgIFmTvm817/Sx15SyOKyFL/EgkhDwcdxUr/cC3lIw88wEX/5VL/WCGHDQcYoUv/ikH/IQ9BUCG2ijb/UiGQqj7+DQcWFgstXSrDkj7/fjT/Yyi341L/ijTbTRqeayXZYyax8Vb/pDz/RRqSEgklCQUSYiHJfCj/RRx/3lP/hzTVGgs0ZSbYdC38NhZ0fyv/cybzGAkxkDnx6FX/EQcdDQccgTH/NhZxMRRojDL/XiPGdC/G3lL/NhZiEQcfjTb/MhRjhzH/XSPDFAkodC3PrUP/iTf/lTv/eS/yBQILQBqFUB+rHA0yKxRTJhFICQUPbG8YKAAAAHRJREFUeJxjZEADjGACCn5ABTgZ4eAtWECEkfGVOETgMVhAjpHxgSJE4CZYQANqAifjBaihhhCRU/9htnDqQ0QOQQXs4dYeBAt4QHib/BkZ14MFghgZj1kzMq6MYGRcBhYQtoe7bC7U0Fh2kJ2MjNNhtiADAAnTFQ/GqxcJAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/incantations/threads_inactive.data.png":
/*!***********************************************************!*\
  !*** ./asset/data/incantations/threads_inactive.data.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAKhQTFRFAAAAAgICCwsLDQ0NCAgIBgYGIyMjGxsbBwcHAQEBMTExPT09MjIyQUFBJSUlKioqR0dHFBQUEhISQEBABQUFEBAQSUlJHx8fTk5OExMTPz8/BAQEISEhCQkJODg4RkZGFhYWAwMDNTU1LCwsGBgYLS0tMDAwHBwcLy8vKCgoJiYmFRUVS0tLREREHh4eJCQkDw8PKSkpDg4OICAgNjY2Li4uFxcXCgoKGJpTjgAAAKBJREFUeJxjZEADjGACCn5ABTjBvO9cjIzvIQJCjIxvRBkZX/JzMj4HCwhy/noj/Z8JpOwBWECRkfEXO+PvD2K/70MNFRFmZPz3g/v6f5gtnEpvBFjvsTO/gQowqjG/F3n4XZPx0n+wgMHPu/91nrI+VeRgvwAWMPrMdNP4jfA5aQ7+cxAtRnd/8HJI/GX5des7zJZ/Kve+/DI9BbcFGQAAQisyD1zL05QAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/living_death/living_death.data.png":
/*!*******************************************************!*\
  !*** ./asset/data/living_death/living_death.data.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("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")

/***/ }),

/***/ "./asset/data/living_death/living_death_inactive.data.png":
/*!****************************************************************!*\
  !*** ./asset/data/living_death/living_death_inactive.data.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAhZQTFRFAAAAra2tenp6dnZ2e3t7dXV1aWlpXV1dUFBQjo6O1NTUqampioqKg4ODfn5+jIyMhYWFZ2dnSkpKampqnZ2d3d3dl5eXOTk5MDAwLCwsLi4uTExMf39/fX19V1dXQkJCZmZmoaGh5OTkvb29WlpaNjY2Hx8fFBQUFRUVGBgYKysrNDQ0Tk5OUVFRQEBAU1NTmZmZ4+Pj8vLyzs7Os7OzOzs7DQ0NDAwMEBAQFxcXKioqRUVFgoKCcHBwR0dHhoaGeXl5cnJyxMTEi4uLICAgCgoKCAgICQkJEhISHBwcLy8vWFhYREREeHh4T09PGRkZTU1N4ODgu7u7Pj4+Dw8PBwcHJCQka2trSEhIPT09RkZGYGBgPDw8KSkptra2GxsbBgYGdHR0QUFBPz8/hISE8PDwBQUFCwsLDg4OIyMjc3NzQ0NDYmJiSUlJ7OzskpKSMjIyExMTfHx8UlJSgICAODg4oqKiHh4eNTU1d3d3MTExaGho5+fnwsLC0tLSoKCgb29viIiI1dXV9fX1sbGx4eHh8/Pz1tbWXFxcbW1tycnJ29vb0NDQmJiYz8/PMzMzbm5un5+fNzc3S0tLGhoaJycnJSUlOjo6WVlZVFRUW1tbERERZGRkJiYmZWVlISEhX19fVlZWkZGRlZWVo6OjgYGBbGxskJCQXl5eh4eHpqampKSkVVVVYWFhY2NjFhYWHR0dcXFxdV0kfQAAAqZJREFUeJxjZIADRij4gRCBMTghMr/YgMQ7VElhoNAnfiDxl+UbN5B6iCSpADMSKMnIeINLnvESXFIfLP5AkZHxPxPjWxEQ58MlqKT1aUsQVxBIMDC+F2Jk3GvBw/joElhS/qUrzFCgyk8fPuif/GvNeE17OUgyinGzHyPj5wN+z6UYGL5+ZHz/yZTl/m13xrlAST2BR+9CmBjvXZfTYGNgePCB0QBoxCZBu8OqaxkZku7oXTAEOfLmWwOG95c0bnoy3GRWZTzxxGUuo57tZV7N3W6M83V0zur+f6fMuO0ND8eDr6xBR10uMSbdlL3u9UiecXkU45FnljfPyUQzdmafcVyjd5RfD6jz7bejufucGRnPGd/k+iYJDKbXvy/dY/e8/0gbKMkkXdvyZEEtI2NH6Ld/Box/txvI7vl6TNT+qAujntwei4CnTNe/2vT6nJUT+7+xY7UQv2kJQ+9xsCTTp8MBjo+ZD0QffB5Q5hj0ZJ5QbmHSXG4PkORHS4cVihYPGb7dYtgxIyvV6Nrll65Ma14EPH7Czxh8m/c6j+WamRvY7bmbtLX/bPVaHzV1Qv9Tty9iH4EhxCt7WMivXUtbmFuOZ6v715opc64mKRwFarwElJTj+2c9USL1QV+w7JM/R+sY7s2pmeJ4Ufew9nJgwOt9tBbWPrNLNeGD4Oy0/EmMXzPz5ruBNIJiJfm0nKI1Y3NldyEzG+OJXSHaV3Qm/TX4/nEtOLL1bJdPmSUjc/lCtOHMXwy/f9YzruI6w3AJmkyS3ilNEbR3YPxWPf2rNOOpPstbwsCohiUwa5ntM7YGZtt8S2u77BzLGRp07RJS0sx1DPf4/Df/+IvlzBYqrm2fkZMmSDOzEPfKAtY+EeW/ny+hp3gGhphLOk/4HjGYzoWLAADblwHADRJIYgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_0.data.png":
/*!*************************************************!*\
  !*** ./asset/data/necrosis/necrosis_0.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAMlQTFRFAAAANTU5MDA0NDI2NTM3KisuJSMnKScrMC4yNjQ4Ojo+IB4iIR8jMS8zPz9DLS0xHx0hIiAkLSswQT9DQEBEMjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3ODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovNzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/TkxQUE1SUE5SUU9TTk5SRUJHTElOT05SNTU6Li4yYOZQMAAAAPZJREFUeJy9lMEKgkAURd8dUIIKA2tRFC1r7Sf04wVtWtUPtIqiFhERJRVmOabhczG+2XQ3coY5cx0dBWUBYirEjDxSFflV4fUuTDBiqUqqZl0OdMJ8ghl55Oq3y3EJT7i4kABLVXI17fJeb4dwawDHauSxUXVXJ9mjQ266220V8lipSdcAh+6+p/naxDo2I6+yU5Ou0aOGLBsarszIu+xU/QyDnRcpTw8RFlXIY6WmZyO4n9qqrsfm1Vgqs1C/Z161/LCd3MCMBMhjoWbfshpHR78//S1gxFKZWM3/UcEp9gsv3ow8YjXvosl5WVzAjDxSFfS/fACCqNgQ/zDt2AAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_10.data.png":
/*!**************************************************!*\
  !*** ./asset/data/necrosis/necrosis_10.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAgFQTFRFAAAAhYfpe3vkNTU5MDA0hYXqmjLanDfbhYXpNDI2NTM3XHbacwDGfwDOkQDZoCffkYzwKisuJSMnKScrMC4yNjQ4Ojo+YHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4IB4iIR8jMS8zPz9DaXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4LS0xHx0hIiAkLSswQT9DQEBEdnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4MjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0Nzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4TkxQUE1SUE5SUU9TTk5ShQDuvzL0yVn2u6v4RUJHTElOT05SdgDoeADqfgDshQDtfnv4NTU6aXvsdgDlbHv1aXvmaXvrLi4ygwwMowAAAUxJREFUeJy9kr1KA0EURu+3iTZCQiwMiIhiI7Ia0Aew8a+wiyDiTyFYiGKrlcJ2pvcRoiL4AlERfACbKFiJaCEqimijsGbNrDuzc1PcTeVpMoc9zMeGBUUANbKQlSO3Kfj6QfTbAuArDmTlyG2qFd8/bKsNincdyMqR21yoz9ZWHn/cUxPKkdtchvCBDG7NVh80V8nKkdvBzyBLeOgGLqOtEcRcJClHbkdxR1lqD7USbk3WT4Gjk2NZ+ZTczuBs7HRcHR87ceCrrSXY7MnKt+R2/aVDn09oohT+h5vmceDsJClHbr3zLt/pV0rYir6NXZNsJCtHbr3XasHpUbqqv0Mq5ofKA8PACjWhHLlNu+5Tof5my2S2qDitxhfNBaI2jIlteu2t6k4tkLVF5f15zMUXyMqRW++61lsitkWHmLUvkJUjt0c329Sw9Q/8AsD6fhBJfAs0AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_12.data.png":
/*!**************************************************!*\
  !*** ./asset/data/necrosis/necrosis_12.data.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAATtQTFRFAAAAhYfpe3vkhYXqmjLanDfbhYXpXHbacwDGfwDOkQDZoCffkYzwYHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4aXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4dnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4hQDuvzL0yVn2u6v4dgDoeADqfgDshQDtfnv4aXvsdgDlbHv1aXvmaXvrsIKRmAAAANdJREFUeJy9lC0OwkAQhfcVgaokkCCwJHjKCfDcgYQrERIMAo3nBIQEyQHQSBSCstv9aQcxO2P4TPtt9s1LNtvCBICP6cArRRpFePYAvNsNvFLE0dDVh+MVN/BKkUd9VwnP0wiUoog2XQNEHnmlaKKua4KWe04pqqjtmtm3uohrF15plS5quxbocuaVdumi7gyXyevilFOKKtrcjVVaO+aVoon6O1+Vw9toDByMQCmKaPiWq6kr36cBrP6UiaPxH7W+zrFrB/BKEUdjl9lg2x3AK0UahfkfX4debBBlv31UAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_2.data.png":
/*!*************************************************!*\
  !*** ./asset/data/necrosis/necrosis_2.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAgFQTFRFAAAAhYfpe3vkNTU5MDA0hYXqmjLanDfbhYXpNDI2NTM3XHbacwDGfwDOkQDZoCffkYzwKisuJSMnKScrMC4yNjQ4Ojo+YHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4IB4iIR8jMS8zPz9DaXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4LS0xHx0hIiAkLSswQT9DQEBEdnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4MjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0Nzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4TkxQUE1SUE5SUU9TTk5ShQDuvzL0yVn2u6v4RUJHTElOT05SdgDoeADqfgDshQDtfnv4NTU6aXvsdgDlbHv1aXvmaXvrLi4ygwwMowAAAWJJREFUeJy9lE0rBVEYx5//eNmoe2PhliSykYZbfAAbbwu7qyQvC2UhsmVF2bl7H+Ei5Qt4SfkANpeyklgIkdhQ444583qec2eepf9mzq/+5/lNpzMDCgPUSEsDHAF55G6CCJ9NAL61QjN+fjPRUIldDUNXC1Q+okKrjy8ZyCN3dQxcBQR5CAs5widyuEtFQyV2GfquXkS5Vjjw5eYJj13AVQryyF2OyjWMJJdEI7inPLX5eFKHPHLXQM814a1cK5IdT+N89GxMLZ86cOAYyFVy19zquRahZ2/ttT1an9J42UDukrvmVnWGG7HItbaJdi46HatPIWGzDnnkroH+3diNZev+gLdq0epWuJKChkzscgzufKkwWOkfApaDAY22/Vz03mcpFXnkLsPwWy5NKflCPGD1vWpPzmegIRO7Okb/qMr+HGa1o7mp9ZQzkUfuahi56BAz+oCj2y0BeeRugqD/yx/XhsYQ+axnagAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_4.data.png":
/*!*************************************************!*\
  !*** ./asset/data/necrosis/necrosis_4.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAgFQTFRFAAAAhYfpe3vkNTU5MDA0hYXqmjLanDfbhYXpNDI2NTM3XHbacwDGfwDOkQDZoCffkYzwKisuJSMnKScrMC4yNjQ4Ojo+YHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4IB4iIR8jMS8zPz9DaXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4LS0xHx0hIiAkLSswQT9DQEBEdnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4MjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0Nzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4TkxQUE1SUE5SUU9TTk5ShQDuvzL0yVn2u6v4RUJHTElOT05SdgDoeADqfgDshQDtfnv4NTU6aXvsdgDlbHv1aXvmaXvrLi4ygwwMowAAAWNJREFUeJy9lD1Lw1AUhs+bVhehpQ4WRERxEakW9Ae4+DW4VRDxYxAcRHHVSSGb7v6Eqgj+gaoI/gCXKjiJ6CAqiuiiUFtzk9wmOfdj9F1yH95wnhBOAgoD1CkWhinUyBhWGhHhtQXAd3QDw1Qrfn6NqmRpxtDVBpEPeQPDnI8vehUrLRi48gjyQDrMZQifyOBOq0qWNvRdfZC51uDgVyNLeOwGrlQVK60oXCOIcqngKO4pS+0+VriKlXb0XJPeqeHI6ScMZ3A+djYujk+dOGTbyEo7CtcS4tlnuP7aIc+nNLGXdLHSjv473GxObjg7CroXXTWnXyBhi79DVtrR343d5vQNDbpv1aLTI3BV3Q1WWjHY+VJ+qDwwDKyQDtOFwnPRe7xlVaWUNgy/5dK0kC/KAQzTa+/VwtSCTqWUFpT/qPLBPOaiAQzdm3ovWwtjaUbpoiPMxgcwPL7dNqmU0oig/8sfvsW0ENtdBZoAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_6.data.png":
/*!*************************************************!*\
  !*** ./asset/data/necrosis/necrosis_6.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAgFQTFRFAAAAhYfpe3vkNTU5MDA0hYXqmjLanDfbhYXpNDI2NTM3XHbacwDGfwDOkQDZoCffkYzwKisuJSMnKScrMC4yNjQ4Ojo+YHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4IB4iIR8jMS8zPz9DaXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4LS0xHx0hIiAkLSswQT9DQEBEdnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4MjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0Nzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4TkxQUE1SUE5SUU9TTk5ShQDuvzL0yVn2u6v4RUJHTElOT05SdgDoeADqfgDshQDtfnv4NTU6aXvsdgDlbHv1aXvmaXvrLi4ygwwMowAAAURJREFUeJxjZIACRsZ/DEgAPxcVMDP+IYrLCKVZGRkZfyAU4OeiWcXG+PMvMVyoXdyMIPABpgA/FxUIgiVfEcGF2CXOCAGPGIjgolnFx8D4iZGP8R5hLtguZUYYuEKYiwp0P//nZ2B8LMfIeI4gF2SXMSMCHCLERQX2jA8Y+BmEwJK7CHGBdrkDWf+ZYMatxc9FtSqEca/LHleQxHMpxuV/8HNBdsUxIoOp+LmoduW8FoPJ7GZw68LPBYdhOdyo/0z1hLiooGm/zB8mDZAkA2MFIS44bXTCjcsjzEWz7O1lfSYFkGQmQS4kzQeL6y3VMmJkTGUggosKWHR0XuoD3Z5EmAvNy8E+IMtjYQbg56JZlv3uso5HDBFcWBm1dFk0YyTCAPxcVNB09Z9iFzFcmF0MKxjDkQ3Az0UFq27UEcVlZKAfAAC0E6IQUcXkfwAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./asset/data/necrosis/necrosis_8.data.png":
/*!*************************************************!*\
  !*** ./asset/data/necrosis/necrosis_8.data.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAGsAAAAPCAMAAADUBMFyAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAgFQTFRFAAAAhYfpe3vkNTU5MDA0hYXqmjLanDfbhYXpNDI2NTM3XHbacwDGfwDOkQDZoCffkYzwKisuJSMnKScrMC4yNjQ4Ojo+YHbaaQC6aQC4aQC9cwDIfwDSlADbmo/4IB4iIR8jMS8zPz9DaXjibAC9aQC1ZgCyZgC0bADCcADOiQDbtEfwnIn4LS0xHx0hIiAkLSswQT9DQEBEdnvwbQDLbAC7bAC6bADAbADDewDXoADot1L0txr2lgDwbXv4MjI2JCImKCYrNzQ6REFGQj9FNTI4MjI3hYX4eADkbQDPbQDDdgDghQDmqyHwuFL1vTz3nADxggDteADsaXvxODg8KigtIyElKScsLiwxPTpARUJIRkNJLy0yLCovgn/4cwDlcADacADXeADokQDwshL2v2z4wDz3rwD0hwDvfgDtewDsbHv0Nzc7JyUqJiQpKykuMzA2QD1DSUdMR0RKPjtBMC4zMTE2ZnjwcwDeewDmrgD1vUf3w4f4xlL4vQD1qwDzqgDzkXj4Ly8zTUtPS0hNREFHPDk/Ozg+Ozs/ZnvueADmnQDxsiH0v1X2yXD3znP3znv3z373uqv4TkxQUE1SUE5SUU9TTk5ShQDuvzL0yVn2u6v4RUJHTElOT05SdgDoeADqfgDshQDtfnv4NTU6aXvsdgDlbHv1aXvmaXvrLi4ygwwMowAAAV1JREFUeJy9lLtKA0EYhedsoo2QEAsDIqLYiKwG9AFsvBV2EUS8FIKFKLZaKaQzvY8QFcEX8ILgA9hEwUpEC1FRRBuFNevO3v9/h9lUfs3Ox5mZwyyzC+EDNEQMvVJYmIGlVvjPFgDf0QS9UliYacXPr1L9rjZIPoIJeqWwsODqi0q9riI8HkQTSmFhISfwiRzuFOp29SHgOl0pLBz8svMCj93AVVJl1wgiLtOUwsJR3Iu8aHf1JKFO16Qzso1gxbFeaRULZ3A+djYuh0+dOLCYyq4lxNnTK+1i4fprRzA+FRNVpu473Axn28ZOmlJYWLnosox+qQJbCXXvxm64YiNdKSysvNVLRo/U1aR6d75cHKoNDAMrogmlsDBrms8l5yjLCvW/5fK0LF8MN9AqK6Nhdu29bk4tqDT4R9X25zEXbaBXCgsrN43eqlKDLnGI2fgGeqWw8Oh2W60Q/8cfs3+QEJJ2BfkAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/souls/souls_0.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_0.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAKJQTFRFAAAAFxcXJSUlKCgoLCwsHBwcBQUFIiIiKSkpMDAwNDQ0ODg4NjY2MjIyBgYGOTk5SEhIQUFBMTExGRkZNTU1Pz8/Q0NDUVFRRkZGNzc3KioqJCQkIyMjMzMzTExMSkpKTk5OUFBQLi4uPDw8UlJSU1NTR0dHLy8vOzs7SUlJS0tLT09PQEBAPj4+RUVFJiYmJycnOjo6ISEhCwsLGhoaHR0d/MIo7AAAALxJREFUeJyt080KgkAQwPGZzXQVsagUAg9RXoMOvf8bdJC6BR2iAguqlURy/cgcH2HmsPC7/JdddhFosJ1GaAAWY7eaSKPNlMVUtSobBGI9UBWLu+pUSbT67a4MpmqoxqD/p8jc95PBVF3e5UiD2V75rckYTFXp+IivSe48ym/GYKpaVVCIAPE8L5IPg6mKYlhGBjYXmS9iBvcvK5zBwXe8I65OKYep6kVJYru6Vpsdi7H/Y9u9FsY6LoDFP+5B/w2Z/vK3AAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/souls/souls_1.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_1.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAhxQTFRFAAAAHEd1KHOyLH+9M4rHLH+8H1mLFxcXJSUlKCgoLCwsHBwcBxAcKGqqK4LAMJ7RNa7ZQLbhPLLhNqLVK4S/BxQgBQUFIiIiKSkpMDAwNDQ0ODg4NjY2MjIyBgYGKGmpLI/GL6rTLa/TPsLdZNvtUNHtOMPmMKXTKYO+OTk5SEhIQUFBMTExIEl7LZDENb3ZL63RLr/aPtnpVdbnf+bxTufxL8LgKYjEKHyfGRkZNTU1Pz8/Q0NDUVFRRkZGNzc3KioqJCQkLGuqM6zRM7DTL7DVTOnyYe3zYebveeHsb+30P+fxK5nNM6TOIyMjMzMzTExMSkpKTk5OUFBQLi4uP4rEPbbZP6jXPM/nXe70ZunvgOjvg+fvee/0TOzzPrDbQbbdPDw8UlJSU1NTR0dHM3y5NKTQMZbNNs/nVO3zWN/pbuHrdOzya+/1R+HuNaPRPrvbLy8vOzs7SUlJS0tLT09PKWqkLZLGKYfCLrvdPuvyRNjnSNDjUOPuVOnyYeTwRsfhObrWQEBAPj4+RUVFHUdwLIG8KobAKZPIMtPpQNvtR83jTdLkYd/sXd3rPsXdKYCsJiYmKm2sK3u6J3y7K5PINb3iPs3oO8rhNb3bMajSKH+7BxIeJycnOjo6BxIdKWOmKG+yL5LGNaLTPrPdPK/bNaHSK3+8DSI5ISEhCwsLI02FKGWpKnG0NYbDMH+9I1qTBxEdGhoaHR0dUDLSVAAAAQdJREFUeJxjZIAARjD4xQAD7EDef6avZPIZwSQPIwy8BvPFoLzfbI/I4kNMlYebegPMF/8sDLLpH/Pd72TxwabqMiLACSDf8qIQoyyUv58MPsRUJyRTNwP5fueNGN4LATkvJW5cIYMPMTUUydQFQH7ICTn19wxCwCjc8f8pGXyIqalIpk4A8iVEXBkZT5vdVzr+4f1TMvgQU8uQTK0HB77ZLyY3RsZlnu92PyGDDzG1FcnUAlDiY+L/lCHA+H+FyOuMfDL40JQ1CWFqCojv58+Qa6pkW8fY0PiIHD7E1PlwQyPAfLnuGSeFlX5/urswjCw+IzSPrYYY6g/lMmxK/cjENzv5FXl8AOsW2A1sGsXJAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/souls/souls_2.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_2.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAhxQTFRFAAAAHEd1KHOyLH+9M4rHLH+8H1mLFxcXJSUlKCgoLCwsHBwcBxAcKGqqK4LAMJ7RNa7ZQLbhPLLhNqLVK4S/BxQgBQUFIiIiKSkpMDAwNDQ0ODg4NjY2MjIyBgYGKGmpLI/GL6rTLa/TPsLdZNvtUNHtOMPmMKXTKYO+OTk5SEhIQUFBMTExIEl7LZDENb3ZL63RLr/aPtnpVdbnf+bxTufxL8LgKYjEKHyfGRkZNTU1Pz8/Q0NDUVFRRkZGNzc3KioqJCQkLGuqM6zRM7DTL7DVTOnyYe3zYebveeHsb+30P+fxK5nNM6TOIyMjMzMzTExMSkpKTk5OUFBQLi4uP4rEPbbZP6jXPM/nXe70ZunvgOjvg+fvee/0TOzzPrDbQbbdPDw8UlJSU1NTR0dHM3y5NKTQMZbNNs/nVO3zWN/pbuHrdOzya+/1R+HuNaPRPrvbLy8vOzs7SUlJS0tLT09PKWqkLZLGKYfCLrvdPuvyRNjnSNDjUOPuVOnyYeTwRsfhObrWQEBAPj4+RUVFHUdwLIG8KobAKZPIMtPpQNvtR83jTdLkYd/sXd3rPsXdKYCsJiYmKm2sK3u6J3y7K5PINb3iPs3oO8rhNb3bMajSKH+7BxIeJycnOjo6BxIdKWOmKG+yL5LGNaLTPrPdPK/bNaHSK3+8DSI5ISEhCwsLI02FKGWpKnG0NYbDMH+9I1qTBxEdGhoaHR0dUDLSVAAAAQ1JREFUeJxjZIAARjD4xcCAg88O5P1n+koknxFM8jDCwGusfDEo7zfbI6L4EFPl4abcwMoX/ywMsukf893vRPHBpuoyIsAJLHzLi0KMslD+fiL4EFOdkEzZjIXvd96I4b0QkPNS4sYVIvgQU0ORTFmAhR9yQk79PYMQMAp3/H9KBB9iaiqSKROw8CVEXBkZT5vdVzr+4f1TIvgQU8uQTKnHwhf/bPaLyY2RcZnnu91PiOBDTG1FMqUAC5+dif9ThgDj/xUirzPyieBDU9YkhCkp2Ph+/gy5pkq2dYwNjY+I4UNMnQ83JAIrX657xklhpd+f7i4MI4rPCM1jqyGG+DPg4G9K/cjENzv5FXF8APgjsQ0f61pYAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./asset/data/souls/souls_3.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_3.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAhxQTFRFAAAAHEd1KHOyLH+9M4rHLH+8H1mLFxcXJSUlKCgoLCwsHBwcBxAcKGqqK4LAMJ7RNa7ZQLbhPLLhNqLVK4S/BxQgBQUFIiIiKSkpMDAwNDQ0ODg4NjY2MjIyBgYGKGmpLI/GL6rTLa/TPsLdZNvtUNHtOMPmMKXTKYO+OTk5SEhIQUFBMTExIEl7LZDENb3ZL63RLr/aPtnpVdbnf+bxTufxL8LgKYjEKHyfGRkZNTU1Pz8/Q0NDUVFRRkZGNzc3KioqJCQkLGuqM6zRM7DTL7DVTOnyYe3zYebveeHsb+30P+fxK5nNM6TOIyMjMzMzTExMSkpKTk5OUFBQLi4uP4rEPbbZP6jXPM/nXe70ZunvgOjvg+fvee/0TOzzPrDbQbbdPDw8UlJSU1NTR0dHM3y5NKTQMZbNNs/nVO3zWN/pbuHrdOzya+/1R+HuNaPRPrvbLy8vOzs7SUlJS0tLT09PKWqkLZLGKYfCLrvdPuvyRNjnSNDjUOPuVOnyYeTwRsfhObrWQEBAPj4+RUVFHUdwLIG8KobAKZPIMtPpQNvtR83jTdLkYd/sXd3rPsXdKYCsJiYmKm2sK3u6J3y7K5PINb3iPs3oO8rhNb3bMajSKH+7BxIeJycnOjo6BxIdKWOmKG+yL5LGNaLTPrPdPK/bNaHSK3+8DSI5ISEhCwsLI02FKGWpKnG0NYbDMH+9I1qTBxEdGhoaHR0dUDLSVAAAAQxJREFUeJxjZIAARjD4xcBAJJ8dyPvP9BUHnxFM8jDCwGui+GJQ3m+2R1j5EFPl4bpuEMUX/ywMsukf893vWPlgU3UZEeAEEXzLi0KMslD+fix8iKlOSLo2E8H3O2/E8F4IyHkpceMKFj7E1FAkXQuI4IeckFN/zyAEjMId/59i4UNMTUXSNYEIvoSIKyPjabP7Ssc/vH+KhQ8xtQxJVz0RfPHPZr+Y3BgZl3m+2/0ECx9iaiuSrgIi+OxM/J8yBBj/rxB5nZGPhQ9NWZMQulKI4fv5M+SaKtnWMTY0PsLGh5g6H64pgii+XPeMk8JKvz/dXRiGlc8IzWOrIZr8GYjkb0r9yMQ3O/kVdj4AdV2KDU1GGhAAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/souls/souls_4.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_4.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAhxQTFRFAAAAHEd1KHOyLH+9M4rHLH+8H1mLFxcXJSUlKCgoLCwsHBwcBxAcKGqqK4LAMJ7RNa7ZQLbhPLLhNqLVK4S/BxQgBQUFIiIiKSkpMDAwNDQ0ODg4NjY2MjIyBgYGKGmpLI/GL6rTLa/TPsLdZNvtUNHtOMPmMKXTKYO+OTk5SEhIQUFBMTExIEl7LZDENb3ZL63RLr/aPtnpVdbnf+bxTufxL8LgKYjEKHyfGRkZNTU1Pz8/Q0NDUVFRRkZGNzc3KioqJCQkLGuqM6zRM7DTL7DVTOnyYe3zYebveeHsb+30P+fxK5nNM6TOIyMjMzMzTExMSkpKTk5OUFBQLi4uP4rEPbbZP6jXPM/nXe70ZunvgOjvg+fvee/0TOzzPrDbQbbdPDw8UlJSU1NTR0dHM3y5NKTQMZbNNs/nVO3zWN/pbuHrdOzya+/1R+HuNaPRPrvbLy8vOzs7SUlJS0tLT09PKWqkLZLGKYfCLrvdPuvyRNjnSNDjUOPuVOnyYeTwRsfhObrWQEBAPj4+RUVFHUdwLIG8KobAKZPIMtPpQNvtR83jTdLkYd/sXd3rPsXdKYCsJiYmKm2sK3u6J3y7K5PINb3iPs3oO8rhNb3bMajSKH+7BxIeJycnOjo6BxIdKWOmKG+yL5LGNaLTPrPdPK/bNaHSK3+8DSI5ISEhCwsLI02FKGWpKnG0NYbDMH+9I1qTBxEdGhoaHR0dUDLSVAAAAPdJREFUeJxjZIAARjD4xcBAJp8dyPvP9BUmCyZ5GGHgNVl8MSjvN9sjJFPl4apukMUX/ywMsukf893vCFN1GRHgBBl8y4tCjLJQ/n64qU5IqjaTwfc7b8TwXgjIeSlx4wrc1FAkVQvI4IeckFN/zyAEjMId/5/CTU1FUjWBDL6EiCsj42mz+0rHP7xHmFqGpKqeDL74Z7NfTG6MjMs83+1+Aje1FUlVARl8dib+TxkCjP9XiLzOyEekrEkIVSnk8P38GXJNlWzrGBsaHyFMnQ9XFEEWX657xklhpd+f7i4MQ8oFDAyrIYr8Gcjkb0r9yMQ3O/kVhAcAYrVjDX4TsNAAAAAASUVORK5CYII=")

/***/ }),

/***/ "./asset/data/souls/souls_5.data.png":
/*!*******************************************!*\
  !*** ./asset/data/souls/souls_5.data.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect).imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAFUAAAAMCAMAAAAkqgFXAAAAAW5vUEUAYtdMlAAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAX1QTFRFAAAAHEd1KHOyLH+9M4rHLH+8H1mLBxAcKGqqK4LAMJ7RNa7ZQLbhPLLhNqLVK4S/BxQgKGmpLI/GL6rTLa/TPsLdZNvtUNHtOMPmMKXTKYO+IEl7LZDENb3ZL63RLr/aPtnpVdbnf+bxTufxL8LgKYjEKHyfLGuqM6zRM7DTL7DVTOnyYe3zYebveeHsb+30P+fxK5nNM6TOP4rEPbbZP6jXPM/nXe70ZunvgOjvg+fvee/0TOzzPrDbQbbdM3y5NKTQMZbNNs/nVO3zWN/pbuHrdOzya+/1R+HuNaPRPrvbKWqkLZLGKYfCLrvdPuvyRNjnSNDjUOPuVOnyYeTwRsfhObrWHUdwLIG8KobAKZPIMtPpQNvtR83jTdLkYd/sXd3rPsXdKYCsKm2sK3u6J3y7K5PINb3iPs3oO8rhNb3bMajSKH+7BxIeBxIdKWOmKG+yL5LGNaLTPrPdPK/bNaHSK3+8DSI5I02FKGWpKnG0NYbDMH+9I1qTBxEdl4jhrQAAAHRJREFUeJxjZIAARjD4xcBAFT4jmGRnhIEPVOFDTBWEiz6jCh9sqjQjAtyiAh9iqjqS6Dkq8CGmGiOJHqICH2KqPZLoNirwIaZ6I4muogIfYmo4kug8KvChKSsZITqZGnyIqXlwwU6q8BmheawCItjEQBU+AHGJPA14LiLPAAAAAElFTkSuQmCC")

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./css/styles.css":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./css/styles.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/nis-interface-bg.png */ "./asset/resource/nis-interface-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/nis-imgbutton.png */ "./asset/resource/nis-imgbutton.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:font/opentype;base64,d09GRk9UVE8AAIM0AAwAAAAAr4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCQVNFAAABHAAAAEYAAABGZUtdvUNGRiAAAAQUAABlnQAAeRVADJxBR1BPUwAAabQAABT4AAAobCmytThPUy8yAAADlAAAAFYAAABgYne5h1NLVFAAAH6sAAAAVAAAASc5p19jY21hcAAAgUgAAAHpAAADrjnVGzBoZWFkAAABZAAAADQAAAA2/EU1FWhoZWEAAAPsAAAAIAAAACQK0gF4aG10eAAAfwAAAAI0AAADTAaVISxtYXhwAAAEDAAAAAYAAAAGANNQAG5hbWUAAAGYAAAB/AAAA+TxlNPocG9zdAAAgTQAAAATAAAAIP+4ADIAAQAAAAgAAAAEAA4AAmlkZW9yb21uAARERkxUABpjeXJsABpncmVrABpsYXRuABoABgAAAAAAAQACAAgADAAB/4MAAQAAAAB42mNgZGBgYGTyPZDooxnPb/OVgZn5BVCE4XT298Uw+j/vvxR2TxY7IJeZgQkkCgBxRA0aeNqNkc1u00AUhY/TtAgWERJiP0KIBVL9EysliVeJGolKSI2aqns7niZubE9kTwN5B9Y8ALvueADWvANvwpKT8RQqtYt4NJ7v3nvuj8cAXuIXHDTPB+6GHbym1XALz/DJ8gHeYma5Tc1ny4cY4qvlI7z6V7ODAL+Z5bSf0yqdF5YdvHe+WG6h43y3fICPzg/LbWr+WD6Ebr2xfIR3rW+WO0haP+9E1w8CMUpVIsVsW2tZ1OKsnKtqrapYy9QVozwXVbZY6lpUspbVhs7LKr6JSzGtlAjFTBZZovL0Qi5u87gKXN8fRKPT8SRqZFSFx/ciBs7Hkyfzr2RVZ6oUTYHpzIAfLZWeq3Kzs9yTQVTEK6n0tZtnSdftuWGvH/Sf6LPUej30PL1dy1Wm3bkqPMnpas9//ARdOQhxB4EufN56QBohhUICSZ5hixqaXPAUOEOJOaMV1uYdm1gK1+TlXILeDAssGamNJXlKnhurvDR5N9wl41Naimdouu36ZOytWCnFBe0FbskxVQFzfa4BIvY6xRgT0sNqTa0Qx48qNRnnJmf//ldm7poeZbQPJ5hS/d/j07OkSpvbKfmt9zEXJ0ZfsN+K9Xaaa3pz06dL6nGHfPeZ0d/ze3a3q/kPhvC4NP/SmooVFZrVdjMU9Et7dzXZ32sFnEhy3vAviB24oHjaY2BhmsIUwcDKwMDUBaQZGLwhNGMcgxFjHVCUiY2JlZWZiZlRgYGpHSjPyAAFji5OrgwODAqKSkzv/rMxMLBUMm5WYGCcD5JjqmV6B6SAWgAQmwwQAAB42mNgZGBgqfzny8DA+u8/759Idk8GoAgKuAwAjB4GUgAAUAAA0wAAeNqcuwd8E8e6PixhbC+7RhgLUXbZXdwJpBMSCOQkkARCCaGFFjoYbIN7L7JkldWutLvqkpuMG930bprpBEhCEpITCKSc9HbS88pnyc03Mjnnnv+997u///fZP6zV7M7szDvv+7zPMzOoVX2jVGq1etD8wlXZq3JnF+aNeWBeRk7W6ryNayPl44arJdVwtawernbGoQtXn+Fqd1SY7KvY7j4yPHbaP96KplWqB1IGRP7uGThc9QS6mNeVoCL6qNSqaFWcSqsiVYmq0aqHVftUv6sT1MzzJYV5JblZDz886bl7Hw/3fkweG/l4dPKz6OOR58ePebBozSMPPvzww/c6NiKraERGVnFmRuGIVSMKM9ZnFRVnFGasHVFcuGptRs6qwg0j8iJ3/u3ruhGT1uatzhgxrwI9mlM0YlrumrzC/LzCVcWoWlbuCNTWiJdzsyLf5hWjwqIRq3LXPoRayet9yxrUx+LCrIyiB5f+l5+SKVOmPDdixKMPP/LI//KKB0dM2rhxRGHW+sziItThoozCUlT452CQmUeMGfFPO/97YZ/oiN2eUhnUK9R3+ozp835UdZQ+6lbfvX2/6ftt3++i2egR0YnRSdG3Yjwxl2IuY0swH3ax35J+hn7GfrX4bPwY3oUDkUgEiTriA+LDuLlxi+L+I+6P/mn97+8/rv/4/k/2n9n/xf4b+u/u39X/XP9f+/f0/4dmjGanpktzXHNRE46PjcfiU+Onxq+LN8bXxtvjW+JPxZ+OvxB/Mf6T+J/if47/Jf7X+N8SjAm1CdYELuF4womEkwmnEk4nnNP+Piht0P2DHhg0aVDJoNJBZTq7zqVz6zw6r86n8+sCutO6N3TXde/rPhr89eCfBv88+JchsUOwIf2G4EOIIXFD+g/RDBkw5MEhDw15eMgjQ54ZMmnIzCFVQ6qHOIaIQ6Qh8hDPkE1Dfhzy05Cfh/wy9PbQO0N/HHZi2Mlhp4adHtY97Pywa8NeG6aQNPkI+Sg5jhxPPkmuI9eTx8lz5DXyLfIOFUPFUhjVj8IpikqnRlL3UaOo0dT91APUNeo2dYf6gPqE+pr6ngoP7zccHx4Y3jS8bfjW4buHHxx+avjF4ZeGX6an0zPoq/QN+h1mFvMSs5BZzmQx2UwRU8zUMhxjY3hmJ3OYOc2cZ15lH2YD7A52D3uQPcQeZo+wp9hX2SvsdfZN9l32ffb2iEdGmEc4RtwZ8cGILxLHJc5LXJa4PjE/sTixOtGcyCfWJYYStyR2Ju5PPJB4MLErsTvxQuIbSdokKmlE0n1JDyY9ljQ2aULSxKRJSVOSpia9kDQtaXrS3KQlSSuSMpLWJa1PykkqTtqddD7pStLNpK+TfkqC5Ojk+GRd8uDkxOSk5OTkh5KnJE9NfiF5WvKC5FeSlyavSl6dvD55Y3JJcmvy1uRtyduTLyV/kvxpck+KKiU6BU8hUuJTBqYkpFApw1MSU9JS0lNGpjyQ8mDKYylPpjydMiNldsrSlGUpq1NMKeYUS4o1xZ6yI2VnSmfKrpQDKUdTjqV0p5xJuZzyWsrrKTdSbqb8lqKkqlKjU4nUoanDUpNTU1JTU0eljk69P/WR1MdTn0idnPps6gup01Jnpc5LzUotTC1KrUitTeVS5VRnqivVnRpIbUxtSW1N3ZK6O/Vg6qHUi6lXUz9M/Sj149SvUr9O/Sb129RfU39LhdRw6u+p/5H6R1rftMFpI9IS05LSktNGpj2Y9lDaY2lj0x5Pm5g2KW1y2tS0mWlz0uamzUubn/ZK2pq0zLSstOy0DWn5aSVppWllaeVpFWmVaVVpxjRrGpfmSPOmNadtSmtJ2512JO1k2qm0c2mvpl1Ju5p2Pe1O2tdpP6T9nvYfaX+kq9LV6X3So9Lx9AHpg9Op9BHpielJ6cnpD6Y/mT4hfWL6U+mT06emz0yfkz43fV76/PSX05emr0/PTM9Kz03PS89PL0kvTa9KN6bXpnPhobBWBwHcduUX6RBk0UrmXaF4jt4w0zoMVuKbTupsdkkW2Vuw0umXBdk87KayMpoXHQJHEZ++y/2N6vQ6Wt2sq8lzuZX0ObwWi8CZBMayvray2IjVlqxzFFMP1dRdFFj7ZvHNbeS1WLgfhzWxbkl2MgTk4XpHFr+esReaKsp4M2901MLbuM1GWjxCHdN5UW7tuHw+Lingggl0LVsDFXiebN0ktGPCbseuevKN2HbH1rqdTMMeiIfl23aFWv2+Zl+9u1HyiljA43S7LHItW/kSX5GftzEuyeCwCQ6rg/PyQlxqk81pMZNGW7WpnKnJG6lMqMjUtytxsMywGbMEbT4P6fG4AhJTJ4fvx12cbGJWreErc6aWxSUZHTabg3NYvbwjLtVvD9r83Kba5qr2rB3Loa8yJVCCBQt95ctJ4vtPrJ9S+3yOzR7Wtcn7Rhvpd3jNFsFmRBZabSgtMGCGglWOAiq1quE6stA28Ytd5K1Yt+h0tf/dHo7CrWItxklGj88R8HrkA+ImxnnK2egm3bxk42yc2cKYaqv5IgETipVYRwlltTs9LLhjPZLsYggdb+XNtay+Rhl8vxFNhkE0eyiPS/IE2f3tJ3Zsq8d8Lpcoy27BHZfSWnNy/bZCF+d0uJwHtwx1yqIskbLgNHiZ0oaJ50vqMa/BJtoo4iYtFFgrKm1mmEXbIIa+LDfUvdmN5sjtdDt5p5k1iBUOg5wvW5uFDsy223HxPTIU65IlJ/OWEO122W0yW1e9d8Gexcdmdq7dXY7VdHRYL1AfxgTcssdpQw1YRIvDJFY5s52vnFrY/eKtSV9gf7u2/fxV8sK6w3khZtvy2e6XqJzn+PzKWcvjkmqskIQH7EF7QNjCeWskUOhyZTBJ6OB9WryGN3Y4Me3egOSCv9Je1EVWe93NSTVMzjS+ojxSHz6kWe1eeB1ngnY0l/ABrZfyMSnPUaYMhq04X8hXFttML+C7rspNzVdOwSTa5rKwRrHcYZCKnOamiDPucVz/K/le7NtjvlOir87AlpzorP2RuhUTdMJIWq4RkUnMjipXvrekbvLrKw8qo2EMpOJEAqQCAaNo7fSVN3DtqJWTHdNtmQyfw5VXFOFa+0oDz9lYdBOepRktufLQHnkPpZ25MpHWzpz9MK6dNlvaLDaJjZi0xx10k067E7kEb+fCqfQcnIBtMFlX5VjFwx3cVFJmwwSTQdBTRo7nzF6hnt17Re7YcuVKXFKdV/Yg9zbCXNrUCgdwx6FG8k5sp2NHwx4mdBhGgKHzQOuWQLDFj3kbmp1+KoAqQAfOlk/jS3I3ZKOw4gSL1Sf4BBbFlLGWrLFV1pYw+o1KgpJfW1S1VRkBVv12zFLPBb2k1+X1SUyD0yMiN+bkWmb5ar40+5kK1IyFt6Kw9wabrJY6ttnYUdixbvdCIJV8TxVWl+sveRlNqsdklTnKVsvV1rCFFdNn5mRiNqsNAQYsxGWnmznatr/59CbM09TmdFHwPc6xhlZDXW0A0xCEbT2U0BXlNrNQ63ifttmsbluQ3XVZ3tR6+UJ4AI3cl3PW/kDny1wz34bZ9joI9NMTRHY86TggbmfE3f7wA7gU9IheyhMmcYtUw2Yv4DfmzFwYl6S3CGarW/DVd+GdFl+VmIWJOY6MxeQDsZW2mmoLYyzKRIGurFdoGAsbYMCed891sRfevOE8S0H0+8s2bGc357k2yMWYWZQ4D+WVXY0sDPRsDZAeFIQiUyxmukudmLNsTHAK9cSjljmj2Yfnj1P6Ko+RyjbIUTAQbn4X2HWNQd2TtpBEVE9ZD65r5jlfeBRu1ptYxXJ3g8KFM6LbajiXmbJw5kob+/jdw1yWZWMBN8xgtzgsdszE2WxmNAnstsNyqPnAPuQfHsmLDGNma0Wjo0rGqpy13hBZ5whKm5jD8O7WOaeTfOXDGnJfVwa0rcHyGr1VPgQynoObWJgf1py4q3LmCxYLP8wqIMiCHXiznbF1QV9hJ1XnR470Dm4QKx2FngKvqc3cjRHhpyGgc8kCJ7HvK5kug8VkEYbV2sFEW132kJ0R3n/fsYfa65O8KIzNhmpRrmYJAl7kTi0JuUvh8HFwdcllW8oSwmMhFmY2ahcb4SR8rrMKotfJehq+gdGhrZgo8TZWmRPL2QUL80pftyRw7OpY7XjjJPuLfCZjy+HLynkM1bXAGJxD81rHHuiUO197lwM1tas35Wnrjc4/s57HYuVttXbGkmnszXrF61HWe0QfvCSwXvGjbeShWJfodLZ+KAghZhdfV+Msl2vDqTiCdovb6/AjaO8Umxj5oDOEYsIm8xxvM1sZs6mGLxAwe8n9jjKKsyPoAn1v3mz+NNLQEc5rcldhTqOot5BmUba5KZfsdomsdp5RbJR2iQFM3iPX9QKDjUPAYGPQeMz2aqESNVqpPIfcUfuysbRC1lMW3mbhWd7Cm6qLDWXK3rt/yc/Elq/LWjKXMjmsvbnOFcl1B0/LTU3dF+OS/B4ZfqFrRbY4U94S8LZtP842tL8JhL8ec8lOFB8aHUolJh+zau/cM1WtZq/Nw4s2O+cwC5W2YlO1BTNznGAjbX5L0MRcWgexs9rtqKossxpG2u3tjTOvCNNxrxskPGM2X5g7MyMuqcosWM1uwR+ss/MBtpXzV0IGTYCO/iIBkj4fA8QnXzharM3a6SMjiDryvyDqyD8RdeQ9RB35J6KOjCBqSgRRU/5nRGXQ7ds4uOGObltTy9bN5aGCjVX55aX1BTtRa5eVzMHbQqi4rKlgo76otDSIijUBOejwi1gQzQnk0mzWs3x5wcurIjjBW61u3s/CBhrBC5z1lPbEh/iyhMJ/mLXXwd6iK/Q5axHKugO7Gtl9t6EP7Gg5AzPujh2aU+8yohuu4PYA2wXDPoPGg782n/Jva/X4nUEgaI8LrHgtm7OKt5rXvoJeZUXz7rF593gN1Qa+ylLC5o6apmSUz0QJUZkRHh+9xcDVmSiLxVKE4OGpu1PKz04Eu/7UMON+0+YA6ZM9XonRXvfLTocX3LTL6jSwi1fyRtPipSjtWniIpX2s195o91vrzb6y4AaM+DkFBilDrryEGQNBY4DyOX2trBPWy5CB/ornvC1bvZgcRD5PBcNq5D817JIM3lj6CgLQaqPdbHXywfp2h7WBba/1lYuz/HeXDK1sRPnjvqlvKGmQqtwPTxjqsFAlQei8ZqtspWxGm1HPFlQ8O2NDJsahAdtIB0oFkjcupavtUPPZZszd3I5SgcslBznW2FFTZwxiGp1XktwyK3vlVtGNuUQ7yinKwRibYLfZWcHCFdlNGCcKTkajm+1YIRQw9jKuthTl0GqDw0yZBBSgTt7L7rouudyX9yLuI7ucLpvDIrImBJK1YrnEBYQmjN8sHr9IQp/YO/LrTtLtcNlsYQpn1pdOzV5ahnECz4cpmnfKHofsY1xNre4A5ZHMlQjP2tohCmIOHDx2tC3Q6a93BuWQhAVE2S2TLl7WMzVz+DWrq1DuNaHcF36AtrPNnMhZSaO+PGMls3zxfUmr1mEEkWfrXnIivK/LV5ZwKLxLuw2WnNBBHLwAQ2EB+pyLOT1Olxu+xk2MsjkmY5VDHsdq68QSK0oQaIwGgdVmLsRRvRkw0gbpVKPL04BAtC34ZogM2Z0WFB5whDZweksNlqfPLnmQIubhKHYJ3V5xh5dsFFxWi9lsNDKzZynjlfmlBZjJyHMcyXkQX2OEzb/ZT1MbHWX2CsZewesLebPdJHJ2DGkIweoSPOzOXVKo/uTuuCSfAzmh7PBwEkIhzugQLWypbK+zhzDkfps6yU3bHGKQRZ7qlFmXz7dNdIteTrLaTFYzX2LH7NU1jmpq7ODlzzpEPdsQ+hT6bNmG7PPfw/l/jOVPcYuHJ67IbVuvXItLCs7FUeBuKju1pKXiGLQfh5IufZOnDBX9IghN7Emr3+CpwFwGscpGGiSrxyMhVGYI+2O23AIzZtNX2GuoWqtgNfnsdezpLtnXfAC1Wh/JaFbJWFUuuivZMk/NZuGmMTxhaKgcYpRBoFZUGMHnWiNM7ggu0USzzaeX8oqRqV2cy+hjlu998Wx5G+a1cB6e4lBeM7OVXGFttTmS0sM6GuJf6qDcvQDLzULIA5MlyedhXO6dcoh67WvDpL+y+zKOvJBKPlb1zPxlzPKF86ueoGasa2qsZU319s329oilr3yGKNhhvxSUWU+z/69e0m13I4S0WgTGlGesWs1j/PoX7UYqI4a3S6LMfvImRF8DnLwxt1tRz1tTU1vIWFGMcZXyfCtpka1O9BMQGXGTu6WhDqtvavO2UUcPlz+maJSYR8c8z5rMFrON5GXew2j+mbmqlBmOfIoguFWMLZeL2IPYe0ZuP3yr9ioF4z++dOAge+JE1+1fyR9Xv7XiMPPVA8pwp4JTcxbxufkvrYKxNMJe4hAfcpX2FIcSNvZI2r0/fq3LeqW8PBfNTnW13UKZI5Ki84Tc3HGlvZcAedwIa8wmUbSyJsnktvvsAVeDvxFGgnmoNv/YM+dHnr3PU2MzId+NgIOV1O61eIXNyMXfu+U408uY0dxaTAbRVckWeKuDla2FO5XHoX3DCRgHxqHbj2za2ubGnPVBCWpx2e22yEZ23WpEQlatvZcyLEikeesdqO9+3mNGCZ+vMuuZ6ryHFDZ3xdo3lt9Y+T5mDdhQ1kIqyiczsrdOdIc1dFiFr5vH65c+WRSBbMFqcfJuf6PANbK7je1F7WvgGWXfUA3hsiJ9W42IWLWrwl3bIlwzwfdD2wu/S/5kPEZYOStibjbaY2cuWzcV5pKrs0oXmBm9IPA2FMq8l9i0qtxdTGWuXL84j621OjmZckkOj5ttamjbtIsiUvhH5s9n1qx5Wb+Cylrm3LucXXIg9zKkksgNn8Plt/B2JyEFpSOiH5OPhYfiKO9y1kjeJcJx4b/pztr32tuFd+wtxVIxhjQoTxpEEULIiWfhiG6jRo7gTMDeYPfYt1k9RsihSxQdWRFr4wWeISAZt7byWzHusOPWF2SE0hOw3XpmUYQtfnMKLp6Uy7YitrgO4eHKVluzdvEz8F6Y0VkERHtZXzPC4amt+zDJKTtspGKKRahtYRb1dcuClX0FMcZnnsNRlT/FlYAmyoXEFeKGRxC3ePMTKxD/9/rfJQK2i+z6U/8LSP/X9Op/23/T/57/Vf/vu6f/Ubf+KyJVWkgTUhf3EEk775l/Gd0JO+h/WR1VNAtVQjkKtnJliWMDoonPlFTLVZTFZjULkfxYU12kL1HeuStuWI0tXr1u5nNU7b2lFYscoYmnz8uhTRevorwYcXxOqs1f7eys92/ZdZ5t2vo+JAUaMbfTFWGJRHUmmsaWAtdGE2mQrR6v7G1lbjq31ZEeTjZJjFGukStlzFmU48ygFPahiUqfJ/c9D33Gsr0T2YavJcIT9CfWnLqHwxuPGSLUvxuGhjMR+0fSensLvAg/6OAlUL/1K4z7VBmuPKtMGv+YMlChlIRfYQ2jLegONys/6D698f9nNQsRe1frh3bEx3fz/hpXuVTr4EQzhjrv9oo+ZOk9EWZ/2NnkJl2ChJI1/yezL4ww+9GOUsTsZcTs/1wR0xa0IB66puX/jYcWtCymtRkt1UWyhbIKPMeiARbJxfnkqWUTDysEpZiV/spjyjPKAyhrTAM7xL67/1Q3q81qyeKLqyJI6o4MONAi11GannYd/ETztru7f/cP5W0OXha2lA+VBNkhy+HdPYGhskuQBREjpCxM2kAQsZMdMyJ0OttaVcpZhFo4jBOXuEvzz/YM7vaXJVwM/6Dd9gaO+EOh1W2iEBfTCyyXU/1wMYpXzsNoM7to7bYzEdYbTtEVZ4sWGEjX8AbBKvPh/rQYpD54fn5McbZk+ZH+IOYJx0JuLdThlX8uXVTDGHpL92tQhBurDTAet4TAjx9wnP6QbI45fF5AilkUI5TO466T3FjAKUgWS7l9OTX5zX/ed4huJ+vyOAP37jvv3Z8es+PSx/Dg7ktbjtQFurxYQPaKDkTVLCJy5PKlfGlOblZckqHWznFem9/ObrV6OQNZYy4xljBFixePXD+1dP8j8FjZIczaUFvvIb1uT7OTaZIivP9rvJZZPpc3ZC9fH1neEDgOSReB9dlR2rTvMNeV7pm/d+51ZcDe5zENGmMlTtz70V2+1HleZHflbX752cVrlmRvzzvNbPirbteW+rY9oaKivIqSrLyi5h2MBsWWgVk/g68omQ1DcBQTp/+FdcQUWgoScFH3vxlHKY5BWb2pyeNwe0iY/r8aSqmJcd9senNfF7Z7a1fnO9Q7h4s3bGHrqv0bCkm9y+ZCEd0gMpscbVInI+50NnoQOZCtTJlY7s72Yt7Mdc4sSsHGrpr2MrtkdtEk4wxMrKx2hHX4ny4Ah3DE2+oou8GBKLTD4DDUxKWK5RUi9yMdiPE9s/np7pnYxOvf5/xEHe/2NG5n6zwuj9SAeU74TjaSPg7JZk6osjHWHHNeTTWWV7TStIRSUiYBBg+XsxplEJkY+2TEwlanLcAE7XUOj7AdpQspFyP++XP04IlDbaxbdgYtFM87OI7N3GCozaTKKjyN63sh5z+B8RUEjGiqnsPNdB174IpMAA4lSFg4PRIj+0NiB3Xxq9VK0vjcZTklbE1FjW0NVZgje0pZiyw4AygRCebyh6tII8Jjt/wb3dv4KZqQSsxeCyLfVkS+CZ0kSbJESjbZGGBWHnn0g/KtLdu//XX/Mczp9PpdcIK2IY5byyxYgRhT9IZ8zFBrNTt4h81tMcSltpZ8m9yRi+W1eSxOCjE/l6t3COHROm1JVW+gIQxxIOFvM5mreQNk4DulILUvxvhktYIVK8RfKoYh2WMzkxa/sImB5THaA2/BIO4CdU6Wm5ystiR4zPNRA1nHy1YrzyOcNM7YWJZmV+r4oXbp/de2Ae59Y5joF32iDzuJfMsW8UPZI7NOr6teioQakhCUtshSzi+n7ovxXnLtdh/AYGDo7Pk3qYO7aoqa2YYKb45YgBllzo0CyouS1ga50XX6JNkguMwiYxLNUq2EaYs8pdmu9dTcl8yvzGOff6lwtP5BTEPYEGkKsjvOy9v3HD+DGDZ00MR8vhHYZji5D4gGNXxNw3MQEwUNwOtgeaxfcrtFxumpF+up9k4+fyt7dIX8cjb51Ow58yvNPKLWSBIKzqDDScGAv9+C+GPF+8qa2MaKNbuUvlRmuV0oZuvEreIORtzsr9/iwqRgneSlPKJHcpHQgTMrZ/BlpbOWIxJqDw+ia6S8yDpzcTiJ7l2ZrETYZuNhG777MsqfV7oR9XTLbqdVjiw3VzhqpAIn18R3YNx+x2vvkZrIXOZdpIlOi7cqsgpCuJ3OeomV20J7O0NYaOdl+RQFi2IUUlmvjFRKlUQF+UcFz1lIS3g0TXSf8+08yb7d1Xr9Avn1yutK/8+ZvJbocVeKdx8jLx09/A5DGHrXuPOd1pCAXrrHcel2xGuNIPUuXCyHiRxMoEIeb8jFejrqru0k2wWPGQmbWoHh9dYKUxWWU7W2MBVFSZ4y94eP/iVFoekH7fz/Kyk68/+Qoo8hKXoD1uGKWQeLcb6s5KXMuCTiov0gkiebcSKyYE8SsZGArGf3z6AJXZXNbuDZmmnRJuTmyPmCTl87e6Lx45abIWw7ys1Iv1ichcw9Tvg57nd/Slez62fyRTm3aMIjBqCe9nlQdv4THWCxboO43LaCETZaSjJQWqoqsZtQ53gLIn0B9uwZeWvL1XOR3SrJ47HJXG2pKOvZbI81xO/AbEfEozvJrbsdHVSTy+lDJqvzH/SRXpuTY6w1tfkFhYgHws3Ya+KbDSTi+KZas8lkZsy1d/vdrbUgZcKZTAbSWGcLMgdgoeNt6mbfyYmOpdSuo/AkVG3ei2k2y9dbyAa722IzC3x1ZFQ38E9oYuaCuKRCmgiPom0ETKSVgbGraeI0deGq/+Rl9q+v+n74mvwsliCUeWdBA5m4OkKeXgEyKrzPpQN2QvR4SPkqC4ZSMOTn/VvPInB0uVykCw2P58JqvHjui9ZXqJlKbOBz5UVWmfS36IsHPvsC0kh4WYmsBWUrgSTlJSVJeeAHZSYEjp70BHcxo7bqUEk/6AcLYfH310ANgwAfoSxU7MqggqmspiKUAKmEYgMVTdzCj9LERMcMLpMhkFktEoFYg56vRWhFQBMOqRDB9MFXGuUtXta/q/nLRtJv90UWZA08Y1ianTUFsbF1Cm6vpKbGcILsdLGg+wk2wFOwgIR+z3yjPDfm5YqytYzRYreZyFzXONHEiAbZ4vLLPkdcyuZQV3sbs3V7p/cwdfJvG5RHUTS9ojysjFAGsLWmWpOZNHusSJ4SPQ/qbnsK8syS1Y18xi2y2qP+K/IRNCWC08wj2WtktO8Jxkohj1KEGKOFr7WzxUqTvcbDBYVht4wweVpkLX/w4wsmPD9ty28BwW2JbN8JDJctvpRNlkqmJhNj6Nhr3UlB9bdIeg6Dycr0O8p97Ww9aKI1mbP54mJoQdZQ9CP/oVXDxK+i4Eg4Svdc2fxn/7JBnr6IfGhl7iIjY0YKlSN5l833FmBnIIU5Zb65n7x+MLTdzfjEOtFDImg1SsxqT3bowjlv+ynyo9IDWZ3M7vWzglmUCYlIm5v3COxJ/dESRTOVt24kR13POK9HNmBrxArRIBGf0TsdQYrw0lK+o1jRbUGdOsmHqjaB+SRBOL0SI3ldQX9DQyvBw4zI/PVc1hXk2GqMO56tV+5jSyQZ5Qq30xsSWT+k7H4PPqUJSNF3QXMTHD5GhCpajaU9A0KojN5NWK0unugx6bR7E4v9VsQ7bbWs9notymHryFrRgrKrByUOqbFuRyiINbYfkrZSEIxRGKVKGaQczxuNcVVCdS1pkvnA0dsHN9XZ66QQUwf94ZFw4geAYzLKtYi9c3I5o+nx6pSxo1MV7Ygbj8Lgc4cbOztZSXK6nKRD5pEytQqWuBRLdQmXR82deBCS7xx47a+fnU9RHlEyFVyZrIybwBo41EOSdwput1eSfAw8vgf0MBs2k3D/EzBcmcBoztN6K8JpF+9jA/aA3SfMowmHDxFxr7DF2otE0TT0xQnKyjssNtZmRYUzdLAG4fKTL9PfEOGPUtClTkACXSAFUQgamcPLPx8XyivLTVfU61Zh5trIKhwvCZLL6/T6mDNHEQT33bkVC/g8XoeM2K8nEJda0jrqp8Lt2JYii4+nbEhtcKzmf2Ykv9xjJIF7jIT/JyOJ+e+M5KvkzblYfrvXHGEkEmIkmvYIlS+iCcXzYFPPZyE1xL8fBStRNHWJO9wBpt5/ynVAxoJep9tjFM2s8nyMXhCM7O/fxFaL9gYGno/x+sWIyjSI7Cp5gdvgx7gWYdchlCC7jp2ZF5rjYVDbD4R6PmtSw3zU9vwduqX2jVYjo69dxK3hMYPZZrUE7F4WNVUvSQG255vYBrtYzaBXmWvtFqtLCNrZQ3y3NViLuUqlrFWkpqpe6QsxkEojFOtfVY81VJv9JqqWN5QT8D4tvYV3uDAiZCrtMYVgKU74wUd7hG0c8RMeIDib1c0HWGL6q0oykESEBBBCdQm/gbo7IiY7Q5JzWUJ2u2yE9jaMgwNtyPVfaLE2E0Ye1YxM/uN0FkbYMUBJPC7J5yFgcFT4fn0KXkbcnRg+DFvVhz+JOhz+Rlflqm02MY3mLuN2EfPIHifHVjZVhs6T51vOdhxkXF7RKZFO5B+cBTFA5pUlU8dOIjXTEZ0FESf0KBkQke11AQUY8StehRM6mXaLBCqEE5FVl9W4C2X2+++tqcQl+SNkhVAe0R8O3zxEoDEGI0NFsYkeHYOjrsMsHjkuAR2Vuk8utoa2s3636HST++1X+XrGK9hdET7Kmewst9ZcXpKLlVVlly+jHs67duG1phNvfcISH0z4LeXcIqyyuc4YoLwubxsrwxQiAVkpgfiJjmzr1sBDtCeywLcrPHR3wqEmmPLtxB+1X8J9iLc4auxYLeFpaHcSoZ4nz/sjKwVwFAYS5xaE3KU9RVAVGXRyZGTGylNwIwTfIbQi2Bwn0lTbMO6Qg1iEa2//97WuyPDF9lZHgOrYzfP7WNSjB1ErHliG/i6PS9ITTbDgJLGShn4XgUapuP//sI00v0Op/h+Wnlfi9wysC7nQbLFuv9wpuDGnXZBLqbt0TAU8hndQGqouctLAaTRVOyQTW+osrNvw7mS8tnxpBeIukbMRHngIr4EcOkKRlFE1aBJm08C3EzAKdxBuTtYThGMityoyVX78sOPWt+idDF/IEQjtIz4nQgtCFEoPpaj7I/E8B7pbwBHX4Iddaqj9MQoOIZuuDREmmEUjE9CyEb3YhtIMgfASEYGhYIJq6PchDAEGRimYwinHlNGZE9gIiyVtboHwPBPNS3aJsTs3292UWxQlURBtrBBTa5MbhF4KduyNxWcojcNgR4KtgkY0LR91DPMhtyN2vyqH0FQhVWdHTkcipvMcCTXKk5CqmNGb+inFyhPKCxCj5MCxbgL24oUEmqMoQvQiVNXmwC6c6MqIeMGCroqIHxAcyj+SyydGXoz5RWfEModwP+FGXk8QfAgunAZHSwV6aQjaUEkQZU3C7LUHkB06dFnFRdkb2op2HmjqbO+o2rGW1YyCPb1LGaiZqzSMI0LhPmegO0RwiO4T8FjlhZ7xJ3qRfbCjDYlMhifQ8GYShBrqaKIr/HEIbtAEKQsSCqc6ez2a0A9oPeTgJRHOCxzEEf++4qr99tCVV05GHPNr9R7ojroRafq97a9dubRv/KTe1zyJqyMjE/MdxOc7/lA9ZFR1Hf9DxRpVX2lPEWaYSrv4OnZv5FE1lOCE2yobEKN0RMxFEFt4SMQjXW0miO6el0KEsJXzEHqEFL1tD8KH2c1EgAzmuPIZAp7H6yPFFbAd1UmFfn+yacTdawg0HgcSLm6rRCjO3zFAfLVAtoTC/fCLtyJuv8HDNfA7EXl2fPQN8qW37+pjxWejiRwMEQsCxdnXiOWPQ+QQPYrcwEv8oSowqu77DTo3a4tQlpz0M1T/+iRg2k8JyIItNDHa8Tji7/wGTr/B8mc/Ko/2TD+qJqCd3klQPjfimAjLgu7IAZqEyH0/8qp6hxcFEBFZ7g5YgmZm3dV7ltmEE6ugDidQPpeIpXFJ1fd0wmRafetLojfUYic6pkV6x2hnzkYfAmYWCAJ5sJFAOQBZlEM0jFCr1DEqLE6li1ZRU1VrVap1Mao8laqwj6o0SlXVR2VQq8wqlVWlElQqh0rlVKnsKpWkVjWoVCGVyqVSedWqrSpVm0rlV6s6VKrtKlWzStWoUrWrVE0q1TaVapNaFVSpWlWqzSpVvUq1Q6c6E626PEj1QbTaplLzarVdpXao1KJK9XbkePCLqtmqo6pv1EvVuer3+1zp836fD/p8HLU96mpfou+Qvvf1XdV3d/R90ROip0cvjS6I5qMbo3dGd0d/Hf1dzICY+2NmxXwTezP2G6wJO9wP79e/3/l+b+Ov4Jn4caKcqCMaiDPE23ET4/z9h/V/un9e/y7No5qnNE9rpmte1MzW2DWS5qDmouZVzQ3Nu5pfB9w/4KEB8oD6AZcH3Bjw9/io+AHxZDwdnxY/Mn5U/JPxz8VPiZ8bPz9+Yfzi+LXx6+Oz4o3xpvjX49+M/zj+h/i7A39L6JdAJgQTOhNOJryW8EHCd9oT2kvaN7W3tT8OGjLooUHPDJo7KG+QYZB70IFB53Urde26zYPHDv5oSN7QAUMHDtUO1Q0dMnTYUGpo+tBHhz41dPVQbtj4YWuG1Q+7OewfpJZ8kXpw+HSaoBPpCfQiOpcW6X30p/S3tMLMYOYxGUw1U8/sZP7O9mUZdiI7ly1jL42gRjSM+HrEPxIHJSYnjk2cnrg4MS9RTrya+Hbi3xI/Tfw28fekgUmjkyYkGZLEpJak40mXk+4k/T25b/LzyQuS1yUbk+XkhuRQyqyUFSmrlMGOU+FfTqkdp8NjuqMcfcNNPUvuNsV88Hu6Dp6HADyvBKKVNDivg+cgGH23IfbumHADuqUEFfQvekf4kg5+i1Eij2mUnzRKVyVE94wpU0M69I2CpTBDF5D8LTLr7DgU7iuFMP8dNxKsHl62Zo9fk13A8JzdYSGtrgoEDb51QSVWrJaqW5VXXMuwYlmsCVCSslS3q21L586ilg1rqrKLChs37mc1ii18CHGUM3A6CvpAFA2zBvdS/32TPcpItlR0cQj+nc5Wia2DtB3vIuqvkVtKoeI2jLoDmWXq4+GDUeFPwyt1dxRV7A7IjJ4Vs1HJjFbSYyJfZt77Qo2HATElyqhoZciTQMRkKRXRV2J2QUU0pPd+uXTvi/a2EhvTCqOixyujdKiFyCV6QrPYcaxnzCEH4gf94Q0aTN045Dp2FZbCd7sadsHp3Y6ycAKu3dndM3wwDDv5/ee3Fn6raJWEOaMeeKr7PtCyrl262Ws+uPHeVoS4B8ZPemLj7Fmstqpb+SYD9PhTJ9EjMPjs95+z2rJuKMBZ1BJcohn07YnM2bMYDcytvJpbGk4MwdUjCRcgzvwzOLZD9Gfa4/BppQ7oK2e3d6K60z4+wEGM56rDQ7UiyenhRJPI5kjL6zc05zcu3/LCWez86we/fI8M1rqLJMY1b41URCFBabb6BTfbYG8W6gxYQ42zopqclTe9LI8pb1IGQFTWfmzCp2Pf/4r86Nq2Q+d2lxZtYloLPBsKyGrR5nY7pQaJkRu873eSQYe30s0E8pf7l1DK5OeTJoqsuNy16tA8THv8pdz0cUo/8sGrCgXZzL6ruhGP3oKB7+88tquD/Ubpe+V50CpxWFnpnOy/UBrEWiMe8fUnUTCjxwt9cKBwGIYrbT3DG/QfJMD0Bu1KqOzZp/PysqVybnWNVbbJVka2tM+XN2AWG29zMkHjc+dyEAEXjKWuxR6nUxR9rF88J7XaMI/I2TjWaJo8x6jHLCa7wJHm3RU7PS7J7ZW9kodxNrZecCId5DSLgrtw0xxfGVbjdtldlLbFf3Jvg8sm1jpZo3P2Yf0mzMk7nB5qp3CJb3OilpGEIVuqz5mQXOM4xly7Zv3KGk7gRdmDaVc27mu61kFqOuDm22o4eyMqfAtu6t5W1kLmZCQH1z4LGUreDciL1dwdojwO3Uj5vBv19hs6Tua9ZmZTWUteMbnesHHtEoa31Ro40iYJTldjoC7InD1z9PXXyX25J8vXr1xRwGiUneCBczT8eJlGbVmAVl8FKgqGWHQwGNcosWU929WXwo9GXW3VcbV2q8uG8fK2ciflRPrTxcLdnnJ3wO60ScNkW0HIQiFz1SKptykcR1+CgdANA6PCv4WTdDBmOqxTlitzHlCmKXol6TWlHJbB1J9hLHgYZeBanVI4T1GPU2KXwVyYBOWXfnoP4g4rLygzUBdX8h09egQuEyAuCg6EkRs/4P67l/QLAZO51mI1MZkFyjNKrE3AOGRLK2l122WnS5JcjK/1zOZmqsFhKGKVo7HhaLrCliMY7ZjJjtQ2aXELAebqm3Lblq6//rn0ZpXMImsWS6VqGXpozSTH7R5tl/rKVtgHQ6LCE76iF1Se6Hn2eMLpMHK1/I/war4Zpt0MG8vUYfWvUWH1O/RjlSd7+n/oKUu42A5noJ/2vXCfb2hj5ZFw1Al4q0wdscoWGBAFfwUCf9xZ2vPEFw/9mHAkLGqvw0rA6IrKYz0zDidcCEfR4eEQi+fD18fho6Pqs9APGmFQFFyDfrTyfSXQEJmsDyOTNboyMlnh/n33bd9+4EDuloxlJRkbc1ozjrIaGIhv+CS8Sf1l+LmocOsnupuxCsBMAJgefSv27nNKWfQLscjLprwDSTfCQ3CYonvnrn5SbFgPG3U37uonx2o2fPpn9S/DYd1TsQDKTAWU6dETY8PPQVn067GaJyLgH30sAVbengF9j8Ig7XvQ1ePVjZldUpGDdI7dZiXXijNkPWOWInvvrv3e5tZt2KbGzuZj1Odbp8+ZVrnkuTGs9svSgpK84lysuoyr0pMVYsWeXKaibavBS7lll+wUXFYfa2zgNjWSTU07dh1gbn7+xRvQn9S+d33px8p4puL3DpQy2jt3FrdvWFP5z5QBu589Ak+fn/sOXN0HY3YnvPkGxP4dHvgSNh7XfmjsyYF5ug8vnfgS+pAwCenyYUq+YlBKlAylQ6mBx5BEfxEGAXHxbDfT2ODyuUm3WayqYWY/PzZTiaeUiUoCSkSroB4eR3kzB+b+pgxTRiljH3py2try7Sd/6ARy+3lW8vBus73MVlJda8Gc+mJnGbV4YvbK5az2tPHZF1Y8NIp8JbRy36kvbr7ZzaBOJZr2rzpHHTzZ0NnFKuPgHV3V6sq5pmIMPT1i1ZQXMqkaQ9vRQ94TLafZ69v37zhPoTqbtlpMflbzCw2ncO3eMbQ2/0X0mYprjlmPrgqF4w5C50H4ioY4mPDLShgADbStvNyK8SZ9JV7HHj0oH+g+Zj1GaXfBzA8g6jfol/7W+K2sNvfska4Td8juDd8q05istfySsidwbSlqpRIl+MhuleT3Oeqpj/ePeWFJ9fqCUra6ssSWTRVXi0hL2kRe8pIv9kWR6GzwO+whRrtrv9BmaanG/rqg5YkXyeSni5YXF4uBfGZDHd/02knHa12kBvbTyNkTw80dUeHmSt0z+MTPITYHaArdMUAjHV4OpHYWTMa1Dz6HowsduoCltFbm9x3k91Dw4s9vdR1jz53v/gYSSCCWfrD4NIPEm1qZ4FAGUi/N5DfmPYHDwEadNiDimtG4Jg8psv84CR2nwIbvKIMZNGSGtJ+gFwj47VgPQpGmXx18B7PD1lDh0mNOg2RAyCFZ3H6H3+eRjkmbGHmHqwN5hiDbrILNyjHl+irHnPXT7fmUtXeDXo4NyLKb2W7/1L7bvs/eUu3RY269o8oMOO6hPCiXiKz2khSULkYOVGwOD8X5yLFbm2BltJ/U8gZHuR2zFysrHBmU9m0Yjmuvwi0c5kfsxIQXQULUI7QG3uFhL62GcTAwzCDUhePhqTqel1xsS+w8vHmLExO9daKX8vngQVra4IgsvijPxT6H926QUwYkuC0epNsOzKA/iXXJosyEE2JkWbCxYy7R8Fws3O/YKu2MnK9t6t2c8qG2gu7/bKs0loscmdEoS2APDfFRMG4kSh81PUUhNfyAR8HB8Bp4gg6gOr3yu+AJXDkQqywS05/+C1NWVm2ssWCVJpQ9SM7JO12RrVCmxd/orfN+c7H7estlLHRKfhsWIvcoRI3t723MT3ndbXgWaq0ItfavscAYuuPKOSjCzTUlkqRnC52mVmErxvee4fki9oMUQMzuvYnYnHO7jRBNfRxT74oc0pL0IqtHkrLctcGX2zDmwxWHlEkwc8GNzVtBB0zXie6z7XW7g43uBrlNwoKi6HRGZryKqZ7Br1pRghRprSOy7etAKViIS23hJM5MGqqKlr3MLF+oEAq5fDWmWW6FObR2ERwKr9GtiXRZOw758KLILrC2biOuKcThJDTif/RRG1VXtUeBhRQdqlD+FG2qMyKGoi9jUel9uAa0eO/k74ERUeHllY/gGhfy4hst8NvhSJQPgNUoXdxHt22GKbj223AKckC3C5EvX4PYQLUdsWbvYc8tdkzLJlOfmjGv1MKbLR67y87YXQGHi4Kkn3+GAaz29vWCAyWtTGvxmn0ocpbN4VejyNFAp5J/EVLgVzyMMB4eeSh6FIz/bS2MplAh0bXtEutBaO0mXbbekyfIh/OnPGtdSE1VhgVApaxnlWU/RV85BGr0G6Av+BsOMEpMB5jpX3hYjsMGwFHHmxveuRA5PSd7XDbZbEDzWA0L6VtfkvWxbsSbmA+FaI8bsRG2rvrY1APzz/1l39LDxZh+cwd3jvouJuiRvJF6ZpMoGdlqeY1n3oXZr0757FHoi/1wZ/vr75CvrzmV18zsffkF90xq49N8VimCtW/bURTV4PDyLytatJ+CoVKnfe84rb1xbVtOeQNbTGu/LMdReQjXdPOwkdZeC4/teVF3gdZ2vou+QDqtbfobrr22mW53XZBOiK9K+0RsOY58TgM0Hh5Gh5P/FgUSmvn/M5Reo0/hv8VGVkf/GRwG+8xFcUn6WXigyS542cgebe8pGsdtWvMOYgyWkHp+z3tR8N4R3dJmt76Oqnc3XtjMtp7sAkTe0s7AgC1n9n+15WpDU50PC4ZaHDAd93hAwnOW8pU1qxbHJZWbBLPFa/fVNdhtQdbHO81m0mSr5mqYomnKUOX9lUqfhcC8AM/PhxQMZuKYBs7h6orhfXOn4Zpl9Ca4Sofj6aj7aI0B2Yyi79HEy4gmQmwPp/NzNhdHWQoqeBsbORftNsLd38uHmlyIhVLOLU2yzLrdDjfnR+0y9Mvh6PBA9dVwZhTU9Zh0yqK7A6M/jIH74BKMVi6hS2VReCCSmaOUgSfVjjAf9UzfxWH+ZKwGHqUhBlcv6ymIGkFrxuJQjatPAhlegDJHhl53H/5E2wN/m8xMufNTMcSh9DGlFp7Gw4MhQTvrBkoaCukcm4UQdtZnuFZeSu/it/PuCilvmJTvKFEGkYAHUIpowJNwzf18I5w7DqVdhgZYQcPsRu3nN/Dxjjm2taCnyytsYKRn49rXxXqpKwLgrc7IwSveyXM2W+Tg1ecmBOGV9sjBj9mOjZT23RWr5VVQRXsi+wankAG/w8NaRG2TcU24Lx35n104fArIIaG1Dtfefp3WfmtHn2mo5E7kO/p00Nrb2bTmYzpyDiEKUhMR1naE/2ipgG00EjyNYUanbYER6Ho6rjnHh8I/tPRujAKGaGZ9mEmjU7jPaa2Inhx+HYfN/CZ1/T/SH6U141CAf4uH79fDBPwv+Ic03KIRA4rW3k5FvViKOphIw5PfR6Xjmon4b3o4TsNXH0SNwDWv4RNpzYM4uHA1nKajkmjN87TmO1x5VJH/Ua2G/O4o2KzIun9UL/iP6ljN32kXtLxT/07Cx9fg12vafBgNbborUkvbHmr7jqrCo6z2h8xXtxiOUq+d2w8anp0eI0wvL84Qc8T8hlc6MG3+rhfz65ZTE5fOT3QjiofhiyH6eHjSEcSu46PCqa/i4MH/UOUYVeE+NPTfQ4ejccSWUVJ60US/qIw91PPJvpqyhEtvv9Ae+gQe+rzoBorfp8IVOu1b8/NfXvA8+eiZpX+fzrRXRt+ev7NgLjlv0appjPbKsy9tu2Bi7X6hLki6hKDFyltqBIYvt2cvJI2SIWhhqnaeNZ6g4L73Pv7mUM2O9ftZLRrAoRPvkr/+5cgDl5gab5Vf78UW7sltP05279998Y2OitIQ01AlFUoVmEmULS7KI/tQMth+1b2zjnSJgsxR1ipZqma111y5OfIaSiEmTH9oed26E6tY7ZvtFbrN5VvL2qq3lw397Rl/1mpyXXFWvp6pasxqLWzIbBs68vWCLcfI3aHOwx2MZjGMPAvvnFX//QpsvRYVPgL98LuT/lxQib63oKJReFSwTX34ky8QWBWFv9RVuUwhE2Nu7DJtRzQcwXFkH6jpPHm+7Vz7QcaJEnXvPhBvM0WOlC5dMvXRSaTywuB/Vjtu2kZFUDyyfVT1b9X+tX3UW23ZkimommbqZ+Fn1YfCpVFIbdE7aWjZvxP1qPvzSCnIkVIGhtFK999QwQVUcC2cDUNphYFzl9U7wguiwvPhHGTSd4dAJTyg/vn7qFthbSv+Rc+K3Zn7KpsSLsHLkHjpvUva+8PMO7rRwv221Qyfx5sFxDnszsazzc02xnZI/P4bMjwsVjsTHrZvkvYzW6RGfxu1zV1Ryt79KXY0P0koYeylNiSqeVFwNXc1tjH8IfECqkTHau+Hh3fju7x1mz2Y5A2IPipySt3NyUZWK66fKtg3stUx2okl98nllNJ/yvq1q9nM7Kw5z5MKCaoxkORvcwQDFqEywKzZXPD2F6R2aaf79W1HmX3texo2UyFJX8BqlEJYClvw8ONncUVQ0sM0/t4v6Cp8CF31+H/Bp0bMdSFixJPhvJ240rJ2J4pp9k9lj8RM779/KnxoHPyvvxq4iWt/gGko08EsdDWlayyMZ6CTVuSeucigW6EiCvw9ix6PFLwCo9XwEKyPgg96vhwVKck9bzqfsBl+QMDT1pOrW4RrV66i0ZdncXRTf1p9FC5Hwcc9+mciDxd8oT7xORBfRMGFnoJpqESpBr0a1n0YBdmibuz06JWIxZwAmm6s69yypQUlioNwAc3yP1RRPb/BBViPKxPhRvfCfXCmK+HGbRh8R3s03CfcpbtVcFNRFRXwxo1MJVdj1VswMy/YDdVCtp60yJzkklxuiTni69x0inrHPyuTLYtV+lc9lPkMuWDv8jcO723cuZXRlpc4g4WnqY4t3uYmVpIlp0zKdpeFZxBRslupfEvbXkTEJnh0Rt5qszCVNRWGHGrjxqb9ezdv/bUBzdEDcP0QXD6kPvw1FHwdBQJc18Gg258ABupxtxAbHD1nxCP3v5UOQ1iIgZd0CvZS7qoXFr7x7Q9HDl1449SMkYwmn/53jtfzZk+NThJFmZfzNw+19Z4XeHbC0MPTHm9Pp5RuJVopUJ4etVtR3XyK/ctYG2cXnLZhW/LR46IkDbvzWfSyVz/I/ZUCDzwG06AC+q356tlr7F3fXb1u/ZXymx+RIMGQqxB7553MmaeZ7St1u+dseuZRUjmkPJ71/APP7L+2gNGE91aeyDjzyvGc0vCAk7Dl5IYT+sjp97NAhzuRIkTkyJ4J88OjdJALMV+BFub+ovxFWausv2+UkogSAYs8z8xoR2WG/3Z3lE47Mz+Z1s7MnE1rX/gyI3LVQmunZZaVyGYq8t892Y1yTjaJmrzy8tNnlPspZYfST1mlzFKmQj8lG7YD8/7hK9dYLZm5wlZaRtqckdPJozKDLXIApfoTht4tuXDMIejqimS+yUgWRYTjQpgcfliXGmMWeKud5QujObvIuynoMy5G+wTi4gsjevKJiJ4M/n/Tkw/qICMmcvxVYl2bo90O2cIoOa/HaBvFe9x8XAv8dAiSQxGFNgBWRFayDvU8qRO3BUM73ZhU3yh5KW9kJdaMKOvCmXxh/n/RNJuvXILxtIuTzTUbaDDF+pFokRinr0lqotr32bN2sWdell7IJh+Y/MIcxO9MFo/g+k9C/w0knS44VryJbahEwmYgtbZcEHLYRnGPuI/RjKU/xCvpGfh+eg+u/Bguht14z8hJCHqbwqVQQ4dLF9GKL7wRXqTDG1fg0MQ1/nwcHm4ITy5TQ8pX4RkfR/VsrKLv/qaEJtHhP5S3piJOc9J2DQIN7+6Cd+491PpjVM9L6KGbkYd6xvz+yCIajvc2NDKy324rS7hyb8cd7nys/c7YI1fRrrtjp9J3d9UinLp57eZfJ2xe4GcF0SFKIqb9zXg48HrHm+T+dWeUqJdX1JhKGRTnSHLVSMukKsYqipyLcsouL7tfat57kbrckrF+VlbZfDNrtlvAT7tt9XYGveec5Vj+FPLZZRvnv5iz5wjP2L2CzNt43h6XItQIy8USzOK0+DnGUr/T3EVpOna8DTv/uSK7A/5Bh6vh59512eWTleX31mUzbkBGZE2NCS9QQ3T45aiwCIm6c+eU8fAkTICJc88rE9Evup4zByYqEyLXF+agOxOiUa1Bv33+9ue/qmHvb1HwWViv29natmNHUcuGnNLS7I0tJTtFVlA8uj+/bd/V2t57lwXH56g3GhRmz/Z8/iffgps6+GmB8lNs913+zyv0gvdvqMOetyMLyqQOmu/qJ4fHKi/HapSPwiX74P5d6qMHIfkIqh3+Qndx5annpy9ePGP20UWvXzzX9brIrBi8cmP26jUbOw/u7Th49FTr6kxGc3d2+E79W94D3q11CXWNh5q3btrfqL3zU/iO7tT+A6e61+5btGhtxoJF+9ecYsV63YqNnUeP7dhx+PCOjcuWb8xexWa/pau222yk1e7gzZRgcwiC0yGynqAoO32uuCRJdkgiClKzXXbaWbvbIQZJd6z2j7qYYHl0RZ3PEaRcTrH3Ec7iCZrYmubogNMT8JGtpc5qRvu7mbObeYM5Lkmw2+2CZJdZj12yi1ZMNDhkPdm8WSdJLodIaf+od5tqLDbOxrMCb7MLFMeLIs9q7sb1YDBIwbcdOlJbV9NoLUvo6jji0Wrbengdb3aIHCvyDlGgIs2zditfHaEG9sgpBKfIeCSnK0htmR5T4TDZrYzdYhesgtU+1Ga3Oxx2hyDaHXGp3noE05s8cUlONFaH5ECFnHgyLpkTozmR/39a++64KK69bxuyzsAiLIsyw8xZE0uiSfTeqNE0jS0xlihixd6xAALShGVhy8zuTtm+9CqKiIoNsWOJiTVqTGKMMdcUSe41uelnyfjcPOcsmpvnyX2f930+7/WPlTlnTp3zq+d3vkfyUn/dGlomchYBCJYQVIYXkSywh/XXkJJQLVCyTbDhf1ZWo7FZLXYzrVlxbqFW6Nk8IQSJPPgzoTFCntFM0X8b4rTZRSuNpsLCg4XDQzShiXdDrLJNQkLSiha9xpivCzFYOauR5nCKYJOByyuIUokz7DGpM7KCB5rHi0ReFpxILNfm7oBP7g70aID9G7qe3QeZdlhXCqfvQ8pYrhYmwfHwRZgO52FLIFmZrwyFz8FENvCYkqTdvUf21gAvIlLBrXJucx3yoIE4MO0V8aw5y5xTWKjKyswwIZ1XNefrr0+VnmzaAaqqtpUdo9v2bMmpBGV5UnY2FuoyEupugfXZG4QKVigTy2RKssuW/C2SnMY60tLEZPr5+PQ1K8DcRP3UVdTssmltiezyo1dybtJ/9Jje7Og3hvmRCVy/gTMaUMZalNE6gJjfQQ8n0PuBmvYo+Oo9CNo1TSh3A8o9NoA4EqgxEH+oLCNQnoAr4+q/ro+CRcd/OK45gXL1KPfEAOLZAGfDuZXnit7EBbeirJUo68AAoiJQqS1nNE070BMUGBzlEX+2Y/QxJG77weOfQWar5lhgKNQwfk9VeXW5SrCjFTyW0OR9NPGbDbCXSaUeQsBzAfMYJkck4J9uvELAsQEH6j96/KYdTmEUNR6Bu4Kr1CRMwN7U4ROQ+EuY0OmLeg17hJF8njcByeeZE1bhv5B8Tpgwd5G0iE5jNPE3WhnYBFcyqBl9oGsC83u/H1wRsIzBKc8T8LEbnf4/lHwjIKIOBJM/ao+6dM8Ne7vaNW/jLM2PcGKgp4H4L7V0gzCBgcf5zli4m3iSFj7yjW175Btb/Xvf2Db4JKFpCYzqGIcnbzeavBY8ef/dWfbZL6PG4FTY98Z/zdj0y5jhQefa7XacAbviOYJdHmV/2HHGQPyhtsaO1gRc2y3UwaiHOZr7wax9HadwR27vwMY86si/zQ8EL3VEjcH1wcE3/l1Vzu7ohwfPEPfR+q4i6vHYT3yq+fn/u+LTgbp/EbT2j38Zs/ZvnCIuYEz4nasKruuYgqasnbiDhjf1ngCj/GjxPcmgpTc1cBN9199cSe8G7g3GnqVA6bWHKUkwBqk0KCWlHelvQbtFx5wIpEz+nQMqPzBnZLDUa4jWu8J1iNZR6rjAa7Zg6lJsHaE3NV/qmJrAUmwe3VyGLa3xxLX8tnknAhcPRx2HFCz8BGoRbcN2+Gei0wLye2sra8pVTofdSaPlndfp1bo6807a3xCZP0bAvYGZg5nnZzPwyWtPMHBIYF5/Rj2KQRlz4Nsjmd/5iGBiIGEwSoBx135Lux58/S7zSXvUiXsS7GXDFInS0bSMhHcm/774fXgFjfA15gs0FJhLaGZ9QGjcBXwebCGw5x5oZuWghCWM5tnBKFPpYVFWWZXXWE1igAz8iAc8Fw04EQ2408PUn7jT8Raa6OEM7HOtaxvUIgX9T0zH26g7KO12eyCC+ABP9UePYlSvd8xAE/6wbG3Hc6gz17B3Gz/u6ZimhUilbGPUv3NLwcbAB6gFNYFGDG88Snw5cA23oSa+RCthM+HEjTTd0fyMskrRl/njUv3mX57s/307mwKvot785vyCiR09BuPnD1ELI+4VwjAPmtbH8FobH+AnM4EeRB2MCERUd4fvyszvt+CV79VHDMcXvBuFjPQecB7sqUlFf03XKkNMyvSJ1GbZ6POdLGnay7ocNgfvyNpX9DnXrlpb22Kuod862nRuH9A0v+I5mH2Ibt1X2lAP3B7Rk8+pLHo9X0Cvz6i8DGCv0Pvit/IhFh+xs7H85gTrGtps480CkJZLSp9nqLWhmtT4RTOnTsloucqeDr0vwRDpECsE31fxm2c/fB+9LuPX/xiDcYbJLe+ILP26vKeS6630hirZFSXlvdjqCZFyWC97GFlBQPRz0BUWBsOqwsI7LkZ3sNq4Ls9pOgEm87vYunzbtbbr3W7Pd8vpHtl9WPe93f/e4889nu0xKWR2yPKQgpAzIWdD3uxJ93wQOjz0xdDk0JRQa6gt9EboT6pKVVWvwb2W9krrld4rp1dury298nqZiVeJBrIP2ZccQb5EvkzuJQ+TZ8gL5PvkB+TNsIiwZ8KGhg0L+1PY0rBlYRvDfg77JUwJexAeHa4NjwmnwunwuHBdeL/wAeFLwpeGLwtfHr4iPEk9Qj1a/bJ6jHqsepI6U21R29VOtUvtVnvUXvUx9XH1FfU76qvqa+rr6nfVNyJCIiIjoiLiI+ZEzI2YFzE/YkFEYsTCiEURiyOWRKREmCLMEXyENcIWYY8QIvwRxRG3I+5GfBnxVe9uvdW9I3r37j2097Dept7W3rbejsj8SH1kQaQhsjCyKNIYaYqUIuVIR6Qn0hvpi/RHNkQ2RWVGGaPeiroUdTnqStTHUXeiPtF4NT6NX1Me/Vr09OiM6Kzo7Oi8aGO0NdoWbY8ujt4aXR/dGN0c3Rp9MrpNO157RXtX+432B2R2hcQQMWRMWEx4jCYmOkYbI8ZIMXKMI8YXUx5T0SesT58+/fo81mdQn8V9VvdJ6ZPaJ7PPJ30n9d3ZtzlWExsbS8X2ix0SOyxWiBVjvbHlsdtiW2OPx56mtFQclUzlUUbKRJkpC+WifFQZVU01UDuoPVQzdZRqo96kw2k1HUPT9Cv0OPpVehq9mF5Jr6JX02voDfQmOoPeTGfS+bSdFmgPXUpX0/X0DnoP3UzvpffRh+hj9Pf0D3GD44bGDYt7Pm5M3Ni4V+Nei4uPmx8nxJXHVcRVBiE0j8adivt73I9xHXG/xClMd2YoM42JZ2YxCcwSZimzhlnLJDMpjJ+pYnYwB5jDzBGmjTnHXGLeZz5iPmV7slGsho1mY1mKpdk49jH2CfZp9hl2ODuCHcm+wI5lZ7EJ7Hx2MZvH5rN61shWszvY3ewetpk9yB5hT7FvshfYd9ir7PvsbfYue4/9jn0AuoFQEAbCgRpoAQsGgCfBYDAE/An8GTwHXgSvgHFgPJgAJoLXwRQwA8wE88B8sAAsBytACkgFm0AaSAc5oAAYAAcEIAIJlIBSUA1qwHbQAHaARnAUnAAnQRt4E1wAF8ElcBlcAe8EIUBvgo/BHfAZ+BJ8Bb4DHeAfuu46lS5cF6Xro+urG6gbrhuhG6cbr5ugm6ibopuqm6mL183VLdQl6TJ1Rp1D59S5dG5dqa5aV6Or1dXptup26Bp1O3WHdK26w7oTupO6t3SXdJd113Uf6G7qPtN9rvtCd0/Xrvu77lvdd7qfdUq/Lv1C+vXsR/YL6xfZLwbmBlgt7G3fKm5jBdiV8IouwQOdjNMs5YMNr/PZ8AIRIAgcZVtmg2GMUw97E0pkqNJ717TWVezs859YPmZgtFCDyos7nMW1sk9yYGQln+MjQg/WJPAF/Cy4jLHw+BwQfIxxwDcIIVXMdDAk5OEwAkrEDEgw5PMWDNkC3ySCiHttGB+q7b/hQ7U9xIdq68SHanuID9WG8aHwufzJ/4dz+fAbYj6u82mC7JgAB2pb7E0CtBBlWyWfINp9gsolOKTOE6DrEq0pqfHwFcLi5Nwwi3DbdnDuLcI6eIXZuJwaH5rPG/QWtjA72Z5JK9OVHlAHJ3zb8PaR/eDY2QvOk/T311esqwPVGVK6lKMyCYLFRbskuQTALq6tXsppcxQKbKawwZElqRybx3veoMePNi8YAV5Y+MrTCkMp+XDGIJh27VPvttOszymK2zFO4mbIwKfhXDhFoSCtpCplg5SpymBlyA/KZCiD3Ue0yvNPoX6Mg6tht+Nfw4E/KL2VyQqvxKVNByT8iSmwFdH43KcRw6SdPC35Glt2YjxI0e3kxQLAme0WekNRcYXfUefdCk7Bx0NQy6KDDqKLSrKA1HOb7Jd5qSj2C8Ueguxu3kKTcCoDXUxN8EClKwj/WQBzCLiegFeZs1Jl7fk3wx5rIlCqkGUvEDf9dkr14i0KDg4l4ep87eETrm2t4OL+mnMnqdtrzik9PmBTKkPGH8tpaqaO7d1z+ez2zRmlbHG2M10wqAyCZHbifY5K8I5cV0I5rbJRYAuFAilfVMlp6Q5kw0Y+P/HpiTvjvxkLDq4PeW+2f9UKasmaBS/EJ2y7lMNaSuylNp/KZbO5jLSJN+bbgC2Pnz+PypXMJWZ2y9795lNoWPu1cBfzG6LBBUj9MzLjOYY8c9lRshuUOmVZLlV5Gn0f+CgX7zSbeD6PY7mcwvS8LapVSUuML9FKlDLoOzj/k8pbb58GTXuPld+gb1/ZvKEB1KW7NwppqgLZ5HKLrmKBFSvsx4TtKnGHCBsZTi4S2FRpkzPJoXKuSJJm00rMyPXxk8HIsdkDZ1IkfJ0RYbqMKO6ou7ze5fmOcATdmcvW8IbNi5cEoRBMFtkCnUSVvZirK3LlCvPcD3r2hYABJDZUpzDYj5xQHTRIq7FBWt1pkLY9MkirsUFajQ3SamyQVv9mkFa3MiS5ZIW0jM4PHjviA9GMIYsgk3h8NqNbRVRyx8ua5s9vazcuy9GnmVS8Xm8z00ZEhYGnGVB/WKqsO1cdiGBEp8PsMAOTYAwMIESjw+a2eWSfpxipYQv6alKb3zg1ovUlp4E3mQNPMBwOWHFaq22sppm/9K79PI3Wm5kwgSKh0J4vZ7jyvfmVaQ0KgOkbD8P+cH7fhgMVVdUOL6Juj6ByOx0O+B6RtIrPzlkBv2N4zmJ28w7gtnntHl7lsaKvR5mtBcYCNm/Ty0qPtDXr21aeW31FZfZafHan3Sk5xLABLtEnOGAOmnsrsXY2r583JQtSGHbKCTyo96XczqKqrJo18CnF2FdNK9+Evmif8jRz5QOKrPoCY7y0dKIBOgx2PQcJwkm7cWgnIu5HuwU5ylA4QBEf7TMoE6FKWQ/3g4PHtUqCEgpHw5UP9w/gKKhVgJLRuXGAD8D8E0hW++T/Ckh2/47/AUg2GzHkluXV8NI+mLfvL8jAgoO+nQ9JzcgucAAU4D+YVSy/yZy3BXFmX5dOzjzSYA4MYQ42S3taTlr20XDUza/avxnx9pitQPNcl+O7Ww5cow5v/FgZxW5cxS/KmJMYRN0ww0MEeAgPxLnzBKgwmUo0pXmhC2oyXutF/cYHUt32Yvr9XRNnrCjYuDkX6POy+FQ6e0swBo4XXSC+hyyKUrHPbitjNXMMO6015up81ZUlvtfmUcOnZC3PyhI8GWyqz1pygrIdtJ/eT6lfIjTCV7ctn9OHZKnKCVx17nd8lNfmMplsRniIyTRkFBhUmRlJtkX0xM3OknyQU2o/9yMVPLGdV0WQsI34tesJQ5e3NQuRlVb+eyttIbLSypGV9iKy0hb+ZqWR5HDbiwsWseuSFhWuplNWSg2rwOJd6SdgBEWSWTyMIDSXVjOaJj/636rP5lNo5eeeG9eIUjrQlDcyKNGwZYItR1UoYrgFGW9N4B0Kn7+mVD4hq6T9l+1NQwm1VuOBfe2VQYHsKqmTVZqpoxmNcJPQPHUAfRqajOcrYGUlPHkgpwL+BwMnwpcJPtWSm8sVBZFXYU/mglRedeEcHIZBVznZEGTtm6RHLBwta819+FkokvQOxL5cfqGYrmnmUhvB4RXCrCRq5LQ5s3PhPwirbA3ujsg07P31X2A3oLl9Ln1XdgUOd2pUutPL5/GrkXphDiIuegA+N+W21lvc+TCPSVHUlJq8+IGrbD8od8kOR7nKu8v/qZ9yW10mo5XbwiN2q0/OzVYtWjG78M+0QiFpSMCi+5V/vXEF7D90tuZTuv3D1LVNYOum4rXCBlW+WIQNtVLU4SrbabFJJe6W/BghzWEQ2I3SWs8qxHAXrZan0cqTT62YPB4MeTZTIV6lBtcrPb4ewZKP+OaMIN+cgfnmjE6+ufQR35yB+eYMzDdnYL454xRBzoLRyhPwq9xjqppCi8dIG0hyqP3FxCCciNWEJ3svQ3aH+6u0mzyywUv7Hf4DlaClHcbCn6tOwVUPhL6rS50FXrrY4d/tA8fg4B/h9cMwqvqsb3+dRyX7SgQv7XF0Iv6uW8qbipbh1Wm0mswu3rvPk78ln880ZYC1Sq8XlPLsCcrqgNx3p95SaqCNJmNKIVDmPajJfusZeCb3cmxBa+GuYsonujwyK7u8djftdQtupwlpgjOX8EVFCRhHF1VtdNq8niqryQdKCn3p/tUq0is+1PlkJ/yeAEmBQcRUrPRhIQHrCPxdt1vc8A4hHGIUY6gyyf7S1Klsbm5ekd6kyjfy0MtIvOxwiZKTrfQUO/2uz04efavylKrisHAFDkZib0bhodUYEuzCPmg/lFseBYfCzjijuTC0o4sWxxUFgcWiqcWjQh/uPG5+uPN4b3JPzXOPQpHmfkFo/AsZmKBc1sLxj7YTax9uJ04501NTVkqQmY7kklVfTEH8fHjgqfTTqtpCE/p6RSZDcgEgTVYTDmsnyWPMlSAuVPkXNmstu4MvzpPzVFKRWGihTKLZ6ba73S5hv1jBSvXyVowwJfEW1DULu6VAb59Hr7fNtKUJKotNdAK4MtQtSQ52m+2WrdG2y1pucOlVjgK73kQVCiLnxMcd3QIgsSL7F6TIPkSFTkJs6KndxG43KZVXnz2HVS58tJO0pOpfyKYKUUH4d0Ji3bu8W7f7Vf7tp8SjiC33VFTKq0qMMlsJV6aoCvM4sxk2Eh6WPNjccqAaA+z4TLQ1CLCzMdlQtJ7OznWWrQOdR9vhdC3GLxNZyV0mVNPH76xXwl9NX52WAwx5+dx6OmOT5MoBZtEquxFbe/BM6FB8dJWNZ8h/tcn47b9jj/HL/+UW43oiBQ1FYsoeOjnHwVYmEMdMJ4r9n2LSLA/+5mEE2DzGTmL6/rnd3E6fdDhqnMDd4HrfR/ltDsSHzEU21ppdkFKgV6WmrbTNoV/a5CrNBZkV9qsw+iGaXSjjBWSA4Styq6JKf6nQVHdc78jTVvNmbxFdZDFuMQJl64N3lPrA2yH1eoynYjQX5fJAs/SJ/9BZkowrU8yxmmo+z2Q3YlxKS5Hb6gU7j0qVFa0Hwx4rRTzNYRKNhfmCnANyZb2nkioTMERCW+DJ3WMvKLGezFjNUn/KLeXpukWqjWXeLA9iGJ4jtQBuCiwN0VS//SBeTuH1Zmusiccwzk6+1sry+yHLb6VL/BKif6FIj6RnMtjoKWwouqBSczsYUiUewnMkpkA/QR5eE3Ln9dJFC6g5S6b/adqMbe9tZi3lXHUxhfS6IiNvyLOxti3cGwnUZslSZkK8dCfDthyWfLW7T8LRSC215r3eiZMjduJr/RH281/5sckgSGAgDAdKBOPKH54YHWIfm9ipwdMGjrcYXdYSsPeCVF+P4dRLO+Nd9fk4bhnOZd7/G2IuyQx7nzEgVQQt8Vv2T4VdLBJtmAm6m6Uq+kPYs+DZdtCyvG20oqH6Zw2bksDOfePVrAH0iyurK/XA6LPut21V2SptN3+iSHMR8RteFVkjny+nSm0Os8VktepZMqDC8eIyqAiFkfat8AumTlKR5FwmCBb0kK2UrEYVaA2ICjiHzckBL1eRt5ZKseabMlmrxYrRGngR72hKLqfsAE2NO7fX7lYhLuR2UMWZolFkHelTfUW0+nMmH5CXkXl2BlX4uXVbirhJxQsWnsoTRIsbMRSnFzEUfAgW+hlzdg6HYVMXbXam0auWrJm7ARiCp+edwXPL2+vKfc30P0ErZN5nYFuWfD6qMiVz4+B+KxepOM5YGMSsQIqJ7PGybYegGobs3Kbye50Ys0I2u/xBzIof0hpU2zNMLo7meYxZQXpd91AH7dthX4K8oD+4vipwtyUKaiFxrQGpnCt+0OShB16rkNYN/FrWmmYuyLQU2fR2o01ltGFseYvM+dn6DyWPY7v1AO22OmUrMBZb9sJpFIwPPSncraBcAmLzrORtloppGHdw5vR565Yp6g2ggLNwZsriMnk4VnOkacuptFPLVJfm+1YvpxZtWDhxYeK2lgKW99sla7HKY+NkC81beGw56rlNc6lCqdBvZgvqmk1H6P1HnNtawLndDafOUfemvqWEnWc1eedrz+6/Sp2bfVN5Y9BLhoIlrJm320yUtEgYMa8TIQrrAQ+Nze2Y89wKrp67xKV3fW9fB5+860NKTXeKvFBHkCO1NqPIO4VGZ18MNiA4PLf73oLMSfgM7Db5wqArQHOnEdaFlO0xZleAbalSqrBJlSdxDock+ZCqWOm+WkOV8XK+gy2Uc2UMVp+9QSqgffcEBydYbLEbTZzNbLWZY4teCBnMK6GzlQjqqbYZsNtz7HrlaEjy8pLGFJBeb9wrblNVCxgOwmIxbeEAry+YF0+lOrntyITae8VcTbcFUrQL9y5rPk19dauimRUeDNYeT9q7bDo1fv7cyRyr/s2gvIoMSm0eWtQWl9VjASXm+s3zqZV8ZuFG1mriDHbOzklWtNQdHo/TDY60HD7QdEyFtE6/k6rcKBkk1pU0rFRPq98lNmIIgFBszbDwZk9JsnFYXAXuas9xtVkluaXZ4iYxVyUYJLMD74aH9RdL5Gu1lNsummQ2sWKxc51YDLugibUKFtqcbbUiCWMVrDaLYVDf50enLZ4DktNmTRtCKSNg6GgYlcXmKgNDbGbJ5kJGZqnkQn0URElwlcA+fZF2ZPfRB8+4ipuAG5GD5FPJlb73XJTX6oA/EPk8Oz1vbspMOhdJ9jywyK+dXjvtPKSpH87dhT1kFq0L2J9wkY4g9HjXFR1Z3WFrs3ZFucPgR+LKf7wWVLUc+OIMjDj6U/2RXR/WnSouLXaXesogyXhdQXRaPdi0hM8zLF8IvyKQdu3i3dDD+LC1iy9VMXF6rpBNn650U0pXDVsMe86Ejy+CpCp/p6nWR7kx6AzrkkvEYmw9B+srAImL+fT18xYFL1IwIYJzu3w23g92GkuKqhNVau93hBOQMO20FvaD6+FTyKJlYQYGDXMivcckFbLKmz2XJ9rkpwA5klCTl4hSrML8TACMOcBrsZyMgGqt7RVuc5pJRRbaLDhexcX7kdWEtx1J1A+zFFR/mpH6A1sY2B1DgdwnOlI61FpBEBDnSa/py8lWO8dPmdS3OX5c9XD6obNsVOPQa5PBq+MsXDBqry5Dskp2UYx998OQVadvpLXTj5xsf11z+/Wz4MG0B89oN7ZtuXyd6nSqvXt+45xDbP1q7Y75ZVPHU53OteenNp1azKpztXAuDIe9oA6GP37ulXJgs4sCrbl5te7mm19Qp9d+qySMeiMzL4nVmzGCVYa0WF7PGgSk79JoKfrPvXXk1neNk6cpvZRuyxcXAQOaXhNldHL1Flbz+bEiGLZQoSiFHD33iYELrl50806zmTcVWFluMz9rIVUgGkuNrL72rOE6rW5llIGhyoC9r5xYxE6+8Te+jSbFtEKvkUYmlp4HJD6BRNKfEaTVUGgrpAstcALjR19gCOHAXAdDO1jJ3wCqnrvbHUYFempvVLVdvrmTbzxBtbc0tPlZtxh4ipA4qWiC0muu0p+d516xkpqUnLfYzBbZCjkTZXFyPit7wrQ1b+Ys48x51IjqxbuS2KQ9FwuaaK8s4ns8zAKY6V25E6rfkfY3Uvcn7Y0vweuehI8zskyKLrSUkbAps3hzPOwW90JPMkYdN3EyKMstz4mn4jcnpC9nLYj9WylOsEmyR/a42SPHrnz2HgVfiykze3NxuURPCirHmzjHo3IZuBz3qJzoCJY7fOwdVE4NZWbqbLTA1zIkVq3zsIZAkg3wDSbYk+xgT3wbH9VY3llj5uy033oiWUXEbb0+9sSRC8EaJxLFWMJHwZhfu4wxdCHJIh4uZ8jAK1rNzdPV7ed+pO6POqOolZdf6//SyPMJd5aiTz545fBXlO6UEvH9OPgEfPH+D0gC9Fa6n5+wl+0/X/v53I8WDqKGTp3x0vOvX/n8u4tvn2pkNTcP39AOO7H0wHnqzO7zn751fMnYgZNWJutZtXJazux4FoZ0vY8xA4YFLmoN1sJMHnBpyx70sOaoCkeblxdRJol3Nn28v6meRZzR7qKclgpEd0XNBTDUVmot3QwTLYdVtbyt2EBb4UJtUkbquvV1mTv3lz1CTwm8o13WMvaFkIbkBWUL6MQFWzZuAOM/Xrbko7Eh6etzFsVTc0sT69exL4/bv+z6rZDkHSfzWuiDp0qamsC7ow62PP9BSG1DResF6sSWo5sb2FQlRquoXl84ftKkY7D7F8evf9beOmY0q6bgMoJExDYQhnwDh/5tIuym9Bm3Mi0nDRjNFjNHIcp3iay3cqvcQH98fooCHk94Y9Kg+RC7q9yoFIBDLoEyV7HbRSFxLpnNBVZDWH+lYAoyhRKVNEqZ+fPjcBirTiDgHMRZfs7HsC5kReDdwGMETKolxdQMglT+Dh9AJuoTSI9+X9MGh8AH2j8cCNZUT1ZatRaJc5vYuqzy5GxqhT551Xy2UM9zFrRIbNLvj4kfS9738Jg4CXfkHu8Yd5TMmp+dtMhMYu9CVb1YS5O4iX3J24NNbKhZ3QrIBZAiSBy1QSpu3S+Pd4Wbf+qOeFi7Vpk5UXli+DCW54N3LfACj2xySQ7r//4pOB4OgxYK2pQX4IDRZ1iJC97Vg97kZKTZgJ/6nVAGKHModdhjBRgrRnHhmi+hisfAX7Rw5jX4xKf3WEmSXThUW+QsZlSUHTtbGa8MUyyUYoMvKAM+nsXyspN30A6kkaJqEaHoYJf58HGIKoYXCaPVaHZZvRgXHC7OhR8HPSEV0NoKDx36CwNDSH4TQW6GowlyGys2kEvOqTRXxyP9eChMZZAosCqxnGLnlbUqEg5kUpFUkDny/wLyzLqkPeWUdECu/J9BnkmyM0AihrRuM7s6gWvWsNZ0Y14uZ7SaMLCRgQuig/nB7rdgGIH3Mcgp2qUMeYIxIM7KISYAzAZurcipcFgjCQcRXDIeoAiXECQPCxiyP4HFe4jm9ocMGfRoBL48lFsexChK7ETzIjGqmJYMIgSpYYy9ihQvoW/NPERHh4WEiFblDxVk/p6i7cX4GhCXg3W6S4WygJoxiAVgfiKftjZ+zsMrOyTe4y6zc6VgT2G5oTaBJKvra7bXNqhKqxxlJVSFrWJNA1uRkeLHQsLCc6LFWQR8eY6sLVRu7oakFexLw4a+qoRTZH4QiPevRC2MJy59RJEqbo+NJI/kl8Ml6BvqhQK7XoIzCdLisImyi4TpyjPwZUWvpCsvIgJbp2TAP6N1lw+UHwNxWrgCkeMwmASXwIHKCGWxslTpQ+6o3lq/PaMmZX1OSno6rCQwgNATv3YZh/hmVvAuLrRODh+F3x/Bxy/RjOQDpPThOy6C8J6Hj0vexj2NcBgjumReLsjeIGz1Oqrd1eAQ7BriEEVRpkkDsnzwmsGQP1azxME6hvx/vzxjGKndJgv4CguvvKsT5ktcQ/9Hc89UOJzYS6uPBK634i/0M/PBOWIcDKARoEkLQiFBC3wSKTkXN55KqmLF0AoB9vO+7SjMVFY9yHlCSbMUiHyxqEoOjNXOWHPnBomUpz0MVJOdEO1IGpHHE6tzWgPXanIqSNgVhpMkKMZgWnBlBVdJYvRZiYQ9Hvqj0Tw9IMhr+W2Bi4dJLdJLRckD93ek9nWWOjwOSuIFE5uiTM1QXqaV2FmDhpJP5h7tmHQ46to28zcYUYn2OvFKk5wOs4zIUGhwkXkVPDKvnRR8DxPs/gtSLWkU9YBcyXhFGQlr7IJE3SwAScicxbigPuC3kfMtv3aZZejy66970U+X6eina19Dl6PwWktuFgZv4repOFKWrJwA3lFechaY+CI+1mLlrBze8fHYWDIIwIsxtFg+GaNX8bAf+mIZRBSZ3dJqepMm4XeEGmlf0eRMRD5k8M42guTwdjXpNIkGshUeQQWSMbDF491hH/IR5tNaluTgeAaQFVFwFImaC+LgjSPgCAIjD/f+qjvsjTHXAhRDfsZgrcjaoOIPojkQVAJpN9hUpNnB+YIGnB99I9T0lI6LZBBEr3cQQ/3V4DFSRG8PbyGBCZ2OgYzpcBlDzl0UGIiej3iy6tFUoKq8uP3hzIc48GsRqgADaKBlim9+CDreHs893BECQ6LegtGtsMeU22Qr9hosY63JJL4Q75HHQfTjyD2yCmIsbcQCzCQlm0WSRNLsOqxHTLcHgyFkMeBVNemQZR9mN73JirSdgHSaRT2J2CNHklgOdT0NQaAJ6rqTFglRjxTWf8/1EKEnMrNesk+1rIX5TE7QZxBE+ItEvc9k0DSYEV2SVquZJbe56uBWqH4aRmk+J62VbDNXgviKpLeT83NPwK0t11pg2cGu5Hy+Aubgh5+yugbN4TqVpdmOa3MGaydx3BpupfkunPWXq+jnLnZwwkg0SV2/DOR3D9wiHbARAyyLTjdZZEGcmMSxUp9++Wl3+HqnD+4yAb0Q/2U3C0YSWZ955BQ+O4vEVwkirYw2oqYkyUGROAaS/E/QVAACAAAAeNq1mglwVVWax897L8u9L3vyEhbJYw15bAoBBCE6skVbUCMiYrSoHhs3oBCRsqZtG3FtxrJ6epAuEQE3xA1lUXFpuscFUQFR0bZxZ9Go8MJOgiB95nf+7yZ5tOJMVc/cU/9zt3O/851vPy8xIWNM1CwIDTcZI2vGjDPtf/XrGVNN4qoZV0wxp07915nTzEiTwRhjrQlz8tLuQsZPuwtDp4PJGFY3qpPpPmLYuE6m74ix9IPHjR3dyQwPRkVMTnCVYXJ1FTKZwZMskxdcZZt8UzDlihnTzGXqL1d/tfpp6meqv1H9bPV3Xn/NjVeYu9X/Qf089fPVL1T/oPolsOzW/XN96Lgn40AtGAPOBiPBmaAaZGjdCdNX8skyg6NntCtrN7LdzPK1SMuYSPna8i3lyRTF8oPB+UjoatN8uKdOjneEYqGyUIdQl1AidHJoQGhIaELo1tDjoXWhveGscCI8NjwzfFf47vDc8Pzw4vCS8JPhV8LrwhvDm8Nbwl+EvwrvDP8QKY60jcQj3SI9I2dGaiITIhMjkyKTI9MjN0RuitwamRP5fWRe5sSseVkLvN5elTfYO8Mb6Z3j1Xrjvcu8y72rvWneTO9Gb7Z3p3e3N9eb7y32lnhPeiu81d4a7zXvLW+T96H3ibfVq/eS3n7vsPd3P8OP+oV+md/B7+In/JP9Af4Q/0y/xh/jj/Un+BP9Sf5kf7p/g3+Tf6s/x/+9P89f4D/oL/WX+av8F/2/+Gv99f57/kf+Z/52/1t/t3/QPxJNyX203ap+u+uRsrtuVJ8MnmebYiyqxO43MbvPlHJfZg+YtvaIaW+b+KLIHjTFdo8p4Tpm95pSKJbZBtPGfsOoLaad3c3Iv2HHRVhcMfZXYjqaGK0UOy3jSRussy16bMe7bEZFoHeEtz50foDGPt540NjnZjOFfJEJjTgUfEaVQCMLGiWM3MnINozcyogi9F3KF6LOmtoDD26PQb2Rb7N4m88MB+H0GCP+yohNWk8DM5RBz/HosZ4nGNXEqHfgsj3r2UXvidZRaB1kZCSglw2dPfCQAa0dzOskF0OGpUjTzeRkIanzxkl3m/oGPcnU9YecnZd3MgVmkOmtJ1MDvWgcdFv7/fqy73FUMvg+xvcxvu/Bt3GenQqPy8DT4BmwHLjRiTQujgZ03fxVfF/H933MachoNDJ37w630C7heYznosKaWm0nZUeerr9Rfyz4tnUF36nfY2ZopRH7qfGgEUUrOSAP+eaj/wL7lenC+67YTjd7yFRw7g4qQYL7Hpx7gl5835tzH3Ay3/flXT+uqzj35zwAngZiGadCdxB6HMx6h3AeyndnMH4YGI4+RnI+G4xm3lrOY8E4cDHvLoGPOlZ8Kd9N5NmVfHsV56sZew2YzPUUeJ6Knq9lnums5zqezeDdjTz/DXK9CcyCp5vBbPi6BdzGmNvBHN79O7gL3MP9PPBHcC/zzgf3ufwB7gcLwSJoLOb7B8CD4CHwMHgELAGPgscY8zh4AjwJngLL4O1p8AxYDlawnpVgFWt8FjwHngerwQvgRXh4DbwO1oI3wDqwAVlsBJtY22a+P1d2EZGHRdHgNrS3He3F0N520w0/r+DcHVSCBPc9OPcEvfCK3pz7gL4878e5inN/zgOwnYHY2CB8+DT8eQheORQJDcOmh5MPnFVdxHzjGTNBWipCQ4fQTqO5ijHXwsd03s+A1ixo3gxmc30LuBfe5oP7wAJwP1gIFjFmMe8fAA+Ch8DD4BGwBDwKHmPM4+AJ8CR4CqyAt5VgFXw9C54Dz4PV4AXwJjy+Bd4G68Fm+HSecpKZhJzqkFM9Vn4UOdUjp3rkVI+VH0VO9cipHjk1Iqd65FRvTub7vrzrx3UV5/6cBxA7B9pFWPl3WPlSrHwxMjsdS19qhuK3w8mrI9DWKFADzgK/AOeA0WhwDOdzwXnI4ALOF4JxyPQiu86MR0cXEx8ngEuISXX2E3Mpsp7F3DeD2cx/C7iDb+4EvwP3sqb54D6wANwPFoJFjF/M2AfAg+Ah8DB4BCwBj4LHGPM4eAI8CZ4Cy1jX0+AZsBysYF0rwSrW9Sx4DjwPVoMXwEvw8DL4E1gD/gz+Av4LvALeZE1vgbfBerCBNW0Em1mXi07Sjj2YFruOSF/x1lgZRLym1pyZehI8T8urQdxrSKPpsuugINM2po08mHadDDJCenZovW74UVw93Bp1U/nl5/vgqw9P0O/46T41+4n6E37l/c99kCkaTtCn6+JEfdMJ+mQg53BsmasCSye3ycWOe5GLe+M3He0Ldi/YSNR6zVSYcjuLurnG5NqVWGy1nUsNGiMqxbF8YoQ9ZpebU+wa+wbVTdS+zZt/PLrZI/ao/R6uOnAXQ97GXeE/xn4LNwn7vclUFULNpIq2VDX+AfJUMe8KyITbbSNUDjB+r/1cVNszYrf9hPm/xkIMXmCoQV63n0LJ0Y7ZHdbZcz+ed4TOx0SHpP0YOh/ZPcxquPuOjGTs16CJ6sEdFep9MJD6pYQcephnccYk+CbKVSMrN0TtAlVE/VhvjHfHkFEVT7sRhxqZVQf8pw6qciSw2+02uNoDdkHXSBpu1Qn4OggvCdFI0c8xUe2UyrmnAuK9q/ig42pO0dnCCpPi1Whsb/uVfYR1vwO2asRCJLdUewJHTVLlyd/gtgzPzmHe9yW7L8Ea5Pge7xllD+PfhnkccuA3E0k1QCHfaQkdNCIttxPpwV0jvBqeHMW6coJ1f+1WR/VrpPXUs0bb0Hyt+4N65voG8VDPXVK6S0rb7uoIVztcHcRVExo0dp+kp7ccbdXnIqGiFsIZqrvdzI7Cx2js8xYJJYK5mQ/dOnl0ctpnhiZHNaDQDnSmSj0iy2qrefph+Y1kJ3fcQLxP6HoS89ahISO9DcMam2QfJdKhkaWbYNXnuqrYroXqB/jWAPFwjl2IfVeZQrsWDyul7whXcWcHdoXjmb7U/tmusK+b03lbSpWSOnKxhuZVGfsm89ZT5SBLbsvsi86WkMAmaLWzq2QvjqO4fclJnj5iX7PvMSpKVWDkDd/Jnz5t0c83LXo7AM+fN+vMSY9n21PnNF386ODN93Z/4Ffu/gP7rSy+WXO98ILHWOke8RZjVzVLiGqmONZlAr4rkM4QU0lVesB5JzIz2ls5GXZB2gm8HvuTrTgvHUEscvvnYmQ2yUyzf6L3uS8l2293noCPnGm/tIeQZ5WzYHyziLrKyL/cUU4UwpZ4l6v7rq4W5+0X0kojc30luXV03qudkeIe0eiHwCrZGcm68aRmKSABJ7M+xK4609/0pLZosqvh6RDWtcHRQd81aDsp74qbEaCad0nWfrb5F2QwirEmoPYR63hfV3t52jZN8kn8P45m424VzLGYkc+3vC5RX2o/421cO8NCYgnVqvTZwBqwIvsWFpZtxgZRSr6DJf2bs3riGvzZ/6S2fEjz7UayZ2nkBXxVhaRr6MemceTip/PfzfB6mNrWrc4P8sAadhiHyCY7GbMd/ddaV/XHWXXcjJJv1bCeBDSHkaVGtUTXY+gyJsss06o662l9MGV3ybCa2XK4qqJVB2/cfi61qgr83u2bY8xU1hoBtC912kqizRrRL1S0c7zOgNdaPJh4QHyts4v4qkqWWAvHtfTb4BWtod+aNAl8werWcTEguD9quorrSqRdSdbd6qSciora/aV8uyjIiZHAKnOQWGf8kcwiSzgY8Fwuv/8Pu83e7yKHXYBlnmInM76G6P0y3PSzv8V+slMSgHPHwxyq62ftS3hDrn2L6voAttKk6HJI0qzUqH3Ob+HMU5bsRB/Eac2fZGw0FYdS63L8i3uXx8uQ0kbiwFbl8x/cL28/eZSRuV0eyHYWTR5bih3FU2uzm8hHW+yrTobM9jXrSTbbQNrRL6DTqPxdjgz3KnOzj1aubo6WMeXTmGzQZddMtNuPKNKLHYKBz6h0aYK8WsTcu9E6mYQI+619l8qigLzbqHrFcfcusedjVQFxeVZCmvGUl7LwrWLWvQ07/UrZtDiIoDtcJGNccUq30P6Amfc5mQaZ2yEWSLaN5nJ5rcScooqgLxn57VQmQ2MZitY9yOtOI8dUa5RgJUni1i6qnUbW4axqi+KP+62oJLCzA0j9CFotQDdZSH8/8s0J7P9wi+9XKs+XB9VbHN9yv3pUs55S+lre1Ggn61bfw1V0jOlF3bfT7cnE2fagblJV0GIra5HDJuWttapRjIvsP3+wmm2q2PaSB7azVklMee+nx3+vVR6TbBqRQFKxDtnTp6zFWUou1I7y7Kj0dDyFLfK2ppRM7FbwkWS/K7CouJ0D5VnSlotr8eBsJIXuJp99+mG72bQPYpMv+VYjwRKsXdkE+TY4i5PtTWvOkvZdSdRRysPiEymfO463Q+yZTVotJB3gcTuR68tcvYH8e1v3y0Yt1cfrLjIj61rFVmdRnyAP6i3GfIal1FPtH8Bmkk5aAf1CVUNBXhGiWntn7GSf8khTqgrAXuIBL8Upb4NKBNsoxEp6IIH3Awrft2QpR8t5TrVssg/yf4f7bPg64uSIB6TqoJhkWSO5VhM541RTZ1Chj1VcigUxsEuqesGiG+SJMf3GnY+VHDbnsa4qNNEBPlegjzfgMSYbr1UNfjpVSHmajX2Obpp98bA8toGIejYznw+3Lr6X2PVUFY5/z9GA1xpF1Srk0clMkYbHQ/l87opAb2W8eOscYIf0UC0JJJg/gcw+0O/+CXh3Ofb+gGpC66lNZUOkOooaQvWr/DjlWQewkiMtOb6S55XYdUytyAx1eVB1VYLM1F11j/uuj+qLGE9ibveDdE8lInZEis11XaYsM8m64mT5GPNXa6cSI6fViSP9fUK1y1JoVSGrruZyvq+mUnZclyB5aiiirAkk4Ae2PCCoZg8GNYbLfBX6bd1VOX4qSgV+lhPkQkUKqrEeSL6b6Y/VvO92Ci0RK5zVyWk+WhedyE63gOczlQETqrDmkvXSj3Bmo0Z/FP2E0Vg7O9xa5yPIZS1W5r6q4RlWRu/Gr3fjc8bnetLrP39UK3fE5QWTJF1nk9XsqMkzrrrleVXz3uX/4RiqPV5L1U7UaFTMbgziWCLQTFJe3vSjen8cseY7csdv7XKkOxeN3IcFVJExXdZfyh5nKTQXsp7DivlNzpvszJYZb+a+ya40pxPL6uirqaqSdha79/eIWJWqpeL47C70nAx2hlvS5j+f+d911Qxxbo69g5nnygr/KrpwhAcRS6hoqZbsq5o/iU1MbllxlVYW7Ga0/1TDT1zET8r/k82Z4R9j8D991Mgnos0eoP1ENNgTNR+JtOsffx8L6loT/HYQU5zcFegvRs04gDXuDKq0WPO+MThi7peRIDZvl4RTmv4yyEIHUrHa/UrQ/KtGUJltkde57LcbDxtKTK1TrV2Hribbd9Df9qAWroCfHdQsjrKrWzfr++F2uOZPtNqUtPCNeGlojZbBm1j6qP+zozbIL80VYo14qj5O/tWpCuwnK4w5bjXsMUex1l9BbQQ7pP32l3YD+/C12sNUEatGkZM/bJVza/wJrXXxxB/nTwj+ChwxodBqsCZ1dmP07GHwTOrc8mwxmJc668tw6A/kz5DtYab+/Xuez8AvB5pqrsPkr7D2ER5xNUz8LGDeItbkqrj2xNROylRdyFTF5mRaOTXyac7zFDuHmV/gD6PNBexcLySzDSG2X0Z8/CXtTHOlmcyIKbQaM5V2lrnWzCBf3kgbY35LO9fMMrPNeeZW2gXmNnMH2ft3tIvMveZR6D1mlpsrzCqzhvrnVbPe/Npsot1mNtNuh99cOHM1fn/4KTTDod0OymPg+Tw46cwMs6mNHfX+oj5A1AdBfY0ZDMWNZqJoTdZfzcP6y2NXScTJI8r689z/ABCDOkCzmpUNY30TWd2V5ipztbmGL6ewsmvNdHMda7ueld1j5pk/wmUo+At+H/VTW+7PDe7D2EBXzdaNFsEbKpB9d1qI+FZJhnVZJgsr6Yk2etE8tNAbvvrQotJGDqs7BSn0pWUgiX7w25+Wz0oHwPdAWiG5+1R0OIhWzKoH62+T7q+TQ2ilSG4ouX04rQ1WOgIJjqS1h7tRrLuG1hbNnYUEzqaVS75x5HsetnO+Khn2t4y8gNYZ/Y1FJxfSuppxtG7o8iJWNp7W3VxMqzQTaAlzCa0HsaGO9V1K6yWLCGERs1jLzbQQ2pvNtdNfW/R3G7PcTmuLJu/g2umynVlEi5jF5iHGP4zVZJultFxs5ym+XYYFFZkVZiUrXWVeYI0v0tqbl7CAtljAq/D/mlkHtTexr+5mAzbRUzbRC81cqv8oKYN+BKm5v2h30O4rH8nnMEcerZi7fKgXaEfpLKVIXnMScugie+oqDXeThis5O71WSK/dpNfuaLUP106jYWm0UhqtkEa76XeKCum1m/QakV4zpNdM6TVLes2WXj3p1Zdeo1jsGXA3jNZOOs6RjvOk4wI0fBbXTq8FePI5XI/BPvOk3Z7SbkLaLZB286TdAmk3T9otl3bj0m4PabejtNtJ2u0s7XaRdrviNRPh5EpaCb5zFfw4/2mDB01GEy5KlCpKtMebrkWq02kd8KrreDuDFlPcKDW/MTdh07Owjwqs4xZkchs2UYBF3AlXzibyzBxzF2PuwQ9z8fWFaMFZSQVW8ijjnX1Uyj4qZB+Zsg9f9pEj+yjAPl6BjrOPhOyjQPbRQ/bRRVGoVFbSNYgcJ8lSsmQpvizFk6XkyVJCspQMWUpUlpIpS4lIP3nST7YklCcJ+ZJQtiSUKwnlSEJRSShfEsqQhDxJKEcSypSEopJQWDIISwYh8RsNOO0gTn1xmiU+88VpOI3TTHHqidNscZohm84Tv2HxmyN+w+I3S/zmiN8C8RsVv574zRW/meI3X/xGxW+2+PXEb0T8RtL49aBdLl498ZopXgvh3GdEiuNWqWaL16xAqo7XfNUYoTSOc4ndl/EkxbfLUb64zxT3ueI+mibtbHGflybtwjRpZxHtr2dOt4ZscUyOhcMN+ouWafmduuP/qt4IYU9hUNpyjqjPwEPCwbMyOM1ilubc1HqUKxblSx7NZxP0J+k+X7m9EF8qwrfcf+60OwEn5Xhg+7T7uNZzolWEA26NtJAXzPnzK21tzStubW1EMRx4U6o5XeemteZ5WttJmj3V2gYtdlxl1q45w/83vt32jXjaY2BkAEEGXRWGSwxr/v+p3/8fCur/ntw7u+mdYn89kHO/////9+0MVAQ8jCBSgVztDSAi8z92UA9XxgzEAiAGBwMTiTZsmGsIJFkcwBwAjDY1fHjabZNLaFNBFIb/OSfgA6poKkJR0Rahtg011iQmvWlSrMFCNmJasjC66UIqWESor6Lo0gcVoVYotGpURNz4ggqiIkEogooPdKELW9CNCqLuhPGfgULQLj7Onblnzj3/+efKfMC0kD4cNaOIyxmslyKK2oe1uhUpTKPZnEanOYXADCEqZZTMPD7vRwNjVpajXca5foh6yWKJ9GCjHMEaaeP+MQQSQ4scREoGkDCtKJBu6UfJ1fExjn69gpw8sI9lEhltQkKvI8MzGdnL9SDXz5AxFeTNRYS1lvslbAmFsVjvoFUnkJBh5l1m/Ml3jaz1CAu0gFp5Y6dCaftd7tpPMm5fyFO0U8sQew4YAykga34BTqMct6/kADbJS2zQgDHJnpuR1DrEdBeSnE2XOcyaT5CUBqR1DIu0C+s0gZhsY56LV5n3DWkZxEL5zdxh+14n7RfZbWek176lniZzCTnzFR8YA/bdY3Ygz3kHUrTvyIzk3TPS+Ii4Oc++cjyz05MSYBVn3imf2f9NDJgRejPic1K6jF7Uc/8sVpAxUkciJEr26A2enUa3+YFmnbBlN7fQNc72NvW4+W2295yGUJR6c9zbzu9NIWYiaDQnEDYnqfUcAs480Fvo8P6Vsc/fB+rxsQMRPEeNWWr/6AXWcJ7OgfPY+1uF97dCzRXetQpWznr7H/S1Gu+rw/k3F/TTe1mF93IUq0kbqZn18V+8h9U4Dx1F+9rff/43ch+H/P2ht38BjZvLIHjaY2BmAIP/WxmMGLAAACzCAeoAeNrV0tePlkUUBvDfuyxdpS19hZdFll4FgUWKdGRBegfpmNBDESkqXXoNvUvvvfciTYEQwoUhEf4KuOJz+NZ4wZ3hymdyzsmZPDOZZ86DXHIiXRSy6GzoomSfGm0KtZZYqk9kquxzjX1rsB/t8KtE1D2alnI55UWcFpeOy8UZcWacFR+ukJFIhHNx4FdRX1bgDwn8nXZH3f7hF4tLxelJfuMcfuKV5olX75a0ELUT1yTxtrh/8TL7ZR3+mpTzzveQ7qlnoT5N1uf+TO4+T+YRhllluGnWmeE7qz2y1vfWWG6RxaZ4YqwxfvCLmSZaYqllJtlkvQ222GizWbYGBdtsD0r22BXU7/azvQ7aZ79DDlgRfuWYw4446rjZFjrjpFPOOe2sOc677IKLLrnuiquume+GO2665Te3rTTXA3fdc99DC/zuJ/OcMNVo030ln1EmGG+cP+SJ3gRd+b323xBJCdNNlVseeY0MNxRQ0Ec+DvMtpLAiiiomTXEllFRKaWWUDX/7qXLKh4lWkKGiz1RKuqGKqqqproaawSW11VFXveCR+hr4QkONgluyNPGlpppproXJWmqltTbaaqe9Dr7WUbZOOvtGF111010PPfXSWx999dPfAAMNCr77cDxOenHo/9URfwPFRbymAAAA */ "data:font/opentype;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/scroll.png */ "./asset/resource/scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/scrollhor.png */ "./asset/resource/scrollhor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/resource/nisbutton.png */ "./asset/resource/nisbutton.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: block;
  padding: 0 .5rem;
  background-color: #0F0F0F;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #FFFFFF;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  font-family: 'trajan-pro-3', sans-serif;
}

#app {
  text-align: center;
  transform-origin: top;
  white-space: nowrap;
}

#current,
#last {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#current p,
#last p {
  margin: 0;
  font-size: .85rem;
}

#current img,
#last img {
  margin: 0 1rem;
}

#get {
  margin-top: 1.5rem;
}

#Settings {
  display: none;
  background-color: #0f0f0f;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  color: #F1F1F1;
}

#Settings {
  padding: .5rem;
}

hr {
  opacity: .5;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 0;
}

h3 {
  margin-top: .75rem;
  margin-bottom: .35rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: .5rem;
}

#Settings .setting {
  margin-bottom: .65rem;
}

input[type="color"],
input[type="checkbox"] {
  margin-right: .5rem;
}

input[type="number"] {
  margin: 0 .5rem 0 0;
  max-width: 40px;
}

input[type="number"].per-row {
  margin-left: 0;
}

.setting label {
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  text-transform: none;
}

select {
  margin: 0 .25rem 0 1rem;
}

.nisimgbutton {
    width: 20px;
    height: 20px;
    border: 3px solid #212B2D;
    box-sizing: border-box;
    border-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 3 fill;
    cursor: pointer;
}

.nisimgbutton:hover {
    filter: brightness(1.2);
}

/*font stolen from jagex*/
@font-face{
	font-family:'trajan-pro-3';
	src:url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

/*Chromium custom scrollbars, will only work on chromium browsers (such as alt1) */
body::-webkit-scrollbar,
body *:not(.normalscroll)::-webkit-scrollbar
{width:10px; height:10px;}

body::-webkit-scrollbar-button:start:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-button:start:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___}); background-position:0px 0px; height:15px;}

body::-webkit-scrollbar-button:end:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-button:end:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___}); background-position:-45px 0px; height:15px;}

body::-webkit-scrollbar-track:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-track:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___}); background-position:-15px 0px;}

body::-webkit-scrollbar-thumb:vertical,
body *:not(.normalscroll)::-webkit-scrollbar-thumb:vertical
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_3___}); background-position:-30px 0px; border-radius:5px;}

body::-webkit-scrollbar-button:start:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-button:start:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:0px 0px; width:15px;}

body::-webkit-scrollbar-button:end:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-button:end:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:0px -45px; width:15px;}

body::-webkit-scrollbar-track:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-track:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:0px -15px;}

body::-webkit-scrollbar-thumb:horizontal,
body *:not(.normalscroll)::-webkit-scrollbar-thumb:horizontal
{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_4___}); background-position:0px -30px; border-radius:5px;}

body::-webkit-scrollbar-corner,
body *:not(.normalscroll)::-webkit-scrollbar-corner
{background:#060d11;}

.nisbutton {
    height: 32px;
    position: relative;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 0px -100%/24px 400% repeat content-box;
    cursor: pointer;
    text-align: center;
    color: #000;
    font-family: 'trajan-pro-3';
    text-shadow: 1px 1px 2px #ecc622;
    font-size: 18px;
    margin: 5px;
    padding: 0px 12px;
    line-height: 32px;
    user-select: none;
    -webkit-user-select: none;
}

.nisbutton::before {
    width: 12px;
    height: 100%;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 0px 0px / 24px 400%;
}

.nisbutton::after {
    width: 12px;
    height: 100%;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) -12px 0px / 24px 400%;
}

.nisbutton:not([disabled]):hover {
    background-position: 0px -300%;
}

.nisbutton:not([disabled]):hover::before {
    background-position: 0px -200%;
}

.nisbutton:not([disabled]):hover::after {
    background-position: -12px -200%;
}

.nisbutton[disabled] {
  opacity: .5;
  cursor: default;
  pointer-events: none;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "../node_modules/css-loader/dist/cjs.js!./css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./a1sauce.ts":
/*!********************!*\
  !*** ./a1sauce.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createCheckboxSetting: () => (/* binding */ createCheckboxSetting),
/* harmony export */   createDropdownSetting: () => (/* binding */ createDropdownSetting),
/* harmony export */   createHeading: () => (/* binding */ createHeading),
/* harmony export */   createNumberSetting: () => (/* binding */ createNumberSetting),
/* harmony export */   createProfileManager: () => (/* binding */ createProfileManager),
/* harmony export */   createRangeSetting: () => (/* binding */ createRangeSetting),
/* harmony export */   createSeperator: () => (/* binding */ createSeperator),
/* harmony export */   createSmallText: () => (/* binding */ createSmallText),
/* harmony export */   createText: () => (/* binding */ createText),
/* harmony export */   createTextSetting: () => (/* binding */ createTextSetting),
/* harmony export */   getSetting: () => (/* binding */ getSetting),
/* harmony export */   loadSettings: () => (/* binding */ loadSettings),
/* harmony export */   setDefaultSettings: () => (/* binding */ setDefaultSettings),
/* harmony export */   settingsExist: () => (/* binding */ settingsExist),
/* harmony export */   timeout: () => (/* binding */ timeout),
/* harmony export */   updateSetting: () => (/* binding */ updateSetting)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var config = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
var appName = config.appName;
appName = 'job-gauges';
function createHeading(size, content) {
    var header = document.createElement(size);
    header.innerHTML = content;
    return header;
}
function createText(content) {
    var text = document.createElement('p');
    text.innerHTML = content;
    return text;
}
function createSmallText(content) {
    var text = document.createElement('small');
    text.innerHTML = content;
    return text;
}
function createSeperator() {
    return document.createElement('hr');
}
function createButton(content, fn, options) {
    var _a = options.classes, classes = _a === void 0 ? options.classes : _a;
    var button = document.createElement('button');
    button.innerHTML = content;
    if (options.classes.length) {
        for (var i = options.classes.length; i--; i >= 0) {
            button.classList.add(options.classes[i]);
        }
    }
    button.addEventListener('click', function () {
        fn();
    });
    return button;
}
function createDropdownSetting(name, description, defaultValue, options) {
    var select = createDropdown(name, defaultValue, options);
    var label = createLabel(name, description);
    var container = createFlexContainer('reverse-setting');
    container.appendChild(select);
    container.appendChild(label);
    return container;
}
function createTextSetting(name, description, defaultValue) {
    var input = createInput('text', name, defaultValue);
    var label = createLabel(name, description);
    label.setAttribute('for', name);
    var container = createFlexContainer();
    container.appendChild(input);
    container.appendChild(label);
    return container;
}
function createCheckboxSetting(name, description, defaultValue) {
    var input = createCheckboxInput(name, defaultValue);
    var label = createLabel(name, description);
    var checkboxLabel = createLabel(name, '');
    var checkbox = document.createElement('span');
    checkbox.classList.add('checkbox');
    var container = createFlexContainer('reverse-setting');
    checkboxLabel.appendChild(input);
    checkboxLabel.appendChild(checkbox);
    container.appendChild(checkboxLabel);
    container.appendChild(label);
    container.addEventListener('click', function (e) {
        if (e.target == container) {
            input.checked = !input.checked;
            input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
            updateSetting(name, input.checked);
        }
    });
    return container;
}
function createNumberSetting(name, description, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var _d = options.defaultValue, defaultValue = _d === void 0 ? (_a = options.defaultValue) !== null && _a !== void 0 ? _a : 10 : _d, _e = options.min, min = _e === void 0 ? (_b = options.min) !== null && _b !== void 0 ? _b : 1 : _e, _f = options.max, max = _f === void 0 ? (_c = options.max) !== null && _c !== void 0 ? _c : 20 : _f;
    var input = createInput('number', name, defaultValue);
    input.setAttribute('min', min.toString());
    input.setAttribute('max', max.toString());
    var label = createLabel(name, description);
    var container = createFlexContainer('reverse-setting');
    container.appendChild(input);
    container.appendChild(label);
    return container;
}
function createRangeSetting(name, description, options) {
    var _a, _b, _c, _d, _e;
    if (options === void 0) { options = {}; }
    var _f = options.classes, classes = _f === void 0 ? (_a = options.classes) !== null && _a !== void 0 ? _a : '' : _f, _g = options.defaultValue, defaultValue = _g === void 0 ? (_b = options.defaultValue) !== null && _b !== void 0 ? _b : '100' : _g, _h = options.min, min = _h === void 0 ? (_c = options.min) !== null && _c !== void 0 ? _c : 0 : _h, _j = options.max, max = _j === void 0 ? (_d = options.max) !== null && _d !== void 0 ? _d : 100 : _j, _k = options.unit, unit = _k === void 0 ? (_e = options.unit) !== null && _e !== void 0 ? _e : '%' : _k;
    var input = createInput('range', name, defaultValue);
    input.setAttribute('min', min.toString());
    input.setAttribute('max', max.toString());
    var label = createLabel(name, description);
    label.classList.add('full');
    if (getSetting(name) != undefined) {
        input.value = getSetting(name);
    }
    var output = createOutput();
    output.setAttribute('id', "".concat(name, "Output"));
    output.setAttribute('for', name);
    output.innerHTML = input.value + unit;
    output.after(unit);
    var container = createFlexContainer();
    if (classes.length) {
        for (var i = classes.length; i--; i >= 0) {
            container.classList.add(classes[i]);
        }
    }
    container.classList.add('flex-wrap');
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(output);
    input.addEventListener('input', function () {
        output.innerHTML = input.value + unit;
    });
    return container;
}
function createProfileManager() {
    function saveProfile() {
        var profileNameInput = container.querySelector('#ProfileName');
        var profileName = profileNameInput.value;
        if (profileName.indexOf('|') > -1) {
            console.log('Pipe character is not allowed in profile names.');
            return;
        }
        var profiles = localStorage.getItem('bbb_profiles');
        var profilesArray = localStorage
            .getItem('bbb_profiles')
            .split('|')
            .filter(function (str) { return str !== ''; });
        // If we do not have profiles set it to be empty
        if (profiles == undefined) {
            profiles = '';
        }
        // If the profile name doesn't exist in our profiles - add it
        if (!profilesArray.includes(profileName)) {
            profiles = profiles + '|' + profileName + '|';
            localStorage.setItem('bbb_profiles', profiles);
        }
        // Create and update or store any data
        var data = {};
        data['Buffs'] = localStorage['Buffs'];
        data['Buffs2'] = localStorage['Buffs2'];
        data['Buffs3'] = localStorage['Buffs3'];
        data['UntrackedBuffs'] = localStorage['UntrackedBuffs'];
        data['Settings'] = JSON.parse(localStorage[appName]);
        localStorage.setItem("bbb_profile_".concat(profileName), JSON.stringify(data));
        console.log("".concat(profileName, " added to profiles. Existing profiles: \n ").concat(profiles));
        location.reload();
    }
    function deleteProfile() {
        var index = container.querySelector('select').selectedIndex;
        var profileName = container.querySelector('select').options[index].text;
        console.log("Deleting: ".concat(profileName, " profile"));
        var profiles = localStorage
            .getItem('bbb_profiles')
            .split('|')
            .filter(function (str) { return str !== ''; });
        profiles = profiles.filter(function (item) { return item !== profileName; });
        localStorage.setItem('bbb_profiles', profiles.join('|') + '|');
        localStorage.removeItem("bbb_profile_".concat(profileName));
        location.reload();
    }
    function loadProfile() {
        var index = container.querySelector('select').selectedIndex;
        if (index !== 0) {
            var profiles_1 = localStorage
                .getItem('bbb_profiles')
                .split('|')
                .filter(function (str) { return str !== ''; });
            var storageName = profiles_1[index - 1];
            var data = JSON.parse(localStorage.getItem("bbb_profile_".concat(storageName)));
            if (data['Buffs'] !== undefined && data['Buffs'] !== '') {
                localStorage.setItem('Buffs', data['Buffs']);
            }
            if (data['Buffs2'] !== undefined && data['Buffs2'] !== '') {
                localStorage.setItem('Buffs2', data['Buffs2']);
            }
            if (data['Buffs3'] !== undefined && data['Buffs3'] !== '') {
                localStorage.setItem('Buffs3', data['Buffs3']);
            }
            if (data['UntrackedBuffs'] !== undefined &&
                data['UntrackedBuffs'] !== '') {
                localStorage.setItem('UntrackedBuffs', data['UntrackedBuffs']);
            }
            Object.entries(data['Settings']).forEach(function (setting) {
                updateSetting(setting[0], setting[1]);
            });
        }
        location.reload();
    }
    var profileOptions = [{ value: '0', name: 'Select Profile' }];
    var profiles;
    if (localStorage.getItem('bbb_profiles')) {
        profiles = localStorage
            .getItem('bbb_profiles')
            .split('|')
            .filter(function (str) { return str !== ''; });
        profiles.forEach(function (profile, index) {
            profileOptions.push({ value: index.toString(), name: profile });
        });
    }
    else {
        profiles = '|';
    }
    var profileHeader = createHeading('h3', 'Profiles');
    var profileText = createText('Select a profile to load or delete. To save a new profile, give it a name in the field below and then click Save. To update an existing profile save a profile using the same name.');
    var saveButton = createButton('Save', saveProfile, {
        classes: ['nisbutton'],
    });
    var profileName = createInput('text', 'ProfileName', '');
    profileName.classList.add('profile-name');
    var loadOptions = createDropdownSetting('Profile', '', 'Add', profileOptions);
    loadOptions.classList.add('profile-list');
    loadOptions.querySelector('select').selectedIndex = 0;
    var loadButton = createButton('Load', loadProfile, {
        classes: ['nisbutton'],
    });
    loadButton.classList.add('load-btn');
    var deleteButton = createButton('Delete', deleteProfile, {
        classes: ['nisbutton', 'delete'],
    });
    var container = createFlexContainer();
    container.classList.remove('flex');
    var endSeperator = createSeperator();
    container.classList.add('flex-wrap');
    container.appendChild(profileHeader);
    container.appendChild(profileText);
    container.appendChild(loadOptions);
    container.appendChild(document.createElement('br'));
    container.appendChild(saveButton);
    container.appendChild(profileName);
    container.appendChild(loadButton);
    container.appendChild(deleteButton);
    //container.appendChild(deleteButton);
    container.appendChild(endSeperator);
    return container;
}
function createLabel(name, description) {
    var label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML = description;
    return label;
}
function createInput(type, name, defaultValue) {
    var _a;
    var input = document.createElement('input');
    input.id = name;
    input.type = type;
    input.dataset.setting = name;
    input.dataset.defaultValue = defaultValue;
    input.value = input.dataset.defaultValue;
    if (getSetting(name)) {
        input.value = (_a = getSetting(name)) !== null && _a !== void 0 ? _a : input.dataset.defaultValue;
    }
    else {
        updateSetting(name, input.dataset.defaultValue);
    }
    input.addEventListener('change', function () {
        if (type == 'text') {
            updateSetting(name, input.value);
        }
        else if (type == 'number' || type == 'range') {
            updateSetting(name, parseInt(input.value, 10));
        }
    });
    return input;
}
function createCheckboxInput(name, defaultValue) {
    var input = document.createElement('input');
    input.id = name;
    input.type = 'checkbox';
    input.dataset.setting = name;
    input.dataset.defaultValue = defaultValue;
    input.checked = defaultValue;
    if (getSetting(name)) {
        input.checked = getSetting(name);
    }
    else {
        updateSetting(name, input.checked);
    }
    input.addEventListener('change', function () {
        updateSetting(name, input.checked);
    });
    return input;
}
function createDropdown(name, defaultValue, options) {
    var select = document.createElement('select');
    select.id = name;
    select.dataset.setting = name;
    select.dataset.defaultValue = defaultValue;
    select.value = defaultValue;
    if (getSetting(name)) {
        select.value = getSetting(name);
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i].value;
        option.text = options[i].name;
        select.appendChild(option);
    }
    if (getSetting(name)) {
        select.value = getSetting(name);
    }
    else {
        updateSetting(name, select.value);
    }
    select.addEventListener('change', function () {
        updateSetting(name, select.value);
    });
    return select;
}
function createOutput() {
    var output = document.createElement('output');
    return output;
}
function createFlexContainer(classes) {
    var container = document.createElement('div');
    container.classList.add('flex');
    container.classList.add('setting');
    if (classes) {
        container.classList.add(classes);
    }
    return container;
}
function setDefaultSettings() {
    var settings = document.querySelectorAll('[data-setting]');
    settings.forEach(function (setting) {
        switch (setting.type) {
            case 'number':
            case 'range':
                updateSetting(setting.dataset.setting, parseInt(setting.dataset.defaultValue, 10));
                break;
            case 'checkbox':
                if (setting.dataset.defaultValue == 'false') {
                    updateSetting(setting.dataset.setting, false);
                }
                else {
                    updateSetting(setting.dataset.setting, true);
                }
                break;
            default:
                updateSetting(setting.dataset.setting, setting.dataset.defaultValue);
        }
    });
}
function loadSettings() {
    var settings = document.querySelectorAll('[data-setting]');
    settings.forEach(function (setting) {
        var _a;
        switch (setting.type) {
            case 'number':
            case 'range':
                setting.value =
                    (_a = getSetting(setting.dataset.setting)) !== null && _a !== void 0 ? _a : setting.dataset.defaultValue;
                break;
            case 'checkbox':
                setting.checked =
                    getSetting(setting.dataset.setting) ||
                        setting.dataset.defaultValue;
                break;
            default:
                setting.value =
                    getSetting(setting.dataset.setting) ||
                        setting.dataset.defaultValue;
        }
    });
}
function settingsExist() {
    if (!localStorage[appName]) {
        setDefaultSettings();
    }
    else {
        loadSettings();
    }
}
function getSetting(setting) {
    if (!localStorage[appName]) {
        localStorage.setItem(appName, JSON.stringify({}));
        setDefaultSettings();
    }
    return JSON.parse(localStorage[appName])[setting];
}
function updateSetting(setting, value) {
    if (!localStorage.getItem(appName)) {
        localStorage.setItem(appName, JSON.stringify({}));
    }
    var save_data = JSON.parse(localStorage[appName]);
    save_data[setting] = value;
    localStorage.setItem(appName, JSON.stringify(save_data));
}
function timeout(millis) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, millis);
                })];
        });
    });
}


/***/ }),

/***/ "./data/necromancy_job_gauge.ts":
/*!**************************************!*\
  !*** ./data/necromancy_job_gauge.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

var necromancy_overlay_data = {
    inCombat: false,
    position: {
        x: 50,
        y: 50,
    },
    stacks: {
        souls: {
            visible: true,
            count: 0,
        },
        necrosis: {
            visible: true,
            count: 0,
            dupeRow: false,
        },
    },
    conjures: {
        active: false,
        position: {
            active_orientation: {
                x: 0,
                y: 0,
            },
            grouped_orientation: {
                x: 0,
                y: 0,
            },
            split_orientation: {
                x: 10,
                y: 0,
            },
            reverse_split_orientation: {
                x: -5,
                y: 0,
            }
        },
        skeleton: {
            visible: true,
            time: 0,
            active: false,
        },
        zombie: {
            visible: true,
            time: 0,
            active: false,
        },
        ghost: {
            visible: true,
            time: 0,
            active: false,
        },
        fourth: {
            visible: true,
            time: 0,
            active: false,
        },
    },
    incantations: {
        active: [0, 0, 1, 1],
        invokeDeath: {
            visible: true,
            active: false,
            position: {
                active_orientation: {
                    x: 0,
                    y: 0,
                },
                grouped_orientation: {
                    x: 62,
                    y: 0,
                },
                split_orientation: {
                    x: -8,
                    y: 0,
                },
                reverse_split_orientation: {
                    x: 29,
                    y: 0,
                }
            },
        },
        darkness: {
            visible: true,
            time: 0,
            position: {
                active_orientation: {
                    x: 0,
                    y: 0,
                },
                grouped_orientation: {
                    x: 62,
                    y: 16,
                },
                split_orientation: {
                    x: -8,
                    y: 16,
                },
                reverse_split_orientation: {
                    x: 29,
                    y: 16,
                }
            },
        },
        splitSoul: {
            visible: true,
            time: 0,
            activeCooldown: false,
            cooldown: 41,
            position: {
                active_orientation: {
                    x: 0,
                    y: 0,
                },
                grouped_orientation: {
                    x: 40,
                    y: 16,
                },
                split_orientation: {
                    x: 36,
                    y: 16,
                },
                reverse_split_orientation: {
                    x: 22,
                    y: 16,
                }
            },
        },
        threads: {
            visible: true,
            time: 0,
            activeCooldown: false,
            cooldown: 40,
            position: {
                active_orientation: {
                    x: 0,
                    y: 0,
                },
                grouped_orientation: {
                    x: 40,
                    y: 0,
                },
                split_orientation: {
                    x: 36,
                    y: 0,
                },
                reverse_split_orientation: {
                    x: 22,
                    y: 0,
                }
            },
        },
    },
    livingDeath: {
        visiblie: true,
        active: false,
        time: 0,
        cooldown: 60,
        position: {
            active_orientation: {
                x: 0,
                y: 0,
            },
            grouped_orientation: {
                x: 31,
                y: 0,
            },
            split_orientation: {
                x: 43,
                y: 0,
            },
            reverse_split_orientation: {
                x: 65,
                y: 0,
            }
        },
    },
    bloat: {
        visible: true,
        time: 0,
        position: {
            active_orientation: {
                x: -4,
                y: 47,
            },
            grouped_orientation: {
                x: -4,
                y: 47,
            },
            split_orientation: {
                x: -4,
                y: 47,
            },
            reverse_split_orientation: {
                x: -4,
                y: 47,
            }
        },
    },
};
exports.necromancy_overlay_data = necromancy_overlay_data;


/***/ }),

/***/ "./lib/necromancy/bloat.ts":
/*!*********************************!*\
  !*** ./lib/necromancy/bloat.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bloatOverlay: () => (/* binding */ bloatOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var bloatImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    bloat_100: __webpack_require__(/*! ../.././asset/data/bloat/bloat_100.data.png */ "./asset/data/bloat/bloat_100.data.png"),
    bloat_90: __webpack_require__(/*! ../.././asset/data/bloat/bloat_90.data.png */ "./asset/data/bloat/bloat_90.data.png"),
    bloat_80: __webpack_require__(/*! ../.././asset/data/bloat/bloat_80.data.png */ "./asset/data/bloat/bloat_80.data.png"),
    bloat_70: __webpack_require__(/*! ../.././asset/data/bloat/bloat_70.data.png */ "./asset/data/bloat/bloat_70.data.png"),
    bloat_60: __webpack_require__(/*! ../.././asset/data/bloat/bloat_60.data.png */ "./asset/data/bloat/bloat_60.data.png"),
    bloat_50: __webpack_require__(/*! ../.././asset/data/bloat/bloat_50.data.png */ "./asset/data/bloat/bloat_50.data.png"),
    bloat_40: __webpack_require__(/*! ../.././asset/data/bloat/bloat_40.data.png */ "./asset/data/bloat/bloat_40.data.png"),
    bloat_30: __webpack_require__(/*! ../.././asset/data/bloat/bloat_30.data.png */ "./asset/data/bloat/bloat_30.data.png"),
    bloat_20: __webpack_require__(/*! ../.././asset/data/bloat/bloat_20.data.png */ "./asset/data/bloat/bloat_20.data.png"),
    bloat_10: __webpack_require__(/*! ../.././asset/data/bloat/bloat_10.data.png */ "./asset/data/bloat/bloat_10.data.png"),
    bloat_0: __webpack_require__(/*! ../.././asset/data/bloat/bloat_expired.data.png */ "./asset/data/bloat/bloat_expired.data.png"),
});
var white = alt1__WEBPACK_IMPORTED_MODULE_0__.mixColor(255, 255, 255);
function bloatOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bloatImages.promise];
                case 1:
                    _a.sent();
                    if (gauges.necromancy.bloat.active) {
                        value = parseFloat(gauges.necromancy.bloat.time);
                        switch (true) {
                            case value < 1.8:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_0.toDrawableData()), bloatImages.bloat_0.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 3.6:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_10.toDrawableData()), bloatImages.bloat_10.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 5.4:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_20.toDrawableData()), bloatImages.bloat_20.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 7.2:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_30.toDrawableData()), bloatImages.bloat_30.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 9.0:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_40.toDrawableData()), bloatImages.bloat_40.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 10.8:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_50.toDrawableData()), bloatImages.bloat_50.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 12.6:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_60.toDrawableData()), bloatImages.bloat_60.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 14.4:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_70.toDrawableData()), bloatImages.bloat_70.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 16.2:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_80.toDrawableData()), bloatImages.bloat_80.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value < 18.0:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_90.toDrawableData()), bloatImages.bloat_90.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                            case value >= 18.0:
                                alt1.overLaySetGroup('Bloat');
                                alt1.overLayImage(gauges.necromancy.position.x +
                                    gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y +
                                    gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_100.toDrawableData()), bloatImages.bloat_100.width, 1000);
                                alt1.overLayRefreshGroup('Bloat');
                                break;
                        }
                    }
                    else {
                        alt1.overLaySetGroup('Bloat');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.bloat.position.active_orientation.x, gauges.necromancy.position.y + gauges.necromancy.bloat.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(bloatImages.bloat_0.toDrawableData()), bloatImages.bloat_0.width, 1000);
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/necromancy/conjures.ts":
/*!************************************!*\
  !*** ./lib/necromancy/conjures.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conjureOverlay: () => (/* binding */ conjureOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var conjureImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    skeleton_warrior_inactive: __webpack_require__(/*! ../.././asset/data/conjures/conjure_skeleton_inactive.data.png */ "./asset/data/conjures/conjure_skeleton_inactive.data.png"),
    skeleton_warrior: __webpack_require__(/*! ../.././asset/data/conjures/conjure_skeleton.data.png */ "./asset/data/conjures/conjure_skeleton.data.png"),
    putrid_zombie_inactive: __webpack_require__(/*! ../.././asset/data/conjures/conjure_zombie_inactive.data.png */ "./asset/data/conjures/conjure_zombie_inactive.data.png"),
    putrid_zombie: __webpack_require__(/*! ../.././asset/data/conjures/conjure_zombie.data.png */ "./asset/data/conjures/conjure_zombie.data.png"),
    vengeful_ghost_inactive: __webpack_require__(/*! ../.././asset/data/conjures/conjure_ghost_inactive.data.png */ "./asset/data/conjures/conjure_ghost_inactive.data.png"),
    vengeful_ghost: __webpack_require__(/*! ../.././asset/data/conjures/conjure_ghost.data.png */ "./asset/data/conjures/conjure_ghost.data.png"),
    undead_army_inactive: __webpack_require__(/*! ../.././asset/data/conjures/conjure_undead_army_inactive.data.png */ "./asset/data/conjures/conjure_undead_army_inactive.data.png"),
    undead_army: __webpack_require__(/*! ../.././asset/data/conjures/conjure_undead_army.data.png */ "./asset/data/conjures/conjure_undead_army.data.png"),
});
var white = alt1__WEBPACK_IMPORTED_MODULE_0__.mixColor(255, 255, 255);
var lastMinValue;
function conjureOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        var earliest_conjure, minValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, conjureImages.promise];
                case 1:
                    _a.sent();
                    alt1.overLaySetGroup('Undead_Army');
                    if (gauges.necromancy.conjures.active) {
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.conjures.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(conjureImages.undead_army.toDrawableData()), conjureImages.undead_army.width, 1000);
                    }
                    else {
                        alt1.overLayImage(gauges.necromancy.position.x +
                            gauges.necromancy.conjures.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(conjureImages.undead_army_inactive.toDrawableData()), conjureImages.undead_army.width, 1000);
                    }
                    earliest_conjure = [
                        gauges.necromancy.conjures.skeleton.time,
                        gauges.necromancy.conjures.zombie.time,
                        gauges.necromancy.conjures.ghost.time
                    ];
                    minValue = Math.min.apply(null, earliest_conjure.filter(Boolean));
                    if (minValue !== Infinity && minValue !== lastMinValue) {
                        alt1.overLaySetGroup('Undead_Army_Text');
                        alt1.overLayFreezeGroup('Undead_Army_Text');
                        alt1.overLayClearGroup('Undead_Army_Text');
                        alt1.overLaySetGroupZIndex('Undead_Army_Text', 1);
                        alt1.overLayTextEx(minValue.toString(), white, 8, gauges.necromancy.position.x +
                            20 +
                            gauges.necromancy.conjures.position.active_orientation.x, gauges.necromancy.position.y + 20, 10000, undefined, true, true);
                        alt1.overLayRefreshGroup('Undead_Army_Text');
                        lastMinValue = minValue;
                    }
                    else {
                        alt1.overLayClearGroup('Undead_Army_Text');
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/necromancy/incantations.ts":
/*!****************************************!*\
  !*** ./lib/necromancy/incantations.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   incantationsOverlay: () => (/* binding */ incantationsOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var incantationImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    invoke_death_inactive: __webpack_require__(/*! ../.././asset/data/incantations/invoke_death_inactive.data.png */ "./asset/data/incantations/invoke_death_inactive.data.png"),
    invoke_death: __webpack_require__(/*! ../.././asset/data/incantations/invoke_death.data.png */ "./asset/data/incantations/invoke_death.data.png"),
    darkness_inactive: __webpack_require__(/*! ../.././asset/data/incantations/darkness_inactive.data.png */ "./asset/data/incantations/darkness_inactive.data.png"),
    darkness: __webpack_require__(/*! ../.././asset/data/incantations/darkness.data.png */ "./asset/data/incantations/darkness.data.png"),
    threads_inactive: __webpack_require__(/*! ../.././asset/data/incantations/threads_inactive.data.png */ "./asset/data/incantations/threads_inactive.data.png"),
    threads: __webpack_require__(/*! ../.././asset/data/incantations/threads.data.png */ "./asset/data/incantations/threads.data.png"),
    split_soul_inactive: __webpack_require__(/*! ../.././asset/data/incantations/splitsoul_inactive.data.png */ "./asset/data/incantations/splitsoul_inactive.data.png"),
    split_soul: __webpack_require__(/*! ../.././asset/data/incantations/splitsoul.data.png */ "./asset/data/incantations/splitsoul.data.png"),
});
function incantationsOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, incantationImages.promise];
                case 1:
                    _a.sent();
                    if (gauges.necromancy.incantations.active[0]) {
                        alt1.overLaySetGroup('Invoke_Death');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.incantations.invokeDeath.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.invoke_death.toDrawableData()), incantationImages.invoke_death.width, 1000);
                    }
                    else {
                        alt1.overLaySetGroup('Invoke_Death');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.incantations.invokeDeath.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.invoke_death_inactive.toDrawableData()), incantationImages.invoke_death_inactive.width, 1000);
                    }
                    if (gauges.necromancy.incantations.active[1]) {
                        alt1.overLaySetGroup('Darkness');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.incantations.darkness.position.active_orientation.x, gauges.necromancy.position.y + gauges.necromancy.incantations.darkness.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.darkness.toDrawableData()), incantationImages.darkness.width, 1000);
                    }
                    else {
                        alt1.overLaySetGroup('Darkness');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.incantations.darkness.position.active_orientation.x, gauges.necromancy.position.y + gauges.necromancy.incantations.darkness.position.active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.darkness_inactive.toDrawableData()), incantationImages.darkness_inactive.width, 1000);
                    }
                    if (gauges.necromancy.incantations.active[2]) {
                        alt1.overLaySetGroup('Threads');
                        alt1.overLayImage(gauges.necromancy.position.x +
                            gauges.necromancy.incantations.threads.position
                                .active_orientation.x *
                                2, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.threads_inactive.toDrawableData()), incantationImages.threads_inactive.width, 1000);
                    }
                    else {
                        alt1.overLaySetGroup('Threads');
                        alt1.overLayImage(gauges.necromancy.position.x +
                            gauges.necromancy.incantations.threads.position
                                .active_orientation.x *
                                2, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.threads.toDrawableData()), incantationImages.threads.width, 1000);
                    }
                    if (gauges.necromancy.incantations.active[3]) {
                        alt1.overLaySetGroup('SplitSoul');
                        alt1.overLayImage(gauges.necromancy.position.x +
                            gauges.necromancy.incantations.splitSoul.position
                                .active_orientation.x *
                                2, gauges.necromancy.position.y +
                            gauges.necromancy.incantations.splitSoul.position
                                .active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.split_soul_inactive.toDrawableData()), incantationImages.split_soul_inactive.width, 1000);
                    }
                    else {
                        alt1.overLaySetGroup('SplitSoul');
                        alt1.overLayImage(gauges.necromancy.position.x +
                            gauges.necromancy.incantations.splitSoul.position
                                .active_orientation.x *
                                2, gauges.necromancy.position.y +
                            gauges.necromancy.incantations.splitSoul.position
                                .active_orientation.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(incantationImages.split_soul.toDrawableData()), incantationImages.split_soul.width, 1000);
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/necromancy/living_death.ts":
/*!****************************************!*\
  !*** ./lib/necromancy/living_death.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   livingDeathOverlay: () => (/* binding */ livingDeathOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ultimateImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    inactive: __webpack_require__(/*! ../.././asset/data/living_death/living_death_inactive.data.png */ "./asset/data/living_death/living_death_inactive.data.png"),
    active: __webpack_require__(/*! ../.././asset/data/living_death/living_death.data.png */ "./asset/data/living_death/living_death.data.png"),
});
var white = alt1__WEBPACK_IMPORTED_MODULE_0__.mixColor(255, 255, 255);
var lastValue;
function livingDeathOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ultimateImages.promise];
                case 1:
                    _a.sent();
                    if (gauges.necromancy.livingDeath.active == true) {
                        alt1.overLaySetGroup('LivingDeath');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.livingDeath.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(ultimateImages.active.toDrawableData()), ultimateImages.active.width, 1000);
                        if (lastValue !== gauges.necromancy.livingDeath.time) {
                            alt1.overLaySetGroup('LivingDeath_Text');
                            alt1.overLayFreezeGroup('LivingDeath_Text');
                            alt1.overLayClearGroup('LivingDeath_Text');
                            alt1.overLaySetGroupZIndex('LivingDeath_Text', 1);
                            alt1.overLayTextEx(gauges.necromancy.livingDeath.time.toString(), white, 8, gauges.necromancy.position.x +
                                gauges.necromancy.livingDeath.position.active_orientation.x + 20, gauges.necromancy.position.y + 20, 10000, undefined, true, true);
                            alt1.overLayRefreshGroup('LivingDeath_Text');
                            lastValue = gauges.necromancy.livingDeath.time;
                        }
                    }
                    else {
                        alt1.overLaySetGroup('LivingDeath');
                        alt1.overLayImage(gauges.necromancy.position.x + gauges.necromancy.livingDeath.position.active_orientation.x, gauges.necromancy.position.y, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(ultimateImages.inactive.toDrawableData()), ultimateImages.inactive.width, 1000);
                        alt1.overLayRefreshGroup('LivingDeath_Text');
                        alt1.overLayClearGroup('LivingDeath_Text');
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/necromancy/necrosis_stacks.ts":
/*!*******************************************!*\
  !*** ./lib/necromancy/necrosis_stacks.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   necrosisOverlay: () => (/* binding */ necrosisOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var necrosisImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    necrosis_0: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_0.data.png */ "./asset/data/necrosis/necrosis_0.data.png"),
    necrosis_2: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_2.data.png */ "./asset/data/necrosis/necrosis_2.data.png"),
    necrosis_4: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_4.data.png */ "./asset/data/necrosis/necrosis_4.data.png"),
    necrosis_6: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_6.data.png */ "./asset/data/necrosis/necrosis_6.data.png"),
    necrosis_8: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_8.data.png */ "./asset/data/necrosis/necrosis_8.data.png"),
    necrosis_10: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_10.data.png */ "./asset/data/necrosis/necrosis_10.data.png"),
    necrosis_12: __webpack_require__(/*! ../.././asset/data/necrosis/necrosis_12.data.png */ "./asset/data/necrosis/necrosis_12.data.png"),
});
function necrosisOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, necrosisImages.promise];
                case 1:
                    _a.sent();
                    switch (gauges.necromancy.stacks.necrosis.count) {
                        case 0:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_0.toDrawableData()), necrosisImages.necrosis_0.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_0.toDrawableData()), necrosisImages.necrosis_0.width, 1000);
                            }
                            break;
                        case 2:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_2.toDrawableData()), necrosisImages.necrosis_2.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_2.toDrawableData()), necrosisImages.necrosis_2.width, 1000);
                            }
                            break;
                        case 4:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_4.toDrawableData()), necrosisImages.necrosis_4.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_4.toDrawableData()), necrosisImages.necrosis_4.width, 1000);
                            }
                            break;
                        case 6:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_6.toDrawableData()), necrosisImages.necrosis_6.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_6.toDrawableData()), necrosisImages.necrosis_6.width, 1000);
                            }
                            break;
                        case 8:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_8.toDrawableData()), necrosisImages.necrosis_8.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_8.toDrawableData()), necrosisImages.necrosis_8.width, 1000);
                            }
                            break;
                        case 10:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_10.toDrawableData()), necrosisImages.necrosis_10.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_10.toDrawableData()), necrosisImages.necrosis_10.width, 1000);
                            }
                            break;
                        case 12:
                            alt1.overLaySetGroup('Necrosis');
                            alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 72, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_12.toDrawableData()), necrosisImages.necrosis_12.width, 1000);
                            if (gauges.necromancy.stacks.necrosis.dupeRow) {
                                alt1.overLaySetGroup('Necrosis_Row2');
                                alt1.overLayImage(gauges.necromancy.position.x - 10, gauges.necromancy.position.y + 86, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(necrosisImages.necrosis_12.toDrawableData()), necrosisImages.necrosis_12.width, 1000);
                            }
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/necromancy/soul_stacks.ts":
/*!***************************************!*\
  !*** ./lib/necromancy/soul_stacks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   soulsOverlay: () => (/* binding */ soulsOverlay)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var soulImages = alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages({
    souls_0: __webpack_require__(/*! ../.././asset/data/souls/souls_0.data.png */ "./asset/data/souls/souls_0.data.png"),
    souls_1: __webpack_require__(/*! ../.././asset/data/souls/souls_1.data.png */ "./asset/data/souls/souls_1.data.png"),
    souls_2: __webpack_require__(/*! ../.././asset/data/souls/souls_2.data.png */ "./asset/data/souls/souls_2.data.png"),
    souls_3: __webpack_require__(/*! ../.././asset/data/souls/souls_3.data.png */ "./asset/data/souls/souls_3.data.png"),
    souls_4: __webpack_require__(/*! ../.././asset/data/souls/souls_4.data.png */ "./asset/data/souls/souls_4.data.png"),
    souls_5: __webpack_require__(/*! ../.././asset/data/souls/souls_5.data.png */ "./asset/data/souls/souls_5.data.png"),
});
function soulsOverlay(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, soulImages.promise];
                case 1:
                    _a.sent();
                    switch (gauges.necromancy.stacks.souls.count) {
                        case 0:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_0.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                        case 1:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_1.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                        case 2:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_2.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                        case 3:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_3.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                        case 4:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_4.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                        case 5:
                            alt1.overLaySetGroup('Souls');
                            alt1.overLayImage(gauges.necromancy.position.x, gauges.necromancy.position.y + 35, alt1__WEBPACK_IMPORTED_MODULE_0__.encodeImageString(soulImages.souls_5.toDrawableData()), soulImages.souls_0.width, 1000);
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/readBuffs.ts":
/*!**************************!*\
  !*** ./lib/readBuffs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readBuffs: () => (/* binding */ readBuffs)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alt1/buffs */ "../node_modules/alt1/dist/buffs/index.js");
/* harmony import */ var alt1_buffs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt1_buffs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _a1sauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../a1sauce */ "./a1sauce.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var buffs = new (alt1_buffs__WEBPACK_IMPORTED_MODULE_1___default())();
var debuffs = new (alt1_buffs__WEBPACK_IMPORTED_MODULE_1___default())();
debuffs.debuffs = true;
var buffsImages = alt1__WEBPACK_IMPORTED_MODULE_2__.webpackImages({
    darkness: __webpack_require__(/*! .././asset/data/buffs/Darkness.data.png */ "./asset/data/buffs/Darkness.data.png"),
    living_death: __webpack_require__(/*! .././asset/data/buffs/Living_Death.data.png */ "./asset/data/buffs/Living_Death.data.png"),
    split_soul: __webpack_require__(/*! .././asset/data/buffs/Split_Soul.data.png */ "./asset/data/buffs/Split_Soul.data.png"),
    threads: __webpack_require__(/*! .././asset/data/buffs/Threads_of_Fate.data.png */ "./asset/data/buffs/Threads_of_Fate.data.png"),
    necrosis: __webpack_require__(/*! .././asset/data/buffs/Necrosis.data.png */ "./asset/data/buffs/Necrosis.data.png"),
    soul: __webpack_require__(/*! .././asset/data/buffs/Residual_Soul.data.png */ "./asset/data/buffs/Residual_Soul.data.png"),
    skeleton: __webpack_require__(/*! .././asset/data/buffs/skeleton_warrior-top.data.png */ "./asset/data/buffs/skeleton_warrior-top.data.png"),
    zombie: __webpack_require__(/*! .././asset/data/buffs/putrid_zombie-top.data.png */ "./asset/data/buffs/putrid_zombie-top.data.png"),
    ghost: __webpack_require__(/*! .././asset/data/buffs/vengeful_ghost-top.data.png */ "./asset/data/buffs/vengeful_ghost-top.data.png"),
});
function readBuffs(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (buffs.pos == undefined) {
                buffs.find();
                console.log('Buffs bar not found - searching again in 5 seconds...');
                _a1sauce__WEBPACK_IMPORTED_MODULE_0__.timeout(5000);
                readBuffs(gauges);
            }
            else {
                updateBuffData(gauges, buffsImages.soul, 200, updateSoulCount);
                updateBuffData(gauges, buffsImages.necrosis, 200, updateNecrosisCount);
                if (!disableLivingDeathCheck) {
                    updateBuffData(gauges, buffsImages.living_death, 400, updateLivingDeath);
                }
                updateConjures(gauges);
                updateBuffData(gauges, buffsImages.darkness, 300, updateDarkness);
                if (!disableThreadsCheck) {
                    updateBuffData(gauges, buffsImages.threads, 300, updateThreads);
                }
                if (!disableSplitCheck) {
                    updateBuffData(gauges, buffsImages.split_soul, 350, updateSplitSoul);
                }
                return [2 /*return*/, buffs];
            }
            return [2 /*return*/];
        });
    });
}
function updateBuffData(gauges, buffImage, threshold, updateFn) {
    return __awaiter(this, void 0, void 0, function () {
        var buffsData, foundBuff, _i, _a, _b, _key, value, buff;
        return __generator(this, function (_c) {
            buffsData = buffs.read();
            foundBuff = false;
            for (_i = 0, _a = Object.entries(buffsData); _i < _a.length; _i++) {
                _b = _a[_i], _key = _b[0], value = _b[1];
                buff = value.countMatch(buffImage, false);
                if (buff.passed > threshold) {
                    foundBuff = true;
                    updateFn(gauges, value.readArg('time').time);
                }
            }
            if (!foundBuff) {
                updateFn(gauges, 0);
            }
            return [2 /*return*/, foundBuff];
        });
    });
}
// TODO: Figure out a cleaner way to update values.
// There shouldn't be any reason the below functions can't be done via updateBuffData
// without passing an updatefn()
// Passing data = ['necromancy]['stacks']['souls]['count'] and trying
// to update gauges.data doesn't work because somehow ['souls'] is undefined?
function updateSoulCount(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.stacks.souls.count = value;
            return [2 /*return*/];
        });
    });
}
function updateNecrosisCount(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.stacks.necrosis.count = value;
            return [2 /*return*/];
        });
    });
}
var white = alt1__WEBPACK_IMPORTED_MODULE_2__.mixColor(255, 255, 255);
var disableLivingDeathCheck = false;
var disableLivingDeathCountdown = false;
function updateLivingDeath(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (value == 0 && !disableLivingDeathCheck) {
                gauges.necromancy.livingDeath.active = true;
                gauges.necromancy.livingDeath.time = '';
            }
            if (value > 1) {
                gauges.necromancy.livingDeath.active = true;
                gauges.necromancy.livingDeath.time = value;
            }
            if (value == 1) {
                gauges.necromancy.livingDeath.time = value;
                setTimeout(function () {
                    gauges.necromancy.livingDeath.time = '';
                    disableLivingDeathCheck = true;
                    gauges.necromancy.livingDeath.active = false;
                    if (disableLivingDeathCheck && !disableLivingDeathCountdown) {
                        disableLivingDeathCountdown = true;
                        startLivingDeathCooldown(gauges);
                    }
                }, 1000);
                setTimeout(function () {
                    gauges.necromancy.livingDeath.time = '';
                    gauges.necromancy.livingDeath.active = false;
                    disableLivingDeathCheck = false;
                }, gauges.necromancy.livingDeath.cooldown * 1000);
            }
            return [2 /*return*/];
        });
    });
}
function startLivingDeathCooldown(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        var cooldown, timer;
        return __generator(this, function (_a) {
            cooldown = 59;
            timer = setInterval(function () {
                cooldown -= 1;
                if (cooldown > 0) {
                    alt1.overLaySetGroup('LivingDeath_Cooldown_Text');
                    alt1.overLayFreezeGroup('LivingDeath_Cooldown_Text');
                    alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
                    alt1.overLaySetGroupZIndex('LivingDeath_Cooldown_Text', 1);
                    alt1.overLayTextEx(cooldown.toString(), white, 8, gauges.necromancy.position.x + 53, gauges.necromancy.position.y + 20, 3000, undefined, true, true);
                    alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
                }
                else {
                    alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
                    alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
                }
            }, 1000);
            setTimeout(function () {
                clearInterval(timer);
                alt1.overLayRefreshGroup('LivingDeath_Cooldown_Text');
                alt1.overLayClearGroup('LivingDeath_Cooldown_Text');
                disableLivingDeathCountdown = false;
            }, gauges.necromancy.livingDeath.cooldown * 1000 + 1000);
            return [2 /*return*/];
        });
    });
}
function updateSkeleton(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.conjures.skeleton.time = value;
            gauges.necromancy.conjures.skeleton.active = Boolean(value);
            return [2 /*return*/];
        });
    });
}
function updateZombie(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.conjures.zombie.time = value;
            gauges.necromancy.conjures.zombie.active = Boolean(value);
            return [2 /*return*/];
        });
    });
}
function updateGhost(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.conjures.ghost.time = value;
            gauges.necromancy.conjures.ghost.active = Boolean(value);
            return [2 /*return*/];
        });
    });
}
function updateDarkness(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.incantations.active[1] = Boolean(value);
            return [2 /*return*/];
        });
    });
}
var disableThreadsCheck = false;
function updateThreads(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.incantations.active[2] = false;
            if (value > 1) {
                gauges.necromancy.incantations.active[2] = true;
            }
            if (value == 1) {
                gauges.necromancy.incantations.active[2] = true;
                disableThreadsCheck = true;
                setTimeout(function () {
                    gauges.necromancy.incantations.active[2] = false;
                    disableThreadsCheck = false;
                }, gauges.necromancy.incantations.threads.cooldown * 1000);
            }
            return [2 /*return*/];
        });
    });
}
var disableSplitCheck = false;
function updateSplitSoul(gauges, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            gauges.necromancy.incantations.active[3] = false;
            if (value > 1) {
                gauges.necromancy.incantations.active[3] = true;
            }
            if (value == 1) {
                gauges.necromancy.incantations.active[3] = true;
                disableSplitCheck = true;
                setTimeout(function () {
                    gauges.necromancy.incantations.active[3] = false;
                    disableSplitCheck = false;
                }, gauges.necromancy.incantations.splitSoul.cooldown * 1000);
            }
            return [2 /*return*/];
        });
    });
}
function updateConjures(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        var hasSkeleton, hasZombie, hasGhost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateBuffData(gauges, buffsImages.skeleton, 150, updateSkeleton)];
                case 1:
                    hasSkeleton = _a.sent();
                    return [4 /*yield*/, updateBuffData(gauges, buffsImages.zombie, 150, updateZombie)];
                case 2:
                    hasZombie = _a.sent();
                    return [4 /*yield*/, updateBuffData(gauges, buffsImages.ghost, 200, updateGhost)];
                case 3:
                    hasGhost = _a.sent();
                    if (hasSkeleton || hasZombie || hasGhost) {
                        gauges.necromancy.conjures.active = true;
                    }
                    else {
                        gauges.necromancy.conjures.active = false;
                    }
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./lib/readEnemy.ts":
/*!**************************!*\
  !*** ./lib/readEnemy.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readEnemy: () => (/* binding */ readEnemy)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1/targetmob */ "../node_modules/alt1/dist/targetmob/index.js");
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1_targetmob__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var targetDisplay = new (alt1_targetmob__WEBPACK_IMPORTED_MODULE_0___default())();
var enemyDebuffImages = alt1__WEBPACK_IMPORTED_MODULE_1__.webpackImages({
    invokeDeath: __webpack_require__(/*! .././asset/data/enemyDebuffs/Death_Mark.data.png */ "./asset/data/enemyDebuffs/Death_Mark.data.png"),
    bloat: __webpack_require__(/*! .././asset/data/enemyDebuffs/bloated.data.png */ "./asset/data/enemyDebuffs/bloated.data.png"),
});
// Thanks to rodultra97 for PR to previous repo
var bloatInterval = new Map();
var bloat = 'bloat';
function readEnemy(gauges) {
    return __awaiter(this, void 0, void 0, function () {
        var targetData, target_display_loc, targetDebuffs, targetIsDeathMarked, targetIsBloated, intervalId;
        return __generator(this, function (_a) {
            targetData = targetDisplay.read();
            if (gauges.checkCombatStatus) {
                if (targetData) {
                    gauges.inCombat = true;
                }
                else {
                    setTimeout(function () {
                        if (!targetData) {
                            gauges.inCombat = false;
                        }
                    }, 1200);
                }
            }
            else {
                gauges.inCombat = true;
            }
            if (targetData && gauges.inCombat) {
                target_display_loc = {
                    x: (targetDisplay === null || targetDisplay === void 0 ? void 0 : targetDisplay.lastpos.x) - 120,
                    y: (targetDisplay === null || targetDisplay === void 0 ? void 0 : targetDisplay.lastpos.y) + 20,
                    w: 150,
                    h: 60,
                };
                targetDebuffs = alt1__WEBPACK_IMPORTED_MODULE_1__.captureHold(target_display_loc.x, target_display_loc.y, target_display_loc.w, target_display_loc.h);
                targetIsDeathMarked = targetDebuffs.findSubimage(enemyDebuffImages.invokeDeath).length;
                if (targetIsDeathMarked) {
                    gauges.necromancy.incantations.active[0] = true;
                }
                else if (!targetIsDeathMarked) {
                    gauges.necromancy.incantations.active[0] = false;
                }
                targetIsBloated = targetDebuffs.findSubimage(enemyDebuffImages.bloat).length;
                if (targetIsBloated && !bloatInterval.has(bloat)) {
                    gauges.necromancy.bloat.time = 19.6;
                    gauges.necromancy.bloat.active = true;
                    intervalId = setInterval(function () {
                        var currentTick = parseFloat(gauges.necromancy.bloat.time);
                        if (currentTick > 0) {
                            var nextTick = parseFloat(roundedToFixed(currentTick - 0.6, 1));
                            gauges.necromancy.bloat.time = nextTick;
                        }
                        else {
                            clearInterval(bloatInterval.get(bloat));
                            bloatInterval.delete(bloat);
                            gauges.necromancy.bloat.time = 0;
                        }
                    }, 600);
                    bloatInterval.set(bloat, intervalId);
                }
                else if (!targetIsBloated) {
                    if (bloatInterval.has(bloat)) {
                        clearInterval(bloatInterval.get(bloat));
                        bloatInterval.delete(bloat);
                    }
                    gauges.necromancy.bloat.time = 0;
                    gauges.necromancy.bloat.active = false;
                }
            }
            return [2 /*return*/];
        });
    });
}
function roundedToFixed(input, digits) {
    var rounder = Math.pow(10, digits);
    return (Math.round(input * rounder) / rounder).toFixed(digits);
}


/***/ }),

/***/ "data:font/opentype;base64,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":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:font/opentype;base64,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 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:font/opentype;base64,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";

/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./asset/resource/nis-imgbutton.png":
/*!******************************************!*\
  !*** ./asset/resource/nis-imgbutton.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-imgbutton.png";

/***/ }),

/***/ "./asset/resource/nis-interface-bg.png":
/*!*********************************************!*\
  !*** ./asset/resource/nis-interface-bg.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nis-interface-bg.png";

/***/ }),

/***/ "./asset/resource/nisbutton.png":
/*!**************************************!*\
  !*** ./asset/resource/nisbutton.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nisbutton.png";

/***/ }),

/***/ "./asset/resource/scroll.png":
/*!***********************************!*\
  !*** ./asset/resource/scroll.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "scroll.png";

/***/ }),

/***/ "./asset/resource/scrollhor.png":
/*!**************************************!*\
  !*** ./asset/resource/scrollhor.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "scrollhor.png";

/***/ }),

/***/ "./icon.png":
/*!******************!*\
  !*** ./icon.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ }),

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    let res = new exports.ImageData(rect.width, rect.height);
    this.copyTo(res, rect.x, rect.y, rect.width, rect.height, 0, 0);
    return res;
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_12931__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_12931__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_12931__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_12931__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_12931__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData.
* Cleans sRGB headers from downloaded png images. Assumes that data url's are already cleaned from sRGB and other headers
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    var hdr = "data:image/png;base64,";
    var isdataurl = url.startsWith(hdr);
    if (typeof Image != "undefined") {
        if (isdataurl) {
            return loadImageDataFromUrl(url);
        }
        else {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error("failed to load image: " + url);
            }
            let file = new Uint8Array(await res.arrayBuffer());
            return imageDataFromFileBuffer(file);
        }
    }
    else {
        if (isdataurl) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
function loadImageDataFromUrl(url) {
    if (typeof Image == "undefined") {
        throw new Error("Browser environment expected");
    }
    return new Promise((done, fail) => {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        img.onload = function () { done(new imgref_1.ImgRefCtx(img).toData()); };
        img.onerror = fail;
        img.src = url;
    });
}
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    if (isPngBuffer(data)) {
        clearPngColorspace(data);
    }
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await loadImageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_29896__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_29896__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            if (img instanceof HTMLCanvasElement) {
                this.ctx = img.getContext("2d", { willReadFrequently: true });
            }
            else {
                var cnv = document.createElement("canvas");
                cnv.width = img.width;
                cnv.height = img.height;
                this.ctx = cnv.getContext("2d", { willReadFrequently: true });
                this.ctx.drawImage(img, 0, 0);
            }
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_33868__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromUrl = exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_33868__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_33868__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_33868__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_33868__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_33868__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_33868__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_33868__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_33868__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));
Object.defineProperty(exports, "imageDataFromUrl", ({ enumerable: true, get: function () { return imagedetect_1.imageDataFromUrl; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_37680__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_37680__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_37680__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_37680__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_43872__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_43872__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_43872__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    triggerPaste(new index_1.ImgRefCtx(img));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        var bloburl = URL.createObjectURL(blob);
        img.onerror = () => {
            URL.revokeObjectURL(bloburl);
            error("invalidfile", "The file you uploaded could not be opened as an image.");
        };
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () {
                pasted(img);
                URL.revokeObjectURL(bloburl);
            };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_55275__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_55275__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_55275__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_55275__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_55275__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer. You generally never have to do this yourself
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_78005__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_78005__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_78005__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_78005__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/buffs/index.js":
/*!************************************************!*\
  !*** ../node_modules/alt1/dist/buffs/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buffs/imgs/buffborder.data.png":
/*!********************************************!*\
  !*** ./src/buffs/imgs/buffborder.data.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_885__) => {

module.exports=(__nested_webpack_require_885__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABCSURBVEhL7daxDQAgDANBwxasxmCsS4jECE8K5JdcX+s219iqKrGTXi+dfs2SjCEZQzKGZAzJGJIxJGNI/2KFj1gK6ntTCO2Nfp8AAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/imgs/debuffborder.data.png":
/*!**********************************************!*\
  !*** ./src/buffs/imgs/debuffborder.data.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1504__) => {

module.exports=(__nested_webpack_require_1504__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABFSURBVEhL7daxDQAgDANBm5XYfwOYyUgoI5gUyFc51bfhAoQmNzYl1v3MJjVqt0jMIjGLxCwSs0jMIjGLxCz+jTV+xMAB3/oJlYh5IBUAAAAASUVORK5CYII=")

/***/ }),

/***/ "./src/buffs/index.ts":
/*!****************************!*\
  !*** ./src/buffs/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2063__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BuffInfo = exports.Buff = void 0;
const a1lib = __importStar(__nested_webpack_require_2063__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_2063__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_2063__(/*! alt1/base */ "alt1/base");
var imgs = (0, base_1.webpackImages)({
    buff: __nested_webpack_require_2063__(/*! ./imgs/buffborder.data.png */ "./src/buffs/imgs/buffborder.data.png"),
    debuff: __nested_webpack_require_2063__(/*! ./imgs/debuffborder.data.png */ "./src/buffs/imgs/debuffborder.data.png"),
});
var font = __nested_webpack_require_2063__(/*! ../fonts/pixel_8px_digits.fontmeta.json */ "./src/fonts/pixel_8px_digits.fontmeta.json");
function negmod(a, b) {
    return ((a % b) + b) % b;
}
class Buff {
    constructor(buffer, x, y, isdebuff) {
        this.buffer = buffer;
        this.bufferx = x;
        this.buffery = y;
        this.isdebuff = isdebuff;
    }
    readArg(type) {
        return BuffReader.readArg(this.buffer, this.bufferx + 2, this.buffery + 23, type);
    }
    readTime() {
        return BuffReader.readTime(this.buffer, this.bufferx + 2, this.buffery + 23);
    }
    compareBuffer(img) {
        return BuffReader.compareBuffer(this.buffer, this.bufferx + 1, this.buffery + 1, img);
    }
    countMatch(img, aggressive) {
        return BuffReader.countMatch(this.buffer, this.bufferx + 1, this.buffery + 1, img, aggressive);
    }
}
exports.Buff = Buff;
class BuffReader {
    constructor() {
        this.pos = null;
        this.debuffs = false;
    }
    find(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        if (!img) {
            return null;
        }
        var poslist = img.findSubimage(this.debuffs ? imgs.debuff : imgs.buff);
        if (poslist.length == 0) {
            return null;
        }
        var grids = [];
        for (var a in poslist) {
            var ongrid = false;
            for (var b in grids) {
                if (negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0 && negmod(grids[b].x - poslist[a].x, BuffReader.gridsize) == 0) {
                    grids[b].x = Math.min(grids[b].x, poslist[a].x);
                    grids[b].y = Math.min(grids[b].y, poslist[a].y);
                    grids[b].n++;
                    ongrid = true;
                    break;
                }
            }
            if (!ongrid) {
                grids.push({ x: poslist[a].x, y: poslist[a].y, n: 1 });
            }
        }
        var max = 0;
        var above2 = 0;
        var best = null;
        for (var a in grids) {
            console.log("buff grid [" + grids[a].x + "," + grids[a].y + "], n:" + grids[a].n);
            if (grids[a].n > max) {
                max = grids[a].n;
                best = grids[a];
            }
            if (grids[a].n >= 2) {
                above2++;
            }
        }
        if (above2 > 1) {
            console.log("Warning, more than one possible buff bar location");
        }
        if (!best) {
            return null;
        }
        this.pos = { x: best.x, y: best.y, maxhor: 5, maxver: 1 };
        return true;
    }
    getCaptRect() {
        if (!this.pos) {
            return null;
        }
        return new a1lib.Rect(this.pos.x, this.pos.y, (this.pos.maxhor + 1) * BuffReader.gridsize, (this.pos.maxver + 1) * BuffReader.gridsize);
    }
    read(buffer) {
        if (!this.pos) {
            throw new Error("no pos");
        }
        var r = [];
        var rect = this.getCaptRect();
        if (!rect) {
            return null;
        }
        if (!buffer) {
            buffer = a1lib.capture(rect.x, rect.y, rect.width, rect.height);
        }
        var maxhor = 0;
        var maxver = 0;
        for (var ix = 0; ix <= this.pos.maxhor; ix++) {
            for (var iy = 0; iy <= this.pos.maxver; iy++) {
                var x = ix * BuffReader.gridsize;
                var y = iy * BuffReader.gridsize;
                //Have to require exact match here as we get transparency bs otherwise
                var match = buffer.pixelCompare((this.debuffs ? imgs.debuff : imgs.buff), x, y) == 0;
                if (!match) {
                    break;
                }
                r.push(new Buff(buffer, x, y, this.debuffs));
                maxhor = Math.max(maxhor, ix);
                maxver = Math.max(maxver, iy);
            }
        }
        this.pos.maxhor = Math.max(5, maxhor + 2);
        this.pos.maxver = Math.max(1, maxver + 1);
        return r;
    }
    static compareBuffer(buffer, ox, oy, buffimg) {
        var r = BuffReader.countMatch(buffer, ox, oy, buffimg, true);
        if (r.failed > 0) {
            return false;
        }
        if (r.tested < 50) {
            return false;
        }
        return true;
    }
    static countMatch(buffer, ox, oy, buffimg, agressive) {
        var r = { tested: 0, failed: 0, skipped: 0, passed: 0 };
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    r.skipped++;
                    continue;
                } //transparent buff pixel
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255) {
                    r.skipped++;
                    continue;
                } //white pixel - part of buff time text
                if (data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    r.skipped++;
                    continue;
                } //black pixel - part of buff time text
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                r.tested++;
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 35) {
                    //qw(pixelschecked); debug.show();
                    r.failed++;
                    if (agressive) {
                        return r;
                    }
                }
                else {
                    r.passed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        return r;
    }
    static isolateBuffer(buffer, ox, oy, buffimg) {
        var count = BuffReader.countMatch(buffer, ox, oy, buffimg);
        if (count.passed < 50) {
            return;
        }
        var removed = 0;
        var data1 = buffer.data;
        var data2 = buffimg.data;
        //var debug = new ImageData(buffimg.width, buffimg.height);
        for (var y = 0; y < buffimg.height; y++) {
            for (var x = 0; x < buffimg.width; x++) {
                var i1 = buffer.pixelOffset(ox + x, oy + y);
                var i2 = buffimg.pixelOffset(x, y);
                //debug.data[i2] = 255; debug.data[i2 + 1] = debug.data[i2 + 2] = 0; debug.data[i2 + 3] = 255;
                if (data2[i2 + 3] != 255) {
                    continue;
                } //transparent buff pixel
                //==== new buffer has text on it ====
                if (data1[i1] == 255 && data1[i1 + 1] == 255 && data1[i1 + 2] == 255 || data1[i1] == 0 && data1[i1 + 1] == 0 && data1[i1 + 2] == 0) {
                    continue;
                }
                //==== old buf has text on it, use the new one ====
                if (data2[i2] == 255 && data2[i2 + 1] == 255 && data2[i2 + 2] == 255 || data2[i2] == 0 && data2[i2 + 1] == 0 && data2[i2 + 2] == 0) {
                    data2[i2 + 0] = data1[i1 + 0];
                    data2[i2 + 1] = data1[i1 + 1];
                    data2[i2 + 2] = data1[i1 + 2];
                    data2[i2 + 3] = data1[i1 + 3];
                    removed++;
                }
                var d = a1lib.ImageDetect.coldif(data1[i1], data1[i1 + 1], data1[i1 + 2], data2[i2], data2[i2 + 1], data2[i2 + 2], 255);
                //debug.data[i2] = debug.data[i2 + 1] = debug.data[i2 + 2] = d * 10;
                if (d > 5) {
                    //qw(pixelschecked); debug.show();
                    data2[i2 + 0] = data2[i2 + 1] = data2[i2 + 2] = data2[i2 + 3] = 0;
                    removed++;
                }
            }
        }
        //debug.show(); qw(pixelschecked);
        if (removed > 0) {
            console.log(removed + " pixels remove from buff template image");
        }
    }
    static readArg(buffer, ox, oy, type) {
        var lines = [];
        for (var dy = -10; dy < 10; dy += 10) { //the timer can be spread to a second line at certain times (229m)
            var result = OCR.readLine(buffer, font, [255, 255, 255], ox, oy + dy, true);
            if (result.text) {
                lines.push(result.text);
            }
        }
        var r = { time: 0, arg: "" };
        if (type == "timearg" && lines.length > 1) {
            r.arg = lines.pop();
        }
        var str = lines.join("");
        if (type == "arg") {
            r.arg = str;
        }
        else {
            var m;
            if (m = str.match(/^(\d+)hr$/i)) {
                r.time = +m[1] * 60 * 60;
            }
            else if (m = str.match(/^(\d+)m$/i)) {
                r.time = +m[1] * 60;
            }
            else if (m = str.match(/^(\d+)$/)) {
                r.time = +m[1];
            }
        }
        return r;
    }
    static readTime(buffer, ox, oy) {
        return this.readArg(buffer, ox, oy, "time").time;
    }
    static matchBuff(state, buffimg) {
        for (var a in state) {
            if (state[a].compareBuffer(buffimg)) {
                return state[a];
            }
        }
        return null;
    }
    static matchBuffMulti(state, buffinfo) {
        if (buffinfo.final) { //cheap way if we known exactly what we're searching for
            return BuffReader.matchBuff(state, buffinfo.imgdata);
        }
        else { //expensive way if we are not sure the template is final
            var bestindex = -1;
            var bestscore = 0;
            if (buffinfo.imgdata) {
                for (var a = 0; a < state.length; a++) {
                    var count = BuffReader.countMatch(state[a].buffer, state[a].bufferx + 1, state[a].buffery + 1, buffinfo.imgdata, false);
                    if (count.passed > bestscore) {
                        bestscore = count.passed;
                        bestindex = a;
                    }
                }
            }
            if (bestscore < 50) {
                return null;
            }
            //update the isolated buff
            if (buffinfo.canimprove) {
                BuffReader.isolateBuffer(state[bestindex].buffer, state[bestindex].bufferx + 1, state[bestindex].buffery + 1, buffinfo.imgdata);
            }
            return state[bestindex];
        }
    }
}
BuffReader.buffsize = 27;
BuffReader.gridsize = 30;
exports["default"] = BuffReader;
class BuffInfo {
    constructor(imgdata, debuff, id, canimprove) {
        this.imgdata = imgdata;
        this.isdebuff = debuff;
        this.buffid = id;
        this.final = !!id && !canimprove;
        this.canimprove = canimprove;
    }
}
exports.BuffInfo = BuffInfo;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/pixel_8px_digits.fontmeta.json":
/*!**************************************************!*\
  !*** ./src/fonts/pixel_8px_digits.fontmeta.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":120,"chr":"0","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,255,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,255,2,0,255,255,2,2,255,0,2,7,255,255,3,1,255,255,3,6,255,255,3,8,255,0,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,7,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0],"secondary":false},{"width":4,"bonus":95,"chr":"1","pixels":[0,1,255,255,0,7,255,255,1,0,255,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,0,2,1,255,0,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,255,2,8,255,0],"secondary":false},{"width":7,"bonus":140,"chr":"2","pixels":[0,1,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,5,255,255,1,7,255,255,1,8,255,0,2,0,255,255,2,1,255,0,2,4,255,255,2,6,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,5,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,0,4,7,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,8,255,0],"secondary":false},{"width":6,"bonus":115,"chr":"3","pixels":[0,1,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,1,255,255,3,2,255,255,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,2,255,0,4,3,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":5,"bonus":110,"chr":"4","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,1,1,255,0,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,255,1,6,255,0,2,3,255,255,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,7,255,0,3,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"5","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,6,255,255,1,0,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,8,255,0,4,1,255,0,4,5,255,0,4,6,255,0,4,7,255,0],"secondary":false},{"width":7,"bonus":160,"chr":"6","pixels":[0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,1,255,255,1,3,255,0,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,2,255,0,2,3,255,255,2,5,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":6,"bonus":105,"chr":"7","pixels":[0,0,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,1,255,0,1,4,255,255,1,5,255,255,1,7,255,0,1,8,255,0,2,0,255,255,2,1,255,0,2,2,255,255,2,3,255,255,2,5,255,0,2,6,255,0,3,0,255,255,3,1,255,255,3,3,255,0,3,4,255,0,4,1,255,0,4,2,255,0],"secondary":false},{"width":7,"bonus":170,"chr":"8","pixels":[0,1,255,255,0,2,255,255,0,4,255,255,0,5,255,255,0,6,255,255,1,0,255,255,1,2,255,0,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,255,2,0,255,255,2,1,255,0,2,3,255,255,2,4,255,0,2,7,255,255,2,8,255,0,3,0,255,255,3,1,255,0,3,3,255,255,3,4,255,0,3,7,255,255,3,8,255,0,4,1,255,255,4,2,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,8,255,0,5,2,255,0,5,3,255,0,5,5,255,0,5,6,255,0,5,7,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"9","pixels":[0,1,255,255,0,2,255,255,1,0,255,255,1,2,255,0,1,3,255,255,2,0,255,255,2,1,255,0,2,4,255,255,3,0,255,255,3,1,255,0,3,4,255,255,3,5,255,0,4,1,255,255,4,2,255,255,4,3,255,255,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,2,255,0,5,3,255,0,5,4,255,0,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":7,"bonus":130,"chr":"m","pixels":[0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,3,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,4,255,255,2,5,255,255,2,6,255,255,2,7,255,255,3,3,255,255,3,5,255,0,3,6,255,0,3,7,255,0,3,8,255,0,4,4,255,255,4,5,255,255,4,6,255,255,4,7,255,255,5,5,255,0,5,6,255,0,5,7,255,0,5,8,255,0],"secondary":false},{"width":3,"bonus":80,"chr":"(","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,0,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,255,2,1,255,0],"secondary":false},{"width":2,"bonus":70,"chr":")","pixels":[0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,2,255,0,1,3,255,0,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0],"secondary":false},{"width":6,"bonus":135,"chr":"h","pixels":[0,0,255,255,0,1,255,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,1,255,0,1,2,255,0,1,3,255,255,1,4,255,0,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,4,255,0,2,5,255,0,3,4,255,255,3,5,255,255,3,6,255,255,3,7,255,255,4,5,255,0,4,6,255,0,4,7,255,0,4,8,255,0],"secondary":false},{"width":5,"bonus":65,"chr":"r","pixels":[0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,1,4,255,255,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,2,3,255,255,2,5,255,0,3,4,255,0],"secondary":false}],"width":7,"spacewidth":3,"shadow":true,"height":9,"basey":7}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_20982__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_20982__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_20982__("./src/buffs/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/ocr/index.js":
/*!**********************************************!*\
  !*** ../node_modules/alt1/dist/ocr/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ocr/index.ts":
/*!**************************!*\
  !*** ./src/ocr/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_728__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateFont = exports.loadFontImage = exports.readChar = exports.readSmallCapsBackwards = exports.readLine = exports.getChatColor = exports.getChatColorMono = exports.findReadLine = exports.findChar = exports.decompose3col = exports.decomposeblack = exports.decompose2col = exports.canblend = exports.unblendTrans = exports.unblendKnownBg = exports.unblendBlackBackground = exports.debugFont = exports.debugout = exports.debug = void 0;
const base_1 = __nested_webpack_require_728__(/*! alt1/base */ "alt1/base");
exports.debug = {
    printcharscores: false,
    trackread: false
};
exports.debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new base_1.ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
exports.debugFont = debugFont;
function unblendBlackBackground(img, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
        rimg.data[i + 0] = col[0] * 255;
        rimg.data[i + 1] = rimg.data[i + 0];
        rimg.data[i + 2] = rimg.data[i + 0];
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendBlackBackground = unblendBlackBackground;
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new base_1.ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendKnownBg = unblendKnownBg;
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendTrans = unblendTrans;
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param rm resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the portion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(0, -r, -g, -b, r - 255, g - 255, b - 255);
}
exports.canblend = canblend;
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
exports.decompose2col = decompose2col;
/**
 * decomposes a pixel in a given color component and black and returns what proportion of the second color it contains
 * this is not as formal as decompose 2/3 and only give a "good enough" number
 */
function decomposeblack(rp, gp, bp, r1, g1, b1) {
    var dr = Math.abs(rp - r1);
    var dg = Math.abs(gp - g1);
    var db = Math.abs(bp - b1);
    var maxdif = Math.max(dr, dg, db);
    return [1 - maxdif / 255];
}
exports.decomposeblack = decomposeblack;
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
exports.decompose3col = decompose3col;
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
exports.findChar = findChar;
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        //TODO use getChatColor() instead for non-mono?
        var sorted = getChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { debugArea: { x, y, w, h }, text: "", fragments: [] };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
exports.findReadLine = findReadLine;
function getChatColorMono(buf, rect, colors) {
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return colormap;
    }
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap.sort((a, b) => b.score - a.score);
}
exports.getChatColorMono = getChatColorMono;
function unblend(r, g, b, R, G, B) {
    var m = Math.sqrt(r * r + g * g + b * b);
    var n = Math.sqrt(R * R + G * G + B * B);
    var x = (r * R + g * G + b * B) / n;
    var y = Math.sqrt(Math.max(0, m * m - x * x));
    var r1 = Math.max(0, (63.75 - y) * 4);
    var r2 = x / n * 255;
    if (r2 > 255) //brighter than refcol
     {
        r1 = Math.max(0, r1 - r2 + 255);
        r2 = 255;
    }
    return [r1, r2];
}
function getChatColor(buf, rect, colors) {
    var bestscore = -1.0;
    var best = null;
    var b2 = 0.0;
    var data = buf.data;
    for (let col of colors) {
        var score = 0.0;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                if (x < 0 || x + 1 >= buf.width) {
                    continue;
                }
                if (y < 0 || y + 1 >= buf.width) {
                    continue;
                }
                let i1 = buf.pixelOffset(x, y);
                let i2 = buf.pixelOffset(x + 1, y + 1);
                var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                //TODO this is from c# can simplify a bit
                var s = (pixel1[0] / 255 * pixel1[1] / 255) * (pixel2[0] / 255 * (255.0 - pixel2[1]) / 255);
                score += s;
            }
        }
        if (score > bestscore) {
            b2 = bestscore;
            bestscore = score;
            best = col;
        }
        else if (score > b2) {
            b2 = score;
        }
    }
    //Console.WriteLine("color: " + bestcol + " - " + (bestscore - b2));
    //bestscore /= rect.width * rect.height;
    return best;
}
exports.getChatColor = getChatColor;
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (sx, sy, backward) {
        var w = Math.floor(font.width * 1.5);
        if (backward) {
            sx -= w;
        }
        sy -= font.basey;
        return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
    };
    var fragments = [];
    var x1 = x;
    var x2 = x;
    var maxspaces = (typeof font.maxspaces == "number" ? font.maxspaces : 1);
    let fragtext = "";
    let fraghadprimary = false;
    var lastcol = null;
    let addfrag = (forward) => {
        if (!fragtext) {
            return;
        }
        let frag = {
            text: fragtext,
            color: lastcol,
            index: 0,
            xstart: x + (forward ? fragstartdx : fragenddx),
            xend: x + (forward ? fragenddx : fragstartdx)
        };
        if (forward) {
            fragments.push(frag);
        }
        else {
            fragments.unshift(frag);
        }
        fragtext = "";
        fragstartdx = dx;
        fraghadprimary = false;
    };
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var fragstartdx = dx;
        var fragenddx = dx;
        var triedspaces = 0;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (col == null || chr == null) {
                if (triedspaces < maxspaces) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedspaces++;
                    continue;
                }
                if (multicol && !triedrecol && fraghadprimary) {
                    dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                    triedspaces = 0;
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                    addfrag(dirforward);
                }
                var spaces = "";
                for (var a = 0; a < triedspaces; a++) {
                    spaces += " ";
                }
                if (dirforward) {
                    fragtext += spaces + chr.chr;
                }
                else {
                    fragtext = chr.chr + spaces + fragtext;
                }
                if (!chr.basechar.secondary) {
                    fraghadprimary = true;
                }
                triedspaces = 0;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
                fragenddx = dx;
                lastcol = col;
            }
        }
        if (lastcol && fraghadprimary) {
            addfrag(dirforward);
        }
    }
    fragments.forEach((f, i) => f.index = i);
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: fragments.map(f => f.text).join(""),
        fragments
    };
}
exports.readLine = readLine;
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : getChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
}
exports.readSmallCapsBackwards = readSmallCapsBackwards;
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (exports.debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!exports.debugout[name]) {
            exports.debugout[name] = [];
        }
        debugobj = exports.debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (exports.debug.trackread) {
            debugimg = new base_1.ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scores[chr].score += Math.max(0, penalty);
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scores[chr].sizescore = scores[chr].score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
        }
    }
    scores.sort((a, b) => a.sizescore - b.sizescore);
    if (exports.debug.printcharscores) {
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    var winchr = scores[0];
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
exports.readChar = readChar;
function loadFontImage(img, meta) {
    var bg = null;
    var pxheight = img.height - 1;
    if (meta.unblendmode == "removebg") {
        pxheight /= 2;
    }
    var inimg = img.clone({ x: 0, y: 0, width: img.width, height: pxheight });
    var outimg;
    if (meta.unblendmode == "removebg") {
        bg = img.clone({ x: 0, y: pxheight + 1, width: img.width, height: pxheight });
        outimg = unblendKnownBg(inimg, bg, meta.shadow, meta.color[0], meta.color[1], meta.color[2]);
    }
    else if (meta.unblendmode == "raw") {
        outimg = unblendTrans(inimg, meta.shadow, meta.color[0], meta.color[1], meta.color[2]);
    }
    else if (meta.unblendmode == "blackbg") {
        outimg = unblendBlackBackground(inimg, meta.color[0], meta.color[1], meta.color[2]);
    }
    else {
        throw new Error("no unblend mode");
    }
    var unblended = new base_1.ImageData(img.width, pxheight + 1);
    outimg.copyTo(unblended, 0, 0, outimg.width, outimg.height, 0, 0);
    img.copyTo(unblended, 0, pxheight, img.width, 1, 0, pxheight);
    return generateFont(unblended, meta.chars, meta.seconds, meta.bonus || {}, meta.basey, meta.spacewidth, meta.treshold, meta.shadow);
}
exports.loadFontImage = loadFontImage;
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more likely to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generateFont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
    }
    return font;
}
exports.generateFont = generateFont;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_27427__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27427__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_27427__("./src/ocr/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/targetmob/index.js":
/*!****************************************************!*\
  !*** ../node_modules/alt1/dist/targetmob/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"), __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__, __WEBPACK_EXTERNAL_MODULE_alt1_ocr__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/targetmob/imgs/detectimg.data.png":
/*!***********************************************!*\
  !*** ./src/targetmob/imgs/detectimg.data.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_905__) => {

module.exports=(__nested_webpack_require_905__(/*! alt1/base */ "alt1/base").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABoAAAARCAYAAADDjbwNAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAAYbm9QRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYtZUsAAACJSURBVDhPtc09CoNAGIThZSEuG3KHLVKJCIJgfpAYxG5vkDL3v8NIAjZmCJ/CFE/zFjMOwG5VP8HHE0J9xzGVf9EBq3Pbf48Oj4xweSJ0A4rr+OPT6YDVcmRBB6xSc4MVHVCgUYFGBRoVaFSgUYFGBRoVaFSgUYFGBZdfb2yxHrByvoiw2n8ENwOqvL/qtsOgigAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./src/targetmob/index.ts":
/*!********************************!*\
  !*** ./src/targetmob/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_1620__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const a1lib = __importStar(__nested_webpack_require_1620__(/*! alt1/base */ "alt1/base"));
const OCR = __importStar(__nested_webpack_require_1620__(/*! alt1/ocr */ "alt1/ocr"));
const base_1 = __nested_webpack_require_1620__(/*! alt1/base */ "alt1/base");
var chatfont = __nested_webpack_require_1620__(/*! ../fonts/aa_8px.fontmeta.json */ "./src/fonts/aa_8px.fontmeta.json");
var imgs = (0, base_1.webpackImages)({
    detectimg: __nested_webpack_require_1620__(/*! ./imgs/detectimg.data.png */ "./src/targetmob/imgs/detectimg.data.png")
});
class TargetMobReader {
    constructor() {
        this.state = null;
        this.lastpos = null;
    }
    read(img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        var pos = img.findSubimage(imgs.detectimg);
        if (pos.length != 0) {
            var data = img.toData(pos[0].x - 151, pos[0].y - 16, 220, 44);
            var mobname = OCR.findReadLine(data, chatfont, [[255, 255, 255]], 62, 18, 20, 1);
            var mobhp = OCR.findReadLine(data, chatfont, [[255, 203, 5]], 92, 39, 20, 1);
            this.lastpos = pos[0];
            this.state = {
                name: mobname.text,
                hp: +mobhp.text
            };
        }
        else {
            this.state = null;
        }
        return this.state;
    }
}
exports["default"] = TargetMobReader;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ }),

/***/ "alt1/ocr":
/*!*********************************************************************************************!*\
  !*** external {"root":"OCR","commonjs2":"alt1/ocr","commonjs":"alt1/ocr","amd":"alt1/ocr"} ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_ocr__;

/***/ }),

/***/ "./src/fonts/aa_8px.fontmeta.json":
/*!****************************************!*\
  !*** ./src/fonts/aa_8px.fontmeta.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"chars":[{"width":7,"bonus":140,"chr":"a","pixels":[0,7,187,255,1,3,221,255,1,6,169,255,1,7,164,132,1,8,255,255,2,3,255,255,2,4,221,0,2,5,196,243,2,7,170,0,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,5,255,255,3,6,187,0,3,8,221,255,3,9,255,0,4,4,254,239,4,5,255,255,4,6,254,204,4,7,255,255,4,8,240,253,4,9,221,0,5,5,240,36,5,6,255,34,5,7,211,41,5,8,255,34,5,9,238,0],"secondary":false},{"width":7,"bonus":175,"chr":"b","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,248,209,1,4,243,178,1,5,230,75,1,6,230,75,1,7,243,178,1,8,246,194,1,9,204,0,2,3,255,255,2,4,204,0,2,5,170,0,2,8,255,255,2,9,187,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,169,255,4,4,254,171,4,7,169,255,4,9,255,0,5,4,204,128,5,5,232,205,5,6,205,233,5,8,170,0,6,6,187,0,6,7,187,0],"secondary":false},{"width":7,"bonus":95,"chr":"c","pixels":[0,5,169,255,0,6,187,255,1,4,187,255,1,6,193,90,1,7,237,201,1,8,164,185,2,3,255,255,2,5,187,0,2,8,255,255,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,221,255,4,4,255,34,4,8,221,255,4,9,255,0,5,4,226,39,5,9,221,0],"secondary":false},{"width":7,"bonus":180,"chr":"d","pixels":[0,5,187,255,0,6,187,255,1,4,169,255,1,6,205,85,1,7,232,187,1,8,203,213,2,3,255,255,2,5,170,0,2,8,255,255,2,9,170,0,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,4,3,203,255,4,4,254,171,4,7,169,255,4,8,187,255,4,9,255,0,5,1,203,255,5,2,225,251,5,3,225,251,5,4,248,227,5,5,244,231,5,6,230,245,5,7,230,245,5,8,237,219,5,9,187,0,6,2,204,0,6,3,221,0,6,4,221,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":7,"bonus":135,"chr":"e","pixels":[0,5,187,255,0,6,169,255,1,4,187,255,1,5,255,255,1,6,209,104,1,7,237,219,2,3,255,255,2,5,255,255,2,6,255,0,2,8,255,255,3,3,255,255,3,4,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,3,187,255,4,4,255,119,4,5,255,255,4,6,255,0,4,8,221,255,4,9,255,0,5,4,224,155,5,5,227,229,5,6,255,0,5,9,221,0,6,6,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"f","pixels":[0,3,203,255,1,2,221,255,1,3,255,255,1,4,248,227,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,2,1,255,255,2,3,255,255,2,4,255,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0,3,2,255,0,3,4,255,0],"secondary":false},{"width":7,"bonus":200,"chr":"g","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,232,187,1,8,184,189,1,11,153,255,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,11,245,247,3,3,255,255,3,4,255,0,3,8,255,255,3,9,255,0,3,11,221,255,4,3,221,255,4,4,255,136,4,7,153,255,4,8,221,255,4,9,255,85,4,10,203,255,5,3,203,255,5,4,250,226,5,5,239,236,5,6,230,245,5,7,230,245,5,8,241,234,5,9,243,178,5,11,204,0,6,4,204,0,6,5,221,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,221,0,6,10,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"h","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,243,178,1,4,248,209,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,170,0,2,5,204,0,3,3,255,255,3,4,255,0,4,3,169,255,4,4,255,221,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,175,25,5,5,226,39,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0],"secondary":false},{"width":3,"bonus":70,"chr":"i","pixels":[0,1,237,255,0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,238,0,1,4,211,41,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0],"secondary":false},{"width":4,"bonus":90,"chr":"j","pixels":[0,11,153,255,1,11,169,255,2,1,203,255,2,3,203,255,2,4,225,251,2,5,225,251,2,6,225,251,2,7,225,251,2,8,225,251,2,9,225,251,3,2,204,0,3,4,204,0,3,5,221,0,3,6,221,0,3,7,221,0,3,8,221,0,3,9,221,0,3,10,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"k","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,166,235,2,5,255,255,2,6,255,221,3,3,203,255,3,5,153,0,3,6,255,51,3,7,250,226,3,8,160,217,4,4,204,0,4,8,239,145],"secondary":false},{"width":3,"bonus":75,"chr":"l","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,2,9,255,0],"secondary":false},{"width":10,"bonus":210,"chr":"m","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,230,75,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,153,255,4,4,255,255,4,5,221,255,4,6,221,255,4,7,221,255,4,8,203,255,5,4,228,209,5,5,255,68,5,6,226,39,5,7,226,39,5,8,226,39,5,9,204,0,6,3,255,255,6,5,187,0,7,3,237,255,7,4,255,85,8,4,249,174,8,5,232,243,8,6,225,251,8,7,225,251,8,8,210,247,9,5,170,0,9,6,221,0,9,7,221,0,9,8,221,0,9,9,204,0],"secondary":false},{"width":7,"bonus":140,"chr":"n","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,4,248,227,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,237,255,2,5,221,0,3,3,255,255,3,4,238,0,4,3,237,255,4,4,255,85,5,4,249,174,5,5,232,243,5,6,225,251,5,7,225,251,5,8,210,247,6,5,170,0,6,6,221,0,6,7,221,0,6,8,221,0,6,9,204,0],"secondary":false},{"width":8,"bonus":120,"chr":"o","pixels":[0,5,187,255,0,6,169,255,1,4,203,255,1,6,209,104,1,7,244,231,2,3,237,255,2,5,204,0,2,8,252,241,3,3,255,255,3,4,238,0,3,8,255,255,3,9,238,0,4,3,237,255,4,4,255,0,4,8,255,255,4,9,255,0,5,4,251,207,5,7,221,255,5,9,255,0,6,5,237,183,6,6,192,225,6,8,221,0,7,6,170,0,7,7,170,0],"secondary":false},{"width":6,"bonus":170,"chr":"p","pixels":[0,3,237,255,0,4,255,255,0,5,187,255,0,6,203,255,0,7,255,255,0,8,221,255,0,9,221,255,0,10,221,255,1,3,255,255,1,4,240,36,1,5,255,0,1,6,187,0,1,7,211,41,1,8,254,239,1,9,221,0,1,10,221,0,1,11,221,0,2,3,255,255,2,4,255,0,2,8,255,255,2,9,238,0,3,3,237,255,3,4,255,34,3,8,237,255,3,9,255,0,4,4,253,240,4,5,255,255,4,6,255,255,4,7,237,255,4,9,238,0,5,5,239,18,5,6,255,17,5,7,255,0,5,8,238,0],"secondary":false},{"width":7,"bonus":165,"chr":"q","pixels":[0,5,187,255,0,6,187,255,1,3,169,255,1,4,153,255,1,5,155,112,1,6,205,85,1,7,228,171,1,8,209,207,2,3,255,255,2,4,170,0,2,5,153,0,2,8,255,255,2,9,170,0,3,3,237,255,3,4,255,17,3,8,237,255,3,9,255,0,4,3,255,255,4,4,255,255,4,5,191,250,4,6,187,255,4,7,255,255,4,8,239,254,4,9,253,223,4,10,221,255,5,4,255,34,5,5,255,34,5,6,196,45,5,7,196,45,5,8,255,34,5,9,240,36,5,10,226,39,5,11,221,0],"secondary":false},{"width":4,"bonus":85,"chr":"r","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,3,187,255,1,4,244,213,1,5,232,93,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,255,2,4,187,0,2,5,204,0,3,4,255,0],"secondary":false},{"width":6,"bonus":100,"chr":"s","pixels":[0,4,187,255,1,3,255,255,1,5,250,243,1,8,255,255,2,3,255,255,2,4,255,0,2,5,155,196,2,6,246,123,2,8,255,255,2,9,255,0,3,3,255,255,3,4,255,0,3,6,245,247,3,7,164,132,3,8,255,255,3,9,255,0,4,4,255,17,4,7,250,191,4,9,255,0,5,8,187,0],"secondary":false},{"width":5,"bonus":80,"chr":"t","pixels":[1,2,221,255,1,3,255,255,1,4,235,240,1,5,221,255,1,6,221,255,1,7,169,255,2,3,255,255,2,4,255,34,2,5,226,39,2,6,226,39,2,7,232,93,2,8,249,243,3,4,255,0,3,8,187,209,3,9,238,0,4,9,153,0],"secondary":false},{"width":6,"bonus":135,"chr":"u","pixels":[0,3,203,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,169,255,1,4,211,41,1,5,226,39,1,6,226,39,1,7,232,93,1,8,249,243,2,8,255,255,2,9,238,0,3,8,203,255,3,9,255,0,4,3,203,255,4,4,221,255,4,5,221,255,4,6,203,255,4,7,255,255,4,8,228,247,4,9,204,0,5,4,211,41,5,5,226,39,5,6,226,39,5,7,211,41,5,8,255,34,5,9,221,0],"secondary":false},{"width":6,"bonus":95,"chr":"v","pixels":[0,3,237,255,1,4,247,141,1,5,245,247,1,6,203,255,2,6,241,54,2,7,255,255,2,8,255,255,3,5,153,255,3,6,255,255,3,7,173,226,3,8,255,51,3,9,255,0,4,3,237,255,4,4,203,255,4,6,153,0,4,7,255,0,4,8,153,0,5,4,238,0,5,5,204,0],"secondary":false},{"width":10,"bonus":170,"chr":"w","pixels":[1,3,153,255,1,4,243,249,1,5,187,255,2,4,153,0,2,5,243,71,2,6,228,171,2,7,243,249,2,8,187,255,3,6,217,239,3,7,248,244,3,8,248,157,3,9,187,0,4,3,169,255,4,4,255,255,4,7,204,0,4,8,238,0,4,9,153,0,5,4,244,231,5,5,255,221,5,6,191,159,6,5,223,19,6,6,237,128,6,7,255,255,6,8,223,253,7,6,239,254,7,7,227,229,7,8,255,119,7,9,221,0,8,3,237,255,8,4,203,255,8,7,238,0,8,8,204,0,9,4,238,0,9,5,204,0],"secondary":false},{"width":6,"bonus":95,"chr":"x","pixels":[0,8,169,255,1,3,169,255,1,4,224,232,1,7,221,255,1,9,170,0,2,4,193,90,2,5,255,255,2,6,240,253,2,8,221,0,3,4,255,255,3,5,155,196,3,6,255,187,3,7,250,191,4,3,221,255,4,5,255,0,4,7,209,104,4,8,255,255,5,4,221,0,5,9,255,0],"secondary":false},{"width":6,"bonus":110,"chr":"y","pixels":[0,3,255,255,0,4,153,255,0,11,221,255,1,4,255,85,1,5,234,222,1,6,228,247,1,11,196,243,2,6,207,21,2,7,246,194,2,8,255,255,2,9,237,255,3,6,237,255,3,7,191,250,3,8,205,85,3,9,255,0,3,10,238,0,4,3,203,255,4,4,221,255,4,7,238,0,4,8,187,0,5,4,204,0,5,5,221,0],"secondary":false},{"width":6,"bonus":130,"chr":"z","pixels":[0,3,153,255,0,8,203,255,1,3,255,255,1,4,153,0,1,7,221,255,1,8,255,255,1,9,204,0,2,3,255,255,2,4,255,0,2,6,255,255,2,8,255,255,2,9,255,0,3,3,255,255,3,4,254,171,3,5,169,255,3,7,255,0,3,8,255,255,3,9,255,0,4,3,255,255,4,4,255,119,4,5,170,0,4,6,170,0,4,8,255,255,4,9,255,0,5,4,255,0,5,9,255,0],"secondary":false},{"width":8,"bonus":155,"chr":"A","pixels":[0,8,153,255,1,6,221,255,1,7,237,255,1,9,153,0,2,3,169,255,2,4,255,255,2,5,187,255,2,6,255,255,2,7,221,0,2,8,238,0,3,1,255,255,3,2,255,255,3,4,170,0,3,5,255,0,3,6,255,255,3,7,255,0,4,2,255,255,4,3,254,239,4,4,184,189,4,6,255,255,4,7,255,0,5,3,255,34,5,4,247,141,5,5,255,255,5,6,255,255,5,7,255,102,6,6,255,85,6,7,255,187,6,8,255,255,7,8,187,0,7,9,255,0],"secondary":false},{"width":7,"bonus":225,"chr":"B","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,4,255,255,2,5,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,1,221,255,4,2,255,85,4,4,255,255,4,5,254,171,4,8,203,255,4,9,255,0,5,2,243,178,5,3,198,219,5,5,255,102,5,6,232,205,5,7,180,217,5,9,204,0,6,3,170,0,6,4,170,0,6,7,187,0,6,8,153,0],"secondary":false},{"width":9,"bonus":155,"chr":"C","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,3,153,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,224,232,2,1,169,255,2,3,221,0,2,4,153,0,2,7,194,135,2,8,237,183,3,1,255,255,3,2,170,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,169,255,6,2,255,102,6,8,169,255,6,9,255,0,7,2,181,48,7,9,170,0],"secondary":false},{"width":8,"bonus":200,"chr":"D","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,8,255,255,3,9,255,0,4,1,203,255,4,2,255,68,4,8,203,255,4,9,255,0,5,2,248,227,5,3,168,207,5,7,221,255,5,9,204,0,6,3,237,128,6,4,223,214,6,5,205,233,6,6,155,196,6,8,221,0,7,5,187,0,7,6,187,0],"secondary":false},{"width":6,"bonus":180,"chr":"E","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,3,8,255,255,3,9,255,0,4,1,153,255,4,2,255,0,4,6,255,0,4,8,221,255,4,9,255,0,5,2,153,0,5,9,221,0],"secondary":false},{"width":6,"bonus":135,"chr":"F","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,2,255,0,4,6,255,0],"secondary":false},{"width":9,"bonus":200,"chr":"G","pixels":[0,4,169,255,0,5,187,255,1,2,203,255,1,3,153,255,1,5,193,90,1,6,224,155,1,7,237,238,2,1,169,255,2,3,204,0,2,4,153,0,2,7,175,124,2,8,246,194,3,1,255,255,3,2,170,0,3,8,255,255,3,9,187,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,237,255,5,9,255,0,6,1,169,255,6,2,255,85,6,5,255,255,6,7,153,255,6,8,169,255,6,9,238,0,7,2,175,25,7,5,153,255,7,6,255,221,7,7,225,251,7,8,234,222,7,9,170,0,8,6,153,0,8,7,221,0,8,8,221,0,8,9,204,0],"secondary":false},{"width":8,"bonus":200,"chr":"H","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,5,255,255,2,6,255,0,3,5,255,255,3,6,255,0,4,5,255,255,4,6,255,0,5,5,255,255,5,6,255,34,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,255,221,6,7,225,251,6,8,210,247,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":4,"bonus":110,"chr":"I","pixels":[0,1,191,255,0,8,191,255,1,1,255,255,1,2,255,255,1,3,255,255,1,4,255,255,1,5,255,255,1,6,255,255,1,7,255,255,1,8,255,255,1,9,191,0,2,1,191,255,2,2,255,0,2,3,255,0,2,4,255,0,2,5,255,0,2,6,255,0,2,7,255,0,2,8,255,191,2,9,255,0,3,2,192,0,3,9,191,0],"secondary":false},{"width":6,"bonus":130,"chr":"J","pixels":[0,6,153,255,0,7,153,255,1,7,194,135,1,8,234,222,2,1,221,255,2,8,255,255,2,9,204,0,3,1,255,255,3,2,226,39,3,8,203,255,3,9,255,0,4,1,203,255,4,2,255,221,4,3,225,251,4,4,225,251,4,5,225,251,4,6,225,251,4,7,166,235,4,9,204,0,5,2,204,0,5,3,221,0,5,4,221,0,5,5,221,0,5,6,221,0,5,7,221,0,5,8,153,0],"secondary":false},{"width":7,"bonus":155,"chr":"K","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,255,255,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,4,255,255,2,5,255,102,3,3,221,255,3,5,254,171,3,6,224,232,4,1,203,255,4,2,153,255,4,4,221,0,4,6,193,90,4,7,251,242,4,8,173,226,5,2,204,0,5,3,153,0,5,8,247,141,5,9,153,0],"secondary":false},{"width":6,"bonus":115,"chr":"L","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,255,255,1,9,204,0,2,8,255,255,2,9,255,0,3,8,255,255,3,9,255,0,4,8,255,255,4,9,255,0,5,9,255,0],"secondary":false},{"width":9,"bonus":240,"chr":"M","pixels":[0,1,245,255,0,2,255,255,0,3,255,255,0,4,255,255,0,5,255,255,0,6,255,255,0,7,255,255,0,8,255,255,1,2,251,173,1,3,255,225,1,4,255,85,1,5,255,0,1,6,255,0,1,7,255,0,1,8,255,0,1,9,255,0,2,3,191,83,2,4,249,212,2,5,212,229,3,5,226,119,3,6,249,237,3,7,165,227,4,6,241,245,4,7,245,155,4,8,155,32,5,4,207,255,5,5,191,254,5,7,232,0,6,2,169,255,6,3,223,255,6,5,207,0,6,6,190,0,7,1,245,255,7,2,255,255,7,3,255,255,7,4,255,255,7,5,255,255,7,6,255,255,7,7,255,255,7,8,255,255,8,2,245,0,8,3,255,0,8,4,255,0,8,5,255,0,8,6,255,0,8,7,255,0,8,8,255,0,8,9,255,0],"secondary":false},{"width":8,"bonus":200,"chr":"N","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,2,255,255,1,3,235,111,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,3,255,221,2,4,163,160,3,4,246,194,3,5,214,223,4,5,214,122,4,6,246,229,5,6,163,160,5,7,255,255,6,1,203,255,6,2,225,251,6,3,225,251,6,4,225,251,6,5,225,251,6,6,225,251,6,7,235,240,6,8,254,204,7,2,204,0,7,3,221,0,7,4,221,0,7,5,221,0,7,6,221,0,7,7,221,0,7,8,221,0,7,9,204,0],"secondary":false},{"width":10,"bonus":200,"chr":"O","pixels":[0,4,187,255,0,5,169,255,1,2,203,255,1,3,153,255,1,5,205,85,1,6,226,192,1,7,224,232,2,1,153,255,2,3,204,0,2,4,153,0,2,7,209,145,2,8,234,167,3,1,255,255,3,2,153,0,3,8,255,255,3,9,153,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,255,255,5,2,255,0,5,8,255,255,5,9,255,0,6,1,153,255,6,2,255,102,6,8,153,255,6,9,255,0,7,2,234,222,7,3,194,201,7,6,169,255,7,7,203,255,7,9,153,0,8,3,225,116,8,4,228,209,8,5,192,225,8,7,170,0,8,8,204,0,9,5,187,0,9,6,170,0],"secondary":false},{"width":7,"bonus":165,"chr":"P","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,0,4,1,187,255,4,2,255,136,4,5,187,255,4,6,255,0,5,2,224,155,5,3,239,236,5,6,187,0,6,4,221,0],"secondary":false},{"width":9,"bonus":185,"chr":"Q","pixels":[0,4,187,255,0,5,187,255,1,2,221,255,1,4,155,112,1,5,205,85,1,6,228,171,1,7,235,240,2,1,187,255,2,3,221,0,2,7,187,116,2,8,243,178,3,1,255,255,3,2,187,0,3,8,255,255,3,9,170,0,4,1,255,255,4,2,255,0,4,8,255,255,4,9,255,0,5,1,237,255,5,2,255,0,5,8,237,255,5,9,255,0,6,2,251,207,6,7,255,255,6,9,238,0,7,3,255,255,7,4,203,255,7,5,221,255,7,6,255,255,7,7,155,196,7,8,254,204,8,4,255,17,8,5,207,21,8,6,221,0,8,7,255,0,8,9,204,0],"secondary":false},{"width":7,"bonus":180,"chr":"R","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,1,255,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,255,255,1,6,226,39,1,7,226,39,1,8,226,39,1,9,204,0,2,1,255,255,2,2,255,0,2,5,255,255,2,6,255,0,3,1,255,255,3,2,255,0,3,5,255,255,3,6,255,187,4,2,254,239,4,3,203,255,4,4,255,255,4,6,255,68,4,7,250,243,4,8,181,239,5,3,239,18,5,4,204,0,5,5,255,0,5,8,245,107,5,9,170,0],"secondary":false},{"width":6,"bonus":130,"chr":"S","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,1,255,255,2,2,204,0,2,4,198,219,2,5,232,93,2,8,255,255,2,9,238,0,3,1,255,255,3,2,255,0,3,5,255,255,3,8,255,255,3,9,255,0,4,1,169,255,4,2,255,68,4,5,160,217,4,6,255,221,4,7,237,255,4,9,255,0,5,2,170,0,5,7,223,19,5,8,238,0],"secondary":false},{"width":8,"bonus":125,"chr":"T","pixels":[0,1,255,255,1,1,255,255,1,2,255,0,2,1,255,255,2,2,255,34,3,1,255,255,3,2,255,221,3,3,225,251,3,4,225,251,3,5,225,251,3,6,225,251,3,7,225,251,3,8,210,247,4,1,255,255,4,2,255,0,4,3,221,0,4,4,221,0,4,5,221,0,4,6,221,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,255,255,5,2,255,0,6,2,255,0],"secondary":false},{"width":8,"bonus":165,"chr":"U","pixels":[0,1,203,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,187,255,1,2,211,41,1,3,226,39,1,4,226,39,1,5,226,39,1,6,230,75,1,7,232,187,1,8,184,189,2,8,255,255,3,8,255,255,3,9,255,0,4,8,221,255,4,9,255,0,5,1,203,255,5,2,221,255,5,3,221,255,5,4,221,255,5,5,221,255,5,6,255,255,5,7,237,255,5,9,221,0,6,2,211,41,6,3,226,39,6,4,226,39,6,5,226,39,6,6,223,19,6,7,255,0,6,8,238,0],"secondary":false},{"width":7,"bonus":125,"chr":"V","pixels":[0,1,255,255,0,2,187,255,1,2,255,68,1,3,228,171,1,4,255,255,1,5,153,255,2,4,153,0,2,5,255,85,2,6,228,209,2,7,242,251,3,6,164,185,3,7,255,255,3,8,251,207,4,4,203,255,4,5,237,255,4,8,255,0,4,9,204,0,5,1,169,255,5,2,255,255,5,3,153,255,5,5,204,0,5,6,238,0,6,2,170,0,6,3,255,0,6,4,153,0],"secondary":false},{"width":10,"bonus":245,"chr":"W","pixels":[0,1,255,255,0,2,221,255,1,2,255,17,1,3,237,128,1,4,223,214,1,5,255,255,1,6,203,255,2,5,191,23,2,6,255,136,2,7,255,255,2,8,255,255,3,3,153,255,3,4,237,255,3,5,221,255,3,7,168,103,3,8,255,0,3,9,255,0,4,1,255,255,4,2,255,255,4,3,187,209,4,4,153,0,4,5,238,0,4,6,221,0,5,2,255,102,5,3,254,171,5,4,248,244,5,5,203,255,6,4,170,0,6,5,241,54,6,6,231,150,6,7,255,255,6,8,255,255,7,4,153,255,7,5,237,255,7,6,241,252,7,7,207,188,7,8,255,85,7,9,255,0,8,1,237,255,8,2,237,255,8,3,153,255,8,4,153,171,8,5,153,0,8,6,238,0,8,7,238,0,8,8,153,0,9,2,238,0,9,3,238,0,9,4,153,0],"secondary":false},{"width":7,"bonus":130,"chr":"X","pixels":[0,8,169,255,1,1,187,255,1,2,220,236,1,7,237,255,1,9,170,0,2,2,205,85,2,3,248,227,2,4,166,235,2,5,255,255,2,6,153,255,2,8,238,0,3,3,155,196,3,4,255,255,3,5,248,244,3,6,255,51,3,7,153,0,4,2,237,255,4,5,255,51,4,6,251,207,4,7,186,233,5,1,203,255,5,3,238,0,5,7,225,116,5,8,255,255,6,2,204,0,6,9,255,0],"secondary":false},{"width":7,"bonus":90,"chr":"Y","pixels":[0,1,169,255,1,2,249,243,2,3,248,157,2,4,255,255,3,4,241,234,3,5,254,204,3,6,232,243,3,7,225,251,3,8,210,247,4,3,255,255,4,5,221,0,4,6,204,0,4,7,221,0,4,8,221,0,4,9,204,0,5,1,237,255,5,4,255,0,6,2,238,0],"secondary":false},{"width":7,"bonus":140,"chr":"Z","pixels":[0,8,187,255,1,1,255,255,1,7,221,255,1,8,255,255,1,9,187,0,2,1,255,255,2,2,255,0,2,5,203,255,2,8,255,255,2,9,255,0,3,1,255,255,3,2,255,0,3,4,203,255,3,6,204,0,3,8,255,255,3,9,255,0,4,1,255,255,4,2,255,221,4,5,204,0,4,8,255,255,4,9,255,0,5,1,187,255,5,2,255,34,5,3,221,0,5,8,153,255,5,9,255,0,6,2,187,0,6,9,153,0],"secondary":false},{"width":7,"bonus":170,"chr":"0","pixels":[0,2,153,255,0,3,221,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,169,255,1,1,187,255,1,3,153,0,1,4,221,0,1,5,255,0,1,6,255,0,1,7,243,71,1,8,237,219,2,1,187,255,2,2,187,0,2,8,205,233,2,9,211,41,3,1,221,255,3,2,205,85,3,8,203,255,3,9,187,0,4,2,243,178,4,3,255,255,4,4,187,255,4,5,187,255,4,6,237,255,4,7,169,255,4,9,204,0,5,3,170,0,5,4,255,0,5,5,187,0,5,6,187,0,5,7,238,0,5,8,170,0],"secondary":false},{"width":7,"bonus":100,"chr":"1","pixels":[1,8,187,255,2,1,203,255,2,2,224,232,2,3,219,218,2,4,187,255,2,5,187,255,2,6,187,255,2,7,187,255,2,8,237,255,2,9,187,0,3,2,218,80,3,3,218,80,3,4,205,85,3,5,205,85,3,6,205,85,3,7,205,85,3,8,241,215,3,9,238,0,4,8,168,207,4,9,204,0],"secondary":false},{"width":7,"bonus":105,"chr":"2","pixels":[1,8,255,255,2,1,187,255,2,6,153,255,2,8,223,214,2,9,255,0,3,1,203,255,3,2,187,0,3,5,153,255,3,7,153,0,3,8,219,218,3,9,187,0,4,1,187,255,4,2,234,167,4,4,203,255,4,6,153,0,4,8,187,255,4,9,187,0,5,2,214,122,5,3,200,152,5,5,204,0,5,9,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"3","pixels":[0,8,203,255,1,1,187,255,1,8,191,250,1,9,204,0,2,1,187,255,2,2,196,45,2,4,187,255,2,5,174,150,2,8,203,255,2,9,187,0,3,2,246,229,3,3,210,247,3,5,241,215,3,6,173,175,3,7,169,255,3,9,204,0,4,3,227,57,4,4,204,0,4,6,228,133,4,7,174,150,4,8,170,0],"secondary":false},{"width":7,"bonus":150,"chr":"4","pixels":[0,6,237,255,1,4,187,255,1,6,219,218,1,7,238,0,2,3,169,255,2,5,187,0,2,6,219,218,2,7,187,0,3,1,187,255,3,2,153,255,3,3,155,112,3,4,193,90,3,6,203,255,3,7,205,85,4,1,187,255,4,2,237,201,4,3,228,209,4,4,205,233,4,5,205,233,4,6,242,251,4,7,241,198,4,8,205,233,5,2,187,0,5,3,187,0,5,4,187,0,5,5,187,0,5,6,224,155,5,7,238,0,5,8,187,0,5,9,187,0],"secondary":false},{"width":7,"bonus":130,"chr":"5","pixels":[1,1,237,255,1,2,187,255,1,3,187,255,1,4,187,255,1,8,207,251,2,1,187,255,2,2,238,0,2,3,187,0,2,4,237,201,2,5,187,0,2,8,187,255,2,9,204,0,3,1,187,255,3,2,187,0,3,4,203,255,3,5,191,23,3,8,203,255,3,9,187,0,4,2,187,0,4,5,251,242,4,6,191,250,4,7,221,255,4,9,204,0,5,6,243,71,5,7,191,23,5,8,221,0],"secondary":false},{"width":7,"bonus":150,"chr":"6","pixels":[0,3,169,255,0,4,255,255,0,5,255,255,0,6,237,255,0,7,153,255,1,2,187,255,1,4,209,145,1,5,255,68,1,6,255,0,1,7,246,123,1,8,228,209,2,1,203,255,2,3,187,0,2,4,200,238,2,8,219,218,2,9,187,0,3,1,187,255,3,2,204,0,3,4,203,255,3,5,205,85,3,8,187,255,3,9,187,0,4,2,187,0,4,5,248,227,4,6,255,255,4,7,187,255,4,9,187,0,5,6,221,0,5,7,255,0,5,8,187,0],"secondary":false},{"width":7,"bonus":105,"chr":"7","pixels":[0,1,187,255,1,1,187,255,1,2,187,0,1,8,203,255,2,1,187,255,2,2,187,0,2,6,237,255,2,7,153,255,2,9,204,0,3,1,187,255,3,2,205,85,3,3,153,255,3,4,221,255,3,7,238,0,3,8,153,0,4,1,255,255,4,2,237,201,4,4,153,0,4,5,221,0,5,2,255,0,5,3,187,0],"secondary":false},{"width":7,"bonus":165,"chr":"8","pixels":[1,2,237,255,1,3,221,255,1,6,203,255,1,7,228,247,2,1,203,255,2,3,241,54,2,4,248,209,2,5,186,233,2,7,207,21,2,8,250,226,3,1,187,255,3,2,204,0,3,4,186,233,3,5,221,98,3,6,170,0,3,8,191,250,3,9,221,0,4,1,221,255,4,2,209,104,4,4,169,255,4,5,237,219,4,8,187,255,4,9,187,0,5,2,243,178,5,3,187,209,5,5,204,128,5,6,251,242,5,7,240,253,5,9,187,0,6,3,170,0,6,4,153,0,6,7,238,0,6,8,238,0],"secondary":false},{"width":7,"bonus":160,"chr":"9","pixels":[1,2,221,255,1,3,191,250,1,4,242,251,1,8,153,255,2,1,203,255,2,3,221,0,2,4,191,23,2,5,253,223,2,8,191,250,2,9,153,0,3,1,187,255,3,2,204,0,3,5,191,250,3,6,221,0,3,8,203,255,3,9,187,0,4,1,187,255,4,2,218,139,4,6,200,65,4,7,169,255,4,9,204,0,5,2,228,171,5,3,245,247,5,4,255,255,5,5,255,255,5,6,223,214,5,8,170,0,6,3,153,0,6,4,238,0,6,5,255,0,6,6,255,0,6,7,187,0],"secondary":false},{"width":8,"bonus":130,"chr":"%","pixels":[0,3,255,255,0,8,255,255,1,2,255,255,1,4,255,255,1,7,255,255,1,9,255,0,2,3,255,255,2,5,255,41,2,6,255,255,2,8,255,0,3,4,255,41,3,5,255,255,3,7,255,0,4,4,255,255,4,6,255,92,4,7,255,255,5,3,255,255,5,5,255,0,5,6,255,255,5,8,255,255,6,2,255,255,6,4,255,0,6,7,255,255,6,9,255,0,7,3,255,0,7,8,255,0],"secondary":false},{"width":4,"bonus":80,"chr":"/","pixels":[0,7,153,255,0,8,237,255,0,9,221,255,1,4,187,255,1,5,237,255,1,6,169,255,1,8,153,0,1,9,238,0,1,10,221,0,2,1,221,255,2,2,221,255,2,5,187,0,2,6,238,0,2,7,170,0,3,2,221,0,3,3,221,0],"secondary":false},{"width":7,"bonus":110,"chr":"+","pixels":[0,5,221,255,1,5,255,255,1,6,221,0,2,5,255,255,2,6,255,34,3,2,153,255,3,3,223,253,3,4,225,251,3,5,255,255,3,6,255,221,3,7,225,251,3,8,210,247,4,3,153,0,4,4,221,0,4,5,255,255,4,6,255,0,4,7,221,0,4,8,221,0,4,9,204,0,5,5,255,255,5,6,255,0,6,6,255,0],"secondary":false},{"width":5,"bonus":75,"chr":"?","pixels":[0,1,169,255,1,1,255,255,1,2,170,0,1,6,221,255,1,8,255,255,2,1,255,255,2,2,255,0,2,5,169,255,2,7,221,0,2,9,255,0,3,2,255,255,3,3,221,255,3,6,170,0,4,3,255,17,4,4,221,0],"secondary":false},{"width":2,"bonus":70,"chr":"!","pixels":[0,1,169,255,0,2,187,255,0,3,187,255,0,4,187,255,0,5,187,255,0,6,169,255,0,8,255,255,1,2,181,48,1,3,196,45,1,4,196,45,1,5,196,45,1,6,196,45,1,7,170,0,1,9,255,0],"secondary":false},{"width":8,"bonus":230,"chr":"@","pixels":[0,4,255,255,0,5,255,255,0,6,221,255,0,7,255,255,0,8,187,255,1,3,221,255,1,5,255,0,1,6,255,34,1,7,221,0,1,8,255,68,1,9,250,243,2,2,221,255,2,4,232,93,2,5,255,255,2,6,237,255,2,7,255,255,2,10,248,157,3,2,255,255,3,3,221,0,3,4,255,255,3,6,255,0,3,7,241,54,3,8,254,204,3,10,214,223,3,11,153,0,4,2,237,255,4,3,255,0,4,4,255,255,4,5,255,0,4,8,255,255,4,9,204,0,4,11,187,0,5,3,253,240,5,4,255,255,5,5,255,221,5,6,221,255,5,7,221,255,5,8,237,255,5,9,255,0,6,4,240,36,6,5,255,34,6,6,226,39,6,7,226,39,6,8,250,226,6,9,238,0,7,9,221,0],"secondary":false},{"width":8,"bonus":200,"chr":"#","pixels":[0,6,255,255,1,3,255,255,1,6,255,255,1,7,254,171,1,8,237,255,2,1,169,255,2,2,237,255,2,3,255,255,2,4,255,221,2,5,175,247,2,6,255,255,2,7,255,85,2,8,170,0,2,9,238,0,3,2,170,0,3,3,255,255,3,4,255,0,3,5,221,0,3,6,255,255,3,7,255,0,4,3,255,255,4,4,255,153,4,5,203,255,4,6,255,255,4,7,254,239,4,8,187,255,5,1,255,255,5,2,187,255,5,3,255,255,5,4,255,85,5,5,159,27,5,6,255,255,5,7,255,0,5,8,238,0,5,9,187,0,6,2,255,0,6,3,255,255,6,4,255,0,6,7,255,0,7,4,255,0],"secondary":false},{"width":6,"bonus":130,"chr":"$","pixels":[0,2,153,255,0,3,169,255,1,1,203,255,1,3,187,116,1,4,244,231,1,8,243,249,2,0,203,255,2,1,237,255,2,2,204,0,2,4,176,197,2,5,237,128,2,8,240,253,2,9,251,207,3,1,251,242,3,2,239,18,3,5,247,245,3,6,164,132,3,8,255,255,3,9,240,36,3,10,204,0,4,2,240,36,4,6,249,174,4,7,198,219,4,9,255,0,5,7,170,0,5,8,170,0],"secondary":false},{"width":6,"bonus":75,"chr":"^","pixels":[0,4,153,255,0,5,237,255,1,2,203,255,1,3,221,255,1,5,153,0,1,6,238,0,2,1,221,255,2,2,230,245,2,3,218,80,2,4,221,0,3,2,227,57,3,3,246,194,3,4,230,245,4,4,187,0,4,5,239,145],"secondary":false},{"width":6,"bonus":35,"chr":"~","pixels":[1,5,255,255,2,5,221,255,2,6,255,51,3,6,250,226,4,5,203,255,4,7,221,0,5,6,204,0],"secondary":false},{"width":7,"bonus":175,"chr":"&","pixels":[0,6,187,255,1,2,237,255,1,3,255,255,1,4,191,250,1,5,187,255,1,7,224,155,1,8,223,214,2,1,255,255,2,3,238,0,2,4,255,255,2,5,191,23,2,6,187,0,2,8,255,255,2,9,187,0,3,1,255,255,3,2,255,0,3,4,255,255,3,5,255,0,3,8,255,255,3,9,255,0,4,2,255,0,4,4,255,255,4,5,255,34,4,8,187,255,4,9,255,0,5,3,203,255,5,4,255,255,5,5,255,221,5,6,196,243,5,7,155,196,5,9,187,0,6,4,234,167,6,5,255,0,6,6,221,0,6,7,187,0],"secondary":false},{"width":6,"bonus":70,"chr":"*","pixels":[0,2,169,255,1,2,169,255,1,3,237,219,1,4,255,255,2,1,203,255,2,2,240,253,2,3,255,255,2,4,228,133,2,5,255,0,3,2,237,183,3,3,245,107,3,4,255,153,4,3,170,0,4,5,153,0],"secondary":false},{"width":4,"bonus":100,"chr":"(","pixels":[0,3,173,255,0,4,239,255,0,5,253,255,0,6,229,255,0,7,171,255,1,1,193,255,1,2,203,255,1,4,188,64,1,5,241,25,1,6,252,46,1,7,240,112,1,8,238,218,1,9,210,232,2,0,209,255,2,2,194,2,2,3,204,0,2,9,223,111,2,10,245,224,3,1,210,0,3,11,216,0],"secondary":false},{"width":4,"bonus":75,"chr":")","pixels":[1,0,211,255,1,10,215,255,2,1,244,203,2,2,222,234,2,8,203,255,2,9,191,255,2,11,216,0,3,2,213,94,3,3,238,186,3,4,246,248,3,5,253,255,3,6,231,253,3,7,186,234,3,9,203,1,3,10,191,0],"secondary":false},{"width":7,"bonus":60,"chr":"_","pixels":[0,9,153,255,1,9,255,255,1,10,153,0,2,9,255,255,2,10,255,0,3,9,255,255,3,10,255,0,4,9,255,255,4,10,255,0,5,9,255,255,5,10,255,0,6,10,255,0],"secondary":false},{"width":4,"bonus":30,"chr":"-","pixels":[0,5,255,255,1,5,255,255,1,6,255,0,2,5,255,255,2,6,255,0,3,6,255,0],"secondary":true},{"width":8,"bonus":100,"chr":"=","pixels":[0,4,255,255,0,6,255,255,1,4,255,255,1,5,255,0,1,6,255,255,1,7,255,0,2,4,255,255,2,5,255,0,2,6,255,255,2,7,255,0,3,4,255,255,3,5,255,0,3,6,255,255,3,7,255,0,4,4,255,255,4,5,255,0,4,6,255,255,4,7,255,0,5,5,255,0,5,7,255,0],"secondary":false},{"width":3,"bonus":105,"chr":"[","pixels":[0,0,203,255,0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,203,255,1,0,237,255,1,1,211,41,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,252,241,1,9,204,0,2,1,238,0,2,9,238,0],"secondary":false},{"width":3,"bonus":105,"chr":"]","pixels":[0,0,237,255,0,8,237,255,1,0,203,255,1,1,253,223,1,2,225,251,1,3,225,251,1,4,225,251,1,5,225,251,1,6,225,251,1,7,225,251,1,8,210,247,1,9,238,0,2,1,204,0,2,2,221,0,2,3,221,0,2,4,221,0,2,5,221,0,2,6,221,0,2,7,221,0,2,8,221,0,2,9,204,0],"secondary":false},{"width":5,"bonus":90,"chr":"{","pixels":[0,5,153,255,1,2,169,255,1,3,221,255,1,4,221,255,1,5,203,255,1,6,255,255,1,7,221,255,1,8,169,255,2,1,237,255,2,3,181,48,2,4,223,19,2,5,221,0,2,6,207,21,2,7,255,34,2,8,232,93,2,9,249,243,3,2,238,0,3,10,238,0],"secondary":false},{"width":5,"bonus":90,"chr":"}","pixels":[1,1,237,255,1,9,237,255,2,2,249,174,2,3,232,243,2,4,225,251,2,5,207,251,2,6,255,255,2,7,223,253,2,8,181,239,2,10,238,0,3,3,170,0,3,4,221,0,3,5,241,162,3,6,204,0,3,7,255,0,3,8,221,0,3,9,170,0,4,6,153,0],"secondary":false},{"width":3,"bonus":20,"chr":":","pixels":[1,3,255,255,1,7,255,255,2,4,255,0,2,8,255,0],"secondary":true},{"width":3,"bonus":40,"chr":";","pixels":[0,9,201,255,1,3,255,255,1,7,241,255,1,8,255,255,1,10,201,0,2,4,255,0,2,8,241,0,2,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":"\\"","pixels":[0,1,255,255,0,2,255,255,1,2,255,0,1,3,255,0,2,1,255,255,2,2,255,255],"secondary":true},{"width":2,"bonus":20,"chr":"\'","pixels":[0,1,255,255,0,2,177,255,1,2,255,30,1,3,177,0],"secondary":true},{"width":7,"bonus":70,"chr":"<","pixels":[0,5,203,255,1,5,255,255,1,6,228,133,2,4,237,255,2,6,254,239,3,4,169,255,3,5,238,0,3,6,175,247,3,7,243,89,4,3,221,255,4,5,170,0,4,7,244,231,5,4,221,0,5,8,221,0],"secondary":false},{"width":7,"bonus":80,"chr":">","pixels":[0,3,203,255,0,7,203,255,1,4,228,133,1,7,187,255,1,8,204,0,2,4,247,245,2,6,255,255,2,8,187,0,3,4,175,247,3,5,248,157,3,6,203,255,3,7,255,0,4,5,255,255,4,6,173,75,4,7,204,0,5,6,255,0],"secondary":false},{"width":5,"bonus":70,"chr":"\\\\","pixels":[1,1,153,255,1,2,255,255,1,3,203,255,2,2,153,0,2,3,255,51,2,4,231,150,2,5,255,255,2,6,203,255,3,6,255,34,3,7,231,150,3,8,255,255,3,9,207,251,4,9,255,0,4,10,204,0],"secondary":false},{"width":2,"bonus":10,"chr":".","pixels":[0,8,255,255,1,9,255,0],"secondary":true},{"width":3,"bonus":30,"chr":",","pixels":[0,9,205,255,1,7,205,255,1,8,255,255,1,10,205,0,2,8,205,0,2,9,255,0],"secondary":true},{"width":3,"bonus":100,"chr":"|","pixels":[0,1,221,255,0,2,221,255,0,3,221,255,0,4,221,255,0,5,221,255,0,6,221,255,0,7,221,255,0,8,221,255,0,9,221,255,0,10,203,255,1,2,226,39,1,3,226,39,1,4,226,39,1,5,226,39,1,6,226,39,1,7,226,39,1,8,226,39,1,9,226,39,1,10,226,39,1,11,204,0],"secondary":false}],"width":10,"spacewidth":3,"shadow":true,"height":12,"basey":8}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_37481__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_37481__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_37481__("./src/targetmob/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startApp: () => (/* binding */ startApp)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alt1/targetmob */ "../node_modules/alt1/dist/targetmob/index.js");
/* harmony import */ var alt1_targetmob__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt1_targetmob__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _a1sauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a1sauce */ "./a1sauce.ts");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.png */ "./icon.png");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/styles.css */ "./css/styles.css");
/* harmony import */ var _lib_necromancy_bloat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/necromancy/bloat */ "./lib/necromancy/bloat.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;



var necromancy_overlay_data = (__webpack_require__(/*! ./data/necromancy_job_gauge */ "./data/necromancy_job_gauge.ts").necromancy_overlay_data);
var readBuffs = (__webpack_require__(/*! ./lib/readBuffs */ "./lib/readBuffs.ts").readBuffs);
var conjureOverlay = (__webpack_require__(/*! ./lib/necromancy/conjures */ "./lib/necromancy/conjures.ts").conjureOverlay);
var soulsOverlay = (__webpack_require__(/*! ./lib/necromancy/soul_stacks */ "./lib/necromancy/soul_stacks.ts").soulsOverlay);
var necrosisOverlay = (__webpack_require__(/*! ./lib/necromancy/necrosis_stacks */ "./lib/necromancy/necrosis_stacks.ts").necrosisOverlay);
var incantationsOverlay = (__webpack_require__(/*! ./lib/necromancy/incantations */ "./lib/necromancy/incantations.ts").incantationsOverlay);
var livingDeathOverlay = (__webpack_require__(/*! ./lib/necromancy/living_death */ "./lib/necromancy/living_death.ts").livingDeathOverlay);
var readEnemy = (__webpack_require__(/*! ./lib/readEnemy */ "./lib/readEnemy.ts").readEnemy);





var targetDisplay = new (alt1_targetmob__WEBPACK_IMPORTED_MODULE_6___default())();
function getByID(id) {
    return document.getElementById(id);
}
var helperItems = {
    Output: getByID('output'),
    settings: getByID('Settings'),
};
var gauges = {
    inCombat: false,
    checkCombatStatus: false,
    necromancy: necromancy_overlay_data,
};
function renderOverlay() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readEnemy(gauges)];
                case 1:
                    _a.sent();
                    if (!(gauges.inCombat || _a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('updatingOverlayPosition'))) return [3 /*break*/, 9];
                    return [4 /*yield*/, readBuffs(gauges)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, conjureOverlay(gauges)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, soulsOverlay(gauges)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, necrosisOverlay(gauges)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, incantationsOverlay(gauges)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, livingDeathOverlay(gauges)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0,_lib_necromancy_bloat__WEBPACK_IMPORTED_MODULE_5__.bloatOverlay)(gauges)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, clearTextOverlays()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
function clearTextOverlays() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            alt1.overLaySetGroup('Undead_Army_Text');
            alt1.overLayClearGroup('Undead_Army_Text');
            alt1.overLayRefreshGroup('Undead_Army_Text');
            alt1.overLaySetGroup('LivingDeath_Text');
            alt1.overLayClearGroup('LivingDeath_Text');
            alt1.overLayRefreshGroup('LivingDeath_Text');
            return [2 /*return*/];
        });
    });
}
function startApp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!window.alt1) {
                helperItems.Output.insertAdjacentHTML('beforeend', "<div>You need to run this page in alt1 to capture the screen</div>");
                return [2 /*return*/];
            }
            if (!alt1.permissionPixel) {
                helperItems.Output.insertAdjacentHTML('beforeend', "<div><p>Page is not installed as app or capture permission is not enabled</p></div>");
                return [2 /*return*/];
            }
            if (!alt1.permissionOverlay) {
                helperItems.Output.insertAdjacentHTML('beforeend', "<div><p>Attempted to use Overlay but app overlay permission is not enabled. Please enable \"Show Overlay\" permission in Alt1 settinsg (wrench icon in corner).</p></div>");
                return [2 /*return*/];
            }
            if (_a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('overlayPosition') !== undefined) {
                gauges.necromancy.position = _a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('overlayPosition');
            }
            if (_a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('hideOutsideCombat') !== undefined) {
                gauges.checkCombatStatus = _a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('hideOutsideCombat');
            }
            updateActiveOrientationFromLocalStorage();
            setInterval(function () {
                renderOverlay();
            }, 20);
            return [2 /*return*/];
        });
    });
}
function updateActiveOrientationFromLocalStorage() {
    // Retrieve selected orientation from localStorage
    var selectedOrientation = _a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('selectedOrientation');
    if (!selectedOrientation) {
        selectedOrientation = 'reverse_split_orientation';
        _a1sauce__WEBPACK_IMPORTED_MODULE_0__.updateSetting('selectedOrientation', 'reverse_split_orientation');
    }
    // Function to recursively update active_orientation in an object
    function updateActiveOrientation(obj) {
        for (var key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key === 'active_orientation') {
                    obj[key].x = obj[selectedOrientation].x;
                    obj[key].y = obj[selectedOrientation].y;
                }
                else {
                    updateActiveOrientation(obj[key]);
                }
            }
        }
    }
    updateActiveOrientation(necromancy_overlay_data);
}
var settingsObject = {
    settingsHeader: _a1sauce__WEBPACK_IMPORTED_MODULE_0__.createHeading('h2', 'Settings'),
    hideOutsideCombat: _a1sauce__WEBPACK_IMPORTED_MODULE_0__.createCheckboxSetting('hideOutsideCombat', 'Hide the overlay while out of combat', false),
    repositionOverlay: _a1sauce__WEBPACK_IMPORTED_MODULE_0__.createButton('Reposition Overlay', setOverlayPosition, { classes: ['nisbutton'] }),
    orientationHeader: _a1sauce__WEBPACK_IMPORTED_MODULE_0__.createHeading('h3', 'Incantation Placement'),
    orientationSelection: _a1sauce__WEBPACK_IMPORTED_MODULE_0__.createDropdownSetting('selectedOrientation', 'Select how to group Incantations', (_a = _a1sauce__WEBPACK_IMPORTED_MODULE_0__.getSetting('selectedOrientation')) !== null && _a !== void 0 ? _a : 'reverse_split_orientation', [
        { value: 'grouped_orientation', name: 'Grouped' },
        { value: 'split_orientation', name: 'Split' },
        { value: 'reverse_split_orientation', name: 'Reverse Split' },
    ]),
    // visibleComponentsHeader: sauce.createHeading('h3', 'Visible Components'),
    // showConjures: sauce.createCheckboxSetting(
    // 	'showConjures',
    // 	'Show the Conjures component',
    // 	true
    // ),
    // showLivingDeath: sauce.createCheckboxSetting(
    // 	'showLivingDeath',
    // 	'Show Living Death component',
    // 	true
    // ),
    // showIncantations: sauce.createCheckboxSetting(
    // 	'showIncantations',
    // 	'Show the Incantations component',
    // 	true
    // ),
    // showSouls: sauce.createCheckboxSetting(
    // 	'showSouls',
    // 	'Show the Residual Souls component',
    // 	true
    // ),
    // showNecrosis: sauce.createCheckboxSetting(
    // 	'showNecrosis',
    // 	'Show the Necrosis component',
    // 	true
    // ),
    // showBloat: sauce.createCheckboxSetting(
    // 	'showBloat',
    // 	'Show the Bloat component',
    // 	true
    // ),
};
settingsObject.hideOutsideCombat.addEventListener('click', function () {
    location.reload();
});
settingsObject.orientationSelection.addEventListener('change', function () {
    updateActiveOrientationFromLocalStorage();
    console.log(gauges);
});
settingsObject.repositionOverlay.addEventListener('click', setOverlayPosition);
var updatingOverlayPosition = false;
function setOverlayPosition() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updatingOverlayPosition = true;
                    alt1__WEBPACK_IMPORTED_MODULE_7__.once('alt1pressed', updateLocation);
                    _a.label = 1;
                case 1:
                    if (!updatingOverlayPosition) return [3 /*break*/, 3];
                    gauges.necromancy.position.x = alt1__WEBPACK_IMPORTED_MODULE_7__.getMousePosition().x;
                    gauges.necromancy.position.y = alt1__WEBPACK_IMPORTED_MODULE_7__.getMousePosition().y;
                    return [4 /*yield*/, new Promise(function (done) { return setTimeout(done, 20); })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateLocation(e) {
    updatingOverlayPosition = false;
    _a1sauce__WEBPACK_IMPORTED_MODULE_0__.updateSetting('overlayPosition', {
        x: gauges.necromancy.position.x,
        y: gauges.necromancy.position.y,
    });
    alt1.overLayClearGroup('overlayPositionHelper');
    alt1.overLayRefreshGroup('overlayPositionHelper');
}
window.onload = function () {
    //check if we are running inside alt1 by checking if the alt1 global exists
    if (window.alt1) {
        //tell alt1 about the app
        //this makes alt1 show the add app button when running inside the embedded browser
        //also updates app settings if they are changed
        alt1.identifyAppUrl('./appconfig.json');
        Object.values(settingsObject).forEach(function (val) {
            helperItems.settings.before(val);
        });
        startApp();
    }
    else {
        var addappurl = "alt1://addapp/".concat(new URL('./appconfig.json', document.location.href).href);
        helperItems.Output.insertAdjacentHTML('beforeend', "\n\t\t\tAlt1 not detected, click <a href='".concat(addappurl, "'>here</a> to add this app to Alt1\n\t\t"));
    }
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});