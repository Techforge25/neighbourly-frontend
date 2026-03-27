import React from 'react';
import moment from 'moment';

interface Props {
  dateISO: string;
}

const RelativeTimeDisplay: React.FC<Props> = ({ dateISO }) => {
  return <span>{moment(dateISO).fromNow()}</span>;
};

export default RelativeTimeDisplay;