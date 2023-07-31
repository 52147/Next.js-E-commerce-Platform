import { useState } from 'react'

const CheckoutForm = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [creditCard, setCreditCard] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Submit form data here...
    console.log({
      name,
      address,
      creditCard,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Credit Card:
        <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
  
export default CheckoutForm
