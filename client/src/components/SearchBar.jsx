function SearchBar(props) {
  const { DATA, setData } = props.filter;
  function handleChange(e) {
    setData(
      DATA.filter((d) => {
        const text = (d.Title + d.Genre).toLowerCase();
        if (text.includes(e.target.value)) {
          return d;
        }
      }),
    );
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
