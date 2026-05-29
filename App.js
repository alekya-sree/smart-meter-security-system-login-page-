import React, { useState } from "react";
import "./App.css";

function App() {

  // CAPTCHA FUNCTION

  function generateCaptcha() {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    let result = "";

    for (let i = 0; i < 5; i++) {

      result +=
        chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
    }

    return result;
  }

  // STATES

  const [tab, setTab] = useState("login");

  const [showRegister, setShowRegister] =
    useState(false);

  const [showPopup, setShowPopup] =
    useState(false);

  const [popupMessage, setPopupMessage] =
    useState("");

  const [captcha, setCaptcha] =
    useState(generateCaptcha());

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  // LOGIN DATA

  const [loginData, setLoginData] =
    useState({
      username: "",
      password: "",
      captchaInput: "",
    });

  // REGISTER FORM

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  // SAVED USER

  const [savedUser, setSavedUser] =
    useState(null);

  // REQUEST FORM

  const [requestForm, setRequestForm] =
    useState({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      employeeId: "",
    });

  // REQUESTS

 const requests = [

  {
    id: "REQ-2024-00841",
    title: "Meter Access Authorization",
    status: "Under Review",
    date: "12 July 2025",
    time: "10:45 AM",
    updates: "Documents Verified",
    email: "rajesh@gmail.com",
    mobile: "9876543210",
    employeeId: "1023",

    documents: [
      "Government ID",
      "Security Clearance",
      "Employee Badge",
    ],
  },

  {
    id: "REQ-2024-00840",
    title: "Device Certificate Renewal",
    status: "Approved",
    date: "10 July 2025",
    time: "02:18 PM",
    updates: "Approved by Security Team",
    email: "sunita@gmail.com",
    mobile: "9123456780",
    employeeId: "2201",

    documents: [
      "Device Certificate",
      "Vendor Approval",
      "Passport Photo",
    ],
  },

  {
    id: "REQ-2024-00839",
    title: "Vendor Portal Access",
    status: "Pending",
    date: "08 July 2025",
    time: "06:42 PM",
    updates:
      "Waiting for Manager Approval",
    email: "amit@gmail.com",
    mobile: "9988776655",
    employeeId: "7744",

    documents: [
      "Vendor Contract",
      "Company ID",
    ],
  },

  {
    id: "REQ-2024-00838",
    title: "Smart Meter Inspection",
    status: "Approved",
    date: "05 July 2025",
    time: "09:07 AM",
    updates:
      "Inspection Completed Successfully",
    email: "kiran@gmail.com",
    mobile: "9871234560",
    employeeId: "4412",

    documents: [
      "Inspection Form",
      "Meter Image",
      "Approval Letter",
    ],
  },

  {
    id: "REQ-2024-00837",
    title: "Track Maintenance Access",
    status: "Under Review",
    date: "03 July 2025",
    time: "11:56 AM",
    updates:
      "Pending Final Security Review",
    email: "meena@gmail.com",
    mobile: "9001122334",
    employeeId: "6610",

    documents: [
      "Track Permit",
      "Safety Certificate",
    ],
  },

];

  // VALIDATE REGISTER

  const validateForm = () => {

    return (
      form.firstName.length > 0 &&
      form.firstName.length <= 9 &&

      form.lastName.length > 0 &&
      form.lastName.length <= 8 &&

      /^[0-9]{10}$/.test(form.mobile) &&

      form.email.includes("@") &&

      form.password.length >= 4
    );
  };

  // VALIDATE REQUEST

  const validateRequest = () => {

    return (
      requestForm.firstName.length > 0 &&
      requestForm.firstName.length <= 9 &&

      requestForm.lastName.length > 0 &&
      requestForm.lastName.length <= 8 &&

      /^[0-9]{10}$/.test(
        requestForm.mobile
      ) &&

      requestForm.email.includes("@") &&

      requestForm.employeeId.length > 0
    );
  };

  // CREATE ACCOUNT

  const handleCreate = () => {

    if (validateForm()) {

      setSavedUser({
        username: form.firstName,
        password: form.password,
      });

      setPopupMessage(
        " Account Created Successfully"
      );

      setShowPopup(true);

      setTimeout(() => {

        setShowPopup(false);

        setShowRegister(false);

      }, 3000);
    }
  };

  // LOGIN

  const handleLogin = () => {

    if (
      savedUser &&

      loginData.username ===
        savedUser.username &&

      loginData.password ===
        savedUser.password &&

      loginData.captchaInput === captcha
    ) {

      setPopupMessage(
        "✅ Login Successful"
      );

      setShowPopup(true);

      setTimeout(() => {

        setShowPopup(false);

      }, 3000);

    } else {

      setPopupMessage(
        "❌ Invalid Login or Captcha"
      );

      setShowPopup(true);

      setTimeout(() => {

        setShowPopup(false);

      }, 3000);

      setCaptcha(generateCaptcha());
    }
  };

  // REQUEST SUBMIT

  const handleRequest = () => {

    setPopupMessage(
      "✅ Access Request Submitted"
    );

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

    }, 3000);
  };

  return (

    <div className="app">

      {/* POPUP */}

      {showPopup && (

        <div className="popup">

          <div className="popupCard">

            <h2>
              {popupMessage}
            </h2>

          </div>

        </div>
      )}

      <div className="overlay"></div>

      <div className="container">

        {/* LOGO */}

       <div className="logo">
        🚆
        </div>

        <h1>
          Railway Meter Security
        </h1>

        {/* TABS */}

        <div className="tabs">

          <button
            className={
              tab === "login"
                ? "active"
                : ""
            }

            onClick={() => {

              setTab("login");

              setShowRegister(false);

              setCaptcha(
                generateCaptcha()
              );
            }}
          >
            Sign In
          </button>

          <button
            className={
              tab === "request"
                ? "active"
                : ""
            }

            onClick={() =>
              setTab("request")
            }
          >
            New Request
          </button>

          <button
            className={
              tab === "track"
                ? "active"
                : ""
            }

            onClick={() =>
              setTab("track")
            }
          >
            Track Request
          </button>

        </div>

        {/* LOGIN */}

        {tab === "login" &&
          !showRegister && (

          <div className="card">

            <label>
              Username
            </label>

            <input
              type="text"

              placeholder="Enter Username"

              value={
                loginData.username
              }

              onChange={(e) =>
                setLoginData({

                  ...loginData,

                  username:
                    e.target.value,
                })
              }
            />

            <label>
              Password
            </label>

            <input
              type="password"

              placeholder="Enter Password"

              value={
                loginData.password
              }

              onChange={(e) =>
                setLoginData({

                  ...loginData,

                  password:
                    e.target.value,
                })
              }
            />

            <label>
              Captcha
            </label>

            <div className="captchaRow">

              <div
                className="captchaBox"

                onClick={() =>
                  setCaptcha(
                    generateCaptcha()
                  )
                }

                title="Click to Refresh"
              >
                {captcha}
              </div>

              <input
                type="text"

                placeholder="Enter Captcha"

                value={
                  loginData.captchaInput
                }

                onChange={(e) =>
                  setLoginData({

                    ...loginData,

                    captchaInput:
                      e.target.value,
                  })
                }
              />

            </div>

            <button
              className="mainBtn"

              onClick={handleLogin}
            >
              Sign In
            </button>

            <div className="accountText">

              Don't have an account?

              <span
                onClick={() =>
                  setShowRegister(true)
                }
              >
                Create Account
              </span>

            </div>

          </div>
        )}

        {/* REGISTER */}

        {showRegister && (

          <div className="card">

            <h2 className="registerTitle">
              Create Account
            </h2>

            <label>
              First Name
            </label>

            <input
              type="text"

              maxLength={9}

              value={form.firstName}

              onChange={(e) =>
                setForm({

                  ...form,

                  firstName:
                    e.target.value,
                })
              }

              placeholder="Max 13 Characters"
            />

            <label>
              Last Name
            </label>

            <input
              type="text"

              maxLength={8}

              value={form.lastName}

              onChange={(e) =>
                setForm({

                  ...form,

                  lastName:
                    e.target.value,
                })
              }

              placeholder="Max 8 Characters"
            />

            <label>
              Mobile Number
            </label>

            <input
              type="text"

              maxLength={10}

              value={form.mobile}

              onChange={(e) => {

                const value =
                  e.target.value.replace(
                    /\D/g,
                    ""
                  );

                setForm({

                  ...form,

                  mobile: value,
                });
              }}

              placeholder="10 Digit Number"
            />

            <label>
              Email Address
            </label>

            <input
              type="email"

              value={form.email}

              onChange={(e) =>
                setForm({

                  ...form,

                  email:
                    e.target.value,
                })
              }

              placeholder="example@gmail.com"
            />

            <label>
              Password
            </label>

            <input
              type="password"

              value={form.password}

              onChange={(e) =>
                setForm({

                  ...form,

                  password:
                    e.target.value,
                })
              }

              placeholder="Enter Password"
            />

            <button
              className={
                validateForm()
                  ? "mainBtn"
                  : "disabledBtn"
              }

              disabled={
                !validateForm()
              }

              onClick={
                handleCreate
              }
            >
              Create Account
            </button>

            <div className="accountText">

              Already have an account?

              <span
                onClick={() =>
                  setShowRegister(false)
                }
              >
                Sign In
              </span>

            </div>

          </div>
        )}

        {/* REQUEST */}

        {tab === "request" && (

          <div className="card">

            <h2 className="registerTitle">
              New Access Request
            </h2>

            <label>
              First Name
            </label>

            <input
              type="text"

              maxLength={9}

              placeholder="Max 9 Characters"

              value={
                requestForm.firstName
              }

              onChange={(e) =>
                setRequestForm({

                  ...requestForm,

                  firstName:
                    e.target.value,
                })
              }
            />

            <label>
              Last Name
            </label>

            <input
              type="text"

              maxLength={8}

              placeholder="Max 8 Characters"

              value={
                requestForm.lastName
              }

              onChange={(e) =>
                setRequestForm({

                  ...requestForm,

                  lastName:
                    e.target.value,
                })
              }
            />

            <label>
              Mobile Number
            </label>

            <input
              type="text"

              maxLength={10}

              placeholder="10 Digit Number"

              value={
                requestForm.mobile
              }

              onChange={(e) => {

                const value =
                  e.target.value.replace(
                    /\D/g,
                    ""
                  );

                setRequestForm({

                  ...requestForm,

                  mobile: value,
                });
              }}
            />

            <label>
              Email Address
            </label>

            <input
              type="email"

              placeholder="example@gmail.com"

              value={
                requestForm.email
              }

              onChange={(e) =>
                setRequestForm({

                  ...requestForm,

                  email:
                    e.target.value,
                })
              }
            />

            <label>
              Employee ID
            </label>

            <input
  type="text"

  maxLength={10}

  placeholder="Employee ID"

  value={
    requestForm.employeeId
  }

  onChange={(e) => {

    const value =
      e.target.value.replace(
        /\D/g,
        ""
      );

    setRequestForm({

      ...requestForm,

      employeeId: value,
    });
  }}
/>

            <button
              className={
                validateRequest()
                  ? "mainBtn"
                  : "disabledBtn"
              }

              disabled={
                !validateRequest()
              }

              onClick={
                handleRequest
              }
            >
              Continue
            </button>

          </div>
        )}

        {/* TRACK REQUEST */}

        {tab === "track" && (

          <div className="card">

            {!selectedRequest && (

              <>

                <input
                  type="text"

                  placeholder="Search Request ID"
                />

                {requests.map(
                  (req, index) => (

                    <div

                      key={index}

                      className="requestItem"

                      onClick={() =>
                        setSelectedRequest(req)
                      }

                      style={{
                        cursor:
                          "pointer",
                      }}
                    >

                      <div>

                        <h3>
                          {req.id}
                        </h3>

                        <p>
                          {req.title}
                        </p>

                        <p
                          style={{
                            color:
                              "#9ca3af",

                            marginTop:
                              "5px",

                            fontSize:
                              "14px",
                          }}
                        >
                          {req.date}
                        </p>

                      </div>

                      <span
                        className={
                          req.status ===
                          "Approved"

                            ? "badge green"

                            : "badge blue"
                        }
                      >
                        {req.status}
                      </span>

                    </div>
                  )
                )}

              </>
            )}

            {selectedRequest && (

              <div>

                <button
                  className="mainBtn"

                  onClick={() =>
                    setSelectedRequest(
                      null
                    )
                  }
                >
                  Back
                </button>

                <div
                  className="requestItem"

                  style={{
                    marginTop:
                      "20px",

                    display:
                      "block",
                  }}
                >

                  <h3>
                    {selectedRequest.id}
                  </h3>

                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Request:
                    </strong>

                    {" "}

                    {
                      selectedRequest.title
                    }
                  </p>

                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Status:
                    </strong>

                    {" "}

                    {
                      selectedRequest.status
                    }
                  </p>

                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Date:
                    </strong>

                    {" "}

                    {
                      selectedRequest.date
                    }
                  </p>

                  <p
  style={{
    marginTop:
      "10px",
  }}
>
  <strong>
    Latest Update:
  </strong>

  {" "}

  {
    selectedRequest.updates
  }
</p>

<p
  style={{
    marginTop:
      "10px",
  }}
>
  <strong>
    Latest Update:
  </strong>

  {" "}

  {
    selectedRequest.updates
  }
</p>

<p
  style={{
    marginTop:
      "10px",
  }}
>
  <strong>
    Last Updated Time:
  </strong>

  {" "}

  {
    selectedRequest.time
  }
</p>
                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Email:
                    </strong>

                    {" "}

                    {
                      selectedRequest.email
                    }
                  </p>

                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Mobile:
                    </strong>

                    {" "}

                    {
                      selectedRequest.mobile
                    }
                  </p>

                  <p
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >
                    <strong>
                      Employee ID:
                    </strong>

                    {" "}

                    {
                      selectedRequest.employeeId
                    }
                  </p>

                  <div
                    style={{
                      marginTop:
                        "20px",
                    }}
                  >

                    <strong
                      style={{
                        color:
                          "#00d4ff",
                      }}
                    >
                      Submitted Documents:
                    </strong>

                    <ul
                      style={{
                        marginTop:
                          "10px",

                        paddingLeft:
                          "20px",

                        color:
                          "white",
                      }}
                    >

                      {selectedRequest.documents.map(

                        (
                          doc,
                          index
                        ) => (

                          <li
                            key={index}
                          >
                            {doc}
                          </li>
                        )
                      )}

                    </ul>

                  </div>

                </div>

              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default App;