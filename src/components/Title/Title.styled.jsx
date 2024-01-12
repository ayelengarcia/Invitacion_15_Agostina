import styled from "styled-components";

export const Title = styled.div`
  height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(/assets/fondo.png);
  background-size: cover;
  

  animation: fadeIn 1 1s ease-out;

  .light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.x1{
  animation: floatUp 4s infinite linear;
  transform: scale(1.0);
}

.x2{
  animation: floatUp 7s infinite linear;
  transform: scale(1.6);
  left: 15%;
}

.x3{
  animation: floatUp 2.5s infinite linear;
  transform: scale(.5);
  left: -15%;
}

.x4{
  animation: floatUp 4.5s infinite linear;
  transform: scale(1.2);
  left: -34%;
}

.x5{
  animation: floatUp 8s infinite linear;
  transform: scale(2.2);
  left: -57%;
}

.x6{
  animation: floatUp 3s infinite linear;
  transform: scale(.8);
  left: -81%;
}

.x7{
  animation: floatUp 5.3s infinite linear;
  transform: scale(3.2);
  left: 37%;
}

.x8{
  animation: floatUp 4.7s infinite linear;
  transform: scale(1.7);
  left: 62%;
}

.x9{
  animation: floatUp 4.1s infinite linear;
  transform: scale(0.9);
  left: 85%;
}

button:focus{
  outline: none;
}

@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}

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
