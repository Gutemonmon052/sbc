import * as React from 'react';


export function OurProductCardSkeleton () {
  return (
    <div>
      <div className="prdcard-skl">
        <div className='prdcard-skl-img'></div>
        <div className="prdcard-skl-desc">
          <div className="prdcard-skl-ctg"></div>
          <div className="prdcard-skl-title"></div>
          <div className="prdcard-skl-price"></div>
          <div className="prdcard-skl-text">
            <div className="prdcard-skl-p"></div>
          </div>
        </div>
        <div className="prdcard-skl-btn"></div>
      </div>
    </div>
  );
}
