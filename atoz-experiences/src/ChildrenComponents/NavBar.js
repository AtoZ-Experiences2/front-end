import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function NavBar () {
  
  const [activeItem, setActiveItem] = useState('home') 

  const handleItemClick = (e, { name }) => setActiveItem({ name })

  
    return (
      <div>
        <h2>A to Z Experiences</h2>
        <Menu secondary>
          <NavLink to='/'>
            <Menu.Item
            name='Home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          </NavLink>
          <Menu.Item
            name='Activities'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Location'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <NavLink to='/signin'>
              <Menu.Item
                name='Sign In'
                active={activeItem === 'Sign In'}
                onClick={handleItemClick}
              />
            </NavLink>
            <NavLink to='/register'>
              <Menu.Item
                name='Register'
                active={activeItem === 'Register'}
                onClick={handleItemClick}
              />
            </NavLink> 
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
