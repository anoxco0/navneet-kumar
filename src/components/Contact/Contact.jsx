import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../redux/contact/action";
import "./contact.css";

export const Contact = ()=>{
    const dispatch = useDispatch()
    const {theme} = useSelector(store=>store.home);
    const { message, loading } = useSelector((state) => state.sendMessage);
    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: "",
      });
    const handleForm = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
      };
      const submitHandle = (e) => {
        e.preventDefault();
        dispatch(
          sendMessage({
            email: form.email,
            subject: form.subject,
            message: form.message,
          })
        );
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(message);
      };
    return(
        <div
        id="Contact"
        className="contact"
        style={{
          backgroundColor: theme ? "#2a2a72" : "#485461",
          backgroundImage: theme
            ? "linear-gradient(315deg, #f5f7fa 0%, #b8c6db 74%)"
            : "linear-gradient(315deg, #485461 0%, #28313b 74%)",
        }}
      >
        <div id="head">Contact</div>
        <div id="contact">
          <div>
            <div id="formlabel"> Send me a messege</div>
            <form id="form" action="">
              <input
                id="email"
                onChange={handleForm}
                type="email"
                placeholder="Your email"
              />
              <input
                id="subject"
                onChange={handleForm}
                type="text"
                placeholder="Subject"
              />
              <textarea
                style={{ resize: "none" }}
                onChange={handleForm}
                placeholder="Your message"
                name=""
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              {loading ? (
                <button
                  style={{ cursor: "not-allowed", pointerEvents: "none" }}
                  className="loading_btn"
                >
                  <div>wait</div>
                  <div className="loading_"></div>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    submitHandle(e);
                  }}
                >
                  Send Messege
                </button>
              )}
            </form>
          </div>
          <div id="cont">
            <div>
              <span className="material-icons-outlined">room</span>{" "}
              <div>Patna, Chhoti Pahari, 800007</div>
            </div>
            <div>
              <span className="material-icons">call</span>{" "}
              <div>+91 7903259049</div>
            </div>
            <div>
              <span className="material-icons-outlined">mail_outline</span>{" "}
              <div>navneetharsh3@gmail.com</div>
            </div>
            <div id="social">
              <div
                id="linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/navneet-kumar-77186721b/",
                    "_blank"
                  )
                }
              >
                <svg
                  id="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  className="global-nav__logo"
                >
                  <g>
                    <path
                      d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                      fill={theme ? "black" : "white"}
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                id="git"
                onClick={() =>
                  window.open("https://github.com/anoxco0", "_blank")
                }
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    fill={theme ? "black" : "white"}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}