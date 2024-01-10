import { Container } from '@/components/atoms/Container'

export function Programmer() {
  return (
    <section className="py-10">
      <Container>
        <h3>Smart Thermostatic Valve Programmer.</h3>
        <div className="flex ">
          <div className='grow'>
            <h4>WEEKDAY ➀➁➂➃➄</h4>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
          </div>
          <div className='grow'>
            <h4>SATURDAY ➅</h4>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
          </div>
          <div className='grow'>
            <h4>SUNDAY ➆</h4>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
            <div>
              <input type="time" />
              <input type="number" min="1" max="45" /> *C
            </div>
          </div>
        </div>
        <div className=""></div>
      </Container>
    </section>
  )
}
