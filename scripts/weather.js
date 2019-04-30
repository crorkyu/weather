const key = "O8ap8hEaEK91Vd5kQQDJ9gEk3ISabHFg";

const getWeather = async info => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${info}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getCity = async city => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
