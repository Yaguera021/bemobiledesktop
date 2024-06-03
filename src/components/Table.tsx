import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { Employees } from "../interface/Employees";
import { renderEmployeeRows } from "../utils/renderEmployees";

import "./styles/Table.scss";
import SearchBar from "./SearchBar";

export default function Table() {
  const [allEmployees, setAllEmployees] = useState<Employees[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employees[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setAllEmployees(data);
    };
    getEmployees();
  }, []);

  const tableHeaders = [
    "Foto",
    "Nome",
    "Cargo",
    "Data de Admissão",
    "Telefone",
  ];

  return (
    <div>
      <div className='top-wrapper'>
        <h4>Funcionários</h4>
        <SearchBar
          employees={allEmployees}
          setFilteredEmployees={setFilteredEmployees}
        />
      </div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0
            ? renderEmployeeRows(filteredEmployees)
            : renderEmployeeRows(allEmployees)}
        </tbody>
      </table>
    </div>
  );
}
