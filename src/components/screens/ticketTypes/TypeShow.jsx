import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../../templates/Main'
import { getType } from './typeActions'
import ShowGridList from '../../templates/ShowGridList'

class TypeShow extends Component {

  componentWillMount() {
    this.props.getType(this.props.match.params.id)
  }

  render() {
    const obj = this.props.type || []
    
    return (
      <Main title="Type" >
        <div className="display-4">Tipo de Serviço</div>
        <div className="types">

          <ShowGridList label="Tipo"
            value={obj.name} />

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  type: state.typesState.type
})

const mapDispatchToProps = dispatch => bindActionCreators({ getType }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TypeShow)