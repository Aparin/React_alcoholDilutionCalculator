class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {ml: '', sp: '', ep: ''};

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
        out(`<p style='color:red'>Введите все значения, сейчас объём = ${ml}, начальная крепость = ${sp}, конечная крепость = ${ep}</p>`);
      }
      else if (ml !== Number(ml) || sp !== Number(sp) || ep !== Number(ep) ) {out(`<p style='color:red'>Все значения дожны быть числами. Десятичные значения пишите через точку</p>`);}
      else if (sp > 100 || ep > 100 || sp < 50 || ep < 15) out(`<p style='color:red'>Концентрация не может быть больше 100%, а также меньше указанных значений (начальная меньше 50, конечная - меньше 15)!</p>`);
      else if (sp <= ep) out(`<p style='color:red'>Начальная крепость не может быть меньше или равной конечной!</p>`);
      else  out(`<div>Влейте в ваш спирт в ${(ml / 100 * calc(sp, ep)).toFixed(1)} мл. воды</div>`); 
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
                           onChange={this.onMlChange} placeholder="В литре - 1000 мл." /></label></p>
          <p>Введите % начальной крепости спирта: <br />
            <label><input size='35' type="text" name="sp" value={this.state.sp}
                            onChange={this.onSpChange} placeholder="От 95 до 50"/></label></p>
          <p>Введите нужный % крепости: <br />
            <label><input size='35' type="text" name="ep" value={this.state.ep}
                            onChange={this.onEpChange} placeholder="От 90 до 15" /></label></p>
          <p><input type="submit" value="Рассчитать" /></p>
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
  
  const fertman = [
    [95, 6.4, 13.3, 20.9, 29.5, 39.1, 50.1, 67.9, 78, 96, 117.2, 144.4, 178.7, 224.1, 278.1, 382, 540], // for 95 persent with step 5 degrees
    [90, 0, 6.6, 13.8, 21.8, 31, 41.4, 53.7, 67.8, 84.7, 105.3, 130.8, 163.3, 206.2, 266.1, 355.8, 505.3], // for 90 persent
    [85, 0, 0, 6.8, 14.5, 23.1, 33, 44.5, 57.9, 73.9, 93.3, 117.3, 148, 188.6, 245.2, 329.8, 471], // for 85 persent
    [80, 0, 0, 0, 7.2, 15.4, 24.7, 35.4, 48.1, 63, 81.2, 104, 132.9, 171.1, 224.3, 304, 436.9], // for 80 persent 
    [75, 0, 0, 0, 0, 7.6, 16.4, 26.5, 38.3, 52.4, 69.5, 90.8, 117.8, 153.6, 203.5, 278.3, 402.8], // for 75 persent 
    [70, 0, 0, 0, 0, 0, 8.2, 17.6, 28.6, 41.7, 57.8, 77.6, 102.8, 136, 182.8, 252.6, 368.8], // for 70 persent 
    [65, 0, 0, 0, 0, 0, 0, 8.8, 19, 31.3, 46, 64.5, 87.9, 118.9, 162.2, 227, 334.9], // for 65 persent 
    [60, 0, 0, 0, 0, 0, 0, 0, 9.5, 20.5, 34.5, 51.4, 73.1, 101.7, 141.7, 201.4, 301.1], // for 60 persent 
    [55, 0, 0, 0, 0, 0, 0, 0, 0, 10.4, 22.9, 38.5, 58.3, 84.5, 121.2, 176, 267.3], // for 55 persent 
    [50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11.4, 25.6, 43.6, 67.5, 100.7, 150.6, 233.6] // for 50 persent 
  ];
/* Format's control
for (let i = 0; i < fertman.length; i++) {
  let arr = fertman[i];
  console.log('i = ' + i + 'pers = ' + arr[0], arr.length);
}
*/
const calc = (start, end) => {
  let flagS = false;
  let flagE = false;
  if (start % 5 === 0) {flagS = true;}
  if (end % 5 === 0) {flagE = true;}
  
  const sTail = start % 5; // correction factor
  const sHead = start - sTail; // row's head
  const eTail = end % 5; // correction factor
  const eHead = end - eTail; // integer value of second percent (with step 5%)
  const sShift = (95 - sHead) / 5; // row index in the array
  const eShift = (95 - eHead) / 5; // element index in the row
  const hCorFactor = eTail / 5;
  const vCorFactor = 1 - sTail / 5;
  
  let selector; 
  if (flagS && flagE) selector = 1;
  if (flagS && !flagE) selector = 2;
  if (!flagS && flagE) selector = 3;
  if (!flagS && !flagE) selector = 4;
  // console.log(`sHead = ${sHead}, sTail = ${sTail}, eHead = ${eHead}, eTail = ${eTail}, sShift = ${sShift}, eShift = ${eShift}, hCorFactor = ${hCorFactor}, vCorFactor = ${vCorFactor}, selector = ${selector}`);
  
  function letValue(row, pos)  { // obtaining a single value
    return fertman[row][pos];
  }
  
  function calcValueInHorisontalDiapason(ss, es, cf) {
    const v1 = letValue(ss, es);
    const v2 = letValue(ss, es - 1);
    // console.log (`v1 = ${v1}, v2 = ${v2}`);
    
    const res = (eShift - sShift === 1) ? 
        v1 * (1 - cf) :
        v1 - (v1 - v2) * cf;
    // console.log(corFactor);
    
    return res;
  }
  
  function calcValueInVerticalDiapason(ss, es, cf) {
    const v1 = letValue(ss - 1, es);
    const v2 = letValue(ss, es);
    const res = (sHead - eHead === 0) ? 
        v1 * cf :
        v1 - (v1 - v2) * cf;
    // console.log(v1, v2, cf);   
    return res;
  }
  
  switch(selector) {
      case 1 : 
      return letValue(sShift, eShift);
      break;
      
      case 2 : 
      return +(calcValueInHorisontalDiapason(sShift, eShift, hCorFactor)).toFixed(1);
      break;
      
      case 3 : 
      return  +(calcValueInVerticalDiapason(sShift, eShift, vCorFactor)).toFixed(1);
      break;
      
      case 4 : 
      if (!(sShift === 1 && eShift === 1)) {
        const hDiapason1 = calcValueInHorisontalDiapason(sShift - 1, eShift, hCorFactor);
        const hDiapason2 = calcValueInHorisontalDiapason(sShift, eShift, hCorFactor);
        // console.log(`hDiapason1 = ${hDiapason1}, hDiapason2 = ${hDiapason2}`);
        const res = hDiapason1 - (hDiapason1 - hDiapason2) * vCorFactor;
        return  +(res).toFixed(1);
      }
      else {
        return  +(6.4 * (start - end) / 5 ).toFixed(1);
      }
      break;
  }
}
// console.log(calc(94, 91));
