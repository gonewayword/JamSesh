'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      username: '',
      email: ''
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Sign Up'
        ),
        React.createElement(
          'form',
          null,
          React.createElement('input', { type: 'text', value: this.state })
        )
      );
    }
  }]);

  return Signup;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2luZ3VwLmpzeCJdLCJuYW1lcyI6WyJTaWdudXAiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLGFBQU87QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRTtBQUFBO0FBQUE7QUFDRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLRixLQUEvQjtBQURGO0FBSEYsT0FERjtBQVNEOzs7O0VBbkJrQkcsTUFBTUMsUyIsImZpbGUiOiJzaW5ndXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TaWduIFVwPC9oMz5cblxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19