import Option from '../Option'

const DataList = opts => (`
<datalist
data-list="auto"
id="auto"
class="datalist">
  ${opts.map(str => Option(str)).join('')}
</datalist>`)

export default DataList