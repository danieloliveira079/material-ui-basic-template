var React = require('react');
var Router = require('react-router');
var mui = require('mui');
var {MenuItem, LeftNav} = mui;
var {Colors, Spacing, Typography} = mui.Styles;

var menuItems = [
    { route: 'get-started', text: 'Minhas Visitas' },
    { route: 'assunto', text: 'Assuntos' },
    { route: 'visita', text: 'Nova Visita' },
    { type: MenuItem.Types.SUBHEADER, text: 'Ferramentas' },
    { type: MenuItem.Types.LINK, payload: '#', text: 'Sincronizar' },
    { type: MenuItem.Types.LINK, payload: '#', text: 'Agenda' },
    { type: MenuItem.Types.LINK, payload: '#', text: 'Mensagens' },
    { type: MenuItem.Types.LINK, payload: '#', text: 'Sair' },

  ];

class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  render() {
    var header = (
      <div style={this.getStyles()} onTouchTap={this._onHeaderClick}>
        Menu
      </div>
    );

    return (
      <LeftNav 
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick() {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;
