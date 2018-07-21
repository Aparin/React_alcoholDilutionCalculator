
  
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
      else if (sp <= ep) out(`<p style='color:red'>Начальная крепость не может быть меньше или равной конечной!</p>`);
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
  
  const Fertman = [
    [6.4, 13.3, 20.9, 29.5, 39.1, 50.1, 67.9, 78, 96, 117.2, 144.4, 178.7, 224.1, 278.1, 382, 540], // for 95 persent with step 5 degrees
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