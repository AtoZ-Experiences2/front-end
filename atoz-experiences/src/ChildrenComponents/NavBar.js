import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function NavBar () {
  
  const [activeItem, setActiveItem] = useState('home') 

  const handleItemClick = (e, { name }) => setActiveItem({ name })

  
    return (
      <Menu secondary>
        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Events'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Categories'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='Sign In'
            active={activeItem === 'Sign In'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Register'
            active={activeItem === 'Register'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
