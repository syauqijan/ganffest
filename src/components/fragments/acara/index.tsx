import React from 'react'
import styles from './AcaraFragment.module.css'
const AcaraFragment = () => {
  return (
  <div className={styles.acara} style={{ overflowY: 'hidden' }}>
        <h1 className={styles.title}> Ganesha Film festival</h1>
        <p className={styles.description}>Ganesha Film Festival (Ganffest) adalah festival film dua tahunan dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang Ganffest merupakan salah satu festival film mahasiswa tertua di Indonesia.</p>
        <p className={styles.description}>Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu 98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang mejadi salah satu festival film pembuka, dikarenakan diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran dari berbagai kota di Indonesia.</p>
        <p className={styles.description}>Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan ruang hiburan alternatif bagi masyarakat umum sehingga lebih mengetahui film-film pendek produksi anak bangsa.</p>
  </div>
  )
}

export default AcaraFragment