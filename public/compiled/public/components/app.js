'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.jsx loaded');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'renderFromLocation',
    value: function renderFromLocation() {
      var loc = window.location.pathname;
      if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/index.html') {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            'Welcome!'
          ),
          React.createElement(
            'h4',
            null,
            'If you have an account, ',
            React.createElement(
              'a',
              { href: 'signin.html' },
              'sign in!'
            )
          ),
          React.createElement(
            'h4',
            null,
            'If you\'re new here, ',
            React.createElement(
              'a',
              { href: 'signup.html' },
              'sign up!'
            )
          )
        );
      } else {
        return React.createElement(
          'div',
          null,
          'You\'re not on the index :( '
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        this.renderFromLocation()
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiQXBwIiwicHJvcHMiLCJsb2MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVuZGVyRnJvbUxvY2F0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLGdCQUFaOztJQUNNQyxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFFbEI7Ozs7eUNBQ29CO0FBQ25CLFVBQUlDLE1BQU1DLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCO0FBQ0EsVUFBSUgsUUFBUSxHQUFSLElBQWVBLFFBQVEsOEVBQTNCLEVBQTJHO0FBQ3pHLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFBQTtBQUFBLGdCQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFBNUIsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQXdCO0FBQUE7QUFBQSxnQkFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBQXhCO0FBSEYsU0FERjtBQU9ELE9BUkQsTUFRTztBQUNMLGVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBR0Q7QUFDRjs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFRyxhQUFLSSxrQkFBTDtBQUZILE9BREY7QUFNRDs7OztFQTNCZUMsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwLmpzeCBsb2FkZWQnKTtcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlckZyb21Mb2NhdGlvbigpIHtcbiAgICBsZXQgbG9jID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChsb2MgPT09ICcvJyB8fCBsb2MgPT09ICcvVXNlcnMvbWFyaW5hY2VyYW1lL0RvY3VtZW50cy9naXRpbW1lcnNpb24vb3BzcGFyay9KYW1TZXNoL3B1YmxpYy9pbmRleC5odG1sJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+V2VsY29tZSE8L2gyPlxuICAgICAgICAgIDxoND5JZiB5b3UgaGF2ZSBhbiBhY2NvdW50LCA8YSBocmVmPVwic2lnbmluLmh0bWxcIj5zaWduIGluITwvYT48L2g0PlxuICAgICAgICAgIDxoND5JZiB5b3UncmUgbmV3IGhlcmUsIDxhIGhyZWY9XCJzaWdudXAuaHRtbFwiPnNpZ24gdXAhPC9hPjwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5Zb3UncmUgbm90IG9uIHRoZSBpbmRleCA6KCA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJGcm9tTG9jYXRpb24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==