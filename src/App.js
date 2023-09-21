import { Button } from './components/button/Button'
import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Button component</h1>
      <div className='button-container'>
        <section>
          <Button>Default</Button>
          <Button type='outline'>Default</Button>
          <Button type='text'>Default</Button>
        </section>
        <section>
          <Button disableShadow>Default</Button>
        </section>
        <section>
          <Button disabled>Disabled</Button>
          <Button disabled type='text'>Disabled</Button>
        </section>
        <section>
          <Button color='primary' startIcon='add_shopping_cart'>Default</Button>
          <Button color='secondary' endIcon='add_shopping_cart'>Default</Button>
        </section>
        <section>
          <Button size='sm'>Default</Button>
          <Button size='md'>Default</Button>
          <Button size='lg'>Default</Button>
        </section>
        <section>
          <Button color='default'>Default</Button>
          <Button color='primary'>Default</Button>
          <Button color='secondary'>Default</Button>
          <Button color='danger'>Default</Button>
        </section>
      </div>
    </div>
  )
}

export default App
