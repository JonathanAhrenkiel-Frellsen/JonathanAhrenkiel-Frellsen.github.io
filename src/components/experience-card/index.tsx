import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { useTranslation } from 'react-i18next';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  imgUrl,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  imgUrl?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <img src={imgUrl} alt="" className="float-start h-10 w-10 mr-5" />
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  const { t } = useTranslation();
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {t('experience_card.title')}
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences
                  .filter(
                    (experience) =>
                      experience.company ||
                      experience.imgUrl ||
                      experience.position ||
                      experience.from ||
                      experience.to,
                  )
                  .map((experience, index) => (
                    <ListItem
                      imgUrl={experience.imgUrl}
                      key={index}
                      time={`${experience.from} - ${t(experience.to)}`}
                      position={experience.position}
                      company={experience.company}
                      companyLink={
                        experience.companyLink
                          ? experience.companyLink
                          : undefined
                      }
                    />
                  ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
