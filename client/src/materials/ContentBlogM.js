import React, {Component} from 'react'
import { Card } from 'react-materialize'

class ContentBlogM extends Component {
  render() {
    return (
      <div className="content-blog-m">
          <Card
          className="blue-grey darken-1"
          textClassName="white-text"
          title="Card title"
          actions={[<a />,<a />]}
        >
        I am a very simple card.
        </Card>
      </div>
    )
  }
}

export default ContentBlogM