import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    subject: "",
    Message: "",
  });
  let valuse, names;

  const data = (e) => {
    valuse = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: valuse });
  };

  // 傳送資料
  const send = async (e) => {
    const { Name, email, subject, Message } = user;
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "apliction/json",
      },
      body: JSON.stringify({
        Name,
        email,
        subject,
        Message,
      }),
    };

    const send = await fetch(
      "https://react-ecommerce-contact-f14c5-default-rtdb.firebaseio.com/Message.json",
      option
    );
    if (send) {
      alert("Message Send");
    } else {
      alert("Error Occoured Message Send failed");
    }
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="form">
            <h2>#contact us</h2>
            <form method="POST" action="">
              <div className="box">
                <div className="lable">
                  <h4>Name</h4>
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Name"
                    value={user.Name}
                    name="Name"
                    onChange={data}
                  />
                </div>
              </div>

              <div className="box">
                <div className="lable">
                  <h4>E-mail</h4>
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="E-mail"
                    value={user.email}
                    name="email"
                    onChange={data}
                  />
                </div>
              </div>

              <div className="box">
                <div className="lable">
                  <h4>Subject</h4>
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={user.subject}
                    name="subject"
                    onChange={data}
                  />
                </div>
              </div>

              <div className="box">
                <div className="lable">
                  <h4>Message</h4>
                </div>
                <div className="input">
                  <textarea
                    placeholder="Message !"
                    value={user.Message}
                    name="Message"
                    onChange={data}
                  ></textarea>
                </div>
              </div>
              <button type="sublit" onClick={send}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
