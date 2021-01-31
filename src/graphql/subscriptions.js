/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
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
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
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
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
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
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
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
export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
