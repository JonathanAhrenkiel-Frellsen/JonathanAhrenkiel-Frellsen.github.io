import { useEffect } from 'react';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
// import { skeleton } from '../../utils';
import { RxCross2 } from 'react-icons/rx';
import { Route, Routes } from 'react-router-dom';
import BasedCapital from '../../pages/more-info/BasedCapital';
import DTU from '../../pages/more-info/DTU';
import FillOut from '../../pages/more-info/FillOut';
import KYC from '../../pages/more-info/KYC';

const MoreInfoPopUp = ({
  project,
  setSelectedProject,
}: {
  project: SanitizedExternalProject;
  setSelectedProject: (project: SanitizedExternalProject | null) => void;
}) => {
  //   const renderSkeleton = () => {
  //     const array = [];
  //     for (let index = 0; index < 12; index++) {
  //       array.push(
  //         <div key={index}>
  //           {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
  //         </div>,
  //       );
  //     }

  //     return array;
  //   };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

  let close_popup = () => {
    setSelectedProject(null);
    document.body.classList.remove('overflow-hidden');
  };

  // make a popup where the background turns dark and the card is in the middle
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto h-1/1"
      onClick={() => {
        close_popup();
      }}
    >
      <div
        className="bg-base-100 shadow-lg compact max-w-lg mx-auto rounded-lg overflow-hidden overflow-y-auto h-4/5 p-5"
        onClick={(e) => {
          // Stop the event from bubbling up to the parent div
          e.stopPropagation();
        }}
      >
        <div className="relative">
          <div
            className="absolute top-1 right-1 cursor-pointer"
            onClick={() => {
              close_popup();
            }}
          >
            {/* Assuming RxCross2 is a component for rendering a close icon */}
            <RxCross2 size={20} />
          </div>
          <div className="mx-3">
            <h5 className="card-title">{project.title}</h5>
          </div>
          <div className="p-3">
            {/* Rendering rich text content */}
            <Routes>
              <Route path={'/Based Capital AG'} element={<BasedCapital />} />
              <Route
                path={'/DTU - Chemical filtering proccesses'}
                element={<DTU />}
              />
              <Route path={'/Fill Out'} element={<FillOut />} />
              <Route path={'/AI KYC System'} element={<KYC />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPopUp;
