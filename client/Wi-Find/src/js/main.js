// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Import DataTable
import DataTable from 'datatables.net-dt';
let table = new DataTable('#tabley', {
    responsive: true
});
