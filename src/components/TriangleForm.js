import React from 'react'

const TriangleForm = Component => 
  class TriangleComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { form: props.initialState, result: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }
  handleSubmit(e) {
     e.preventDefault()
     const result = this.triangleTypeSolver(this.state.form)
     this.setState({ result })
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value      
    this.setState(state => ({form: {...state.form, ...{[name] : value}}})) 
  }

  reset(e) {
    e.persist()
    ts.ui.Dialog.confirm('Are you sure?', {
      onaccept: function() { 
        
        ts.ui.Notification.success('Values cleared')
      },
      oncancel: function() {
        ts.ui.Notification.success('Finish the test')
      }
    })
  }

  triangleTypeSolver(vals) {
    if ((vals.sideA == vals.sideB) || (vals.sideB == vals.sideC) || (vals.sideA == vals.sideC)) {
      if (vals.sideA == vals.sideB && vals.sideB == vals.sideC)
        return "equilateral"
      return "isosceles"
    }
    return "scalene"
  }

  render() {
    const { initialState, ...rest } = this.props
    const { form, result  } = this.state
    return React.createElement(Form, {
      state: { ...form, result },
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      reset: this.reset
    })
  }
}

const Form = ({state, handleSubmit, handleChange, reset}) => 
   (<div className="container">
        <div className="row">
            <div className="col">
                <form data-ts="Form" onSubmit={handleSubmit}>
                  <fieldset>
                    <label>
                      <span> Side A:</span>
                        <input
                          type="number"
                          name="sideA"
                          value={state.sideA}
                          onChange={handleChange}
                        />
                    </label>
                    <label>
                      <span> Side B:</span>
                        <input
                          type="number"
                          name="sideB"
                          value={state.sideB}
                          onChange={handleChange}
                        />
                    </label>
                    <label>
                      <span> Side C:</span>
                        <input
                          type="number"
                          name="sideC"
                          value={state.sideC}
                          onChange={handleChange}
                        />
                    </label>
                    <button data-ts="Button" className="ts-primary submit-button" type="button" onClick={reset}>
                        <span>Clear</span>
                    </button>
                    <button data-ts="Button" className="ts-primary submit-button" type="submit">
                        <span>Submit</span>
                    </button>
                  </fieldset>
              </form>
            </div>
            <div className="col">
              Triangle type :
              <p className="result-class"> { state.result } </p>
            </div>
        </div>
    </div>
)

export default TriangleForm(Form)