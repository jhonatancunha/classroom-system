import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin: 30px;
  /* width: 100%; */
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
  border: 1px solid #ccc;

  header{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 300px;
    min-height: 100px;

    /* url({props.background}); */

    background-image: url(${(props) => true ? (props.background) : (props.background)});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 10px 5px 5px;
  }

  header p {

    max-width: 75%;
    min-width: 220px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    margin: 15px;
    font-weight: bold;
    font-size: 1.1rem;

  }

  header p:nth-child(3){
    font-size: 0.9rem;
    font-weight: 500;
  }

  img{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-top: -2.5rem;
  margin-right: 1.2rem;
  }

  /* IMG CONFIGURATION IN THE MIDDLE */
  .whitespace {
    min-height: 150px;
    display: flex;
    justify-content: flex-end;
  }

  /* FOOTER OF CARD */

  .footerCard{
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #ccc;
  }

  .footerCard button {
    margin: 15px;
    transition: all 0.2s;
  }

  .footerCard button:hover {
    border-radius: 50%;
    background: rgba(0,0,0,0.2);
  }
`;