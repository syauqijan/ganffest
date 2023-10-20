import React from 'react'
import Image from 'next/image'
import styles from './About.module.css'
const AboutView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gff}>
        <div className={styles.logogff}>
            <Image src='/gff.png' alt='logo' width={300} height={300} />
        </div>
        <div className={styles.textgff}>
          <h1 >Ganesha Film Festival</h1>
          <p >Ganesha Film Festival (Ganffest) adalah festival film dua tahunan dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang Ganffest merupakan salah satu festival film mahasiswa tertua di Indonesia.</p>
          <p >Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia.</p>

          <p>Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
        </div>
      </div>
      <div className={styles.lfm}>
        <div className={styles.textlfm}>
          <h1 > Liga Film Mahasiswa</h1>
          <p >Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta kajiannya hingga fotografi beserta eksibisinya. Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia. Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
        </div> 
      </div>

      <div className={styles.flux}>
      
        <div className={styles.logoflux}>
            <Image src='/flux.png' alt='logo' width={300} height={300} />
        </div>
        <div className={styles.textflux} >
          <h1 > Ganesha Film Festival 2024</h1>
          <p >Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta kajiannya hingga fotografi beserta eksibisinya. Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia. Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
        </div> 
      </div>
    </div>
  )
}

export default AboutView