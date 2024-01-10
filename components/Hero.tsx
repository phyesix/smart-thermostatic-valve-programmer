import { Container } from '@/components/atoms/Container'

export function Hero() {
  return (
    <section className="bg-slate-100 py-10">
      <Container>
        <h1>Smart Thermostatic Valve Programmer.</h1>
        <h2>Bu programram Moes için üretilmiştir. Ömür boyu 5 dolar ücretle:</h2>
        <ul>
          <li>Oda ekleme</li>
          <li>Ayarlarınızı kaydetme kaydedebilme</li>
        </ul>
      </Container>
    </section>
  )
}
