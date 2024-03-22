export const EIP_712_DOMAIN = {
  name: "BuidlGuidl Grants",
  version: "1",
} as const;

export const EIP_712_TYPES__APPLY_FOR_GRANT = {
  Message: [
    { name: "title", type: "string" },
    { name: "description", type: "string" },
  ],
} as const;

export const EIP_712_TYPES__REVIEW_GRANT = {
  Message: [
    { name: "grantId", type: "string" },
    { name: "action", type: "string" },
    { name: "txHash", type: "string" },
    { name: "txChainId", type: "string" },
  ],
} as const;

export const EIP_712_TYPES__SUBMIT_GRANT = {
  Message: [
    { name: "grantId", type: "string" },
    { name: "action", type: "string" },
    { name: "link", type: "string" },
  ],
} as const;

export const EIP_712_TYPES__REVIEW_GRANT_BATCH = {
  GrantReview: [...EIP_712_TYPES__REVIEW_GRANT.Message],
  Message: [{ name: "reviews", type: "GrantReview[]" }],
} as const;
