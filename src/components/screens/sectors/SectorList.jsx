import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadSectors, remove } from './sectorsActions'

import Icon from '../../templates/Icon'

class SectorList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadSectors()
  }

  renderRows() {
    let sectors = this.props.sectors || []
    return sectors.map(sector => (
      <tr key={sector.id}>
        <td><Link to={`show_sector/`+sector.id}> {sector.attributes.name} </Link></td>
        <td> <Link to={`edit_sector/`+sector.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(sector.id)} ><Icon icon='trash' /> </Link> </td>
      </tr>
    ))
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th> - </th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ sectors: state.sectorState.sectors.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadSectors, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SectorList)