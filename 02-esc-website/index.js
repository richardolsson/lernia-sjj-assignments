/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EscAPI)\n/* harmony export */ });\n/* harmony import */ var _challenges_challenge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challenges/challenge.js */ \"./src/js/challenges/challenge.js\");\n\n\nclass EscAPI {\n  constructor() {\n    this.base = 'https://lernia-sjj-assignments.vercel.app';\n    //this.base = 'http://localhost:3000';\n  }\n\n  async loadChallenges() {\n    const res = await fetch(this.base + '/api/challenges');\n    const data = await res.json();\n    return data.challenges.map(cd => new _challenges_challenge_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cd));\n  }\n\n  async loadAvailableTimes(challenge, date) {\n    const res = await fetch(this.base + `/api/booking/available-times?date=${date}&challenge=${challenge.id}`);\n    const data = await res.json();\n    return data.slots;\n  }\n\n  async submitBooking(challenge, name, email, date, time, participants) {\n    await fetch(this.base + '/api/booking/reservations', {\n      method: 'POST',\n      cors: true,\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        name,\n        email,\n        date,\n        time,\n        participants,\n        challenge: challenge.id,\n      }),\n    });\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/api.js?");

/***/ }),

/***/ "./src/js/booking.js":
/*!***************************!*\
  !*** ./src/js/booking.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Booking)\n/* harmony export */ });\nclass Booking {\n  constructor(api, challenge) {\n    this.api = api;\n    this.challenge = challenge;\n  }\n\n  show() {\n    const ctr = document.createElement('div');\n    ctr.className = 'modal-container';\n    document.body.append(ctr);\n\n    const modal = document.createElement('div');\n    modal.className = 'modal';\n    ctr.append(modal);\n\n    this.content = document.createElement('div');\n    modal.append(this.content);\n\n    this.container = ctr;\n\n    this.renderStep1();\n  }\n\n  renderStep1() {\n    const header = document.createElement('h1');\n    header.innerText = `Book Room \"${this.challenge.title}\"`;\n    this.content.append(header);\n\n    const input = document.createElement('input');\n    input.type = 'date';\n    this.content.append(input);\n\n    const button = document.createElement('button');\n    button.innerText = 'Find available times';\n    button.addEventListener('click', async () => {\n      const date = input.value;\n      const slots = await this.api.loadAvailableTimes(this.challenge, date);\n      this.renderStep2(date, slots);\n    });\n    this.content.append(button);\n  }\n\n  renderStep2(date, slots) {\n    this.content.innerText = '';\n\n    const header = document.createElement('h1');\n    header.innerText = `Book Room \"${this.challenge.title}\" (step 2)`;\n    this.content.append(header);\n\n    const nameInput = document.createElement('input');\n    this.content.append(nameInput);\n\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    this.content.append(emailInput);\n\n    const timeSelect = document.createElement('select');\n    slots.forEach(slot => {\n      const option = document.createElement('option');\n      option.innerText = slot;\n      option.value = slot;\n      timeSelect.append(option);\n    });\n    this.content.append(timeSelect);\n\n    const sizeSelect = document.createElement('select');\n    const min = this.challenge.minParticipants;\n    const max = this.challenge.maxParticipants;\n    for (let i = min; i <= max; i++) {\n      const option = document.createElement('option');\n      option.innerText = (i > 1)? `${i} participants` : `${i} participant`;;\n      option.value = i;\n      sizeSelect.append(option);\n    }\n    this.content.append(sizeSelect);\n\n    const button = document.createElement('button');\n    button.innerText = 'Submit';\n    button.addEventListener('click', async () => {\n      await this.api.submitBooking(\n        this.challenge,\n        nameInput.value,\n        emailInput.value,\n        date,\n        timeSelect.value,\n        parseInt(sizeSelect.value),\n      );\n\n      this.renderStep3();\n    });\n    this.content.append(button);\n  }\n\n  renderStep3() {\n    this.content.innerHTML = 'Thank you!';\n\n    const button = document.createElement('button');\n    button.innerText = 'Back to challenges';\n    button.addEventListener('click', () => {\n      this.container.remove();\n    });\n    this.content.append(button);\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/booking.js?");

/***/ }),

