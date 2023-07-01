import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Todo from 'renderer/views/todo/Todo';

describe('Todo', () => {
    it('should render', () => {
        expect(render(<Todo />)).toBeTruthy();
    });
    it('User adds todo to the list', () => {
        const { getByText, getByTestId } = render(<Todo />);

        fireEvent.click(getByText('Add Todo'));
    });
});
