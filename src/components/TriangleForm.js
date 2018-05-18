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
     console.log(JSON.stringify(this.state, null, 4))
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' 
      ? target.checked 
      : target.value
      
    this.setState(state => ({form: {...state.form, ...{[name] : value}}}))    
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
   (
   <form data-ts="Form" onSubmit={handleSubmit}>
    <fieldset>
      <label>
        <span> Side A:</span>
          <input
            type="text"
            name="sideA"
            value={state.sideA}
            onChange={handleChange}
          />
      </label>
      <label>
        <span> Side B:</span>
          <input
            type="text"
            name="sideB"
            value={state.sideB}
            onChange={handleChange}
          />
      </label>
      <label>
        <span> Side C:</span>
          <input
            type="text"
            name="sideC"
            value={state.sideC}
            onChange={handleChange}
          />
      </label>
       <button data-ts="Button" className="ts-primary">
           <span>Submit</span>
        </button>
    </fieldset>
  </form>)

export default TriangleForm(Form)


// (
// <form onSubmit={handleSubmit}>
//         <label>
//           Side A:
//           <input
//             type="text"
//             name="sideA"
//             value={state.sideA}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Side B:
//           <input
//             type="text"
//             name="sideB"
//             value={state.sideB}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Side C:
//           <input
//             type="text"
//             name="sideC"
//             value={state.sideC}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <br />
//         <button data-ts="Button" className="ts-primary">
//           <span>Submit</span>
//         </button>
//       </form>
// )