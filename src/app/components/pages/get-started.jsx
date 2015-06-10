var React = require('react');
var mui = require('mui');
var CodeBlock = require('../code-example/code-block.jsx');
var FullWidthSection = require('../full-width-section.jsx');
var {Spacing, Typography} = mui.Styles;
var FloatingActionButton = mui.FloatingActionButton;
var FontIcon = mui.FontIcon;

class GetStarted extends React.Component {
  addVisita(){
    //this.context.router.transitionTo('visita');
  }

  getStyles() {
    return {
      root: {
        //paddingTop: Spacing.desktopKeylineIncrement
        paddingTop:'5px'
      },
      details: {
        marginTop: '0'
      },
      buttonContainer:{
        marginTop:'15px',
        width:'100%',
        minHeight: '50px'
      },
      FlatButtonIcon:{

      },
      addButton:{
        float: 'right'
      },
      fullWidthSection: {
        maxWidth: '650px',
        margin: '0 auto'      
      },
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightMedium,
        color: '#f00'//Typography.textDarkBlack
      },
      codeExample: {
        backgroundColor: this.context.muiTheme.palette.canvasColor,
        marginBottom: '32px'
      }
    };
  }

  render() {
   
    var styles = this.getStyles();

    return (
      <div style={styles.root}>
        <FullWidthSection style={styles.FullWidthSection}>
          <div style={styles.buttonContainer}>
            <FloatingActionButton
                linkButton={true} href="#/visita" 
                onClick={this.addVisita} 
                style={styles.addButton} 
                label="Secondary"  
                secondary={true} >
                <FontIcon style={styles.FlatButtonIcon} className="muidocs-icon-action-add"/>
            </FloatingActionButton>
          </div>
          
          <h2 style={styles.headline}>Serra Negra Residence</h2>
          <p style={styles.details}>
           Última Visita: 10/02/2015 <br />
           Asuntos: 3
          </p>

          <h2 style={styles.headline}>Solar Del Rei</h2>
          <p>
           Última Visita: 12/04/2015 <br />
           Asuntos: 6
          </p>

          <h2 style={styles.headline}>Jardim do Sol</h2>
          <p>
           Última Visita: 01/02/2015 <br />
           Asuntos: 1
          </p>

          <h2 style={styles.headline}>Twin Towers</h2>
          <p>
           Última Visita: 22/03/2015 <br />
           Asuntos: 19
          </p>

          <h2 style={styles.headline}>Beira Mar Residence</h2>
          <p>
           Última Visita: 28/04/2015 <br />
           Asuntos: 0
          </p>

          <h2 style={styles.headline}>Vila Catarina</h2>
          <p>
           Última Visita: 06/04/2015 <br />
           Asuntos: 23
          </p>

        </FullWidthSection>
      </div>
    );
  }

}

GetStarted.contextTypes = {
  muiTheme: React.PropTypes.object,
  router: React.PropTypes.func
};

module.exports = GetStarted;
