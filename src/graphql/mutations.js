/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
