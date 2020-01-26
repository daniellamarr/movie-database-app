import React, { Component } from "react";
import {
  Header,
  Icon,
  Menu,
  Segment,
  Divider,
  Rating,
  IconGroup,
  Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

class MovieHeader extends Component {
  render() {
    return (
      <div id="movieHeader_parent">
        <Header>MOVIES</Header>
        <div className="jumbotron">The source</div>
        <Rating disabled icon="star" defaultRating={4.5} maxRating={5} />
        <span className="movie_actions">
          <div>
            <Icon name="eye" color="red" />
            <span>Watch</span>
          </div>
          <div>
            <Icon color="blue" name="thumbs up" />
            <span>Watch</span>
          </div>
          <div>
            <Icon name="comments" color="green" />
            <span>Comments</span>
          </div>
        </span>
        <Divider />
        <div>
          <div style={{ float: "right" }}>
            <Button color="yellow" floated="right">
              Add to watchList
            </Button>
            <Button className="empty_button" floated="right">Watch Now</Button>
          </div>
          <h4>Directed by: </h4>
          <div>Writing Credits: </div>
        </div>
        <div className="tags">
          <Tag>Comedy</Tag>
          <Tag>Comedy</Tag>
        </div>
      </div>
    );
  }
}

export default MovieHeader;
