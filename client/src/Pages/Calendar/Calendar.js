import React, { useState } from 'react';

function Calendar() {
  const [email, setEmail] = useState('');
  const [calendarSource, setCalendarSource] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // to grab calendar 
  };

  // Source: https://jsfiddle.net/joshuatz/hq9m05tL/
  const showCal = () => {
    if (email && /.+\@.+/.test(email)) {
      // TO-DO: Pull email from user on login
      setCalendarSource(`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(email)}`);
    } else {
      // SOME ERROR HANDLING TO ADD HERE!
    }
  };
    
  /* conditional render: https://legacy.reactjs.org/docs/conditional-rendering.html */
  // to do - fix styling in CSS
  return (
    <div>
      <h2>Your Events Calendar</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your UW Gmail address"
        style={{ width: '200px'}}
      />
      <button onClick={showCal}>Show</button>

      {calendarSource && (
        <iframe
          src={calendarSource}
          width="1000"
          height="1000"
          title="Calendar"
        ></iframe>
      )}
    </div>
  );
}

export default Calendar;
