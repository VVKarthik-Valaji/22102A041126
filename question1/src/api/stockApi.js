const stockApi = {
  fetchStocks: async (accessToken) => {
    const response = await fetch('/evaluation-service/stocks', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch stocks: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }
};

export default stockApi;
