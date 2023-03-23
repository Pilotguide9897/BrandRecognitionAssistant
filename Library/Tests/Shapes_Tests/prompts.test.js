const { main } = require('../../../index');


describe('main', () => {
  jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValue({
      logoChars: 'ABC',
    }),
  }));

  test('Should return the value typed in as the response', async () => {
    const { logoChars } = await main();
    expect(logoChars).toBe('ABC');
  });
    
    test('fontFamily', () => {
        it('Should ', async () => {
            
        })
      });
    
      test('fontSize', () => {
        it('Should ', async () => {})
      });

      test('fontWeight', () => {
        it('Should ', async () => {})
      });

      test('lineStyling', () => {
        it('Should ', async () => {})
      });

      test('textColour', () => {
        it('Should ', async () => {})
      });

      test('logoShape', () => {
        it('Should ', async () => {})
      });

      test('shapeColour', () => {
        it('Should ', async () => {})
      });
});