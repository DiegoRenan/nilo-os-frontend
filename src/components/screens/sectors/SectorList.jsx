import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadSectors, remove } from './sectorsActions'

import Icon from '../../templates/Icon'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class SectorList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadSectors()
  }

  removeSector(id) {
    
    confirmAlert( {
      title: 'Confirma pra Deletar',
      message: `O Setor só podera ser removido se não estiver mais vínculado a nenhum ticket. 
                Deseja continuar?`,
      buttons: [
        {
          label: 'Confirmar',
          onClick: () => this.props.remove(id)
        },
        {
          label: 'Cancelar',
          onClick: () => {}
        }
      ]
    });

  }

  renderRows() {
    let sectors = this.props.sectors || []
    return sectors.map(sector => (
      <tr key={sector.id}>
        <td><Link to={`show_sector/`+sector.id}> {sector.attributes.name} </Link></td>
        <td> <Link to={`edit_sector/`+sector.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.removeSector(sector.id)} ><Icon icon='trash' /> </Link> </td>
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