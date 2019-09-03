import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './emoji-preview.module.scss';

function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
        output.push(' <i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp; ');

    // If there is a half a star, append it
    if (i == .5) output.push(' <i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp; ');

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
        output.push(' <i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp; ');
    console.log(output.join(''))
    return output.join('');

}
export class EmojiPreview extends Component {


  render() {

    return (
      <div className={`${classes.emojiContainer} ${this.props.highlight ? classes.highlighter : ''}`}>

        <div className={classes.char}>{this.props.emoji.emoji[0].char}</div>
        <div className={classes.char2}>{this.props.emoji.emoji[1].char}</div>
        <div className={classes.char3}>{this.props.emoji.emoji[2].char}</div>
        <p className={classes.name}>{this.props.emoji.title}</p>

          <div className="Container" dangerouslySetInnerHTML={{__html:    getStars(this.props.emoji.stars) }}></div>

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