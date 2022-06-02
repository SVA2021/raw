import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('Button rendering', () => {

	const handleClicker = jest.fn();

	const setUp = () => render(
		<Button data-testid='mybtn' onClick={handleClicker}>learn</Button>
	);

	it('snapshot test', () => {
		setUp();
		expect(screen.getByTestId('mybtn')).toMatchSnapshot();
	});

	it('find button in document by role', () => {
		setUp();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('not find button by text', () => {
		setUp();
		expect(screen.queryByText(/another/i)).toBeNull();
	});

	it('find button by text', () => {
		setUp();
		expect(screen.getByText(/learn/i)).toBeInTheDocument();
	});

	it('click button', () => {
		setUp();
		userEvent.click(screen.getByTestId('mybtn'));
		expect(handleClicker).toHaveBeenCalledTimes(1);
	});

	screen.debug();
});
