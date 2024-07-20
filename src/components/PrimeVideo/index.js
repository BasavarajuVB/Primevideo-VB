// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  return (
    <div className="app-bg-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-img"
        />
        <div className="movie-section-container">
          <div>
            <h1>Action Movies</h1>
            <MoviesSlider moviesList={actionMoviesList} />
          </div>
          <div>
            <h1>Comedy Movies</h1>
            <MoviesSlider moviesList={comedyMoviesList} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
