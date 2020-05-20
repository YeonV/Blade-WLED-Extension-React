import React from 'react';

export default function ShareButton({ name, urlString }) {
  return (
    <div className="button shareButton">
      <i
        className="fa-fw fas fa-share-alt"
        onClick={() => {
          window.open(
            `https://wled.yeonv.com/wp-admin/post-new.php?post_title=${encodeURIComponent(
              name
            )}&excerpt=${encodeURIComponent(urlString.split('win')[1])}`,
            '_blank'
          );
        }}
      ></i>
    </div>
  );
}
