import { AiOutlineControl } from 'react-icons/ai';
import { skeleton } from '../../utils';
import { MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const LanguageChanger = ({ loading }: { loading: boolean }) => {
  const [language, setLanguage] = useState<string>('dk');

  const { t } = useTranslation();

  useEffect(() => {
    if (language == 'Dansk') {
      i18n.changeLanguage('dk');
    } else if (language == 'English') {
      i18n.changeLanguage('en');
    }
  }, [language]);

  const changeLanguage = (
    e: MouseEvent<HTMLAnchorElement>,
    selectedLanguage: string,
  ) => {
    e.preventDefault();

    setLanguage(selectedLanguage);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">
                {t('language_card.title')}
              </span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : t('language_card.subtitle')}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-14 md:w-28',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <div
              title={t('language_card.change_theme')}
              className="dropdown dropdown-end"
            >
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
              >
                <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                <span className="hidden md:inline">
                  {t('language_card.change_theme')}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="inline-block w-4 h-4 ml-1 fill-current"
                >
                  <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-4 menu compact">
                  {['Dansk', 'English'].map((item, index) => (
                    <li key={index}>
                      {}
                      <a
                        onClick={(e) => changeLanguage(e, item)}
                        className={`${language === item ? 'active' : ''}`}
                      >
                        <span className="opacity-60 capitalize">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageChanger;
