import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from '../App';
import WeatherApp from '../components/WeatherApp';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


jest.mock('axios');

it('renders_app_without_crashing', () => {
  render(<WeatherApp />);
  const titleElement = screen.getByText(/Weather App/i);
  expect(titleElement).toBeInTheDocument();
});

it('displays_the_title_with_h1_tag', () => {
  render(<WeatherApp />);
  const titleElement = screen.getByRole('heading', { level: 1 });
  expect(titleElement).toHaveTextContent('Weather App');
});

test('renders weather data', async () => {
  const mockedResponse = {
    data: {
      coord: { lon: -0.1257, lat: 51.5085 },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
    },
  };

  axios.get.mockResolvedValue(mockedResponse);

  render(<WeatherApp />);

  // Add your test assertions here to verify that the data is displayed correctly
});

