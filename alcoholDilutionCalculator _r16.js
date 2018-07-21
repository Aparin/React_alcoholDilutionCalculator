
  
  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {m1: '', sp: '', ep: ''};

      this.onMlChange = this.onMlChange.bind(this);
      this.onSpChange = this.onSpChange.bind(this);
      this.onEpChange = this.onEpChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      const ml = Number(this.state.ml);
      const sp = Number(this.state.sp);
      const ep = Number(this.state.ep);
      
      if (ml === 0 || sp === 0 || ep === 0) {
        out(`<p style='color:red'>Введите все значения, сейчас ml = ${ml}, sp = ${sp}, ep = ${ep}</p>`);
      }
      else if (ml !== Number(ml) || sp !== Number(sp) || ep !== Number(ep) ) {out(`<p style='color:red'>Все значения дожны быть числами. Десятичные значения пишите через точку</p>`);}
      else if (sp > 100 || ep > 100 || sp <= 0 || ep <= 0) out(`<p style='color:red'>Концентрация не может быть больше 100%, а также меньше или равно 0!</p>`);
      else  out(ml + sp + ep); 
      event.preventDefault();
    }

    onMlChange(event) {
      this.setState({ml: event.target.value});
    }
    onSpChange(event){
      this.setState({sp: event.target.value});
    }
    onEpChange(event){
      this.setState({ep: event.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <h2>Калькулятор разбавления спирта</h2>
          <p>Введите объём спирта в миллилитрах: <br />
          <label><input size='35' type="text" name="ml" value={this.state.ml}
                           onChange={this.onMlChange}/></label></p>
          <p>Введите % начальной крепости спирта: <br />
            <label><input size='35' type="text" name="sp" value={this.state.sp}
                            onChange={this.onSpChange}/></label></p>
          <p>Введите нужный % крепости: <br />
            <label><input size='35' type="text" name="ep" value={this.state.ep}
                            onChange={this.onEpChange}/></label></p>
          <p><input type="submit" value="Посчитать" /></p>
        </form>
      );
    }
  }

const area = document.getElementById('alcoholDilutionCalculator');
ReactDOM.render (<Form />, area);

  const out = (mess) => {
    const res = document.getElementById('res');
    res.innerHTML = mess;
  }