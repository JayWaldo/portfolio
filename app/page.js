import MoneySplit from './MoneySplit'
import Image from 'next/image'

export default function Home () {
  return (
    <section className='profileContainer'>
      <Profile />
      <MoneySplit />

    </section>
  )
}

function Profile () {
  return (
    <div className='main-container'>
      <Image
        src='/public/perfilJared-min.jpg'
        height={20}
        width={30}
        alt='Jared Maldonado'
        style={{
          borderRadius: '50%',
          minWidth: '20%',
          maxWidth: '30%',
          margin: '3rem 0'
        }}
      />
      <h1>Hey! I'm Jared Maldonado</h1>
      <p style={{
        textAlign: 'justify',
        fontSize: '1.2rem'
      }}
      >
        I'm musician, psychologist and developer, tech and music lover. Take a look at my portfolio! There're many little projects to play with
      </p>
    </div>
  )
}
