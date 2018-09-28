import React from 'react'


class PostTitle extends React.Component{
  render(){
    let color;
    switch (this.props.category) {
      case '舞台技術':
        color = '#7CB3D9'
        break;
        
      case '日記':
        color = '#9AF5A5'
        break;

      case '電子工作':
        color = '#F18AF2'
        break;

      case 'プログラミング':
        color = '#F29333'
        break;
      
      default:
        color = '#e4ff3c'
        break;
    }
    return(
      <h1 className='title' style={{
        backgroundImage: `linear-gradient(to right, ${color} 0%, ${color}  100%)`
      }}>
        { this.props.children }
      </h1>
    )
  }
}

export default PostTitle