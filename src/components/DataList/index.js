import Option from '../Option'

const DataList = (opts, id) => (`
<datalist
data-list="auto"
id="${id}"
class="datalist">
  ${opts.map(str => Option(str)).join('')}
</datalist>`)

export default DataList