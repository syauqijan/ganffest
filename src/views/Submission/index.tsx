import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FormEvent, useState } from "react"
import { ProductionHouseForm } from "../../components/fragments/submission/productionHouseData/ProductionHouseForm"
import { DirectorDataForm } from "../../components/fragments/submission/directorData/DirectorDataForm"
import { useMultistepForm } from "../../views/Submission/useMultistepForm"
import { FilmDataForm } from "../../components/fragments/submission/filmData/FilmDataForm"
import FilmTerms from "../../components/fragments/submission/filmTerms/FilmTerms"
import styles from './SubmissionPage.module.css'
import { useSession } from 'next-auth/react';
import Agreement from '@/components/fragments/submission/agreement'
import { set } from 'firebase/database'
import PopUp from '@/components/fragments/popup'
import Image from 'next/image'
import axios from 'axios'

type FormDataType = {
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
    nama: string;
    no_hp: string 
    alamat: string
    email: string
    kota_sutradara: string
    foto: string
    provinsi: string
    biografi: string
    gender: string
    nama_produksi: string
    alamat_produksi: string
    no_hp_produksi: string
    provinsi_produksi: string
    nama_produser: string
    no_hp_produser: string
  }
  
  const INITIAL_DATA: FormDataType = {
    judul_film: "",
    bahasa: "",
    tahun: "",
    festival: "",
    kota: "",
    penghargaan: "",
    durasi: "",
    link_film: "",
    link_cover: "",
    sinopsis: "",
    suara: "",
    nama: "",
    no_hp: "",
    alamat: "",
    email: "",
    kota_sutradara: "",
    foto: "",
    provinsi: "",
    biografi: "",
    gender: "",
    nama_produksi: "",
    alamat_produksi: "",
    no_hp_produksi: "",
    provinsi_produksi: "",
    nama_produser: "",
    no_hp_produser: "",
    
  
  }
  
  const SubmissionView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {push} = useRouter();
    const [data, setData] = useState(INITIAL_DATA)
    const { data: session } = useSession();

    function updateFields(fields: Partial<FormDataType>) {
      setData(prev => {
        return { ...prev, ...fields }
      })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  useMultistepForm([
    <FilmDataForm key="userForm" {...data} updateFields={updateFields} />,
    <DirectorDataForm key="addressForm" {...data} updateFields={updateFields} />,
    <ProductionHouseForm key="accountForm" {...data} updateFields={updateFields} />,
  ]);

  
  const onSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    if (!isLastStep) return next();
    setShowPopup(true);

    
  }
  
  const submitHandler = async (e:any) => {

    setIsLoading(true);
    setShowPopup(false);
    // console.log(data);
    const dataWithUserEmail = {
      ...data,
      email_submitter: session?.user?.email || '',
    };
    console.log(dataWithUserEmail)
    try{
      await axios.post('https://api.ganeshafilmfestival.com/submissions', {
        judul_film: dataWithUserEmail.judul_film,
        bahasa: dataWithUserEmail.bahasa,
        tahun: dataWithUserEmail.tahun,
        festival: dataWithUserEmail.festival,
        kota: dataWithUserEmail.kota,
        penghargaan: dataWithUserEmail.penghargaan,
        durasi: dataWithUserEmail.durasi,
        link_film: dataWithUserEmail.link_film,
        link_cover: dataWithUserEmail.link_cover,
        sinopsis: dataWithUserEmail.sinopsis,
        suara: dataWithUserEmail.suara,
        nama_sutradara: dataWithUserEmail.nama,
        no_hp: dataWithUserEmail.no_hp,
        alamat: dataWithUserEmail.alamat,
        email: dataWithUserEmail.email,
        kota_sutradara: dataWithUserEmail.kota_sutradara,
        foto_sutradara: dataWithUserEmail.foto,
        provinsi: dataWithUserEmail.provinsi,
        biografi: dataWithUserEmail.biografi,
        gender: dataWithUserEmail.gender,
        nama_produksi: dataWithUserEmail.nama_produksi,
        alamat_produksi: dataWithUserEmail.alamat_produksi,
        no_hp_produksi: dataWithUserEmail.no_hp_produksi,
        provinsi_produksi: dataWithUserEmail.provinsi_produksi,
        nama_produser: dataWithUserEmail.nama_produser,
        no_hp_produser: dataWithUserEmail.no_hp_produser,
      });
      setIsLoading(false);
      setFinishTitle("Submission success");
      setFinishMessage(dataWithUserEmail.judul_film + " has been submitted!")
      setShowFinishPopup(true);
    }catch(error){
      setIsLoading(false);
      console.log(error);
    }
    // const result = await fetch('../api/submission', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataWithUserEmail),
    // });
  
    // if (result.status === 200) {
    //   setFinishTitle("Submission success");
    //   setFinishMessage(dataWithUserEmail.judul_film + " has been submitted!")
    //   setShowFinishPopup(true);
    // } else {
    //   setIsLoading(false);
    //   setError(result.status === 400 ? "Email already exists" : "");
    // }
  };
  

  const [showModal, setShowModal] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showFinishPopup, setShowFinishPopup] = useState(false);
  const [FinishMessage, setFinishMessage] = useState("");
  const [FinishTitle, setFinishTitle] = useState("");
  
  return (
    <Fragment>
     <div className={styles.container}> 
     <title>
        Film Submission
      </title>
      <form onSubmit={onSubmit} className={styles.myForm} method='POST'>
        <div className={styles.headerForm}>
        <h1>FORM SUBMISSION</h1>
        </div> 

        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.titleIcon}>
            <Image src="/dataicon.svg" alt="logo" className={styles.logo} width={30} height={30}/>
            </div>
            <div className={styles.titleText}>
            {currentStepIndex === 0 && <h1>Film Data</h1>}
            {currentStepIndex === 1 && <h1>Director Data</h1>}
            {currentStepIndex === 2 && window.screen.width >= 700 && <h1>Production House and Producer Data</h1>}
            {currentStepIndex === 2 && window.screen.width < 700 && <h1>PH and Producer Data</h1>}
            </div>
          </div>
          <div className={styles.stepCounter}>
            Form {currentStepIndex + 1} of {steps.length}
          </div>
        </div>
        <hr className={styles.separator} />
        {step}
        <div className={styles.buttonContainer}> 
          {!isFirstStep && (
            <button className={styles.prevbutton} type="button" onClick={back}>
              Back
            </button>
          )}
          <button className={styles.nextbutton} type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
    <FilmTerms isVisible={showModal} onClose={() => setShowModal(false)}/>
    {/* <Agreement isVisible={showPopup} onClose={() => {setShowPopup(false), submitHandler}}/> */}
    <Agreement isVisible={showPopup} onClose={() => { setShowPopup(false); submitHandler({}); }} onBack={() => setShowPopup(false)} />
    <PopUp isVisible={showFinishPopup} onClose={() => { setIsLoading(false);push('/');}} message={FinishMessage} messageTitle={FinishTitle}/>






    </Fragment>
  )
}

export default SubmissionView