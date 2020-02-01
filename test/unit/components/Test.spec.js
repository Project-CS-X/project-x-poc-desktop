/* eslint react/jsx-props-no-spreading: off */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Test from '../../../app/components/Test'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
 
  const component = shallow(<Test />)

  return {
    component,
    header:  component.find('h2')
  }
}

describe('Test component', () => {
  it('should have a header that says \'Test Component 1\'', () => {
    const { header } = setup()
    expect(header.text()).toMatch(/^Test Component 1$/)
  })

  // Snap
  it('should match exact snapshot', () => {
    const test = (
        <Test />
    )

    const tree = renderer.create(test).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
