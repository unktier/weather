import React from 'react';

const CLOUD_COVER = {
    1: [0, 6],
    2: [6, 19],
    3: [19, 31],
    4: [31, 44],
    5: [44, 56],
    6: [56, 69],
    7: [69, 81],
    8: [81, 94],
    9: [94, 100]
}

const CloudCover = ({ cloudCover }) => {
    return (
        <div className="cloud-cover">
            <div className="cloud-cover-value">
                Cloud Cover:&emsp;{`${CLOUD_COVER[cloudCover][0]}%-${CLOUD_COVER[cloudCover][1]}%`}
            </div>
        </div>
    )
};

export default CloudCover;