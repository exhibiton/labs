import React from 'react'
import AuthLayout from 'layouts/PageLayout/AuthLayout'
import { shallow } from 'enzyme'

describe('(Layout) AuthLayout', () => {
  it('renders as a <div>', () => {
    shallow(<AuthLayout />).should.have.tagName('div')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>

    shallow(
      <AuthLayout>
        <Child />
      </AuthLayout>
    )
      .find('.children')
      .should.contain(<Child />)
  })
})
