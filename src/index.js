import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scripts/component/nav-bar.js'
import './scripts/component/chart.js'
import './scripts/view/view-table';
import './scripts/component/data-covid.js';
import search from './scripts/view/view-search.js';

document.getElementById('searchElement').onkeyup = () => search();

