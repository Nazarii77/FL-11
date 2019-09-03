import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './emoji-promo.module.scss';


export class EmojiPromo extends Component {
  render() {
    return (

        <div className={`${classes.emojiContainer} }`}>
          <h2 className={classes.headline}>New! {this.props.emoji.title}</h2>
          <h3 className={classes.headline}>includes</h3>
          <div className={classes.charinline}>{this.props.emoji.emoji[0].char}
              {this.props.emoji.emoji[1].char}
              {this.props.emoji.emoji[2].char}
          </div>
          <p className={classes.codes}><button className={classes.price}>{this.props.emoji.price}</button> </p>

      </div  >


    )
  }
}


EmojiPromo.defaultProps = {
  highlight: false,
}

EmojiPromo.propTypes = {
  emoji: PropTypes.shape({
  codes: PropTypes.string ,
    char: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,

  }).isRequired,
  highlight: PropTypes.bool
};