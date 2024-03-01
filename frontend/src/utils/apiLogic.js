const production_value = process.env.REACT_DEPLOYMENT_VALUE;
var apiURL = "";
const apiUrlFunction = () => {
    if (production_value === true) {
        apiURL = "http://170.64.176.33:8000";
    } else {
        apiURL = "http://localhost:8000";
    }

    return apiURL;
};

export default apiUrlFunction;
