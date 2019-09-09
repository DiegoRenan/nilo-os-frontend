import './Company.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../../templates/Main'
import Grid from '../../templates/Grid'
import { getCompany } from './companiesActions'

class CompanyShow extends Component {

  componentWillMount() {
    this.props.getCompany(this.props.match.params.id)
  }
  
  render() {
    const obj = this.props.company || []

    console.log(obj)
    return (
      <Main title="Empresa" >
        <div className="display-4">Empresa</div>
        <div className="company">
          <div className='row'>
            <Grid cols="2 2 2 2">
              <label> Nome: </label>
            </Grid>
            <Grid cols="10 10 10 10">
              {obj.name}
            </Grid>
          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({ company: state.companiesState.company })
const mapDispatchToProps = dispatch => bindActionCreators({ getCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyShow)