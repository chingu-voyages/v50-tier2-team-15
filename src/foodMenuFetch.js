const foodMenuFetch = async () => {
  try {
    const response = await fetch(
      "https://tiny-blue-vulture-shoe.cyclic.app/our-foods"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default foodMenuFetch;
