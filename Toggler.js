"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TogglerButton = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by guillaumelebedel on 23/12/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Toggler = (function (_React$Component) {
    _inherits(Toggler, _React$Component);

    function Toggler(props) {
        _classCallCheck(this, Toggler);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toggler).call(this, props));

        _this.handleToggling = function () {
            //execute action corresponding to the current toggle state
            _this.props.actions[_this.state.toggleState]();
            //goes back to first toggle state if it's the last one
            if (_this.state.toggleState == _this.props.names.length - 1) {
                _this.setState({ toggleState: 0 });
            }
            //otherwise increment the toggleState by one
            else {
                    _this.setState({ toggleState: _this.state.toggleState + 1 });
                }
        };

        _this.state = {
            toggleState: _this.props.start
        };
        return _this;
    }

    /**
     * increment the toggeling state (index of both actions and names props array)
     * <br/>execute the action of the current toggle state
     */

    _createClass(Toggler, [{
        key: "render",
        value: function render() {
            var allClasses = this.props.styleClasses;
            var toggleState = this.state.toggleState;
            //get the class from the style props array depending on the current toggle state
            var actualClass = allClasses.length > toggleState && allClasses[toggleState] || allClasses[allClasses.length - 1];
            return _react2.default.createElement(
                "div",
                { className: "react-toggler " + actualClass, onClick: this.handleToggling },
                this.props.names[toggleState]
            );
        }
    }]);

    return Toggler;
})(_react2.default.Component);

/**
 * Extends the original {Toggler} class to create a button instead of a div.
 */

Toggler.defaultProps = {
    names: ["my toggler"],
    actions: [],
    start: 0,
    styleClasses: [""]
};
Toggler.propTypes = {
    //array of names that the toggler will cycle through when being clicked
    names: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
    //array of functions that the toggler will cycle through when being clicked
    actions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
    //array of classes to be applied to the toggler when cycling through toggling state
    styleClasses: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    //where we start in the above arrays
    start: _react2.default.PropTypes.number
};
exports.default = Toggler;

var TogglerButton = exports.TogglerButton = (function (_Toggler) {
    _inherits(TogglerButton, _Toggler);

    function TogglerButton(props) {
        _classCallCheck(this, TogglerButton);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TogglerButton).call(this, props));
    }

    _createClass(TogglerButton, [{
        key: "render",
        value: function render() {
            var allClasses = this.props.styleClasses;
            var toggleState = this.state.toggleState;
            var actualClass = allClasses.length > toggleState && allClasses[toggleState] || allClasses[allClasses.length - 1];
            return _react2.default.createElement(
                "button",
                { className: "react-toggler " + actualClass, onClick: this.handleToggling },
                this.props.names[toggleState]
            );
        }
    }]);

    return TogglerButton;
})(Toggler);