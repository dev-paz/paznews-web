
import React, { Component } from "react";
import '../Styles.css'

class NewsGrid extends Component {

 render () {
   console.log(this.props.articles);
   return(
     <div className="grid-container">
     <div className="grid">
       {this.props.articles.map((article, index) => (
         <div className="image-item" key={index}>
         <div> {article.Title} </div>  
         <div> {article.Content} </div>
         </div>
       ))}
       </div>
       </div>
   )
 }
}

export default NewsGrid
