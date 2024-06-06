import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import data from './db.json';

function App() {
  const [tableFilter, setTableFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [prFilter, setPRFilter] = useState('');
  const [bookedFilter, setBookedFilter] = useState(null); // Start as null for no filter applied

  const filterData = () => {
    return data.filter((table) => {
      const matchesTable = tableFilter ? table.Table.includes(tableFilter) : true;
      const matchesName = nameFilter ? table.Name.includes(nameFilter) : true;
      const matchesPR = prFilter ? table.PR.includes(prFilter) : true;
      const matchesBooked = bookedFilter !== null ? table.booked === bookedFilter : true;
      return matchesTable && matchesName && matchesPR && matchesBooked;
    });
  };

  const filteredData = filterData();

  return (
    <>
      <div>
        <Filter 
          setTableFilter={setTableFilter}
          setNameFilter={setNameFilter}
          setPRFilter={setPRFilter}
          setBookedFilter={setBookedFilter}
        />
        <div className="flex flex-wrap">
          {filteredData.map((table) => (
            <Table key={table.Table} table={table} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
