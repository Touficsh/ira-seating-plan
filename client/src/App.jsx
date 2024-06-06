import { useState } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import data from './db.json';

function App() {
  const [tableFilter, setTableFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [prFilter, setPRFilter] = useState('');
  const [bookedFilter, setBookedFilter] = useState(null);
  const [tableData, setTableData] = useState(data);

  const filterData = () => {
    return tableData.filter((table) => {
      const matchesTable = tableFilter ? table.Table.includes(tableFilter) : true;
      const matchesName = nameFilter ? table.Name.includes(nameFilter) : true;
      const matchesPR = prFilter ? table.PR.includes(prFilter) : true;
      const matchesBooked = bookedFilter !== null ? table.booked === bookedFilter : true;
      return matchesTable && matchesName && matchesPR && matchesBooked;
    });
  };

  const handleUpdate = (updatedTable) => {
    setTableData((prevData) =>
      prevData.map((table) =>
        table.Table === updatedTable.Table ? updatedTable : table
      )
    );
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
            <Table key={table.Table} table={table} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
