import foodMenuFetch from './foodMenuFetch';
import { describe, beforeEach, it, expect } from '@jest/globals';

describe('foodMenuFetch', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches data successfully', async () => {
    const mockData = [{ id: 1, name: 'Burger' }];
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const data = await foodMenuFetch();
    expect(data).toEqual(mockData);
  });

  it('handles fetch error', async () => {
    fetch.mockReject(new Error('Failed to fetch'));

    try {
      await foodMenuFetch();
    } catch (error) {
      expect(error.message).toBe('Failed to fetch');
    }
  });
});