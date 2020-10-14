import axios from "axios";

// putting axios into a function so that other files can access it. 
export default {
  getRandomEmployee: function () {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  },
};
