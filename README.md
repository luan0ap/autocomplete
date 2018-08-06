# Autocomplete

A autocomplete build thought in performance for dalycode problem. 

## Getting Started

The script is flexible, for use the Autocomplete separadely, just make:

```
import Autocomplete from './Autocomplete'
import data from './list'

// DataList component 
const DataList = () => (`
<datalist
  data-js="autocomplete"
  id="autocomplete"
  class="datalist">
</datalist>`)

// Option component
const Option = str => (`<option value="${str}">`)

// Get the input
const $input = document.querySelector('input')

// Instance
const List = new Autocomplete( $input, data )

// Create a datalist using this function, passing the Datalist component and Option component
List.create(DataList, Option)
```

**OBS:** The list should are organized by letter, sample:

```
{
  A: [
    // Letters that start with letter A
    'anonymous',
    'assistant'
  ]

  B: [
    // Letters that start with letter B
    'ball',
    'brother,
  ]
}
```

### Prerequisites

- [json-server](https://www.npmjs.com/package/json-server)

### Installing

Just clone this repository

`git clone https://github.com/luan0ap/autocomplete`

Install all dependencies

`npm i`

And execute using

`npm start`