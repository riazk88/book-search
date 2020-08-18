import gql from 'graphql-tag';

export const GET_USER=gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            link
            image
        }
    }
}
`;