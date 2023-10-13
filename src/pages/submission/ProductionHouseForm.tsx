import React from "react";
import styles from "./MultiForm.module.css"; // Import CSS module

type AccountData = {
  nama_produksi: string
  alamat_produksi: string
  no_hp_produksi: string
  provinsi_produksi: string
  nama_produser: string
  no_hp_produser: string
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function ProductionHouseForm({
  nama_produksi,
  alamat_produksi,
  no_hp_produksi,
  provinsi_produksi,
  nama_produser,
  no_hp_produser,
  updateFields,
}: AccountFormProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
      <label className={styles.label}>Nama Produksi</label>
      <input
        autoFocus
        required
        type="text"
        value={nama_produksi}
        onChange={(e) => updateFields({ nama_produksi: e.target.value })}
        className={styles.input} 
      />
      <label className={styles.label}>Alamat Produksi</label>
      <input
        required
        type="text"
        value={alamat_produksi}
        onChange={(e) => updateFields({ alamat_produksi: e.target.value })}
        className={styles.input}
      />
      <label className={styles.label}>No Telpon Produksi</label>
      <input
        required
        type="text"
        value={no_hp_produksi}
        onChange={(e) => updateFields({ no_hp_produksi: e.target.value })}
        className={styles.input}
      />
      </div>
      <div className={styles.inputContainerTwo}>
      <label className={styles.label}>Provinsi Produksi</label>
      <input
        required
        type="text"
        value={provinsi_produksi}
        onChange={(e) => updateFields({ provinsi_produksi: e.target.value })}
        className={styles.input}
      />

      <label className={styles.label}>Nama Produser</label>
      <input
        required
        type="text"
        value={nama_produser}
        onChange={(e) => updateFields({ nama_produser: e.target.value })}
        className={styles.input}
      />
      <label className={styles.label}>No Telpon Produser</label>
      <input
        required
        type="text"
        value={no_hp_produser}
        onChange={(e) => updateFields({ no_hp_produser: e.target.value })}
        className={styles.input}
      />
      </div>

    </div>
  );
}
