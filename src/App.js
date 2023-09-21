import { Button } from './components/button/Button'
import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Buttons</h1>
      <div className='button-container'>
        <section>
          <div>
            <code>{'<Button />'}</code>
            <Button>Default</Button>
          </div>
          <div>
            <code> {'<Button variant="outline" />'} </code>
            <Button variant='outline'>Default</Button>
          </div>
          <div>
            <code> {'<Button variant="text" />'} </code>
            <Button variant='text'>Default</Button>
          </div>
        </section>
        <section>
          <div>
            <code> {'<Button disableShadow />'} </code>
            <Button disableShadow>Default</Button>
          </div>
        </section>
        <section>
          <div>
            <code> {'<Button disabled />'} </code>
            <Button disabled>Disabled</Button>
          </div>
          <div>
            <code> {'<Button variant="text" disabled />'} </code>
            <Button disabled type='text'>Disabled</Button>
          </div>
        </section>
        <section>
          <div>
            <code> {'<Button color="primary" startIcon="add_shopping_cart" />'} </code>
            <Button color='primary' startIcon='add_shopping_cart'>Default</Button>
          </div>
          <div>
            <code> {'<Button color="primary" endIcon="add_shopping_cart" />'} </code>
            <Button color='secondary' endIcon='add_shopping_cart'>Default</Button>
          </div>
        </section>
        <section>
          <div>
            <code> {'<Button size="sm" />'} </code>
            <Button size='sm'>Default</Button>
          </div>
          <div>
            <code> {'<Button size="md" />'} </code>
            <Button size='md'>Default</Button>
          </div>
          <div>
            <code> {'<Button size="lg" />'} </code>
            <Button size='lg'>Default</Button>
          </div>
        </section>
        <section>
          <div>
            <code> {'<Button color="default" />'} </code>
            <Button color='default'>Default</Button>
          </div>
          <div>
            <code> {'<Button color="primary" />'} </code>
            <Button color='primary'>Default</Button>
          </div>
          <div>
            <code> {'<Button color="secondary" />'} </code>
            <Button color='secondary'>Default</Button>
          </div>
          <div>
            <code> {'<Button color="danger" />'} </code>
            <Button color='danger'>Default</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
