import { DepartmentData } from "./departmentData";

export class EmployeData {
    emp_id=0;
    emp_name= "";
    depart_id= "";
    date_joining= "";
    designation= "";
    qulifiction= "";
    isActive=1;
    department= new DepartmentData();
}
