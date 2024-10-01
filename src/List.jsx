import React from 'react'

const List = () => {
   /* const fruits = ['appple', 'Banana','orange','coconut','pinaapple']*/
    const fruits = [
                    {name:"apple", calories: 95},
                    {name:"Banana", calories: 105},
                    {name:"Orange", calories: 103},
                    {name:"Coconut", calories: 70},
                    {name:"Pineapple", calories: 145},
    ]

    const listItems = fruits.map(fruit => <li>
                                            {fruit.name}: &nbsp;
                                           <b> {fruit.calories}</b>
                                            </li> );
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default List
