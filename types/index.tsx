import { ReactNode } from "react";

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

export type TypeFilterRecommendations =
  typeRecommendedeDetail["recommendations"];

export type TypeSearchTerm = {
  location: [{ location: string }];
};

export type RecommendationItem = {
  addresses: string[];
  businessContact: string;
  businessId: string;
  businessName: string;
  personName: string;
  reasonsOfRecommendation: string[][];
  recommendationCount: number;
  serviceType: string;
};

export type TabItem = {
  title: string;
  icon: ReactNode;
};

export type TrustedData = {
  num: string;
  text: string;
  textColor: string;
};

export type ApiErrorResponse = {
  message: string;
  errors?: Record<string, string[]>;
};

export type TypeRecommendationOption = {
  value: string;
  label: string;
};

export type TypeStatesData = {
  addresses: number;
  businesses: number;
  recommendations: number;
};
