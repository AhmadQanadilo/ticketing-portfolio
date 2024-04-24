import axios from "axios";
import { useState } from "react";

const useRequest = ({ path, method, body }) => {
  const [errors, setErrors] = useState(null);

  const excute = () => {
    try {
      const response = axios[method](`${path}`, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { excute, errors };
};

export default useRequest;
