import Autocomplete from './lib/Autocomplete'
import { get } from './utils/get'
import App from './App'
import Form from './components/Form'
import Input from './components/Input'
import DataList from './components/DataList'
import Option from './components/Option'

const $App = document.querySelector('[data-js="App"]')

$App.innerHTML = App(
  Form(
    Input('autocomplete')
  )
)

get('http://localhost:3000/names')
  .then(list => new Autocomplete(document.querySelector('[data-js="input"]'), list))
  .then(obj => obj.create(DataList, Option))
