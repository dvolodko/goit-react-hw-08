import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const nameToSearch = useSelector(selectNameFilter);

  const handleSearchInput = (e) => dispatch(setNameFilter(e.target.value));

  return (
    <div className={css.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={nameToSearch}
        onChange={handleSearchInput}
        className={css.searchInput}></input>
    </div>
  );
}

export default SearchBox;
