import Vue from 'vue'

import SearchForm from './SearchForm'
import TableForm from './TableForm'
import ModalForm from './ModalForm'
import TableContentForm from './TableContentForm'
import PagingNav from './PagingNav.vue'
import DatePicker from './Datepicker.vue'
import newDatePicker from './newDatepicker.vue'
import Pagination from './Pagination.vue'
import Table from './Table.vue'
import TableList from './TableListComponent.vue'


Vue.component('g-SearchForm', SearchForm)
Vue.component('g-TableForm', TableForm)
Vue.component('g-TableContentForm', TableContentForm)
Vue.component('g-ModalForm', ModalForm)
Vue.component('g-pagingNav', PagingNav)
Vue.component('g-DatePicker', DatePicker)
Vue.component('g-newDatePicker', newDatePicker)
Vue.component('g-Pagination', Pagination)
Vue.component('g-table', Table)
Vue.component('g-tableList', TableList)

