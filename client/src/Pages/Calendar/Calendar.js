import React, { useState, useEffect } from 'react';

function Calendar() {
  const [userEmail, setUserEmail] = useState('');
  const [calendarSource, setCalendarSource] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock calendars
  const calendarConfig = [
    {
      name: 'MESH UW',
      id: 'auc21mk0r340jglp0q5kh4fq0c@group.calendar.google.com', // Replace (this is GWC)
      color: '%234CAF50', // Turquoise
      type: 'external'
    },
    {
      name: 'Girls Who Code - College Loops',
      id: 'university@uw.edu', // Replace
      color: '%23E91E63', // Pink
      type: 'external'
    },
    {
      name: 'IUGA at UW',
      id: 'studygroups@group.calendar.google.com', // Replace
      color: '%239C27B0', // Purple
      type: 'external'
    }
  ];

  useEffect(() => {
    const mockEmail = 'aelysha@uw.edu'; // Replace 

    setUserEmail(mockEmail);
  
    if (mockEmail) {
      showCombinedCal(mockEmail);
    }
    
    setIsLoading(false);
  }, []);

  const showCombinedCal = (email = userEmail) => {
    if (!email || !/.+\@.+/.test(email)) {
      console.error('Invalid email provided');
      return;
    }

    const calendars = calendarConfig.map(cal => ({
      ...cal,
      id: cal.type === 'personal' ? email : cal.id
    }));

    const baseUrl = 'https://calendar.google.com/calendar/embed';
    
    const srcParams = calendars
      .filter(cal => cal.id) 
      .map(cal => `src=${encodeURIComponent(cal.id)}&color=${cal.color}`)
      .join('&');
    
    const additionalParams = [
      'ctz=America%2FLos_Angeles', // PST
      'showTitle=1',
      'showNav=1',
      'showDate=1',
      'showPrint=0',
      'showTabs=1',
      'showCalendars=1',
      'showTz=0',
      'mode=MONTH', // Week, Month, Agenda
      'height=600',
      'wkst=1' // Sunday
    ].join('&');
    
    const fullUrl = `${baseUrl}?${srcParams}&${additionalParams}`;
    
    console.log('Loading combined calendar:', fullUrl);
    setCalendarSource(fullUrl);
  };

  if (isLoading) {
    return <div>Loading calendar...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Your Events Calendar - May 2025</h1>
        
        {/* Calendar Colors */}
        <div style={{ marginBottom: '15px' }}>
          <h2>Your RSOs</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {calendarConfig.map((cal, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div 
                  style={{ 
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: `#${cal.color.slice(3)}`, 
                    borderRadius: '2px' 
                  }}
                />
                <span style={{ fontSize: '20px' }}>{cal.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {calendarSource ? (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src={calendarSource}
            width="100%"
            height="700"
            title="Combined Calendar View"
            style={{ 
              border: 'none',
              minHeight: '700px'
            }}
          />
        </div>
      ) : (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <p>Calendar not loaded. Please check your email or try refreshing.</p>
        </div>
      )}
    </div>
  );
}

export default Calendar;