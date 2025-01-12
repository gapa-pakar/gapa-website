
import React from 'react'
import Kitten from '../assets/kitten-licks-screen.gif'

export default function ErrorComponent() {
  return (
    <div dir='rtl' className='flex flex-col justify-center'>
      <h2 className='font-semibold fon`'>אופס! יש שגיאה!</h2>
      <h2>כמובן לא נשאיר אתכם בלי כלום...</h2>
      <h1>קבלו נשיקה מחתול:</h1>
      <img src={Kitten}/>
    </div>
  )
}
