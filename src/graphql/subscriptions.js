/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
