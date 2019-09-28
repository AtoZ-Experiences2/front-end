import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function NavBar () {
  
  const [activeItem, setActiveItem] = useState('home') 

  const handleItemClick = (e, { name }) => setActiveItem({ name })

  
    return (
      <div className="container">
        <h2 className="text-center">A to Z Experiences</h2>
        <Menu secondary>
          <NavLink to='/'>
            <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
          {/* </NavLink>
          <NavLink to='/allexperiences'>
            <Menu.Item
              name='All Experiences'
              active={activeItem === 'All Experiences'}
              onClick={handleItemClick}
            />  */}
          </NavLink>
            <NavLink to='/addexperience'>
              <Menu.Item
                name='Add Experience'
                active={activeItem === 'Add Experience'}
                onClick={handleItemClick}
              />         
          </NavLink>
          <Menu.Menu position='center'>
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
