import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Area = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme.colors.text};

  .congratulations {
    flex: 2;
    border-radius: 1rem;
    height: 300px;
    width: 50%;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};
  }
  .subscribers-gained {
    flex: 1;
    border-radius: 1rem;
    height: 300px;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .orders-received {
    flex: 1;
    border-radius: 1rem;
    height: 300px;
    width: 50%;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};
    overflow: hidden;
  }
  .avg-sessions {
    border-radius: 1rem;
    flex: 2;
    height: 600px;
    width: 50%;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};
  }
  .support-tracker {
    width: 50%;
    border-radius: 1rem;
    height: 400px;
    width: 50%;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};
  }
  .table-clients {
    width: 100%;
    border-radius: 1rem;
    height: 500px;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.sidebar};
  }
`;
