
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

  plusHTML($elm, data) {
    $elm.innerHTML = data
  }

  addAfterEndHTML($elm, data) {
    $elm.insertAdjacentHTML('afterend', data)
  }

  search(obj, prop = '') {
    return obj[prop.toUpperCase()] || []
  }

  $autocomplete () {
    return this.$('#autocomplete')
  }

  handler(DataList, Option) {
    const createList = () => {
      const getOptions = (value) => {
        const [first] = value
        return this.search(this.list, first)
      }

      const options = array => array.map(n => Option(n)) 

      if (!this.$autocomplete()) {
        this.addAfterEndHTML(this.$input, DataList('autocomplete'))
      }

      this.plusHTML(
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