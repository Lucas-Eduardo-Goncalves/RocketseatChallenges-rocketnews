import styled from "styled-components";
import readNewsImage from "../assets/read_news.jpg";

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  .header {
    margin: 50px 0;

    img {
      width: 389px;
      height: 94px;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  .texts {
    display: flex;
    flex-direction: column;
    padding: 0 6px;
    margin-top: 42px;
    gap: 9px;

    .texts__first {
      font-size: 24px;
      line-height: 24px;
      font-weight: 600;
      color: var(--green);
    }

    .texts__second {
      font-size: 14px;
      line-height: 14px;
      font-weight: 600;
    }

    .texts__terceary {
      font-size: 14px;
      line-height: 14px;
      font-weight: 300;
    }
  }

  .inputArea {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 50px;
    height: calc(48px + 16px + 17px);

    label {
      font-weight: 600;
      color: var(--gray);
    }

    div {
      display: flex;
      align-items: center;
      height: 48px;
      width: 798px;
      position: absolute;
      top: calc(16px + 17px);

      box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);

      input {
        border: none;
        border-left: 5px solid var(--green);
        color: var(--black);
        height: 100%;
        flex: 1;
        outline: none;
        padding-left: 16px;

        ::placeholder {
          color: var(--gray);
        }
      }

      button {
        height: 48px;
        width: 48px;
        background-color: var(--purple);
        border: none;

        svg {
          font-size: 24px;
          color: var(--white);
        }
      }
    }
  }

  > a {
    padding: 0 6px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--purple);
    text-decoration: none;
    margin-top: 50px;

    svg {
      font-size: 24px;
    }
  }
`;

export const Hero = styled.aside`
  flex: 1;
  height: 100vh;

  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${readNewsImage});
`;
