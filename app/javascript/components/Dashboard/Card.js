import React from 'react'

class Card extends React.Component {
  render(){
    return (
      <div className="col-xl-4 col-sm-6 mb-4" id = 'd-expense'>
        <div className="card o-hidden h-100">
          <div className="card-body">
            <div className="mr-3"><h2 id = 'card-title'>{this.props.total.toLocaleString('ja-JP', {"style":"currency", "currency":"JPY"})}</h2></div>
          </div>
          <span className='card-title'>
            <h4>{this.props.title}</h4>
         </span>
        </div>
      </div>
    )
  }
}

export default Card;
