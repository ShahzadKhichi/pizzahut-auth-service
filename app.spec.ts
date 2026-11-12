import { describe, it, expect } from '@jest/globals';
import { calculateSum } from './src/utils';
import app from './src/app';

import request from 'supertest';

describe('Sample Test', () => {
  it('should pass this test', () => {
    expect(true).toBe(true);
  });

  it('should calculate the sum correctly', () => {
    const sum = calculateSum(2, 3);
    expect(sum).toBe(5);
  });

  it('should return 200 status code', () => {
    return request(app).get('/').expect(200);
  });
});
