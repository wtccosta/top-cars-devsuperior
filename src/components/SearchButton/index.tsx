import './styles.css';

const SearchButton = () => {
    return (
        <div className="base-card search-card">
            <div className="input-place">
                <input type="text" name="search" id="txt-search" />
            </div>
            <div className="search-button">
                <button className="btn btn-primary" type="button">COMPRAR</button>
            </div> 
        </div>
        );
}

export default SearchButton;