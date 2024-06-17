import styled from 'styled-components';

export const RecipeDetailContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ff5722;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ff5722;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      background-color: #ffe0b2;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;
