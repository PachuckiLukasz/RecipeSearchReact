import styled from 'styled-components';

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
`;

export const RecipeCard = styled.div<{ expanded: boolean | undefined }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin: 8px 0;
    font-weight: bold;
    color: #ff5722;
  }

  ${({ expanded }) =>
    expanded &&
    `
    width: 300px;
    ul {
      padding: 0;
      list-style-type: none;
    }
    li {
      margin-bottom: 8px;
      background-color: #ffe0b2;
      padding: 5px;
      border-radius: 5px;
    }
  `}
`;

export const Ingredients = styled.div`
  margin-top: 16px;
  text-align: left;

  h3 {
    margin-bottom: 8px;
    color: #ff5722;
  }

  ul {
    padding: 0;
    list-style-type: none;

    li {
      background-color: #ffe0b2;
      margin-bottom: 5px;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;
