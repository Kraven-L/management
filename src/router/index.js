import Vue from 'vue'
import Router from 'vue-router'
import ShareHolderList from '@/components/shareHolder/ShareHolderList'
import AddShareHolder from '@/components/shareHolder/AddShareHolder'
import AddCompany from '@/components/company/AddCompany'
import CompanyInfo from '@/components/CompanyInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShareHolderList',
      component: ShareHolderList
    },
    {
      path: '/addshareholder',
      name: 'AddShareHolder',
      component: AddShareHolder
    },
    {
      path: '/companyinfo',
      name: 'CompanyInfo',
      component: CompanyInfo
    },
    {
      path: '/addcompany',
      name: 'AddCompany',
      component: AddCompany
    }
  ]
})
