function SearchBar(props) {
  const { DATA, setData } = props.filter;
  function handleChange(e) {
    setData(DATA.filter((d) => d.Title.includes(e.target.value)));
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