/***/ "./src/js/challenges/challenge.js":
/*!****************************************!*\
  !*** ./src/js/challenges/challenge.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Challenge)\n/* harmony export */ });\nclass Challenge extends EventTarget {\n  constructor(data) {\n    super();\n\n    this.id = data.id;\n    this.type = data.type;\n    this.title = data.title;\n    this.description = data.description;\n    this.minParticipants = data.minParticipants;\n    this.maxParticipants = data.maxParticipants;\n    this.rating = data.rating;\n    this.image = data.image;\n    this.labels = data.labels;\n  }\n\n  render() {\n    const card = document.createElement('li');\n    card.className = 'challenges-item';\n\n    const img = document.createElement('img');\n    img.className = 'challenge-picture';\n    img.src = this.image;\n    card.append(img);\n\n    const header = document.createElement('h3');\n    header.className = 'challenge-title';\n    header.innerText = this.title;\n    card.append(header);\n\n    const meta = document.createElement('div');\n    meta.className = 'challenge-meta';\n    card.append(meta);\n\n    const stars = document.createElement('ul');\n    stars.className = 'challenge-rating';\n    for (let i = 0; i < 5; i++) {\n      const star = document.createElement('li');\n      star.className = 'challenge-rating-star';\n      star.classList.add((this.rating > i)? 'on' : 'off');\n      stars.append(star);\n    }\n    meta.append(stars);\n\n    const size = document.createElement('small');\n    size.className = 'challenge-size';\n    size.innerText = `${this.minParticipants}-${this.maxParticipants} participants`;\n    meta.append(size);\n\n    const desc = document.createElement('p');\n    desc.className = 'challenge-description';\n    desc.innerText = this.description;\n    card.append(desc);\n\n    const cta = document.createElement('a');\n    cta.className = 'challenge-cta';\n    cta.innerText = 'Book this room';\n    cta.addEventListener('click', () => {\n      this.dispatchEvent(new Event('booking'));\n    });\n    card.append(cta);\n\n    this.card = card;\n\n    return card;\n  }\n\n  show() {\n    this.card.classList.toggle('filtered', false);\n  }\n\n  hide() {\n    this.card.classList.toggle('filtered', true);\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/challenges/challenge.js?");

/***/ }),

/***/ "./src/js/challenges/grid.js":
/*!***********************************!*\
  !*** ./src/js/challenges/grid.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChallengeGrid\": () => (/* binding */ ChallengeGrid),\n/* harmony export */   \"TopRatedChallengeGrid\": () => (/* binding */ TopRatedChallengeGrid),\n/* harmony export */   \"FilteredChallengeGrid\": () => (/* binding */ FilteredChallengeGrid)\n/* harmony export */ });\n/* harmony import */ var _filters_rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filters/rating.js */ \"./src/js/filters/rating.js\");\n/* harmony import */ var _filters_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filters/label.js */ \"./src/js/filters/label.js\");\n/* harmony import */ var _filters_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/type.js */ \"./src/js/filters/type.js\");\n/* harmony import */ var _filters_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/text.js */ \"./src/js/filters/text.js\");\n/* harmony import */ var _booking_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booking.js */ \"./src/js/booking.js\");\n\n\n\n\n\n\nclass ChallengeGrid {\n  constructor(api, challenges) {\n    this.api = api;\n    this.challenges = challenges;\n    this.booking = null;\n  }\n\n  render() {\n    const list = document.createElement('ul');\n    list.className = 'challenges-list';\n\n    this.challenges.forEach(challenge => {\n      const card = challenge.render();\n      challenge.addEventListener('booking', () => {\n        this.booking = new _booking_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.api, challenge);\n        this.booking.show();\n      });\n      list.append(card);\n    });\n\n    return list;\n  }\n}\n\nclass TopRatedChallengeGrid {\n  constructor(api, challenges) {\n    this.api = api;\n    this.challenges = challenges;\n  }\n\n  render() {\n    const top3Challenges = this.challenges\n      .sort((c0, c1) => c1.rating - c0.rating)\n      .slice(0, 3);\n\n    const grid = new ChallengeGrid(this.api, top3Challenges);\n    return grid.render();\n  }\n}\n\n\nclass FilteredChallengeGrid {\n  constructor(api, challenges) {\n    this.api = api;\n    this.challenges = challenges;\n  }\n\n  render() {\n    const handleFilterChange = () => {\n      this.challenges.forEach(challenge => {\n        if (typeFilter.matches(challenge)\n          && ratingFilter.matches(challenge)\n          && labelFilter.matches(challenge)\n          && textFilter.matches(challenge)) {\n          challenge.show();\n        }\n        else {\n          challenge.hide();\n        }\n      });\n    }\n\n    const typeFilter = new _filters_type_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    typeFilter.addEventListener('change', handleFilterChange);\n\n    const ratingFilter = new _filters_rating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    ratingFilter.addEventListener('change', handleFilterChange);\n\n    const labels = [];\n    this.challenges.forEach(challenge => {\n      challenge.labels.forEach(label => {\n        if (!labels.includes(label)) {\n          labels.push(label);\n        }\n      });\n    });\n    const labelFilter = new _filters_label_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](labels);\n    labelFilter.addEventListener('change', handleFilterChange);\n\n    const textFilter = new _filters_text_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    textFilter.addEventListener('change', handleFilterChange);\n\n    const ctr = document.createElement('div');\n    ctr.className = 'all-challenges';\n\n    const filterBox = document.createElement('div');\n    filterBox.className = 'filter-box';\n    ctr.append(filterBox);\n\n    filterBox.append(typeFilter.render());\n    filterBox.append(ratingFilter.render());\n    filterBox.append(labelFilter.render());\n    filterBox.append(textFilter.render());\n\n    const grid = new ChallengeGrid(this.api, this.challenges);\n    ctr.append(grid.render());\n\n    return ctr;\n  }\n\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/challenges/grid.js?");

