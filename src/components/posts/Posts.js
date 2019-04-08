import React from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import Spinner from '../commons/Spinner'

class Posts extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            posts: [],
            isLoaded: false,
            postLimit: 5,
            postLimitLoaded: true
        }
    }

    loadMoreHandle = () => {
        // this.setState((prevState) => ({
        //     postLimit: prevState.postLimit + 5
        // }))
        this.setState((prevState) => ({
            postLimitLoaded: prevState.postLimitLoaded = false
        }))
        setTimeout(() => {
            this.setState((prevState) => ({
                postLimit: prevState.postLimit + 5,
                postLimitLoaded: prevState.postLimitLoaded = true
            }))
        },1000)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState(() => ({ 
                    posts: response.data, 
                    isLoaded: true 
                }))
            })
    }

    render(){

        return (
            <div>
                <h2 className="text-center mb-4">Posts</h2>
                <div className="row">
                    <div className="col-md-8">
                    {
                        this.state.isLoaded ? (
                            <div>
                                <ul>
                                    { this.state.posts.slice(0,this.state.postLimit).map((post) => {
                                        return <PostItem key={ post.id } id={ post.id } title={ post.title } body={ post.body } />
                                    })}
                                </ul>
                                <div className="text-center">
                                    { this.state.postLimitLoaded ? ( 
                                    <button className="btn btn-primary btn-sm" onClick={() => this.loadMoreHandle() }>Load More</button> ) : ( <Spinner /> )}
                                </div>
                            </div>
                            ) : (
                                <div className="spinner-border"></div>
                            ) 
                    }                        
                    </div>

                    <div className="col-md-4">
                        Recent Posts
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts