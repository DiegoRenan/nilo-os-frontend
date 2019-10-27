import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import { getSector } from './sectorsActions'
import ShowGridList from '../../templates/ShowGridList'

class SectorShow extends Component {

  componentWillMount() {
    this.props.getSector(this.props.match.params.id)
  }

  render() {
    const obj = this.props.sector || []
    const department = this.props.department || []

    return (
      <Main title="Setor" >
        <div className="display-4">Setor</div>
        <div className="sector">

          <ShowGridList label="Nome"
            value={obj.name} />

          <ShowGridList label="Departamento"
            value={department.name} />

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  sector: state.sectorState.sector,
  department: state.sectorState.department
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSector }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SectorShow)