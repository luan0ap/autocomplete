
export default class Autocomplete {
  constructor($input, list) {
    this.$input = $input
    this.list = list
  }

  $(selector) {
    return document.querySelector(selector)
  }

  keydown(cb) {
    return this.$input.addEventListener('keydown', cb)
  }

  html($elm, data) {
    $elm.innerHTML = data
  }

  addAfterEndHTML($elm, data) {
    return $elm.insertAdjacentHTML('afterend', data)
  }

  get(obj, prop = '') {
    return obj[prop.toUpperCase()] || []
  }

  $autocomplete () {
    return this.$('[data-js="autocomplete"]')
  }

  handler(DataList, Option) {
    const createList = () => {
      const getOptions = ([first]) => this.get(this.list, first)

      const options = array => array.map(n => Option(n))

      if (!this.$autocomplete()) {
        this.addAfterEndHTML(this.$input, DataList())
      }

      this.html(
        this.$autocomplete(),
        options(getOptions(this.$input.value)).join('')
      )
    }
    
    setTimeout(createList, 300)
  }

  create(DataList = () => { }, Option = () => {}) {
    return this.keydown(this.handler.bind(this, DataList, Option))
  }
}