import React from 'react';

import SearchIcon from '@constants/files/SearchIcon';
import RedditIcon from '@constants/files/RedditIcon';
import ArrowLeftIcon from '@constants/files/ArrowLeftIcon';
import CommentIcon from '@constants/files/CommentIcon';
import LikeIcon from '@constants/files/LikeIcon';

export const search = props => {
  return <SearchIcon {...props} />;
};
export const reddit = props => {
  return <RedditIcon {...props} />;
};
export const arrowLeft = props => {
  return <ArrowLeftIcon {...props} />;
};
export const comment = props => {
  return <CommentIcon {...props} />;
};
export const like = props => {
  return <LikeIcon {...props} />;
};
