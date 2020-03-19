import App from './App';

describe('The App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = 'hello';
  });
  it('should equal hello', () =>  {
    expect(wrapper).toEqual('hello');
  })
})