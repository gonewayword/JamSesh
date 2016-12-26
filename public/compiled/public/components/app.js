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
        return React.createElement(Landing, null);
      }
      if (loc === '/signin.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signin.html') {
        return React.createElement(Signin, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiQXBwIiwicHJvcHMiLCJsb2MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVuZGVyRnJvbUxvY2F0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLGdCQUFaOztJQUVNQyxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFFbEI7Ozs7eUNBQ29CO0FBQ25CLFVBQUlDLE1BQU1DLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCO0FBQ0EsVUFBSUgsUUFBUSxHQUFSLElBQWVBLFFBQVEsOEVBQTNCLEVBQTJHO0FBQ3pHLGVBQU8sb0JBQUMsT0FBRCxPQUFQO0FBQ0Q7QUFDRCxVQUFJQSxRQUFRLGNBQVIsSUFBMEJBLFFBQVEsK0VBQXRDLEVBQXVIO0FBQ3JILGVBQU8sb0JBQUMsTUFBRCxPQUFQO0FBQ0Q7QUFDRjs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFRyxhQUFLSSxrQkFBTDtBQUZILE9BREY7QUFNRDs7OztFQXRCZUMsTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnYXBwLmpzeCBsb2FkZWQnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyRnJvbUxvY2F0aW9uKCkge1xuICAgIGxldCBsb2MgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKGxvYyA9PT0gJy8nIHx8IGxvYyA9PT0gJy9Vc2Vycy9tYXJpbmFjZXJhbWUvRG9jdW1lbnRzL2dpdGltbWVyc2lvbi9vcHNwYXJrL0phbVNlc2gvcHVibGljL2luZGV4Lmh0bWwnKSB7XG4gICAgICByZXR1cm4gPExhbmRpbmcgLz47XG4gICAgfVxuICAgIGlmIChsb2MgPT09ICcvc2lnbmluLmh0bWwnIHx8IGxvYyA9PT0gJy9Vc2Vycy9tYXJpbmFjZXJhbWUvRG9jdW1lbnRzL2dpdGltbWVyc2lvbi9vcHNwYXJrL0phbVNlc2gvcHVibGljL3NpZ25pbi5odG1sJykge1xuICAgICAgcmV0dXJuIDxTaWduaW4gLz47XG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAge3RoaXMucmVuZGVyRnJvbUxvY2F0aW9uKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=