import {Link} from "react-router-dom";
import {Grid, Paper} from "@material-ui/core";

export default function MoviesList(props) {
    return (
        <Grid container direction="row" spacing={8}>
            {props.movies.map((mov, index)=> (
                <Grid container item xs={3}>
                    <Paper>
                        <div className="moviesList__item" key={index + mov.Title}>
                            <img src={mov.Poster} alt="movie"/>
                            <Link to={{
                                pathname: `/${mov.imdbID}`,
                                state: {mov}
                            }} />
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>
        // <div className="moviesList">
        //
        // </div>
    )
}