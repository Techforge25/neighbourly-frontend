export type typeRecommendedeDetail = {
  businessName: string;
  contact: string;
  personName: string;
  recommendations: {
    comment: string;
    createdAt: string;
    reasonsOfRecommendation: string[];
    user: {
      _id: string;
      email: string;
      address: string;
      fullName: string;
    };
  }[];
  serviceType: string;
};

export type TypeFilterRecommendations = Pick<
  typeRecommendedeDetail,
  "recommendations"
>;

export type TypeSearchTerm = {
  location: [{ location: string }];
};
