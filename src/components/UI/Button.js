/* 
START - Button as regular component
*/

import styles from "./Button.module.css";

const Button = (props) => {
  console.log("[Button] rendered");

  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

/* 
END - Button as regular component
*/

/*
----------------------------------
*/

/* 
START - Button as styled component
*/

// import styled from "styled-components";

// const Button = styled.button`
//   margin-top: 0.75rem;
//   padding: 0.75rem 1.25rem;
//   width: 100%;
//   background: purple;
//   color: #fff;
//   border: none;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover,
//   &:active {
//     background: rgb(204, 96, 204);
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
//   }

//   @media (min-width: 768px) {
//     & {
//       width: auto;
//     }
//   }
// `;

// export default Button;

/* 
END - Button as styled component
*/
