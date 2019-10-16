import React from 'react'
import { Collection, CollectionItem } from 'react-materialize'

const SidebarM = props => {
  return (
    <div className="sidebar-blog-m">
      <Collection header="First Names">
        <CollectionItem>Alvin</CollectionItem>
        <CollectionItem>Alvin</CollectionItem>
        <CollectionItem>Alvin</CollectionItem>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    </div>
  )
}

export default SidebarM