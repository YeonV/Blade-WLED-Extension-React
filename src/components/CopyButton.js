import React from 'react';
import useClipboard from 'react-use-clipboard';
import { toast } from 'react-toastify';

export default function CopyButton({ urlString }) {
  const [isCopied, setIsCopied] = useClipboard(urlString);
  const notify = (text) =>
    toast.success(text, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div
      className="button copyButton"
      onClick={() => {
        setIsCopied();
        notify('Copied to clipboard!');
      }}
    >
      <i className="fa-fw far fa-clipboard"></i>
    </div>
  );
}
