import Image from 'next/image'
import profilePic from '@/public/images/profile.jpg'

export default function Home () {
  return (
    <section className='profileContainer'>
      <Profile />
    </section>
  )
}

function Profile () {
  return (
    <div className='main-container'>
      <Image
        className='profilePic'
        src={profilePic}
        width={400}
        height={400}
        alt='Jared Maldonado'
        placeholder='blur'
        priority
      />
      <h1>Hey! I'm Jared Maldonado</h1>
      <p style={{
        textAlign: 'justify',
        fontSize: '1.2rem'
      }}
      >
        I'm musician, psychologist and developer, tech and music lover. Take a look at my portfolio! There're many little projects to play with
      </p>
      <StackSection />
    </div>
  )
}

function StackSection () {
  return (
    <section className='stackSection'>
      <div>Css</div>
      <div>JS</div>
      <div>React</div>
      <div>NextJs</div>
      <div>Git</div>
    </section>
  )
}
