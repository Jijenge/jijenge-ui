(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/VisitAfrica.jsx":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_axios=__webpack_require__("./node_modules/axios/index.js"),_axios2=_interopRequireDefault(_axios),_NavigationBar=__webpack_require__("./src/components/NavigationBar.jsx"),_NavigationBar2=_interopRequireDefault(_NavigationBar),_Footer=__webpack_require__("./src/components/Footer.jsx"),_Footer2=_interopRequireDefault(_Footer),_ScrollToTop=__webpack_require__("./src/components/ScrollToTop.jsx"),_ScrollToTop2=_interopRequireDefault(_ScrollToTop),_jake=__webpack_require__("./src/images/jake1.jpg"),_jake2=_interopRequireDefault(_jake),_jake3=__webpack_require__("./src/images/jake2.jpg"),_jake4=_interopRequireDefault(_jake3),_jake5=__webpack_require__("./src/images/jake3.jpg"),_jake6=_interopRequireDefault(_jake5),_jake7=__webpack_require__("./src/images/jake4.jpg"),_jake8=_interopRequireDefault(_jake7),_jake9=__webpack_require__("./src/images/jake5.jpg"),_jake10=_interopRequireDefault(_jake9),_jake11=__webpack_require__("./src/images/jake6.jpg"),_jake12=_interopRequireDefault(_jake11),_jake13=__webpack_require__("./src/images/jake7.jpg"),_jake14=_interopRequireDefault(_jake13),_jake15=__webpack_require__("./src/images/jake8.jpg"),_jake16=_interopRequireDefault(_jake15),_jake17=__webpack_require__("./src/images/jake9.jpg"),_jake18=_interopRequireDefault(_jake17),_jake19=__webpack_require__("./src/images/jake10.jpg"),_jake20=_interopRequireDefault(_jake19),_africa=__webpack_require__("./src/images/africa1.jpg"),_africa2=_interopRequireDefault(_africa),_africa3=__webpack_require__("./src/images/africa2.jpg"),_africa4=_interopRequireDefault(_africa3),_africa5=__webpack_require__("./src/images/africa3.jpg"),_africa6=_interopRequireDefault(_africa5),_africa7=__webpack_require__("./src/images/africa4.jpg"),_africa8=_interopRequireDefault(_africa7);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;e&&e(module)}();var VisitAfrica=function(_Component){function VisitAfrica(e){(0,_classCallCheck3.default)(this,VisitAfrica);var a=(0,_possibleConstructorReturn3.default)(this,(VisitAfrica.__proto__||(0,_getPrototypeOf2.default)(VisitAfrica)).call(this,e));return a.state={meet:[_jake2.default,_jake4.default,_jake6.default,_jake8.default,_jake10.default,_jake12.default,_jake14.default,_jake16.default,_jake18.default,_jake20.default],meetCurrent:0,africa:[_africa2.default,_africa4.default,_africa6.default,_africa8.default],expAfrica:0},a}return(0,_inherits3.default)(VisitAfrica,_Component),(0,_createClass3.default)(VisitAfrica,[{key:"handleNextMeetArrow",value:function(){this.state.meetCurrent===this.state.meet.length-1?this.setState({meetCurrent:0}):this.setState({meetCurrent:this.state.meetCurrent+1})}},{key:"handlePrevMeetArrow",value:function(){0===this.state.meetCurrent?this.setState({meetCurrent:this.state.meet.length-1}):this.setState({meetCurrent:this.state.meetCurrent-1})}},{key:"handleNextAfricaArrow",value:function(){this.state.expAfrica===this.state.africa.length-1?this.setState({expAfrica:0}):this.setState({expAfrica:this.state.expAfrica+1})}},{key:"handlePrevAfricaArrow",value:function(){0===this.state.expAfrica?this.setState({expAfrica:this.state.africa.length-1}):this.setState({expAfrica:this.state.expAfrica-1})}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("div",null,_react2.default.createElement(_NavigationBar2.default,null)),_react2.default.createElement("main",null,_react2.default.createElement(_ScrollToTop2.default,null),_react2.default.createElement("div",{className:"visitHeader"},_react2.default.createElement("div",{className:"visitBanner"},_react2.default.createElement("div",{className:"primaryHeading"},"An inspiration vacation"),_react2.default.createElement("div",{className:"secondaryHeading"},"Book a life changing visit to the children at Jijenge @ Nairobi."),_react2.default.createElement("div",{className:"secondaryHeading"},"Meet the children yourself while experiencing the world's best Safari tours and beach vacations!"),_react2.default.createElement("div",{className:"visitBanner__container"},_react2.default.createElement("div",null,_react2.default.createElement("a",{href:"http://eepurl.com/dH3L6b",className:"visitBanner__container--btn"},"Tailor a trip to Kenya")))))),_react2.default.createElement("section",{className:"section-slides"},_react2.default.createElement("div",{className:"section-slides__heading"},_react2.default.createElement("div",{className:"primaryHeading"},"Meet the children")),_react2.default.createElement("div",{className:"slideshow-container"},_react2.default.createElement("div",{className:"mySlides fade"},_react2.default.createElement("img",{className:"image",src:this.state.meet[this.state.meetCurrent]})),_react2.default.createElement("div",{className:"prev",onClick:this.handlePrevMeetArrow.bind(this)},"❮"),_react2.default.createElement("div",{className:"next",onClick:this.handleNextMeetArrow.bind(this)},"❯"))),_react2.default.createElement("section",{className:"section-slides"},_react2.default.createElement("div",{className:"section-slides__heading"},_react2.default.createElement("div",{className:"primaryHeading"},"Experience Africa")),_react2.default.createElement("div",{className:"slideshow-container"},_react2.default.createElement("div",{className:"mySlides fade"},_react2.default.createElement("img",{className:"image",src:this.state.africa[this.state.expAfrica]})),_react2.default.createElement("div",{className:"prev",onClick:this.handlePrevAfricaArrow.bind(this)},"❮"),_react2.default.createElement("div",{className:"next",onClick:this.handleNextAfricaArrow.bind(this)},"❯"))),_react2.default.createElement("section",{className:"section-experience"},_react2.default.createElement("div",{className:"section-experience__heading"},_react2.default.createElement("div",{className:"primaryHeading"},"Experience the trip of a lifetime")),_react2.default.createElement("div",{className:"section-experience__container"},_react2.default.createElement("div",{className:"section-experience__container--form"},_react2.default.createElement("a",{className:"section-experience__container--btn",href:"http://eepurl.com/dH3L6b"},"Tailor a trip to Kenya")))),_react2.default.createElement("footer",null,_react2.default.createElement(_Footer2.default,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),VisitAfrica}(_react.Component),_default=VisitAfrica;exports.default=_default,function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").default,a=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;e&&(e.register(VisitAfrica,"VisitAfrica","/Users/colemichaels/Documents/Projects/jijenge-ui/src/components/VisitAfrica.jsx"),e.register(_default,"default","/Users/colemichaels/Documents/Projects/jijenge-ui/src/components/VisitAfrica.jsx"),a(module))}()}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/images/africa1.jpg":function(e,a,t){e.exports=t.p+"images/africa1.jpg"},"./src/images/africa2.jpg":function(e,a,t){e.exports=t.p+"images/africa2.jpg"},"./src/images/africa3.jpg":function(e,a,t){e.exports=t.p+"images/africa3.jpg"},"./src/images/africa4.jpg":function(e,a,t){e.exports=t.p+"images/africa4.jpg"},"./src/images/jake1.jpg":function(e,a,t){e.exports=t.p+"images/jake1.jpg"},"./src/images/jake10.jpg":function(e,a,t){e.exports=t.p+"images/jake10.jpg"},"./src/images/jake2.jpg":function(e,a,t){e.exports=t.p+"images/jake2.jpg"},"./src/images/jake3.jpg":function(e,a,t){e.exports=t.p+"images/jake3.jpg"},"./src/images/jake4.jpg":function(e,a,t){e.exports=t.p+"images/jake4.jpg"},"./src/images/jake5.jpg":function(e,a,t){e.exports=t.p+"images/jake5.jpg"},"./src/images/jake6.jpg":function(e,a,t){e.exports=t.p+"images/jake6.jpg"},"./src/images/jake7.jpg":function(e,a,t){e.exports=t.p+"images/jake7.jpg"},"./src/images/jake8.jpg":function(e,a,t){e.exports=t.p+"images/jake8.jpg"},"./src/images/jake9.jpg":function(e,a,t){e.exports=t.p+"images/jake9.jpg"}}]);