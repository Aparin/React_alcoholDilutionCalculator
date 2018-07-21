﻿var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = { m1: '', sp: '', ep: '' };

    _this.onMlChange = _this.onMlChange.bind(_this);
    _this.onSpChange = _this.onSpChange.bind(_this);
    _this.onEpChange = _this.onEpChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'onSubmit',
    value: function onSubmit(event) {
      var ml = Number(this.state.ml);
      var sp = Number(this.state.sp);
      var ep = Number(this.state.ep);

      if (ml === 0 || sp === 0 || ep === 0) {
        out('<p style=\'color:red\'>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u0435\u0439\u0447\u0430\u0441 ml = ' + ml + ', sp = ' + sp + ', ep = ' + ep + '</p>');
      } else if (ml !== Number(ml) || sp !== Number(sp) || ep !== Number(ep)) {
        out('<p style=\'color:red\'>\u0412\u0441\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u0430\u043C\u0438. \u0414\u0435\u0441\u044F\u0442\u0438\u0447\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0442\u043E\u0447\u043A\u0443</p>');
      } else if (sp > 100 || ep > 100 || sp <= 0 || ep <= 0) out('<p style=\'color:red\'>\u041A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 100%, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E 0!</p>');else if (sp <= ep) out('<p style=\'color:red\'>\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439!</p>');else out(ml + sp + ep);
      event.preventDefault();
    }
  }, {
    key: 'onMlChange',
    value: function onMlChange(event) {
      this.setState({ ml: event.target.value });
    }
  }, {
    key: 'onSpChange',
    value: function onSpChange(event) {
      this.setState({ sp: event.target.value });
    }
  }, {
    key: 'onEpChange',
    value: function onEpChange(event) {
      this.setState({ ep: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.onSubmit },
        React.createElement(
          'h2',
          null,
          '\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0440\u0430\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0440\u0442\u0430'
        ),
        React.createElement(
          'p',
          null,
          '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0451\u043C \u0441\u043F\u0438\u0440\u0442\u0430 \u0432 \u043C\u0438\u043B\u043B\u0438\u043B\u0438\u0442\u0440\u0430\u0445: ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            React.createElement('input', { size: '35', type: 'text', name: 'ml', value: this.state.ml,
              onChange: this.onMlChange })
          )
        ),
        React.createElement(
          'p',
          null,
          '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 % \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u0438 \u0441\u043F\u0438\u0440\u0442\u0430: ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            React.createElement('input', { size: '35', type: 'text', name: 'sp', value: this.state.sp,
              onChange: this.onSpChange })
          )
        ),
        React.createElement(
          'p',
          null,
          '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0439 % \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u0438: ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            React.createElement('input', { size: '35', type: 'text', name: 'ep', value: this.state.ep,
              onChange: this.onEpChange })
          )
        ),
        React.createElement(
          'p',
          null,
          React.createElement('input', { type: 'submit', value: '\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C' })
        )
      );
    }
  }]);

  return Form;
}(React.Component);

var area = document.getElementById('alcoholDilutionCalculator');
ReactDOM.render(React.createElement(Form, null), area);

var out = function out(mess) {
  var res = document.getElementById('res');
  res.innerHTML = mess;
};

var Fertman = [[6.4, 13.3, 20.9, 29.5, 39.1, 50.1, 67.9, 78, 96, 117.2, 144.4, 178.7, 224.1, 278.1, 382, 540], // for 95 persent with step 5 degrees
[6.6, 13.8, 21.8, 31, 41.4, 53.7, 67.8, 84.7, 105.3, 130.8, 163.3, 206.2, 266.1, 355.8, 505.3], // for 90 persent
[6.8, 14.5, 23.1, 33, 44.5, 57.9, 73.9, 93.3, 117.3, 148, 188.6, 245.2, 329.8, 471], // for 85 persent
[7.2, 15.4, 24.7, 35.4, 48.1, 63, 81.2, 104, 132.9, 171.1, 224.3, 304, 436.9], // for 80 persent 
[7.6, 16.4, 26.5, 38.3, 52.4, 69.5, 90.8, 117.8, 153.6, 203.5, 278.3, 402.8], // for 75 persent 
[8.2, 17.6, 28.6, 41.7, 57.8, 77.6, 102.8, 136, 182.8, 252.6, 368.8], // for 70 persent 
[8.8, 19, 31.3, 46, 64.5, 87.9, 118.9, 162.2, 227, 334.9], // for 65 persent 
[9.5, 20.5, 34.5, 51.4, 73.1, 101.7, 141.7, 201.4, 301.1], // for 60 persent 
[10.4, 22.9, 38.5, 58.3, 84.5, 121.2, 176, 267.3], // for 55 persent 
[11.4, 25.6, 43.6, 67.5, 100.7, 150.6, 233.6] // for 50 persent 
];
// alert(Fertman[0][1]);