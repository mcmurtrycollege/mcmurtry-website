module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1/J2":
/***/ (function(module, exports) {



/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TEpl");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dqW":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Gokf":
/***/ (function(module, exports) {



/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L5GA":
/***/ (function(module, exports) {



/***/ }),

/***/ "L9kK":
/***/ (function(module) {

module.exports = {"c":{"names":"Margaret Beier and Chris Stickney","body":["We are Margaret Beier and Chris Stickney, the Magisters of McMurtry College, and we are thrilled to welcome you to the community!","College Magisters are faculty members who live on campus with their families. We live right next to the college, across from the commons. We are here to foster the intellectual, cultural, and social life at the college and to support you during your years at McMurtry. We are excited to meet you and to nurture the kind, open, and stimulating culture at McMurtry. To do this, we will host events in our home, share meals with you in the commons, and help you navigate your life at the college. We hope that McMurtry will soon feel like your home away from home.","Margaret is an associate professor in the Psychology Department. Her specialty is applied psychology, and she studies performance in educational and work settings. She has been at Rice for 12 years, and she loves mentoring the incredibly talented students she has met here. Chris is a high school math teacher at the High School for the Visual and Performing Arts (HSPVA) in Houston. He loves all sports and has been a high school basketball coach for the last 15 years. We are both from Minneapolis, Minnesota and love the color purple (Purple Rain and the Minnesota Vikings). We met in high school and were married in Minnesota but moved to Atlanta, Georgia shortly afterward for graduate school. We have two girls: Lucy, 14, and Liza, 12, who were born in Atlanta. Our kids love watching movies, reading books, creating art, and swimming. We also have two boys: our German Shepherds, Oscar and Felix, who you will see walking Margaret around campus. We are all eager to welcome you to the college!","As new students, you are an important part of McMurtry. We will all work together to energize our community. Keep in mind, McMurtry is your college – the BEST residential college at Rice. We encourage you to have fun, ask questions, be safe, be active, and be creative. We will do our best to support your vision for McMurtry. We look forward to meeting everyone of you!"]},"b":{"names":"Brian Gibson and Alana Lemay-Gibson","body":["Hello Murts! We would like to tell you a little about ourselves so that you will know who keeps walking their heavy-breathing bulldog all around the building.","Alana is from Providence, RI, and Brian is from the rural town of Rehoboth, MA. Both of us have been in Texas for a long time so our accents have been diluted. Alana received her BA in Anthropology from UT Austin and her MED in Educational Anthropology from the University of Houston. Brian received his BA in Kinesiology, and his MA and PhD in Exercise Physiology from UT Austin. We were married in Austin, TX in December of 1995.","Brian accepted a faculty position in the Department of Kinesiology at Rice in 1996, where he currently serves as Professor in the Practice teaching Human Physiology and Exercise Physiology courses. In 2004, he also assumed a new role in Academic Advising, and with a few changes over the years, he currently serves as the Associate Dean of Undergraduates. In this role, he has responsibilities for the Office of Academic Advising, the Center for Career Development and the Center for Teaching Excellence.","After Alana finished her education, she transitioned to working in software development and technology management. Currently, she works as a Project Manager for OpenStax at Rice University. OpenStax is a nonprofit organization committed to improving student access to quality learning materials. Even though OpenStax textbooks are free, they are very high quality, peer-reviewed, and customizable. For more information, please visit openstax.org.","We both have lots of personal interests. We absolutely love, and dote on our dog “Bogie Theodore Gibson”, and we enjoy travel, exercise, and spending time with family and friends. We also have separate personal interests. Alana enjoys books, music, cooking, and art. Brian enjoys playing and coaching sports, lifting weights, wildlife, and photography. We have been living with students in the residential colleges since we arrived in Houston in 1996, but we were “promoted” to McMurtry in 2014. As you can tell, we like college life. In fact, we’re not sure we can remember what it is like to NOT be in college. We consider ourselves non-judgmental adults who are here to share our lives with Murts to whatever extent they wish."]},"d":{"names":"Tamara Cobb and Andre Cobb","body":["Hello and welcome! We are the 2nd floor RAs- Tamara, Andre, and our 3 daughters and we are so excited to be a part of the McMurtry family!","Tamara is an Assistant Director of Academic Advising here at Rice and was born and raised in Houston. She has an MA in Sociology and loves learning about human variation in every form – cultural, familial, personality, life choices, etc. This means she will want to learn all about your life story, so get ready! She hates chocolate, cinnamon, caramel, and peanut butter (she hopes this isn’t a deal-breaker for you) but loves strawberry, cherry, vanilla, and Funfetti! She also enjoys color consulting, wildlife and outdoor adventure shows and books, and games of all sorts – bowling, board games, video games, you name it.","Andre is the Department Business Administrator in the English department at the University of Houston, and was also born and raised in Houston. He enjoys reading about politics and law, critical film analysis, philosophy (his undergraduate major!), and sports – particularly the Green Bay Packers and yelling at their coaching staff. Andre and Tamara actually met in freshman year of high school at Bellaire High School! Together, they enjoy reading, curating relaxing music playlists, travel planning, and watching and re-watching beloved TV series like The Simpsons, The Sopranos, The Wire, The Americans, and Game of Thrones, among others.","Seraphina is a Rising Kindergartner and enjoys creating her own songs and accompanying dance routines, reading, constructing buildings with Legos and Magna-tiles, and swimming. Aura is 2 ½ and enjoys climbing things and people, creating elaborate vignettes with Paw Patrol and Peppa Pig figurines, and shriek-cackling. Lila is approaching 1 ½ and enjoys eating all of the food on our planet (impressively with only 4 teeth), smiling just because, throwing random objects off of the back of the couch or out of her playpen, and marathon naps. Together, they enjoy the Moana soundtrack, rainbows and rainbow accessories, and ball pits.","We welcome you to stop by and talk to us anywhere around McMurtry and we can’t wait to get to know all of you!"]},"e":{"names":"Brad Blunt and Marla Sanders","body":["The 3rd floor RA apartment is home to Brad & Marla, plus three kids and a shaggy mutt - all of whom are excited for all of you to be part of an exciting year at McMurtry.","Born in Ohio, raised in Illinois, and educated in Iowa, Brad never expected to leave the Midwest, until a voice teacher invited him to venture down to Texas for a while. That was in 1996. He’s been here pretty much ever since, and since 2012 he has been an Assistant Director of Academic Advising at Rice.","Marla, on the other hand, was born in Houston and stayed put. Why leave a good thing, right? She works beyond the hedges (that’s Rice-Speak for “off-campus”) as a sales representative for The Detering Company. If a house in Houston is fancy with something custom-­built out of wood, her company probably did the work.","Brad’s passion is music. He has a master’s degree in voice and sang for several seasons at Houston Grand Opera, which allowed him to be a pirate, a slave, a gypsy, a marauding assassin and a Parisian flower vendor in just one year. Marla is the real chanteuse of the duo, and she also loves design and making things with her hands (and a lot of hot glue). Together, we enjoy reading, local bars with live music, hiking, and ice cream. We REALLY like ice cream.","Brad’s children, Jonah and Sophie, spend most of the school year near San Antonio, but you will see them most weekends. Jonah is entering 7th grade and is into video games, reading, and playing percussion. Fifth-­grader Sophie is the family animal lover and artist, and she is following in her father’s footsteps by always trying to be the biggest ham in the room. She has a lot of competition for that title from Marla’s daughter Ainsley, who is also in 5th grade and has an encyclopedic knowledge of Harry Potter and Minecraft. Smokey the shaggy mutt is very friendly and loves to play. He also is the guest of honor for the best study break of the year. Don’t be shy about knocking on our door if you want to talk, indulge in some frozen treats, or just need a puppy fix."]},"a":{"names":"Jackie Carrizales","body":["My name is Jackie Carrizales and I am the McMurtry College Coordinator. My office is on the ground floor right outside the door to the commons. I love visiting withstudents and hearing about what is going on with their lives, so please stop by anytime to hang out or just to say Hi!","There are some very comfortable couches and chairs and I don’t even mind if you take a nap. Plus, I have candy! I have been the coordinator here since the week before O-Week in 2015 but I have been an associate at McMurtry since it opened in the Summer of 2009. I was so excited to be able to be a part of a college from the beginning and see the start of all of the traditions that make each college unique. I can’t believe that I’m lucky enough to spend every day here now and I get paid for it!","I have worked for Rice since 2009. Before coming to McMurtry, I worked for 6 years in the Office of Admission. I am married to Marc and we have three sons, Max (22), Luke (21) and Leo (18). We also have two dogs, Mikey and Azura. I am a huge Astros & Rockets fan and will happily talk sports with you at any time.","Things you can do in my office:"]}};

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "Paim":
/***/ (function(module, exports) {



/***/ }),

/***/ "R+Of":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Gokf");
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_css__WEBPACK_IMPORTED_MODULE_2__);




var Title = function Title(props) {
  return (// <div className='title-container'>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: props.width,
      ml: "auto",
      mr: "auto",
      className: "title-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: props.smallText ? 'title-theme2' : 'title-theme1'
    }, props.title)))
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Title); // style={{width: props.width}}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TEpl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: ./components/navbar/navbar.js + 2 modules
var navbar = __webpack_require__("gJ/y");

// EXTERNAL MODULE: ./components/footer/footer.js
var footer = __webpack_require__("rCDY");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/navbar headers/leadership/mcteam/mcteam.css
var mcteam = __webpack_require__("5dqW");

// EXTERNAL MODULE: ./components/title.js
var title = __webpack_require__("R+Of");

// EXTERNAL MODULE: ./components/navbar headers/leadership/mcteam/mcteam.json
var mcteam_mcteam = __webpack_require__("L9kK");

// CONCATENATED MODULE: ./components/navbar headers/leadership/mcteam/mcteam.js











var items = [mcteam_mcteam["c" /* magister_info */], mcteam_mcteam["b" /* head_resident_fellows */], mcteam_mcteam["d" /* second_floor_RA */], mcteam_mcteam["e" /* third_floor_RA */], mcteam_mcteam["a" /* college_coordinator */]];

for (var i = 0; i < items.length; i++) {
  items[i].index = i;
  items[i].key = items[i].names;
}

var positions = ["Magisters", "Head Resident Fellows", "2nd Floor RAs", "3rd Floor RAs", "College Coordinator"];

var mcteam_McTeam =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(McTeam, _React$Component);

  function McTeam(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, McTeam);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(McTeam).call(this, props));
    _this.state = {
      current: 0
    };
    _this.handleEvent = _this.handleEvent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(McTeam, [{
    key: "handleEvent",
    value: function handleEvent(index) {
      this.setState({
        current: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
        className: "mcteam-page"
      }, external_react_default.a.createElement(title["a" /* default */], {
        title: "McTeam",
        width: 200
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_rebass_["Flex"], {
        justifyContent: "center",
        flex: "wrap",
        flexDirection: "row"
      }, positions.map(function (position) {
        return external_react_default.a.createElement(external_rebass_["Box"], {
          key: position
        }, external_react_default.a.createElement("div", {
          onClick: function onClick() {
            return _this2.handleEvent(positions.indexOf(position));
          },
          className: _this2.state.current === positions.indexOf(position) ? "active-key" : "inactive-key"
        }, external_react_default.a.createElement("p", {
          className: "mcteam-key"
        }, position)));
      }))), external_react_default.a.createElement(external_rebass_["Box"], {
        width: [1, 0.9, 0.8, 0.7],
        ml: "auto",
        mr: "auto",
        mb: 50,
        className: "position-content"
      }, external_react_default.a.createElement("h2", {
        className: "mcteam-name"
      }, items[this.state.current].names), items[this.state.current].body.map(function (line) {
        return external_react_default.a.createElement("p", {
          key: "L-".concat(items[_this2.state.current].body.indexOf(line))
        }, line);
      }), this.state.current === 4 ? external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Buy stamps and get envelopes"), external_react_default.a.createElement("li", null, "Pick up mail and packages"), external_react_default.a.createElement("li", null, "Borrow an extra key to your room"), external_react_default.a.createElement("li", null, "Use the staplers, packing tape, scissors, shredder, etc."), external_react_default.a.createElement("li", null, "Get a hug"), external_react_default.a.createElement("li", null, "Do homework or take a study break")) : null));
    }
  }]);

  return McTeam;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./pages/page.css
var page = __webpack_require__("L5GA");

// CONCATENATED MODULE: ./pages/mcteam.js







var mcteam_McTeamPage = function McTeamPage() {
  return external_react_default.a.createElement("div", {
    className: "page"
  }, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(navbar["a" /* default */], null), external_react_default.a.createElement(mcteam_McTeam, null), external_react_default.a.createElement(footer["a" /* default */], null));
};

/* harmony default export */ var pages_mcteam = __webpack_exports__["default"] = (mcteam_McTeamPage);

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charset: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "McMurtry College"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gJ/y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/navbar/navbar.css
var navbar = __webpack_require__("nzDO");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/mcmLogo.css
var mcmLogo = __webpack_require__("Paim");

// CONCATENATED MODULE: ./components/mcmLogo.js





var mcmLogo_McmLogo = function McmLogo() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "mcm-crest",
    id: "mcm-header"
  }, external_react_default.a.createElement(external_rebass_["Box"], {
    width: [0.7, 0.5, 0.5, 0.3],
    ml: "auto",
    mr: "auto",
    pt: 0.1,
    className: "mcm-crest-link"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement(external_rebass_["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })))));
};

/* harmony default export */ var components_mcmLogo = (mcmLogo_McmLogo);
// CONCATENATED MODULE: ./components/navbar/navbar_content.js
var navbar_items = [{
  header: "About",
  dropDownChildren: [{
    subheader: "About",
    to: "/about"
  }, {
    subheader: "Financial Inclusivity",
    to: "/financialinclusivity"
  }]
}, {
  header: "Events",
  dropDownChildren: [{
    subheader: "Events",
    to: "/events"
  }, {
    subheader: "Art Calendar",
    to: "/artevents"
  }]
}, {
  header: "Leadership",
  dropDownChildren: [{
    subheader: "McTeam",
    to: "/mcteam"
  }, {
    subheader: "McMinistry",
    to: "/mcministry"
  }, {
    subheader: "Court",
    to: "/court"
  }, {
    subheader: "Committees",
    to: "/committees"
  }, {
    subheader: "Associates",
    to: "/associates"
  }]
}, {
  header: "Academics",
  dropDownChildren: [{
    subheader: "Divisional Advisors",
    to: "/divisionaladvisors"
  }, {
    subheader: "Peer Academic Advisors",
    to: "/paas"
  }, {
    subheader: "Academic Fellows",
    to: "/academicfellows"
  }]
}, {
  header: "Wellbeing",
  dropDownChildren: [{
    subheader: "Rice Health Advisors",
    to: "/RHAs"
  }, {
    subheader: "Strive Liasons",
    to: "/striveliaisons"
  }]
}, {
  header: "O-Week",
  dropDownChildren: [{
    subheader: "Pixar Studio Week",
    href: 'https://mcmurtryoweek.wixsite.com/home-page'
  }]
}, {
  header: "Resources",
  dropDownChildren: [{
    subheader: "Room Reservations",
    to: "/roomreservations"
  }, {
    subheader: "The MIS",
    to: "/mis"
  }, {
    subheader: "Documents",
    to: "/documents"
  }, {
    subheader: "Expense Forms",
    to: "/expenseforms"
  }, {
    subheader: "McMurtry Resources",
    to: "/mcmresources"
  }, {
    subheader: "Work Orders",
    to: '/workorders'
  }, {
    subheader: "Equipment",
    to: '/equipment'
  }, {
    subheader: "Initiative Requests",
    to: '/initiativerequests'
  }]
}, {
  header: "Contact",
  headerTo: "/contact",
  dropDownChildren: []
}];
/* harmony default export */ var navbar_content = (navbar_items);
// CONCATENATED MODULE: ./components/navbar/navbar.js












var navbar_DropDownWide = function DropDownWide(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item",
    onMouseEnter: props.handleMouseEnter,
    onMouseLeave: props.handleMouseLeave,
    style: {
      width: '10%'
    }
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)) : external_react_default.a.createElement("div", {
    className: props.expanded ? 'dropdown-header-active' : 'dropdown-header-inactive'
  }, props.header)), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref) {
    var subheader = _ref.subheader,
        to = _ref.to,
        href = _ref.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_DropDownNarrow = function DropDownNarrow(props) {
  var h = props.expanded ? 500 : 0;
  var dropDownHeightStyle = {
    maxHeight: "".concat(h, "px")
  };
  return external_react_default.a.createElement("div", {
    className: "dropdown-item"
  }, external_react_default.a.createElement("div", null, props.headerTo !== undefined ? external_react_default.a.createElement(link_default.a, {
    href: props.headerTo
  }, external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick
  }, props.header)) : external_react_default.a.createElement("div", {
    className: "dropdown-header",
    onClick: props.handleClick
  }, props.header, '      ', external_react_default.a.createElement("img", {
    className: "arrow",
    style: props.expanded ? {
      transform: 'rotate(90deg)'
    } : {},
    src: "https://icon.now.sh/chevron/2B2F3A/10",
    alt: ">"
  }))), external_react_default.a.createElement("div", {
    className: "dropdown-subheaders",
    style: dropDownHeightStyle
  }, props.dropDownChildren.map(function (_ref2) {
    var subheader = _ref2.subheader,
        to = _ref2.to,
        href = _ref2.href;
    return href === undefined ? external_react_default.a.createElement(link_default.a, {
      href: to,
      key: "".concat(subheader)
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader)) : external_react_default.a.createElement("a", {
      href: href,
      key: "".concat(subheader),
      style: {
        textDecoration: 'none'
      },
      target: "_blank",
      rel: "noopener noreferrer"
    }, external_react_default.a.createElement("div", {
      className: "dropdown-subheader"
    }, subheader));
  })));
};

var navbar_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavBar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBar).call(this, props));
    var headerStates = [];

    for (var i = 0; i < props.dropDownItems.length; i++) {
      headerStates.push(false);
    }

    _this.state = {
      closed: true,
      fixedNavbar: false,
      headerStates: headerStates
    };
    _this.showSubheader = _this.showSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.hideSubheader = _this.hideSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleSubheader = _this.toggleSubheader.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleNavbar = _this.toggleNavbar.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.scrollHandler = _this.scrollHandler.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(NavBar, [{
    key: "showSubheader",
    value: function showSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = true;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "hideSubheader",
    value: function hideSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = false;
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleSubheader",
    value: function toggleSubheader(indx) {
      var current = this.state.headerStates;
      current[indx] = !this.state.headerStates[indx];
      this.setState({
        headerStates: current
      });
    }
  }, {
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      if (window.scrollY > document.getElementById('mcm-header').clientHeight) {
        this.setState({
          fixedNavbar: true
        });
      } else {
        this.setState({
          fixedNavbar: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var narrowNavBarStyle = {};
      var burgerStyle = {
        transition: 'transform 0.2s ease-in-out'
      };

      if (this.state.closed) {
        narrowNavBarStyle.maxHeight = '0px';
      } else {
        narrowNavBarStyle.maxHeight = '1000px';
        burgerStyle.transform = 'rotate(90deg)';
      }

      var fixedNavbar = {};

      if (this.state.fixedNavbar) {
        fixedNavbar.position = 'fixed';
        fixedNavbar.marginTop = "-".concat(document.getElementById('mcm-header').clientHeight + 0, "px");
      }

      var wideNavbar = [];
      var narrowNavbar = [];

      var _loop = function _loop(k) {
        var item = _this2.props.dropDownItems[k];
        wideNavbar.push(external_react_default.a.createElement(navbar_DropDownWide, {
          handleMouseEnter: function handleMouseEnter() {
            return _this2.showSubheader(k);
          },
          handleMouseLeave: function handleMouseLeave() {
            return _this2.hideSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header)
        }));
        narrowNavbar.push(external_react_default.a.createElement(navbar_DropDownNarrow, {
          handleClick: function handleClick() {
            return _this2.toggleSubheader(k);
          },
          expanded: _this2.state.headerStates[k],
          header: item.header,
          headerTo: item.headerTo,
          dropDownChildren: item.dropDownChildren,
          key: "".concat(item.header)
        }));
      };

      for (var k = 0; k < this.props.dropDownItems.length; k++) {
        _loop(k);
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "navbar-crest"
      }, external_react_default.a.createElement(components_mcmLogo, null)), external_react_default.a.createElement("div", {
        className: "wide-navbar",
        style: fixedNavbar
      }, external_react_default.a.createElement("div", {
        className: "filler-box"
      }), wideNavbar, external_react_default.a.createElement("div", {
        className: "filler-box"
      })), external_react_default.a.createElement("div", {
        className: "narrow-navbar"
      }, external_react_default.a.createElement("div", {
        className: "narrow-navbar-toggle"
      }, external_react_default.a.createElement("img", {
        style: burgerStyle,
        onClick: this.toggleNavbar,
        src: "https://icon.now.sh/burger/2B2F3A/24",
        alt: "burger"
      })), external_react_default.a.createElement(components_mcmLogo, null), external_react_default.a.createElement("div", {
        className: "narrow-navbar-menu",
        style: narrowNavBarStyle
      }, narrowNavbar)));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

var navbar_Navbar = function Navbar() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(navbar_NavBar, {
    dropDownItems: navbar_content
  }));
};

/* harmony default export */ var navbar_navbar = __webpack_exports__["a"] = (navbar_Navbar);

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "nzDO":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rCDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1/J2");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_2__);




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.4, 0.3, 0.3, 0.2],
    ml: "auto",
    mr: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "../static/McmCrest.svg",
    alt: "McMurtry Crest"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "McMurtry College \xB7 MS 761 \xB7 Rice University"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "1605 Rice Blvd. \xB7 Houston, TX 77005"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Phone: (713) 348-4583 \xB7 Fax: (713) 348-3135"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "footer-item"
  }, "Copyright \xA9 McMurtry College, 2019"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });