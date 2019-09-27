import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../../templates/Main'
import { getStatus } from './statusActions'
import ShowGridList from '../../templates/ShowGridList'

class StatusShow extends Component {

  componentWillMount() {
    this.props.getStatus(this.props.match.params.id)
  }

  render() {
    const obj = this.props.status || []
    
    return (
      <Main title="Status" >
        <div className="display-4">Status</div>
        <div className="status">

          <ShowGridList label="Status"
            value={obj.status} />

        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  status: state.statusState.status
})

const mapDispatchToProps = dispatch => bindActionCreators({ getStatus }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StatusShow)