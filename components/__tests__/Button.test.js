import { render } from '@testing-library/react-native'
import Button from '../Button'

test('Button renders correctly', () => {
    const tree = render(<Button>Test</Button>).toJSON()
    expect(tree).toMatchSnapshot()
})
