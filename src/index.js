import Form from './components/Form'
import Input from './components/Input'
const $App = document.querySelector('[data-js="App"]')

$App.innerHTML = Form(Input('hello'))