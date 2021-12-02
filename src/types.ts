export interface ViewerDetails {
  viewer: {
    avatarUrl: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    websiteUrl: string;

    repositories: {
      id: string;
      name: string;
      stargazerCount: number;
      forkCount: number;
      isPrivate: boolean;
      updatedAt: Date;
      url: string;
      description: string;

      languages: {
        id: string;
        name: string;
        color: string;
      }[];

      repositoryTopics: {
        topic: {
          name: string;
        };
      }[];
    }[];
  };
}

export interface ViewerDetailsVars {
  first: number;
  orderBy: {
    field: string;
    direction: string;
  };
}
