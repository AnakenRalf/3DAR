import styled from 'styled-components'

export const StyledFrame = styled.div`
  background-color: #f8f8f8;
  height: 379px;
  padding: 14px;
  margin: 30px auto;

  width: 824px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .postcontentbackground {
    display: flex;
    align-items: flex-end;
    gap: 14px;
    background-color: #f8f8f8;
  }

  & .div {
    align-items: flex-end;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 33px;
    justify-content: flex-end;
  }

  & .text-wrapper {
    align-self: stretch;
    color: #000000;
    font-family: 'Inter-Bold', Helvetica;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  & .div-2 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
  }

  & .group {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 160px;
  }

  & .tag {
    left: 0;
    top: 0;
  }

  & .tagtext {
    margin-bottom: 1px;
  }

  & .overlap-group {
    background-color: #212937;
    border-radius: 9px;
    height: 20px;
    position: relative;
    width: 50px;
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 11px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 2px;
  }

  & .overlap-wrapper {
    height: 20px;
    left: 79px;
    position: absolute;
    top: 0;
    width: 83px;
  }

  & .overlap {
    background-color: #212937;
    border-radius: 9px;
    height: 20px;
    position: relative;
    width: 81px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: 'Inter-Regular', Helvetica;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .rectangle {
    flex: 1;
    flex-grow: 1;
    height: 350px;
    max-width: 50%;
    position: relative;
    object-fit: cover;
  }

  & .contentent-wrapper {
    padding-top: 0px;
  }
`
