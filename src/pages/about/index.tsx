import Navbar from '@/components/layouts/Navbar'
import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='min-h-screen flex flex-col'style={{ overflowY: 'hidden' }}>
      <div className='flex items-center justify-center mt-10' style={{ overflowY: 'hidden' }}>
      <div className=' w-2/3 pl-4'>
          <Image src='/gff.png' alt='logo' width={300} height={300} />
      </div>
      
      <div className='ml-40 mr-60 p-10 text-left'>
        <h1 className='text-4xl font-bold'>Ganesha Film Festival</h1>
        <p className='text-xl'>Ganesha Film Festival (Ganffest) adalah festival film dua tahunan dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang Ganffest merupakan salah satu festival film mahasiswa tertua di Indonesia.</p>
        <p className='text-xl'>Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia.</p>

        <p className='text-xl '>Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
      </div>
      
      </div>
      <div className=' flex items-center justify mt-10' style={{ overflowY: 'hidden' }}>
      <div className=' mx-40 w-1/2 pl-4 pb-20 pt-20 text-left' >
        <h1 className='text-4xl font-bold'> Liga Film Mahasiswa</h1>
        <p className='text-xl '>Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta kajiannya hingga fotografi beserta eksibisinya. Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia. Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
       </div> 
      </div>

      <div className=' flex items-center justify mt-11'>
      
      <div className=' w-2/3 pl-4'>
          <Image src='/flux.png' alt='logo' width={300} height={300} />
      </div>
      <div className=' mx-40 pl-80 pb-20 pt-20 text-left' >
        <h1 className='text-4xl font-bold'> Ganesha Film Festival 2024</h1>
        <p className='text-xl '>Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta kajiannya hingga fotografi beserta eksibisinya. Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia. Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
       </div> 
      </div>
      </div>
  )
}

export default AboutPage