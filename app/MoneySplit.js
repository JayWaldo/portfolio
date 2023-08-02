'use client'
import { useState } from 'react'

export default function MoneySplit () {
  return (
    <div>
      <SplitterForm />
    </div>
  )
}
// Lógica de separador equitativo
function equitySplit (cantidad, personas) {
  // Suma total de presupuestos
  const sumaSueldos = personas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
  console.log('suma sueldos:', sumaSueldos)
  // Proporcional que le toca a cada uno en porcentaje
  const percentage = personas.map((s) => s / sumaSueldos)
  console.log('proporcional', percentage)
  // Pago proporcional
  const proportionalPay = percentage.map((p) => p * cantidad)
  console.log(proportionalPay)
  return proportionalPay
}

function SplitterForm () {
  // Hooks necesarios para el formulario y HandleEvents
  const [inputs, setInputs] = useState(['', ''])
  const [results, setResults] = useState([])
  const [showForm, setShowForm] = useState(true)

  const addInput = () => {
    setInputs([...inputs, ''])
  }

  const removeInput = () => {
    const updatedInputs = [...inputs]
    updatedInputs.splice((inputs.length) - 1, 1)
    setInputs(updatedInputs)
  }

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs]
    updatedInputs[index] = value
    setInputs(updatedInputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mainAmountInput = document.getElementById('mainAmount')
    const mainAmountValue = parseFloat(mainAmountInput.value)
    console.log('Monto total: ', mainAmountValue)

    // Verificar que no haya campos vacíos
    if (inputs.some((inp) => inp === '') || inputs.some((inp) => inp <= 0)) {
      alert('Porfavor, ingresa todos los presupuestos con monto válido mayor a 0 antes de continuar')
      return
    }
    if (isNaN(mainAmountValue) || mainAmountValue <= 0) {
      alert('Por favor, ingresa un monto válido mayor a 0')
      return
    }
    const result = equitySplit(mainAmountValue, inputs)
    console.log('resultado: ', result)
    setResults(result)
    setShowForm(false)
  }

  // Borra los datos del form
  const handleShowForm = () => {
    setInputs(['', ''])
    setShowForm(true)
  }

  return (
    <div className='equitySplitter'>
      {
        showForm
          ? (
            <>
              <h2>Equity Splitter</h2>
              <p>Este es un programa que te ayuda a dividir un gasto en partes equitativas</p>
              <form onSubmit={handleSubmit}>
                <label>Escribe el gasto/monto</label><br />
                <input id='mainAmount' type='number' /><br /><br />
                {inputs.map((inputValue, index) => (
                  <div key={index}>
                    <label>Escribe el presupuesto</label><br />
                    <input
                      type='number'
                      value={inputValue}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <button type='button' onClick={addInput}>Añadir +</button>
                <button type='button' onClick={removeInput}>Quitar -</button>
                <button type='button' onClick={handleShowForm}>Limpiar</button>
                <br /><br />
                <button type='submit'>Calcular</button>
              </form>
            </>
            )
          : (
            <>
              <ul className='splitResult'>
                {results.map((i, index) => (
                  <li key={index}>Presupuesto de {inputs[index]}: <strong>{i.toFixed(2)}</strong></li>
                ))}
              </ul>
              <button onClick={handleShowForm}>Volver a calcular</button>
            </>
            )
            }
    </div>
  )
}
