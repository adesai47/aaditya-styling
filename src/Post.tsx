import React from 'react';
import { Heart, MessageSquare } from 'lucide-react'; // Importing icons

const Post = () => {
  return (
    <div style={{
      maxWidth: '500px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header section with avatar, name, and time */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src="woman.png"
          alt="avatar"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px'
          }}
        />
        <div>
          <span style={{ fontWeight: 'bold', color: 'black'}}>Helena</span> <span style={{ color: '#6b7280' }}>in Group name</span>
          <p style={{ margin: '2px 0', color: '#6b7280', fontSize: '12px' }}>3 min ago</p>
        </div>
      </div>

      {/* Image section */}
      <div style={{
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="./flowerspost.jpeg"
          alt="post"
          style={{
            width: '458px',
            height: '458px',
            borderRadius: '8px',
            border: '2px solid #3b82f6',
            objectFit: 'cover' // Ensures image scaling to fit the dimensions without distortion
          }}
        />
      </div>

      {/* Description */}
      <p style={{ marginBottom: '10px', fontWeight: '500' }}>Post description</p>

      {/* Footer with icons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Aligns items to the start
        color: '#6b7280'
      }}>
        {/* Likes and comments in the same container */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Heart style={{ marginRight: '6px' }} />
          <span style={{ marginRight: '16px' }}>21 likes</span>
          <MessageSquare style={{ marginRight: '6px' }} />
          <span>4 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
