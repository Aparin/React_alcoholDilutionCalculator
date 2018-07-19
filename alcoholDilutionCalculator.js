var calc = function calc() {
    var ml = document.getElementById('ml').value;
    var sp = document.getElementById('sp').value;
    var ep = document.getElementById('ep').value;
    console.log(ml + sp + ep);
  };
  
  var form = React.createElement(
    'form',
    { onSubmit: calc },
    React.createElement(
      'p',
      null,
      '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u044A\u0451\u043C \u0441\u043F\u0438\u0440\u0442\u0430 \u0432 \u043C\u0438\u043B\u043B\u0438\u043B\u0438\u0442\u0440\u0430\u0445: ',
      React.createElement('br', null),
      React.createElement('input', { size: '35', type: 'text', id: 'ml'
      })
    ),
    React.createElement(
      'p',
      null,
      '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 % \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u0438 \u0441\u043F\u0438\u0440\u0442\u0430: ',
      React.createElement('br', null),
      React.createElement('input', { size: '35', type: 'text', id: 'sp' })
    ),
    React.createElement(
      'p',
      null,
      '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0439 % \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u0438: ',
      React.createElement('br', null),
      React.createElement('input', { size: '35', type: 'text', id: 'ep' })
    ),
    React.createElement(
      'button',
      { onClick: calc },
      '\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C'
    )
  );
  
  var area = document.getElementById('alcoholDilutionCalculator');
  ReactDOM.render(form, area);
  
  // var res = document.getElementById('res');
  // res.innerHTML = "Hello";