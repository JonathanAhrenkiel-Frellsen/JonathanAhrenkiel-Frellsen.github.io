import React from 'react';
import { useTranslation } from 'react-i18next';

const BasedCapital: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('Based Capital AG.p1')}</p>
      <img src="/projects/Based AG/Help.png" alt="" />
      <p>{t('Based Capital AG.p2')}</p>

      <img src="/projects/Based AG/List.png" alt="" />
      <p>{t('Based Capital AG.p3')}</p>

      <video width="100%" controls={false} autoPlay loop>
        <source
          src="/projects/Based AG/BasedLiveTrading.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <p>{t('Based Capital AG.p4')}</p>

      <p>{t('Based Capital AG.p5')}</p>
    </div>
  );
};

export default BasedCapital;
