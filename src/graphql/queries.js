/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    vidUrl
    owner
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    author {
      id
      email
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
      owner
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
      owner
      comments {
        nextToken
      }
      author {
        id
        email
        username
        bio
        profileUrl
        tags
        owner
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
      owner
      comments {
        nextToken
      }
      author {
        id
        email
        username
        bio
        profileUrl
        tags
        owner
      }
    }
    owner
    author {
      id
      email
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
      owner
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
        owner
      }
      owner
      author {
        id
        email
        username
        bio
        profileUrl
        tags
        owner
      }
    }
    nextToken
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
      email
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
      owner
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    username
    bio
    profileUrl
    tags
    posts {
      items {
        id
        title
        vidUrl
        owner
      }
      nextToken
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const getUserByEmail = `query GetUserByEmail(
  $email: String
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
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
      owner
    }
    nextToken
  }
}
`;
