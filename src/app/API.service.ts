/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateContact: OnCreateContactSubscription;
  onUpdateContact: OnUpdateContactSubscription;
  onDeleteContact: OnDeleteContactSubscription;
};

export type CreateContactInput = {
  id?: string | null;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
};

export type ModelContactConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  type?: ModelStringInput | null;
  subtype?: ModelStringInput | null;
  otherDesc?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  and?: Array<ModelContactConditionInput | null> | null;
  or?: Array<ModelContactConditionInput | null> | null;
  not?: ModelContactConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Contact = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
};

export type DeleteContactInput = {
  id: string;
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  type?: ModelStringInput | null;
  subtype?: ModelStringInput | null;
  otherDesc?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  and?: Array<ModelContactFilterInput | null> | null;
  or?: Array<ModelContactFilterInput | null> | null;
  not?: ModelContactFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection";
  items: Array<Contact | null>;
  nextToken?: string | null;
};

export type CreateContactMutation = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactMutation = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteContactMutation = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetContactQuery = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListContactsQuery = {
  __typename: "ModelContactConnection";
  items: Array<{
    __typename: "Contact";
    id: string;
    firstName: string;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    type?: string | null;
    subtype?: string | null;
    otherDesc?: string | null;
    userId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateContactSubscription = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateContactSubscription = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteContactSubscription = {
  __typename: "Contact";
  id: string;
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  type?: string | null;
  subtype?: string | null;
  otherDesc?: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateContact(
    input: CreateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<CreateContactMutation> {
    const statement = `mutation CreateContact($input: CreateContactInput!, $condition: ModelContactConditionInput) {
        createContact(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateContactMutation>response.data.createContact;
  }
  async UpdateContact(
    input: UpdateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<UpdateContactMutation> {
    const statement = `mutation UpdateContact($input: UpdateContactInput!, $condition: ModelContactConditionInput) {
        updateContact(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateContactMutation>response.data.updateContact;
  }
  async DeleteContact(
    input: DeleteContactInput,
    condition?: ModelContactConditionInput
  ): Promise<DeleteContactMutation> {
    const statement = `mutation DeleteContact($input: DeleteContactInput!, $condition: ModelContactConditionInput) {
        deleteContact(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteContactMutation>response.data.deleteContact;
  }
  async GetContact(id: string): Promise<GetContactQuery> {
    const statement = `query GetContact($id: ID!) {
        getContact(id: $id) {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetContactQuery>response.data.getContact;
  }
  async ListContacts(
    filter?: ModelContactFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContactsQuery> {
    const statement = `query ListContacts($filter: ModelContactFilterInput, $limit: Int, $nextToken: String) {
        listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            phone
            type
            subtype
            otherDesc
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListContactsQuery>response.data.listContacts;
  }
  OnCreateContactListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContact">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateContact {
        onCreateContact {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContact">>
  >;

  OnUpdateContactListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContact">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateContact {
        onUpdateContact {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContact">>
  >;

  OnDeleteContactListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContact">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteContact {
        onDeleteContact {
          __typename
          id
          firstName
          lastName
          email
          phone
          type
          subtype
          otherDesc
          userId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContact">>
  >;
}
