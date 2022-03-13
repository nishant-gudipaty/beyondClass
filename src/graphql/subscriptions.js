/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      profileOwnerId
      profileOwnerUsername
      name
      profile_type
      intro
      mail
      insta
      created_at
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      profileOwnerId
      profileOwnerUsername
      name
      profile_type
      intro
      mail
      insta
      created_at
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      profileOwnerId
      profileOwnerUsername
      name
      profile_type
      intro
      mail
      insta
      created_at
      posts {
        items {
          id
          postOwnerId
          postOwnerUsername
          title
          content
          cover_photo
          attachements
          created_at
          createdAt
          updatedAt
          profilePostsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      postOwnerId
      postOwnerUsername
      title
      content
      cover_photo
      attachements
      created_at
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          comment
          created_at
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      profilePostsId
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      postOwnerId
      postOwnerUsername
      title
      content
      cover_photo
      attachements
      created_at
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          comment
          created_at
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      profilePostsId
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      postOwnerId
      postOwnerUsername
      title
      content
      cover_photo
      attachements
      created_at
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          comment
          created_at
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          likeOwnerId
          likeOwnerUsername
          createdAt
          updatedAt
          postLikesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      profilePostsId
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      comment
      created_at
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      comment
      created_at
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      commentOwnerId
      commentOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      comment
      created_at
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
      id
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      createdAt
      updatedAt
      postLikesId
      owner
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
      id
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      createdAt
      updatedAt
      postLikesId
      owner
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
      id
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        title
        content
        cover_photo
        attachements
        created_at
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        profilePostsId
        owner
      }
      createdAt
      updatedAt
      postLikesId
      owner
    }
  }
`;
