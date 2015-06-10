var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var mui = require('mui');
var Menu = mui.Menu;
var FullWidthSection = require('../full-width-section.jsx');
var TextField = mui.TextField;
var DropDownMenu = mui.DropDownMenu;
var DatePicker = mui.DatePicker;
var RaisedButton = mui.RaisedButton;
var IconButton = mui.IconButton;
var FloatingActionButton = mui.FloatingActionButton;
var FontIcon = mui.FontIcon;

var {Spacing, Colors} = mui.Styles;
var {StyleResizable, StylePropable} = mui.Mixins;

 var menuItems = [
      { payload: '1', text: 'Serra Negra Residence' },
      { payload: '2', text: 'Solar Del Rei' },
      { payload: '3', text: 'Jardim do Sol' },
      { payload: '4', text: 'Twin Towers' },
      { payload: '5', text: 'Beira Mar Residence' },
      { payload: '6', text: 'Vila Catarina' }
    ];

var Visita = React.createClass({

  mixins: [StyleResizable, StylePropable],

  contextTypes: {
    router: React.PropTypes.func
  },
  propTypes: {
    menuItems: React.PropTypes.array
  },

  getStyles: function(){
    var subNavWidth = Spacing.desktopKeylineIncrement * 3 + 'px';
    var styles = {
      root: {
        paddingTop: '15px'
      },
      listaObras:{
             width:'100%',   
             marginLeft:'-25px'
      },
      buttonContainer:{
        marginTop:'5px',
        width:'100%',
        minHeight: '50px'
      },
      addPhotos:{
        float:'right'
      },
      rootWhenMedium: {
        position: 'relative'
      },
      secondaryNav: {
        borderTop: 'solid 1px ' + Colors.grey300,
        overflow: 'hidden'
      },
      content: {
        boxSizing: 'border-box',
        padding: Spacing.desktopGutter + 'px',
        maxWidth: (Spacing.desktopKeylineIncrement * 14) + 'px'
      },
      secondaryNavWhenMedium: {
        borderTop: 'none',
        position: 'absolute',
        top: '64px',
        width: subNavWidth
      },
      contentWhenMedium: {
        marginLeft: subNavWidth,
        borderLeft: 'solid 1px ' + Colors.grey300,
        minHeight: '800px'
      },
      button:{
        marginRight:'10px',
        marginTop:'15px'
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) || 
        this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.root = this.mergeStyles(styles.root, styles.rootWhenMedium);
      styles.secondaryNav = this.mergeStyles(styles.secondaryNav, styles.secondaryNavWhenMedium);
      styles.content = this.mergeStyles(styles.content, styles.contentWhenMedium);
    }
    
    return styles;
  },

  render: function() {
    var styles = this.getStyles();
    return (
      <div style={styles.root}>
        <FullWidthSection style={styles.root}>
         <div style={styles.buttonContainer}>
            <FloatingActionButton
                linkButton={true} href="#/visita" 
                style={styles.addPhotos} 
                label="Secondary"  
                secondary={true} >
                <FontIcon style={styles.FlatButtonIcon} className="muidocs-icon-action-add"/>
            </FloatingActionButton>
          </div>
           <TextField hintText="Visita efetuada por" />
            <DropDownMenu style={styles.listaObras} autoWidth={false} menuItems={menuItems} />
            <DatePicker autoOk={true} hintText="Data" />
            <RaisedButton linkButton={true} href="#/visita" style={styles.button} secondary={true} label="Salvar" />
            <RaisedButton linkButton={true} href="#/get-started" style={styles.button} secondary={true} label="Cancelar" />
        
        </FullWidthSection>
      </div>
    );
  },
  
});

module.exports = Visita;
