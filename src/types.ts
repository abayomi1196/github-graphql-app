export interface ViewerDetails {
  viewer: {
    avatarUrl: string;
    login: string;
    name: string;
    location: string;
    createdAt: Date;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;
      nodes: {
        id: string;
        name: string;
        stargazerCount: number;
        forkCount: number;
        isPrivate: boolean;
        updatedAt: Date;
        url: string;
        description: string;

        languages: {
          nodes: {
            id: string;
            name: string;
            color: string;
          }[];
        };

        repositoryTopics: {
          topic: {
            name: string;
          };
        }[];
      }[];
    };
  };
}

export interface ViewerDetailsVars {
  first: number;
  orderBy: {
    field: string;
    direction: string;
  };
  languagesOrderBy: {
    direction: string;
    field: string;
  };
}
