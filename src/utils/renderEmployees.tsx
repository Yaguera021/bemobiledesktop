import { formatPhoneNumber, formatDate } from "../utils/formatFunctions";
import { Employees } from "../interface/Employees";

export const renderEmployeeRows = (employees: Employees[]) => {
  return employees.map((employee, index) => (
    <tr key={index}>
      <td>
        <img src={employee.image} alt={employee.name} />
      </td>
      <td>
        <h3>{employee.name}</h3>
      </td>
      <td>{employee.job}</td>
      <td>{formatDate(employee.admission_date)}</td>
      <td>{formatPhoneNumber(employee.phone)}</td>
    </tr>
  ));
};
