import React from 'react'
import { Navbar, NavItem } from 'react-materialize';

const HeaderBlogM = props => {
  return (
    <div className="header-blog-m">
      <Navbar brand={<a />} alignLinks="right">
        <NavItem href="">Getting started</NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    </div>
  )
}

export default HeaderBlogM