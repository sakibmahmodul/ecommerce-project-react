import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return(
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.896102759694!2d91.187379576017!3d23.464211899701787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f37029faff5%3A0x7d88a45fa7cb3ad0!2z4Kao4Ka_4KaJIOCmpOCmleCmpuCngOCmsCDgpqvgpr7gprDgp43gpqPgpr_gpprgpr7gprA!5e0!3m2!1sbn!2sbd!4v1745415452892!5m2!1sbn!2sbd" 
      width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xdkgoboz" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off"/>
            <input type="email" name="Email" placeholder="Email" required />
            <textarea name="messages" placeholder="Enter Your Messages" required autoComplete="off" cols="30" rows="10"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
  </Wrapper>

  )};

export default Contact;
