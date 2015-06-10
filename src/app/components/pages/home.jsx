var React = require('react');
var Router = require('react-router');
var mui = require('mui');
var RaisedButton = mui.RaisedButton;
var HomeFeature = require('./home-feature.jsx');
var FullWidthSection = require('../full-width-section.jsx');
var ThemeManager = new mui.Styles.ThemeManager().getCurrentTheme();

var {StylePropable, StyleResizable} = mui.Mixins;
var {Colors, Spacing, Typography} = mui.Styles;

var HomePage = React.createClass({

  mixins: [StylePropable, StyleResizable],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    var style = {
      paddingTop: Spacing.desktopKeylineIncrement
    };

    return (
      <div style={style}>
        {this._getHomePageHero()}
        {this._getHomePurpose()}

      </div>
    );
  },

  _getHomePageHero: function() {
    var styles = {
      root: {
        backgroundColor: Colors.cyan500,
        overflow: 'hidden'
      },
      svgLogo: {
        marginLeft: (window.innerWidth * 0.5) - 130 + 'px',
        width: '420px'
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: '575px'
      },
      label: {
        color: ThemeManager.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px'
      },
      demoStyle: {
        margin: '16px 32px 0px 32px'
      },
      h1: {
        color: Colors.darkWhite,
        fontWeight: Typography.fontWeightLight,
      },
      h2: {
        //.mui-font-style-title
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
      },
      nowrap: {
        whiteSpace: 'nowrap'
      },
      taglineWhenLarge: {
        marginTop: '32px'
      },
      h1WhenLarge: {
        fontSize: '56px'
      },
      h2WhenLarge: {
        //.mui-font-style-headline;
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px'
      }
    };

    styles.h2 = this.mergeStyles(styles.h1, styles.h2);

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.tagline = this.mergeStyles(styles.tagline, styles.taglineWhenLarge);
      styles.h1 = this.mergeStyles(styles.h1, styles.h1WhenLarge);
      styles.h2 = this.mergeStyles(styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection style={styles.root}>

      </FullWidthSection>
    );
  },

  _getHomePurpose: function() {
    var styles = {
      root: {
        backgroundColor: Colors.grey200
      },
      content: {
        maxWidth: '700px',
        padding: 0,
        margin: 0,
        fontWeight: Typography.fontWeightLight,
        //.mui-font-style-title
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        color: Typography.textDarkBlack
      }
    };

    return (
      <FullWidthSection style={styles.root} useContent={true} contentStyle={styles.content} contentType="p" className="home-purpose">
       <h2>Material-UI Basic Template</h2>
      </FullWidthSection>
    );
  },

  _getHomeFeatures: function() {
    var styles = {maxWidth: '906px'};
    return (
      <FullWidthSection useContent={true} contentStyle={styles}>

      </FullWidthSection>
    );
  },

  _getHomeContribute: function() {
    var styles = {
      root: {
        backgroundColor: Colors.grey200,
        textAlign: 'center'
      },
      h3: {
        margin: '0',
        padding: '0',
        fontWeight: Typography.fontWeightLight
      },
      button: {
        marginTop: 32
      }
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>

      </FullWidthSection>
    );
  },

  _onDemoClick: function() {
    this.context.router.transitionTo('components');
  }
});

module.exports = HomePage;
