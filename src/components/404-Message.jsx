import React from "react";
import { Link } from "react-router-dom";
import "../styles/404-Message.css";

// setting my function for the text type animation
let message = "Oops! 😅 It seems you've stumbled upon an uncharted territory. The page you're seeking is playing hide and seek 🙈. Please check the URL for typos or head back to our homepage to explore 🏠. If you're feeling lost, don't hesitate to contact us for guidance 🗺️. We're here to make your browsing experience enjoyable! 🌟"
let Message = ()=>{
  return (
    <div className="Holder404">
      <p>{message}</p>
      <button>
        <p>
          <Link to="/">
           {"Home Page"}
          </Link>
        </p>
      </button>
    </div>
  );
}
export default Message;
