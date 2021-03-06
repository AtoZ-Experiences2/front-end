import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function LoggedNavBar () {
  
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
            name='Experiences'
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
            <NavLink to='/user/:userid'>
              <Menu.Item
                name='My Profile'
                active={activeItem === 'My Profile'}
                onClick={handleItemClick}
              />
            </NavLink>
            <NavLink to='/'>
              <Menu.Item
                name='Logout'
                active={activeItem === 'Logout'}
                onClick={handleItemClick}
              />
            </NavLink> 
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
