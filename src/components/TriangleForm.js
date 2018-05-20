import React from 'react'

const TriangleForm = Component => 
  class HigherOrderComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { form: props.initialState }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
     e.preventDefault()
     this.state.result = this.triangleTypeSolver(this.state.form)
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' 
      ? target.checked 
      : target.value
      
    this.setState(state => ({form: {...state.form, ...{[name] : value}}})) 
  }

  triangleTypeSolver(vals) {
    if ((vals.sideA == vals.sideB) || (vals.sideB == vals.sideC) || (vals.sideA == vals.sideC)) {
      if ((vals.sideA == vals.sideB) && (vals.sideA == vals.sideC) && (vals.sideB == vals.sideC))
        return "equilateral";
      return "isosceles";
    }
    return "scalene";
  }

  render() {
    const { initialState, ...rest } = this.props
    const { form } = this.state
    return React.createElement(Component, {
      state: form,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    })
  }
}

const Form = ({state, handleSubmit, handleChange}) => 
   (<div>
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
       <button data-ts="Button" className="ts-primary" type="submit">
           <span>Submit</span>
        </button>
    </fieldset>
</form>
<h1> result : {state.result}</h1>
</div>)

export default TriangleForm(Form)