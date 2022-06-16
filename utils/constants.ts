export const CODE_FETCHING = {
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
  },
  error: {
    unknownUrl: 404,
    denieded: 429,
    Unauthorized: 401,
    UnprocessableEntity: 422,
  },
};

export const ROLES = {
  admin: "1",
  client: "2",
};
