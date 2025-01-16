import './App.css'
import calculatorBtn from './assets/images/icon-calculator.svg'

function App() {
  return (
    <>
    <section className="container">
      <article className="calculator">
        <h1>Mortgage Calculator</h1>
        <span className="clearAll">Clear All</span>
        <label htmlFor='amount'>Moprtgage Amount</label>
        <input id='amount' name='amount' type='text'></input>
        <div className='two-inputs'>
        <div>
          <label>Mortgage Term</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Interest Rate</label>
          <input type='text'></input>
        </div>
        </div>
        <label>Mortgage Type</label>
        <input type="radio" value="Repayment"/>
        <input type='radio' value="Interest Only"/>
        <button><img src={calculatorBtn}/>Calculate Repayments</button>
      </article>
      <article className='results'>
        <h2>Your results</h2>
        <p className="results-description">Your results are shown below based on the information you provided. To adjust the results, edit the form and click {"'calculate repayments'"} again</p>
        <div className='monthlyRepayment'>
          <p>Your monthly repaymetns</p>
          <p>$1,797.74</p>
          <hr/>
          <p>Total you will repay over the term</p>
          <p>$539,322.94</p>
        </div>
      </article>
    </section>
    </>
  )
}

export default App