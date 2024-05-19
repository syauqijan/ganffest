import React from 'react'
import styles from './AcaraFragment.module.css'
const AcaraFragment = () => {
  return (
  <div className={styles.acara} style={{ overflowY: 'hidden' }}>
        <h1 className={styles.title}> Ganesha Film festival</h1>
        <p className={styles.description}>Ganesha Film Festival (Ganffest) adalah festival film dua tahunan dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang Ganffest merupakan salah satu festival film mahasiswa tertua di Indonesia.</p>
        <p className={styles.description}>Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia.</p>
        <p className={styles.description}>Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
        <p className={styles.description}>
            Tahun ini, Ganffest berkolaborasi dengan Bioskop Online pada pemutaran Bioskop Rakyat. Bioskop Rakyat menghadirkan film-film lokal pilihan kepada masyarakat melalui layar besar di ruang yang nyaman untuk nonton bersama. Pada tahun ini, 24 film pendek dari Ganffest diputarkan dalam 5 program dan berlokasi di The Hallway Space. 

            Untuk informasi lebih lengkapnya, dapat disimak 
            <a href="https://blog.bioskoponline.com/2024/02/16/bioskop-rakyat-buka-layar-baru-nobar-film-lokal-makin-seru/" target="_blank" rel="noopener noreferrer" className={styles.link}> di sini. </a>
        </p>
  </div>
  )
}

export default AcaraFragment