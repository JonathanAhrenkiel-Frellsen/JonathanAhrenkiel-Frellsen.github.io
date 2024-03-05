import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
  is_side_projects,
  setSelectedProject,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
  is_side_projects: boolean;
  setSelectedProject?: (project: SanitizedExternalProject) => void;
}) => {
  const { t } = useTranslation();

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-20 h-20 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  let navigate = useNavigate();

  const renderExternalProjects = () => {
    return externalProjects.map(
      (item, index) =>
        !item.is_side_project != is_side_projects && (
          <div
            className="card shadow-lg compact bg-base-100 cursor-pointer"
            key={index}
            onClick={(e) => {
              e.preventDefault();

              navigate('/' + item.title);

              if (item.link) {
                try {
                  if (googleAnalyticId) {
                    ga.event('Click External Project', {
                      post: item.title,
                    });
                  }
                } catch (error) {
                  console.error(error);
                }

                window?.open(item.link, '_blank');
              } else {
                setSelectedProject && setSelectedProject(item);
              }
            }}
          >
            <div className="p-8 h-full w-full">
              <div className="flex items-center flex-col">
                <div className="w-full">
                  <div className="px-4">
                    <div className="text-center w-full">
                      <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                        {item.title}
                      </h2>
                      {item.thumbnail_url && (
                        <div className="avatar opacity-90">
                          <div className="w-20 h-20 mask mask-squircle">
                            <LazyImage
                              src={item.thumbnail_url}
                              alt={'thumbnail'}
                              placeholder={skeleton({
                                widthCls: 'w-full',
                                heightCls: 'h-full',
                                shape: '',
                              })}
                            />
                          </div>
                        </div>
                      )}
                      {item.tags && (
                        <div className="mt-2 flex items-center flex-wrap justify-center">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="mt-1 text-base-content text-opacity-60 text-sm">
                        {t(item.title + '.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
