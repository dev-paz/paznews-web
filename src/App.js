import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Styles.css'
import NewsGrid from './components/NewsGrid'

class App extends React.Component {
  state = {
    articles: [],
    loading: true
  };

  fetchData = () => {
    const url = `https://paznews-backend.herokuapp.com/top_headlines?category=&sources=&q`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({ articles: this.state.articles.concat(data.Articles), loading: false })
    }
  )
  };

  componentDidMount(){
    this.fetchData();
  }

  render() {
    const { articles } = this.state
    return (
      this.state.loading ? <div/> :
        <div>
        <NewsGrid articles={articles}/>
        </div>
    );
  }
}

export default App;
