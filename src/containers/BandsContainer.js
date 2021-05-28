import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const array = this.props.bands.map(band => <li>{band}</li>)
    // debugger
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {array}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})}
}

const mapStateToProps = state => {
  debugger
  return {bands: state.bands}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
