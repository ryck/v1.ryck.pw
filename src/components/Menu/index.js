import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toggleMenu from '../../actions/ui/menu'
import Menu from './Menu'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMenu,
    },
    dispatch
  )

const MenuContainer = connect(
  undefined,
  mapDispatchToProps
)(Menu)

export default MenuContainer
