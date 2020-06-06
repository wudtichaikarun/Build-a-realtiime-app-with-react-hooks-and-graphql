import gql from "graphql-tag";

export const PIN_ADDED_SUBSCRIPTION = gql`
  subscription {
    pinAdded {
      _id
      title
      image
      content
      latitude
      longitude
      createdAt
      author {
        _id
        name
        email
        picture
      }
    }
  }
`;
