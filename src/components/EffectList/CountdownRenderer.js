import React from 'react';
import { zeroPad } from 'react-countdown';
export default function CountdownRenderer({
  hours,
  minutes,
  seconds,
  completed,
}) {
  if (completed) {
    return <></>;
  } else {
    return (
      <span className="countdown">
        {zeroPad(minutes + hours * 60)}:{zeroPad(seconds)}
      </span>
    );
  }
}
