import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { Employees } from "../interface/Employees";

import "./styles/Table.scss";

export default function Table() {
  const [allEmployees, setAllEmployees] = useState<Employees[]>([]);

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
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allEmployees.map((employee, index) => (
            <tr key={index}>
              <td>
                <img src={employee.image} alt={employee.name} />
              </td>
              <td>
                <h3>{employee.name}</h3>
              </td>
              <td>{employee.job}</td>
              <td>{employee.admission_date}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
