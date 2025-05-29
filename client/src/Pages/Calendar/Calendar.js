import React, { useState, useEffect } from 'react';

function Calendar() {
  const [userEmail, setUserEmail] = useState('');
  const [calendarSource, setCalendarSource] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock calendars - replace these with actual calendar IDs
  const calendarConfig = [
    {
      name: 'MESH UW',
      id: 'auc21mk0r340jglp0q5kh4fq0c@group.calendar.google.com', // Replace with actual club calendar ID
      color: '%234CAF50', // Turquoise
      type: 'external'
    },
    {
      name: 'Girls Who Code - College Loops',
      id: 'university@uw.edu', // Replace with actual university calendar ID
      color: '%23E91E63', // Pink
      type: 'external'
    },
    {
      name: 'IUGA at UW',
      id: 'studygroups@group.calendar.google.com', // Replace with actual study group calendar ID
      color: '%239C27B0', // Purple
      type: 'external'
    }
  ];

  useEffect(() => {
    // Mock getting email from login - replace this with actual login integration
    const mockEmail = 'aelysha@uw.edu'; // Replace with actual email from login
    
    // In real implementation, you might get this from:
    // - localStorage.getItem('userEmail')
    // - Redux store
    // - Context API
    // - Props passed from login component
    
    setUserEmail(mockEmail);
    
    // Auto-load combined calendar when component mounts
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

    // Create calendar configuration with user's email
    const calendars = calendarConfig.map(cal => ({
      ...cal,
      id: cal.type === 'personal' ? email : cal.id
    }));

    // Build the combined calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/embed';
    
    // Create source parameters for each calendar
    const srcParams = calendars
      .filter(cal => cal.id) // Only include calendars with valid IDs
      .map(cal => `src=${encodeURIComponent(cal.id)}&color=${cal.color}`)
      .join('&');
    
    // Additional parameters for better display
    const additionalParams = [
      'ctz=America%2FLos_Angeles', // Pacific timezone - adjust as needed
      'showTitle=1',
      'showNav=1',
      'showDate=1',
      'showPrint=0',
      'showTabs=1',
      'showCalendars=1',
      'showTz=0',
      'mode=MONTH', // Can be WEEK, MONTH, or AGENDA
      'height=600',
      'wkst=1' // Week starts on Sunday
    ].join('&');
    
    const fullUrl = `${baseUrl}?${srcParams}&${additionalParams}`;
    
    console.log('Loading combined calendar:', fullUrl);
    setCalendarSource(fullUrl);
  };

  const refreshCalendar = () => {
    showCombinedCal();
  };

  if (isLoading) {
    return <div>Loading calendar...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1>Your Events Calendar - May 2025</h1>
        
        {/* Calendar Legend */}
        <div style={{ marginBottom: '15px' }}>
          <h2>Your RSOs</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {calendarConfig.map((cal, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div 
                  style={{ 
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: `#${cal.color.slice(3)}`, // Remove %23 and add #
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