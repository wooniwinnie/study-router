import React from 'react';
import { useParams } from 'react-router-dom';
export const VideoDetail = () => {
    const { videoId } = useParams();
    console.log(videoId);
    return <div>VideoDetail</div>;
};
