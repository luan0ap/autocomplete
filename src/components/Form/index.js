import './style.css'

const Form = (...props) => (
  `<form action="." class="form-autocomplete">
    ${props.join('')}
  </form>`
)

export default Form