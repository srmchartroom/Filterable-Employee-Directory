// import axios from "axios";

// // Export an object containing methods we'll use for accessing the employee directory

// export default {
//   getEmployees: function () {
//     return axios
//       .get("https://randomuser.me/api/?results=25&exc=login,location,registered,cell,gender&nat=us&noinfo")
//       .then(res => {
//         const data = res.data.results;
//         let employees = data.sort((a, b) => {
//           return a.name.last > b.name.last ? 1 : (a.name.last < b.name.last ? -1 : 0);
//         });
//         employees = employees.map(employee => {
//           return {
//             name: `${employee.name.last}, ${employee.name.first}`,
//             picture: employee.picture.thumbnail,
//             phone: employee.phone,
//             email: employee.email,
//             dob: new Date(employee.dob.date).toLocaleDateString(),
//             compareDob: new Date(employee.dob.date).toISOString(),
//             age: employee.dob.age,
//             alphaOrder: employees.indexOf(employee),
//             key: employee.id.value
//           }
//         });
//         return employees;
//       })
//   },
// };

import axios from "axios";

// Export an object containing methods we'll use for accessing the employee directory

export default {
  getEmployees: function () {
    return axios
      .get("https://randomuser.me/api/?results=25&exc=login,location,registered,cell,gender&nat=us&noinfo")
      .then(res => {
        const data = res.data.results;
        let employees = data.sort((a, b) => {
          return a.name.last > b.name.last ? 1 : (a.name.last < b.name.last ? -1 : 0);
        });
        employees = employees.map(employee => {
          return {
            name: `${employee.name.last}, ${employee.name.first}`,
            picture: employee.picture.large,
            phone: employee.phone,
            email: employee.email,
            dob: new Date(employee.dob.date).toLocaleDateString(),
            compareDob: new Date(employee.dob.date).toISOString(),
            age: employee.dob.age,
            alphaOrder: employees.indexOf(employee),
            key: employee.id.value
          }
        });
        return employees;
      })
  },
};
