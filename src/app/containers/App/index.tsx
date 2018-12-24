import * as React from 'react'
import { useState } from 'react'
import { Container } from './styled'

const App: React.SFC<{}> = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div>You clicked the button {count} times</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Container>
  )
}

export default App
