import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "reduxTools/phonebookSlice";
import { phonebookFilter } from "reduxTools/store";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(phonebookFilter);
  const handleFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <label>
      Filter contacts here
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
}

export default Filter;
