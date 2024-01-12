import styled from "styled-components";

export const Title = styled.div`
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(/assets/fondo.png);
  background-size: cover;

  .presentacion {
    color: black;
    padding-top: 30px !important;
  }

  h1 {
    font-family: "Lavishly Yours";
    line-height: 150% !important;
    font-size: 10rem !important;
    z-index: 10000;
    position: relative;
    color: white;
  }

  .años {
    position: relative;
    font-size: 7rem !important;
    top: -160px;
    z-index: 10001;
    color: #d2a84e;
  }

  .agos {
    position: relative;
    font-size: 7rem !important;
    top: -200px;
    z-index: 10001;
    color: white;
  }

  .animate__zoomIn {
    animation-duration: 4s;
  }

  .animate__backInUp {
    animation-duration: 4s;
  }

  .animate__fadeInRight {
    animation-duration: 3s;
    animation-delay: 3s;
  }

  .snow,
  .snow:before,
  .snow:after {
    position: absolute;
    top: -600px;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: radial-gradient(
        5px 5px at 180px 46px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 340px 546px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 129px 473px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 128px 572px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 392px 543px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 176px 507px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 258px 473px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 537px 150px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 390px 186px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 109px 398px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 66px 287px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 249px 7px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 86px 495px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 274px 454px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(3px 3px at 390px 297px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 386px 136px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 591px 271px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 311px 307px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 187px 79px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 390px 99px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(4px 4px at 357px 508px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        6px 6px at 187px 63px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 462px 318px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 559px 566px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 559px 504px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 34px 51px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 595px 283px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(5px 5px at 261px 303px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(4px 4px at 291px 387px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 217px 20px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 559px 48px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 556px 550px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 74px 128px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 256px 99px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 446px 486px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 359px 433px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 156px 142px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 315px 200px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 191px 355px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(6px 6px at 433px 289px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 585px 283px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(3px 3px at 177px 571px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 152px 144px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 552px 512px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 67px 238px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 89px 333px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 149px 443px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(5px 5px at 37px 429px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 558px 243px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 496px 416px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 57px 179px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 236px 272px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 301px 300px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 510px 268px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 519px 175px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 292px 573px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(4px 4px at 385px 403px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(6px 6px at 232px 174px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        5px 5px at 365px 577px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 134px 440px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 11px 562px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        4px 4px at 352px 135px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 266px 52px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 104px 260px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 178px 487px,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        3px 3px at 33px 371px,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        6px 6px at 573px 77px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        5px 5px at 190px 526px,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(5px 5px at 408px 79px, white 50%, rgba(0, 0, 0, 0)),
      radial-gradient(
        3px 3px at 553px 487px,
        rgba(255, 255, 255, 0.9) 50%,
        rgba(0, 0, 0, 0)
      );
    background-size: 600px 600px;
    animation: snow 3s linear infinite;
    content: "";
  }

  .snow:after {
    margin-left: -200px;
    opacity: 0.4;
    animation-duration: 6s;
    animation-direction: reverse;
    filter: blur(3px);
  }

  .snow:before {
    animation-duration: 9s;
    animation-direction: reverse;
    margin-left: -300px;
    opacity: 0.65;
    filter: blur(1.5px);
  }

  @keyframes snow {
    to {
      transform: translateY(600px);
    }
  }


    @media (max-width: 1000px) {
    background-image: url(/assets/fondomobile.png);
    background-size: cover;
    padding: 0px !important;

    .presentacion {
      padding: 0px !important;
    }

    h1 {
      margin: 0px !important;
      font-size: 5rem !important;
    }

    .años {
      font-size: 3rem !important;
      top: -70px;
    }

    .agos {
      font-size: 3rem !important;
      top: -100px;
  }
`;
