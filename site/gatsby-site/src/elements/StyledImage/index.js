import React from 'react';

export function StyledImage(props) {
  return (
    <>
      <img
        {...props}
        alt={props.alt}
        className={`tw-flex tw-ml-auto tw-mr-auto tw-mb-2 tw-justify-around tw-items-center tw-w-[85%] tw-max-w-[355px] tw-max-h-[80px] tw-cursor-zoom-in ${
          props.className || ''
        }`}
      />
    </>
  );
}

export function StyledImageModal(props) {
  return (
    <>
      <img
        {...props}
        alt={props.alt}
        className={`tw-flex tw-ml-auto tw-mr-auto tw-mb-2 tw-justify-around tw-items-center tw-w-[85%] tw-max-w-[355px] tw-max-h-[80px] ${
          props.className || ''
        }`}
      />
    </>
  );
}

export function StyledImageCover(props) {
  return (
    <>
      <img
        {...props}
        alt={props.alt}
        className={`tw-flex tw-ml-auto tw-mr-auto tw-mb-[30px] tw-justify-around tw-items-center tw-max-w-[220px] tw-rounded tw-border-black ${
          props.className || ''
        }`}
      />
    </>
  );
}