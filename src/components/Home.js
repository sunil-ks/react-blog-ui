import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <h2 className="text-center mb-4">Welcome to our Blog</h2>
            <div id="homeSlider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#homeSlider" data-slide-to="0" className="active"></li>
                    <li data-target="#homeSlider" data-slide-to="1"></li>
                    <li data-target="#homeSlider" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1000x500" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1000x500" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1000x500" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <Link className="carousel-control-prev" to="/#homeSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="/#homeSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
        </div>
    )
}

export default Home