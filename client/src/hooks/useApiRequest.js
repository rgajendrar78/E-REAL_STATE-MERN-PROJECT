import { useState } from 'react';
import axios from 'axios';

const useApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (method, url, data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios[method](url, data);
      return response.data;
    } catch (error) {
      setError(error.response.data.message);
      throw new Error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
};

export default useApiRequest;
