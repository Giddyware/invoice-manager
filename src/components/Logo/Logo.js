import { images } from "../../constants";
// import { QUERIES } from "../../styles";

const Logo = (props) => {
  return (
    <a className="no-underline " href="/">
      <div {...props}>
        <img src={images.logo} alt="route to homepage" />
      </div>
    </a>
  );
};

// const Link = styled.a`
//   text-decoration: none;
//   /* color: inherit; */
//   color: white;
//   @media screen and ${QUERIES.tabletAndUp} {
//     width: 100%;
//     margin-left: 42px;
//     align-self: flex-start;
//   }
// `;

// const Wrapper = styled.h1`
//   font-size: 1.5rem;
//   font-weight: var(--font-weight-bold);
// `;

export default Logo;
