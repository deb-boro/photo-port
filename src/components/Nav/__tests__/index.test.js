import React from 'react'
import { render, cleanup, within } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
//import { screen } from '@testing-library/any-framework'
import Nav from '..'

afterEach(cleanup)

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    //const { getByLabelText } = render(<Nav />)
    // Assert
    //within(getByLabelText('camera')).toHaveTextContent('📸')
  })
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    //const { getByTestId } = render(<Nav />)
    // Assert
    //expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
    //expect(getByTestId('about')).toHaveTextContent('About me')
  })
})
