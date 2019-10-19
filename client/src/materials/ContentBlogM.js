import React, {Component} from 'react'
import { Card } from 'react-materialize'

const ContentBlogM = props => {
  return (
    <div className="content-blog-m">
        <Card className="blue-grey darken-1" textClassName="white-text" title={props.posts.TITULO} actions={[<a />,<a />]}>
          <p>{props.posts.CONTEUDO}</p>
          <p>{props.posts.AUTOR}</p>
        </Card>
    </div>
  )
}

export default ContentBlogM