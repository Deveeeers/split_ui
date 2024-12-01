export const apiCall = async (url, options = {}) => {
  const token = localStorage.getItem('token'); 

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }), 
  };

  const response = await fetch(url, {
    ...options,
    headers: { ...headers, ...options.headers },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API call failed');
  }

  return response.json();
};

export default apiCall;
