
export default function RatingList(props) {
    return (
        <div className="movie-page__score">
            {props?.ratings?.map((rating, index) => (
                <div className="movie-page__score-item" key={index+ rating.Source}>
                    <span>{rating.Source}</span>
                    <span>{rating.Value}</span>
                </div>
            ))}
        </div>
    )
}