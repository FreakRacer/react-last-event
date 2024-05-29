import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const defaultState = [
  { text: 'html', completed: true },
  { text: 'css', completed: false }
]

const reducer = (state = defaultState , action) =>{
  console.log(action)

switch (action.type) {
     case 'LINE':
        return [...state.map((item, id) =>{
          if(action.payload === id){
            return {...item, completed: !item.completed}
          } return {...item}
        })];
      case 'DELETE':
        return ([...state.filter((item, id) => {
          if(action.payload === id){
            return false
          } return true
         }) ]);
         case 'ADDTASK':
          if(action.payload.text ){
            return [...state, action.payload]
          }
          return [...state]
        case 'LENGHT':
         return state
        
      
    default: return state;
}

//  if(action.type === 'PLUS'){ return state + 1 };
//  if(action.type === 'MINUS'){ return state - 1 };
//  if(action.type === 'MINUS'){ return state = 0 }

 } 
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>

<Provider store={store}>
 <App />
 </Provider>
   
</>
);

// (state.filter((item, id) =>{
//   if(action.payload === id ){
//     return false
//   } return true
// }))

