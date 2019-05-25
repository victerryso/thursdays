import Spreadsheet from 'google-sheets-json'

const options = {
  key: '1Q_nYJN5iYNa-NlooEytHTsF6QSI3aqruX8EpAsghhvU',
  id: 'ovfqb6d'
}

const spreadsheet = new Spreadsheet(options.key)

const getRestaurants = new Promise(resolve => {
  spreadsheet.getWorksheet(options.id, (error, result) => resolve(result))
})

export default getRestaurants;