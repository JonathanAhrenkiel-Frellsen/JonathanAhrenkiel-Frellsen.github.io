import React from 'react';
import { useTranslation } from 'react-i18next';

const KYC: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('AI KYC System.p1')}</p>
      <img src="/projects/KYC/Start.png" alt="" />
      <p>{t('AI KYC System.p2')}</p>

      <img src="/projects/KYC/Menu.png" alt="" />
      <p>{t('AI KYC System.p3')}</p>

      <video width="100%" controls={false} autoPlay loop>
        <source src="/projects/KYC/FaceVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{t('AI KYC System.p4')}</p>

      <img src="/projects/KYC/Completed.png" alt="" />
      <p>{t('AI KYC System.p5')}</p>
    </div>
  );
};

export default KYC;
