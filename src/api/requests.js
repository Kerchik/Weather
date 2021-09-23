const API_KEY = "0ee6bd66c4f2ef133f03d43e9c14f56e"

export default {
    async getWeather(city) {
        const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        return request.json()
    }
}