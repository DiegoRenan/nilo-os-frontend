import './Company.css'
import React from 'react'


import Main from '../../templates/Main'
import CompanyForm from './CompanyForm'
import CompanyList from './CompanyList'

export default props =>
  <Main title="Empresas" >
    <div className="display-4">Empresas</div>
    <div className="company">
      <CompanyForm />
      <CompanyList />
    </div>
  </Main>
