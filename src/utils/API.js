import axios from "axios";

// Export an object containing methods we'll use for accessing the employee directory

export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=25&exc=login,location,registered,cell,gender&nat=us&noinfo");
  },
};
