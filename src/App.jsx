import './App.css'
import calculatorBtn from './assets/images/icon-calculator.svg'

function App() {
  return (
    <>
    <section className="container">
      <article className="calculator">
        <h1>Mortgage Calculator</h1>
        <span className="clearAll">Clear All</span>
        <label htmlFor='amount' className="label">Moprtgage Amount</label>
        <input id='amount' name='amount' type='text'></input>
        <div className='two-inputs'>
        <div className="first-input">
          <label htmlFor="term" className="label">Mortgage Term</label>
          <input type='text' id="term" name="term"></input>
        </div>
        <div className="second-input">
          <label htmlFor="interest-rate" className="label">Interest Rate</label>
          <input type='text' id="interest-rate" name="interest-rate"></input>
        </div>
        </div>
        <label className="label">Mortgage Type</label>
        <div className="radio-btn">
          <div className="first-radio-btn">
          <input type="radio" value="Repayment" id="repayment" name="repayment"/><label htmlFor="repayment">Repayment</label>
          </div>
          <div className="second-radio-btn">
          <input type='radio' value="Interest Only" name="interest" id="interest"/><label htmlFor="interest">Interest Only</label>
          </div>
        </div>
        <button><img src={calculatorBtn}/>Calculate Repayments</button>
      </article>
      <article className='results'>
        <h2>Your results</h2>
        <p className="results-description">Your results are shown below based on the information you provided. To adjust the results, edit the form and click {"'calculate repayments'"} again</p>
        <div className='monthlyRepayment'>
          <p className="monthlyRepayment-text">Your monthly repayments</p>
          <p className="value">$1,797.74</p>
          <hr/>
          <p className="monthlyRepayment-text">Total you will repay over the term</p>
          <p className="second-value">$539,322.94</p>
        </div>
      </article>
    </section>
    </>
  )
}

export default App