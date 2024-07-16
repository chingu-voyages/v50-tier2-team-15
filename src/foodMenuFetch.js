const foodMenuFetch = async () => {
  try {
    const response = await fetch(
      "https://tiny-blue-vulture-shoe.cyclic.app/desserts"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default foodMenuFetch;
