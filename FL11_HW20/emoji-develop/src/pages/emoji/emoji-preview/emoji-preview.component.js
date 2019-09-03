import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './emoji-preview.module.scss';

export class EmojiPreview extends Component {


  render() {

    return (
      <div className={`${classes.emojiContainer} ${this.props.highlight ? classes.highlighter : ''}`}>
{/*
        <div className={classes.char}>{this.props.emoji.char}</div>
        <p className={classes.name}>{this.props.emoji.name}</p>
        <p className={classes.codes}>{this.props.emoji.codes}</p>
  */}
        <div className={classes.char}>{this.props.emoji.emoji[0].char}</div>
        <div className={classes.char2}>{this.props.emoji.emoji[1].char}</div>
        <div className={classes.char3}>{this.props.emoji.emoji[2].char}</div>
        <p className={classes.name}>{this.props.emoji.title}</p>
        <p className={classes.rating}>{this.props.emoji.stars}</p>
          <p className={classes.codes}><button className={classes.price}>{this.props.emoji.price}</button> </p>



      </div>


    )
  }
}


EmojiPreview.defaultProps = {
  highlight: false,
}

EmojiPreview.propTypes = {
  emoji: PropTypes.shape({
/*  codes: PropTypes.string ,
    char: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,*/

/*    "id": 1,
    "title": "Bugs pack!",
    "stars": 5,
    "price": 1,
    "emoji": [*/
  }).isRequired,
  highlight: PropTypes.bool
};