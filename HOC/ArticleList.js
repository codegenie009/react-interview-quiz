import React from 'react';

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state ={
      articles: GlobalDataSource.getArticles(),
    };
  }

  componentDidMount() {
    GlobalDataSource.addChangeListener(this.handleChange);
  }
  
  componentWillUnmount() {
    GlobalDataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      articles: GlobalDataSource.getArticles(),
    });
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article) => {
          <ArticleData article={article} key={article.id} />
        })}
      </div>
    )
  }
}

export default ArticlesList;