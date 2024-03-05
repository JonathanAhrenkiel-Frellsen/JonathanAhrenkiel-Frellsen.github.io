import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

const FillOut: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <a
        href="https://github.com/JonathanAhrenkiel-Frellsen/FillOut"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 bg-neutral-200 text-black rounded-md"
      >
        <div className="p-3 bg-neutral-200 text-black rounded-md ">
          <FaGithub />
        </div>
      </a>

      <p>{t('Fill Out.p1')}</p>

      <div>
        <img
          src="/projects/FillOut/FillOutMenu.png"
          alt=""
          style={{ width: '200px', float: 'left' }}
        />
        <img
          src="/projects/FillOut/FillOutGame.png"
          alt=""
          style={{ width: '200px', float: 'left', marginLeft: '25px' }}
        />
      </div>
      <p>{t('Fill Out.p2')}</p>

      <div style={{}}>
        <img
          src="/projects/FillOut/Unity.png"
          alt=""
          style={{ width: '100%', float: 'left' }}
        />
      </div>
      <p>{t('Fill Out.p3')}</p>
    </div>
  );
};

export default FillOut;
