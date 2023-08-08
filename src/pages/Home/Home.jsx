import React, { useState } from 'react'
import { MenuComponent } from '../../components/MenuComponent'

export function Home() {
  const [user, setUser] = useState([])

  function formGetValues() {
    const name = document.myForm.name.value
    const email = document.myForm.email.value
    
    if(!name) throw new Error('Name cannot be empty')
    if(!email) throw new Error('Email cannot be empty')
    return {name, email}
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const newUser = formGetValues()
      // VERIFICA SE O USUÁRIO ESTÁ LOGADO
      user.forEach((item) => {
        if(item.name === newUser.name && item.email === newUser.email) return alert('usuario logado')
      })

      //Se newUser for null ou undefined, lança um erro.
      if(!newUser) throw new Error('algo deu errado') 

      setUser(user => [...user, newUser]) //acrescenta o newUser no final do array.
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <MenuComponent />
      <div>
        Home is Render

        <form name='myForm' onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='name'/>
          <input type="email" name='email' placeholder='email'/>
          <input type="submit" value="submit" />
        </form>
        <div>
          {user.map((item) => {
          return <div key={item.name}>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
          })}

        </div>
      </div>
    </>
  )
}
