const foodMenuFetch = async () => {
  try {
    const response = await fetch(
      "/fooddata.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default foodMenuFetch;
