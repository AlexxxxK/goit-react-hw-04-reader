import React, { Component } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Publication from "../Publication/Publication";
import Counter from "../Counter/Counter";
import Controls from "../Controls/Controls";
import fetchArticles from "../../services/articles-API";
import getItemFromLocation from "../../helpers/getItemFromLocation";
import articlesMapper from "../../helpers/articlesMapper";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Reader.module.css";

export default class Reader extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = { articles: [] };

  async componentDidMount() {
    const { location, history } = this.props;
    let item = getItemFromLocation(location);

    try {
      const fetchedArticles = await fetchArticles();
      console.log(fetchedArticles.articles);
      this.setState({ articles: articlesMapper(fetchedArticles.articles) });
    } catch (error) {
      toast.error(`Error while fetching: ${error}`);
    }

    const { articles } = this.state;
    if (!item || !Number.isInteger(item) || item > articles.length) {
      item = 1;
      history.replace({
        ...location,
        search: `item=1`,
      });
    } else {
      history.replace({
        ...location,
        search: `item=${item}`,
      });
    }
  }

  handlePublicationChange = ({ target }) => {
    const { name } = target;
    const { location, history } = this.props;
    let item = getItemFromLocation(location);

    item = name === "prev" ? (item -= 1) : (item += 1);
    history.push({
      search: `item=${item}`,
    });
  };

  render() {
    const { articles } = this.state;
    const { location } = this.props;
    const currentPage = getItemFromLocation(location) - 1 || 0;
    // const currentPage = item || 0;
    return (
      <>
        {articles.length > 0 && (
          <div className={styles.reader}>
            <Publication article={articles[currentPage]} />
            <Counter currentPage={currentPage} length={articles.length} />
            <Controls
              currentPage={currentPage}
              length={articles.length}
              handlePublicationChange={this.handlePublicationChange}
            />
          </div>
        )}
      </>
    );
  }
}
