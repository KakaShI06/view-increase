import React, { useState } from 'react'
import styles from './input.module.css'

const InputHandler = ({ setVideoUrl }: { setVideoUrl: any }) => {
  const [value, setValue] = useState('')

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (value) {
      setVideoUrl(value)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='flex'>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          className={styles.input}
        />
        <button type='submit' className={styles.button}>Submit</button>
      </div>
    </form>
  )
}

export default InputHandler
