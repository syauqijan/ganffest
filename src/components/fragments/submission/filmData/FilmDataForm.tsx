import React from "react";
import styles from "./FilmDataForm.module.css"; // Import CSS module

type FilmData = {
  judul_film: string;
  bahasa: string;
  tahun: string;
  festival: string;
  kota: string;
  penghargaan: string;
  durasi: string;
  link_film: string;
  link_cover: string;
  sinopsis: string;
  suara: string;
};

type UserFormProps = FilmData & {
  updateFields: (fields: Partial<FilmData>) => void;
};

export function FilmDataForm({
  judul_film,
  bahasa,
  tahun,
  festival,
  kota,
  penghargaan,
  durasi,
  link_film,
  link_cover,
  sinopsis,
  suara,
  updateFields,
}: UserFormProps) {
  return (
    <div className={styles.container}> 
    <div className={styles.inputContainer}>
    <div className={styles.inputContainerFirst}>

      <label className={styles.label}>Judul Film</label>
      <input 
        autoFocus
        required
        type="text"
        value={judul_film}
        onChange={(e) => updateFields({ judul_film: e.target.value })}
        className={styles.input}
      />
      
        <label className={styles.label}>Tahun Produksi</label>
        <input
          required
          type="text"
          value={tahun}
          onChange={(e) => updateFields({ tahun: e.target.value })}
          className={styles.input} 
      />
      <label className={styles.label}>Kota Produksi</label>
      <input
        required
        type="text"
        value={kota}
        onChange={(e) => updateFields({ kota: e.target.value })}
          className={styles.input} 
        />
        <label className={styles.label}>Durasi Film</label>
        <input
          required
          type="text"
          value={durasi}
          onChange={(e) => updateFields({ durasi: e.target.value})}
          className={styles.input}
        />
        </div>
        

        <div className={styles.inputContainerTwo}>
        <label className={styles.label}>Bahasa yang Digunakan dalam Film</label>
      <input
        required
        type="text"
        value={bahasa}
        onChange={(e) => updateFields({ bahasa: e.target.value })}
          className={styles.input} 
        />
        <label className={styles.label}>Festival Film yang Pernah Diikuti</label>
        <input
          required
          type="text"
          value={festival}
          onChange={(e) => updateFields({ festival: e.target.value })}
          className={styles.input}
        />
        <label className={styles.label}>Penghargaan yang Diraih</label>
        <input
          required
          type="text"
          value={penghargaan}
          onChange={(e) => updateFields({ penghargaan: e.target.value })}
          className={styles.input}
        />
        
        
        
        <label className={styles.label}>Audio</label>
        <div className={styles.radioButtons}>
            <label className={styles.labelRadio} >
              <input
                
                type="radio"
                value="Bersuara"
                checked={suara === "Bersuara"}
                onChange={(e) => updateFields({ suara: e.target.value })}
              />
              Bersuara
            </label>
            <label className={styles.labelRadio}>
              <input
              
                type="radio"
                value="Tidak Bersuara"
                checked={suara === "Tidak Bersuara"}
                onChange={(e) => updateFields({ suara: e.target.value })}
              />
              Tidak Bersuara
            </label>
          </div>
        </div>

        
        

        </div>
        <div className={styles.inputContainerThree}>
          <label className={styles.label}>Sinopsis</label>
          <input
            required
            type="text"
            value={sinopsis}
            onChange={(e) => updateFields({ sinopsis: e.target.value })}
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainerFour}>
        <div className={styles.inputLink}>

        <label className={styles.label}>Link Film</label>
        <input
          required
          type="text"
          value={link_film}
          onChange={(e) => updateFields({ link_film: e.target.value })}
          className={styles.input}
        />
        </div>
        <div className={styles.inputLinkTwo}>

        <label className={styles.label}>Link Cover</label>
        <input
          required
          type="text"
          value={link_cover}
          onChange={(e) => updateFields({ link_cover: e.target.value })}
          className={styles.input}
        />
        </div>

        </div>


        
    </div>
  );
}
