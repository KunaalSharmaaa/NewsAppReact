import React, { Component } from "react";
import NewsBoxItem from "./NewsBoxItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class NewsBox extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 16,
        category: "sports",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }


    async componentDidMount() {
        let url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=de07dce9b11541f4b9755dac875d0209&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    nextNews = async () => {
        await this.setState({
            page: this.state.page + 1,
        })
        this.componentDidMount();
    }

    prevNews = async () => {
        await this.setState({
            page: this.state.page - 1,
        })
        this.componentDidMount();
    }

    render() {
        return (
            <div className="container my-3">
                <h1
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "30px",
                        marginTop: "10px",
                        fontSize: "46px"
                    }}
                >
                    NewsMonkey - Top Headlines
                </h1>
                {this.state.loading && <Spinner/>}
                {!this.state.loading && <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsBoxItem
                                    title={element.title ? element.title : ""}
                                    description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>}
                <div className="container d-flex justify-content-between my-5">
                    <button onClick={this.prevNews} disabled={this.state.page < 2} type="button" className="btn btn-success"> &larr; Previous</button>
                    <button onClick={this.nextNews} disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success">Next &rarr; </button>
                </div>
            </div>
        );
    }
}

export default NewsBox;