/***/ }),

/***/ "./src/js/filters/label.js":
/*!*********************************!*\
  !*** ./src/js/filters/label.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LabelFilter)\n/* harmony export */ });\nclass LabelFilter extends EventTarget {\n  constructor(labels) {\n    super();\n    \n    this.labels = labels;\n\n    this.config = {};\n    this.labels.forEach(label => {\n      this.config[label] = false;\n    });\n\n    this.labelItems = [];\n  }\n\n  render() {\n    const ctr = document.createElement('div');\n\n    const header = document.createElement('h4');\n    header.innerText = 'By label';\n    ctr.append(header);\n\n    const list = document.createElement('ul');\n    this.labels.forEach(label => {\n      const item = document.createElement('li');\n      item.innerText = label;\n      item.addEventListener('click', () => {\n        this.setConfig({\n          [label]: !this.config[label],\n        });\n        this.update();\n\n        this.dispatchEvent(new Event('change'));\n      });\n      this.labelItems.push(item);\n      list.append(item);\n    });\n    ctr.append(list);\n\n    this.update();\n\n    return ctr;\n  }\n\n  setConfig(config) {\n    this.config = {\n      ...this.config,\n      ...config,\n    };\n  }\n\n  update() {\n    this.labelItems.forEach(item => {\n      item.style.opacity = this.config[item.innerText]? 1.0 : 0.2;\n    });\n  }\n\n  matches(challenge) {\n    return Object.keys(this.config)\n      .filter(label => this.config[label])\n      .every(label => challenge.labels.includes(label));\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/filters/label.js?");

/***/ }),

/***/ "./src/js/filters/rating.js":
/*!**********************************!*\
  !*** ./src/js/filters/rating.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RatingFilter)\n/* harmony export */ });\n/* harmony import */ var _widgets_rating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../widgets/rating.js */ \"./src/js/widgets/rating.js\");\n\n\nclass RatingFilter extends EventTarget {\n  constructor() {\n    super();\n\n    this.config = {\n      min: 0,\n      max: 5,\n    };\n  }\n\n  render() {\n    const minWidget = new _widgets_rating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.config.min);\n    minWidget.addEventListener('change', () => {\n      this.config.min = minWidget.rating;\n      maxWidget.min = minWidget.rating;\n      this.dispatchEvent(new Event('change'));\n    });\n\n    const maxWidget = new _widgets_rating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.config.max);\n    maxWidget.addEventListener('change', () => {\n      this.config.max = maxWidget.rating;\n      minWidget.max = maxWidget.rating;\n      this.dispatchEvent(new Event('change'));\n    });\n\n    const ctr = document.createElement('div');\n    const header = document.createElement('h4');\n    header.innerText = 'By rating';\n    ctr.append(header);\n    ctr.append(minWidget.render());\n    ctr.append(maxWidget.render());\n\n    return ctr;\n  }\n\n  matches(challenge) {\n    return challenge.rating >= this.config.min && challenge.rating <= this.config.max;\n  }\n\n  setConfig(config) {\n    this.config = {\n      ...this.config,\n      ...config,\n    };\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/filters/rating.js?");

/***/ }),

