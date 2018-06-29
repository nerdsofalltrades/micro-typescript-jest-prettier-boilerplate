import TestService from './micro-service';

describe('Micro-Service', () => {
  it('returns a cat', () => {
    const result = TestService();
    expect(result).toEqual('I am a cat.');
  });
  it('says hello when passed a parameter', () => {
    const result = TestService('Bob');
    expect(result).toEqual('Hello Bob. I am a cat.');
  });
});
