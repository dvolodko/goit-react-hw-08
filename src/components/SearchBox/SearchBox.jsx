import { useSelector, useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/selectors';
import { setNameFilter } from '../../redux/filtersSlice';

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
