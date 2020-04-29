/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String!) {
    onCreateRecipe(owner: $owner) {
      id
      title
      description
      rating
      link
      owner
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String!) {
    onUpdateRecipe(owner: $owner) {
      id
      title
      description
      rating
      link
      owner
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String!) {
    onDeleteRecipe(owner: $owner) {
      id
      title
      description
      rating
      link
      owner
    }
  }
`;
