
export default class Autocomplete {
  constructor($input, list) {
    this.$input = $input
    this.list = list
  }

  keydown (cb) {
    return this.$input.addEventListener('keydown', cb)
  }

  html ($elm, data) {
    $elm.insertAdjacentHTML('afterend', data)
  }

  handler (DataList) {
    const createList = () => {
      const [first] = this.$input.value
      const search = this.list[first.toUpperCase()]
      this.html(this.$input, DataList(search, 'auto'))
    }

    setTimeout(createList, 300)
  }

  create(DataList = () => { }) {
    return this.keydown(this.handler.bind(this, DataList))
  }
}