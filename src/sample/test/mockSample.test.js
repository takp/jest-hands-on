describe('mockSample', () => {
    jest.mock('../sample')
    const sample = require('../sample').default

    sample.mockImplementation(() => 42)

    test('sample', () => {
        expect(sample(1)).toBe(42)
    })
})
