import {useState} from "react";
import omdbAxios from "../axiosConfig";
import {Button, Container} from "@material-ui/core";
import MoviesList from "../components/MoviesList";
import ReactPaginate from 'react-paginate';
import Loader from "../components/Loader";

function MainPage() {
    // Привязка инпута
    const [value, setValue] = useState('')
    function chaningInput(event) {
        setValue(event.target.value)
    }
    // Получаю массив из фильмов
    const [movies, setMovies] = useState([])
    async function searchMovie(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await omdbAxios.get('', {
                params: {
                    s: value
                }})
            setMovies(response.data.Search)
            setMovieCount(response.data.totalResults)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    // Для пагинации считаю столько должно быть страниц
    const [movieCount, setMovieCount] = useState("0")
    const pagCount = Math.ceil(movieCount/ 10)
    let showPagination;
    if(pagCount) {
        showPagination = <ReactPaginate containerClassName="pagination" pageCount={pagCount} onPageChange={changePage} pageRangeDisplayed={3} marginPagesDisplayed={3} />
    }
    // Смена страницы через пагинацию
    async function changePage({selected}) {
        setLoading(true)
        try {
            const response = await omdbAxios.get('', {
                params: {
                    s: value,
                    page: selected + 1
                }})
            setMovies(response.data.Search)
            setMovieCount(response.data.totalResults)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const [loading, setLoading] = useState(false)

    return (
        <Container maxWidth="lg">
                <h1>Поиск фильмов</h1>
                <form className="search-form" onSubmit={searchMovie}>
                    <input type="text" value={value}
                           onChange={(event) => chaningInput(event)}/>
                    <Button variant="contained" type='submit'>Поиск</Button>
                </form>
                {loading && <Loader/>}
                <MoviesList movies={movies} />
                {showPagination}
        </Container>
    )
}

export default MainPage