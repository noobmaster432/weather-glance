# Weather Glance

**Weather Glance** is a real-time data processing system designed to monitor weather conditions across major metros in India. Built with **Next.js**, the system retrieves weather data from the OpenWeatherMap API, processes it to provide summarized insights, and allows users to configure alert thresholds based on weather conditions. The system also features visualizations of weather summaries, historical trends, and triggered alerts.
![weather-glance vercel app_](https://github.com/user-attachments/assets/f7dbc195-c834-411c-b420-85ccd742df81)


## Features

- **Real-time Weather Monitoring**: Continuous retrieval of weather data from the OpenWeatherMap API at configurable intervals (default: every 5 minutes).
- **Daily Weather Summaries**: Rollups and aggregates, including average, minimum, and maximum temperatures for each day.
- **Dominant Weather Condition**: Identification of the dominant weather condition for each day (e.g., Rain, Clear, etc.).
- **Alerting System**: User-defined alert thresholds for temperature and weather conditions, with notifications when thresholds are exceeded.
- **Visualizations**: Graphical representation of daily weather summaries, historical weather trends, and alerts.

## Data Source

Weather Glance uses the [OpenWeatherMap API](https://openweathermap.org/) as the data source. The API provides various weather parameters, including:

- **Main weather condition** (e.g., Rain, Snow, Clear)
- **Temperature** (in Kelvin, converted to Celsius or Fahrenheit)
- **Feels like** temperature (in Celsius)
- **Timestamp** (Unix timestamp of the data update)

## Metros Monitored

The system monitors the weather in the following Indian cities:
- Delhi
- Mumbai
- Chennai
- Bangalore
- Kolkata
- Hyderabad

## Setup and Configuration

### Prerequisites

- Next.js (for frontend and backend handling)
- An [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up) (free signup)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/noobmaster432/weather-glance.git
   cd weather-glance
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in the root directory with the following information:
   ```plaintext
   OPENWEATHERMAP_API_KEY=your_api_key
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Functionalities

### 1. **Real-time Data Retrieval**

- The system continuously calls the OpenWeatherMap API at regular intervals to fetch weather updates for each city.
- The `UPDATE_INTERVAL` can be configured to adjust how often the data is retrieved.

### 2. **Temperature Conversion**

- Temperature values are retrieved in Kelvin by default but are automatically converted to Celsius.
- User preference can be set for Fahrenheit in the configuration.

### 3. **Daily Weather Summary**

- For each city, the system calculates daily aggregates:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition (based on the most frequently occurring condition of the day)

### 4. **Alerting System**

- Users can configure thresholds for temperature (e.g., alert if the temperature exceeds 35°C for two consecutive updates).
- Alerts can be displayed on the console or sent through email (implementation details are open-ended).

### 5. **Visualization**

- Use Next.js to display daily weather summaries and historical weather trends using charts or tables.
- Triggered alerts are highlighted in visual reports.

## Testing

### 1. **System Setup**

- Verify that the system starts and connects to the OpenWeatherMap API using a valid API key.

### 2. **Data Retrieval**

- Simulate API calls at configurable intervals and ensure the system retrieves and parses the weather data correctly.

### 3. **Daily Weather Summary**

- Simulate several days of weather updates and verify that daily rollups (average, maximum, minimum temperatures) and the dominant weather condition are calculated correctly.

### 4. **Alerting Thresholds**

- Configure user-defined thresholds for temperature and simulate weather data that breaches the thresholds. Verify that alerts are triggered accordingly.

## Bonus Features

- **Additional Weather Parameters**: Support for extended weather data (humidity, wind speed, etc.) and their inclusion in rollups and aggregates.
- **Forecast Data**: Integrating weather forecasts and generating summaries based on predicted conditions.

## Future Improvements

- Email alert system for notifying users when thresholds are breached.
- Extending visualizations to include more in-depth data such as humidity, wind speed, and forecast analysis.

## Conclusion

Weather Glance offers an intuitive way to monitor real-time weather conditions and receive summarized insights. With configurable alerts and detailed visualizations, the system provides a comprehensive tool for weather monitoring.

---

### License

This project is licensed under the MIT License - see the LICENSE file for details.
