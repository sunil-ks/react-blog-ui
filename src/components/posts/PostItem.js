import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    const { id, title, body } = props
    return (
        <div className="card mb-3" style={{ maxWidth: '540px'}} >
            <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/100x150" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{ id } . { title }</h5>
                            <p className="card-text">{ body } </p>
                            <Link className="btn btn-primary btn-sm" to={ `/posts/${id}` } >Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PostItem
