export default function Filter({
  setTableFilter,
  setNameFilter,
  setPRFilter,
  setBookedFilter,
}) {
  const handleBookedChange = (e) => {
    setBookedFilter(e.target.checked ? true : false);
  };
  return (
    <div className="flex  flex-wrap mt-4">
      <div className="mx-auto flex">
        <p className="font-bold">Table: </p>
        <input
          type="text"
          className="outline ml-4 rounded-md pl-2"
          onChange={(e) => setTableFilter(e.target.value)}
        />
      </div>
      <div className="flex mx-auto">
        <p className="font-bold">Name: </p>
        <input
          type="text"
          className="outline ml-4 rounded-md pl-2"
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <div className="flex mx-auto">
        <p className="font-bold">PR: </p>
        <input
          type="text"
          className="outline ml-4 rounded-md pl-2"
          onChange={(e) => setPRFilter(e.target.value)}
        />
      </div>
      <div className="flex mx-auto">
        <p className="font-bold">Booked </p>
        <input
          type="checkbox"
          className=" ml-4 rounded-md pl-2"
          onChange={handleBookedChange}
        />
      </div>
      <div className="mr-8">
        <button className="font-bold bg-yellow-500 px-2 rounded-md" onClick={() => setBookedFilter(null)}>Reset</button>
      </div>
    </div>
  );
}
