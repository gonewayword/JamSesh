'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      if (loc === '/signup.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signup.html') {
        return React.createElement(Signup, null);
      }
      if (loc === '/main.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/main.html') {
        return React.createElement(Main, null);
      }
      if (loc === '/createGroup.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/createGroup.html') {
        return React.createElement(CreateGroup, null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZW5kZXJGcm9tTG9jYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFHbEI7Ozs7eUNBQ29CO0FBQ25CLFVBQUlDLE1BQU1DLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCOztBQUVBLFVBQUlILFFBQVEsR0FBUixJQUFlQSxRQUFRLDhFQUEzQixFQUEyRztBQUN6RyxlQUFPLG9CQUFDLE9BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxjQUFSLElBQTBCQSxRQUFRLCtFQUF0QyxFQUF1SDtBQUNySCxlQUFPLG9CQUFDLE1BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxjQUFSLElBQTBCQSxRQUFRLCtFQUF0QyxFQUF1SDtBQUNySCxlQUFPLG9CQUFDLE1BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxZQUFSLElBQXdCQSxRQUFRLDZFQUFwQyxFQUFtSDtBQUNqSCxlQUFPLG9CQUFDLElBQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxtQkFBUixJQUErQkEsUUFBUSxvRkFBM0MsRUFBaUk7QUFDL0gsZUFBTyxvQkFBQyxXQUFELE9BQVA7QUFDRDtBQUVGOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEdBQUQsT0FERjtBQUVHLGFBQUtJLGtCQUFMO0FBRkgsT0FERjtBQU1EOzs7O0VBbENlQyxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cbiAgcmVuZGVyRnJvbUxvY2F0aW9uKCkge1xuICAgIGxldCBsb2MgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICBpZiAobG9jID09PSAnLycgfHwgbG9jID09PSAnL1VzZXJzL21hcmluYWNlcmFtZS9Eb2N1bWVudHMvZ2l0aW1tZXJzaW9uL29wc3BhcmsvSmFtU2VzaC9wdWJsaWMvaW5kZXguaHRtbCcpIHtcbiAgICAgIHJldHVybiA8TGFuZGluZyAvPjtcbiAgICB9XG4gICAgaWYgKGxvYyA9PT0gJy9zaWduaW4uaHRtbCcgfHwgbG9jID09PSAnL1VzZXJzL21hcmluYWNlcmFtZS9Eb2N1bWVudHMvZ2l0aW1tZXJzaW9uL29wc3BhcmsvSmFtU2VzaC9wdWJsaWMvc2lnbmluLmh0bWwnKSB7XG4gICAgICByZXR1cm4gPFNpZ25pbiAvPjtcbiAgICB9XG4gICAgaWYgKGxvYyA9PT0gJy9zaWdudXAuaHRtbCcgfHwgbG9jID09PSAnL1VzZXJzL21hcmluYWNlcmFtZS9Eb2N1bWVudHMvZ2l0aW1tZXJzaW9uL29wc3BhcmsvSmFtU2VzaC9wdWJsaWMvc2lnbnVwLmh0bWwnKSB7XG4gICAgICByZXR1cm4gPFNpZ251cCAvPjtcbiAgICB9XG4gICAgaWYgKGxvYyA9PT0gJy9tYWluLmh0bWwnIHx8IGxvYyA9PT0gJy9Vc2Vycy9tYXJpbmFjZXJhbWUvRG9jdW1lbnRzL2dpdGltbWVyc2lvbi9vcHNwYXJrL0phbVNlc2gvcHVibGljL21haW4uaHRtbCcpIHtcbiAgICAgIHJldHVybiA8TWFpbiAvPjtcbiAgICB9XG4gICAgaWYgKGxvYyA9PT0gJy9jcmVhdGVHcm91cC5odG1sJyB8fCBsb2MgPT09ICcvVXNlcnMvbWFyaW5hY2VyYW1lL0RvY3VtZW50cy9naXRpbW1lcnNpb24vb3BzcGFyay9KYW1TZXNoL3B1YmxpYy9jcmVhdGVHcm91cC5odG1sJykge1xuICAgICAgcmV0dXJuIDxDcmVhdGVHcm91cCAvPjtcbiAgICB9XG5cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckZyb21Mb2NhdGlvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19