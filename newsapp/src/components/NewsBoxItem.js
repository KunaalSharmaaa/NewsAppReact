import React, { Component } from "react";

export class NewsBoxItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, pubDate, author, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://growmudra.com/uploads/Blog/09c2362f5efcbce98b8832726b7e088a.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <p className="card-text"><small className="text-body-secondary">By: {author ? author : "Unknown"} on {new Date(pubDate).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
                            View in Detail
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBoxItem;
