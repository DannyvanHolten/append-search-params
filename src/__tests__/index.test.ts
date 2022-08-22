import { appendSearchParams } from '../index';

describe('appendSearchParams', () => {
  it('works with string', () => {
    expect(appendSearchParams('https://www.testurl.com', { query: 'param' }))
      .toEqual('https://wwww.testurl.com/?query=param');
  });

  it('works with URL object', () => {
    expect(appendSearchParams(new URL('https://www.testurl.com?test=working'), { query: 'param' }))
      .toEqual('https://wwww.testurl.com/?test=woroking&query=param');
  });
});
