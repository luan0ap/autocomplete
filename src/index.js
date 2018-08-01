import Autocomplete from './lib/Autocomplete'
import { get } from './utils/get'
import App from './App'
import Form from './components/Form'
import Input from './components/Input'

const $App = document.querySelector('[data-js="App"]')

$App.innerHTML = App(
  Form(
    Input()
  )
)

const createData = get('http://localhost:3000/names')
  .then(list => new Autocomplete(document.querySelector('[data-js="input"]'), list))

createData.then(obj => obj.create())
