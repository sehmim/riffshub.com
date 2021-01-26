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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
