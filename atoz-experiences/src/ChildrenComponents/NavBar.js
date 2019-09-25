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
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
          </NavLink>
          <NavLink to='/activities'>
            <Menu.Item
              name='Activities'
              active={activeItem === 'Activities'}
              onClick={handleItemClick}
            />
          </NavLink>
          <NavLink to='/locations'>
            <Menu.Item
              name='Locations'
              active={activeItem === 'Locations'}
              onClick={handleItemClick}
            />
          </NavLink>
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