/***/ "./src/js/filters/text.js":
/*!********************************!*\
  !*** ./src/js/filters/text.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextFilter)\n/* harmony export */ });\nclass TextFilter extends EventTarget {\n  constructor() {\n    super();\n\n    this.config = {\n      text: '',\n    };\n  }\n\n  render() {\n    const ctr = document.createElement('div');\n    const header = document.createElement('h4');\n    header.innerText = 'By text';\n    ctr.append(header);\n\n    const input = document.createElement('input');\n    input.addEventListener('keyup', () => {\n      this.setConfig({\n        text: input.value,\n      });\n      this.dispatchEvent(new Event('change'));\n    });\n    ctr.append(input);\n    return ctr;\n  }\n\n  setConfig(config) {\n    this.config = {\n      ...this.config,\n      ...config,\n    };\n  }\n\n  matches(challenge) {\n    const text = this.config.text.toLowerCase();\n    const index = [\n      challenge.title.toLowerCase(),\n      challenge.description.toLowerCase(),\n    ];\n    return index.some(str => str.includes(text));\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/filters/text.js?");

/***/ }),

/***/ "./src/js/filters/type.js":
/*!********************************!*\
  !*** ./src/js/filters/type.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TypeFilter)\n/* harmony export */ });\nclass TypeFilter extends EventTarget {\n  constructor() {\n    super();\n\n    this.config = {\n      online: true,\n      onsite: true,\n    };\n  }\n\n  render() {\n    const ctr = document.createElement('div');\n    ctr.className = 'filter filter-type';\n\n    const header = document.createElement('h4');\n    header.innerText = 'By type';\n    ctr.append(header);\n\n    const optionList = document.createElement('ul');\n    optionList.append(this.renderItem('online', 'Include online challenges'));\n    optionList.append(this.renderItem('onsite', 'Include on-site challenges'));\n    ctr.append(optionList);\n\n    return ctr;\n  }\n\n  matches(challenge) {\n    return this.config[challenge.type];\n  }\n\n  setConfig(config) {\n    this.config = {\n      ...this.config,\n      ...config,\n    };\n  }\n\n  renderItem(type, text) {\n    const item = document.createElement('li');\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.checked = this.config[type];\n    checkbox.addEventListener('change', () => {\n      this.setConfig({\n        [type]: checkbox.checked,\n      });\n\n      this.dispatchEvent(new Event('change'));\n    });\n\n    const label = document.createElement('label');\n    label.append(checkbox);\n    label.append(text);\n\n    item.append(label);\n    return item;\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/filters/type.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/js/api.js\");\n/* harmony import */ var _challenges_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../challenges/grid.js */ \"./src/js/challenges/grid.js\");\n\n\n\n(async () => {\n  const api = new _api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const challenges = await api.loadChallenges();\n  const grid = new _challenges_grid_js__WEBPACK_IMPORTED_MODULE_1__.TopRatedChallengeGrid(api, challenges);\n  const list = grid.render();\n  const ctas = document.querySelector('.challenges-cta');\n  ctas.before(list);\n})();\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/pages/index.js?");

/***/ }),

/***/ "./src/js/widgets/rating.js":
/*!**********************************!*\
  !*** ./src/js/widgets/rating.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RatingWidget)\n/* harmony export */ });\nclass RatingWidget extends EventTarget {\n  constructor(rating) {\n    super();\n\n    this.min = -Infinity;\n    this.max = Infinity;\n\n    this.rating = rating;\n    this.stars = [];\n  }\n\n  render() {\n    this.starList = document.createElement('ul');\n    this.starList.className = 'challenge-rating';\n    for (let i = 0; i < 5; i++) {\n      const star = document.createElement('li');\n      star.className = 'challenge-rating-star';\n\n      star.addEventListener('click', () => {\n        let value = i + 1;\n        if (value == 1 && this.rating == 1) {\n          value = 0;\n        }\n\n        this.rating = Math.max(this.min, Math.min(this.max, value));\n        this.update();\n        this.dispatchEvent(new Event('change'));\n      });\n\n      this.starList.append(star);\n      this.stars.push(star);\n    }\n\n    this.update();\n\n    return this.starList;\n  }\n\n  update() {\n    this.stars.forEach((star, idx) => {\n      star.classList.toggle('on', (this.rating > idx));\n      star.classList.toggle('off', (this.rating <= idx));\n    });\n  }\n}\n\n\n//# sourceURL=webpack://02-esc-website/./src/js/widgets/rating.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/index.js");
/******/ 	
/******/ })()
;