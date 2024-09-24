import { Heart, MessageSquare } from 'lucide-react'; // Importing icons

const Post = () => {
  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header section with avatar on the left, and text aligned with the avatar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {/* Avatar stays on the left */}
        <div style={{
          flex: '0 0 50px', // Fixed width for avatar
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img
            src="woman.png"
            alt="avatar"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Text (Name and Group name in one line) aligned with avatar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Ensures vertical alignment
          marginLeft: '10px'
        }}>
          <div>
            <span style={{ fontWeight: 'bold', color: 'black' }}>Helena</span> <span style={{ color: '#6b7280' }}>in Group name</span>
          </div>
          <p style={{ margin: '2px 0', color: '#6b7280', fontSize: '12px' }}>3 min ago</p>
        </div>
      </div>

      {/* Image section, moved to the right */}
      <div style={{
        marginBottom: '10px',
        marginLeft: '60px'
      }}>
        <img
          src="./flowerspost.jpeg"
          alt="post"
          style={{
            width: '458px',
            height: '458px',
            borderRadius: '8px',
            border: '2px solid #3b82f6',
            objectFit: 'cover' 
          }}
        />
      </div>

      {/* Description */}
      <p style={{ marginBottom: '10px', fontWeight: '500', color: 'black', marginLeft: '60px'}}>Post description</p>

      {/* Footer with icons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        color: '#6b7280'
      }}>
        {/* Likes and comments in the same container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Heart style={{ marginRight: '6px', marginLeft: '60px' }} />
          <span style={{ marginRight: '16px' }}>21 likes</span>
          <MessageSquare style={{ marginRight: '6px' }} />
          <span>4 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
