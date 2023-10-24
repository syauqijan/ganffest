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

  
  // const onSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (!isLastStep) return next();
  //   console.log(data)
  //   const result = await fetch('../api/submission', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  // });
  const onSubmit = async (e: any) => {
    e.preventDefault();

    // Check if it's the last step
    if (!isLastStep) return next();

    // Add user's email to the data
    const dataWithUserEmail = {
        ...data,
        emailSubmitter: session?.user?.email || '', // Use the user's email from the session
    };

    const result = await fetch('../api/submission', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithUserEmail), // Include the user's email
    });
  
  

      if(result.status === 200){
          e.target.reset();
          setIsLoading(false);
          push('/');
      }else{
          console.log(result);
          setIsLoading(false);
          setError(result.status===400 ? "Email already exists" : "");
      }
  }

  const [showModal, setShowModal] = useState(true);
  
  return (
    <Fragment>
     <div className={styles.container}> 
      
      <form onSubmit={onSubmit} className={styles.myForm} method='POST'>
        <div className={styles.headerForm}>
        <h1>FORM SUBMISSION</h1>
        </div> 

        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.titleIcon}>
            <img src="/dataicon.svg" alt="logo" className={styles.logo} />
            </div>
            <div className={styles.titleText}>
            {currentStepIndex === 0 && <h1>Film Data</h1>}
            {currentStepIndex === 1 && <h1>Director Data</h1>}
            {currentStepIndex === 2 && <h1>Production House and Producer Data</h1>}
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
    </Fragment>
  )
}

export default SubmissionView