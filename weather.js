let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};



////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
console.log('最高気温'+data.main.temp_max);
console.log('最低気温'+data.main.temp_min);
	console.log(data.coord);
  console.log(data.weather);
  console.log(data.main);
  console.log(data.visibility);
  console.log(data.wind);
  console.log(data.clouds);
  console.log(data.dt);
  console.log(data.sys);
  console.log(data.timezone);
  console.log(data.id);
  console.log(data.name);
  console.log(data.cod);

  let list = document.querySelector('ul.center');
let lis = list.querySelectorAll('li');
let beijingLi = lis[lis.length - 1]; // 最後のli要素を取得

for (let key in data) {
    let newLi = document.createElement('li');
    newLi.textContent = key + ': ' + data[key];
    list.insertAdjacentElement('beforeend', newLi);
}

beijingLi.remove();
