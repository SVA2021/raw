import axios from "axios";
import { QueryCurrencyType } from "./currencySlice";
import { BASE_URL, currencyAPI } from './currencyAPI';
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const LATEST_DATA = 'latest?';
const SYMBOLS_DATA = 'symbols';

// const currencyInstance = axios.create({
// 	baseURL: BASE_URL,
// });

// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// it('Calls the GET method as expected', async () => {
//   const expectedResult: string = 'result';

//   mockedAxios.get.mockReturnValueOnce({ data: expectedResult });
//   const result = await myModuleThatCallsAxios.makeGetRequest();

//   expect(mockedAxios.get).toHaveBeenCalled();
//   expect(result).toBe(expectedResult);
// });

const hits = [
	{ objectID: "1", title: "Angular" },
	{ objectID: "2", title: "React" },
];
const request = { base: 'base', symbols: 'symbols' };

describe('currencyAPI', () => {
	jest.mock('axios');
	const mockedAxios = axios as jest.Mocked<typeof axios>;

	it('Calls the GET method as expected', async () => {
		const expectedResult: string = 'result';

		mockedAxios.get.mockReturnValueOnce({ data: expectedResult });
		const result = await currencyAPI.getSymbols();

		expect(mockedAxios.get).toHaveBeenCalled();
		expect(result).toBe(expectedResult);
	});
})