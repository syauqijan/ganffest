import React, { useState } from 'react';
import FilmDataForm from './FilmDataForm';
import DirectorDataForm from './DirectorDataForm';
import ProductionHouseDataForm from './ProductionHouseDataForm';

const SubmissionPage = () => {
  const [step, setStep] = useState(1);
  const [filmData, setFilmData] = useState({});
  const [directorData, setDirectorData] = useState({});
  const [productionHouseData, setProductionHouseData] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Kirim data ke server atau lakukan tindakan lain
    console.log('Data yang dikirim:', filmData, directorData, productionHouseData);
  };

  return (
    <div>
      <h1>Form Submission</h1>
      {step === 1 && (
        <FilmDataForm
          data={filmData}
          setData={setFilmData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <DirectorDataForm
          data={directorData}
          setData={setDirectorData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <ProductionHouseDataForm
          data={productionHouseData}
          setData={setProductionHouseData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default SubmissionPage;
