/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
    id
    title
    vidUrl
    owner
    comments {
      nextToken
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
      nextToken
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
      nextToken
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
    }
    owner
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
    }
    owner
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
    }
    owner
  }
}
`;
