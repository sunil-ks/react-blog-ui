import React from 'react' 
import axios from 'axios'

import CommentItem from '../comments/CommentItem' 
import Spinner from '../commons/Spinner'

class PostShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            post: {},
            isLoaded: false, 
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                this.setState(() => ({
                    post: response.data, 
                    isLoaded: true 
                }))
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => {
                this.setState(() => ({ 
                    comments: response.data 
                }))
            })
        
    }
    render() {
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <h1 className="text-center mb-3">{this.state.post.title}</h1>
                        <p>
                            { this.state.post.body }
                        </p>

                        <h5>Comments</h5>
                        <div className="form-row">
                            { this.state.comments.map(comment => {
                                return <CommentItem 
                                            key={ comment.id }
                                            name={comment.name} 
                                            email={comment.email}
                                            body={comment.body}
                                        />
                            })}
                        </div>
                    </div> 
                ) : <Spinner /> }
            </div>
        )
    }
}

export default PostShow
