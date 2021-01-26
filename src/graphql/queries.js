/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    vidUrl
    comments {
      items {
        id
        content
      }
      nextToken
    }
    author {
      id
      username
      bio
      profileUrl
      tags
      posts {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      vidUrl
      comments {
        nextToken
      }
      author {
        id
        username
        bio
        profileUrl
        tags
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      title
      vidUrl
      comments {
        nextToken
      }
      author {
        id
        username
        bio
        profileUrl
        tags
      }
    }
    author {
      id
      username
      bio
      profileUrl
      tags
      posts {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
        vidUrl
      }
      author {
        id
        username
        bio
        profileUrl
        tags
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    bio
    profileUrl
    tags
    posts {
      items {
        id
        title
        vidUrl
      }
      nextToken
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      bio
      profileUrl
      tags
      posts {
        nextToken
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
