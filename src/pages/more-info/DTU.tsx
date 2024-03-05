import React from 'react';
import { useTranslation } from 'react-i18next';

const DTU: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t('DTU - Chemical filtering proccesses.description')}</div>;
};

export default DTU;
