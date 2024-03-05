import { useEffect } from 'react';
// import { skeleton } from '../../utils';
import { RxCross2 } from 'react-icons/rx';

const ResumeInfoPopUp = () => {
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

  let close_popup = () => {};

  // make a popup where the background turns dark and the card is in the middle
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto"
      onClick={() => {
        close_popup();
      }}
    >
      <div
        className="bg-base-100 shadow-lg compact max-w-lg mx-auto rounded-lg overflow-hidden"
        onClick={(e) => {
          // Stop the event from bubbling up to the parent div
          e.stopPropagation();
        }}
      >
        <div className="card-body relative">
          <div
            className="absolute top-8 right-8 cursor-pointer"
            onClick={() => {
              close_popup();
            }}
          >
            {/* Assuming RxCross2 is a component for rendering a close icon */}
            <RxCross2 size={20} />
          </div>
          <div className="mx-3">
            <h5 className="card-title">test</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeInfoPopUp;
