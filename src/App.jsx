import './App.css'
import calculatorBtn from './assets/images/icon-calculator.svg'

function App() {
  let monthlyRepaymentValue = 0
  const span = <span>${monthlyRepaymentValue}</span>
  // let monthlyRepaymentValue = document.getElementById('monthlyRepaymentValue');
  let totalRepayValue = 0

  function changeFirstDivBackground() {
    const firstInput = document.querySelector('.first-radio-btn')
    firstInput.style.backgroundColor = 'var(--lime-semi-transparent)';
    firstInput.style.border = '1px solid var(--lime)';
  }

  function changeSecondDivBackground() {
    const secondInput = document.querySelector('.second-radio-btn')  
    secondInput.style.backgroundColor = 'var(--lime-semi-transparent)';
    secondInput.style.border = '1px solid var(--lime)';
  }

  return (
    <>
    <section className="container">
      <article className="calculator">
        <h1>Mortgage Calculator</h1>
        <span className="clearAll" 
        onClick={() => {
          const firstInput = document.querySelector('.first-radio-btn')
          const secondInput = document.querySelector('.second-radio-btn')  
          const amountInput = document.getElementById('amount');
          const termtInput = document.getElementById('term');
          const interestInput = document.getElementById('interest-rate');
          const repaymentRadio = document.getElementById('repayment');
          const interestRadio = document.getElementById('interest');
          monthlyRepaymentValue = 0
          amountInput.value = ''
          termtInput.value = ''
          interestInput.value =''
          repaymentRadio.checked = false
          interestRadio.checked = false
          if (!repaymentRadio.checked && !interestRadio.checked) {
            firstInput.style.backgroundColor = ''
            firstInput.style.border = ''
            secondInput.style.backgroundColor = ''
            secondInput.style.border = ''
          }
        }}>Clear All</span>
        <div className="mortgageAmount">
        <label htmlFor='amount' className="label">Mortgage Amount</label>
        <span className="dollarSign">$</span>
        <input id='amount' name='amount' type='text' className="amount"></input>
        </div>
        <div className='two-inputs'>
        <div className="first-input">
          <label htmlFor="term" className="label">Mortgage Term</label>
          <input type='text' id="term" name="term"></input>
          <span className="years">years</span>
        </div>
        <div className="second-input">
          <label htmlFor="interest-rate" className="label">Interest Rate</label>
          <input type='text' id="interest-rate" name="interest-rate"></input>
          <span className="percent">%</span>
        </div>
        </div>
        <label className="label">Mortgage Type</label>
        <div className="radio-btn">
          <div className="first-radio-btn two-radio-btn">
          <input  onClick={changeFirstDivBackground} type="radio" value="Repayment" id="repayment" name="repayment" className='radio'/><label htmlFor="repayment">Repayment</label>
          </div>
          <div className="second-radio-btn two-radio-btn">
          <input  onClick={changeSecondDivBackground} type='radio' value="Interest Only" name="interest" id="interest"/><label htmlFor="interest" className='radio'>Interest Only</label>
          </div>
        </div>
        <button onClick={() => {
          const inputs = document.querySelector('input').value
          return console.log(inputs)
        }}><img src={calculatorBtn}/>Calculate Repayments</button>
      </article>
      <article className='results'>
        <h2>Your results</h2>
        <p className="results-description">Your results are shown below based on the information you provided. To adjust the results, edit the form and click {"'calculate repayments'"} again</p>
        <div className='monthlyRepayment'>
          <p className="monthlyRepayment-text">Your monthly repayments</p>
          <p className="value" id='monthlyRepaymentValue'>{span}</p>
          <hr/>
          <p className="monthlyRepayment-text">Total you will repay over the term</p>
          <p className="second-value">${totalRepayValue}</p>
        </div>
      </article>
    </section>
    </>
  )
}

export default App