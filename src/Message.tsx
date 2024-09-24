import React from 'react';

interface Message {
  id: number;
  text: string;
  isSent: boolean;
  avatar: string;
}

const Message = () => {
  const messages: Message[] = [
    { id: 1, text: 'I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I\'m enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!', isSent: true, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, text: 'I\'m planning a weekend getaway to the mountains and can\'t wait to disconnect from the hustle and bustle of city life. I\'ve booked a cozy cabin with a fireplace, and I\'m looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.', isSent: true, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 3, text: 'I\'ve decided to take up a new hobby and start learning how to play the piano. It\'s something I\'ve always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.', isSent: false, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 4, text: 'I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I\'m enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!', isSent: true, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      {messages.map((message) => (
        <div
          key={message.id}
          style={{
            display: 'flex',
            justifyContent: message.isSent ? 'flex-end' : 'flex-start',
            marginBottom: '16px',
          }}
        >
          {!message.isSent && (
            <div style={{ marginRight: '10px' }}>
              <img
                src={message.avatar}
                alt="avatar"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
          )}
          <div
            style={{
              backgroundColor: message.isSent ? '#74C2FF' : '#D8D8D8',
              color: message.isSent ? 'black' : 'black',
              padding: '12px 16px',
              borderRadius: '16px',
              maxWidth: '60%',
              textAlign: 'left',
              border: message.isSent ? 'none ' : 'none',
              position: 'relative',
              fontWeight: '500',
              fontSize: '16px',

            }}
          >
            <p style={{ margin: 0 }}>{message.text}</p>
          </div>
          {message.isSent && (
            <div style={{ marginLeft: '10px' }}>
              <img
                src={message.avatar}
                alt="avatar"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Message;
