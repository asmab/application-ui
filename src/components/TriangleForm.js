import React from 'react'

const TriangleForm = Component => 
  class TriangleComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      form: props.initialState,
      result: {image: require('../img/questionMark.png')},
      error: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // return type of triangle
  triangleTypeSolver(vals) {
    if ((vals.sideA == vals.sideB) || (vals.sideB == vals.sideC) || (vals.sideA == vals.sideC)) {
      if (vals.sideA == vals.sideB && vals.sideB == vals.sideC)
        return {type: "equilateral" ,image: require('../img/equilateral.svg') }
      return {type: "isosceles" ,image: require('../img/isocele.png') }
    }
    return {type: "scalene" ,image: require('../img/scalene.png') }
  }

  // submit form 
  handleSubmit(e) {
     e.preventDefault()

     // submit the form and display triangle type when the form isValid
     if (this.isValid(this.state.form)) {
        const result = this.triangleTypeSolver(this.state.form)
        this.setState({ result })
     } else {
        //show an error notification when : empty input or null value
        ts.ui.Notification.error('Error : all inputs are required and values not null ')
     }
  }

  isValid(inputs) {
    //check if all inputs are filled with a value > 0
    if (inputs.sideA === '' || inputs.sideB === '' || inputs.sideC === '') return false
    else if ( Number(inputs.sideA) === 0 || Number(inputs.sideB) === 0 || Number(inputs.sideC) === 0) return false
    else if ( Number(inputs.sideA) < 0 || Number(inputs.sideB) < 0 || Number(inputs.sideC) < 0) return false
    else return true
  }

  handleError(value) {
    if (Number(value) === 0) return value + ':' + 'Value should be different to zero'
    else if (Number(value) < 0) return value + ':' +'Value should be positive'
    else return ''
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value

    if (value === '') {
      this.setState({ error : ''})
    } else {
      //show an error message if the input value = 0 or value < 0
      const errorMsg = this.handleError(value)
      this.setState({ error: errorMsg })
    }
    this.setState(state => ({form: {...state.form, ...{[name] : value}}})) 
  }
  
  render() {
    const { initialState, ...rest } = this.props
    const { form, result, error } = this.state
    return React.createElement(Form, {
      state: { ...form, result, error },
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    })
  }
}

const Form = ({state, handleSubmit, handleChange, showTriangleImg}) => 
   (<div className="container">
        <div className="row">
            <div className="col">
                <form data-ts="Form" onSubmit={handleSubmit} id="triangleForm">
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
                    <dl className="ts-info">
                      <dt>Info</dt>
                      <dd>The length of side A,B and C</dd>
                    </dl>
                    <p className="error-msg"> { state.error } </p>
                    <button className="ts-primary submit-button" data-ts="Button" type="submit">
                        <span>Submit</span>
                    </button>
                  </fieldset>
              </form>
            </div>
            <div className="col">
              <div className="image-container">
                Triangle type :
                <p className="result-class"> { state.result.type } </p>
                <img className="image-class" src={state.result.image}/>
              </div>
            </div>
        </div>
    </div>
)

export default TriangleForm(Form)