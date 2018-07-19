const calc = () => {
    const ml = document.getElementById('ml').value;
    const sp = document.getElementById('sp').value;
    const ep = document.getElementById('ep').value;
    console.log(ml + sp + ep);
  }
  
  const form = (
          <form onSubmit = {calc}>        
              <p>Введите объём спирта в миллилитрах: <br />
              <input size='35' type='text' id ='ml'       
                ></input></p>          
              <p>Введите % начальной крепости спирта: <br />
              <input size='35' type='text' id ='sp'></input></p>             
              <p>Введите нужный % крепости: <br />
              <input size='35' type='text' id ='ep'></input></p>  
      <button onClick={calc}>Посчитать</button>
          </form>
  );
  
  const area = document.getElementById('alcoholDilutionCalculator');
  ReactDOM.render (form, area);
  
  const res = document.getElementById('res');
  res.innerHTML = "Hello";