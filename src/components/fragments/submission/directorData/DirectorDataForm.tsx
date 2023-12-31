import React from "react";
import styles from "./DirectorData.module.css"; // Import CSS module


type AddressData = {
  nama: string;
  no_hp: string 
  alamat: string
  email: string
  kota_sutradara: string
  foto: string
  provinsi: string
  biografi: string
  gender: string
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function DirectorDataForm({
  nama,
  no_hp,
  alamat,
  email,
  kota_sutradara,
  foto,
  provinsi,
  biografi,
  gender,
  updateFields,
}: AddressFormProps) {
  return (
    <div className={styles.container}> 
    <div className={styles.inputContainer}>


    <div className={styles.inputContainerOne}>

      <label className={styles.label}>Nama Lengkap</label>
      <input
        autoFocus
        required
        type="text"
        value={nama}
        onChange={(e) => updateFields({ nama: e.target.value })}
        className={styles.input} 
      />
      <label className={styles.label}>Nomor Telepon</label>
      <input
        required
        type="text"
        value={no_hp}
        onChange={(e) => updateFields({ no_hp: e.target.value })}
        className={styles.input}
      />
      
      <label className={styles.label}>Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className={styles.input}
      />
      <label className={styles.label}>Link Foto Diri</label>
      <input
        required
        type="text"
        value={foto}
        onChange={(e) => updateFields({ foto: e.target.value })}
        className={styles.input}
      />
      </div>

      <div className={styles.inputContainerTwo}>
      <label className={styles.label}>Alamat</label>
      <input
        required
        type="text"
        value={alamat}
        onChange={(e) => updateFields({ alamat: e.target.value })}
        className={styles.input}
      />
      <label className={styles.label}>Kota/Kabupaten</label>

      <input
        required
        type="text"
        value={kota_sutradara}
        onChange={(e) => updateFields({ kota_sutradara: e.target.value })}
        className={styles.input}
      />
      
      <label className={styles.label}>Provinsi</label>
      <input
        required
        type="text"
        value={provinsi}
        onChange={(e) => updateFields({ provinsi: e.target.value })}
        className={styles.input}
      />
      <label className={styles.label}>Jenis Kelamin</label>
      <div className={styles.radioButtons}>
            <label className={styles.labelRadio}>
              <input
                type="radio"
                value="Laki-laki"
                checked={gender === "Laki-laki"}
                onChange={(e) => updateFields({ gender: e.target.value })}
              />
              Laki-laki
            </label>
            <label className={styles.labelRadio}>
              <input
                type="radio"
                value="Perempuan"
                checked={gender === "Perempuan"}
                onChange={(e) => updateFields({ gender: e.target.value })}
              />
              Perempuan
            </label>
      </div>
      </div>
      </div>

      <div className={styles.inputContainerThree}>

      <label className={styles.label}>Biografi Director</label>
      <input
        required
        type="text"
        value={biografi}
        onChange={(e) => updateFields({ biografi: e.target.value })}
        className={styles.input}
      />
      </div>


    </div>



  );
}
